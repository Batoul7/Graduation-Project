

interface HeroTitleProps {
  title?:string ;
  mainhero?:string;
  newcommonhero?:string;
  podcastcommonhero?:string;
  Resourcecommonhero?:string;
}

export default function HeroTitleH1({title , mainhero , newcommonhero , podcastcommonhero , Resourcecommonhero} : HeroTitleProps ) {
  return (
    <h1 className={`font-medium font-kumbhSans text-white ${mainhero ? 'pb-2  xl:pb-3 2xl:pb-5 text-3xl sm:text-5.5xl 2xl:text-[70px]  leading-9 sm:leading-[66px] 2xl:leading-[84px] ' : ''}
     ${newcommonhero ? ' w-full max-w-[700px] 2xl:max-w-[900px] pb-3.5 sm:pb-0  text-[28px] sm:text-5.5xl 2xl:text-[80px]  leading-9 sm:leading-[71.5px] 2xl:leading-[104px] ' : ''} 
     ${Resourcecommonhero ? ' w-full xl:max-w-[700px] 2xl:max-w-[800px] pb-3.5 sm:pb-0 text-[28px] sm:text-5.5xl 2xl:text-[80px]  leading-9 sm:leading-[71.5px] 2xl:leading-[104px]' : ''} 
     ${podcastcommonhero ? ' pb-3.5 sm:pb-0 w-full 2xl:max-w-[1694px] lghero:text-[60px] text-[28px] sm:text-5.5xl 2xl:text-[80px]  leading-9 sm:leading-[71.5px] 2xl:leading-[104px] ' : ''} `}>{title}</h1>
  )
}