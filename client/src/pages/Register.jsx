import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <p className='text-base lg:text-xl pt-3 lg:pt-5 flex gap-2'>
        Have an account?
        <span
          className='font-semibold text-pistachio hover:text-pistachio/80 cursor-pointer hover:underline underline-offset-5'
          onClick={() => navigate("/auth/login", { replace: true })}
        >
          Sign In
        </span>
      </p>
    </>
  )
}

export default Register