import "./App.css"
import { headerapi } from "../src/assets/data/Data"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Header headerapi={headerapi} />
    </>
  )
}

export default App
