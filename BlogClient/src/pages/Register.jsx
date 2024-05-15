import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[100vh] gap-3">
      <h1 className="text-3xl font-bold text-gray-800">Login</h1>
      <form className="flex flex-col items-center justify-center gap-6 p-6 bg-zinc-100">
      <input type="text" placeholder="Enter name" className="px-6 py-2 rounded-md "/>
        <input type="text" placeholder="Enter email" className="px-6 py-2 rounded-md "/>
        <input type="text" placeholder="Enter password" className="px-6 py-2 rounded-md " />
        <button className="bg-gray-800 px-6 py-2 rounded-md text-white font-medium
        hover:bg-gray-950 duration-300">Login</button>
        <span className="text-red-600 text-base">this is an error</span>
        <span className="text-base italic">Have an account ? <Link to="/login" className="text-blue-700">Login</Link></span>
      </form>
    </div>
  </>
  )
}

export default Register