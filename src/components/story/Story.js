import "./Story.css"
import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"

const Story = ({ stories: { title, news } }) => {
  return (
    <section className="story">
      <div className="container story-container">
        <div className="story-title">
          <h1>{title}</h1>
        </div>
        <div className="story-content">
          {news?.map((value, idx) => (
            <article className="content-data" key={idx}>
              <img src={value?.img} alt={`img ${idx}`} />
              <div className="content-subs">
                <span>
                  <AiFillHeart color="red" /> <h6>{value?.like} </h6>
                </span>
                <span>
                  <BiTimeFive color="blue" /> <h6>{value?.time}</h6>
                </span>
                <span>
                  <BsFillPersonFill color="violet" /> <h6>{value?.by}</h6>
                </span>
              </div>
              <h5>{value?.title}</h5>
              <p>{value?.text}</p>
              <a href={value?.url} target="_blank" rel="noreferrer">
                {value?.btn}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
