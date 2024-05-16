import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const [inputs, setInputs]=useState({
    email:"",
    password:""
  })
  console.log(inputs)
  const [err, setErr]= useState(null)
  const [login, setLogin]= useState(null)

  
  const handleChange= (e)=>{
    setInputs(prev=> ({
      ...prev, [e.target.name]:e.target.value
    }))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res = await  axios.post('http://localhost:8080/api/v1/auth/login', inputs)
      if (res) {
        console.log(res.data.message)
        setLogin(res.data.message)
        navigate("/")
        
       
       
      }

    } catch (error) {

      setErr(error.response.data.message)
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-3">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <form className="flex flex-col items-center justify-center gap-6 p-6 bg-zinc-100">
          <input type="text" placeholder="Enter email" name='email' className="px-6 py-2 rounded-md" onChange={handleChange}/>
          <input type="password" placeholder="Enter password" name="password" className="px-6 py-2 rounded-md" onChange={handleChange} />
          <button onClick={handleSubmit} className="bg-gray-800 px-6 py-2 rounded-md text-white font-medium
          hover:bg-gray-950 duration-300">Login</button>
          {login && <span className="text-teal-600 text-base">{login}</span>}
          {err && <span className="text-red-600 text-base">{err}</span>}
          <span className="text-base italic">Don't have account <Link to="/register" className="text-blue-700">register</Link></span>
        </form>
      </div>
    </>
  );
}

export default Login;
