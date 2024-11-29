// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import MainTitle from "../components/MainTitle/MainTitle";
import Testimonials from "../components/Testimonials/Testimonials";




export default function HomePage() {

  // const books = useSelector((state: RootState) => state.books.books);

  return (
    <div>
     <MainTitle title="FutureTech Features" subtitle="Unlock the Power of"/>
      <Testimonials/>
    </div>
  );
};
