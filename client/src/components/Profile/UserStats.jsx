import React, { useEffect, useState } from 'react'
import Progress from 'react-circle-progress-bar'
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import Loader from '../Loader';

const UserStats = ({ quizzes, quizStats }) => {
    const [performance, setPerformance] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [marksExtreme, setmarksExtreme] = useState({})

    useEffect(() => {
        let score = 0;
        let total = 0;
        let timeElapsed = 0;

        let max = quizStats[0], maxIndex = 0;
        let min = quizStats[0], minIndex = 0;

        for (let i = 1; i < quizStats.length; i++) {
            if (parseInt(quizStats[i]) > max) {
                max = quizStats[i];
                maxIndex = i;
            }
            if (quizStats[i] < min) {
                min = quizStats[i];
                minIndex = i;
            }
        }
        quizStats.forEach((correct) => {
            score += correct;
        });

        quizzes.forEach((quiz) => {
            total += quiz.quizQuestions.length;
            timeElapsed += quiz.quizCompletionDuration
        });

        if (total > 0) {
            const percentage = (score / total) * 100;
            const rounded = ((percentage - Math.floor(percentage)) > 0.5)
                ? Math.floor(percentage) + 1
                : Math.floor(percentage);
            setPerformance(rounded);
            setTotalTime(timeElapsed)
            setmarksExtreme({
                highest: {
                    val: max,
                    idx: maxIndex
                },
                lowest: {
                    val: min,
                    idx: minIndex
                }
            })
        } else {
            setPerformance(0);
        }
    }, [quizStats, quizzes]);

    return (
        (
            quizzes.length === 0 ||
            quizStats.length === 0 ||
            marksExtreme.highest === undefined ||
            marksExtreme.lowest === undefined
        )
            ? <Loader />
            : <div className="flex flex-col px-8 py-5 md:px-20 xl:px-40 lg:py-10 items-center w-full">
                <p className='w-70 md:w-full text-3xl md:text-4xl lg:text-5xl text-eerieBlack font-semibold text-center'>
                    Study about <span className='uppercase text-pistachio'>yourself</span>
                </p>
                <p className='w-80 md:w-120 lg:w-190 leading-5 lg:leading-9 pt-2 lg:pt-3 text-base md:text-lg lg:text-3xl text-center'>Your journey matters. Keep track of your wins, your challenges, and everything in between - all right here.</p>

                <div className='flex flex-col lg:flex-row-reverse justify-between items-center w-full mt-10 lg:mt-15'>
                    <div className='flex flex-col w-full lg:w-2/5 justify-center items-center'>
                        <div className="relative text-eerieBlack">
                            <Progress
                                progress={performance}
                                hideBall={true}
                                strokeWidth={15}
                                gradient={[{ stop: 0.0, color: '#a4cd85' }, { stop: 1, color: '#a4cd85' }]}
                                background='#d9d9d9'
                                hideValue={true}
                                className='scale-120 lg:scale-150'
                            />
                            <div className=" w-full absolute top-0 bottom-1/2 translate-y-1/2 pt-3 lg:pt-0">
                                <p className='text-center text-lg lg:text-2xl'>Overall Score</p>
                                <p className='text-center text-5xl lg:text-6xl'>{performance}%</p>
                            </div>
                        </div>
                        <div className="-mt-4 lg:mt-1">
                            {
                                (quizzes.length >= 2)
                                    ? (((quizStats[1] / quizzes[1].quizQuestions.length) * 100) > ((quizStats[0] / quizzes[0].quizQuestions.length) * 100))
                                        ? <p className='flex items-center'>
                                            <span className='flex items-center text-lightRed font-semibold text-base lg:text-xl'>
                                                {(((quizStats[1] / quizzes[1].quizQuestions.length) * 100) - ((quizStats[0] / quizzes[0].quizQuestions.length) * 100)).toPrecision(2)}% <FaLongArrowAltDown />
                                            </span>
                                            <span className='text-sm lg:text-base'>since your last attempt</span>
                                        </p>
                                        : (((quizStats[1] / quizzes[1].quizQuestions.length) * 100) < ((quizStats[0] / quizzes[0].quizQuestions.length) * 100))
                                            ? <p className='flex items-center'>
                                                <span className='flex items-center text-pistachio font-semibold text-base lg:text-xl'>
                                                    {(((quizStats[0] / quizzes[0].quizQuestions.length) * 100) - ((quizStats[1] / quizzes[1].quizQuestions.length) * 100)).toPrecision(2)}% <FaLongArrowAltUp />
                                                </span>
                                                <span className='text-sm lg:text-base'>since your last attempt</span>
                                            </p>
                                            : null
                                    : null
                            }
                        </div>
                    </div>
                    <div className='flex flex-col w-full lg:w-3/5 text-eerieBlack mt-10 lg:mt-0 gap-8 lg:gap-14'>
                        <div className="flex">
                            <div className='flex flex-col justify-center items-center w-1/2'>
                                <p className='text-center font-semibold w-1/2 xl:w-30 leading-5 lg:leading-6 text-base lg:text-xl'>Total quiz submitted</p>
                                <div className='w-8/10 lg:w-6/10 h-0.5 bg-chineseViolet/30 my-1 lg:my-2'></div>
                                <p className='text-xl lg:text-3xl'>{quizzes.length} quizzes</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-1/2'>
                                <p className='text-center font-semibold w-2/3 lg:w-30 leading-5 lg:leading-6 text-base lg:text-xl'>Time spent on quizzes</p>
                                <div className='w-8/10 lg:w-6/10 h-0.5 bg-chineseViolet/30 my-1 lg:my-2'></div>
                                <p className='text-xl lg:text-3xl'>{totalTime} sec</p>
                            </div>
                        </div>

                        {
                            <div className="flex">
                                <div className='flex flex-col justify-center items-center w-1/2'>
                                    <p className='text-center font-semibold w-2/3 lg:w-30 xl:w-30 leading-5 lg:leading-6 text-base lg:text-xl'>Highest quiz score</p>
                                    <div className='w-8/10 lg:w-6/10 h-0.5 bg-chineseViolet/30 my-1 lg:my-2'></div>
                                    <p className='text-xl lg:text-3xl'>{marksExtreme.highest.val} out of {quizzes[marksExtreme.highest.idx].quizQuestions.length}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center w-1/2'>
                                    <p className='text-center font-semibold w-2/3 lg:w-30 leading-5 lg:leading-6 text-base lg:text-xl'>Lowest quiz score</p>
                                    <div className='w-8/10 lg:w-6/10 h-0.5 bg-chineseViolet/30 my-1 lg:my-2'></div>
                                    <p className='text-xl lg:text-3xl'>{marksExtreme.lowest.val} out of {quizzes[marksExtreme.lowest.idx]?.quizQuestions.length}</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
    )
}

export default UserStats