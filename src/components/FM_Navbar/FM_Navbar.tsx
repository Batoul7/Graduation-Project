import { useEffect, useState } from 'react'
import logo from '../../assets/images/Navbar/Logo.png'
import xClose from '../../assets/images/Navbar/x-white.png'
import xCloseScroll from '../../assets/images/Navbar/x-black.png'
import LogoScroll from '../../assets/images/Navbar/LogoScroll.png'
import toggle from '../../assets/images/Navbar/IconNav.png'
import toggleScroll from '../../assets/images/Navbar/IconNavScroll.png'
import { dataNav } from '../../Data/NavBarData'
import { NavLink } from 'react-router-dom'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function FM_Navbar() {

    const [show, setShow] = useState(false)
    const [header, setHeader] = useState(false)

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    function handleScrollToTop() {
        setShow(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <nav className={`4xl:container 4xl:mx-auto fixed z-50 flex justify-between items-center ${header ? 'bg-myprimary-yellow-60 top-0 shadow-md' : 'bg-myprimary-dark-10 border-y border-myprimary-dark-20'} w-screen py-5 2xl:py-6 2xl:px-mainpaddinglarge xl:px-[80px] px-4`}>
            <img src={header ? LogoScroll : logo} alt="logo" className='h-[35px] md:h-[40px] 2xl:h-[50px]' />
            <div className={`flex w-[65%] justify-between items-center max-1200:w-screen max-1200:flex-col max-1200:fixed max-1200:top-0 max-1200:left-0 max-1200:h-screen transition-all duration-300 ease-in-out max-1200:justify-evenly max-1200:gap-0 ${header ? 'bg-myprimary-yellow-60' : 'bg-myprimary-dark-10'} ${show ? 'translate-y-0' : 'max-1200:-translate-y-full'}`}>
                <img src={header ? LogoScroll : logo} className='h-[35px] md:h-[40px] 2xl:h-[50px] hidden max-1200:block' alt="logo" />
                <ul className='flex gap-6 2xl:gap-4 max-1200:flex-col max-1200:justify-evenly max-1200:items-center max-1200:gap-10'>
                    {dataNav.map((e, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    onClick={handleScrollToTop}
                                    to={e.link}
                                    className={({ isActive }) =>
                                        `py-2.5 2xl:py-3.5 px-5 ${header ? '' : 'text-myprimary-gray-50'} ${isActive ? 'text-white bg-myprimary-dark-08 rounded-[10px] border border-myprimary-dark-20' : 'border-transparent'} `}
                                >
                                    {e.item}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <NavLink to={'/contact'} onClick={handleScrollToTop}>
                    <ButtonCommon navbtn={header ? false : true} navbtnScroll={header ? true : false} contentBtn={'Contact Us'} hiddenArrow='hiddenArrow' hiddenEyes={"hiddenEyes"} />
                </NavLink>
                <img onClick={() => setShow(!show)} src={header ? xCloseScroll : xClose} className='hidden max-1200:block' alt="close" />
            </div>
            <img onClick={() => setShow(!show)} src={header ? toggleScroll : toggle} className='hidden max-1200:block' alt="close" />
        </nav>
    )
}