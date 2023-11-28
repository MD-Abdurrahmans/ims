import axios from "axios"


const secure = axios.create({
  
    baseURL: 'https://ims-server-iota.vercel.app/api/v1',
    withCredentials:true,
   
})


const useAxiosSecure = () => {

  secure.interceptors.request.use((config)=>{

    
    return config;
  },(error)=>{
    

     return Promise.reject(error)
  })




    // interceptor use for response

    secure.interceptors.response.use(
      
      (response) => {
        return response;
      },
      (error) => {
        console.log("error interceptor from response", error);
        const status = error.response?.status;
        // console.log(status);
        if (status === 401 || status === 403) {
          
          // TODO:LOGOUT USER
          // instance.post("/logout");
          // return navigate('/forbidden')

         window.location.href='/forbidden';
           
        }
  
        return Promise.reject(error);
      }
    );
  


  return secure
}

export default useAxiosSecure
