import React, { useState } from "react";
import { 
  Hotel, 
  Stethoscope, 
  GraduationCap, 
  Landmark, 
  Utensils, 
  Factory, 
  Sparkles, 
  HardHat, 
  Handshake, 
  Check, 
  AlertTriangle 
} from "lucide-react";
import { Industry } from "../types";
import { INDUSTRIES } from "../data";

interface IndustriesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("ind-janitorial");

  const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "ind-hospitality": Hotel,
    "ind-healthcare": Stethoscope,
    "ind-education": GraduationCap,
    "ind-government": Landmark,
    "ind-foodservice": Utensils,
    "ind-manufacturing": Factory,
    "ind-janitorial": Sparkles,
    "ind-industrial": HardHat,
    "ind-distribution": Handshake
  };

  const activeIndustry = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-mono text-xs font-bold tracking-widest uppercase py-1.5 px-4 bg-slate-200 border-2 border-slate-350 rounded-none inline-block shadow-sm">
            CUSTOMIZED CHEMICAL DEPLOYMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 uppercase">
            Professional Solutions Tailored to Your Industry
          </h2>
          <p className="text-slate-650 font-light text-base">
            Every sector encounters distinct sanitization rules, oil loads, and inspection protocols. AmeriChem custom blends active compounds to resolve the unique demands of each workspace.
          </p>
        </div>

        {/* Bento Grid Concept: Left interactive industry list, Right deep sector analysis card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Industry Tab Navigation List (Takes 7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {INDUSTRIES.map((industry) => {
              const IconComp = iconsMap[industry.id] || Sparkles;
              const isSelected = selectedIndustry === industry.id;

              return (
                <button
                  key={industry.id}
                  id={`industry-button-${industry.slug}`}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-4 rounded-none border-2 text-left flex items-center space-x-3 transition-all duration-150 select-none cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.01]"
                      : "bg-white hover:bg-slate-150 text-slate-700 border-slate-300"
                  }`}
                >
                  <div className={`p-2 rounded-none shrink-0 border ${isSelected ? "bg-blue-900 text-white border-blue-900" : "bg-slate-100 text-blue-950 border-slate-200"}`}>
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-bold font-display truncate uppercase ${isSelected ? "text-white" : "text-slate-900"}`}>
                      {industry.name}
                    </p>
                    <p className={`text-[9px] font-mono tracking-wider font-bold uppercase ${isSelected ? "text-slate-405 font-medium" : "text-slate-450"}`}>
                      Compliance Spec
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep industrial compliance review for selected industry (Takes 5 columns) */}
          <div className="lg:col-span-5 bg-white border-2 border-slate-300 p-6 sm:p-8 rounded-none shadow-sm space-y-6 relative overflow-hidden">
            {/* Subtle chemical grid overlay inside review box */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-watermark font-black text-8xl font-mono pointer-events-none select-none">
              SPEC
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="p-3 bg-slate-50 text-blue-900 border-2 border-slate-300 rounded-none">
                {React.createElement(iconsMap[activeIndustry.id] || Sparkles, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-[10px] bg-slate-100 text-slate-700 border-2 border-slate-300 px-2.5 py-0.5 rounded-none font-mono font-bold uppercase tracking-wider">
                  Target B2B Division
                </span>
                <h4 className="text-xl font-display font-black text-slate-900 mt-1 uppercase">
                  {activeIndustry.name}
                </h4>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-light">
              {activeIndustry.description}
            </p>

            {/* Critical industry unique challenges list */}
            <div className="space-y-3.5 pt-4 border-t-2 border-slate-200">
              <div className="flex items-center space-x-2 text-amber-700 text-xs font-mono font-bold tracking-wider uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sector Custodial Challenges</span>
              </div>
              <ul className="space-y-2.5">
                {activeIndustry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-xs text-slate-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-none mt-1.5 mr-2 shrink-0"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Products Matcher */}
            <div className="bg-slate-900 text-white p-5 rounded-none border-2 border-slate-800 space-y-3">
              <p className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                RECOMMENDED AMERICHM AGENTS
              </p>
              <div className="space-y-2.5">
                {activeIndustry.recommendedProducts.map((pName, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-bold text-slate-200">{pName}</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-none">
                      EPA APPROVED
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("products")}
                  className="w-full text-center text-xs font-mono font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Configure Packaging Renders →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
