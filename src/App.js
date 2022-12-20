import "./App.css"
import {
  headerapi,
  popularsales,
  highlight,
  topratedsales,
  featured,
  stories,
  footerapi,
} from "../src/assets/data/Data"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import PopularSales from "./components/popularSales/PopularSales"
import TopRatedSales from "./components/topRatedSales/TopRatedSales"
import Story from "./components/story/Story"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Header headerapi={headerapi} />
      <PopularSales popularsales={popularsales} highlight={highlight} />
      <TopRatedSales
        topratedsales={topratedsales}
        customStyle={"grid1"}
        customImg={"img1"}
        featured={featured}
      />
      <Story stories={stories} />
      <Footer footerapi={footerapi} />
    </>
  )
}

export default App
