import React from 'react'

const CardDetails = ({ bg, icon, textColor, heading, caption }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center w-55 h-50 lg:w-75 lg:h-75 rounded-xl text-center shadow-[0_0_17px_rgba(0,0,0,0.25)] ${bg} ${textColor}`}
        >
            <i className={`fi fi-${icon} text-5xl lg:text-7xl`}></i>
            <p className='pt-3 text-lg lg:text-2xl font-semibold'>{heading}</p>
            <p className='pt-1 lg:pt-4 px-4 lg:px-5 text-sm lg:text-lg'>{caption}</p>
        </div>
    )
}

export default CardDetails
