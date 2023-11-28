import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import {  useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Halmet from "../../../shared/helmet/Halmet";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


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
const navigate = useNavigate();
     useEffect(()=>{

      if(amounts){
        // console.log('a', amounts)
        axiosSecure.post('/create-payment-intent',{price:amounts})
        .then((res)=>{

           console.log('useInts', res.data)
           setClient(res.data.clientSecret)
        })
      }



     },[axiosSecure, amounts])

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
            toast.error(error)
            setError(error.message)
          }else{
            console.log('[PaymentMethod]', paymentMethod);
            // toast.success('method payment succeed')
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
             toast.error(confirmError.message)

           }else{

             console.log('paymentsIntente',paymentIntent)
        
             toast.success(paymentIntent.status)
        
          const p =    (paymentIntent.amount /100);

          //  console.log('pppppppppp',p)
           
        //   if(p===10){
        //     setIncrease(200)
            
        //   }else if(p===20){

        //     setIncrease(450)
           
        //   }else if(p===30){

        //     setIncrease(1500)
        //   }else{
        //     setIncrease(3)
        //   }

        let limit = p===10?200 : p===20?450: p===30?1500 : 0
           console.log('lllllllll',limit)
             axiosSecure.patch(`/limitProduct/${user?.email}`,{limit:limit,balance:p})
             .then((res)=>{
              console.log('bowa', res.data)

               if(res.data?.updateLimit.modifiedCount>0 && res.data?.updateAdmin.modifiedCount>0){

                // alert('Payment successful')
                
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your Payment successful",
                  showConfirmButton: false,
                  timer: 1500
                });

                navigate('/dashboard/productManagement')
                
               }
            
            })

           }


    




    }

  


  return (
    <div className="my-9">


<Halmet title={'subCheck'} ></Halmet>
       
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
