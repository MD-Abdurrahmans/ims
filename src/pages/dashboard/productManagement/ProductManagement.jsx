
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import useProducts from "../../../hooks/useProducts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ProductManagement = () => {

const axiosSecure = useAxiosSecure();

// const {data:productList} = useQuery({

//   queryKey:['productList'],
//   queryFn: async()=>{
//     if(user?.email === manager?.OwnerEmail){

//       const res = await axiosSecure.get(`/products/${manager?.OwnerEmail}`)
//       return res.data;
//     }



    
//   },

 
// })

const [products,refetch] = useProducts();

// console.log('productListh', productList)

// hadnle delte 


const handleDelete = async(id)=>{


  const res = await  axiosSecure.delete(`/productDelete/${id}`)


  console.log('d', res)
    if(res.data.deletedCount>0){

      alert('deleted succeed')
      refetch()


    }



}




  return (
    <div>
          <div className="flex justify-between py-7">
             <h1>TOtal 3 Product Added</h1>
              <div className="flex justify-center items-center  px-4 py-2"> 
                <Link className="bg-blue-700 text-white px-4 py-2" to='/dashboard/addProduct'> Add Product</Link>
              </div>
          </div>

          {/* manger product list  */}


          <div>



 {
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
         <th>Product Image</th>
        <th>product Name</th>
        <th>Product Quantity</th>
        <th> Sale Count</th>
         <th>Actions</th>
         <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
 {
   products?.map((product)=><>
      <tr>
     
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
     {product?.saleCount} 
     </td>
     <th>
       <Link to={`/dashboard/updateProduct/${product?._id}`}>
       <button className="btn btn-ghost btn-xs">Update</button>
       </Link>
     </th>
     <th>
       <button onClick={()=>handleDelete(product?._id)}  className="btn btn-ghost btn-xs">Delete</button>
     </th>
   </tr>
   
   </>)
 }

    </tbody>
    {/* foot */}
 
    
  </table>
</div>

 }


          </div>
    </div>
  )
}

export default ProductManagement
