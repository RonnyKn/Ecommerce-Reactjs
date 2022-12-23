import "./Cart.css"
import React from "react"
import CartCount from "./CartCount"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import {
  setClosecart,
  selectCartState,
  selectCartItems,
} from "../../app/CartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)
  const ifCartItems = useSelector(selectCartItems)

  console.log(ifCartItems)

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
          <CartEmpty ifCartItems={ifCartItems} />
          <CartItem ifCartItems={ifCartItems} />
        </div>
      </div>
    </>
  )
}

export default Cart
