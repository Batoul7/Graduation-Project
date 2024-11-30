import React from "react";

import { CardData } from "../../Data/FutureCardsData"; 
import FutureCard from "../FutureCard/FutureCard";

interface FutureCardsProps {
  cardsData: CardData[]; 
}

const FutureCards: React.FC<FutureCardsProps> = ({ cardsData }) => {
  return (
    <div className="grid grid-cols-2 gap-5 py-[60px] ps-[60px]">
      {cardsData.map((card, index) => (
        <FutureCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default FutureCards;
