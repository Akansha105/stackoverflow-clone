import React from 'react'
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import './questionItem.css'
import "./center.css"

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
      <div className="bottom">
        <div className="stats">
          <span>
            <ChangeHistoryIcon style={{ marginTop: 15, paddingRight: 5,color:"orange" }} />
            {question.score}
          </span>
          <span>
            <QuestionAnswerOutlinedIcon
              style={{ marginTop: 15, paddingRight: 5 }}
            />
            {question.answer_count}
          </span>
          <span>
            <VisibilityOutlinedIcon
              style={{ marginTop: 15, paddingRight: 5 }}
            />
            {question.view_count}
          </span>
        </div>
        <div className="time">
          added 55sec ago: <span className="name">{question.owner.display_name}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem
