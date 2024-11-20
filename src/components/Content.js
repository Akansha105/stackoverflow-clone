import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionItem from './QuestionItem'

const Content = () => {
  const [questions, setQuestions] = useState([])
  const [filter,setFilter] = useState("activiy");

  
    const fetchQuestions = async (filter) => {
    try{
        let params = {
            order: 'desc',
            site: 'stackoverflow',
            pagesize: 5,
        };
        switch(filter){
            case "hot":
                params.sort = "views";
                break;
            case "week":
                params.sort = "creation";
                params.formdate = Math.floor(Date.now()/1000) - 7*24*60*60;
                break;
            case "bountied":
                params.sort = "votes";
                params.min = 1;
                break;
            case "month":
                params.sort = "creation";
                params.formdate = Math.floor(Date.now()/1000)-30*24*60*60;
                break;
            default:
                    params.sort = "activity";
        }
      const response = await axios.get(
        'https://api.stackexchange.com/2.3/questions',{params}
      )
      setQuestions(response.data.items);
    }catch(err)
    {
        console.log(err)
    }
    }
useEffect(() => {
  fetchQuestions(filter)
}, [filter])

  return (
    <>
      <div>
        <div className="center-head">
          <h2>Top Question</h2>
        </div>
        <div className="navbar">
          <div className="part1">
            <button
            id='highlight'
              onClick={() => setFilter('hot')}
              className={filter === 'hot' ? 'active' : ''}
            >
              Hot
            </button>
            <button
              onClick={() => setFilter('week')}
              className={filter === 'week' ? 'active' : ''}
            >
              Week
            </button>
            <button
              onClick={() => setFilter('bountied')}
              className={filter === 'bountied' ? 'active' : ''}
            >
              Bountied
            </button>
            <button
              onClick={() => setFilter('month')}
              className={filter === 'month' ? 'active' : ''}
            >
              Month
            </button>
          </div>
          <div className="part2">Ask Question</div>
        </div>
      </div>

      <div className="question-list">
        {questions.map((question) => (
          <QuestionItem key={question.question_id} question={question} />
        ))}
      </div>
    </>
  )
}

export default Content
