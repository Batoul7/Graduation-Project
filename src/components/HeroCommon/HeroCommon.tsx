import HeroTitleH1 from "../HeroTitleH1/HeroTitleH1";


interface HeroCommonProps {
    CommonHeroTitle?:string ;
    CommonHeroText?:string;
    neww?:string;
    podcast?:string;
    Resourse?:string;
    newcommonhero?:string;
    podcastcommonhero?:string;
    Resourcecommonhero?:string;
  }
  // pt-[189px]

export default function HeroCommon({CommonHeroTitle , CommonHeroText , neww , podcast , Resourse , newcommonhero , podcastcommonhero , Resourcecommonhero } : HeroCommonProps ) {
  return (
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 h-screen flex items-start  sm:items-center pt-[189px] sm:pt-0 ">
      <div className="relative w-full">
          <HeroTitleH1 title={CommonHeroTitle} newcommonhero={newcommonhero} podcastcommonhero={podcastcommonhero} Resourcecommonhero={Resourcecommonhero}  />
          <span className={`font-normal text-myprimary-gray-60 inline relative lg:absolute text-sm sm:text-[15px] leading-[21px] sm:leading-6 2xl:leading-[27px]

              ${podcast ? ' xl:left-[424px] lghero:left-[600px] 2xl:left-[619px] xl:top-[70px] 2xl:top-[120px] xl:ms-[60px] 2xl:ms-[80px] 2xl:text-[17px] ' : ''}


                ${neww ? 'left-0 lg:left-[260px] 2xl:left-[350px] sm:top-[90px] 2xl:top-[130px] xl:ms-[60px]  2xl:ms-[79px] 2xl:text-[17px]  ' : ''}
                
                 ${Resourse ? 'left-0 xl:left-[280px] 2xl:left-[370px] sm:top-[90px] 2xl:top-[140px] xl:ms-[60px] 2xl:ms-[80px] 2xl:text-lg   ' : ''} `}>

                  {CommonHeroText}
                  </span>
      </div>




      {/* <div>
      Hello I'm
<pre>
  Kinda
</pre>
</div> */}
    </div>
  )
}
