import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"


const useAdminBoard = () => {
const axiosSecure = useAxiosSecure();

    const {data:adminStat} = useQuery({

        queryKey:['adminStats'],
        queryFn:async()=>{

             const res = await  axiosSecure.get('/adminStats')

             return res.data;
        }
    })

  return  [adminStat]
}

export default useAdminBoard
