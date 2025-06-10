import React from 'react'
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full flex justify-between items-center bg-seaSalt pt-2 pb-3">
            <img src="/Logo/Logo.png" alt="" className='w-35' />
            <LuMenu className='text-3xl text-eerieBlack' />
        </div>
    )
}

export default Navbar
