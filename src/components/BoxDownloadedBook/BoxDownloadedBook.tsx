import React from "react";

interface BoxDownloadedBookProps {
    spriteImage: string;
    downloads: string;
}

const BoxDownloadedBook: React.FC<BoxDownloadedBookProps> = ({
    spriteImage,
    downloads,

}) => {
    return (
        <div className="bg-myprimary-dark-10 w-fit  flex-wrap rounded-[13px] text-white flex gap-[30px] 2xl:gap-[50px]  2xl:p-[30px] sm:p-5 px-[30px] py-5 ">
            <div>
                <p className="2xl:text-lg text-sm font-normal text-myprimary-gray-60 mb-4">Downloaded By</p>
                <p className="2xl:text-2xl sm:text-xl text-lg font-semibold">{downloads}</p>
            </div>
            <div className="w-[149px] md:w-[193px] h-[70px]">
                <img src={spriteImage} alt="img" className="w-full" />
            </div>
        </div>
    );
};

export default BoxDownloadedBook;
