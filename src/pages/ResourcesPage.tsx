import BookResources from "../components/BookResources/BookResources";
import CardNumberCounter from "../components/CardNumberCounter/CardNumberCounter";
import HeroCommon from "../components/HeroCommon/HeroCommon";
import LeftCard from "../components/LeftCard/LeftCard";
import MainTitle from "../components/MainTitle/MainTitle";
import countersData from './../Data/CounterData';



import { useSelector } from "react-redux";
import { selectBookData, selectActiveTab, BookData } from "../redux/slice/BookDataSlice";

export default function ResourcesPage() {
  const bookData = useSelector(selectBookData);
  const activeTab = useSelector(selectActiveTab);

  const filteredData = bookData.filter((book: BookData) => {
    if (activeTab === "Whitepapers") return book.category === "Quantum Computing";
    if (activeTab === "Ebooks") return book.category === "Artificial Intelligence";
    if (activeTab === "Reports") return book.category === "Space Exploration";
    return true;
  });

  return (
    <div>
      <HeroCommon
        CommonHeroTitle={"Unlock a World of Knowledge "}
        CommonHeroText={
          "Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
        }
        neww={""}
        podcast={""}
        Resourse={"Resourse"}
        newcommonhero={""}
        podcastcommonhero={""}
        Resourcecommonhero={"Resourcecommonhero"}
      />
      <div className="flex bg-myprimary-dark-08 px-4 xl:px-20 2xl:px-mainpaddinglarge justify-between flex-wrap items-center">
        <CardNumberCounter HeroCard={countersData} />
      </div>
      <div>
        <MainTitle
          title="In-Depth Reports and Analysis"
          subtitle="Dive into the Details"
          button={false}
          btnbook={true}
        />
      </div>
      <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 py-20 flex flex-col gap-[160px]">
        {filteredData.map((book: BookData) => (
          <div key={book.title} className="flex flex-col lg:gap-[120px] 2xl:gap-[160px]">
            <div className="flex justify-between lg:items-center lg:gap-[120px] 2xl:gap-[160px]  lg:flex-row flex-col gap-[80px] mb-[80px]">
              <LeftCard
                btncontent="Download Ebooks Now"
                title={book.title}
                icon={book.imageUrl3}
                description={book.description2}
                pageType="default"
              />
              <BookResources
                imageUrl={book.imageUrl}
                title={book.title}
                description={book.description}
                date={book.date}
                category={book.category}
                author={book.author}
              />
            </div>
            <div className="flex justify-between lg:items-center lg:gap-[120px] 2xl:gap-[160px]  lg:flex-row flex-col gap-[80px]">
              <LeftCard
                btncontent="Download Ebooks Now"
                title={book.title2}
                icon={book.imageUrl4}
                description={book.description4}
                pageType="default"
              />
              <BookResources
                imageUrl={book.imageUrl2}
                title={book.title2}
                description={book.description3}
                date={book.date2}
                category={book.category2}
                author={book.author2}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


