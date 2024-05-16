import React, { useContext } from 'react'
import logo from "../assets/react.svg"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logout from '../pages/Logout';

function Navbar() {
  const {currentUser}= useContext(AuthContext);
  return (
    <>
      <div>
        <div className='px-11 py-6 flex justify-between'>
          <div>
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <Link to="/cat?=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link to="/cat?=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link to="/cat?=design">
              <h6>DESIGN</h6>
            </Link>
            <span className='cursor-pointer font-medium'>{currentUser?.name}</span>
            {currentUser? <Logout/>
            :<Link to="/login">
              <span className='cursor-pointer font-medium bg-teal-500 text-white px-2 py-1 rounded-md'>Login</span>
              </Link>}
            <span >
            <Link to="/write"
            className='bg-teal-500  text-white px-2 py-[16px] rounded-full
            hover:bg-teal-600 duration-300'>
              Write
            </Link>
            </span>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar