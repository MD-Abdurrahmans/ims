import { Outlet } from "react-router-dom"
import Menu from "../../components/dashMenu/Menu"
import Container from "../../shared/Container"


const Dashboard = () => {
  return (
    <div>
        
         <Container>

           <div className="grid grid-cols-12 min-h-screen">
{/* menu */}
               <div className="col-span-2 ">
                     <Menu/>
               </div>
               {/* content */}
               <div className="col-span-10 ">

                   <Outlet></Outlet>
               </div>

           </div>
              
         </Container>

    </div>
  )
}

export default Dashboard
