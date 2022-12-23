import React from "react"
import EmptyIMG from "../../assets/img/emptybag.png"
import { HiOutlineArrowLeft } from "react-icons/hi"

const CartEmpty = ({ ifCartItems }) => {
  return (
    <>
      <div className="cartempty">
        <img src={EmptyIMG} alt="empty bag" />
        <button type="button">
          <HiOutlineArrowLeft className="cartempty-icon" />
          Back To Store!
        </button>
      </div>
    </>
  )
}

export default CartEmpty
