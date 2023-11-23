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
     }
  ])





  export default router;