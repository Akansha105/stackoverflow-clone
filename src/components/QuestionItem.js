import React from 'react'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import './questionItem.css'

const QuestionItem = ({ question }) => {
  return (
    <div className="question-item">
      <h3 className="title">{question.title}</h3>
      <div className="tags">
        {question.tags.map((tag) => (
          <span key={tag} className="tag">
            <span>{tag}</span>
          </span>
        ))}
      </div>
      <div className='bottom'>
      <div className="stats">
        <span>
          <ChangeHistoryIcon /> {question.score}
        </span>
        <span><QuestionAnswerOutlinedIcon /> {question.answer_count}</span>
        <span><VisibilityOutlinedIcon/> {question.view_count}</span>
      </div>
      <div>added 55 sec ago</div>
      </div>
    </div>
  )
}

export default QuestionItem
