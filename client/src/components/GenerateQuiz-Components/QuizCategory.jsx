import React from 'react'
import MobileViewCategory from './MobileViewCategory';
import DekstopViewCategory from './DekstopViewCategory';

const QuizCategory = ({ category, changeCategory, quizCategory, tagList, isGenerating }) => {
    return (
        <div>
            <DekstopViewCategory category={category} changeCategory={changeCategory} quizCategory={quizCategory} />
            <MobileViewCategory category={category} changeCategory={changeCategory} tagList={tagList} isGenerating={isGenerating} />
        </div>
    )
}

export default QuizCategory