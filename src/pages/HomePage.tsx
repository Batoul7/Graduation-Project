// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import MainTitle from "../components/MainTitle/MainTitle";
import Testimonials from "../components/Testimonials/Testimonials";
import HeroHome from "../components/HeroHome/HeroHome";
import imgpeople from './../assets/images/HomePage/SubContainer-1.png'
import imgArrowHero from './../assets/images/Arrows/goArrow.png'
import imgEyesBtn from './../assets/images/common/eye-yellow.png'
interface HeroCard {
  id:number;
  number:string ;
  mult:string;
  parcard:string;
}


export default function HomePage() {

  // const books = useSelector((state: RootState) => state.books.books);
  
  const HeroCard: Array<HeroCard> = [
    {
      id: 1,
      number: '300',
      mult: "+",
      parcard: "Resources available"
    } ,
    {
      id: 2,
      number: '12k',
      mult: "+",
      parcard: "Total Downloads"
    } ,
    {
      id: 3,
      number: '10k',
      mult: "+",
      parcard: "Active Users"
    } ,

  ]


  return (
    <div>
    <HeroHome HeroCard={HeroCard} par1={"Your Journey to Tomorrow Begins Here"} title={"Explore the Frontiers of Artificial Intelligence"} par2={"Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."} img1={imgpeople} altimg1={"people image"} subtitle={"Explore 1000+ resources"} par3={"Over 1,000 articles on emerging tech trends and breakthroughs."} contentBtn={"Explore Resources"} imgArrowbtn={imgArrowHero} altimagebtn={"image arrow btn"} imgEyes={imgEyesBtn} />
     <MainTitle title="FutureTech Features" subtitle="Unlock the Power of" button={true}/>
      <Testimonials/>
    </div>
  );
};
