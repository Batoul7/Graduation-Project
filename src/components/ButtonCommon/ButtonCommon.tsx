
interface BtnProps {
  navbtn?:string ;
  herobtnAndCommon?:string;
  contentBtn?:string;
  imgArrowbtn?:string;
  altimagebtn?:string;
  mainsmall?:string;
  filterBtn?:string;
  filterBtnActive?:string;
  hiddenArrow?:string;
  EbookHome?:string;
  imgEyes?:string;
  hiddenEyes?:string ;
  footerBtn?:string;
  ResourseDepthReportsActive?:string;
  ResourseDepthReports?:string;
  ResourseCardBook?:string;
  ResourseCardBookActive?:string;
  EyesRadius?:string;
  ContactRadius?:string;
  widthSmall?: string
}

export default function ButtonCommon({navbtn , EyesRadius , ContactRadius ,EbookHome, herobtnAndCommon , contentBtn , imgArrowbtn  , altimagebtn , mainsmall , filterBtn ,filterBtnActive ,hiddenArrow , imgEyes , hiddenEyes , footerBtn , ResourseDepthReportsActive ,ResourseDepthReports , ResourseCardBook ,ResourseCardBookActive, widthSmall } : BtnProps) {
  return (
      <button className=
      
      {` whitespace-nowrap text-myprimary-gray-60 font-normal rounded-xl border border-solid border-neutral-800  text-sm 2xl:text-lg font-inter leading-5 2xl:leading-[27px]

        ${navbtn ? '!text-myprimary-dark-08  px-[14px] py-[10px] 2xl:px-5 2xl:py-3.5 bg-myprimary-yellow-55 !rounded-rad-10  !border-0 !font-medium   ' : ''}
        ${herobtnAndCommon ? (`${widthSmall} px-5 py-3.5 2xl:py-4.5 2xl:px-6 bg-myprimary-dark-08 flex gap-2.5 justify-center items-center md:w-max `) : ''}
        ${mainsmall ? ' max-w-[310px] xl:max-w-[180px] 2xl:max-w-[231px] ' : ''}
        ${EyesRadius ? 'rounded-[10px]' : ''}
        ${filterBtnActive ? 'bg-myprimary-dark-10 rounded-lg w-[151.83px] xl:w-[201.67px] 2xl:w-[294.33px] text-white h-[57px] xl:h-[69px] 2xl:h-[87px]  ' : ''}
        ${filterBtn ? 'bg-myborder-dark-color rounded-lg w-[151.83px] xl:w-[201.67px] 2xl:w-[294.33px] h-[57px] xl:h-[69px] 2xl:h-[87px]  ' : ''}
        ${footerBtn ? ' py-2 px-3.5 2xl:py-2.5 2xl:px-4 rounded-lg  bg-myprimary-dark-08  flex gap-2.5 justify-center items-center w-max ' : ''}
        ${EbookHome ? 'h-[63px] w-full max-w-[358px] xl:w-full xl:max-w-[413px] 2xl:w-full 2xl:max-w-[519px]  bg-myprimary-dark-08  flex gap-2.5 justify-center items-center  ' : '' }
        ${ResourseDepthReportsActive ? 'bg-myborder-dark-color rounded-[10px] text-white h-[49px] 2xl:h-[63px] w-[106px] xl:w-[128px] 2xl:w-[197px] ' : '' }
        ${ResourseDepthReports ? 'bg-myprimary-dark-10 rounded-lg text-myprimary-gray-60 h-[49px] 2xl:h-[63px] w-[106px] xl:w-[128px] 2xl:w-[197px] ' : '' }
        ${ResourseCardBookActive ? 'bg-myprimary-dark-10 rounded-lg text-myprimary-gray-60 h-[49px] 2xl:h-[63px] w-[174px] xl:w-[188.33px] 2xl:w-[225.33px] ' : '' }
        ${ResourseCardBook ? 'bg-myprimary-dark-08 rounded-xl text-myprimary-gray-60 h-[49px] 2xl:h-[63px] w-[174px] xl:w-[188.33px] 2xl:w-[225.33px] ' : '' }
        ${ContactRadius ? 'rounded-lg bg-myprimary-dark-10 ' : '' }
        `}>
      {contentBtn}
      <img src={imgArrowbtn} alt={altimagebtn} className={`${hiddenArrow ? 'hidden' : ''} text-base`} ></img>
      <img src={imgEyes} alt={altimagebtn} className={`${hiddenEyes ? 'hidden' : ''} text-xl`} ></img>
      </button>
  )
}
