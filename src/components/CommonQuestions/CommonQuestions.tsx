import { useState } from "react";
import { useSelector } from "react-redux";
import LeftCard from "../LeftCard/LeftCard";
import icon2 from "./../../assets/images/ContactPage/icon-2.png";

const CommonQuestions = () => {
  const faqs = useSelector((state: any) => state.faq);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex 
    items-center xl:items-start justify-center xl:justify-between flex-col lg:flex-row border-y border-neutral-800
     ">
      <div className="pr-5 py-[60px]">
        <LeftCard
          title="Asked Questions"
          description="If the question is not available in our FAQ section, feel free to contact us personally, and we will resolve your doubts."
          icon={icon2}
          pageType="contact"
          buttonText="Ask Question"
          btncontent="Ask Question"
        />
      </div>

      <div className="py-[60px] lg:border-l border-l-neutral-800 lg:pl-[60px] 2xl:pl-20 w-full max-w-[415px] sm:w-full min-760:max-w-[690px] lg:w-full lg:!max-w-[829px] 2xl:w-full 2xl:!max-w-[941px]">
      <div className="mx-auto w-full">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <div
                key={index}
                className="bg-[#1A1A1A] dark:border-gray-700 rounded-xl mb-5 xl:mb-6 2xl:mb-[30px]"
              >
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-6 2xl:p-[34px] text-white dark:text-gray-400 text-base xl:text-[18px] 2xl:text-[20px]"
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
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                </h2>
                {openIndex === index && (
                  <div className="p-5 border-t border-[#262626] dark:border-gray-700">
                    <p className="text-[#7E7E81] dark:text-gray-400 text-sm xl:text-[16px] 2xl:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
