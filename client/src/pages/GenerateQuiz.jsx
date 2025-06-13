import React from 'react'
import Footer from '../components/Footer';
import GenerateHeading from '../components/GenerateQuiz-Components/GenerateHeading';
import InputArea from '../components/GenerateQuiz-Components/InputArea';

const GenerateQuiz = () => {
  return (
    <div className='w-full'>
      <GenerateHeading />
      <InputArea />
      <Footer />
    </div>
  )
}

export default GenerateQuiz
