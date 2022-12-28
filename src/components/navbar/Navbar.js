import React, { useEffect, useState } from "react"
import "./Navbar.css"
import { BiSearch, BiHeart, BiCartAlt } from "react-icons/bi"
import Logo from "../../assets/img/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, setOpenCart } from "../../app/CartSlice"

const Navbar = () => {
  const [navState, setNavState] = useState(false)
  const ifCartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const onChartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    )
  }

  const onNavScroll = () => {
    if (window.scrollY > 10) {
      setNavState(true)
    } else {
      setNavState(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll)

    return () => {
      window.removeEventListener("scroll", onNavScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${navState ? "nav-10" : ""}`}>
      <div className="container navbar-container">
        <div className={`navbar-logo ${navState ? "logo-10" : ""}`}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`navbar-menu ${navState ? "menu-10" : ""}`}>
          <button onClick={() => window.alert("Available Soon")}>
            <BiSearch />
          </button>
          <button onClick={() => window.alert("Available Soon")}>
            <BiHeart />
          </button>
          <button className="navbar-cart" type="button" onClick={onChartToggle}>
            <BiCartAlt />
            {ifCartItems.length > 0 ? (
              <span className="cart-badge">{ifCartItems.length}</span>
            ) : null}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
