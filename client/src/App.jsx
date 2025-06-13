import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import GenerateQuiz from './pages/GenerateQuiz'
import Navbar from './components/Navbar'

const App = () => {
  const topRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "auto" });
  }, [pathname]);


  return (
    <div className='w-full bg-seaSalt' ref={topRef}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<GenerateQuiz />} />
      </Routes>
    </div>
  )
}

export default App
