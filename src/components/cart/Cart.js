import "./Cart.css"
import React from "react"
import CartCount from "./CartCount"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"

const Cart = () => {
  return (
    <>
      <CartCount />
      <CartEmpty />
      <CartItem />
    </>
  )
}

export default Cart
