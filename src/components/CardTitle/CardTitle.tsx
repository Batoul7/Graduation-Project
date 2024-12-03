interface CardTitle{ClassImg:boolean,
    ClassCardBePart:string,
    iconImg:string,
    alt:string,
    btnCardBe:string,
    subTitleTwo:string,
    ClasssubTitleTwo:string,
    subTitle:string,
    TitleCard:string,
}
const CardTitle = ({ClassImg,ClassCardBePart,iconImg,alt,btnCardBe,subTitleTwo,subTitle,TitleCard}:CardTitle) => {
  return (
    <div className={ClassCardBePart}>
 {/*if (ClassImg)==false components is BePart else ComponentHero*/}
    <div className={`${ClassImg?'flex w-[49.99px] h-[50px]':'hidden'}`}>
     <img className="w-full" src={iconImg} alt={alt} />
     </div>
     <div className="flex justify-between items-center pb-5 h-[52px]">
        <div className="">
           <h3 className={`text-white ${ClassImg?'lg:text-xl md:text-lg font-medium w-[353.33px]':' font-semibold text-[22px]'}`}>{TitleCard}</h3>
            <p className={`${ClassImg?'text-lg font-normal':'hidden'} `}>{subTitle}</p>
        </div>
        <button className="lg:w-[52px] lg:h-[52px] md:w-[44px] md:h-[44px]"><img src={btnCardBe} alt={alt} /></button>
     </div>
 
     <p className={`font-normal text-myprimary-gray-60 ${ClassImg?'lg:text-xl md:text-base':'text-lg font-kumbhSans '} `}>{subTitleTwo}</p>
    </div>
  )
}

export default CardTitle
