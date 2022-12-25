import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { HiChevronDoubleLeft } from "react-icons/hi"

const CartCount = ({ onChartToggle, ifCartItems }) => {
  return (
    <div className="count-container">
      <div className="count-item">
        <h4>
          <HiChevronDoubleLeft /> Your Cart :{" "}
          <span>({`${ifCartItems.length}`} items)</span>
        </h4>
      </div>
      <div className="count-close">
        <button type="button" onClick={onChartToggle}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  )
}

export default CartCount
