import React from "react"
import SingleShoe from "../singleShoe/SingleShoe"

const CartItem = ({ ifCartItems }) => {
  return (
    <>
      <div className="cartitem">
        {ifCartItems.map((val, idx) => (
          <SingleShoe
            {...val}
            key={idx}
            customStyle={"grid1"}
            customImg={"img1"}
          />
        ))}
      </div>
    </>
  )
}

export default CartItem
