
interface HeroCard {
    number:string ;
    mult:string;
    parcard:string;
}


interface CardNumberCounterProps {
    HeroCard: HeroCard[];
    resourseCount?:string ;
    heroCount?:string ;
}


export default function CardNumberCounter({HeroCard , resourseCount , heroCount} : CardNumberCounterProps   ) {
  return (
    <>
        {HeroCard?.map((item: HeroCard ,index: number) => (
            <div key={index} className={`
             ${heroCount ? 'sm:w-[297.67px] py-5 xl:py-7.5 2xl:py-[50px] ps-5 sm:ps-[50px]' : ''} border-neutral-800 border-l
             ${resourseCount ? 'w-[177px] h-[97px] sm:w-[359px] sm:h-[210px] 2xl:h-[287px] flex justify-center items-center flex-col max-389:border-x-0 max-389:border-y  ' : ''}`}>
                <div className={`flex font-semibold pb-0.5 2xl:pb-2.5 text-2xl xl:text-3xl 2xl:text-4.5xl leading-9 xl:leading-[45px] 2xl:leading-[60px] ${
                  resourseCount ? 'text-2xl sm:text-[40px] 2xl:text-6xl   ' : ''
                }`}>
                    <h3 className=" text-white  " >{item.number}</h3>
                    <span className="text-myprimary-yellow-55  ">{item.mult}</span>
                </div>
                <p className={`text-myprimary-gray-60 font-normal pb-5 2xl:pb-7.5 text-sm 2xl:text-lg leading-5 2xl:leading-7 
                ${resourseCount ? 'text-sm sm:text-base' : ''}
                `}>{item.parcard}</p>
            </div>
            )
        )}
     </>
  )
}
