import React from 'react'
import logo from "../assets/react.svg"
function Footer() {
  return (
    <>
     <div className='bg-teal-400'>
      <div className='px-11 py-6 flex justify-center items-center gap-6'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>This is Custom Mini 📕 Blog Website Made By <span className='font-bold'>MERN Stack ♥</span></div>
      </div>
     </div>
    </>
  )
}

export default Footer