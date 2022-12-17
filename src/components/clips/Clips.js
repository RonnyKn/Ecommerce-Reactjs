import "./Clips.css"
import React from "react"

const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div className="clips">
        <img src={imgsrc} alt="img/clips" />
        <video
          className="hidden"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  )
}

export default Clips
