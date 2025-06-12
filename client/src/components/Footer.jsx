import React from 'react'
import { Link } from 'react-router-dom';
import { PiCopyright } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-chineseViolet'>
            <div className='flex justify-center md:justify-between flex-col md:flex-row-reverse md:pt-10 md:px-20 lg:px-40'>
                <Link to='/' className='cursor-default ml-8'>
                    <img src="/Logo/FooterLogo.png" alt="" className='scale-50 md:scale-80 mt-5 md:mt-0' draggable='false' />
                </Link>
                <div className='flex flex-col lg:flex-row lg:gap-30'>
                    <div className='flex flex-col px-8 lg:px-0 text-ivory'>
                        <p className='text-lg lg:text-2xl font-semibold'>Site Map</p>
                        <div className='w-35 lg:w-50 h-0.5 bg-ivory mb-2'></div>
                        <Link to='/' className='w-fit'>
                            <span className='lg:text-xl hover:underline underline-offset-4 hover:text-ivory/90'>Home</span>
                        </Link>
                        <Link to='/generate' className='w-fit'>
                            <span className='leading-5 lg:text-xl hover:underline underline-offset-4 hover:text-ivory/90'>Generate a Quiz</span>
                        </Link>
                    </div>
                    <div className='flex flex-col px-8 lg:px-0 mt-5 lg:mt-0 text-ivory'>
                        <p className='text-lg lg:text-2xl font-semibold'>Connect with the Developer</p>
                        <div className='w-59 lg:w-84 h-0.5 bg-ivory mb-2'></div>
                        <div className='flex items-center gap-1 lg:mb-1'>
                            <IoIosMail className='text-xl lg:text-2xl' />
                            <p className='lg:text-xl'>gauravkrdas19@gmail.com</p>
                        </div>
                        <div className="flex gap-2 text-2xl lg:text-3xl">
                            <a href="https://www.instagram.com/gaurav1_9/" target='_blank' className='hover:text-ivory/80'><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/gaurav-kumar-das/" target='_blank' className='hover:text-ivory/80'><FaLinkedinIn /></a>
                            <a href="https://github.com/gaurav1-9" target='_blank' className='hover:text-ivory/80'><FaGithub /></a>
                            <a href="https://gauravkrdas-portfolio.vercel.app" target='_blank' className='hover:text-ivory/80'><TbWorld /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-1 text-ivory text-sm lg:text-2xl pb-5 lg:pb-5 pt-10 lg:pt-20'>
                <PiCopyright className='text-lg' />
                <p>{year}, Made with</p>
                <FcLike />
                <p> by Gaurav Kumar Das</p>
            </div>
        </div>
    )
}

export default Footer
