import { NavLink } from "react-router-dom"
import useRole from "../../hooks/useRole"
import {  FaHistory, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineAttachMoney, MdOutlineSummarize } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { MdPlaylistAddCheckCircle,MdPayment } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import Swal from "sweetalert2";


const Menu = () => {
const [toggle,setToggle] = useState(true);
  const [Roles] = useRole();
  const {user,manager,logOut} = useAuth();

  // console.log(Roles)


  // handle logout 


  const handleLogout  = ()=>{

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


console.log(toggle)


   

  return (

    <>

{/* small device for drawer nav */}


  
  {/* large device */}
<div>
  


<div onClick={ ()=> setToggle(!toggle)} className="fixed block  md:hidden z-40 ml-8 mt-2 ">
    
<button  className="" ><FaList className="text-3xl text-[#1D4ED8] "/></button>
</div>




{/* smaill  */}
<div className={`absolute w-full md:hidden  md:relative md:w-full z-30 bg-[#1E40AF]  ${toggle?'-translate-x-full':'translate-x-0'}   text-white flex flex-col md:px-5   min-h-screen space-y-5  md:text-center`}>




{/* admin route only  */}
{
  Roles?.role == 'admin' && <>

           <div>
           <div className="avatar flex my-4 flex-col items-center justify-center">
  <div className="w-24 mask mask-hexagon">
    <img src={Roles?.image} />

  </div>
  <div className="badge badge-white badge-outline  w-[100px] my-5  ">{Roles?.role}</div>
</div>
           </div>
           <div className="divider text-white bg-white h-1"></div>

           
         <NavLink to='/dashboard/manageShop' className='hover:underline font-bold flex items-center gap-2 justify-center'  ><FaShop className="md:text-3xl"/>  Mange Shop</NavLink>
         <NavLink to='/dashboard/adminSaleSummary' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <MdOutlineAttachMoney className="md:text-3xl" />  Sale Summary</NavLink>
         <NavLink to='/dashboard/users  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaUsers className="md:text-3xl"></FaUsers> Users</NavLink>

         <div className="divider text-white bg-white h-1"></div>

         <NavLink to='/  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaHome className="md:text-3xl"></FaHome>Go Home</NavLink>


         <div className="divider text-white bg-white h-1"></div>
 
 <button onClick={handleLogout} className="flex items-center gap-2 justify-center font-bold">
<TbLogout2 className="text-2xl"/>
LOGOUT
</button>
  

  </>
}


{/* manager routes only  */}

        
         {
          Roles?.role == 'manager' && 
          <>


<div className="avatar flex my-4 flex-col items-center justify-center">
  <div className="w-24 mask mask-hexagon">
    {/* <img src={Roles?.image} /> */}
    <img src={manager?.shopLogo} />

  </div>
  <div className="badge badge-white badge-outline  w-[100px] my-5  ">{Roles?.role}</div>
</div>


<div className="divider text-white bg-white h-1"></div>

           {/* <NavLink to='/dashboard/home' className='hover:underline' >Home</NavLink> */}
        
         <NavLink     to='/dashboard/productManagement' className='hover:underline font-bold flex  items-center gap-2 justify-center'  ><FaShop className="md:text-3xl"/> Product manage</NavLink>
 
         <NavLink    to='/dashboard/saleCollection' className='hover:underline  font-bold flex  items-center gap-2 justify-center'> <MdPlaylistAddCheckCircle className="md:text-3xl"/> Sale Collection</NavLink>
         <NavLink    to='/dashboard/subsCription' className='hover:underline  flex  items-center gap-2 justify-center' ><MdPayment className="md:text-3xl" /> Subscription </NavLink>
         <NavLink    to='/dashboard/salesSummary' className='hover:underline flex  items-center gap-2 justify-center' > <MdOutlineSummarize className="md:text-3xl"/> Sales Summary</NavLink>
         <NavLink    to='/dashboard/salesHistory' className='hover:underline flex  items-center gap-2 justify-center' > <FaHistory className="md:text-2xl"/> Sales History</NavLink>
         

         <div className="divider text-white bg-white h-1"></div>
         <NavLink to='/  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaHome className="md:text-3xl"></FaHome>Go Home</NavLink>

         <div className="divider text-white bg-white h-1"></div>
 
         <button onClick={handleLogout} className="flex items-center gap-2 justify-center font-bold">
    <TbLogout2 className="text-2xl"/>
  LOGOUT
</button>
         
          </>
         }


    </div>

{/* large */}

<div className="hidden md:block  ">
<div className='text-white flex py-10 flex-col bg-[#1E40AF]  md:px-5   min-h-screen space-y-5  md:text-center`'  >




{/* admin route only  */}
{
  Roles?.role == 'admin' && <>

           <div>
           <div className="avatar flex my-4 flex-col items-center justify-center">
  <div className="w-24 mask mask-hexagon">
    <img src={Roles?.image} />

  </div>
  <div className="badge badge-white badge-outline text-center  w-[100px] my-5  ">{Roles?.role}</div>
</div>
           </div>
           <div className="divider text-white bg-white h-1"></div>

           
         <NavLink to='/dashboard/manageShop' className='hover:underline font-bold flex items-center gap-2 justify-center'  ><FaShop className="md:text-3xl"/>  Mange Shop</NavLink>
         <NavLink to='/dashboard/adminSaleSummary' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <MdOutlineAttachMoney className="md:text-3xl" />  Sale Summary</NavLink>
         <NavLink to='/dashboard/users  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaUsers className="md:text-3xl"></FaUsers> Users</NavLink>

         <div className="divider text-white bg-white h-1"></div>

         <NavLink to='/  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaHome className="md:text-3xl"></FaHome>Go Home</NavLink>


         <div className="divider text-white bg-white h-1"></div>
 
 <button onClick={handleLogout} className="flex items-center gap-2 justify-center font-bold">
<TbLogout2 className="text-2xl"/>
LOGOUT
</button>
  

  </>
}


{/* manager routes only  */}

        
         {
          Roles?.role == 'manager' && 
          <>


<div className="avatar flex my-4 flex-col items-center justify-center">
  <div className="w-24 mask mask-hexagon">
    {/* <img src={Roles?.image} /> */}
    <img src={manager?.shopLogo} />

  </div>
  <div className="badge badge-white text-center badge-outline  w-[100px] my-5  ">{Roles?.role}</div>
</div>


<div className="divider text-white bg-white h-1"></div>

           {/* <NavLink to='/dashboard/home' className='hover:underline' >Home</NavLink> */}
        
         <NavLink to='/dashboard/productManagement' className='hover:underline font-bold flex  items-center gap-2 justify-center'  ><FaShop className="md:text-3xl"/> Product manage</NavLink>

         <NavLink to='/dashboard/saleCollection' className='hover:underline  font-bold flex  items-center gap-2 justify-center'> <MdPlaylistAddCheckCircle className="md:text-3xl"/> Sale Collection</NavLink>
         <NavLink to='/dashboard/subsCription' className='hover:underline  flex  items-center gap-2 justify-center' ><MdPayment className="md:text-3xl" /> Subscription </NavLink>
         <NavLink to='/dashboard/salesSummary' className='hover:underline flex  items-center gap-2 justify-center' > <MdOutlineSummarize className="md:text-3xl"/> Sales Summary</NavLink>
         <NavLink to='/dashboard/salesHistory' className='hover:underline flex  items-center gap-2 justify-center' > <FaHistory className="md:text-2xl"/> Sales History</NavLink>
         

         <div className="divider text-white bg-white h-1"></div>
         <NavLink to='/  ' className='hover:underline  flex items-center gap-2 justify-center font-bold' > <FaHome className="md:text-3xl"></FaHome>Go Home</NavLink>

         <div className="divider text-white bg-white h-1"></div>
 
         <button onClick={handleLogout} className="flex items-center gap-2 justify-center font-bold">
    <TbLogout2 className="text-2xl"/>
  LOGOUT
</button>
         
          </>
         }


    </div>
</div>

</div>
  

    </>
  )
}

export default Menu
