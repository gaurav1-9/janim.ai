import React, { useContext, useEffect, useState } from 'react'
import DataContext from "../context/DataContext";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import UserDetails from '../components/Profile/UserDetails';
import ToasterMsg from '../components/ToasterMsg';
import UserQuizzes from '../components/Profile/UserQuizzes';
import Loader from '../components/Loader';
import NoQuiz from '../components/Profile/NoQuiz';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(DataContext)
  const [editToast, setEditToast] = useState({ status: location.state?.status, msg: location.state?.msg })
  const [quizLoader, setQuizLoader] = useState(true)

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
        console.log(user.levelPoints)
      } catch (err) {

      } finally {
        setQuizLoader(false)
      }
    }

    if (user && user.levelPoints) {
      fetchUserQuizzes()
    }
    else {
      setQuizLoader(false)
    }
  })

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
            : <UserQuizzes />
      }
      <Footer />
    </div>
  )
}

export default Profile