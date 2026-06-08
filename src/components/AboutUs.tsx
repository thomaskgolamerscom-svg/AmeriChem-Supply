import React from "react";
import { Shield, Award, ClipboardCheck, Sparkles, Building, Landmark, Compass, HelpCircle } from "lucide-react";

export default function AboutUs() {
  const complianceBadges = [
    { 
      label: "EPA Compliant", 
      details: "Formulas utilize eco-aligned surfactant matrices and approved biological active sanitizers.", 
      icon: Shield, 
      color: "border-emerald-200 bg-emerald-50 text-emerald-800" 
    },
    { 
      label: "OSHA Compliant", 
      details: "GHS format hazard pictograms, precautions, and signal words printed on every single batch label.", 
      icon: ClipboardCheck, 
      color: "border-blue-200 bg-blue-50 text-blue-800" 
    },
    { 
      label: "Made in USA", 
      details: "Blended, packaged, and tracked in our Jersey City, New Jersey manufacturing plant.", 
      icon: Compass, 
      color: "border-amber-200 bg-amber-55 text-amber-800" 
    },
    { 
      label: "ISO 9001", 
      details: "Tested under strict quality assurance frameworks ensuring persistent visual color and density index consistency.", 
      icon: Award, 
      color: "border-purple-200 bg-purple-50 text-purple-800" 
    },
    { 
      label: "GMP Facility", 
      details: "Good Manufacturing Practice protocols enforce spotless physical silos and fully automated bottling lines.", 
      icon: Building, 
      color: "border-indigo-200 bg-indigo-50 text-indigo-800" 
    },
    { 
      label: "SDS Available", 
      details: "GHS 16-section standard compliance data sheets immediately acquirable for chemical logging.", 
      icon: Landmark, 
      color: "border-slate-300 bg-slate-100 text-slate-800" 
    },
  ];

  const statistics = [
    { value: "40M+", label: "Gallons Blended S.Y." },
    { value: "100%", label: "American Components" },
    { value: "24-hr", label: "QC Isolation Safeguards" },
    { value: "N.Y.", label: "Port Hub Access" }
  ];

  return (
    <section id="about-us" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Layout splits to Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision Statement and narrative (Takes 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-700 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-blue-100/60 border border-blue-250 rounded-full">
                ESTABLISHED MANUFACTURER & LOGISTICS PARTNER
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Trusted Commercial Cleaning Chemical Supplier
              </h2>
            </div>

            <p className="text-slate-700 font-light text-base leading-relaxed">
              AmeriChem Supply Co. provides high-quality cleaning chemical solutions for commercial, industrial, and institutional clients across the United States. We support distributors, facility management companies, janitorial service providers, government agencies, and private-label partners with dependable products, compliance-focused manufacturing standards, and scalable supply solutions.
            </p>

            {/* Quick stats panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-center">
                  <p className="text-2xl sm:text-3xl font-display font-extrabold text-blue-700 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-slate-955/5 p-5 border border-slate-200 rounded-2xl flex items-start space-x-4">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-slate-900">Enterprise Scale & Service Velocity</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Our strategic packaging hub in Jersey City utilizes high-performance multi-nozzle pneumatic dispensers. This translates to reliable supply for massive retail inventories and municipal contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Compliance Badges Grid (Takes 5 cols) */}
          <div className="lg:col-span-1 border border-transparent hidden lg:block"></div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6 relative">
            <h3 className="font-display font-extrabold text-lg text-slate-900 border-b border-slate-200 pb-3 h-10">
              Verified Compliance Badges
            </h3>

            <div className="space-y-4">
              {complianceBadges.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={idx} className={`p-4 rounded-xl border flex items-start space-x-3.5 transition-all hover:translate-x-1 ${badge.color}`}>
                    <div className="p-2 bg-white rounded-lg shrink-0 border border-slate-200/40">
                      <BadgeIcon className="w-4 h-4 text-inherit" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wide uppercase">{badge.label}</h4>
                      <p className="text-[11px] opacity-85 leading-snug mt-1 font-light">{badge.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
