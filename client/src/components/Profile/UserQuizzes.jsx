import React from 'react'
import QuizCards from './QuizCards'

const UserQuizzes = ({ quizzes, quizStats }) => {
    return (
        <div className="flex flex-col py-8 lg:py-13 bg-pistachio items-center w-full">
            <p className='w-70 md:w-full text-3xl md:text-4xl lg:text-5xl text-eerieBlack font-semibold text-center'>
                Your Quiz Journey
            </p>
            <p className='w-80 md:w-100 lg:w-180 leading-5 lg:leading-9 pt-2 lg:pt-3 text-base md:text-lg lg:text-3xl text-center'>Your performance so far - review, reflect, and get ready to ace the next one.</p>
            <QuizCards quizzes={quizzes} quizStats={quizStats} />
        </div>
    )
}

export default UserQuizzes