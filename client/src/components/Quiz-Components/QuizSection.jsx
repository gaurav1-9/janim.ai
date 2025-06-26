import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const QuizSection = ({ quiz }) => {
    const [questionCounter, setQuestionCounter] = useState(0)
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col'>
            <div className="text-eerieBlack bg-pistachio py-3 px-5 flex flex-col justify-center items-center rounded-xl md:rounded-2xl shadow-[0_0_17px_rgba(0,0,0,0.25)]">
                <p className='flex font-semibold underline underline-offset-8 text-2xl lg:text-4xl'>
                    Question
                    {
                        ((questionCounter + 1) < 10)
                            ? ` 0${questionCounter + 1}`
                            : ` ${questionCounter + 1}`
                    }
                </p>
                <p className='font-semibold text-lg lg:text-3xl leading-5 lg:leading-6 mt-7 mb-5 lg:mt-10 lg:mb-8'>{quiz[questionCounter].question}</p>

                <div className='w-full gap-2 flex flex-col'>
                    {
                        quiz[questionCounter].options.map((option, i) => (
                            <div key={i} className='border-2 md:border-3 border-eerieBlack rounded-md px-4 py-3'>
                                {option}
                            </div>
                        ))

                    }
                </div>

                <div className="flex gap-5 mt-3">
                    <button
                        className='min-w-20 md:w-50 bg-chineseViolet text-ivory font-semibold rounded-md px-3 py-2 hover:bg-chineseViolet/87 cursor-pointer text-base lg:text-2xl'
                        onClick={() => {
                            if (questionCounter > 0) {
                                setQuestionCounter(questionCounter - 1)
                            }
                        }}
                    >
                        <p className='flex justify-center items-center gap-2 md:gap-4'>
                            <FaArrowLeft className='text-sm md:text-base' />
                            <span>Previous</span>
                        </p>
                    </button>
                    <button
                        className='min-w-20 md:w-50 bg-chineseViolet text-ivory font-semibold rounded-md px-3 py-2 hover:bg-chineseViolet/87 cursor-pointer text-base lg:text-2xl'
                        onClick={() => {
                            if (questionCounter < quiz.length - 1) {
                                setQuestionCounter(questionCounter + 1)
                            }
                            else {
                                console.log('submit')
                            }
                        }}
                    >
                        <p className='flex justify-center items-center gap-2 md:gap-4'>
                            {
                                (questionCounter === quiz.length - 1)
                                    ? <>
                                        <span>Submit</span>
                                        <FaArrowRight className='text-sm md:text-base' />
                                    </>
                                    : <>
                                        <span>Next</span>
                                        <FaArrowRight className='text-sm md:text-base' />
                                    </>
                            }
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizSection