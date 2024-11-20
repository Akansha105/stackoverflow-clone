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
          <h4 className="highlight">Intresting</h4>
          <h4>Bountied</h4>
          <h4>Hot</h4>
          <h4>Week</h4>
          <h4>Month
          </h4>
        </div>
        <div className="part2">
            Ask Question
        </div>
      </div>
    </div>
  )
}
export default CenterHead