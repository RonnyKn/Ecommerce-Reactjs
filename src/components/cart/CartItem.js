import React from "react"
import { useDispatch } from "react-redux"
import {
  setDecreaseQty,
  setIncreaseQty,
  setRemoveItems,
} from "../../app/CartSlice"
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai"

const CartItem = ({
  item: { id, title, text, img, price, color, cartQuantity },
}) => {
  const dispatch = useDispatch()
  const onRemoveItems = () => {
    dispatch(
      setRemoveItems({ id, title, text, img, price, color, cartQuantity })
    )
  }

  const onIncreaseQty = () => {
    dispatch(
      setIncreaseQty({ id, title, text, img, price, color, cartQuantity })
    )
  }
  const onDecreaseQty = () => {
    dispatch(
      setDecreaseQty({ id, title, text, img, price, color, cartQuantity })
    )
  }

  return (
    <div className="cartitem">
      <div className={`item-img ${color}`}>
        <h5>${price}</h5>
        <img src={img} alt={`img/${img}`} />
      </div>
      <div className="item-content">
        <h3>{title}</h3>
        <small>{text} </small>
        <div className="qty">
          <button
            className={`price-icon ${cartQuantity === 1 ? "disabled" : ""}`}
            type="button"
            onClick={onDecreaseQty}
          >
            <AiOutlineMinus />
          </button>
          <strong> {cartQuantity} </strong>
          <button className="price-icon" type="button" onClick={onIncreaseQty}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="item-price">
        <span>
          <strong>${price * cartQuantity}</strong>
        </span>
        <button type="button" className="price-icon" onClick={onRemoveItems}>
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  )
}

export default CartItem
