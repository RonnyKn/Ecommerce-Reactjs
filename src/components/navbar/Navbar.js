import React, { useEffect, useState } from "react"
import "./Navbar.css"
import { BiSearch, BiHeart, BiCartAlt } from "react-icons/bi"
import Logo from "../../assets/img/logo.png"

const Navbar = () => {
  const [navState, setNavState] = useState(false)

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
          <button>
            <BiSearch />
          </button>
          <button>
            <BiHeart />
          </button>
          <button>
            <BiCartAlt />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
