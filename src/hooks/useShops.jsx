import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"


const useShops = () => {
const axiosSecure = useAxiosSecure();
    const {data:shops} = useQuery({

         queryKey:['shops'],
         queryFn:async()=>{

            const res = await  axiosSecure.get('/shops');

            return res.data;
         }
    })

  return[shops]
}

export default useShops
