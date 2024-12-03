import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import logo from './assets/images/Navbar/Logo.png'
import Footer from "./components/Footer/Footer"
import BePart from "./components/BePart/BePart"


function App() {

  return (
    <>
    <NavBar logo={logo}/>
    <Outlet/>
    <BePart/>
    <Footer/>
    </>
  )
}

export default App
