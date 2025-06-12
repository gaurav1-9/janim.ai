import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-8 py-5 md:px-20 xl:px-40 lg:py-10 sticky top-0 w-full flex justify-between items-center bg-seaSalt pb-3 z-50">
            <Link to='/' className='cursor-default'>
                <img src="/Logo/Logo.png" alt="Logo" className='w-35 lg:w-60' draggable='false'/>
            </Link>

            <LuMenu
                className='text-3xl text-eerieBlack block lg:hidden cursor-pointer'
                onClick={() => setIsMenuOpen(true)}
            />

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-6 items-center">
                <Link to='/'><p className='text-chineseViolet cursor-pointer text-2xl hover:underline underline-offset-8'>Home</p></Link>
                <Link to='/generate'><p className='text-chineseViolet cursor-pointer text-2xl hover:underline underline-offset-8'>Generate</p></Link>
                <div className='flex gap-4'>
                    <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='' textColor='text-ivory' text='Sign In' goTo='/' otherResponsiveStyles='px-5 py-1' />
                    <Buttons bgColor='bg-seaSalt hover:border-chineseViolet/90 hover:border-chineseViolet/90' width='' textColor='text-chineseViolet' text='Sign Up' goTo='/' otherResponsiveStyles='px-5 py-1' />
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`fixed top-0 right-0 h-full w-60 bg-seaSalt shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col gap-6 p-6'>
                    <Link to='/' onClick={() => setIsMenuOpen(false)}><p className='text-chineseViolet text-xl'>Home</p></Link>
                    <Link to='/generate' onClick={() => setIsMenuOpen(false)}><p className='text-chineseViolet text-xl'>Generate</p></Link>
                    <div className='w-fit' onClick={() => setIsMenuOpen(false)}>
                        <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90' width='' textColor='text-ivory' text='Sign In' goTo='/' otherResponsiveStyles='px-5 py-2' />
                    </div>
                    <div className='w-fit' onClick={() => setIsMenuOpen(false)}>
                        <Buttons bgColor='bg-seaSalt hover:border-chineseViolet/90' width='' textColor='text-chineseViolet' text='Sign Up' goTo='/' otherResponsiveStyles='px-5 py-2' />
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className='fixed inset-0 backdrop-blur-xs z-40'
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    )
}

export default Navbar
