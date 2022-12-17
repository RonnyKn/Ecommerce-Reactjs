import "./SingleShoe.css"
import React from "react"
import { AiFillStar } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs"

const SingleShoe = ({ id, title, text, rating, btn, img, price, color }) => {
  return (
    <div className={`singleshoe ${color}`}>
      <div className="shoe-content">
        <h5>{title}</h5>
        <h6> {text}</h6>
        <div className="shoe-span">
          <span>${price}</span>
          <span>
            <AiFillStar /> {rating}
          </span>
        </div>
        <div className="shoe-button">
          <button>
            <BsFillCartPlusFill />
          </button>
          <button>{btn}</button>
        </div>
      </div>
      <div className="shoe-img">
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default SingleShoe
