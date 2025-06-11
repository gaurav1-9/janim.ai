import React from 'react'
import { PiCopyright } from "react-icons/pi";
import { FcLike } from "react-icons/fc";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-chineseViolet'>
            <div>
                <img src="/Logo/FooterLogo.png" alt="" />
            </div>
            <div className='flex justify-center items-center gap-1 text-ivory text-sm lg:text-2xl pb-5 lg:pb-10 pt-10 lg:pt-20'>
                <PiCopyright className='text-lg' />
                <p>{year}, Made with</p>
                <FcLike />
                <p> by Gaurav Kumar Das</p>
            </div>
        </div>
    )
}

export default Footer
