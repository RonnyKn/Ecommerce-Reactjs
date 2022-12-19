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
      <Story />
    </>
  )
}

export default App
