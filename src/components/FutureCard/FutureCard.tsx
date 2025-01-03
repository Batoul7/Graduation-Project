import React from "react";

interface FutureCardProps {
  title: string;
  description: string;
}

const FutureCard: React.FC<FutureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-myprimary-dark-10 p-6 xl:p-[30px] 2xl:p-[40px] rounded-xl">
      <h3 className=" font-medium text-lg xl:text-xl 2xl:text-2xl leading-[27px] xl:leading-[30px] 2xl:leading-9  mb-1 xl:mb-4 2xl:mb-5 text-white ">{title}</h3>
      <p className=" text-sm xl:text-base 2xl:text-[17.2px] font-normal text-myprimary-gray-60 leading-[21px] xl:leading-6 2xl:leading-[27px]  ">{description}</p>
    </div>
  );
};

export default FutureCard;
