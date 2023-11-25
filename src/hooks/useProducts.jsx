import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";


const useProducts = () => {
const axiosSecure = useAxiosSecure();
const {manager} = useAuth();
    const {data:Products,refetch ,isLoading} = useQuery({
         queryKey:['products'],
         queryFn: async()=>{
            const res = await axiosSecure.get(`/products/${manager?.OwnerEmail}`)
            return res.data;
         }
    })

  return [Products,refetch ,isLoading]
}

export default useProducts
