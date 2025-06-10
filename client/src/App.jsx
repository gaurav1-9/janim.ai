import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GenerateQuiz from './pages/GenerateQuiz'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full bg-seaSalt px-8 py-5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<GenerateQuiz />} />
      </Routes>
    </div>
  )
}

export default App
