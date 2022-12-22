import "./Cart.css"
import React from "react"
import CartCount from "./CartCount"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import { setClosecart, selectCartState } from "../../app/CartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)

  const onChartToggle = () => {
    dispatch(
      setClosecart({
        cartState: false,
      })
    )
  }

  return (
    <>
      <div className={`${ifCartState ? "cart-wrapper " : "cart-unvisible"}`}>
        <div className="cart">
          <CartCount onChartToggle={onChartToggle} />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  )
}

export default Cart
