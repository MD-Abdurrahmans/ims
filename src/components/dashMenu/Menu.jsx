import { NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <div className="w-full  bg-blue-800 text-white flex flex-col  min-h-screen space-y-5 text-center">
         <NavLink to='/dashboard/home' className='hover:underline' >Home</NavLink>
         <NavLink to='/dashboard/productManagement' className='hover:underline' >Product Managements</NavLink>
         <NavLink to='/dashboard/saleCollection' className='hover:underline' >Sale Collection</NavLink>
         <NavLink to='/dashboard/subsCription' className='hover:underline' >Subscription && Payment</NavLink>
         <NavLink to='/dashboard/salesSummary' className='hover:underline' >Sales Summary</NavLink>
    </div>
  )
}

export default Menu
