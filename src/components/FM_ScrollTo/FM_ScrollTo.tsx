import { useEffect, useState } from 'react'
import scrollToTop from '../../assets/images/Arrows/scrollToTop.png'

export default function FM_ScrollTo() {

    const [showScrollTo, setShowScrollTo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <img
                src={scrollToTop}
                alt="Scroll to top"
                onClick={handleScrollToTop}
                className={`${showScrollTo ? "translate-x-0" : "translate-x-40"} w-10 2xl:w-14 cursor-pointer rounded-full transition-all duration-300 ease-in-out fixed bottom-6 right-6 z-50 bg-myprimary-yellow-55 flex justify-center items-center`}
            />
    )
}
