
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"

import { Link, useNavigate } from "react-router-dom";
import { FaGofore } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Halmet from "../../../shared/helmet/Halmet";
import Lottie from "lottie-react";
import loginLog from '../../../assets/login.json';
import { Audio, ThreeCircles } from  'react-loader-spinner'
import { SiSpinrilla } from "react-icons/si";
import toast from "react-hot-toast";
const Login = () => {
    const {signIn,signInWithGoogle,loading,user} = useAuth();
const axiosSecure = useAxiosSecure();

const navigate = useNavigate();
// console.log('user',user)
    const {
        register,
        handleSubmit,
 
      } = useForm()
    
      const onSubmit = async(data) =>{



     const result =await    signIn(data.email,data.password)
   


      if(result.user.email){
      

        toast.success('Successfully LoggedIn')
        navigate('/')
      }


      }



      const handleGoogle = ()=>{


        signInWithGoogle()
        .then( async(result)=>{


          
          if(result.user?.email){
           const email =result.user?.email;
            const userInfo ={
            
              name:result.user?.displayName,
               image:result.user?.photoURL,
              email:email,
                role: 'guest',

            }

        const res = await     axiosSecure.post(`/users/${email}`,userInfo)

        //  console.log(res.data)
         if(res.data.acknowledged){


           toast.success('Successfully LoggedIn')
          navigate('/')
        }

          }

            
        })

      }


      if(user?.email){

        return navigate('/')
      }



  return (
    <div  className="loginBg"  >
          <Halmet title={'Login'} ></Halmet>

   <div className="hero min-h-screen text-white ">
  <div className="hero-content flex-col   lg:flex-row-reverse">

  <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    <div className="text-center lg:text-left">

      <Lottie className="max-w-xl mx-auto" animationData={loginLog} ></Lottie>
      {/* <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 max-w-md mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>


    <div className="card shrink-0 w-full max-w-sm shadow-2xl  ">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body border ">


     

        <div className="form-control">
          <label className="label">
            <span className="text-white font-bold label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input text-black input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold label-text">Password</span>
          </label>
          <input type="password"  {...register("password")}  placeholder="password" className="input text-black input-bordered" required />
          <label className="label">
               <p>New here ?please <Link to='/register' className="text-blue-700" >Register</Link></p>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn bg-[#0284C7] text-white border-0 "> {loading? <SiSpinrilla className="text-2xl animate-spin  " />:''}  Login</button>
        </div>

         <div className="divider "> Or </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn  bg-[#0284C7] text-white"> <FaGofore className="text-2xl text-white  " /> Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
