import "./Story.css"
import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/css"
import { truncate } from "lodash"

const Story = ({ stories: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: true,
    padding: "2rem",
    autoplay: 500,
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  }

  return (
    <section className="story">
      <div className="container story-container">
        <div className="story-title">
          <h1>{title}</h1>
        </div>
        <Splide options={splideOptions} className="story-content">
          {news?.map((value, idx) => (
            <SplideSlide className="content-data" key={idx}>
              <div className="content1">
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
                <p>{truncate(value?.text, { length: 175 })}</p>
                <a
                  href={value?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  {value?.btn}
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Story
