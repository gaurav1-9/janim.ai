import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ToasterMsg from '../components/ToasterMsg';
import DataContext from '../context/DataContext';
import axios from 'axios';
import UnauthorizedPage from './UnauthorizedPage';
import Loader from '../components/Loader';

const baseURL = import.meta.env.VITE_BASE_URL;

const QuizDetails = () => {
    const { quizID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(DataContext);

    const [quizDetails, setQuizDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quizToasterMsg, setQuizToasterMsg] = useState({
        status: location.state?.showStatus || false,
        msg: location.state?.msg || ''
    });

    useEffect(() => {
        if (!user) {
            navigate("/auth/login", { replace: true });
        }
    }, [user, navigate]);

    useEffect(() => {
        if (quizToasterMsg.status) {
            const timer = setTimeout(() => {
                setQuizToasterMsg(prev => ({ ...prev, status: false }));
                setTimeout(() => setQuizToasterMsg({}), 300);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [quizToasterMsg.status]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`${baseURL}/quiz/show-quiz?quizID=${quizID}`, {
                    headers: { Authorization: token }
                });
                const quiz = Array.isArray(res.data) ? res.data[0] : res.data;
                setQuizDetails(quiz);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        if (location.state?.quizData) {
            setQuizDetails(location.state.quizData);
            setLoading(false);
        } else {
            fetchQuiz();
        }
    }, [location.state, quizID]);

    const isOwner = user && quizDetails?.user && String(user._id) === String(quizDetails.user);

    return (
        <>
            <ToasterMsg toaster={quizToasterMsg} />
            {loading ? <div className='w-full bg-seaSalt h-50 translate-y-1/2 flex justify-center items-center'>
                <Loader />
            </div>
                : isOwner
                    ? <div>
                        <p>QuizDetails of {quizID}</p>
                        <p>Quiz by {quizDetails.user}</p>
                        <p>Quiz completed: {quizDetails.isCompleted ? "Yes" : "No"}</p>
                        <p>Points earned: {quizDetails.pointsEarned}</p>
                        <p>Completion Time: {quizDetails.quizCompletionDuration}</p>
                        <p>Total Time: {quizDetails.totalQuizDuration}</p>
                    </div>
                    : <UnauthorizedPage />
            }
        </>
    );
};

export default QuizDetails;
