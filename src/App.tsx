import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import logo from './assets/images/Navbar/Logo.png'
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
<NavBar logo={logo}/>
    <Outlet/>
<Footer/>
    </>
  )
}

export default App
