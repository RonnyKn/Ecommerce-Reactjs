import "./Cart.css"
import React from "react"
import CartCount from "./CartCount"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"

const Cart = () => {
  return (
    <>
      <div className="cart-wrapper">
        <div className="cart">
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  )
}

export default Cart
