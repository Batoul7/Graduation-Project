import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'
import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
  subtitle: string;
  button: boolean;
  btntext?: string,
  desc?: boolean,
  txt?: string,
  link?: string
}

export default function MainTitle({ title, subtitle, button, btntext, desc, txt ,link}: TitleProps) {
  return (
    <>
      <div className={`${desc ? '' : '2xl:py-[120px] md:py-[80px] py-10 px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-10'} text-white font-medium
    flex flex-col md:flex-row  md:justify-between md:items-center gap-7.5 flex-wrap`}>
        <div className={`${desc ? 'w-full' : 'xl:w-[60%]'}`}>
          <h5 className={`${desc ? 'md:block hidden' : '' } text-sm md:text-base 2xl:text-xl py-1.5 px-2.5 bg-myprimary-dark-20 w-fit rounded-rad-4 mb-4`}>{subtitle}</h5>
          <h2 className="text-[28px] md:text-[44px] 2xl:text-[58px] font-kumbhSans ">{title}</h2>
        </div>
        {desc && <p className="text-xs md:text-sm 2xl:text-lg font-inter text-myprimary-gray-60">{txt}</p>}
        <div >
          {button &&
            <Link to={link !== undefined ? link : ''}>
              <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={btntext}
                imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} widthSmall='w-full' />
            </Link>

          }
        </div>

      </div>

    </>
  )
}
