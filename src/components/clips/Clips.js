import "./Clips.css"
import React from "react"

const Clips = ({ vid }) => {
  return (
    <div>
      <img src={vid?.imgsrc} alt="clips" />
    </div>
  )
}

export default Clips
