import React, { useContext, useEffect, useState } from 'react'
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

  const navigateToEditProfile = () => {
    // setUser & checkAuth will be used here
    navigate("/edit-profile")
  }

  if (!user) return null;
  return (
    <div>
      <UserDetails user={user} editProfile={navigateToEditProfile}/>
      <Footer />
    </div>
  )
}

export default Profile