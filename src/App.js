import "./App.css"
import { headerapi, popularsales, highlight } from "../src/assets/data/Data"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import PopularSales from "./components/popularSales/PopularSales"

function App() {
  return (
    <>
      <Navbar />
      <Header headerapi={headerapi} />
      <PopularSales popularsales={popularsales} highlight={highlight} />
    </>
  )
}

export default App
