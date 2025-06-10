import React from 'react'
import Buttons from '../Buttons';


const HeroSection = () => {
    return (
        <div className='items-center flex flex-col md:flex-row lg:justify-between'>
            <div className='text-eerieBlack pt-5 lg:pt-0'>
                <p className='font-semibold text-3xl lg:text-5xl w-70 lg:w-150'>AI-powered quizzes that challenge your knowledge.</p>
                <p className='w-40 lg:w-full leading-5 pt-2 lg:pt-5 text-base lg:text-3xl'>Think you know it all? Let's find out.</p>
                
                <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='w-full lg:w-95' textColor='text-ivory' text='Generate a Quiz' goTo='/generate' otherResponsiveStyles='mt-3 lg:mt-30 py-2.5 lg:py-3 lg:text-xl'/>
            </div>
            <img src="/Book lover-bro.png" alt="" className='mt-2 w-120 lg:pt' />
        </div>
    )
}

export default HeroSection
