import React from 'react'

const Tags = ({ tagName, textSize }) => {
    return (
        <div className='py-1 px-3 h-fit bg-pistachio text-ivory rounded-3xl w-fit font-semibold'>
            <p className={textSize}>{tagName}</p>
        </div>
    )
}

export default Tags