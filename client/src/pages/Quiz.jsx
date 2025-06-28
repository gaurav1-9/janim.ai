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

    const onSubmitBtn = async () => {
        console.log(quiz)
        setIsSubmitting(true)
        try {
            
        } catch (err) {
            console.log(err)
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
                        <QuizDetails quizDetails={quiz.details} quizLength={quiz.questionList.length} />
                        <QuizSection quiz={quiz.questionList} optionSelector={optionSelector} onSubmitBtn={onSubmitBtn} isSubmitting={isSubmitting} />

                        <div className="flex justify-center items-center mb-10">
                            <button
                                className='bg-lightRed text-ivory font-semibold rounded-md px-10 py-2 hover:bg-lightRed/90 cursor-pointer text-base lg:text-2xl'
                                onClick={() => console.log('Leave')}
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