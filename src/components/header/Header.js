import React from "react"
import "./Header.css"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai"
import { BsMessenger } from "react-icons/bs"
import Clips from "../clips/Clips"

const Header = ({ headerapi: { title, subtitle, img, btntext, videos } }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <a href="https://www.nike.com/id/" target="_blank" rel="noreferrer">
            <button className="btn">{btntext}</button>
          </a>
        </div>
        <div className="header-content">
          <aside className="header-clips">
            {videos?.map((vid, idx) => (
              <Clips imgsrc={vid?.imgsrc} clip={vid?.clip} key={idx} />
            ))}
          </aside>
          <div className="header-product">
            <img src={img} alt="headerImgProduct" />
          </div>
          <aside className="header-socials">
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
          </aside>
        </div>
      </div>
    </header>
  )
}

export default Header
