

"use client";
import React, { useState } from "react";

function QuestionPage() {
  // Store the index of the currently opened FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if it's already open
  };

  return (
    <section className="hidden lg:block w-full max-w-4xl mx-auto">
      <div className="px-6 py-24 sm:py-24 lg:py-24">
        <div className="divide-slate-950">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 text-center">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="mailto:" className="font-semibold text-s6 hover:text-s6/30">
              <span className="text-[#fd7e14]">Reach out to us</span>{" "}
            </a>
            and we will get in touch with you.
          </p>
          <dl className="mt-10 divide-gray-900/10">
            {faqData.map((faq, index) => (
              <div className="pt-3" key={index}>
                <dt className="border-[1px] border-black px-3 py-3">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between text-left"
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={
                            openIndex === index
                              ? "M18 12H6" // the mins (-)
                              : "M12 6v12m6-6H6" // the plus (+)
                          }
                        />
                      </svg>
                    </span>
                  </button>
                  {openIndex === index && (
                    <dd className="mt-2">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </dd>
                  )}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// Sample data for FAQs
const faqData = [
  {
    question: "How to book a hostel?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium. Quidem in fuga ipsum porro, facilis praesentium repellat consequuntur quisquam sapiente voluptatem dolor fugiat voluptatum minus facere sit nesciunt quibusdam?",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium. Quidem in fuga ipsum porro, facilis praesentium repellat  quibusdam?",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "repellat consequuntur quisquam sapiente voluptatem dolor fugiat voluptatum minus facere sit nesciunt quibusdam?",
  },
  {
    question: "Is breakfast Included?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium. Quidem in fuga ipsum porro, facilis praesentium repellat",
  },
  {
    question: "How do i contact support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium. Quidem in fuga ipsum porro, facilis praesentium repellat",
  },
];

export default QuestionPage;
