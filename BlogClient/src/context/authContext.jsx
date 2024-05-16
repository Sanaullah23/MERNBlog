import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]= useState(JSON.parse(localStorage.getItem("user"))||null);

   //  const login =async(inputs)=>{
   //     const res= await  axios.post('http://localhost:8080/api/v1/auth/login', inputs,)
   //     setCurrentUser(res.data.user)
   //  }
   //  const logout =async(inputs)=>{
   //       await  axios.post('http://localhost:8080/api/v1/auth/logout', inputs,)
   //      setCurrentUser(null)
   //   }

     useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
     }, [currentUser])

     return <AuthContext.Provider value={{currentUser, setCurrentUser}}>{children}</AuthContext.Provider>
    
}