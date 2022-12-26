import "./Cart.css"
import React, { useEffect } from "react"
import CartCount from "./CartCount"
import CartEmpty from "./CartEmpty"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import {
  setClosecart,
  selectCartState,
  selectCartItems,
  setGetTotal,
  selectTotalAmount,
  selectTotalQty,
} from "../../app/CartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)
  const ifCartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectTotalAmount)
  const totalQty = useSelector(selectTotalQty)

  const onChartToggle = () => {
    dispatch(
      setClosecart({
        cartState: false,
      })
    )
  }

  useEffect(() => {
    dispatch(setGetTotal())
  }, [ifCartItems, dispatch])

  return (
    <div className={`${ifCartState ? "cart-wrapper " : "cart-unvisible"}`}>
      <div className="cart">
        <CartCount onChartToggle={onChartToggle} totalQty={totalQty} />

        {ifCartItems.length === 0 ? (
          <CartEmpty onChartToggle={onChartToggle} />
        ) : (
          <div className="cartitems">
            {ifCartItems.map((item, idx) => (
              <CartItem item={item} key={idx} />
            ))}
          </div>
        )}

        <div className="subtotal">
          <div className="subtotal-price">
            <h4>SUBTOTAL</h4>
            <h4>${totalAmount}</h4>
          </div>
          <p>
            <em>Taxes and Shipping Will Calculate At Shipping</em>
          </p>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
