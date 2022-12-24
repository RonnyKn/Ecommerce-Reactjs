import React from "react"
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai"

const CartItem = ({ ifCartItems }) => {
  console.log(ifCartItems)
  return (
    <>
      <div className="cartitems">
        {ifCartItems.map((val, idx) => (
          <div className="cartitem" key={idx}>
            <div className={`item-img ${val?.color}`}>
              <h5>${val?.price}</h5>
              <img src={val?.img} alt={`img/${val?.img}`} />
            </div>
            <div className="item-content">
              <h3>{val?.title}</h3>
              <small>{val?.text}</small>
              <div className="qty">
                <button className="price-icon">
                  <AiOutlineMinus />
                </button>
                <span>
                  <strong> {val?.cartQuantity} </strong>
                </span>
                <button className="price-icon">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="item-price">
              <h3>Total:</h3>
              <span>${val?.price * val?.cartQuantity}</span>
              <button className="price-icon">
                <AiTwotoneDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CartItem
