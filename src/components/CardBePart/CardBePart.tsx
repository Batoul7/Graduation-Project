
import { DataBePart } from "../../Data/CardBePartData"
import CardTitle from "../CardTitle/CardTitle"

const CardBePart = () => {

  return (

<div className=" md:flex-nowrap flex-wrap flex lg:gap-5 lg:p-5 p-2.5 gap-2.5 bg-myprimary-dark-08 border border-neutral-800 rounded-xl">
    {DataBePart.map((e,index)=>{return(   
     <CardTitle key={index} ClassImg={e.ClassImg} ClassCardBePart='lg:w-[505.33px] md:w-[413.33px] lg:rounded-xl md:rounded-red-10 border border-neutral-800 lg:p-10 md:p-[30px] p-6 bg-myprimary-dark-10 'btnCardBe={e.img}subTitleTwo={e.subTitleTwo} ClasssubTitleTwo=''TitleCard={e.title} iconImg=''alt='' subTitle=''/>)
     })}
</div>

  )
}

export default CardBePart
