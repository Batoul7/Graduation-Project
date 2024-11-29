import HeroTitleH1 from "../HeroTitleH1/HeroTitleH1";


interface HeroCommonProps {
    CommonHeroTitle:string ;
    CommonHeroText:string;
    neww:string;
    podcast:string;
    Resourse:string;
    newcommonhero:string;
    podcastcommonhero:string;
    Resourcecommonhero:string;
  }
  // pt-38.9

export default function HeroCommon({CommonHeroTitle , CommonHeroText , neww , podcast , Resourse , newcommonhero , podcastcommonhero , Resourcecommonhero } : HeroCommonProps ) {
  return (
    <div className="px-mainpaddingsmall xl:px-mainpaddingmedium 2xl:px-mainpaddinglarge bg-myprimary-dark-08 h-screen flex items-start  sm:items-center pt-38.9 sm:pt-0 ">
      <div className="relative w-full">
          <HeroTitleH1 title={CommonHeroTitle} mainhero={''} newcommonhero={newcommonhero} podcastcommonhero={podcastcommonhero} Resourcecommonhero={Resourcecommonhero}  />
          <span className={`font-normal text-myprimary-gray-60 inline relative lg:absolute text-sm sm:text-[15px] 2xl:text-lg  leading-[21px] sm:leading-6 2xl:leading-[27px]  ${podcast ? ' ms-0 xl:ms-[500px] lghero:ms-[600px] 2xl:ms-[670px] xl:top-[70px] 2xl:top-[120px]' : ''}  ${neww ? 'ms-0 lg:ms-[260px] 2xl:ms-[360px] sm:top-[90px] 2xl:top-[130px] ' : ''} ${Resourse ? 'ms-0 xl:ms-[310px] 2xl:ms-[450px] sm:top-[90px] 2xl:top-[140px] ' : ''} `}>{CommonHeroText}</span>
      </div>
    </div>
  )
}