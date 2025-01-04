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
    <div className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex items-start justify-between flex-col lg:flex-row border-y border-neutral-800">
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

      <div className="w-full py-[60px] lg:border-l border-l-neutral-800 lg:pl-[60px] 2xl:pl-20">
      <div className="mx-auto md:max-w-[800px] lg:max-w-[880px] 2xl:w-[920px]">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <div
                key={index}
                className="bg-[#1A1A1A] dark:border-gray-700 rounded-xl mb-4"
              >
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 text-white dark:text-gray-400 text-[16px] md:text-[18px] lg:text-[20px]"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="flex items-center gap-3">
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
                    <p className="text-[#7E7E81] dark:text-gray-400 text-[14px] md:text-[16px] lg:text-[18px]">
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
