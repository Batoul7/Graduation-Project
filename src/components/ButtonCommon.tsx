
interface BtnProps {
  navbtn:string ;
  herobtnAndCommon:string;
  contentBtn:string;
  imgArrowbtn:string;
  altimagebtn:string;
  mainsmall:string;
  filterBtn:string;
  hiddenArrow:string;
  EbookHome:string;
  imgEyes:string;
  hiddenEyes:string;
  footerBtn:string;
}


export default function ButtonCommon({navbtn ,EbookHome, herobtnAndCommon , contentBtn , imgArrowbtn  , altimagebtn , mainsmall ,filterBtn ,hiddenArrow , imgEyes , hiddenEyes , footerBtn } : BtnProps) {
  return (
      <button className={` whitespace-nowrap text-myprimary-gray-60 font-normal rounded-xl border border-solid border-neutral-800  text-sm 2xl:text-lg font-inter leading-5 2xl:leading-6.5 

       ${navbtn ? 'px-[14px] py-[10px] 2xl:px-5 2xl:py-3.5 bg-myprimary-yellow-55 rounded-rad-10 text-myprimary-dark-08 border-0 font-medium   ' : ''}

        ${herobtnAndCommon ? ' sm:px-5 sm:py-3.5 2xl:py-4.5 2xl:px-6 bg-transparent  flex gap-2.5 justify-center items-center w-max ' : ''}

       ${mainsmall ? ' max-w-[310px] xl:max-w-[180px] 2xl:max-w-[231px]' : ''}

        ${filterBtn ? 'bg-myprimary-dark-10 w-[151.83px] xl:[201.67px] 2xl:w-[294.33px] text-white ' : ''}

        ${footerBtn ? ' py-2 px-3.5 2xl:py-2.5 2xl:px-4' : ''}

        ${EbookHome ? 'w-full' : '' }

        `}>


      {contentBtn}
      <img src={imgArrowbtn} alt={altimagebtn} className={`${hiddenArrow ? 'hidden' : ''} text-base`} ></img>
      <img src={imgEyes} alt={altimagebtn} className={`${hiddenEyes ? 'hidden' : ''} text-xl`} ></img>
      </button>
  )
}
