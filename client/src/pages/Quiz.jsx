import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext';
import QuizSection from '../components/Quiz-Components/QuizSection';
import QuizPlayer from '../components/Quiz-Components/QuizPlayer';
import Loader from '../components/Loader';
import Footer from '../components/Footer'
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [quiz, setQuiz] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { user } = useContext(DataContext)
    useEffect(() => {
        if (!user) {
            navigate("/auth/login", { replace: true })
            return
        }
        if (!location.state) {
            navigate("/generate", { replace: true })
            return
        }
        setQuiz({
            questionList: location.state.quizList,
            details: location.state.inputQuizDetails
        })
    }, [user, location.state, navigate])

    const optionSelector = (qNo, option) => {
        setQuiz(prevQuiz => ({
            ...prevQuiz,
            questionList: prevQuiz.questionList.map((q, i) =>
                (i === qNo) ? { ...q, selectedOption: option } : q
            )
        }));
    };

    const onSubmitBtn = async (timeLeft) => {
        setIsSubmitting(true)
        try {
            const token = localStorage.getItem("token")
            const quizData = {
                user: user._id,
                quizQuestions: quiz.questionList,
                totalQuizDuration: parseInt(quiz.details.time.split(' ')[0]),
                quizCompletionDuration: parseInt(quiz.details.time.split(' ')[0]) - timeLeft,
                isCompleted: true,
                pointsEarned: parseInt(quiz.details.points)
            }
            const quizSubmitResponse = await axios.post(`${baseURL}/quiz/submit`,
                quizData,
                {
                    headers: {
                        Authorization: token
                    }
                },
            )
            if (!quizSubmitResponse.data.err) {
                navigate(`/quiz-details/${quizSubmitResponse.data.quizID}`,
                    {
                        replace: true,
                        state: {
                            showStatus: true,
                            quizData: quizData,
                            msg: "Quiz submitted successfully"
                        }
                    }
                )
            }
        } catch (err) {
            console.log(err.response.data)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            {
                (!quiz.questionList)
                    ? <div className='w-full bg-seaSalt h-50 translate-y-1/2 flex justify-center items-center'>
                        <Loader />
                    </div>
                    : <div >
                        <QuizPlayer quizDetails={quiz.details} quizLength={quiz.questionList.length} />
                        <QuizSection quiz={quiz.questionList} quizTime={parseInt(quiz.details.time.split(" ")[0])} optionSelector={optionSelector} onSubmitBtn={onSubmitBtn} isSubmitting={isSubmitting} />

                        <div className="flex justify-center items-center mb-10">
                            <button
                                className='bg-lightRed text-ivory font-semibold rounded-md px-10 py-2 hover:bg-lightRed/90 cursor-pointer text-base lg:text-2xl'
                                onClick={() => { navigate('/generate', { replace: true }) }}
                                disabled={isSubmitting}
                            >
                                Leave Quiz
                            </button>
                        </div>

                        <Footer />
                    </div>
            }

        </div>
    )
}

export default Quiz