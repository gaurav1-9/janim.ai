import React from 'react'
import MobileViewCategory from './MobileViewCategory';

const QuizCategory = ({ category, changeCategory }) => {
    return (
        <div>
            {/* Dekstop Layout */}
            <div className="hidden lg:flex"></div>

            {/* Mobile Layout */}
            <MobileViewCategory category={category} changeCategory={changeCategory}/>
        </div>
    )
}

export default QuizCategory