import "./SingleShoe.css"
import React from "react"
import { useDispatch } from "react-redux"
import { AiFillStar } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs"
import { setAddItems } from "../../app/CartSlice"

const SingleShoe = ({
  customStyle,
  customImg,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
}) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    const item = { id, title, text, img, price, color }
    dispatch(setAddItems(item))
  }

  return (
    <div className={`singleshoe ${color} ${customStyle}`}>
      <div className="shoe-content">
        <h5>{title}</h5>
        <h6> {text}</h6>
        <div className="shoe-span">
          <span>${price}</span>
          <div className="rating">
            <AiFillStar />
            <span>{rating}</span>
          </div>
        </div>
        <div className="shoe-button">
          <button type="button" onClick={addToCart}>
            <BsFillCartPlusFill />
          </button>
          <button>{btn}</button>
        </div>
      </div>
      <div className={`shoe-img ${customImg}`}>
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default SingleShoe
