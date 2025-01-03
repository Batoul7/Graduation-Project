import React from "react";
import { jsPDF } from "jspdf";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import img1 from './../../assets/images/Arrows/goArrow.png'
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
    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text(title, 10, 20);
        doc.setFontSize(12);
        doc.text(`Description: ${description}`, 10, 30);
        doc.text(`Publication Date: ${date}`, 10, 40);
        doc.text(`Category: ${category}`, 10, 50);
        doc.text(`Author: ${author}`, 10, 60);
        doc.save(`${title}.pdf`);
    };

    return (
        <div className="text-white lg:w-[57.45%]">
            <div className="h-[303px] 2xl:mb-[30px] md:mb-6 mb-5">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full rounded-[12px] object-cover"
                />
            </div>
            <div className="flex items-center justify-between gap-[30px] 2xl:mb-[50px] md:mb-10 mb-[30px] flex-wrap lg:flex-nowrap ">
                <div className="">
                    <h2 className="2xl:text-[26px] md:text-xl text-lg font-semibold 2xl:mb-3.5 md:mb-2.5 mb-1.5 ">
                        {title}
                    </h2>
                    <p className="text-myprimary-gray-60 leading-[27px] 2xl:text-lg md:text-base text-sm">
                        {description}
                    </p>
                </div>
                <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'Download PDF Now'} imgArrowbtn={img1} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} onClick={handleDownloadPDF} widthSmall="w-full sm:w-fit"  />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400">
                <div className="2xl:p-[30px] md:p-6 p-5 bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm font-normal mb-1">
                        Publication Date:
                    </p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">
                        {date}
                    </p>
                </div>
                <div className="2xl:p-[30px] md:p-6 p-5 bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm  font-normal mb-1">
                        Category:
                    </p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">
                        {category}
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1 2xl:p-[30px] md:p-6 p-5  bg-myborder-dark-color rounded-lg">
                    <p className="2xl:text-lg md:text-base text-sm  font-normal mb-1">
                        Author:
                    </p>
                    <p className="text-white font-medium 2xl:text-xl md:text-base text-sm">
                        {author}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookResources;
