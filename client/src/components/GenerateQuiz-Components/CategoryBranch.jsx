import React from 'react'

const CategoryBranch = () => {
    return (
        <div className='flex justify-center relative'>
            {/* Dekstop Curve */}
            <div className="absolute -right-16 -top-40 hidden lg:block">
                <svg
                    viewBox="0 0 50 300"
                    fill="none"
                    className="w-fit h-100"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g strokeWidth="2">
                        <path d="M2,150 C15,150 5,65 25,65" className="stroke-chineseViolet" ></path>
                        <path d="M2,160 25,160" className="stroke-chineseViolet" ></path>
                        <path d="M2,170 C15,170 5,255 25,255" className="stroke-chineseViolet" ></path>
                    </g>
                    <g>
                        <circle cx="35" cy="65" r="4" className="fill-chineseViolet" ></circle>
                        <circle cx="35" cy="160" r="4" className="fill-chineseViolet"></circle>
                        <circle cx="35" cy="255" r="4" className="fill-chineseViolet"></circle>
                    </g>
                </svg>
            </div>

            {/* Mobile Curve */}
            <div className="w-full absolute -top-5 md:-top-3 lg:hidden">
                <svg
                    viewBox="-12 0 300 50"
                    fill="none"
                    className="w-full h-20"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g transform="rotate(90, 150, 150)">
                        <g strokeWidth="2">
                            <path d="M2,150 C15,150 5,65 25,65" className='stroke-chineseViolet' />
                            <path d="M2,160 25,160" className='stroke-chineseViolet' />
                            <path d="M2,170 C15,170 5,255 25,255" className='stroke-chineseViolet' />
                        </g>
                        <g>
                            <circle cx="35" cy="65" r="4" className='fill-chineseViolet' />
                            <circle cx="35" cy="160" r="4" className='fill-chineseViolet' />
                            <circle cx="35" cy="255" r="4" className='fill-chineseViolet' />
                        </g>
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default CategoryBranch