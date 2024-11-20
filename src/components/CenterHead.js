import React from "react"

const CenterHead = () => {
const pages = ['Products', 'Pricing', 'Blog']

  return (
    <div>
      <div className="center-head">
        <h2>Top Question</h2>
      </div>
      <div className="navbar">
        <div className="part1">
          <button className="highlight">Intresting</button>
          <button>Bountied</button>
          <button>Hot</button>
          <button>Week</button>
          <button>Month
          </button>
        </div>
        <div className="part2">
            Ask Question
        </div>
      </div>
    </div>
  )
}
export default CenterHead