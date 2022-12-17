import "./PopularSales.css"
import React from "react"

const PopularSales = ({ highlight, popularsales: { title, items } }) => {
  return (
    <section className="popularsales">
      <div className="container popularsales-container">
        <div className="popularsales-title">
          <h2>{title}</h2>
        </div>
        <div className="popularsales-content">
          {items?.map((item, idx) => (
            <SinglePopularsales />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularSales
