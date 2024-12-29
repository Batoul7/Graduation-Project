import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import arrow from '../../assets/images/Arrows/goArrow.png'

export default function FM_TopBanner() {
    
    const [screen, setScreen] = useState(false)

    function handleResize () {
        if (window.innerWidth <= 1440) {
            setScreen(true)
        } else {
            setScreen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [screen])

    return (
        <Link to={'contact'}
            className="flex gap-2.5 py-5 text-xs px-4 md:text-sm 2xl:text-lg w-full justify-center items-center font-inter bg-myprimary-dark-08 text-myprimary-gray-60">
                <span>
                    {
                        screen ? 'Subscribe to our Newsletter For Blogs and Resources'
                        : 'Subscribe to our Newsletter For New & latest Blogs and Resources'
                    }
                </span>
                <img className="w-5" src={arrow} alt="arrow" />
        </Link>
    )
}
