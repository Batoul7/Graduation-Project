import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { last4blogs } from "../../redux/slice/BlogSlice";
import like from "../../assets/images/common/reaction-dark.png";
import share from "../../assets/images/common/send.png";

const LatestBlogs = () => {
  const dispatch = useDispatch();
  const last4Blogs = useSelector(
    (state: RootState) => state.newsBlog.last4Blogs
  );

  useEffect(() => {
    dispatch(last4blogs());
  }, [dispatch]);

  return (
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge py-[5%] bg-myprimary-dark-10">
      <div className="container mx-auto justify-center items-center">
        <div className="flex mb-10 pb-10 flex-col md:flex-row items-stretch">
          <div className="w-full lg:w-1/3">
            <img
              src={last4Blogs[0]?.cover}
              alt={last4Blogs[0]?.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="sm:p-0 md:px-5 mt-5  lg:w-2/3">
            <h2 className="text-base xs:text-sm md:text-base lg:text-lg text-white">
              {last4Blogs[0]?.title}
            </h2>
            <p className="font-inter text-sm font-light text-left text-[#98989A] mt-5">
              {last4Blogs[0]?.desc}
            </p>
            <div className="w-2/2 lg:w-2/3 flex flex-wrap justify-between gap-5 mt-8">
              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#98989A] font-light">Category</p>
                <p className="text-xs text-white font-light">
                  {last4Blogs[0]?.category}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#98989A] font-light">
                  Publication Date
                </p>
                <p className="text-xs text-white font-light">
                  {last4Blogs[0]?.date}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#98989A] font-light">Author</p>
                <p className="text-xs text-white font-light">
                  {last4Blogs[0]?.author}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="gap-2 flex">
                <button className="text-[#98989A] justify-center items-center text-xs flex gap-1 border border-[#262626] px-3 bg-[#1A1A1A] rounded-full">
                  <img src={like} className="w-4 h-4" alt="" />
                  {last4Blogs[0]?.reactions}
                </button>
                <button className="text-[#98989A] justify-center items-center text-xs flex gap-1 border border-[#262626] px-3 bg-[#1A1A1A] rounded-full">
                  <img src={share} className="w-4 h-4" alt="" />
                  {last4Blogs[0]?.shares}{" "}
                </button>
              </div>
              <button className="text-[#98989A] text-xs justify-center items-center rounded-lg py-2 px-3">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto justify-center">
          {last4Blogs.map((blog, index) =>
            index !== 0 ? (
    <div
      className={`w-full min-h-[350px] sm:max-w-[600px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] items-center mx-auto justify-center ${
        index === 0 && "col-span-1 sm:col-span-2"
      }`}
      key={index}
    >
      <div className="">
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="py-5">
        <h2 className="text-base xs:text-sm md:text-sm lg:text-base text-white">
          {blog.title}
        </h2>
        <p className="font-inter text-sm font-light text-left text-[#98989A] mt-5">
          {blog?.category}
        </p>
        <div className="flex justify-between mt-8">
          <div className="gap-2 flex">
            <button className="text-[#98989A] justify-center items-center text-xs flex gap-1 border border-[#262626] px-3 bg-[#1A1A1A] rounded-full">
              <img src={like} className="w-4 h-4" alt="" />
              {blog.reactions}
            </button>
            <button className="text-[#98989A] justify-center items-center text-xs flex gap-1 border border-[#262626] px-3 bg-[#1A1A1A] rounded-full">
              <img src={share} className="w-4 h-4" alt="" />
              {blog.shares}{" "}
            </button>
          </div>
          <button className="text-[#98989A] text-xs justify-center items-center rounded-lg py-2 px-3">
            Read more
          </button>
        </div>
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
