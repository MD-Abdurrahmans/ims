import {  useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";


const useSales = () => {
const axiosSecure = useAxiosSecure();
const {user,manager} = useAuth();
    const {data:salesProducts} = useQuery({

         queryKey:['selling'],
         queryFn: async()=>{

            const res = await  axiosSecure.get(`/sales/${manager?._id}`)
            return res.data

         }
    })


  return [salesProducts]
}

export default useSales
