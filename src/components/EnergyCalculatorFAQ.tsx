"use client";

import { useState } from "react";
import faqs from "../constants/faqs";

export default function EnergyCalculatorFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full px-6 md:px-16 py-20 bg-gray-900 text-white">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Frequently asked questions
      </h2>

      {/* FAQ List */}
      <div className="divide-y divide-gray-700">
        {faqs.map((faq, index) => {
          const isOpen = index === activeIndex;

          return (
            <div key={index} className="py-6">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>

                <span className="text-2xl font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
