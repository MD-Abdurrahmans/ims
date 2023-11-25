import { useParams } from "react-router-dom"
import useProducts from "../../../hooks/useProducts"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { jsPDF } from "jspdf";
import { useState } from "react";

const CheckOut = () => {
  const axiosSecure = useAxiosSecure();
  const [pay,setPay] = useState(true)
  const [pdf,setpdf] = useState(null);
  const doc = new jsPDF();
 const params =  useParams();
    const [product,refetch] =useProducts();
 console.log(params)
const finding =   product?.find((product)=>product._id === params.id)

console.log(finding)


const handlePaid = ()=>{
const discount = (parseFloat(finding?.productDiscount * finding?.sellingPrice))/100;
  const getPaid = {
    productName: finding.productName,           
    productDiscount: finding.productDiscount  ,
    productLocation: finding.productLocation,
    productQuantity: finding.productQuantity,
    ProductionCost: parseInt(finding.ProductionCost),
    productImage: finding.productImage,
    sellingPrice:(parseFloat(finding.sellingPrice - discount)),
    shopId:(finding.shopId),
    itemId:finding._id,
    addDate: new Date(),

  }

  axiosSecure.post('/saleProduct',getPaid).then((res)=>{

    console.log(res)

      if(res.data){
        const pdf =     doc.text(`
        productImage:${finding?.productImage}
        ProductName: ${finding.productName},
        productDiscount:${finding.productDiscount}
         productLocation: ${finding?.productLocation}
         productQuantity:${finding?.productQuantity}
         sellingPrice:${finding?.sellingPrice}
         Date: ${new Date().getDate()}

          `, 10, 10)
  doc.save("a4.pdf");
        setPay(false)
        setpdf(pdf)
        refetch()

      }

  })

 

}





  return (
    <div>


{
  pay && 

  <>
  
  <div className="flex flex-col max-w-full p-6 dark:bg-gray-900 dark:text-gray-100">
	<img src={finding?.productImage} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
	<div>
		<h2 className="text-xl font-semibold">Name:{finding?.productName}</h2>
		<h2 className="text-xl font-semibold">Location:{finding?.productLocation}</h2>
		<h2 className="text-xl font-semibold">Price: ${finding?.sellingPrice}</h2>
		<h2 className="text-xl font-semibold">Quantity available:{finding?.productQuantity}</h2>
		<h2 className="text-xl font-semibold">Discount:{finding?.productDiscount
}%</h2>

		<p>Description:{finding?.productDescription}</p>
	</div>

     <div>
        <button  onClick={handlePaid} className="btn w-full"> Get Paid</button>
     </div>
</div>


  </>
}



    </div>
  )
}

export default CheckOut
