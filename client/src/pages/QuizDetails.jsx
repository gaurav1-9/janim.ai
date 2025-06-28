import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ToasterMsg from '../components/ToasterMsg';
import DataContext from '../context/DataContext';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

const QuizDetails = () => {
    const { quizID } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [quizToasterMsg, setQuizToasterMsg] = useState({ status: location.state?.showStatus, msg: location.state?.msg });
    const [quizDetails, setQuizDetails] = useState({})
    const { user } = useContext(DataContext)
    const isOwner = user && quizDetails?.user && String(user._id) === String(quizDetails.user);

    useEffect(() => {
        if (!user) {
            navigate("/auth/login", { replace: true })
            return
        }
    }, [user])

    useEffect(() => {
        if (quizToasterMsg.status) {
            const timer = setTimeout(() => {
                setQuizToasterMsg(prev => ({
                    ...prev,
                    status: false
                }));
                setTimeout(() => {
                    setQuizToasterMsg({});
                }, 300);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [quizToasterMsg.status]);

    useEffect(() => {
        const uniqueQuiz = async () => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.get(`${baseURL}/quiz/show-quiz?quizID=${quizID}`, {
                    headers: {
                        Authorization: token
                    }
                })
                setQuizDetails(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        if (location.state) {
            setQuizDetails(location.state.quizData)
        }
        else {
            uniqueQuiz()
        }
    }, [location.state, quizID])

    return (
        <>
            {
                (isOwner)
                    ? <div>
                        <ToasterMsg toaster={quizToasterMsg} />
                        <p>QuizDetails of {quizID}</p>
                        <p>Quiz by {quizDetails.user}</p>
                        <p>Quiz completed {quizDetails.isCompleted}</p>
                        <p>Quiz points {quizDetails.pointsEarned}</p>
                        <p>Quiz completion Time {quizDetails.quizCompletionDuration}</p>
                        <p>Quiz total time {quizDetails.totalQuizDuration}</p>
                    </div>
                    : "Unauthoirized"
            }
        </>
    )
}

export default QuizDetails