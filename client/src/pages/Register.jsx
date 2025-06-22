import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
const baseURL = import.meta.env.VITE_BASE_URL

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [registerLoad, setRegisterLoad] = useState(false)
  const passRef = useRef(null)
  const [emptyInputs, setEmptyInputs] = useState(false)
  const [serverMsg, setServerMsg] = useState({})

  const registerUser = async (e) => {
    e.preventDefault()
    if (registerLoad) return;
    if (!name.trim() || !gender.trim() || !username.trim() || !password.trim()) {
      setEmptyInputs(true)
      setTimeout(() => {
        setEmptyInputs(false)
      }, 3000);
      return
    }
    setRegisterLoad(true)

    try {
      const res = await axios.post(`${baseURL}/auth/register`, { name, gender, username, password })
      navigate("/auth/login", {
        replace: true,
        state: {
          status: true,
          msg:'User registered successfully'
        }
      })

    } catch (err) {
      setServerMsg(err.response.data)
      setTimeout(() => {
        setServerMsg(prev => ({
          ...prev,
          err: false
        }))
        setTimeout(() => {
          setServerMsg({});
        }, 300);
      }, 3000);
      return
    } finally {
      setName("")
      setGender("")
      setUsername("")
      setPassword("")
      setRegisterLoad(false)
    }
  }
  return (
    <>
      <form
        className='flex flex-col justify-center gap-2 w-full px-7 lg:px-3'
        onSubmit={registerUser}
      >
        <input
          type="text"
          className='w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg capitalize'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />
        <select
          className={`w-full grow outline-none text-sm lg:text-base 
            ${(!gender.trim())
              ? "text-chineseViolet/70"
              : "text-eerieBlack"
            } px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg`}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled hidden>
            Gender
          </option>
          <option value="male" className='text-eerieBlack'>Male</option>
          <option value="female" className='text-eerieBlack'>Female</option>
        </select>
        <input
          type="text"
          className='w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
        />
        <div className='relative'>
          <input
            type="password"
            className='w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base text-eerieBlack pr-8 lg:pr-9 px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passRef}
          />
          <div
            className="rounded-full bg-chineseViolet h-5 w-5 absolute right-2 top-4 cursor-pointer"
            onPointerDown={() => passRef.current.type = "text"}
            onPointerUp={() => passRef.current.type = "password"}
          ></div>
        </div>
        <div className='relative'>
          <p className={`mb-1 absolute leading-3 lg:leading-5 text-sm lg:text-base font-semibold text-lightRed/70 ${(serverMsg.err) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} transition-all duration-300 ease-in-out capitalize`}>{serverMsg.msg}</p>
          <p className={`mb-1 absolute leading-3 lg:leading-5 text-sm lg:text-base font-semibold text-lightRed/70 ${(emptyInputs) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} transition-all duration-300 ease-in-out`}>All input fields are necessary</p>
        </div>
        <button
          className={`bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0 flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md w-full text-ivory font-semibold py-2 lg:py-3 lg:text-xl cursor-pointer h-11 lg:h-14 mt-3 lg:mt-5`}
          disabled={registerLoad}
        >
          {(!registerLoad)
            ? "Sign Up"
            : <PulseLoader
              color='#e8ebd1'
              size={8}
              loading={registerLoad}
            />
          }
        </button>
      </form >

      <p className='text-base lg:text-xl pt-3 lg:pt-5 flex gap-2'>
        Already a user?
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