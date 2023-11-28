import { useForm } from "react-hook-form"
import Container from "../../../shared/Container"
import useAuth from "../../../hooks/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import upload from "../../../shared/upload";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../shared/helmet/Halmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { FaShopLock } from "react-icons/fa6"
import { GiSpinningBlades } from "react-icons/gi";
const CreateStore = () => {
  const {user,loading} =useAuth();
  const axiosSecure =useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,reset ,
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
        shopDescription:data?.shopDescription,
        addLimit:0,
        saleLimit:1,
     }
  const  res =  await  axiosSecure.post(`/createShop/${user?.email}`,shopInfo)

     console.log(data)
     console.log('createShop', res.data)
 
       
             if(res.data?.message){
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Can Only One Shop created",
                
              });
             }else{
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully Shop Created ",
                showConfirmButton: false,
                timer: 1500
              });
             }
             reset()
              return navigate('/dashboard')
              // alert(res.data?.message?'Only Can  One Shop created':'Created Shop')


     }


   
  }

  return (
    <div className="bg-slate-300 bg-opacity-40">
   

   <Halmet title={'Create Store'} ></Halmet>
    

    <Container>


 <div className="py-10"> 
  <SectionTitle heading={'Create A Shop'} subHeading={'MONITOR YOUR SHOP'}></SectionTitle>
 </div>


 <div className="max-w-md mx-auto  flex justify-center ">
        <FaShop className="text-[100px] text-[#0EA5E9]"/>
 </div>

 
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
   <input  className="btn btn-md w-full my-4  bg-[#0EA5E9] text-white"   type="submit" value={` Create Shop `} />
 </div>
 
 </form>

    </Container>
    </div>
  )
}

export default CreateStore
