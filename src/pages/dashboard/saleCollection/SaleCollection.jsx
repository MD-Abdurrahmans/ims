import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Halmet from "../../../shared/helmet/Halmet";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { FaSearch } from "react-icons/fa";
import { GiSwordSpin } from "react-icons/gi";


const SaleCollection = () => {
  const axiosSecure = useAxiosSecure();
 const [searches,setSearches] = useState();
 const [ss,setss] = useState()
 const [loadings,setLoadings] = useState(null);
 const  [products,,,isLoading] = useProducts();
    
    // console.log(products)
    //    console.log(ss)

    useEffect(()=>{
     
     if(searches){
   
      axiosSecure.get(`/products?search=${searches}`)
      .then((res)=>{
      //  console.log(res.data)
      
       setss(res.data)
      
      })
     }
    },[axiosSecure,searches])

    // handle search
// console.log('ss',ss)
// console.log('products',products)

    const handleSearch = (e)=>{

    e.preventDefault()

      const searchText = e.target.search.value;
      setSearches(searchText)
      // console.log(searchText)
    }

   if(loadings){

        return <div><GiSwordSpin className="text-5xl flex  justify-center items-center min-h-full  text-center animate-spin  text-[#1D4ED8] " /></div>
      }


  return (
    <div>
          <Halmet title={'saleCollection'} ></Halmet>

     
       <div className="my-8">
        <SectionTitle heading={'Sale Collection'} subHeading={'Search by Id'}></SectionTitle>
       </div>

         <div className="my-7">
             <form  onSubmit={handleSearch} className="flex">
             <input name="search" type="search" placeholder="Search "  className="border p-2 max-w-md" id="" />
             <button type="submit" className="bg-yellow-400 p-3  text-white"><FaSearch className=""/></button>
            
             </form>
         </div>



         {/* product section */}


         <div>
         <div className="">
  <table className="table">
    {/* head */}
    <thead className="bg-yellow-400 text-white">
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



  ss?   ss?.map((product)=><>
<tr className="hover:bg-slate-400  hover:text-white">
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
  <button className="btn btn-sm bg-[#16A34A] border-0 text-white"> Process to 
</button>
</Link>
</td> 

</tr>

  </>)

  :


  products?.map((product)=><>
  <tr  key={product?._id} className="hover:bg-slate-400  hover:text-white">
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
    <button className="btn bg-[#16A34A] border-0 text-white  btn-sm"> Process to
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
