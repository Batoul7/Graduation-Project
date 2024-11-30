import React from "react";

interface FutureCardProps {
  title: string;
  description: string;
}

const FutureCard: React.FC<FutureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-myprimary-dark-10 p-7.5 w-[363.5px] rounded-rad-10">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-base font-normal text-myprimary-gray-60">{description}</p>
    </div>
  );
};

export default FutureCard;
