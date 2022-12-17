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
        <div className="popularsales-content">
          {items?.map((item, idx) => (
            <SingleShoe {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularSales
