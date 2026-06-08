import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-slate-800/80 border border-slate-700/50 rounded-full">
            B2B CLIENT VERIFICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Trusted by Enterprise Distributors
          </h2>
          <p className="text-slate-400 font-light text-base text-center leading-relaxed">
            Read objective testimonies from national supply managers, high-occupancy resort operators, and large-scale industrial janitorial alliances.
          </p>
        </div>

        {/* Testimonial Active Display Card with controls */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl relative">
            
            {/* Visual Backdrops */}
            <div className="absolute top-6 right-8 text-blue-500/10 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Stars indicator rating */}
              <div className="flex space-x-1">
                {Array.from({ length: current.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote narrative content */}
              <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light leading-relaxed italic select-all">
                "{current.quote}"
              </p>

              {/* Author metrics details row */}
              <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-base font-display font-bold text-white tracking-wide">
                    {current.author}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {current.role} • <span className="font-semibold text-blue-400">{current.company}</span>
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-lg text-[10px] font-mono text-slate-400 tracking-wider inline-flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-1"></span>
                  <span>VERIFIED ACCOUNT • {current.location}</span>
                </div>
              </div>

            </div>

            {/* Slider Navigation Arrows */}
            <div className="absolute -bottom-6 right-6 sm:right-10 flex space-x-2.5">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer shadow-lg"
                title="Previous testimonial review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-348 hover:text-white transition-all cursor-pointer shadow-lg"
                title="Next testimonial review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Testimonial slider indicator dots */}
          <div className="flex justify-center space-x-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  activeIndex === idx ? "w-8 bg-blue-500" : "w-2 bg-slate-700 hover:bg-slate-650"
                }`}
                title={`Transition to testimonial slider bullet ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
