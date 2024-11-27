import icon from '../../images/Footer/icon.png'
import twitter from '../../images/Footer/twitter.png'
import linkedin from '../../images/Footer/LinkedIn.png' 
import arrow from '../../images/Arrows/goArrow.png'



const Footer = () => {
    const FooterData  = [
        {
            title: 'Home',
            links  : [
                {
                    new:'',
                    i:'',
                    a: 'Features'
                },
                {
                    new:'',
                    i:'',
                    a: 'Blogs'
                },
                {
                   
                    a: 'Resources',
                    new:'New'
                },
                {
                    a: 'Testimonials'
                },
                {
                    a: 'Contact Us'
                },
                {
                    a: 'Newsletter'
                }
            ]
        },
        {
            title: 'News',
            links: [
                {   
                    new:'',
                    i:'',
                    a: 'Trending Stories'
                },
                {
                    a: 'Featured Videos'
                },
                {
                    a: 'Technology'
                },
                {
                    a: 'Health'
                },
                {
                    a: 'Politics'
                },
                {
                    a:'Environment'
                }
            ]
        },
        {
            title: 'Blogs',
            links: [
                { new:'',
                    i:'',
                    a: 'Quantum Computing'
                },
                {
                    a: 'AI Ethics'
                },
                {
                    a: 'Space Exploration'
                },
                {
                    a: 'Biotechnology',
                    new:'New',
                },
                {
                    a: 'Renewable Energy'
                },
                {
                    a:'Biohacking'
                }
            ]
        },
        {
            title: 'Podcasts',
            links: [
                { new:'',
                    i:'',
                    a: 'AI Revolution'
                },
                {
                    a: 'AI Revolution',
                    new:'New'
                },
                {
                    a: 'TechTalk AI'
                },
                {
                    a: 'AI Conversations'
                },

            ]
        },
        {
            title: 'Resources',
            links: [
                {  new:'',
                    a: 'Whitepapers',
                    i:arrow
                },
                {
                    a: 'Ebooks',
                    i:arrow
                },
                {
                    a: 'Reports',
                    i:arrow
                },
                {
                    a: 'Research Papers',
                    i:arrow
                },

            ]
        }
    ]
    const icons = [
        {
            icon: twitter
        },
        {
            icon: icon
        },
        {
            icon: linkedin
        },

    ]
 
  return (<div className='lg:px-162  md:px-20 px-4 bg-myprimary-dark-08'>
  <div className="flex justify-between pb-67 pt-20 border-b border-neutral-800 md:flex-nowrap flex-wrap ">
      {FooterData.map((e,index) => {
       return (
          <div key={index}  >
           <h5 className='text-white lg:text-xl md:text-lg font-medium  pb-9'>{e.title}</h5>
            <div className={`${index==4?'flex  flex-wrap md:block':''}`}>         
             {e.links.map((link,i) => {
               return (<>
                <a key={i} className={`flex text-mysecondary-dark-40 font-normal text-lg sm:text-sm mb-18 w-max h-max ${index==4?'border border-neutral-800 rounded-lg py-2.5 px-4 mr-3  ':''} `}> {link.a} <img className='pl-3.55' src={link.i||''} alt="" /> <p className={`ml-2 ${link.new==='New' ?'lg:h-8 sm:h-22 lg:w-58 sm:w-46 bg-gradient-to-r from-neutral-800 to-mysecondary-yellow-119  text-white text-base font-normal rounded-md p-px':''}`}> <span className='flex justify-center items-center w-full h-full bg-myprimary-dark-10  '>{link.new||''} </span></p></a></>
                 )
                })}
            </div>
            </div>
          )
       })} 
</div>
<div className='flex md:flex-nowrap   flex-wrap justify-between items-center text-mysecondary-dark-40 py-10 '>
<div className='flex'>    
<p className='lg:text-lg font-normal  sm:text-sm border-r pr-footerline border-neutral-800'>Terms & Conditions </p>
<p className='lg:text-lg font-normal sm:text-sm   pl-footerline'>Privacy Policy</p>
</div>
<div className='flex'>   
     {icons.map((e,index) => {
    return (
    <a href='#' key={index} className={`${index==1?'px-6':''}`}> <img src={e.icon} alt="" /></a>
    )
    })}
</div>
<p className='lg:text-lg sm:text-sm font-normal'>© 2024 FutureTech. All rights reserved.</p>
</div>
</div>
  )
}

export default Footer