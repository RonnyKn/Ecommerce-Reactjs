import React from "react"
import "./Header.css"
import vid1 from "../../assets/video/vcover1.png"
import vid2 from "../../assets/video/vcover2.png"
import vid3 from "../../assets/video/vcover3.png"
import headerProduct from "../../assets/img/hero.png"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { BsMessenger } from "react-icons/bs"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-title">
          <h1>Choose Your Shoes, Choose Your Style </h1>
        </div>
        <div className="header-content">
          <div className="header-videos">
            <img src={vid1} alt="video1" />
            <img src={vid2} alt="video1" />
            <img src={vid3} alt="video1" />
          </div>
          <div className="header-product">
            <img src={headerProduct} alt="headerProduct" />
          </div>
          <div className="header-socials">
            <button>
              <AiFillFacebook />
            </button>
            <button>
              <BsMessenger />
            </button>
            <button>
              <AiFillInstagram />
            </button>
            <button>
              <AiFillTwitterCircle />
            </button>
            <button>
              <AiFillYoutube />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
