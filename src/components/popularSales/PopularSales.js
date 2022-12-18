import "./PopularSales.css"
import React from "react"
import SingleShoe from "../singleShoe/SingleShoe"

const PopularSales = ({ highlight, popularsales: { title, items } }) => {
  return (
    <section className="popularsales">
      <div className="container popularsales-container">
        <div className="popularsales-title">
          <h1>{title}</h1>
        </div>
        <article className="popularsales-content">
          {items?.map((item, idx) => (
            <SingleShoe {...item} key={idx} />
          ))}
        </article>
        <article className="highlight">
          <div className="hihghlight-img">
            <img src={highlight?.img} alt="hightlightimg" />
          </div>
          <div className="highlight-content">
            <h1>{highlight?.heading}</h1>
            <h2>{highlight?.title}</h2>
            <p>{highlight?.text}</p>
            <a href={highlight?.url}>{highlight?.btn}</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default PopularSales
