import React from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

interface BookResourcesProps {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
    category: string;
    author: string;
}

const BookResources: React.FC<BookResourcesProps> = ({
    imageUrl,
    title,
    description,
    date,
    category,
    author,
}) => {
    return (
        <div className="text-white lg:w-[57.45%] ">
            <div className="h-[303px] 2xl:mb-[30px] md:mb-6 mb-5">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full rounded-[12px]"
                />
            </div>
            <div className="flex items-center justify-between gap-[30px] 2xl:mb-[50px] md:mb-10 mb-[30px] flex-wrap lg:flex-nowrap ">
                <div className="">
                    <h2 className="2xl:text-[26px] md:text-xl text-lg font-semibold 2xl:mb-3.5 md:mb-2.5 mb-1.5 ">{title}</h2>
                    <p className="text-myprimary-gray-60 leading-[27px] 2xl:text-lg md:text-base text-sm">{description}</p>
                </div>
                <ButtonCommon ResourseCardBook='ResourseCardBook' contentBtn='Download PDF Now' hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes' />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400">
                <div className="2xl:p-[30px] md:p-6 p-5 bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm font-normal mb-1">Publication Date:</p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">{date}</p>
                </div>
                <div className="2xl:p-[30px] md:p-6 p-5 bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm  font-normal mb-1">Category:</p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">{category}</p>
                </div>
                <div className="col-span-2 md:col-span-1 2xl:p-[30px] md:p-6 p-5  bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm  font-normal mb-1">Author:</p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">{author}</p>
                </div>
            </div>


        </div>
    );
};

export default BookResources;
