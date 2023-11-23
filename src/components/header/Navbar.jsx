import { NavLink } from "react-router-dom"
import Container from "../../shared/Container"
import useAuth from "../../hooks/useAuth"


const Navbar = () => {
const {user,logOut,manager} = useAuth();

// console.log('manager',manager)
// logout 

const handleLogout =()=>{

  logOut()

}


    const  links = <>
    
    
         
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink to='/createShop'>Create Shop</NavLink>
    </li>
    <li>
        <NavLink to='https://youtu.be/r_2PRJxCakg?si=Qm_AYtk5TwnvKy_p'  target="_blank"  >Watch Demo</NavLink>
       
    </li>



   {
     manager && 

     <li>
     <NavLink to='/dashboard'>Dashboard</NavLink>
 </li>

   }


 {
  user && 

  <li>
     <button onClick={handleLogout} className=""  >Logout</button>
</li>
 }


 {   !user &&
  

  <>
      <li>
      <NavLink to='/register'>Register</NavLink>
  </li>

   <li>
   <NavLink to='/login'>Login</NavLink>
</li>
  </>
 }


    </>

  return (
    <div className="bg-base-300">


 <Container>
 <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
           {links}
    </ul>
  </div>
 
 
  {
    user && 


    <div className="navbar-end">
      
    <span className="mr-2">{user?.displayName}</span>
<div className="avatar">
<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={user?.photoURL} />
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
