import React, { useEffect, useRef, useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [avatar, setAvatar] = useState({ isDisplay: false, avatarID: null })
    const [avatarSelection, setAvatarSelection] = useState(false)
    const avatarSection = useRef(null)
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (!token) return
            try {
                const userAuth = await axios.get(`${baseURL}/auth/`, {
                    headers: {
                        Authorization: token
                    }
                });
                if (!userAuth.data.err) {
                    setAvatar({
                        isDisplay: true,
                        avatarID: userAuth.data.user.avatar,
                        gender: userAuth.data.user.gender
                    })
                }
            } catch (err) {
                localStorage.removeItem("token")
            }
        };

        checkAuth();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (avatarSection.current && !avatarSection.current.contains(event.target)) {
                setAvatarSelection(false); // 👈 close the menu
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem('token')
        setIsMenuOpen(false)
        setAvatar(
            {
                isDisplay: false,
                avatarID: null
            }
        )
        setAvatarSelection(false)
    }
    return (
        <div className="px-8 py-5 md:px-20 xl:px-40 lg:py-10 sticky top-0 w-full flex justify-between items-center bg-seaSalt pb-3 z-50">
            <Link to='/' className='cursor-default'>
                <img src="/Logo/Logo.png" alt="Logo" className='w-35 lg:w-60' draggable='false' />
            </Link>

            <LuMenu
                className='text-3xl text-eerieBlack block lg:hidden cursor-pointer'
                onClick={() => setIsMenuOpen(true)}
            />

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-6 items-center">
                <Link to='/'><p className='text-chineseViolet cursor-pointer text-2xl hover:underline underline-offset-8'>Home</p></Link>
                <Link to='/generate'><p className='text-chineseViolet cursor-pointer text-2xl hover:underline underline-offset-8'>Generate</p></Link>
                {
                    (avatar.isDisplay)
                        ? <div className='relative' ref={avatarSection}>
                            <div
                                className={`flex justify-center items-center z-10 border-3 rounded-full p-0.5 ${avatarSelection
                                    ? "border-dashed border-chineseViolet/40"
                                    : "hover:border-chineseViolet/40"
                                    } border-dashed border-chineseViolet/0 duration-300 ease-in-out`}
                                onClick={() => setAvatarSelection(!avatarSelection)}
                                title='Clcik me'
                            >
                                <div className="w-20 h-20 border-4 border-chineseViolet rounded-full overflow-clip cursor-pointer">
                                    <img
                                        src={`/Avatars/Square_Images/${avatar.gender}_Av${avatar.avatarID}.png`}
                                        alt="profilePic"
                                        draggable="false"
                                    />
                                </div>
                            </div>

                            <div
                                className={`z-10 flex flex-col gap-2 bg-seaSalt absolute right-0 rounded-xl p-2 shadow-[0_0_17px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${avatarSelection
                                    ? "top-24 opacity-100 pointer-events-auto"
                                    : "top-20 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <Link onClick={() => setAvatarSelection(false)} >
                                    <p className="text-2xl cursor-pointer rounded-lg hover:bg-chineseViolet/10 py-2 px-4 pr-10 text-chineseViolet">
                                        Profile
                                    </p>
                                </Link>
                                <p
                                    className="text-2xl cursor-pointer rounded-lg hover:bg-chineseViolet/10 py-2 px-4 pr-10 text-chineseViolet"
                                    onClick={logout}
                                >
                                    Logout
                                </p>
                            </div>
                        </div>

                        : <div className='flex gap-4'>
                            <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='' textColor='text-ivory' text='Sign In' goTo='/auth/login' otherResponsiveStyles='px-5 py-1' />
                            <Buttons bgColor='bg-seaSalt hover:border-chineseViolet/90 hover:border-chineseViolet/90' width='' textColor='text-chineseViolet' text='Sign Up' goTo='/auth/register' otherResponsiveStyles='px-5 py-1' />
                        </div>
                }
            </div>

            {/* Mobile Slide Menu */}
            <div className={`fixed top-0 right-0 h-full w-60 bg-seaSalt shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col gap-6 p-6'>
                    <Link to='/' className='w-fit' onClick={() => setIsMenuOpen(false)}><p className='text-chineseViolet text-xl'>Home</p></Link>
                    <Link to='/generate' className='w-fit' onClick={() => setIsMenuOpen(false)}><p className='text-chineseViolet text-xl'>Generate</p></Link>
                    {
                        (avatar.isDisplay)
                            ? <>
                                <Link onClick={() => setIsMenuOpen(false)}>
                                    <div className="w-18 h-18 border-3 border-chineseViolet rounded-full overflow-clip">
                                        <img src={`/Avatars/Square_Images/${avatar.gender}_Av${avatar.avatarID}.png`} alt="" />
                                    </div>
                                </Link>
                                <p onClick={logout} className='w-fit text-chineseViolet text-xl'>Logout</p>
                            </>
                            : <>
                                <div className='w-fit' onClick={() => setIsMenuOpen(false)}>
                                    <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90' width='' textColor='text-ivory' text='Sign In' goTo='/auth/login' otherResponsiveStyles='px-5 py-2' />
                                </div>
                                <div className='w-fit' onClick={() => setIsMenuOpen(false)}>
                                    <Buttons bgColor='bg-seaSalt hover:border-chineseViolet/90' width='' textColor='text-chineseViolet' text='Sign Up' goTo='/auth/register' otherResponsiveStyles='px-5 py-2' />
                                </div>
                            </>
                    }
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
