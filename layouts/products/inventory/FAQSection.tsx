"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "How does the style transfer feature work?",
    answer:
      "Our AI analyzes your uploaded brand assets and extracts the core stylistic DNA—colors, geometry, and lighting. It then applies these parameters securely to any new generation, ensuring perfect consistency.",
  },
  {
    question: "Who owns the rights to the generated images?",
    answer:
      "You do. Any content generated using your proprietary brand models is 100% owned by you. We do not use your private assets to train our public models.",
  },
  {
    question: "Can I integrate this into my existing workflow?",
    answer:
      "Yes. We offer robust API access and webhooks that easily plug into Figma, Adobe Creative Cloud, and custom internal CMS platforms.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 md:py-28 px-4 md:px-6 max-w-200 mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-gray-900">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Everything you need to know about the product and billing.
        </p>
      </motion.div>
      <div className="flex flex-col">
        {FAQS.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}


interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-500 transition-colors pr-4">
          {question}
        </span>
        
        {/* Replaced the text "+" with a clean Lucide icon */}
        <span
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45 text-gray-900" : "text-gray-400 group-hover:text-gray-900"
          }`}
        >
          <Plus size={20} strokeWidth={2} />
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed pr-4 md:pr-12 text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};