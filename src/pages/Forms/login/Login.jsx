
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"

import { Link, useNavigate } from "react-router-dom";
import { FaGofore } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Login = () => {
    const {signIn,signInWithGoogle} = useAuth();
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
      

        alert('logIn successfully')
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

          alert('login Successfully')
          navigate('/')
        }

          }

            
        })

      }




  return (
    <div>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">


     

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password")}  placeholder="password" className="input input-bordered" required />
          <label className="label">
               <p>New here ?please <Link to='/register' className="text-blue-700" >Register</Link></p>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

         <div className="divider">Or</div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-primary"> <FaGofore className="text-2xl text-white  " /> Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
