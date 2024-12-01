import { dataNav } from "../../Data/NavBarData"
import { Link } from 'react-router-dom'
const LinkNav = ({ClassUl}:{ClassUl:string}) => {
  return (
    <ul  className={`${ClassUl}`}>
    {dataNav.map((element,index)=>{return(
        <li className={`text-xs md:text-sm lg:text-lg font-normal `}  key={index}>
         <Link className={`${index==index?'hover:bg-myprimary-dark-08 duration-200 active:bg-myprimary-dark-08 active:border-myprimary-dark-20 border hover:border-myprimary-dark-20 py-3.5 hover:rounded-rad-10 active:rounded-rad-10 px-6 md:px-[18px]  active:px-6 border-transparent':'  '}`} to={element.link}>{element.item}</Link>
        </li>)})}
</ul>
  )
}

export default LinkNav
