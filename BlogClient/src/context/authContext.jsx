import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]= useState(JSON.parse(localStorage.getItem("user"))||null);


    const logout=async()=>{
     await axios.post('http://localhost:8080/api/v1/auth/logout')
      setCurrentUser(null);
    }
     useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
     }, [currentUser])

     return <AuthContext.Provider value={{currentUser, setCurrentUser, logout}}>{children}</AuthContext.Provider>
    
}