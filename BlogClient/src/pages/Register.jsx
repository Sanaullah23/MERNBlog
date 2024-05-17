import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
  const navigate=useNavigate()
  const [inputs, setInputs]=useState({
    name:"",
    email:"",
    password:""
  })
  const [err, setErr]= useState(null)
  
  const handleChange= (e)=>{
    setInputs(prev=> ({
      ...prev, [e.target.name]:e.target.value
    }))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res = await  axios.post('http://localhost:8080/api/v1/auth/register', inputs)
      if (res) {
        console.log(res.data.message)
        setErr(res.data.message)
        navigate("/login")
       
      }
      setInputs({
        name:"",
        email:"",
        password:""
      })
      

    } catch (error) {
      
      console.log(error.message)
    }
  }
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[100vh] gap-3">
      <h1 className="text-3xl font-bold text-gray-800">Register</h1>
      <button onClick={()=>navigate("/")} className="text-red-500 text-[20px]"><span>X</span></button>

      <form className="flex flex-col items-center justify-center 
        gap-6 py-12 px-20 bg-zinc-100  rounded-md">
      <input type="text" placeholder="Enter name" name='name' className="px-6 py-2 rounded-md " onChange={handleChange}/>
        <input type="text" placeholder="Enter email" name='email' className="px-6 py-2 rounded-md " onChange={handleChange}/>
        <input type="password" placeholder="Enter password" name='password' className="px-6 py-2 rounded-md " onChange={handleChange}/>
        <button onClick={handleSubmit} className="bg-gray-800 px-6 py-2 rounded-md text-white font-medium
        hover:bg-gray-950 duration-300">Login</button>
       {err  && <span className="text-red-600 text-base">{err}</span>}
        <span className="text-base italic">Have an account ? <Link to="/login" className="text-blue-700">Login</Link></span>
      </form>
    </div>
  </>
  )
}

export default Register