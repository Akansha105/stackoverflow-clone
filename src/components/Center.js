import React from "react"
import CenterHead from "./CenterHead"
import "./center.css"
import Content from "./Content"
const Center = () => {
  return (
    <>
      <div className="content">
        <CenterHead />
        <Content />
      </div>
    </>
  )
}
export default Center