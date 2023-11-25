import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import useProducts from "../../../hooks/useProducts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import upload from "../../../shared/upload";
import useAuth from "../../../hooks/useAuth";


const UpdateProduct = () => {
  const {manager,user} = useAuth();
  const[products,refetch] = useProducts();
  const params =  useParams();
  const axiosSecure = useAxiosSecure();
  // console.log('update',params)


  const updateItem = products?.find((product)=>product._id  === params.id);

  // console.log(updateItem)


  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {

    const imgUrl = await upload(data.productImage[0])
    const imageHost = imgUrl.data.data.display_url;

    if(imgUrl){

      if(user?.email === manager?.OwnerEmail){
        const   vatAmount =  (parseFloat(data.ProductionCost * 7.5))/100;

        const UpdateproductInfo  ={

          productName: data.productName,
          ProductionCost: data.ProductionCost,
          productDescription: data.productDescription             ,
          productDiscount: data.productDiscount             ,
          productLocation: data.productLocation,
          profit: data.profit,
          productQuantity: data.productQuantity,
          productImage: imageHost,
          shopId:manager._id,
          shopName:manager.shopName,
          email:user?.email,
    
    
          sellingPrice: parseFloat(data?.ProductionCost) + parseFloat(vatAmount) + parseFloat(data?.profit),
    
          addDate: new Date(),
          saleCount:0,
           
     }
      
  const res = await   axiosSecure.patch(`/updateProduct/${params.id}`,UpdateproductInfo)

  console.log('upd',res)


   if(res.data.matchedCount>0){

    alert("update products")
    refetch()
   }
      }
 
    }

  }

  return (
    <div>
     <form  onSubmit={handleSubmit(onSubmit)} >

<div className="grid md:grid-cols-2 gap-2">

{/* product Name */}
<div className="form-control">
   <label className="label">
     <span className="label-text">Product Name</span>
   </label>

   <input type="text" {...register('productName')}   className="input input-bordered" required />

 
 </div>

{/* product Image */}
<div className="form-control">
   <label className="label">
     <span className="label-text">Product Image</span>
   </label>
  <div className="grid grid-cols-12">
  <input  type="file" {...register('productImage')}   className="input input-bordered col-span-10" required />
   <img className="col-span-2 h-11 w-full object-cover "  src={updateItem?.productImage} alt="" />
 
  </div>
 </div>


{/* product Quantity */}
<div className="form-control">
   <label className="label">
     <span className="label-text">Product Quantity</span>
   </label>
   <input type="number" {...register('productQuantity')}   defaultValue={updateItem?.productQuantity} className="input input-bordered" required />
 
 </div>


{/* product Location */}
<div className="form-control">
   <label className="label">
     <span className="label-text">Product Location</span>
   </label>
   <input type="text" {...register('productLocation')}   defaultValue={updateItem?.productLocation} className="input input-bordered" required />
 
 </div>
{/* ProductionCost*/}
<div className="form-control">
   <label className="label">
     <span className="label-text">ProductionCost</span>
   </label>
   <input type="number" {...register('ProductionCost')}  defaultValue={updateItem?.ProductionCost} className="input input-bordered" required />
 
 </div>

{/* product Price*/}
<div className="form-control">
   <label className="label">
     <span className="label-text">profit </span>
   </label>
   <input type="number" {...register('profit')}  defaultValue={updateItem?.profit} className="input input-bordered" required />
 
 </div>


{/* product Discount*/}
<div  className="form-control">
<label className="label">
     <span className="label-text">product Discount:{updateItem?.productDiscount}%</span>
   </label>
   <select {...register('productDiscount')}   className="select select-bordered w-full max-w-xs">
<option  selected disabled ></option>
<option value='10'>10%</option>
<option value='20'>20%</option>
</select>
 
 </div>

{/* product Description*/}
<div className="form-control">
<label className="label">
     <span className="label-text">Product Description
</span>
   </label>

<textarea  className="border" id="" cols="5"  defaultValue={updateItem?.productDescription}  {...register('productDescription')}  rows="5"></textarea>
 
 </div>








</div>  


<div className="my-11">
<button className="btn w-full btn-outline">Update  product</button>
</div>
</form>
    </div>
  )
}

export default UpdateProduct
