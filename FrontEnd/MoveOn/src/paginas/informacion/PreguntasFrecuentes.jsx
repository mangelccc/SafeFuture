import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from "../../bibliotecas/biblioteca.js"

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto hsm:w-full sm:w-2/3 px-2 hsm:py-4 sm:py-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 p-4 rounded-2xl shadow-md bg-white dark:bg-black1 border border-purple animate-fadeInUp hsm:p-2 sm:p-4"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-left focus:outline-none"
          >
            <span className="text-base sm:text-lg font-medium text-black dark:text-white hover:text-gold">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 text-gold ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="mt-2 text-sm sm:text-base text-black2 dark:text-white2">
              {faq.answer}
              {faq.link && (
                <div className='mt-2'>
                  <Link to={faq.link} className="text-purple dark:text-gold hover:underline" rel="noopener noreferrer">
                    {faq.textLink}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default PreguntasFrecuentes;
