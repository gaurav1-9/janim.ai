import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ToasterMsg from '../components/ToasterMsg';
import DataContext from '../context/DataContext';

const QuizDetails = () => {
    const { quizID } = useParams()
    const location = useLocation()
    const [quizToasterMsg, setQuizToasterMsg] = useState({ status: location.state?.showStatus, msg: location.state?.msg });
    const [quizDetails, setQuizDetails] = useState({})
    const { user } = useContext(DataContext)

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
        if (location.state) {
            setQuizDetails(location.state.quizData)
        }
    }, [location.state])
    console.log(location.state)
    console.log(quizDetails)
    return (
        <>
            {
                (user._id === quizDetails.user)
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