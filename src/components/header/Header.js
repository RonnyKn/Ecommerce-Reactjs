import React from "react"
import "./Header.css"
import headerProduct from "../../assets/img/hero.png"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { BsMessenger } from "react-icons/bs"
const Header = ({ headerapi: { title, subtitle, img, btntext, videos } }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <button>{btntext}</button>
        </div>
        <div className="header-content">
          <aside className="header-videos">
            {videos.map((vid, idx) => (
              <img src={vid?.imgsrc} alt="clips" key={idx} />
            ))}
          </aside>
          <div className="header-product">
            <img src={img} alt="headerImgProduct" />
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
