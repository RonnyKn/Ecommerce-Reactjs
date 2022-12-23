import React from "react"
import SingleShoe from "../singleShoe/SingleShoe"

const CartItem = ({ ifCartItems }) => {
  return (
    <>
      <div
        className={`${
          ifCartItems.length >= 1 ? "cartitem" : "cartitem-unvisible"
        }`}
      >
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
