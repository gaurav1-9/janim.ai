import React, { useContext, useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import GenerateQuiz from './pages/GenerateQuiz'
import Navbar from './components/Navbar'
import AuthLayout from './pages/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import DataContext from './context/DataContext'
import Loader from './components/Loader'
import EditProfile from './components/Profile/EditProfile';

const App = () => {
  const topRef = useRef(null);
  const { pathname } = useLocation();
  const { loading } = useContext(DataContext)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto" });
  }, [pathname]);
  const showNavbar = !pathname.startsWith('/auth');

  return (
    <>
      {
        (loading)
          ? <div className='w-full bg-seaSalt h-screen flex justify-center items-center'>
            <Loader />
          </div>
          : <div className='w-full bg-seaSalt' ref={topRef}>
            {showNavbar && <Navbar />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/generate' element={<GenerateQuiz />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/edit-profile' element={<EditProfile />} />

              <Route path='/auth' element={<AuthLayout />}>
                <Route index element={<Navigate to="login" replace />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Route>
            </Routes>
          </div>
      }
    </>
  )
}

export default App
