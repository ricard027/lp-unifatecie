"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import faq from "../app/faq.json";

export default function FAQSection() {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleAccordion = (sectionId: number, questionIndex: number) => {
    const key = `${sectionId}-${questionIndex}`;
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="grid sm:grid-cols-3 grid-cols-1 container m-auto text-2xl sm:mb-40 mb-10 sm:mt-20 mt-10 gap-6 px-6">
      <h2 className="text-4xl sm:text-6xl font-bold sm:col-span-3 col-span-1 text-start max-w-xl my-10">
        Perguntas Frequentes
      </h2>

      {faq.faq.map((section) => (
        <div key={section.id}>
          <h3 className="text-primary-100 font-bold mb-4 text-lg sm:text-xl">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.questions.map((item, index) => {
              const key = `${section.id}-${index}`;
              const isOpen = openAccordions[key];

              return (
                <div key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(section.id, index)}
                    className="w-full text-left text-gray-300 hover:text-white transition-colors text-base sm:text-lg flex items-center justify-between p-4 "
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                      <p>{item.question}</p>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-4 bg-[#0c0d0e] text-gray-300 rounded-md">
                      <p className="text-base sm:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
