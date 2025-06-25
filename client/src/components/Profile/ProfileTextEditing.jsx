import React, { useState } from 'react'
import { PulseLoader } from 'react-spinners'

const ProfileTextEditing = ({ editedUser, isEditting, serverMsg, emptyInputs, fullProfileEdit, setEditedUser, setUserAvatar }) => {

  return (
    <div className='flex flex-col w-full md:w-3/5'>
      <form onSubmit={fullProfileEdit} >
        <div className='flex flex-col gap-4 mb-1'>
          <div className="relative">
            <label className='absolute -top-2.5 lg:-top-3 left-2 lg:left-4 bg-seaSalt px-1 text-sm lg:text-base text-chineseViolet font-semibold'>Edit name</label>
            <input
              type="text"
              className={`w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base ${(isEditting) ? 'text-chineseViolet/70' : 'text-eerieBlack'} px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg capitalize`}
              placeholder='name'
              autoComplete='off'
              value={editedUser.name}
              disabled={isEditting}
              onChange={(e) => setEditedUser(prev => ({
                ...prev,
                name: e.target.value.toLowerCase()
              }))
              }
            />
          </div>
          <div className="relative">
            <label className='absolute -top-2.5 lg:-top-3 left-2 lg:left-4 bg-seaSalt px-1 text-sm lg:text-base text-chineseViolet font-semibold'>Edit username</label>
            <input
              type="text"
              className={`w-full grow outline-none placeholder:text-chineseViolet/70 placeholder:text-sm placeholder:lg:text-base ${(isEditting) ? 'text-chineseViolet/70' : 'text-eerieBlack'} px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg lowercase`}
              placeholder='Username'
              autoComplete='off'
              value={editedUser.username}
              disabled={isEditting}
              onChange={(e) => setEditedUser(prev => ({
                ...prev,
                username: e.target.value.toLowerCase()
              }))
              }
            />
          </div>
          <div className="relative">
            <label className='absolute -top-2.5 lg:-top-3 left-2 lg:left-4 bg-seaSalt px-1 text-sm lg:text-base text-chineseViolet font-semibold'>Edit gender</label>
            <select
              className={`w-full grow outline-none text-sm lg:text-base 
            ${(!editedUser.gender.trim() || isEditting)
                  ? "text-chineseViolet/70"
                  : "text-eerieBlack"
                } px-2 py-3 border-[1.5px] md:border-[1.8px] lg:border-2 border-chineseViolet rounded-lg`}
              value={editedUser.gender}
              disabled={isEditting}
              onChange={(e) => {
                const editedGender = e.target.value.toLowerCase()
                setEditedUser(prev => ({
                  ...prev,
                  gender: editedGender
                }))
                setUserAvatar(`${editedGender}_Av0`)
              }
              }
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="male" className='text-eerieBlack'>Male</option>
              <option value="female" className='text-eerieBlack'>Female</option>
            </select>
          </div>
        </div>
        <div className='relative'>
          <p className={`mb-1 absolute leading-3 lg:leading-5 text-sm lg:text-base font-semibold text-lightRed/70 ${(serverMsg.err) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} transition-all duration-300 ease-in-out capitalize`}>{serverMsg.msg}</p>
          <p className={`mb-1 absolute leading-3 lg:leading-5 text-sm lg:text-base font-semibold text-lightRed/70 ${(emptyInputs) ? 'opacity-100 top-0' : 'opacity-0 bg-seaSalt -top-2'} transition-all duration-300 ease-in-out`}>All input fields are necessary</p>
        </div>

        <button
          className={`bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0 flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md w-full text-ivory font-semibold py-2 lg:py-3 lg:text-xl cursor-pointer h-11 lg:h-14 mt-6 lg:mt-8`}
          disabled={isEditting}
        >
          {(!isEditting)
            ? "Edit Profile"
            : <PulseLoader
              color='#e8ebd1'
              size={8}
              loading={isEditting}
            />
          }
        </button>
      </form>

    </div>
  )
}

export default ProfileTextEditing