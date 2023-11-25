import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts"



const SaleCollection = () => {


    const  [products] = useProducts();

  return (
    <div>

     

         <div className="max-w-md mx-auto my-7">
             <form>
             <input type="search"  className="border" id="" />
              <button className="btn btn-sm">Search</button>
             </form>
         </div>



         {/* product section */}


         <div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
         <th>Product ID</th>
         <th>Product Image</th>
        <th>product Name</th>
        <th>Product Quantity</th>
        <th> Discount</th>
         <th>SellingPrice</th>
         <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
 {
   products?.map((product)=><>
      <tr>
      <td>
     {product?._id} 
     
     </td>
     <td>
       <div className="flex items-center gap-3">
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={product?.productImage} alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
  
       </div>
     </td>
    
     <td>
     {product?.productName} 
     
     </td>
     <td>
     {product?.productQuantity} 
     </td>
    
       <td>
     {product?.productDiscount} %
        
       </td>
       <td>
     {product?.sellingPrice} 
        
       </td>

 <td>
    <Link to={`/dashboard/checkOut/${product._id}`}>
        <button className="btn btn-sm"> Sold to Customer
</button>
    </Link>
 </td>

   </tr>
   
   </>)
 }

    </tbody>
    {/* foot */}
 
    
  </table>
</div>
         </div>
   
    </div>
  )
}

export default SaleCollection
