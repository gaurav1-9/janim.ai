import React from 'react'

const GenerateHeading = () => {
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col text-eerieBlack'>
            <p className='font-semibold text-3xl lg:text-4xl xl:text-5xl w-65 md:w-full xl:w-290'>
                From Curiosity to Challenge: AI-Powered Quizzes Crafted Instantly for <span className='text-pistachio font-extrabold'>YOU!</span>
            </p>
            <div className='text-base xl:text-xl 2xl:text-3xl pt-2 xl:pt-5 w-60 md:w-full'>
                <p className='leading-5 lg:leading-7'>Fasten your seatbelt for a knowledge drive...</p>
                <p> Choose from any topics around the world.</p>
            </div>
        </div>
    )
}

export default GenerateHeading
