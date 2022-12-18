import "./TopRatedSales.css"
import React from "react"
import SingleShoe from "../singleShoe/SingleShoe"

const TopRatedSales = ({
  customStyle,
  customImg,
  topratedsales: { title, items },
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
              customImg={customImg}
              customStyle={customStyle}
              key={idx}
            />
          ))}
        </article>
      </div>
    </section>
  )
}

export default TopRatedSales
