import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'

interface TitleProps {
    title: string;
    subtitle: string;
    button:boolean;
    btntext?:string
}

export default function MainTitle({title,subtitle,button,btntext} : TitleProps) {
  return (
    <>
    <div className="py-[120px] px-4 xl:px-20 2xl:px-mainpaddinglarge bg-neutral-800 text-white font-medium
    flex flex-col md:flex-row  md:justify-between md:items-center gap-7.5 flex-wrap">
      <div className="xl:w-[60%]">
        <h5 className="text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 w-fit rounded-rad-4 mb-4">{subtitle}</h5>
        <h2 className="text-[28px] md:text-[44px] 2xl:text-[58px] font-kumbhSans ">{title}</h2>
      </div>
      <div >
        {button &&
        <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={btntext} 
        imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} widthSmall='w-full' />
        }
      </div>
     
    </div>
  
     </>
  )
}
