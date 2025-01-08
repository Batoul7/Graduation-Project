import { useEffect, useState } from 'react'
import scrollToTop from '../../assets/images/Arrows/scrollToTop.png'
import scrollToBottom from '../../assets/images/Arrows/scrollToBottom.png'

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

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className='flex flex-col'>
            <img
                src={scrollToTop}
                alt="Scroll to top"
                onClick={handleScrollToTop}
                className={`${showScrollTo ? "translate-x-0" : "translate-x-40"} mb-12 md:mb-16 w-10 md:w-12 2xl:w-14 cursor-pointer rounded-full transition-all duration-300 ease-in-out fixed bottom-6 right-6 z-50 bg-myprimary-yellow-55 flex justify-center items-center`}
            />
            <img
                src={scrollToBottom}
                alt="Scroll to bottom"
                onClick={handleScrollToBottom}
                className={`${showScrollTo ? "translate-x-0" : "translate-x-40"} w-10 md:w-12 2xl:w-14 cursor-pointer rounded-full transition-all duration-300 ease-in-out fixed bottom-6 right-6 z-50 bg-myprimary-yellow-55 flex justify-center items-center`}
            />
        </div>
    )
}
