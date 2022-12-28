import "./TopRatedSales.css"
import React from "react"
import SingleShoe from "../singleShoe/SingleShoe"

const TopRatedSales = ({
  customStyle,
  customImg,
  topratedsales: { title, items },
  featured,
}) => {
  return (
    <section className="topratedsales">
      <div className="container container-trs">
        <div className="trs-title">
          <h1>{title}</h1>
        </div>
        <article className="trs-content">
          {items.map((item, idx) => (
            <SingleShoe
              {...item}
              customStyle={"grid1"}
              customImg={"img1"}
              customCenter={"customCenter"}
              key={idx}
            />
          ))}
        </article>
        <article className="featured">
          <div className="featured-content">
            <h1>{featured?.heading}</h1>
            <h2>{featured?.title}</h2>
            <p>{featured?.text}</p>
            <a href={featured?.url} target="_blank" rel="noreferrer">
              {featured?.btn}
            </a>
          </div>
          <div className="featured-img">
            <img src={featured?.img} alt="featuredImg" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default TopRatedSales
