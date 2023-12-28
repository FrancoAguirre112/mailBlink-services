"use client";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQs = ({ faqItems }) => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setVisibleAnswer((prev) => (prev === id ? null : id));
  };

  return (
    <main className="z-10 mb-12">
      <h3 className="mb-5 text-center text-4xl font-bold text-gray-900 lg:text-left">
        FAQ
      </h3>

      <div>
        {faqItems.map((item) => (
          <div key={item.id} className="mb-4">
            <div
              className={`flex gap-4 w-full z-40 relative cursor-pointer items-center justify-between rounded-t-md ${
                visibleAnswer === item.id ? "" : "rounded-b-md"
              } transition-all duration-300 bg-white px-3 py-4 font-semibold`}
              onClick={() => toggleAnswer(item.id)}
            >
              <span className="text-lg">{item.question}</span>
              <IoIosArrowDropdown
                style={{
                  transform: `rotate(${
                    visibleAnswer === item.id ? "180deg" : "0deg"
                  })`,
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>

            <div
              className="overflow-hidden relative -top-1.5 z-30 rounded-b-md bg-[#f6f8fc] px-6 pb-4 text-sm"
              style={{
                maxHeight: visibleAnswer === item.id ? "200px" : "0",
                paddingTop: visibleAnswer === item.id ? "10px" : "0",
                paddingBottom: visibleAnswer === item.id ? "10px" : "0",
                transition:
                  "max-height 0.3s ease-in-out, padding 0.3s ease-in-out",
              }}
            >
              <p
                className={`opacity-${
                  visibleAnswer === item.id ? "100" : "0"
                } transition-opacity duration-300`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQs;
