import React, { useState } from "react";
import { useSelector } from "react-redux";
import LeftCard from "../LeftCard/LeftCard";
import icon2 from "./../../assets/images/ContactPage/icon-2.png";

const CommonQuestions = () => {

  const faqs = useSelector((state: any) => state.faq);

  console.log(faqs);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle accordion visibility
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-[60px] px-4 xl:px-20 2xl:px-mainpaddinglarge mx-auto bg-myprimary-dark-08 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <LeftCard
          title="Asked Questions"
          description="If the question is not available in our FAQ section, feel free to contact us personally, and we will resolve your doubts."
          icon={icon2}
          pageType="contact"
          buttonText="Ask Question"
          btncontent="Ask Question"
        />
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5">
        {faqs.map(
          (faq: { question: string; answer: string }, index: number) => (
            <div
              key={index}
              className="bg-[#1A1A1A] dark:border-gray-700 rounded-xl mb-4"
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5  text-white dark:text-gray-400 text-[16px] md:text-[18px] lg:text-[20px]"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex items-center gap-3">
                    {faq.question}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      openIndex === index ? "text-gray-500" : "text-yellow-500"
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
  );
};

export default CommonQuestions;
