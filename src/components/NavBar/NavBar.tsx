import { useState } from 'react'
import OSgoArrow from './../../assets/images/Arrows/goArrow.png'
import OSiconNav from './../../assets/images/Navbar/IconNav.png'
import LinkNav from '../LinkNav/LinkNav'
import ButtonNav from '../ButtonNav/ButtonNav'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
const NavBar = ({logo}:{logo:string}) => {
const [nav,setNav]=useState(false)
  return (
<div className={`fixed top-0 w-full ${nav?'h-screen':'h-max'}`}>
        <div className=' px-4 flex items-center justify-center bg-myprimary-dark-08 py-5  border border-neutral-800 '>
            <h1 className='text-myprimary-gray-60 text-xs md:text-sm lg:text-lg font-normal pr-2.5 '>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
            <div className='w-5 h-5 lg:w-6 lg:w-6'>
                <img src={OSgoArrow} alt="goArrow" />
             </div>
        </div>
        
     <div className={` ${nav?'h-full':'h-max'} lg:px-162 lg:py-6 md:px-20 md:py-5 px-4 flex justify-between md:items-center lg:items-center text-myprimary-gray-50 bg-neutral-800 `}>
        <div className=' h-max  md:h-10  h-50 lg:my-0 md:my-0 sm:my-5 '>
            <img className='' src={logo} alt="logo" />
        </div>
        <LinkNav ClassUl='md:flex lg:gap-4 md:gap-1.5 gap-4 hidden '/>
        <div className='lg:block md:block hidden'>
        <ButtonCommon navbtn={'navbtn'} contentBtn='Contact Us' hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' herobtnAndCommon=''imgArrowbtn=''altimagebtn=''mainsmall=''filterBtn=''EbookHome=''imgEyes=''footerBtn=''/>
        </div>

      <div className=' block w-screen md:hidden'>
        <div className={nav?'flex justify-end':'flex justify-end items-center h-full' }onClick={()=>{setNav(!nav)}}>
            <img src={OSiconNav} alt="navresponsiv" />
        </div>
        <div className={nav?'flex flex-col gap-10 justify-center items-center w-full translate-x-4':'hidden'}>
            <LinkNav  ClassUl=' flex flex-col  gap-10   '/>
           <ButtonCommon navbtn={'navbtn'} contentBtn='Contact Us' hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' herobtnAndCommon=''imgArrowbtn=''altimagebtn=''mainsmall=''filterBtn=''EbookHome=''imgEyes=''footerBtn=''/>
    </div>
      </div>
     </div>
     
    </div>
  
  )
}

export default NavBar