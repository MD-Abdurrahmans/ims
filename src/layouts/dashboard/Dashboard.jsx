import { Outlet } from "react-router-dom"
import Menu from "../../components/dashMenu/Menu"

import Navbar from "../../components/header/Navbar"
import Footers from "../../components/footers/Footers"
import Halmet from "../../shared/helmet/Halmet"

import useAuth from "../../hooks/useAuth"


const Dashboard = () => {
  const {user} = useAuth();
  return (
    <div className="">
         
          <Halmet title={'Dashboard'} ></Halmet>
     
          
           <Navbar/>
          
         <div className="max-w-[2520px] mx-auto  xl:px-20  ">
         <div className="grid grid-cols-12 gap-4   ">
{/* menu */} 
               <div className="md:col-span-3  max-h-[100vh] overflow-y-scroll   ">
                     <Menu/>
               </div>
               {/* content */}
               <div className="md:col-span-9 col-span-10   max-h-[100vh] overflow-y-scroll ">
               {/* <img src={bgimg} alt="" /> */}

                    <div className="my-4">

                      <h1 className="text-4xl hidden md:block text-[#06B6D4] font-bold  ">WELCOME {user? user?.displayName :'Anonymous'} </h1>
                    
                    </div>
                   <Outlet></Outlet>
               </div>

           </div>
       
         </div>
              

               <Footers/>
     

    </div>
  )
}

export default Dashboard
