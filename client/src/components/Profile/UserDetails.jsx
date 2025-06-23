import React from 'react'
import { IoStar } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";

const UserDetails = ({ user, editProfile }) => {
    const levels = ["Explorer", "Challenger", "Mastermind"]
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex gap-3 md:gap-5 items-center justify-center md:justify-start'>
            <div className='rounded-full border-4 md:border-6 w-30 md:w-45 lg:w-60 overflow-clip border-chineseViolet'>
                <img src={`/Avatars/Square_Images/${user.gender}_Av${user.avatar}.png`} alt="profile pic" draggable={false} />
            </div>
            <div className='flex flex-col text-chineseViolet'>
                <div className="flex gap-4 items-end">
                    <p className='capitalize text-eerieBlack font-semibold text-lg md:text-3xl lg:text-4xl leading-4 md:leading-none'>{user.name}</p>
                    <PiNotePencil
                        className="hidden text-4xl cursor-pointer text-eerieBlack  bg-platinum hover:bg-platinum/80 rounded-full p-1.5 md:flex"
                        onClick={editProfile}
                    />
                </div>
                <p className='leading-5 md:leading-8 md:text-2xl'>@{user.username}</p>
                <div className='flex flex-col justify-end gap-1 pt-5 '>
                    <div className='flex gap-1 items-center'>
                        <p className='text-[17px] md:text-xl font-semibold leading-3 md:leading-none'>
                            Level:
                            <span className='pl-1'>
                                {
                                    (user.levelPoints <= 10)
                                        ? levels[0]
                                        : (user.levelPoints > 10 && user.levelPoints <= 20)
                                            ? levels[1]
                                            : levels[2]
                                }
                            </span>
                        </p>
                        <p className='text-xs md:text-base hidden md:flex'>({user.levelPoints} points)</p>
                    </div>
                    <div className="flex gap-3 items-end">
                        <div className='flex gap-1 text-xl md:text-3xl'>
                            <IoStar className='text-chineseViolet' />
                            <IoStar className={`${user.levelPoints > 10 ? 'text-chineseViolet' : 'text-platinum'}`} />
                            <IoStar className={`${user.levelPoints > 20 ? 'text-chineseViolet' : 'text-platinum'}`} />
                        </div>

                        <p className='text-xs md:hidden'>({user.levelPoints} points)</p>
                    </div>
                </div>
                <button
                    className='flex md:hidden items-center justify-center bg-platinum rounded-sm text-eerieBlack font-semibold gap-1 mt-2 py-1'
                    onClick={editProfile}
                >
                    <span>Edit Profile</span>
                    <PiNotePencil />
                </button>
            </div>
        </div>
    )
}

export default UserDetails