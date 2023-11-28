import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import useRole from "../hooks/useRole";
import Lottie from "lottie-react";
import spiner from'../assets/loading.json';



const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();
    const [Roles] = useRole();
const location = useLocation();


if(loading){
    return <div className="max-w-md mx-auto"><Lottie animationData={spiner}></Lottie></div>
 }



    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} ></Navigate>
    

    
}

export default PrivateRoute
