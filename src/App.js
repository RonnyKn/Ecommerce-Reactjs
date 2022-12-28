import "./App.css"
import {
  headerapi,
  popularsales,
  highlight,
  topratedsales,
  featured,
  stories,
} from "../src/assets/data/Data"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import PopularSales from "./components/popularSales/PopularSales"
import TopRatedSales from "./components/topRatedSales/TopRatedSales"
import Story from "./components/story/Story"
import Footer from "./components/footer/Footer"
import Cart from "./components/cart/Cart"

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <Header headerapi={headerapi} />
      <PopularSales popularsales={popularsales} highlight={highlight} />
      <TopRatedSales topratedsales={topratedsales} featured={featured} />
      <Story stories={stories} />
      <Footer />
    </>
  )
}

export default App
