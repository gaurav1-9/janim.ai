import React from 'react'
import { IoStar } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";

const UserDetails = ({ user, editProfile }) => {
    const levels = ["Explorer", "Challenger", "Mastermind"]
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex gap-3 items-center justify-center md:justify-start'>
            <div className='rounded-full border-4 md:border-6 w-30 md:w-45 lg:w-60 overflow-clip border-chineseViolet'>
                <img src={`/Avatars/Square_Images/${user.gender}_Av${user.avatar}.png`} alt="profile pic" draggable={false} />
            </div>
            <div className='flex flex-col text-chineseViolet'>
                <p className='capitalize text-eerieBlack font-semibold text-lg leading-4'>{user.name}</p>
                <p className='leading-5'>@{user.username}</p>
                <div className='flex flex-col justify-end gap-1 pt-5 '>
                    <p className='text-[17px] font-semibold leading-3'>
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
                    <div className="flex gap-3 items-end">
                        <div className='flex gap-1'>
                            <IoStar className='text-xl text-chineseViolet' />
                            <IoStar className={`text-xl ${user.levelPoints > 10 ? 'text-chineseViolet' : 'text-platinum'}`} />
                            <IoStar className={`text-xl ${user.levelPoints > 20 ? 'text-chineseViolet' : 'text-platinum'}`} />
                        </div>

                        <p className='text-xs'>({user.levelPoints} points)</p>
                    </div>
                </div>
                <button
                    className='flex items-center justify-center bg-platinum rounded-sm text-eerieBlack font-semibold gap-1 mt-2 py-1'
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