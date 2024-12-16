import icon1 from '../../assets/images/HomePage/icon-1.png'
import icon2 from '../../assets/images/HomePage/icon-2.png'
import icon3 from '../../assets/images/HomePage/icon-3.png'

import BCard from './BCard'

export default function BCards() {
    const cardData = [
        {
            icon:icon1,
            title:"Latest News Updates",
            subtitle:"Stay Current",
            text:"Over 1,000 articles published monthly"
        },
        {
            icon:icon2,
            title:"Expert Contributors",
            subtitle:"Trusted Insights",
            text:"50+ renowned AI experts on our team"
        },
        {
            icon:icon3,
            title:"Global Readership",
            subtitle:"Worldwide Impact",
            text:"2 million monthly readers"
        },
    ]

  return (
    <div className="bg-myprimary-dark-08 px-4 xl:px-20 2xl:px-mainpaddinglarge border-y border-neutral-800 
       flex justify-center xl:justify-between items-center flex-wrap ">
      {
       cardData.map((item,index) => {
        return (
            <BCard key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} text={item.text}/>
        )
       }) 
      }
    </div>
  )
}
