import React, { useContext, useEffect } from 'react'
import DataContext from "../context/DataContext";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import UserDetails from '../components/Profile/UserDetails';

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser, checkAuth } = useContext(DataContext)

  useEffect(() => {
    if (!user) {
      navigate("/auth/login", { replace: true })
    }
  }, [user, navigate])

  const editProfile = () => {
    // setUser & checkAuth will be used here
    console.log('Edit Click')
  }

  if (!user) return null;
  return (
    <div>
      <UserDetails user={user} editProfile={editProfile} />
      <Footer />
    </div>
  )
}

export default Profile