import { Outlet } from "react-router-dom"
import FM_TopBanner from "./components/FM_TopBanner/FM_TopBanner"
import FM_Navbar from "./components/FM_Navbar/FM_Navbar"
import { useEffect, useState } from "react"
import 'aos/dist/aos.css'
import AOS from 'aos'
import FM_BePart from "./components/FM_BePart/FM_BePart"
import FM_Footer from "./components/FM_Footer/FM_Footer"
import FM_Preloader from "./components/FM_Preloader/FM_Preloader"
import FM_ScrollTo from "./components/FM_ScrollTo/FM_ScrollTo"

function App() {

  const [showPreloader, setShowPreloader] = useState(true)
  

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)
    

  }, [])

  return (
    <>
      {showPreloader ? <FM_Preloader /> : null}
      {!showPreloader && (
        <div className="4xl:container 4xl:mx-auto relative">
          <FM_ScrollTo />
          <FM_TopBanner />
          <FM_Navbar />
          <Outlet />
          <FM_BePart />
          <FM_Footer />
        </div>
      )}
    </>
  )
}

export default App
