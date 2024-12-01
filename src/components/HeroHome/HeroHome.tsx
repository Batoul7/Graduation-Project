import ButtonCommon from "../ButtonCommon/ButtonCommon";
import CardNumberCounter from "../CardNumberCounter/CardNumberCounter";
import HeroTitleH1 from "../HeroTitleH1/HeroTitleH1";



interface HeroCard {
    number:string ;
    mult:string;
    parcard:string;
}



interface HeroProps {
    HeroCard: HeroCard | any ;
    par1:string;
    title:string;
    par2:string;
    img1:string;
    altimg1:string;
    subtitle:string;
    par3:string;
    contentBtn:string;
    imgArrowbtn:string;
    altimagebtn:string;
    imgEyes:string;
}

// pt-41


export default function HeroHome({ HeroCard , par1 , title , par2 , img1 , altimg1 , subtitle , par3 , contentBtn , imgArrowbtn, altimagebtn ,imgEyes } :HeroProps ) {

  return (
    <div className="px-mainpaddingsmall xl:px-mainpaddingmedium 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex flex-wrap  sm:h-screen ">
        <div className="flex flex-col justify-between sm:w-2.5/4 pt-10 sm:pt-25 2xl:pt-37 ">
            <div className="flex flex-col justify-center items-start border-neutral-800 " >
                <p className="font-medium font-kumbhSans text-mysecondary-dark-40  text-lg xl:text-1.5xl 2xl:text-3xl leading-6.7 xl:leading-6.8 2xl:leading-9 pb-4 xl:pb-5 2xl:pb-7.5 ">{par1}</p>
                <HeroTitleH1 title={title} mainhero='mainhero' newcommonhero={""} podcastcommonhero={""} Resourcecommonhero={""} />
                <p className="font-normal text-myprimary-gray-50 text-sm xl:text-base 2xl:text-lg leading-6.7 xl:leading-6 2xl:leading-7 pb-7.5 sm:pb-0 ">{par2}</p>
            </div>
            <div className="flex pb-2.5  border-neutral-800 border border-l-0 border-r-0 border-b-0 sm:[&>*:nth-child(2)]:w-82 [&>*:nth-child(1)]:border-l-0 [&>*:nth-child(1)]:ps-0 [&>*:nth-child(3)]:border-e-0  ">
                <CardNumberCounter HeroCard={HeroCard} />
            </div>
        </div>
        <div className="bg-[url('./assets/images/HomePage/HeroDesign.png')] bg-cover bg-no-repeat bg-center ps-10 xl:ps-20 flex flex-col justify-end sm:w-4.5/12 pb-10 xl:pb-13 2xl:pb-20 border-neutral-800 border-l ">
            <img src={img1} alt={altimg1} className=" w-43 2xl:w-53 pb-5 2xl:pb-7.5" ></img>
            <h5 className="font-medium text-lg xl:text-xl 2xl:text-2xl text-white pb-0.5 xl:pb-1 2xl:pb-3.5 leading-6.5 xl:leading-7.5 2xl:leading-9 ">{subtitle}</h5>
            <p className="font-medium text-sm xl:text-base 2xl:text-lg  text-myprimary-gray-60 pb-5 2xl:pb-7.5 leading-5 xl:leading-5.5 2xl:leading-6.5 ">{par3}</p>
            <ButtonCommon herobtnAndCommon={'herobtn'} navbtn={''} contentBtn={contentBtn} imgArrowbtn={imgArrowbtn} altimagebtn={altimagebtn} mainsmall={"mainsmall"} filterBtn={""} hiddenArrow={""} EbookHome={""} imgEyes={imgEyes} hiddenEyes={"hiddenEyes"} footerBtn={""}  />
        </div>
    </div>
  )
}

