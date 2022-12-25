import React from "react"
import { useDispatch } from "react-redux"
import { setClearCart } from "../../app/CartSlice"
import { IoMdArrowRoundBack } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"

const CartCount = ({ onChartToggle, ifCartItems }) => {
  const dispatch = useDispatch()
  const onClearCart = () => {
    dispatch(setClearCart())
  }
  return (
    <div className="count-container">
      <div className="count-item">
        <button
          className="count-item-button"
          type="button"
          onClick={onChartToggle}
        >
          <IoMdArrowRoundBack />
        </button>
        <h4>
          Your Cart :<span>({`${ifCartItems.length}`} items)</span>
        </h4>
      </div>
      <div className="count-close">
        {ifCartItems.length === 0 ? (
          ""
        ) : (
          <button type="button" onClick={onClearCart}>
            <AiOutlineClose />
          </button>
        )}
      </div>
    </div>
  )
}

export default CartCount
