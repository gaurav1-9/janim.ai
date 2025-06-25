import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const AvatarSelection = ({ userAvatar, avatarList, selectAvatar, gender }) => {
    return (
        <div className='flex flex-col flex-2/5 items-center justify-center gap-0 md:gap-2'>
            <div className="rounded-full border-4 md:border-6 w-30 md:w-45 lg:w-60 overflow-clip border-chineseViolet">
                <img src={`/Avatars/Square_Images/${userAvatar}.png`} alt="profile_pic" draggable={false} />
            </div>
            <div className="rounded-lg w-full flex flex-wrap justify-center items-center gap-2 p-4 min-[1900px]:px-20">
                {
                    avatarList.map((avatarName, index) => (
                        (avatarName.startsWith(gender))
                            ? <div key={index} className={`rounded-full border-2 md:border-3 lg:border-4 w-15 md:w-11 lg:w-16 xl:w-20 2xl:w-22 overflow-clip border-chineseViolet relative cursor-pointer`}
                                onClick={() => {selectAvatar(index)}}>
                                <div className={`z-5 absolute top-0 ${(userAvatar === avatarName) ? 'bg-eerieBlack/40' : ' hover:bg-eerieBlack/10'} w-full h-full flex justify-center items-center`}>
                                    <FaCheckCircle className={`text-xl md:text-2xl lg:text-4xl text-pistachio ${(userAvatar === avatarName) ? null : 'hidden'}`} />
                                </div>
                                <img src={`/Avatars/Square_Images/${avatarName}.png`} alt="options" draggable={false} />
                            </div>
                            : null

                    ))
                }
            </div>
        </div>
    )
}

export default AvatarSelection