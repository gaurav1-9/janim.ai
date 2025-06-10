import React from 'react'
import { Link } from 'react-router-dom';

const Buttons = ({ bgColor, width, textColor, goTo}) => {
    return (
        <Link to={goTo}>
            <button className={`${bgColor} border-2 border-chineseViolet rounded-md ${width} py-2.5 ${textColor} font-semibold mt-3`}>
                Generate a Quiz
            </button>
        </Link>
    )
}

export default Buttons
