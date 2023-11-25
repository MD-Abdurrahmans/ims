import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import {  useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const SubsCheck = ({amount}) => {
    
     
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const[client,setClient] = useState('');
    const {user,manager} = useAuth();
    const [increase,setIncrease] = useState()
     console.log(increase)
     const [raj,setRaj]= useState(increase)
    // console.log(increase)
 const amounts = parseInt(amount);

     useEffect(()=>{

      if(amounts){
        // console.log('a', amounts)
        axiosSecure.post('/create-payment-intent',{price:amounts})
        .then((res)=>{

           console.log('useInts', res.data)
           setClient(res.data.clientSecret)
        })
      }



     },[amounts])

    const handleSubmit = async(event)=>{

        event.preventDefault();

         if(!stripe || !elements){

            return;
         }


         const card = elements.getElement(CardElement);



         if(card == null){
            return;
         }


         const {error,paymentMethod} = await stripe.createPaymentMethod({

             type: 'card',
             card
         })



          if(error){

            console.log('[error]', error);
            setError(error.message)
          }else{
            console.log('[PaymentMethod]', paymentMethod);
            setError(' ')
          }



          const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(client, {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.email || "anonymous",
                email: user?.email || "anonymous",
              },
            },
          });



           if(confirmError){
            console.log('confirm error',confirmError)
           }else{

             console.log('paymentsIntente',paymentIntent)
        

          const p =    paymentIntent.amount /100;

           
           
        //   if(p===10){
        //     setIncrease(200)
            
        //   }else if(p===20){

        //     setIncrease(450)
           
        //   }else if(p===30){

        //     setIncrease(1500)
        //   }else{
        //     setIncrease(3)
        //   }

        const limit = p===10?200: p===20?450: p===30?1500:0
           
             axiosSecure.patch(`/limitProduct/${user?.email}`,{limit:limit,balance:p})
             .then((res)=>{console.log('bowa', res.data)})

           }


    




    }

  


  return (
    <div className="my-9">
       <form onSubmit={handleSubmit}>


  <h1 className="text-3xl text-center font-bold my-6">${amount}</h1>
 <CardElement
 
 
  options={{
    style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
    
  }}}
 
 />
     <button type="submit" disabled={!stripe || !client}  className="btn btn-outline my-5 w-full"  >
        Pay
      </button>


<p className="text-red-600 text-center">{error}</p>
       </form>
    </div>
  )
}

export default SubsCheck
