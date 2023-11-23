import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"
import upload from "../../../shared/upload";
import { Link, Navigate, } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

                 alert('account created')
                 Navigate('/login')
               }
               

             })

          
      


               
              }
        }

  
            
        



      }


  return (
    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" {...register("image")} placeholder="Image" className="input input-bordered" required />
        </div>


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
          <input type="password"  {...register("password",
          { required: true, minLength:6,
          
          })}  placeholder="password" className="input input-bordered"  />
         
        
         {
           errors.password?.type === 'minLength' && 
            <span className="text-red-600">PASSWORD MUST BE 6 CHAR</span>
         }
         
      


          <label className="label">
               <p>Already have an account? <Link to='/login' className="text-blue-700" >Login</Link></p>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary" >Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Register
