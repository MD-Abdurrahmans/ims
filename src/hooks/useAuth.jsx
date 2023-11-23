import { useContext } from "react"
import { AuthContext } from "../authProvider/AuthProvider"




const useAuth = () => {
    const useContexts = useContext(AuthContext)

  return useContexts
}

export default useAuth
