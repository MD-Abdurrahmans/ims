import { NavLink } from "react-router-dom"
import Container from "../../shared/Container"
import useAuth from "../../hooks/useAuth"
import useRole from "../../hooks/useRole";
import { IoHomeSharp } from "react-icons/io5";
import { FaShopLock } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { LiaUnlockAltSolid } from "react-icons/lia"
import { GiUnlocking } from "react-icons/gi";
import Lottie from "lottie-react";
import navLogo from '../../assets/inventory.json';
import Swal from "sweetalert2";
const Navbar = () => {
const {user,logOut} = useAuth();
const [Role] = useRole();

// console.log('publick', Role.role)
// console.log('manager',manager)
// logout 


const handleLogout =()=>{

 
  Swal.fire({
    title: "Are you sure?",
    text: "You want to logout",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout"
  }).then((result) => {
    if (result.isConfirmed) {

      logOut()
      .then(()=>{
  
        // alert("logout successfull")


        Swal.fire({
          title: "Logout!",
          text: "logout done.",
          icon: "success"
        });

      })
  


    }
  });


}


    const  links = <>
    
        
    <li >
        <NavLink to='/'  className={({ isActive}) =>isActive ? "bg-[#1D4ED8] border-0 text-white " : "text-white"
  }  > <IoHomeSharp/>  Home</NavLink>
    </li>

    <li className="hover:bg-[#1D4ED8] rounded-md " >
     <NavLink to='/createShop' className={({ isActive}) =>isActive ? "bg-[#1D4ED8] border-0 text-white " : "text-white"
  }> <FaShopLock/> Create Shop</NavLink>
 </li>


    <li className="hover:bg-[#1D4ED8] rounded-md ">
        <NavLink to='https://youtu.be/r_2PRJxCakg?si=Qm_AYtk5TwnvKy_p'  className={({ isActive}) =>isActive ? "bg-[#1D4ED8] border-0 text-white " : "text-white"
  }  target="_blank"><IoIosPlayCircle/> Watch Demo</NavLink>
       
    </li>


    <li className="hover:bg-[#1D4ED8] rounded-md " >
     <NavLink to='dashboard'> <MdSpaceDashboard/> Dashboard</NavLink>
    </li>



  


 {
  user && 

  <li className="hover:bg-[#1D4ED8] rounded-md " >
     <button onClick={handleLogout} className="">  <RiLogoutBoxFill/> Logout</button>
</li>
 }


 {   !user &&
  

  <>
      <li>
      <NavLink to='/register'> <GiUnlocking className="text-2xl"/> Register</NavLink>
  </li>

   <li>
   <NavLink to='/login'> <LiaUnlockAltSolid className="text-2xl" /> Login</NavLink>
</li>
  </>
 }


    </>

  return (
    <div className=" bg-gradient-to-r from-[#1F2937] to-[#52525B] text-white">


 <Container>
 <div className="navbar  max-w-[1520px] mx-auto ">
  <div className="navbar-start bg-">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#1F2937] to-[#52525B] rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl flex items-center">
       {/* <img src={logo} className="h-14"  alt="" /> */}
       <Lottie className="h-16" loop={false} animationData={navLogo}></Lottie>
       <span className="md:text-3xl text-[#0EA5E9] font-bold ">IMS</span>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
           {links}
    </ul>
  </div>
 
 
  {
    user && 


    <div className="navbar-end hidden md:block">
      
 <div className="flex items-center">
 <span className="px-4">{user?.displayName}</span>
<div className="avatar">
<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={user?.photoURL} />
</div>
</div>
 </div>


</div>
  }

</div>
 </Container>

    </div>
  )
}

export default Navbar
