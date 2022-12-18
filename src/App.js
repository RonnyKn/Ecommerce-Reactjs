import "./App.css"
import {
  headerapi,
  popularsales,
  highlight,
  topratedsales,
} from "../src/assets/data/Data"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import PopularSales from "./components/popularSales/PopularSales"
import TopRatedSales from "./components/topRatedSales/TopRatedSales"

function App() {
  return (
    <>
      <div style={{ gridTemplateColumns: "1fr" }}></div>
      <Navbar />
      <Header headerapi={headerapi} />
      <PopularSales popularsales={popularsales} highlight={highlight} />
      <TopRatedSales
        topratedsales={topratedsales}
        customStyle={"grid1"}
        customImg={"img1"}
      />
    </>
  )
}

export default App
