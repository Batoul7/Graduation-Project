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
import BCards from "../components/BCards/BCards";
import { BcardData, cardsData, cardsData2, CounterCard } from "../Data/HomeData";
import FM_Filteration from "../components/FM_Filteration/FM_Filteration";
import { Home_Filteration } from "../Data/BtnsFilterData";




export default function HomePage() {

  CounterCard
  cardsData
  cardsData2
  BcardData

  return (
    <div>
      <HeroHome HeroCard={CounterCard} par1={"Your Journey to Tomorrow Begins Here"} 
      title={"Explore the Frontiers of Artificial Intelligence"} 
      par2={"Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."} 
      parResponsive={"Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future."} 
      img1={imgpeople} altimg1={"people image"} subtitle={"Explore 1000+ resources"} 
      par3={"Over 1,000 articles on emerging tech trends and breakthroughs."}
      contentBtn={"Explore Resources"} imgArrowbtn={imgArrowHero} altimagebtn={"image arrow btn"} imgEyes={imgEyesBtn} />
      
      <BCards cardData={BcardData} />

      <MainTitle link="" title="FutureTech Features" subtitle="Unlock the Power of" button={false}/>
      <FutureSection cardsData={cardsData} title={"Future Technology Blog"} description={"Stay informed with our blog section dedicated to future technology."} icon={icon4} />
      <FutureSection cardsData={cardsData2} title={"Research Insights Blogs"} description={"Dive deep into future technology concepts with our research section."} icon={icon5} />
      <MainTitle link="" title="Explore FutureTech's In-Depth Blog Posts" subtitle="A Knowledge Treasure Trove" button={true} btntext='View All Blogs'/>
      <FM_Filteration btns={Home_Filteration}/>
      <MainTitle link="" title="Unlock Valuable Knowledge with FutureTech's Resources" subtitle="Your Gateway to In-Depth Information" button={true} btntext='View All Resources'/>
      <BookSections/>
      <MainTitle link="" title="Real Words from Real Readers" subtitle="What Our Readers Say" button={true} btntext='View All Testimonials'/>
      <Testimonials/>
    </div>
  );
};