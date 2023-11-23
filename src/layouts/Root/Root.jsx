import { Outlet } from "react-router-dom"
import Navbar from "../../components/header/Navbar"
import Footers from "../../components/footers/Footers"



const Root = () => {
  return (
    <div>

     <Navbar></Navbar>

       <div className="min-h-screen">
       <Outlet></Outlet>
       </div>

       <Footers></Footers>
    </div>
  )
}

export default Root
