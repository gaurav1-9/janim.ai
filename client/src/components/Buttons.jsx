import React from 'react'
import { Link } from 'react-router-dom';

const Buttons = ({ bgColor, width, textColor, goTo, text, otherResponsiveStyles}) => {
    return (
        <Link to={goTo}>
            <button className={`${bgColor} border-2 border-chineseViolet rounded-md ${width} ${textColor} font-semibold ${otherResponsiveStyles} cursor-pointer`}>
                {text}
            </button>
        </Link>
    )
}

export default Buttons
