import React from 'react'

const ToasterMsg = ({toaster}) => {
    return (
        <div className={`flex ${(toaster.status) ? 'top-10 opacity-100' : 'opacity-0 top-0'} w-60 lg:w-70 flex-col absolute right-1/2 translate-x-1/2 bg-seaSalt px-3 lg:px-5 py-2 lg:py-4 rounded-lg lg:rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)] overflow-clip duration-300 ease-in-out z-50`}>
            <p className='text-center text-eerieBlack/70 font-semibold mb-1 text-sm lg:text-base'>{toaster.msg}</p>
            <div className='bg-pistachio w-full h-4 absolute -bottom-2.5 lg:-bottom-2 right-0'></div>
        </div>
    )
}

export default ToasterMsg