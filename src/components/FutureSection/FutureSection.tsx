import { CardData } from "../../Data/FutureCardsData";
import FutureCards from "../FutureCards/FutureCards";
import LeftCard from "../LeftCard/LeftCard";



interface FutureCardsProps {
    cardsData: CardData[];
    title:string ;
    description:string ;
    icon:string ;

}

export default function FutureSection({ cardsData , title , description , icon   }: FutureCardsProps): JSX.Element {
    return (
        <div className="bg-myprimary-dark-08 border-neutral-800 border-y px-4 xl:px-20 2xl:px-mainpaddinglarge
         flex flex-wrap justify-start items-start lg:flex-nowrap ">
            <div className="py-[50px] xl:py-[122.5px] 2xl:py-[155px] pe-0 xl:pe-[60px] 2xl:pe-20 border-neutral-800 lg:border-r">
                <LeftCard
                    title={title}
                    description={description}
                    icon={icon}
                    pageType={"default"}  
                    homefeaturemargin ='homefeaturemargin'             />
            </div>
                <FutureCards cardsData={cardsData} />
        </div>
    );
}





// text-2xl xl:text-3xl 2xl:text-[40px] leading-9 xl:leading-[45px] 2xl:leading-[60px]