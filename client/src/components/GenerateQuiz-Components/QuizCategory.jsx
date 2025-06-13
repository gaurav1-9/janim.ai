import React from 'react'
import MobileViewCategory from './MobileViewCategory';
import DekstopViewCategory from './DekstopViewCategory';

const QuizCategory = ({ category, changeCategory,quizCategory }) => {
    return (
        <div>
            <DekstopViewCategory category={category} changeCategory={changeCategory} quizCategory={quizCategory}/>
            <MobileViewCategory category={category} changeCategory={changeCategory}/>
        </div>
    )
}

export default QuizCategory