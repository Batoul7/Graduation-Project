import BoxDownloadedBook from "../BoxDownloadedBook/BoxDownloadedBook";
import LeftCard from "../LeftCard/LeftCard";
import img1 from './../../assets/images/HomePage/people-book.png';
import img2 from './../../assets/images/HomePage/icon-6.png';
import HomeBook from "../HoemBook/HomeBook";

function BookSection1() {
    return (
        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[60px] xl:gap-[120px] 2xl:gap-[160px]">
            <div className=" lg:my-0 my-10">
                <LeftCard
                    btncontent="Download Ebooks Now"
                    title="Ebooks"
                    icon={img2}
                    description="Explore our collection of ebooks covering a wide spectrum of future technology topics."
                    pageType="book"
                    buttonText="Download Ebooks Now"
                />

                <div className="mt-5 lg:mt-8 2xl:mt-[60px] mb-10 lg:mb-0 ">
                    <BoxDownloadedBook
                        spriteImage={img1}
                        downloads="10k+ Users"
                    />
                </div>
            </div>
            <div>
                <HomeBook bookIndex={0} />
            </div>
        </div>
    );
}

export default BookSection1;
