import { useForm } from "react-hook-form"
import Container from "../../../shared/Container"
import useAuth from "../../../hooks/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import upload from "../../../shared/upload";


const CreateStore = () => {
  const {user} =useAuth();
  const axiosSecure =useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{

    const img = data.shopLogo[0];
    const imgUrl = await upload(img)
    const imageHost = imgUrl.data.data.display_url;

     if(imgUrl){
      const  shopInfo = {

        shopName:data?.shopName,
        ShopLocation:data?.ShopLocation,
        OwnerEmail:data?.OwnerEmail,
        shopLogo:imageHost,
        OwnerName:data?.shopName,
        addLimit:3,
        saleLimit:1,
     }
  const  res =  await  axiosSecure.post(`/createShop/${user?.email}`,shopInfo)

     console.log(data)
     console.log('createShop', res.data)

              alert(res.data.message)


     }


   
  }

  return (
    <div>
   

    <Container>

    <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">

                
     
<div className="grid md:grid-cols-2 gap-2 w-full ">

{/* shop Name */}
<div className="form-control ">

     <label className="label">
       <span className="label-text">Shop Name</span>
     </label>
     <input type="text" {...register("shopName")} placeholder="Shop Name" className="input w-full input-bordered" required />
   </div>

   {/* shop logo */}
<div className="form-control ">

     <label className="label">
       <span className="label-text">Shop Logo</span>
     </label>
     <input type="file" {...register("shopLogo")} placeholder="Shop Logo" className="input w-full input-bordered" required />
   </div>
   



   {/* shop Location*/}
   <div className="form-control ">

<label className="label">
  <span className="label-text">Shop Location</span>
</label>
<input type="text" {...register("ShopLocation")} placeholder=" Shop Location" className="input w-full input-bordered" required />
</div>







   {/* shop Owner Email*/}
   <div className="form-control ">

<label className="label">
  <span className="label-text">Owner Email</span>
</label>
<input type="email"  {...register("OwnerEmail")} defaultValue={user?.email} className="input w-full input-bordered" required />
</div>



   {/* shop Owner Email*/}
   <div className="form-control ">

<label className="label">
  <span className="label-text">Owner Name</span>
</label>
<input type="text" {...register("OwnerName")} placeholder="Shop  Owner Name" className="input w-full input-bordered" required />
</div>




   {/* shop description */}
   <div className="form-control    ">

<label className="label">
  <span className="label-text">Shop Description</span>
</label>

 <textarea  {...register('shopDescription')}  placeholder="Shop Description"   id="" cols="20" rows="10" className="border" ></textarea>


</div>


</div>



 <div>
   <input  className="btn btn-md w-full my-4"  type="submit" value=" Create Shop Button" />
 </div>
 
 </form>

    </Container>
    </div>
  )
}

export default CreateStore
