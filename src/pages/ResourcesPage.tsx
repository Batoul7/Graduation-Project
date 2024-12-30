
import CardNumberCounter from "../components/CardNumberCounter/CardNumberCounter";
import HeroCommon from "../components/HeroCommon/HeroCommon";
import { CounterCard2 } from "../Data/HomeData";



export default function ResourcesPage() {


  CounterCard2
  return (
    <div>
      <HeroCommon CommonHeroTitle={"Unlock a World of Knowledge "} CommonHeroText={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} Resourse={"Resourse"} Resourcecommonhero={"Resourcecommonhero"} />

      <div className="  px-4 xl:px-20 2xl:px-mainpaddinglarge flex flex-wrap justify-center items-center sm:flex-nowrap bg-myprimary-dark-08 border-neutral-800 border [&>*:nth-child(2)]:sm:!w-[439px] [&>*:nth-child(3)]:sm:!w-[439px] [&>*:nth-child(1)]:!border-l-0 [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*:nth-child(3)]:sm:border-l [&>*:nth-child(3)]:border-l-0 ">
          <CardNumberCounter HeroCard={CounterCard2} resourseCount={"resourseCount"} />
      </div>
    </div>
  )
}
