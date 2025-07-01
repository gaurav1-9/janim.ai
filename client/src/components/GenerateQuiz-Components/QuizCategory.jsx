import React from 'react'
import MobileViewCategory from './MobileViewCategory';
import DekstopViewCategory from './DekstopViewCategory';

const QuizCategory = ({ category, changeCategory, quizCategory, tagList, isGenerating,showMsg }) => {
    return (
        <div>
            <DekstopViewCategory category={category} changeCategory={changeCategory} quizCategory={quizCategory} isGenerating={isGenerating} />
            <MobileViewCategory category={category} changeCategory={changeCategory} tagList={tagList} isGenerating={isGenerating} showMsg={showMsg} />
        </div>
    )
}

export default QuizCategory