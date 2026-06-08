import React, { useState } from "react";
import { 
  ShieldCheck, 
  Flag, 
  Award, 
  FileText, 
  Zap, 
  Layers, 
  Truck, 
  Tag, 
  Activity, 
  Factory,
  ChevronRight,
  Info
} from "lucide-react";

interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  detailedText: string;
  complianceSpec: string;
}

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState<string>("made-usa");

  const features: FeatureDetail[] = [
    {
      id: "made-usa",
      title: "Made in USA",
      description: "100% locally formulated, blended, and bottled under rigorous domestic oversight in Jersey City.",
      icon: Flag,
      complianceSpec: "Federal Trade Commission Standard",
      detailedText: "Our primary manufacturing facility operates in Jersey City, New Jersey. Local production guarantees short supply lines, supporting American jobs and strict environmental and workplace safeguards. We utilize high-purity materials sourced from verified domestic raw chemical suppliers."
    },
    {
      id: "epa-compliant",
      title: "EPA Compliant",
      description: "Formulas formulated carefully using eco-conscious and EPA-registered active disinfectant properties.",
      icon: ShieldCheck,
      complianceSpec: "EPA Registered & Biodegradable",
      detailedText: "AmeriChem's disinfectant products possess active EPA registrations. Our biological footprint optimization ensures biodegradable active surfactants, reducing phosphate accumulation, toxic runoffs, and unnecessary burden on regional water processing facilities."
    },
    {
      id: "osha-compliant",
      title: "OSHA Compliant",
      description: "Our labeling, naming standards, and safety declarations adhere fully to GHS and HazCom 2012 guidelines.",
      icon: Activity,
      complianceSpec: "OSHA HazCom 1910.1200",
      detailedText: "We maintain GHS-compliant formatting across all labels and packaging. Visual safety pictograms, signal words, hazardous ingredient listings, and standard hazard precautions are printed clearly on every bottle to keep professional custodians safe and fully prepared."
    },
    {
      id: "iso-9001",
      title: "ISO 9001 Standards",
      description: "Strict quality management systems ensuring perfect batch repeatability and chemical concentration.",
      icon: Award,
      complianceSpec: "ISO 9001:2015 Quality Management",
      detailedText: "Every batch blended at our site undergoes rigorous density, pH, color verification, and titration testing. Retain samples are cataloged for 3 years, giving enterprise partners complete trace-back capability on any volume shipped."
    },
    {
      id: "gmp-facility",
      title: "GMP Facility",
      description: "Good Manufacturing Practices governing sanitized filling lines, raw staging, and clean storage silos.",
      icon: Factory,
      complianceSpec: "Current GMP Quality Standards",
      detailedText: "Our automated assembly and packing plants utilize food-grade and sterile cleaning standards, preventing atmospheric oxidation, micro-dust contamination, or cross-batch carryover during active fluid runs."
    },
    {
      id: "sds-docs",
      title: "SDS Available",
      description: "Instant access to GHS Safety Data Sheets, COAs, and technical specification sheets 24/7.",
      icon: FileText,
      complianceSpec: "GHS Standard Format",
      detailedText: "No waiting for customer service. We host a high-durability digital index of all SDS sheets. Simply input the chemical ID or code on our platform and immediately retrieve up-to-date compliance disclosures for your compliance folders."
    },
    {
      id: "fast-turnaround",
      title: "Fast Turnaround",
      description: "Direct proximity to East Coast shipping points yields fast pallet deliveries.",
      icon: Zap,
      complianceSpec: "Northeast Logistics Fast Track",
      detailedText: "Strategically located close to Newark Rail Yards and Jersey City express ways, our distribution hubs process LTL and dry van shipments swiftly, with typical regional lead times under 72 hours."
    },
    {
      id: "bulk-production",
      title: "Bulk Capability",
      description: "High-volume blending tanks capable of producing thousands of gallons monthly on demand.",
      icon: Layers,
      complianceSpec: "High Capacity Blending",
      detailedText: "From cases of 24oz bottles to full 275-gallon fluid totes, we configure machinery setups for high scale. Our stainless steel blending systems handle demanding chemical shear profiles under tight tolerances."
    },
    {
      id: "distribution-network",
      title: "Distribution Network",
      description: "Vast networks of integrated freight carriers ensuring reliable freight handling.",
      icon: Truck,
      complianceSpec: "Integrated Carrier Logistics",
      detailedText: "We supply third-party logistics (3PL) integration with absolute tracking. Freight is palletized, stretchwrapped, and labeled according to DOT shipping regulations, preventing shipping leaks and transit delay factors."
    },
    {
      id: "private-label-solutions",
      title: "Private Label Solutions",
      description: "Launch your own custom chemical brand with professional label layout support.",
      icon: Tag,
      complianceSpec: "Turnkey Brand Manufacturing",
      detailedText: "Focus entirely on sales while we handle chemical engineering. Our private label program offers flexible bottle sizes, customizable scents, accent colors, and rapid label design integration."
    }
  ];

  const activeFeatureData = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section id="why-choose" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 z-0 opacity-15 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-slate-800/80 border border-slate-700/50 rounded-full">
            RIGOROUS INDUSTRIAL COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Designed for Reliability, Built to Formulate
          </h2>
          <p className="text-slate-400 font-light text-base">
            AmeriChem has earned the trust of enterprise distributors and facilities managers nationwide by pairing chemical excellence with certified B2B manufacturing guidelines.
          </p>
        </div>

        {/* Dual Column Layout: Left features list, Right interactive detailed compliance drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Cards Grid (Takes 7 Cols on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isSelected = activeFeature === feature.id;
              
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  id={`feature-card-${feature.id}`}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 transform select-none ${
                    isSelected 
                      ? "bg-slate-800 border-blue-500 shadow-lg scale-[1.02] ring-1 ring-blue-500/20" 
                      : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-750"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-slate-900 border border-slate-850 text-blue-400"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-sm text-slate-100 flex items-center">
                        <span>{feature.title}</span>
                        {isSelected && <ChevronRight className="w-3.5 h-3.5 text-blue-400 ml-1.5" />}
                      </h3>
                      <p className="text-xs text-slate-450 leading-relaxed font-light line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Industrial compliance disclosure detailing the active feature (Takes 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-watermark font-black text-7xl font-mono pointer-events-none select-none">
              AMERICHM
            </div>

            {/* Glowing orb representing batch active verification */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              {/* Badge indicating standard category */}
              <div className="flex items-center space-x-1.5 text-blue-400">
                <Info className="w-3.5 h-3.5" />
                <span id="compliance-specification-badge" className="text-[10px] font-mono tracking-widest font-bold uppercase">
                  {activeFeatureData.complianceSpec}
                </span>
              </div>

              {/* Title & icon */}
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                  <activeFeatureData.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white">
                    {activeFeatureData.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">QC Verification Active</p>
                </div>
              </div>

              {/* In-depth content explaining our rigorous industrial processes */}
              <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-900 text-sm space-y-4 font-light text-slate-300 leading-relaxed">
                <p>{activeFeatureData.detailedText}</p>
                <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500">
                  <span>Batch Standard:</span>
                  <span className="font-mono text-emerald-400 font-semibold uppercase">PASS / COMPLIANT</span>
                </div>
              </div>

              {/* Quick checklist of verifying tests */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Standard Testing Parameters</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Spectrophotometric Assay",
                    "OSHA Hazardous Screening",
                    "Specific Gravity Fluid Density",
                    "Active Surfactant Assay"
                  ].map((test, index) => (
                    <div key={index} className="flex items-center space-x-2 text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
