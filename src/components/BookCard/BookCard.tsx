import React from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { jsPDF } from "jspdf";

type BookCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const BookCard: React.FC<BookCardProps> = ({ title, description, imageUrl }) => {

  const handleDownloadPDF = () => {
    const doc = new jsPDF();


    doc.setFontSize(20);
    doc.text(title, 10, 20); 
    doc.setFontSize(12);
    doc.text(description, 10, 30); 


    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      doc.addImage(img, "JPEG", 10, 40, 100, 100);
      doc.save(`${title}.pdf`); 
    };
  };

  return (
    <div data-aos="fade-up" className="text-white rounded-lg shadow-md flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full object-cover rounded-[12px] mb-5 md:mb-6 2xl:mb-[30px] lg:h-[290px] h-[223px]"
      />
      <h2 className="2xl:text-[22px] md:text-lg text-base font-semibold 2xl:mb-3.5 mb-2.5">{title}</h2>
      <p className="2xl:text-lg md:text-base text-sm text-myprimary-gray-60 2xl:mb-[30px] mb-6">{description}</p>
      <div className="flex gap-[10px]">
        <ButtonCommon
          ResourseCardBook="ResourseCardBook"
          contentBtn="View Details"
          hiddenArrow="hiddenArrow"
        />
        <ButtonCommon
          ResourseCardBookActive="ResourseCardBookActive"
          contentBtn="Download PDF Now"
          hiddenArrow="hiddenArrow"
          onClick={handleDownloadPDF} 
        />
      </div>
    </div>
  );
};

export default BookCard;
