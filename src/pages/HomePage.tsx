// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import MainTitle from "../components/MainTitle/MainTitle";
import Testimonials from "../components/Testimonials/Testimonials";
import HeroHome from "../components/HeroHome/HeroHome";
import imgpeople from './../assets/images/HomePage/SubContainer-1.png'
import imgArrowHero from './../assets/images/Arrows/goArrow.png'
import imgEyesBtn from './../assets/images/common/eye-yellow.png'
import FutureSection from "../components/FutureSection/FutureSection";
import icon4 from './../assets/images/HomePage/icon-4.png';
import icon5 from './../assets/images/HomePage/icon-5.png';
import BookSections from "../components/BookSections/BookSections";

interface HeroCard {
  id:number;
  number:string ;
  mult:string;
  parcard:string;
}

interface CardData {
  title: string;
  description: string;
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

  const cardsData: Array<CardData> = [
    {
        title:'Quantity' ,
        description:'Over 1,000 articles on emerging tech trends and breakthroughs.' ,
    } ,
    {
        title:'Variety' ,
        description:'Articles cover fields like AI, robotics, biotechnology, and more.' ,
    } ,
    {
        title:'Frequency' ,
        description:'Fresh content added daily to keep you up to date.' ,
    } ,
    {
        title:'Authoritative' ,
        description:'Written by our team of tech experts and industry professionals.' ,
    } ,

  ]
  const cardsData2: Array<CardData> = [
    {
        title:'Depth' ,
        description:'500+ research articles for in-depth understanding.' ,
    } ,
    {
        title:'Graphics' ,
        description:'Visual aids and infographics to enhance comprehension.' ,
    } ,
    {
        title:'Trends' ,
        description:'Explore emerging trends in future technology research.' ,
    } ,
    {
        title:'Contributors' ,
        description:'Contributions from tech researchers and academics.' ,
    } ,

  ]

  return (
    <div>
      <HeroHome HeroCard={HeroCard} par1={"Your Journey to Tomorrow Begins Here"} 
      title={"Explore the Frontiers of Artificial Intelligence"} par2={"Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."} 
      img1={imgpeople} altimg1={"people image"} subtitle={"Explore 1000+ resources"} 
      par3={"Over 1,000 articles on emerging tech trends and breakthroughs."}
      contentBtn={"Explore Resources"} imgArrowbtn={imgArrowHero} altimagebtn={"image arrow btn"} imgEyes={imgEyesBtn} />
      <MainTitle title="FutureTech Features" subtitle="Unlock the Power of" button={false}/>
      <FutureSection cardsData={cardsData} title={"Future Technology Blog"} description={"Stay informed with our blog section dedicated to future technology."} icon={icon4} />
      <FutureSection cardsData={cardsData2} title={"Research Insights Blogs"} description={"Dive deep into future technology concepts with our research section."} icon={icon5} />
      <MainTitle title="Unlock Valuable Knowledge with FutureTech's Resources" subtitle="Your Gateway to In-Depth Information" button={true} btntext='View All Resources'/>
      <BookSections/>
      <MainTitle title="Real Words from Real Readers" subtitle="What Our Readers Say" button={true} btntext='View All Testimonials'/>
      <Testimonials/>
    </div>
  );
};