import React from 'react'
import { Link } from 'react-router-dom';

const Buttons = ({ bgColor, width, textColor, goTo, text, otherResponsiveStyles, icon }) => {
    return (
        <Link to={goTo}>
            <button className={`${bgColor} flex justify-center items-center gap-2 border-2 border-chineseViolet rounded-md ${width} ${textColor} font-semibold ${otherResponsiveStyles} cursor-pointer`}>
                <p>{text}</p>
                {(icon) ? icon : null}
            </button>
        </Link>
    )
}

export default Buttons
