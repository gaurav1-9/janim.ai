import React, { useState } from 'react'
import Tags from '../Tags';
import QuizStatsMetaData from './QuizStatsMetaData';
import QuizSolutionTab from './QuizSolutionTab';

const QuizStats = ({ quizStats, quizDetails }) => {
    const uniqueTopics = [...new Set(quizDetails.quizQuestions.map(q => q.topic))];
    const [showDetailed, setShowDetailed] = useState(false)
    return (
        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col xl:mt-0 text-eerieBlack'>
            <div>
                <p className='font-semibold text-3xl lg:text-5xl mb-2 lg:mb-4'>Topics you tackled in this Quiz</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        uniqueTopics.map((tag, i) => (
                            <Tags key={i} tagName={tag} />
                        ))
                    }
                </div>
            </div>
            <QuizStatsMetaData quizDetails={quizDetails} quizStats={quizStats} showDetailed={showDetailed} setShowDetailed={setShowDetailed} />
            {
                (showDetailed)
                    ? <QuizSolutionTab quizDetails={quizDetails}/>
                    : null
            }
        </div>
    )
}

export default QuizStats