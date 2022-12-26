import "./SingleShoe.css"
import React from "react"
import { setAddItems, setOpenCart } from "../../app/CartSlice"
import { useDispatch } from "react-redux"
import { AiFillStar } from "react-icons/ai"
import { BsFillCartPlusFill } from "react-icons/bs"

const SingleShoe = ({
  customStyle,
  customImg,
  customNone,
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

  const onChartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    )
  }

  return (
    <div className={`singleshoe ${color} ${customStyle}`}>
      <div className="shoe-content">
        <h5>{title}</h5>
        <h6> {text}</h6>
        <div className={`shoe-span ${customNone}`}>
          <span>${price}</span>
          <div className="rating">
            <AiFillStar />
            <span>{rating}</span>
          </div>
        </div>
        <div className={`shoe-button ${customNone}`}>
          <button type="button" onClick={addToCart}>
            <BsFillCartPlusFill />
          </button>
          <button onClick={onChartToggle}>{btn}</button>
        </div>
      </div>
      <div className={`shoe-img ${customImg}`}>
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default SingleShoe
