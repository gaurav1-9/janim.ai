import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext';
import QuizSection from '../components/Quiz-Components/QuizSection';

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [quiz, setQuiz] = useState([])
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
        setQuiz(location.state.quizList)
    })

    console.log("User: " + user.name)
    console.log(quiz)
    return (
        <div>
            <QuizSection quiz={quiz} />
            
        </div>
    )
}

export default Quiz