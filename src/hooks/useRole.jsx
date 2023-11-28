import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();


    const {data:Roles} = useQuery({

        queryKey:['usersRoles'],

        queryFn:async()=>{
 
             if(user){
                
          
               try {
                
                const res = await axiosSecure.get(`/userRole/${user?.email}`)

                return res?.data;

               } catch (error) {
                
                console.log('fething error ',error)
               }


             }
        }
    })


  return [Roles]
   
}

export default useRole
