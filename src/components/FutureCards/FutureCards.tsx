import React from "react";

import { CardData } from "../../Data/FutureCardsData"; 
import FutureCard from "../FutureCard/FutureCard";

interface FutureCardsProps {
  cardsData: CardData[]; 
}

const FutureCards: React.FC<FutureCardsProps> = ({ cardsData }) => {
  return (
    <div data-aos="fade-up" className="grid grid-cols-1 border-neutral-800 border-t md:border-t-0 2xl:border-none 
    lg:grid sm:grid-cols-2 gap-[10px] lg:w-[65%]
    lg:gap-5 2xl:gap-[30px] py-[30px] xl:py-[60px]
    2xl:py-20 max-391:ps-4 max-391:pe-4 xl:pe-0 2xl:pe-0 xl:ps-[60px] 2xl:ps-20
    w-full
    ">
      {cardsData.map((card, index) => (
        <FutureCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default FutureCards;
