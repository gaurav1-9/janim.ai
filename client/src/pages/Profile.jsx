import React, { useContext, useEffect, useState } from 'react'
import DataContext from "../context/DataContext";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import UserDetails from '../components/Profile/UserDetails';
import ToasterMsg from '../components/ToasterMsg';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(DataContext)
  const [editToast, setEditToast] = useState({ status: location.state?.status, msg: location.state?.msg })

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

  if (!user) return null;
  return (
    <div>
      <ToasterMsg toaster={editToast} />
      <UserDetails user={user} editProfile={navigateToEditProfile} />
      <Footer />
    </div>
  )
}

export default Profile