import { Navigate, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import  spiner from'../assets/loading.json';

const PrivateDashboard = ({children}) => {
const {loading,user} = useAuth();

    const [Roles] = useRole();
const location = useLocation();




    if(Roles?.role =='guest' && !user?.email ){
      
        return <Navigate to='/createShop' state={{from:location}} ></Navigate>
    }
    
    if(loading){
        return <div className="max-w-md mx-auto"><Lottie animationData={spiner}></Lottie></div>
     }

    return children
  
}

export default PrivateDashboard
