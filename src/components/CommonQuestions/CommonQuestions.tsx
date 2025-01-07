import { useState } from "react";
import { useSelector } from "react-redux";
import LeftCard from "../LeftCard/LeftCard";
import icon2 from "./../../assets/images/ContactPage/icon-2.png";
import PlusImg from '../../assets/images/ContactPage/plus.png'
import MinusImg from '../../assets/images/ContactPage/minus.png'


const CommonQuestions = () => {
  const faqs = useSelector((state: any) => state.faq);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex items-center flex-col lg:flex-row border-y border-neutral-800 
     ">
      <div className="pr-5 py-10">
        <LeftCard
          title="Asked Questions"
          description="If the question is not available in our FAQ section, feel free to contact us personally, and we will resolve your doubts."
          icon={icon2}
          pageType="contact"
          buttonText="Ask Question"
          btncontent="Ask Question"
        />
      </div>
      <div className="w-fit xl:w-[748px] 3xl:w-[917px] flex flex-1 flex-col gap-5 lg:gap-6 2xl:gap-7.5 py-10 lg:py-[60px] 2xl:py-20  border-t border-t-neutral-800 lg:border-t-0 lg:border-l border-l-neutral-800 lg:pl-[60px] 2xl:pl-20">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <div data-aos="fade-up"
                key={index}
                className="bg-myprimary-dark-10 rounded-xl"
              >
                <h2 >
                  <button 
                    type="button"
                    className="w-full flex items-center justify-between p-6 2xl:p-[34px] text-white text-base xl:text-[18px] 2xl:text-[20px]"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="flex items-center gap-3 !text-start">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[20px] font-bold ${
                        openIndex === index
                          ? "text-gray-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {openIndex === index ? 
                      <img src={MinusImg} alt="minus" className="2xl:w-6" />
                       : 
                      <img src={PlusImg} alt="plus"  className="2xl:w-6"/> }
                    </span>
                  </button>
                </h2>
                {openIndex === index && (
                  <div className=" p-6 2xl:p-[34px] border-t border-neutral-800">
                    <p className="text-myprimary-gray-50 text-sm xl:text-[16px] 2xl:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
  
  );
};

export default CommonQuestions;
