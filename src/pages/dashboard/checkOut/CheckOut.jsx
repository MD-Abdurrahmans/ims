import { useNavigate, useParams } from "react-router-dom"
import useProducts from "../../../hooks/useProducts"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
import moment from "moment";
import Halmet from "../../../shared/helmet/Halmet";
import toast from "react-hot-toast";

const CheckOut = () => {
  const axiosSecure = useAxiosSecure();
  const [pay,setPay] = useState(true)
  const [pdf,setpdf] = useState(null);
  const quantities = useRef(null)
  const doc = new jsPDF();
 const params =  useParams();
    const [product,refetch] =useProducts();
  const navigate = useNavigate();
 console.log(params)
const finding =   product?.find((product)=>product._id === params.id)

console.log(finding)


const handlePaid = (e)=>{
   e.preventDefault();
  const orderQuantity = quantities.current.value;
const discount = (parseFloat(finding?.productDiscount || 0) * parseFloat(finding?.sellingPrice || 0))/100;
const sellingPrice =(parseFloat(finding.sellingPrice) - discount);

const total = sellingPrice * orderQuantity;

  const getPaid = {
    productName: finding.productName,           
    productDiscount: finding.productDiscount  ,
    productLocation: finding.productLocation,
    productQuantity: finding.productQuantity,
    orderQuantity:parseInt(orderQuantity),
    ProductionCost: parseInt(finding.ProductionCost),
    productImage: finding.productImage,
    sellingPrice:sellingPrice,
    TotalAmount:orderQuantity?total: sellingPrice,
    shopId:(finding.shopId),
    itemId:finding._id,
    addDate: new Date(),

  }

  axiosSecure.post('/saleProduct',getPaid).then((res)=>{

    // console.log(res.data)

      if(res.data){
        // alert('Successfully paid')
        toast.success(`${<div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
      </div>}`);

        const pdf =     doc.text(`
        productImage:${finding?.productImage}
        ProductName: ${finding.productName},
        productDiscount:${finding.productDiscount}
         productLocation: ${finding?.productLocation}
         orderQuantity:${orderQuantity}
         sellingPrice:${finding?.sellingPrice}
         TotalAmount:${finding?.sellingPrice * orderQuantity}
         Date: ${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}

          `, 10, 10)
  doc.save("a4.pdf");
        setPay(false)
        setpdf(pdf)
        // refetch()


         navigate('/dashboard/saleCollection')

      }

  })

 

}





  return (
    <div>

<Halmet title={'checkOut'} ></Halmet>

{
  pay && 

  <>
  
<form onSubmit={handlePaid} >

<div className="flex flex-col max-w-full p-6 dark:bg-gray-900 dark:text-gray-100">
	<img src={finding?.productImage} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
	<div className="my-5 space-y-2">
		<h2 className="text-xl font-semibold">Name:{finding?.productName}</h2>
		<h2 className="text-xl font-semibold">Location:{finding?.productLocation}</h2>
		<h2 className="text-xl font-semibold">Price: ${finding?.sellingPrice}</h2>
		<h2 className="text-xl font-semibold">Quantity available:{finding?.productQuantity}</h2>
     <div>
      <label htmlFor=""><span className="font-bold">Quantity</span>: </label>
      <input type="number" ref={quantities} className="border text-white bg-[#1E40AF] "  />
     </div>
		<h2 className="text-xl font-semibold">Discount:{finding?.productDiscount
}%</h2>

		<p><span className="font-bold">Description</span>:  {finding?.productDescription}</p>
	</div>

     <div>
        {/* <button  onClick={handlePaid} className="btn w-full"> Get Paid</button> */}
        <button  type="submit" className="btn bg-[#1E40AF] text-white w-full"> Get Paid</button>
     </div>
</div>
</form>


  </>
}



    </div>
  )
}

export default CheckOut
