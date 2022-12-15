import React from "react"
import "./Navbar.css"
import { BiSearch, BiHeart, BiCartAlt } from "react-icons/bi"
import Logo from "../../assets/img/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-menu">
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
