import React from 'react'
import Cards from './Cards'

const HowItWorks = () => {
    return (
        <div className="flex flex-col py-13 bg-pistachio items-center w-full">
            <p className='w-70 lg:w-full text-3xl lg:text-5xl text-eerieBlack font-semibold text-center'>
                Here's How the <span className='text-ivory font-extrabold'>MAGIC</span> Happens
            </p>
            <p className='w-70 lg:w-180 leading-5 lg:leading-9 pt-2 lg:pt-3 text-base lg:text-3xl text-center'>Pick. Generate. Quiz. That's it - three steps and you're learning like a pro.</p>
            <Cards />
        </div>
    )
}

export default HowItWorks
