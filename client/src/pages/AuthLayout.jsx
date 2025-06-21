import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-screen w-screen justify-center items-center'>
      <div className='hidden lg:flex-3/5 h-full lg:flex flex-col justify-center items-center pl-20'>
        <img src="/Fingerprint-bro.png" alt="" className='h-7/9'/>
      </div>

      <div className='lg:flex-2/5 h-screen flex flex-col justify-center lg:items-start pb-20 lg:pb-0'>
        <div className="flex flex-col items-center justify-center h-full w-screen lg:w-3/5">
          <img src="/Logo/Logo.png" alt="Logo" className='w-55 lg:w-65 mb-10' draggable='false' />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout