import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionItem from './QuestionItem'

const Content = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(
        'https://api.stackexchange.com/2.3/questions',
        {
          params: {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow',
            pagesize: 5,
          },
        }
      )
      setQuestions(response.data.items)
    }

    fetchQuestions()
  }, [])

  return (
    <div className="question-list">
      {questions.map((question) => (
        <QuestionItem key={question.question_id} question={question} />
      ))}
    </div>
  )
}

export default Content
