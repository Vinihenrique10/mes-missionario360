"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border-t border-charcoal/20">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-charcoal/20 transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-6 text-left group focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal transition-colors duration-200 group-hover:text-forest">
                {item.question}
              </h3>
              <span
                className={`ml-4 flex-shrink-0 text-xl font-light text-charcoal/60 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                ＋
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base text-charcoal/80 leading-relaxed max-w-2xl font-sans">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
