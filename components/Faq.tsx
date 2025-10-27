
import React, { useState } from 'react';
import type { FaqItem as FaqItemType } from '../types';

const faqItems: FaqItemType[] = [
  {
    question: 'How does iLearn generate questions?',
    answer: 'iLearn uses Google\'s advanced Gemini model to analyze the transcript of a YouTube video. It identifies key concepts and automatically generates relevant multiple-choice questions with correct answers and distractors.',
  },
  {
    question: 'Does iLearn download or store YouTube videos?',
    answer: 'No. iLearn respects YouTube\'s terms of service. We never download or re-host video content. The platform uses the official YouTube IFrame Player API to embed videos directly on the page, ensuring all views are counted on the original creator\'s channel.',
  },
  {
    question: 'What happens if a video doesn\'t have captions?',
    answer: 'Our preferred method is to use official captions. If they aren\'t available, teachers can upload their own transcript file (SRT/VTT). Alternatively, iLearn can operate in "Chapters-only" mode, creating quizzes based on the video\'s chapter titles and descriptions.',
  },
  {
    question: 'Is student data safe and private?',
    answer: 'Absolutely. We are built on Google Firebase, which provides robust security rules. All data is scoped by organization, meaning schools can only see their own data. We are committed to protecting student privacy and handle data responsibly.',
  },
];

const FaqItem: React.FC<{ item: FaqItemType; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <svg
          className={`w-6 h-6 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-slate-400">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
