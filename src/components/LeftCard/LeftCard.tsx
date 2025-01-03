import React from "react";
import img1 from './../../assets/images/Arrows/goArrow.png';
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import Stars from "../B_Stars/Stars";




interface LeftCardProps {
    title: string;
    description: string;
    icon: string;
    btncontent?: string;
    buttonText?: string;
    buttonLabel?: string;
    rating?: number;
    host?: string;
    pageType: "podcast" | "contact" | "default" | "book";
    form?:boolean
}

const LeftCard: React.FC<LeftCardProps> = ({
    title,
    description,
    icon,
    buttonText,
    buttonLabel,
    rating,
    host,
    pageType,
    btncontent,
    form
}) => {
    return (
        <div className={`bg-myprimary-dark-08 text-white ${pageType === "contact" ? 'w-full':''} sm:w-[413px]  2xl:w-[519px]   rounded-lg`}>
            <div>
                <img src={icon} alt="Icon" className={pageType === "contact" ? "w-[50px] lg:w-[60px] 2xl:w-20" : "w-[50px] xl:w-[48px] 2xl:w-16"} />
            </div>
            <div className={pageType === "podcast" ? "flex items-center justify-center !mt-[30px] !mb-[22px] xl:!mt-[40px] xl:!mb-[24px] 2xl:mt-[50px] 2xl:mb-[30px] " : ""}>
                <h2 className={`${form ? 'text-[28px] lg:text-[44px] 2xl:text-[58px] leading-9 lg:leading-[57.2px] 2xl:leading-[75.4px] lg:mt-7.5 mt-5 lg:-tracking-[3px] font-medium' 
                : "text-xl 2xl:text-[40px] xl:text-2xl !leading-[60px] lg:mt-10 mt-[30px]  font-semibold "}
                font-kumbhSans 2xl:mt-[50px] `}>
                    {title}
                </h2>
                {pageType === "podcast" && (
                    <Stars rating={rating} leftcardPod='leftcardPod' />
                )}
            </div>

            {pageType === "podcast" ? (
                <div className="bg-myprimary-dark-10 px-5 py-[23.5px] xl:p-6 2xl:px-7.5 2xl:py-[32.5px] rounded-[13px] flex items-center justify-between">
                    <div>
                        <p className=" text-sm xl:text-base 2xl:text-lg font-normal text-myprimary-gray-60 mb-1">Host</p>
                        <p className="text-sm xl:text-base 2xl:text-lg font-medium">{host}</p>
                    </div>
                    <div>
                        <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={buttonLabel} imgArrowbtn={img1} altimagebtn={'image'} hiddenEyes={"hiddenEyes"}  />
                    </div>
                </div>
            ) : pageType === "book" ? (
                <div className="2xl:mt-[30px] mt-2.5 ">
                    {description && (
                        <p className="2xl:text-lg md:text-base text-sm font-normal text-myprimary-gray-60 mb-[50px] ">
                            {description}
                        </p>
                    )}
                    <ButtonCommon contentBtn={btncontent} imgArrowbtn={img1} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} EbookHome='EbookHome' />
                </div>
            ) : (
                <p className="2xl:text-lg md:text-base text-sm 2xl:mt-[30px] md:mt-2.5 mt-1.5 font-normal text-myprimary-gray-60 ">{description}</p>
            )}

            {pageType === "contact" && buttonText && (
                <div className="mt-[50px]">
                    <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'contact@ai-podcasts.com'} imgArrowbtn={img1} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} ContactRadius='ContactRadius' />
                </div>
            )}
        </div>
    );
};

export default LeftCard;

