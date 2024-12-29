import React from "react";

interface MhCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  arrowIconUrl: string;
  pageType: "podcast" | "news"; 
}

const MhCard: React.FC<MhCardProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  arrowIconUrl,
  pageType,
}) => {
  const isNewsPage = pageType === "news";

  return (
    <div
      className={`text-white ${
        isNewsPage ?  "w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[718px]" : "w-[470.67px]"
      } py-5`}
    >
      <div className="relative w-full mb-7.5">
        <img src={imageUrl} alt={title} className="h-full w-full" />
      </div>
      <div className={`mb-7.5 ${isNewsPage ? "mb-0" : ""}`}>
        <h2
          className={`mt-5 ${
            isNewsPage ? "text-lg" : "text-[22px]"
          } font-semibold mb-3.5`}
        >
          {title}
        </h2>
        <p className="text-sm font-normal text-myprimary-gray-60">
          {description}
        </p>
      </div>
      {!isNewsPage && (
        <button className="flex items-center text-myprimary-gray-60 gap-2.5 py-[18px] px-6 border border-myborder-dark-color rounded-xl text-lg">
          {buttonText}
          <img
            src={arrowIconUrl}
            alt="arrow icon"
            className="w-[16.5px] h-[16.5px]"
          />
        </button>
      )}
    </div>
  );
};

export default MhCard;
