import React from 'react'

const QuizSection = ({ quiz }) => {
    return (
        <div>
            {
                quiz.map((quiz, index) => (
                    <div key={index}>
                        <p>{`Q${index + 1}. ${quiz.question}`}</p>
                        {
                            quiz.options.map((option, i) => (
                                <p>
                                    {`[${i}] ${option}`}
                                </p>
                            ))
                        }
                        <br></br>
                    </div>
                ))
            }
        </div>
    )
}

export default QuizSection