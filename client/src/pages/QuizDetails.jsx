import React from 'react'
import { useParams } from 'react-router-dom'

const QuizDetails = () => {
    const quizID = useParams()
  return (
    <div>QuizDetails of {quizID.quizID}</div>
  )
}

export default QuizDetails