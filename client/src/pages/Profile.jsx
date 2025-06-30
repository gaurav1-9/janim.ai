import React, { useContext, useEffect, useState } from 'react'
import DataContext from "../context/DataContext";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import UserDetails from '../components/Profile/UserDetails';
import ToasterMsg from '../components/ToasterMsg';
import UserQuizzes from '../components/Profile/UserQuizzes';
import Loader from '../components/Loader';
import NoQuiz from '../components/Profile/NoQuiz';
import axios from 'axios'
import UserStats from '../components/Profile/UserStats';

const baseURL = import.meta.env.VITE_BASE_URL

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(DataContext)
  const [editToast, setEditToast] = useState({ status: location.state?.status, msg: location.state?.msg })
  const [quizLoader, setQuizLoader] = useState(true)
  const [quizzes, setQuizzes] = useState([])
  const [quizStats, setQuizStats] = useState([]);

  useEffect(() => {
    if (editToast.status) {
      const timer = setTimeout(() => {
        setEditToast(prev => ({
          ...prev,
          status: false
        }));
        setTimeout(() => {
          setEditToast({});
        }, 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [editToast.status]);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { replace: true })
    }
  }, [user, navigate])

  const navigateToEditProfile = () => {
    navigate("/edit-profile")
  }

  useEffect(() => {
    const fetchUserQuizzes = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${baseURL}/quiz/show-quiz`, {
          headers: {
            Authorization: token
          }
        })
        setQuizzes(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setQuizLoader(false)
      }
    }

    if (user && user.levelPoints != 0) {
      fetchUserQuizzes()
    }
    else {
      setQuizLoader(false)
    }
  }, [user])

  useEffect(() => {
    const correctOptions = () => {
      const stats = quizzes.map((quiz) => {
        let correct = 0;
        quiz.quizQuestions.forEach((ans) => {
          if (ans.answer === ans.selectedOption) {
            correct++;
          }
        });
        return correct;
      });

      setQuizStats(stats);
    };

    if (quizzes && quizzes.length > 0) correctOptions();
  }, [quizzes]);

  if (!user) return null;
  return (
    <div>
      <ToasterMsg toaster={editToast} />
      <UserDetails user={user} editProfile={navigateToEditProfile} />
      {
        (quizLoader)
          ? <div className='w-full bg-seaSalt mb-10 scale-60 flex justify-center items-center'>
            <Loader />
          </div>
          : (user.levelPoints === 0)
            ? <NoQuiz />
            : <>
              <UserQuizzes quizzes={quizzes} quizStats={quizStats} />
              <UserStats quizzes={quizzes} quizStats={quizStats}/>
            </>
      }
      <Footer />
    </div>
  )
}

export default Profile