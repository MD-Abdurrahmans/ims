import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"
import upload from "../../../shared/upload";
import { Link,  useNavigate, } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Halmet from "../../../shared/helmet/Halmet";
import Lottie from "lottie-react";
import registerLogo from'../../../assets/register.json';
import r1 from '../../../assets/r1.svg'
import toast from 'react-hot-toast';

import { RingLoader } from "react-spinners";
const Register = () => {
const {createUser,updateUserProfile} = useAuth();
const  axiosSecure = useAxiosSecure();
// TODO: NAVIGATE AFTER REGISTRATION CREATE-SHOP 
// const navigate = useNavigate();
// console.log('user',user)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const navigate = useNavigate();
      const {loading} = useAuth();
      const onSubmit = async(data) =>{
  console.log(data)
       const imgUrl = await upload(data.image[0])
       const imageHost = imgUrl.data.data.display_url;
 

        if(imgUrl){

             const result  = await   createUser(data?.email,data?.password)

              if(result.user){
             updateUserProfile(data.name,imageHost)
             .then(async()=>{
               const email = result.user?.email;
   const userInfo ={

               name:data.name,
                image:result.user?.photoURL,
                 email:email,
                role: 'guest',

             }
        const res = await     axiosSecure.post(`/users/${email}`,userInfo)

         console.log('bye', res.data)
           
               if(res.data.acknowledged){

                 toast.success('Account Created successfully')
                 navigate('/')
               }
               

             })

          
      


               
              }
        }

  
            
        



      }


  return (
    <div  style={{backgroundImage: `url(${r1})`}}>
          <Halmet title={'register'} ></Halmet>

<div className="hero min-h-screen   py-11">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
 

       <Lottie className="max-w-md mx-auto" animationData={registerLogo}></Lottie>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#374151] text-white bg-opacity-50 ">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span  className="font-bold text-white label-text">Name</span>
          </label>
          <input type="text" {...register("name")} placeholder="Name" className="input text-black input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span  className="font-bold text-white label-text">Image</span>
          </label>
          <input type="file" {...register("image")} placeholder="Image" className="input text-black input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span  className="font-bold text-white label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input text-black input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span  className="font-bold text-white label-text">Password</span>
          </label>
          <input type="password"  {...register("password",
          { required: true, minLength:6,
          
          })}  placeholder="password" className="input text-black input-bordered"  />
         
        
         {
           errors.password?.type === 'minLength' && 
            <span  className="font-bold text-white text-red-600">PASSWORD MUST BE 6 CHAR</span>
         }
         
      


          <label className="label">
               <p>Already have an account? <Link to='/login' className="font-bold text-white underline" >Login</Link></p>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn bg-[#60A5FA] " > {loading? <RingLoader size={30} className="" color="#F5F5F4" /> :''}Register </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Register
