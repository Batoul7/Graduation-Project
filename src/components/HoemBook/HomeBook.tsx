import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../../Data/books";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgEyesBtn from './../../assets/images/common/eye-yellow.png'

interface HomeBookProps {
    bookIndex: number;
}

const HomeBook: React.FC<HomeBookProps> = ({ bookIndex }) => {
    const books: Book[] = useSelector((state: RootState) => state.books.books);

    const book = books[bookIndex];

    return (
        <div className="bg-myprimary-dark-08 text-white rounded-lg flex flex-col lg:my-[60px] 2xl:my-[80px]">

            <div className="flex lg:flex-row flex-col 2xl:mb-[30px] mb-6 lg:items-center gap-5 ">
                <h2 className="2xl:text-2xl lg:text-xl text-lg   font-semibold lg:w-[51%] 2xl:w-[43%]  ">{book.title}</h2>
                <p className="2xl:text-lg  lg:text-lg text-sm font-normal  text-myprimary-gray-60 ">{book.topicsCoverage}</p>
            </div>
            <div>
                <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-[332px] rounded-xl 2xl:mb-[30px] mb-6"
                />
            </div>

            <div className="flex xl:flex-row flex-col gap-4 lg:gap-5 2xl:mb-[30px] lg:mb-6 mb-4 ">
                <div className="bg-myprimary-dark-10 p-[30px] w-full xl:w-[60%] 2xl:w-[40%]">
                    <p className="2xl:text-lg lg:text-base text-sm font-normal text-myprimary-gray-60 mb-1">Total {book.type}</p>
                    <p className="2xl:text-xl lg:text-lg text-base font-semibold">{book.total}</p>
                </div>
                <div className="bg-myprimary-dark-10 p-4 rounded-md flex items-center justify-between w-full">
                    <div>
                        <p className="2xl:text-lg lg:text-base text-sm font-normal text-myprimary-gray-60 mb-1">Download Formats</p>
                        <p className="2xl:text-xl lg:text-lg text-base font-semibold">{book.downloadFormat}</p>
                    </div>
                    <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} EyesRadius='EyesRadius' contentBtn={'Preview'} hiddenArrow='hiddenArrow' altimagebtn={'image'} imgEyes={imgEyesBtn} />
                </div>
            </div>
            <div className="bg-myprimary-dark-10 rounded-md lg:mb-0 mb-10 p-[30px]">
                <p className="2xl:text-lg lg:text-base text-sm font-normal text-myprimary-gray-60 mb-1">Average Author Expertise</p>
                <p className="2xl:text-xl lg:text-lg text-base font-semibold">{book.description}</p>
            </div>
        </div>
    );
};

export default HomeBook;
