
interface HeroCard {
    number:string ;
    mult:string;
    parcard:string;
}


interface CardNumberCounterProps {
    HeroCard: HeroCard[];
}


export default function CardNumberCounter({HeroCard} : CardNumberCounterProps   ) {
  return (
    <>
        {HeroCard?.map((item: HeroCard ,index: number) => (
            <div key={index} className="sm:w-[297.67px] py-5 xl:py-7.5 2xl:py-[50px] ps-5 sm:ps-[50px] border-neutral-800 border-l ">
                <div className="flex font-semibold pb-0.5 2xl:pb-2.5 text-2xl xl:text-3xl 2xl:text-4.5xl leading-9 xl:leading-[45px] 2xl:leading-[60px] ">
                    <h3 className=" text-white " >{item.number}</h3>
                    <span className="text-myprimary-yellow-55 ">{item.mult}</span>
                </div>
                <p className="text-myprimary-gray-60 font-normal pb-5 2xl:pb-7.5 text-sm 2xl:text-lg leading-5 2xl:leading-7 ">{item.parcard}</p>
            </div>
            )
        )}
     </>
  )
}
