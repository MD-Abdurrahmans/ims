import {
    createBrowserRouter,

  } from "react-router-dom";import Root from "../layouts/Root/Root";

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
import SalesHistory from "../components/dashMenu/salesHistory/SalesHistory";
import ManageShop from "../pages/dashboard/Admin/manageShop/ManageShop";
import AdminSale from "../pages/dashboard/Admin/saleSummary/AdminSale";
import Users from "../pages/dashboard/Admin/users/Users";
import PrivateDashboard from "./PrivateDashboard";
import Error from "../pages/error/Error";


  const router = createBrowserRouter([


     {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
       
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
        element:<PrivateDashboard><Dashboard></Dashboard></PrivateDashboard>,
    
        children:[
            {
                path:'/dashboard/home',
                element:<PrivateRoute><PrivateDashboard><DashboardHome></DashboardHome></PrivateDashboard></PrivateRoute>
            },
            {
                path:'/dashboard/productManagement',
                element:<PrivateRoute><ProductManagement></ProductManagement></PrivateRoute>
            },
            {
                path:'/dashboard/addProduct',
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:'/dashboard/updateProduct/:id',
                element:<PrivateRoute><UpdateProduct/></PrivateRoute>
            },
            {
                path:'/dashboard/saleCollection',
                element:<PrivateRoute><SaleCollection/></PrivateRoute>
            },
            {
                path:'/dashboard/checkOut/:id',
                element:<PrivateRoute><CheckOut/></PrivateRoute>
            },
            {
                path:'/dashboard/salesSummary',
                element:<PrivateRoute><SalesSummary/></PrivateRoute>
            },
            {
                path:'/dashboard/salesHistory',
                element:<PrivateRoute><SalesHistory/></PrivateRoute>
            },
            {
                path:'/dashboard/subsCription',
                element:<PrivateRoute><SubsCription/></PrivateRoute>
            },



            // admin only 
            {
                path:'/dashboard/manageShop',
                element:<PrivateRoute><ManageShop/></PrivateRoute>
            },
            {
                path:'/dashboard/users',
                element:<PrivateRoute><Users/></PrivateRoute>
            },
    
            {
                path:'/dashboard/adminSaleSummary',
                element:<PrivateRoute><AdminSale/></PrivateRoute>
            },





        ]
     }
  ])





  export default router;