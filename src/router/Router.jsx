import {
    createBrowserRouter,

  } from "react-router-dom";import Root from "../layouts/Root/Root";
import Error from "../pages/404/Error";
import Register from "../pages/Forms/Register/Register";
import Home from "../pages/Home/Home";
import Login from "../pages/Forms/login/Login";
import CreateStore from "../pages/CreateStore/MAKE-STORE/CreateStore";
import PrivateRoute from "./PrivateRoute";
import WatchDemo from "../pages/watchDemo/WatchDemo";
import Dashboard from "../layouts/dashboard/Dashboard";
import DashboardHome from "../pages/dashboard/Home/DashboardHome";
import ProductManagement from "../pages/dashboard/productManagement/ProductManagement";
import AddProduct from "../pages/dashboard/addProduct/AddProduct";
import SubsCription from "../pages/dashboard/subsCription/SubsCription";
import UpdateProduct from "../pages/dashboard/updateProducts/UpdateProduct";
import SaleCollection from "../pages/dashboard/saleCollection/SaleCollection";
import CheckOut from "../pages/dashboard/checkOut/CheckOut";
import SalesSummary from "../components/dashMenu/salesSummary/SalesSummary";


  const router = createBrowserRouter([


     {
        path:'/',
        element:<Root/>,
        children:[

             {
                 path:'/',
                 element:<Home></Home>
             },

             {
                 path:'createShop',
                 element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
             },
             {
                 path:'watchDemo',
                 element:<WatchDemo></WatchDemo>
             },
             {
                 path:'register',
                 element:<Register></Register>
             },

             {
                 path:'login',
                 element:<Login></Login>
             },
        ]
     },

     {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/home',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:'/dashboard/productManagement',
                element:<ProductManagement></ProductManagement>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct/>
            },
            {
                path:'/dashboard/updateProduct/:id',
                element:<UpdateProduct/>
            },
            {
                path:'/dashboard/saleCollection',
                element:<SaleCollection/>
            },
            {
                path:'/dashboard/checkOut/:id',
                element:<CheckOut/>
            },
            {
                path:'/dashboard/salesSummary',
                element:<SalesSummary/>
            },
            {
                path:'/dashboard/subsCription',
                element:<SubsCription/>
            },
        ]
     }
  ])





  export default router;