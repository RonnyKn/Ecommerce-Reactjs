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

  const onChartToggle = () => {
    dispatch(
      setClosecart({
        cartState: false,
      })
    )
  }

  return (
    <div className={`${ifCartState ? "cart-wrapper " : "cart-unvisible"}`}>
      <div className="cart">
        <div className="cart--count">
          <CartCount onChartToggle={onChartToggle} ifCartItems={ifCartItems} />
        </div>
        <div className="cart--items">
          {ifCartItems.length === 0 ? (
            <CartEmpty onChartToggle={onChartToggle} />
          ) : (
            <div className="cartitems">
              {ifCartItems.map((item, idx) => (
                <CartItem item={item} key={idx} />
              ))}
            </div>
          )}
        </div>
        <div className="subtotal">
          <div className="subtotal-price">
            <h5>SUBTOTAL</h5>
            <span>$000</span>
          </div>
          <p>Taxes and Shipping Will Calculate At Shipping</p>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
