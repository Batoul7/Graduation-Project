import { Outlet } from "react-router-dom"
import FM_TopBanner from "./components/FM_TopBanner/FM_TopBanner"
import FM_Navbar from "./components/FM_Navbar/FM_Navbar"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import AOS from 'aos'
import FM_BePart from "./components/FM_BePart/FM_BePart"
import FM_Footer from "./components/FM_Footer/FM_Footer"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false });
  }, [])

  return (
    <>
    <FM_TopBanner/>
    <FM_Navbar />
    <Outlet/>
    <FM_BePart />
    <FM_Footer />
    </>
  )
}

export default App
