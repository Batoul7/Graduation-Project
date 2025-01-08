import BookResources from "../components/BookResources/BookResources";
import LeftCard from "../components/LeftCard/LeftCard";
import MainTitle from "../components/B_MainTitle/MainTitle";
import CardNumberCounter from "../components/CardNumberCounter/CardNumberCounter";
import HeroCommon from "../components/HeroCommon/HeroCommon";
import { CounterCard2 } from "../Data/HomeData";
import { useSelector } from "react-redux";
import { selectBookData, selectActiveTab, BookData } from "../Data/BookDataSlice";
import BookCard from "../components/BookCard/BookCard";
import books2 from "../Data/BookData2";

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
      <HeroCommon CommonHeroTitle={"Unlock a World of Knowledge "} CommonHeroText={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} Resourse={"Resourse"} Resourcecommonhero={"Resourcecommonhero"} />
      <div className="  px-4 xl:px-20 2xl:px-mainpaddinglarge flex flex-wrap justify-center items-center sm:flex-nowrap bg-myprimary-dark-08 border-neutral-800 border [&>*:nth-child(2)]:sm:!w-[439px] [&>*:nth-child(3)]:sm:!w-[439px] [&>*:nth-child(1)]:!border-l-0 [&>*:nth-child(1)]:border-b [&>*:nth-child(2)]:border-b [&>*:nth-child(3)]:sm:border-l [&>*:nth-child(3)]:border-l-0 ">
          <CardNumberCounter HeroCard={CounterCard2} resourseCount={"resourseCount"} />
      </div>
      <div>
        <MainTitle
          title="In-Depth Reports and Analysis"
          subtitle="Dive into the Details"
          link=""
          button={false}
          btnbook={true}
        />
      </div>
      <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08  flex flex-col gap-[160px]">
        {filteredData.map((book: BookData) => (
          <div key={book.title} className="flex flex-col">
            <div className="flex justify-between lg:items-center lg:gap-[120px] 2xl:gap-[160px] lg:flex-row flex-col gap-[80px] border-b border-neutral-800 py-10 lg:py-[60px] 2xl:py-20">
              <LeftCard
                btncontent="Download Ebooks Now"
                title={book.title}
                icon={book.imageUrl3}
                description={book.description2}
                pageType="default"
                ResourseBook='ResourseBook'
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
            <div className="flex justify-between lg:items-center lg:gap-[120px] 2xl:gap-[160px] lg:flex-row flex-col gap-[80px] py-10 lg:py-[60px] 2xl:py-20">
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
      
      <div className="bg-myprimary-dark-08 py-20 px-4 xl:px-20 2xl:px-mainpaddinglarge">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-[92px] gap-[60px]">
          {books2.slice(-3).map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
