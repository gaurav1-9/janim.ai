import React from 'react'

const Tags = ({ tagName }) => {
    return (
        <div className='py-1 px-3 bg-pistachio text-ivory rounded-3xl w-fit font-semibold'>
            <p className='text-base lg:text-lg'>{tagName}</p>
        </div>
    )
}

export default Tags