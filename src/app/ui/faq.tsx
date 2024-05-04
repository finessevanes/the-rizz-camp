"use client"
// FAQ.tsx

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this a dating service?",
      answer: "No, this service is specifically tailored to enhance your social skills and capabilities."
    },
    {
      question: "Why does this service exist?",
      answer: "We aim to improve relationships and societal well-being by enhancing men's social skills for better interactions with women. This fosters understanding and builds a better world, one conversation at a time."
    },
    {
      question: "Will this service make me into an Alpha male?",
      answer: "No, but it will make you less awkward and weird around women."
    }
  ];

  return (
    <div className="w-screen bg-white text-black">
      <div className="max-w-lg mx-auto pt-16 pb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="mb-6 shadow-md rounded-lg">
              <button
                className="text-left w-full focus:outline-none flex items-center bg-white p-4"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-semibold flex-1">{faq.question}</h3>
                {openIndex === index ? <HiChevronUp className="text-gray-400" /> : <HiChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 px-4 py-2 bg-white rounded-b-lg">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;

