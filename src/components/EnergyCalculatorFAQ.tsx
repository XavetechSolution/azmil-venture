"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the difference between On-Grid and Off-Grid systems?",
    answer:
      "On-grid systems are connected to the public electricity grid and reduce electricity bills, while off-grid systems rely on batteries and solar panels to operate independently.",
  },
  {
    question: "Which is better for Nigeria: On-Grid or Off-Grid?",
    answer:
      "Off-grid systems are ideal where power supply is unstable. On-grid systems are cheaper but depend on grid availability.",
  },
  {
    question: "How many hours should I set per day?",
    answer:
      "Estimate how long you use your appliances daily. Most homes average between 4–10 hours depending on usage patterns.",
  },
  {
    question: "Why do I need batteries in an off-grid system?",
    answer:
      "Batteries store solar energy for use at night or during outages, ensuring uninterrupted power supply.",
  },
  {
    question: "Can I expand my solar system later?",
    answer:
      "Yes, solar systems are scalable. You can add more panels, batteries, or upgrade your inverter anytime.",
  },
];

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
