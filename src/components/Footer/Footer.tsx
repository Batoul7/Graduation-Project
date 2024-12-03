import { FooterData,icons } from "../../Data/FooterData"
const Footer = () => {
return (<div className='px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08'>
  <div className="flex justify-between pb-67 pt-20 border-b border-neutral-800 lg:flex-nowrap flex-wrap ">
      {FooterData.map((e,index) => {
       return (
          <div key={index}  >
           <h5 className='text-white lg:text-xl md:text-lg font-medium  pb-9'>{e.title}</h5>
            <div className={`${index==4?'flex  flex-wrap md:block  mb-10':''}`}>         
             {e.links.map((link,i) => {
               return (<>
                <a key={i} className={`flex text-mysecondary-dark-40 font-normal lg:text-lg md:text-sm text-sm mb-18 pb-2 md:pb-[18px] mr-5  w-max h-max ${index==4?'border border-neutral-800 rounded-lg py-2.5 px-4 mr-3 mb-3  ':''} `}> {link.a} <img className='pl-3.55' src={link.i||''} alt="" /> <p className={`ml-2 ${link.new==='New' ?'lg:h-8 h-22 lg:w-58 w-46 bg-gradient-to-r from-neutral-800 to-mysecondary-yellow-119  text-white text-base font-normal rounded-md p-px':''}`}> <span className='flex justify-center items-center w-full h-full bg-myprimary-dark-10  '>{link.new||''} </span></p></a></>
                 )
                })}
            </div>
            </div>
          )
       })} 
</div>
<div className='flex md:flex-nowrap   flex-wrap justify-between items-center text-mysecondary-dark-40 py-10 '>
<div className='flex'>    
<p className='lg:text-lg font-normal  text-sm border-r pr-footerline border-neutral-800'>Terms & Conditions </p>
<p className='lg:text-lg font-normal text-sm   pl-footerline'>Privacy Policy</p>
</div>
<div className='flex'>   
     {icons.map((e,index) => {
    return (
    <a href='#' key={index} className={`${index==1?'px-6':''}`}> <img src={e.icon} alt="" /></a>
    )
    })}
</div>
<p className='lg:text-lg text-sm font-normal'>© 2024 FutureTech. All rights reserved.</p>
</div>
</div>
  )
}

export default Footer