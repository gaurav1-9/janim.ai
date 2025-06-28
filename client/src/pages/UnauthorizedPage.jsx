import React from 'react'
import { useNavigate } from 'react-router-dom'

const UnauthorizedPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center flex-col md:flex-row h-140 lg:h-130'>
            <img src="/401 Error Unauthorized-amico.png" alt="" className='w-70 lg:w-120' />
            <div className='flex justify-center items-center flex-col'>
                <p className='font-semibold text-lightRed text-xl lg:text-2xl'>Unauthorized to see content</p>
                <p className='leading-3 text-base lg:text-lg text-eerieBlack'>Please log in to your own account</p>
                <p
                    className='mt-5 lg:mt-10 bg-chineseViolet text-ivory font-semibold rounded-md px-10 py-2 hover:bg-chineseViolet/90 cursor-pointer text-base lg:text-2xl'
                    onClick={() => navigate('/', { replace: true })}
                >
                    Go back
                </p>
            </div>
        </div>
    )
}

export default UnauthorizedPage