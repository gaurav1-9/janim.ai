import React, { useEffect, useState } from 'react'

const UserStats = ({ quizzes, quizStats }) => {
    const [performance, setPerformance] = useState(0)

    useEffect(() => {
        let score = 0;
        let total = 0;

        quizStats.forEach((correct) => {
            score += correct;
        });

        quizzes.forEach((quiz) => {
            total += quiz.quizQuestions.length;
        });

        if (total > 0) {
            const percentage = (score / total) * 100;
            const rounded = ((percentage - Math.floor(percentage)) > 0.5)
                ? Math.floor(percentage) + 1
                : Math.floor(percentage);
            setPerformance(rounded);
        } else {
            setPerformance(0);
        }
    }, [quizStats, quizzes]);
    
    return (
        <div className="flex flex-col py-8 lg:py-13 bg-seaSalt items-center w-full">
            <p className='w-70 md:w-full text-3xl md:text-4xl lg:text-5xl text-eerieBlack font-semibold text-center'>
                Study about <span className='uppercase text-pistachio'>yourself</span>
            </p>
            <p className='w-80 md:w-120 lg:w-190 leading-5 lg:leading-9 pt-2 lg:pt-3 text-base md:text-lg lg:text-3xl text-center'>Your journey matters. Keep track of your wins, your challenges, and everything in between - all right here.</p>
        </div>
    )
}

export default UserStats