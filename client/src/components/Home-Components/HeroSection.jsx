import React from 'react'
import Buttons from '../Buttons';


const HeroSection = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-eerieBlack pt-5'>
                <p className='font-semibold text-3xl w-70'>AI-powered quizzes that challenge your knowledge.</p>
                <p className='w-40 leading-5 pt-2'>Think you know it all? Let's find out.</p>
                <Buttons bgColor='bg-chineseViolet' width='w-full' textColor='text-ivory' goTo='/generate' />
            </div>
            <img src="/Book lover-bro.png" alt="" className='mt-2' />
        </div>
    )
}

export default HeroSection
