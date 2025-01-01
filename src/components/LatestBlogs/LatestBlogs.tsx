import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { last4blogs } from "../../redux/slice/BlogSlice";
import like from "../../assets/images/common/reaction-dark.png";
import share from "../../assets/images/common/send.png";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'

const LatestBlogs = () => {
  const dispatch = useDispatch();
  const last4Blogs = useSelector(
    (state: RootState) => state.newsBlog.last4Blogs
  );

  useEffect(() => {
    dispatch(last4blogs());
  }, [dispatch]);

  return (
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 border-y border-neutral-800">
      <div className="container mx-auto justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-7.5 lg:gap-10 2xl:gap-20 py-10 lg:py-[60px] 2xl:py-20 border-b border-neutral-800">
          <div className="w-full lg:max-w-[515px]">
            <img
              src={last4Blogs[0]?.cover}
              alt={last4Blogs[0]?.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="pt-0 lg:pt-[21px] 2xl:pt-[34px] flex flex-col gap-5 lg:gap-10 2xl:gap-[50px]">
            <div>
              <h2 className="text-xl lg:text-2xl 2xl:text-[32px] text-white">
                {last4Blogs[0]?.title}
              </h2>
              <p className="text-base lg:text-lg 2xl:text-xl font-light text-left text-[#98989A] mt-[6px] lg:mt-[14px] 2xl:mt-7.5">
                {last4Blogs[0]?.desc}
              </p>
            </div>
            <div className="flex gap-5 lg:gap-7.5 2xl:gap-[50px]">
              <div className="flex flex-col gap-[2px] 2xl:gap-1">
                <p className="text-sm lg:text-base 2xl:text-lg text-[#98989A] font-light">Category</p>
                <p className="text-sm lg:text-base 2xl:text-lg text-white font-light">
                  {last4Blogs[0]?.category}
                </p>
              </div>
              <div className="flex flex-col gap-[2px] 2xl:gap-1">
                <p className="text-sm lg:text-base 2xl:text-lg text-[#98989A] font-light">
                  Publication Date
                </p>
                <p className="text-sm lg:text-base 2xl:text-lg text-white font-light">
                  {last4Blogs[0]?.date}
                </p>
              </div>
              <div className="flex flex-col gap-[2px] 2xl:gap-1">
                <p className="text-sm lg:text-base 2xl:text-lg text-[#98989A] font-light">Author</p>
                <p className="text-sm lg:text-base 2xl:text-lg text-white font-light">
                  {last4Blogs[0]?.author}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center sm:items-start">
              <div className="flex gap-2 2xl:gap-2.5 h-[33px] 2xl:h-11 ">
                <button className="w-[73px] 2xl:w-[87px] p-[6px] 2xl:p-2 text-myprimary-gray-60 flex justify-center items-center  gap-1
                  border border-neutral-800 bg-myprimary-dark-10 rounded-full">
                  <img src={like} className="w-5 h-5 2xl:w-6 2xl:h-6" alt="" />
                  <p className="text-sm 2xl:text-lg ">{`${last4Blogs[0]?.reactions}k`}</p>
                </button>
                <button className="w-[77px] 2xl:w-[92px] p-[6px] 2xl:p-2 text-myprimary-gray-60 justify-center items-center flex gap-1 border border-neutral-800 bg-myprimary-dark-10  rounded-full">
                  <img src={share} className="w-5 h-5 2xl:w-6 2xl:h-6" alt="" />
                  <p className="text-sm 2xl:text-lg ">{last4Blogs[0]?.shares}</p>
                </button>
              </div>
              <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'Read More'}  hiddenEyes={"hiddenEyes"} imgArrowbtn={imgArrowHero}   />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-x-7.5 mx-auto justify-center">
          {last4Blogs.map((blog, index) =>
            index !== 0 ? (
              <div
                className={`w-full py-10 lg:py-[60px] 2xl:py-20 min-h-[350px] sm:max-w-[406.67px]  2xl:max-w-[512px] 
                   border-b sm:border-b-0 border-neutral-800 flex flex-col gap-4 2xl:gap-5
                  ${index === 0 && "col-span-1 sm:col-span-2" }`}
                key={index}
              >
                <div className='w-full h-[185px] 2xl:h-[222px]'>
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                  <div>
                    <h2 className="text-base 2xl:text-xl text-white line-clamp-1">
                      {blog.title}
                    </h2>
                    <p className="font-inter text-sm lg:text-base 2xl:text-xl font-light text-left text-myprimary-gray-60 mt-1 2xl:mt-2.5">
                      {blog?.category}
                    </p>
                  </div>
                 
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 2xl:gap-2.5 h-[33px] 2xl:h-11">
                      <button className="max-w-20 p-[6px] 2xl:p-2 text-myprimary-gray-60 justify-center items-center text-sm 2xl:text-lg flex gap-1 border  border-neutral-800 bg-myprimary-dark-10 rounded-full">
                        <img src={like} className="w-5 h-5 2xl:w-6 2xl:h-6 " alt="" />
                        <p className="text-sm 2xl:text-lg ">{`${blog.reactions}k`}</p> 
                      </button>
                      <button className="max-w-20 p-[6px] 2xl:p-2 text-myprimary-gray-60 justify-center items-center text-sm 2xl:text-lg flex gap-1 border  border-neutral-800 bg-myprimary-dark-10 rounded-full">
                        <img src={share} className="w-5 h-5 2xl:w-6 2xl:h-6" alt="" />
                        <p className="text-sm 2xl:text-lg ">{blog.shares}</p> 
                      </button>
                    </div>
                    {/* <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'Read More'} hiddenArrow={'hiddenArrow'}  hiddenEyes={"hiddenEyes"}   /> */}
                    <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'Read More'}
                      imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"}
                      NewsCards='NewsCards' />
                  </div>
                </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
