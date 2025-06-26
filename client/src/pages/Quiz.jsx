import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext';
import QuizSection from '../components/Quiz-Components/QuizSection';
import QuizDetails from '../components/Quiz-Components/QuizDetails';
import Loader from '../components/Loader';
import Footer from '../components/Footer'

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [quiz, setQuiz] = useState({})
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

    return (
        <div>
            {
                (!quiz.questionList)
                    ? <div className='w-full bg-seaSalt h-50 translate-y-1/2 flex justify-center items-center'>
                        <Loader />
                    </div>
                    : <div >
                        <QuizDetails quizDetails={quiz.details} quizLength={quiz.questionList.length} />
                        <QuizSection quiz={quiz.questionList} />
                        <Footer />
                    </div>
            }

        </div>
    )
}

export default Quiz