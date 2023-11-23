import axios from "axios"

const secure = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
})


const useAxiosSecure = () => {
  return secure
}

export default useAxiosSecure
