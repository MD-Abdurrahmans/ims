import { Outlet } from "react-router-dom"
import Menu from "../../components/dashMenu/Menu"
import Container from "../../shared/Container"
import Navbar from "../../components/header/Navbar"
import Footers from "../../components/footers/Footers"
import Halmet from "../../shared/helmet/Halmet"
import SectionTitle from "../../shared/sectionTitle/SectionTitle"
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
               <div className="md:col-span-3 min-h-screen  overflow-y-scroll ">
                     <Menu/>
               </div>
               {/* content */}
               <div className="md:col-span-9 col-span-10   min-h-screen  overflow-y-scroll ">
               {/* <img src={bgimg} alt="" /> */}

                    <div className="my-4">

                      <h1 className="text-4xl">WELCOME {user? user?.displayName :'Anonymous'} </h1>
                    
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
