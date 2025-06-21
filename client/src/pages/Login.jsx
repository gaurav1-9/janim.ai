import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate(); // ✅ Correct place to use the hook

  return (
    <>
      <form action="" className='flex flex-col justify-center gap-2 w-full px-7 lg:px-3'>
        <input
          type="text"
          className='w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg'
          placeholder='Username'
        />
        <div className='relative'>
          <input
            type="password"
            className='w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack pr-8 lg:pr-9 px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg'
            placeholder='Password'
          />
          <div className="rounded-full bg-chineseViolet h-5 w-5 absolute right-2 top-4"></div>
        </div>
        <p className='mb-1 invisible leading-3 lg:leading-5 text-sm lg:text-base font-semibold text-lightRed/70'>Invalid Credentials</p>
        <button className={`bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0 flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md w-full text-ivory font-semibold py-2 lg:py-3 lg:text-xl cursor-pointer`}>
          Log In
        </button>
      </form>

      <p className='text-base lg:text-xl pt-3 lg:pt-5 flex gap-2'>
        New User?
        <span
          className='font-semibold text-pistachio hover:text-pistachio/80 cursor-pointer hover:underline underline-offset-5'
          onClick={() => navigate("/auth/register", { replace: true })}
        >
          Sign Up
        </span>
      </p>
    </>
  )
}

export default Login
