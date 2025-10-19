import React, { useState } from 'react';
import { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
);


const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full text-left py-4 flex justify-between items-center space-x-3"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-teal-500">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="pb-4 pr-8 text-gray-600">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};


export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    if (!faqs || faqs.length === 0) {
        return <p className="text-gray-500">No frequently asked questions available for this country yet.</p>;
    }
  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};
