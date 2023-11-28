
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import useProducts from "../../../hooks/useProducts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../shared/helmet/Halmet";
import { FaPlus, FaRegEdit, FaTrash } from "react-icons/fa";


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
          <Halmet title={'productManagement'} ></Halmet>
          

           <div className="my-9">
           <SectionTitle heading={'PRODUCTS MANAGEMENT'} ></SectionTitle>
           </div>

            
              <div className="flex justify-between w-full items-center  px-4 py-2 border my-8"> 
              <h1 className="font-semibold">TOTAL {products?.length} Product Added</h1>
                <Link className="bg-blue-700 text-white px-4 py-2 flex items-center" to='/dashboard/addProduct'><FaPlus className="mr-1"/>  Add Product</Link>
              </div>
        

          {/* manger product list  */}


          <div>



 {
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-yellow-400  text-white">
      <tr>
         <th>Product Image</th>
        <th>product Name</th>
        <th>Product Quantity</th>
        <th> Sale Count</th>
         <th>Update</th>
         <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
 {
   products?.map((product)=><>
      <tr className="hover:bg-slate-400  hover:text-white">
     
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
       <button className=""><FaRegEdit className="text-3xl text-green-600"  /></button>
       </Link>
     </th>
     <th>
       <button onClick={()=>handleDelete(product?._id)}  className=""><FaTrash className="text-3xl text-red-600"/></button>
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
