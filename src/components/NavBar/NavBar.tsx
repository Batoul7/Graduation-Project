import { Link } from 'react-router-dom'
import OSgoArrow from '../../images/Arrows/goArrow.png'
import navres from '../../images/Navbar/iconNav.png'
import { useState } from 'react'
const NavBar = ({logo}:{logo:string}) => {
    const dataNav=[
    {item:'Home',
    link:'',
    },
    {item:'News',
    link:'',}
    ,
    {item: 'Podcasts',
    link:'',}
    ,
    {item:'Resources',
    link:'',}
]
const [nav,setNav]=useState(false)
  return (
<div className='fixed top-0 w-full'>
        <div className=' px-4 flex items-center justify-center bg-myprimary-dark-08 py-5  border border-neutral-800 '>
            <h1 className='text-myprimary-gray-60 text-xs md:text-sm lg:text-lg font-normal pr-2.5 '>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
            <div className='w-5 h-5 lg:w-6 lg:w-6'>
                <img src={OSgoArrow} alt="goArrow" />
             
            </div>
        </div>
     <div className='lg:px-162 lg:py-6 md:px-20 md:py-5 px-4 flex justify-between md:items-center lg:items-center text-myprimary-gray-50 bg-neutral-800 '>
        <div className='w-125 h-35 md:w-143 md:h-10 lg:w-178 h-50 '>
            <img className='w-full ' src={logo} alt="logo" />
        </div>
        <ul  className='md:flex gap-10 hidden'>
            {dataNav.map((element,index)=>{return(<li className={`text-xs md:text-sm lg:text-lg font-normal ${index==index?'hover:bg-myprimary-dark-08 hover:border hover:border-myprimary-dark-20 py-3.5 hover:rounded-10 hover:px-6':'  '}`}  key={index}> <Link to={element.link}>{element.item}</Link> </li>)})}
        </ul>
     <button className=' md:block hidden text-center  text-sm lg:text-lg font-medium lg:w-137 lg:h-55 w-103 h-41 bg-myprimary-yellow-55 rounded-10 text-myprimary-dark-08 hover:text-myprimary-yellow-55 hover:bg-transparent hover:border hover:border-myprimary-yellow-55'>Contact Us</button>
     <div className=' block md:hidden'>
        <div className={nav?'flex justify-end':'flex justify-end items-center h-full' }onClick={()=>{setNav(!nav)}}>
            <img src={navres} alt="navresponsiv" />
        </div>
        <div className={nav?'block':'hidden'}>
        <ul className=''>
            {dataNav.map((element,index)=>{return(<li className={`text-xs md:text-sm lg:text-lg font-normal ${index==index?'hover:bg-myprimary-dark-08 hover:border hover:border-myprimary-dark-20 py-3.5 hover:rounded-10 hover:px-6':'  '}`}  key={index}><Link to={element.link}>{element.item}</Link></li>)})}
        </ul>
        <button className='text-center  text-sm lg:text-lg font-medium lg:w-137 lg:h-55 w-103 h-41 bg-myprimary-yellow-55 rounded-10 text-myprimary-dark-08 hover:text-myprimary-yellow-55 hover:bg-transparent hover:border hover:border-myprimary-yellow-55'>Contact Us</button>
      </div>
      </div>
     </div>
     
    </div>
  
  )
}

export default NavBar