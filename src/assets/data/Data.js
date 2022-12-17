import headerimg from "../img/hero.png"

import hightlightimg from "../img/hightlightimg.png"
// import sneakershoe from "../assets/sneaker.png"

import clip from "../video/clip.mp4"
import vcover1 from "../video/vcover1.png"
import vcover2 from "../video/vcover2.png"
import vcover3 from "../video/vcover3.png"

import psale1 from "../img/nike-air-red.png"
import psale2 from "../img/nike-adapt-bb.png"
import psale3 from "../img/nike-adapt-bb-smart.png"

// import product1 from "../assets/product1.png"
// import product2 from "../assets/product2.png"
// import product3 from "../assets/product3.png"
// import product4 from "../assets/product4.png"
// import product5 from "../assets/product5.png"
// import product6 from "../assets/product6.png"
// import product7 from "../assets/product7.png"
// import product8 from "../assets/product8.png"
// import product9 from "../assets/product9.png"
// import product10 from "../assets/product10.png"
// import product11 from "../assets/product11.png"
// import product12 from "../assets/product12.png"

const headerapi = {
  title: "Play With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: headerimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
}

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
    },
  ],
}

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
}

export { headerapi, popularsales, highlight }
