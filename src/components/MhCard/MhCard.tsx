import React from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'

interface MhCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  pageType: "podcast" | "news"; 
}

const MhCard: React.FC<MhCardProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  pageType,
}) => {
  const isNewsPage = pageType === "news";

  return (
    <div
      className={`text-white ${
        isNewsPage ? "w-full  md:max-w-[560px] xl:max-w-[718px]" 
        : "w-full lg:max-w-[386.67px] 3xl:max-w-[470.67px] flex flex-col gap-5 lg:gap-6 2xl:gap-7.5"
      } py-10 lg:py-[60px] 2xl:py-20`}
    >
      <div className={`relative w-full ${ isNewsPage ? 'mb-5 2xl:mb-7.5' : ''} `}>
        <img src={imageUrl} alt={title} className="h-full w-full" />
      </div>
      <div >
        <h2
          className={`${
            isNewsPage ? "text-lg lg:text-xl 2xl:text-2xl mb-1 lg:mb-[6px] 2xl:mb-2.5 line-clamp-1 3xl:whitespace-nowrap" 
            : "text-base lg:text-lg 2xl:text-[22px] mb-[6px] lg:mb-2.5 2xl:mb-[14px]"
          } font-semibold `}
        >
          {title}
        </h2>
        <p className="text-sm md:text-base 2xl:text-lg font-normal text-myprimary-gray-60 line-clamp-2  ">
          {description}
        </p>
      </div>
      {!isNewsPage && (
        <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={buttonText} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"}  />
      )}
    </div>
  );
};

export default MhCard;
