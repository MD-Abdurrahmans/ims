import {  createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext  = createContext(auth);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [manager,setManager]= useState(null)
    const axiosSecure = useAxiosSecure();


    
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


    // onAuthStateChange
    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          const emails = user?.email || currentUser?.email;
          setLoading(false);


                         
      if(user || currentUser){


        axiosSecure.get(`/role/${emails}`)
        .then((res)=>{
         setManager(res?.data)
         console.log('findShop', res?.data)
       
       })
     

      

      }else{

         setManager(false)
      }


          console.log("CurrentUser-->", currentUser);
         
      
   

        });
        return () => {
          return unsubscribe();
        };



   



      }, [axiosSecure, user]);


      


      if(user){

         axiosSecure.post('/jwt',{user:user?.email})
         .then((res)=>{
          console.log(res.data)
         })
      }else{

        axiosSecure.post('/logout',{user:user?.email})
        .then((res)=>{console.log(res)})
      }


      

      console.log('findShop',manager)




    const authInfo = {  user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
        manager,
      }

      // console.log('loadin',loading)
  return (


    <div>
       <AuthContext.Provider   value={authInfo}   >

           {children}
       </AuthContext.Provider>
    </div>
  )
}


AuthProvider.propTypes = {

    children:PropTypes.object,
}

export default AuthProvider





