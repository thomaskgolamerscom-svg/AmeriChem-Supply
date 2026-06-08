import React, { useState } from "react";
import { Plus, Minus, HelpCircle, FileQuestion, ArrowUpRight } from "lucide-react";
import { FAQS } from "../data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-blue-700 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-blue-50 border border-blue-100 rounded-full">
            REGULATORY & ORDER ANSWERING
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight text-center">
            Frequently Answered Logistics Questions
          </h2>
          <p className="text-slate-650 font-light text-sm text-center">
            Review GHS compliant guidelines, private-label operations, container sizing, and transport logistics parameters.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions-group">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-50 border-blue-550 shadow-md ring-1 ring-blue-50/50" 
                    : "bg-white border-slate-205 hover:bg-slate-50/50"
                }`}
              >
                {/* Header / Click trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center space-x-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5">
                    <FileQuestion className={`w-4.5 h-4.5 shrink-0 ${isOpen ? "text-blue-600" : "text-slate-450"}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-slate-850 leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full ${isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Sliding collapsible answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-slate-200" : "max-h-0"
                  }`}
                >
                  <div className="p-6 sm:p-8 text-slate-650 text-xs sm:text-sm font-light leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                      <span>Category classification: {faq.category}</span>
                      <span className="text-blue-600 hover:underline inline-flex items-center cursor-pointer">
                        Full compliance briefs <ArrowUpRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
