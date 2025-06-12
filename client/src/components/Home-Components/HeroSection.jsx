import React from 'react'
import Buttons from '../Buttons';


const HeroSection = () => {
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col md:flex-row md:justify-between md:items-center lg:justify-between lg:items-center xl:-mt-15 2xl:mt-0'>
            <div className='text-eerieBlack pt-5 2xl:pt-0'>
                <p className='font-semibold text-3xl lg:text-5xl w-70 lg:w-120 xl:w-150'>AI-powered quizzes that challenge your knowledge.</p>
                <p className='w-40 lg:w-full leading-5 pt-2 lg:pt-5 text-base lg:text-2xl xl:text-3xl'>Think you know it all? Let's find out.</p>
                
                <Buttons bgColor='bg-chineseViolet hover:bg-chineseViolet/90 hover:border-chineseViolet/0' width='w-full lg:w-95' textColor='text-ivory' text='Generate a Quiz' goTo='/generate' otherResponsiveStyles='mt-3 md:mt-10 lg:mt-30 py-2.5 lg:py-3 lg:text-xl'/>
            </div>
            <img src="/Book lover-bro.png" alt="" className='mt-2 md:w-100 xl:w-120' />
        </div>
    )
}

export default HeroSection
