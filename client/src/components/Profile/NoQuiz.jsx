import React from 'react'
import Buttons from '../Buttons'

const NoQuiz = () => {
    return (
        <div className='px-8 md:px-20 xl:px-40 flex flex-col md:flex-row md:justify-between md:items-center lg:justify-between lg:items-center relative'>
            <div className='text-eerieBlack md:mt-5'>
                <p className='font-semibold text-xl leading-5 lg:text-3xl w-70 lg:w-120 xl:w-150'>Oops...no quiz found</p>
                <p className='w-full md:w-80 lg:w-full leading-5 pt-2 lg:pt-5 text-base lg:text-xl xl:text-2xl'>Let's try out a quick quiz now and earn some points!</p>

                <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='w-full lg:w-95' textColor='text-ivory' text='Generate a Quiz' goTo='/generate' otherResponsiveStyles='mt-3 md:mt-10 py-2.5 lg:py-3 lg:text-xl hidden md:flex md:mb-10' />
            </div>
            <img src="/To do list-bro.png" alt="" className='ml-2 mt-2 w-70 md:w-70 xl:w-120 md:absolute md:right-15 lg:right-35 bottom-5 md:bottom-7' />
            <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='w-full lg:w-95' textColor='text-ivory' text='Generate a Quiz' goTo='/generate' otherResponsiveStyles='my-3 py-2.5 lg:py-3 lg:text-xl md:hidden flex' />
        </div>
    )
}

export default NoQuiz