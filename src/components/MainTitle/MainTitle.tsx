import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowbtn from '../../assets/images/Arrows/goArrow.png'
import imgEyes from '../../assets/images/common/eye-yellow.png'
interface TitleProps {
    title: string;
    subtitle: string;
    button: boolean;
}

export default function MainTitle({title,subtitle,button} : TitleProps) {
  return (
    <>
    <div className="py-[120px] px-4 md:px-20 2xl:px-mainpaddinglarge bg-neutral-800 text-white font-medium
    flex justify-between">
      <div>
      <h5 className="text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 w-fit rounded-rad-4 mb-4">{subtitle}</h5>
      <h2 className="text-[28px] md:text-[44px] 2xl:text-[58px] font-kumbhSans ">{title}</h2>
      </div>
      {
      button && 
      <ButtonCommon herobtnAndCommon={'bg-myprimary-dark-08'} contentBtn={'View All Testimonials'} imgArrowbtn={imgArrowbtn} altimagebtn={'alt'}  imgEyes={imgEyes} hiddenEyes={"hiddenEyes"}  />
    }
    </div>
  
     </>
  )
}
