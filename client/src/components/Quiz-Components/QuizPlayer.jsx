import React from 'react'
import Tags from '../Tags'

const QuizDetails = ({ quizDetails, quizLength }) => {
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col text-eerieBlack '>
            <p className='font-semibold text-3xl lg:text-4xl xl:text-5xl w-75 md:w-full lg:w-240 xl:w-290'>
                Let's begin the mind games on
            </p>
            <div className="flex gap-2 mt-2 mb-5">
                {
                    quizDetails.tags.map((tag, index) => (
                        <Tags key={index} tagName={tag} textSize={'text-base lg:text-lg'}/>
                    ))
                }
            </div>
            <p className='text-base lg:text-xl flex gap-1 leading-6 text-chineseViolet font-semibold'>
                Total Questions:
                <span className='font-normal'>
                    {
                        (quizLength < 10)
                            ? `0${quizLength}`
                            : quizLength
                    }
                </span>
            </p>
            <p className='text-base lg:text-xl flex gap-1 leading-6 text-chineseViolet font-semibold'>
                Total Time:
                <span className='font-normal'>
                    {quizDetails.time.split(" ")[0]}
                    {quizDetails.time.split(" ")[1].substring(0, 3)}
                </span>
            </p>
        </div>
    )
}

export default QuizDetails