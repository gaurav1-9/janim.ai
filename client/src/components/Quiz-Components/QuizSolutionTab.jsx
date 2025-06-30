import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa'
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QuizSolutionTab = ({ quizDetails }) => {
    const [questionCounter, setQuestionCounter] = useState(0)
    const [showExplanation, setShowExplanation] = useState(false)

    return (
        <div className="text-eerieBlack bg-pistachio py-3 px-5 flex flex-col justify-center items-center rounded-xl md:rounded-2xl shadow-[0_0_17px_rgba(0,0,0,0.25)] mt-3 relative">
            <p className='flex items-center font-semibold underline underline-offset-8 text-2xl lg:text-4xl'>
                Question
                {
                    ((questionCounter + 1) < 10)
                        ? ` 0${questionCounter + 1}`
                        : ` ${questionCounter + 1}`
                }
            </p>
            <div className='md:absolute top-0 right-5 mt-3'>
                {
                    (quizDetails.quizQuestions[questionCounter].selectedOption === quizDetails.quizQuestions[questionCounter].answer)
                        ? <p className='font-semibold flex items-center gap-2 bg-chineseViolet rounded-4xl py-2 px-4 text-ivory'>
                            Correct
                            <FaCheckCircle className='text-pistachio text-2xl' />
                        </p>
                        : (quizDetails.quizQuestions[questionCounter].selectedOption !== quizDetails.quizQuestions[questionCounter].answer && quizDetails.quizQuestions[questionCounter].selectedOption !== null)
                            ? <p className='font-semibold flex items-center gap-2 bg-chineseViolet rounded-4xl py-2 px-4 text-ivory'>
                                Wrong
                                <IoCloseCircle className='text-lightRed text-2xl scale-[1.2]' />
                            </p>
                            : <p className='font-semibold flex items-center gap-2 bg-chineseViolet rounded-4xl py-2 px-4 text-ivory'>
                                Skipped
                                <FaQuestionCircle className='text-yellow-300 text-2xl' />
                            </p>
                }
            </div>
            <p className='font-semibold text-lg lg:text-3xl leading-5 lg:leading-6 mt-3 mb-5 md:mt-7 lg:mt-10 lg:mb-8'>{quizDetails.quizQuestions[questionCounter].question}</p>
            <div className='w-full gap-2 flex flex-col'>
                {
                    quizDetails.quizQuestions[questionCounter].options.map((option, i) => (
                        <div
                            key={i}
                            className={`border-2 md:border-3 border-eerieBlack rounded-md px-4 py-3  
                                    ${(quizDetails.quizQuestions[questionCounter].selectedOption === i && quizDetails.quizQuestions[questionCounter].selectedOption === quizDetails.quizQuestions[questionCounter].answer)
                                    ? 'bg-ivory'
                                    : (quizDetails.quizQuestions[questionCounter].selectedOption === i && quizDetails.quizQuestions[questionCounter].selectedOption !== quizDetails.quizQuestions[questionCounter].answer)
                                        ? 'bg-lightRed'
                                        : (quizDetails.quizQuestions[questionCounter].answer === i)
                                            ? 'bg-ivory'
                                            : 'bg-transparent'
                                }`}
                            title={(quizDetails.quizQuestions[questionCounter].answer === i) ? 'Correct answer' : null}
                        >
                            <p className='text-base md:text-lg'>{option}</p>
                        </div>
                    ))
                }
            </div>
            <div className='mt-2 lg:mt-5'>
                <p
                    className='flex items-center gap-1 text-lg lg:text-xl font-semibold text-eerieBlack cursor-pointer'
                    onClick={() => setShowExplanation(!showExplanation)}
                >
                    {
                        (showExplanation)
                            ? <>
                                Hide explanation
                                <IoIosArrowUp />
                            </>
                            :
                            <>
                                See explanation
                                <IoIosArrowDown />
                            </>
                    }
                </p>
            </div>
            {showExplanation && <p className='text-center leading-5 lg:leading-6 text-base lg:text-xl px-0 md:px-10 lg:px-40'>{quizDetails.quizQuestions[questionCounter].explanation + quizDetails.quizQuestions[questionCounter].explanation}</p>}
            <div className="flex gap-5 mt-8 mb-3">
                <button
                    className={`min-w-20 md:w-50 
                            ${(questionCounter === 0)
                            ? 'bg-chineseViolet/70 text-ivory/70 cursor-not-allowed'
                            : 'bg-chineseViolet text-ivory hover:bg-chineseViolet/87 cursor-pointer'
                        } font-semibold rounded-md px-3 py-2 text-base lg:text-2xl`}
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
                    className={`min-w-20 md:w-50 
                            ${(questionCounter === quizDetails.quizQuestions.length - 1)
                            ? 'bg-chineseViolet/70 text-ivory/70 cursor-not-allowed'
                            : 'bg-chineseViolet text-ivory hover:bg-chineseViolet/87 cursor-pointer'
                        } font-semibold rounded-md px-3 py-2 text-base lg:text-2xl`}
                    onClick={() => {
                        if (questionCounter < quizDetails.quizQuestions.length - 1) {
                            setQuestionCounter(questionCounter + 1)
                        }
                    }}
                >
                    <p className='flex justify-center items-center gap-2 md:gap-4'>
                        <span>Next</span>
                        <FaArrowRight className='text-sm md:text-base' />
                    </p>
                </button>
            </div>
        </div >
    )
}

export default QuizSolutionTab