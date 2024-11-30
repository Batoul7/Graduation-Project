import React from "react";
import img1 from './../../assets/images/Arrows/goArrow.png'
interface LeftCardProps {
    title: string;
    description: string;
    icon: string;
    buttonText?: string;
    buttonLabel?: string;
    stars?: string[];
    host?: string;
    pageType: "podcast" | "contact" | "default";
}

const LeftCard: React.FC<LeftCardProps> = ({
    title,
    description,
    icon,
    buttonText,
    buttonLabel,
    stars = [],
    host ,
    pageType,
}) => {
    return (
        <div className="bg-myprimary-dark-08 text-white w-[519px] p-8 rounded-lg">
            <div className="mb-8">
                <img src={icon} alt="Icon" className="w-16 h-16" />
            </div>
            <div className={pageType === "podcast" ? "flex items-center justify-between" : ""}>
                <h2 className="text-[40px] font-semibold font-kumbhSans">
                    {title}
                </h2>
                {pageType === "podcast" && (
                    <div className="flex gap-[7px] border border-myborder-dark-color rounded-[100px] px-4 py-2.5">
                        {stars.map((star, index) => (
                            <img
                                key={index}
                                src={star}
                                alt={`Star ${index + 1}`}
                                className="w-6 h-6"
                            />
                        ))}
                    </div>
                )}
            </div>

            {pageType === "podcast" ? (
                <div className="bg-myprimary-dark-10 px-7.5 py-[32.5px]  rounded-[13px] flex items-center justify-between mt-[30px]">
                    <div>
                        <p className="text-lg font-normal text-myprimary-gray-60 mb-1">Host</p>
                        <p className="text-lg font-medium">{host}</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-2.5 bg-myprimary-dark-08 px-6 py-3 text-sm font-medium text-myprimary-gray-60 rounded-lg">
                            {buttonLabel}
                            <img src={img1} alt="arrow-icon" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-lg font-normal text-myprimary-gray-60">{description}</p>
            )}
            {pageType === "contact" && buttonText && (
                <div className="mt-[50px]">
                    <button className="flex items-center gap-2.5 bg-myprimary-dark-10 px-6 py-[18px] text-lg font-normal text-myprimary-gray-60 rounded-md">
                        {buttonText}
                        <img src={img1} alt="icon" className="w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default LeftCard;
