import React, { useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import GenerateQuiz from './pages/GenerateQuiz'
import Navbar from './components/Navbar'
import AuthLayout from './pages/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

const App = () => {
  const topRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto" });
  }, [pathname]);
  const showNavbar = !pathname.startsWith('/auth');

  return (
    <div className='w-full bg-seaSalt' ref={topRef}>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<GenerateQuiz />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
