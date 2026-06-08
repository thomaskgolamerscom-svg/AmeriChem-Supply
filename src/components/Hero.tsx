import React from "react";
import { ArrowRight, Box, CheckCircle2, Shield, Settings, Truck } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="hero-section" 
      className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] md:min-h-[82vh] flex items-center pt-8 pb-16"
    >
      {/* 
        Ultra-premium dynamic background design combining Tailwind 4's linear-gradients,
        subtle blueprint lines, mock warehouse geometries, and orbital chemical glows
      */}
      <div className="absolute inset-0 z-0 opacity-45 grid-blueprint mix-blend-overlay"></div>
      
      {/* Decorative radial lighting to simulate high-tech manufacturing facility atmosphere */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[550px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-150px] left-1/3 w-80 h-96 bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Structured mock container pallet line drawing (visual warehouse layout representation) */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-full hidden lg:flex items-end justify-end pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-full h-[85%] opacity-35 px-12 pb-6">
          {/* Simulated warehouse pallet storage grid layout drawing in SVG */}
          <svg className="w-full h-full text-slate-700 stroke-current fill-none" viewBox="0 0 600 500" strokeWidth="1.5">
            {/* Draw a subtle perspective mesh mapping logistics bays */}
            <path d="M50 480 L550 480 M50 430 L550 430 M50 380 L550 380 M50 330 L550 330 M50 280 L550 280" strokeDasharray="3,6" className="text-slate-800" />
            <path d="M100 250 L50 490 M300 250 L300 490 M500 250 L550 490" strokeDasharray="2,4" className="text-slate-800" />
            
            {/* Industrial storage shelf mockup 1 */}
            <rect x="80" y="280" width="120" height="150" rx="3" className="text-slate-800/70" strokeWidth="2" />
            <line x1="80" y1="330" x2="200" y2="330" />
            <line x1="80" y1="380" x2="200" y2="380" />
            
            {/* Pallets representation */}
            <rect x="95" y="300" width="40" height="25" rx="1.5" className="text-blue-500/40" fill="currentColor" />
            <rect x="145" y="300" width="40" height="25" rx="1.5" className="text-blue-600/30" fill="currentColor" />
            <rect x="95" y="350" width="90" height="25" rx="2" className="text-slate-600/30" fill="currentColor" />
            <rect x="95" y="395" width="45" height="30" rx="2" className="text-emerald-600/20" fill="currentColor" />
            <rect x="145" y="395" width="45" height="30" rx="2" className="text-blue-500/30" fill="currentColor" />

            {/* Industrial storage shelf mockup 2 */}
            <rect x="340" y="180" width="160" height="250" rx="3" className="text-slate-850" strokeWidth="2.5" />
            <line x1="340" y1="260" x2="500" y2="260" />
            <line x1="340" y1="340" x2="500" y2="340" />
            
            {/* Pallet boxes */}
            <rect x="360" y="200" width="120" height="50" rx="2" className="text-blue-500/20" fill="currentColor" />
            <rect x="360" y="210" width="55" height="35" rx="1" className="text-slate-600/30" fill="currentColor" />
            <rect x="420" y="210" width="55" height="35" rx="1" className="text-slate-500/30" fill="currentColor" />
            
            <rect x="360" y="280" width="55" height="50" rx="2" className="text-emerald-500/20" fill="currentColor" />
            <rect x="425" y="280" width="55" height="50" rx="2" className="text-blue-600/20" fill="currentColor" />
            
            {/* Forklift pathways */}
            <circle cx="280" cy="420" r="15" className="text-slate-800" fill="none" />
            <line x1="280" y1="405" x2="280" y2="435" />
            <line x1="265" y1="420" x2="295" y2="420" />
          </svg>
          
          {/* Embedded floating statistics tags inside the background */}
          <div className="absolute right-12 top-10 border border-slate-800 bg-slate-900/95 p-4 rounded-xl shadow-lg w-52">
            <div className="flex items-center space-x-2 text-blue-400">
              <Truck className="w-4 h-4" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">LOGISTICS SYNERGY</span>
            </div>
            <p className="text-lg font-display font-bold text-white mt-1">Jersey City Site</p>
            <p className="text-xs text-slate-400 mt-0.5 leading-snug">Immediate B2B dispatch to Northeast ports & shipping corridors.</p>
          </div>
          
          <div className="absolute left-6 bottom-1/3 border border-slate-800 bg-slate-900/95 p-4 rounded-xl shadow-lg w-48">
            <div className="flex items-center space-x-2 text-emerald-400">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase">QUALITY LEVEL</span>
            </div>
            <p className="text-lg font-display font-bold text-white mt-1">ISO 9001:2015</p>
            <p className="text-xs text-slate-400 mt-0.5 leading-snug">Strict molecular compliance and batch traceability.</p>
          </div>
        </div>
      </div>

      {/* Main hero content container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings and actions */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Origin Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-900 text-white border-2 border-blue-800 px-4 py-2 rounded-none">
            <span className="w-2.5 h-2.5 rounded-none bg-blue-400 animate-pulse mr-1"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase">PREMIUM US MANUFACTURING</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-blue-200">JERSEY CITY, NJ</span>
          </div>

          <div className="space-y-4">
            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight text-white leading-[1.1] uppercase">
              Professional Cleaning Chemicals <span className="text-blue-450 border-b-4 border-blue-600">Made in USA</span>
            </h1>
            
            {/* Subheadline (B2B detailed targeting) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Reliable Commercial Cleaning Solutions for{" "}
              <span className="text-white font-bold">Distributors, Janitorial Companies, Hotels, Healthcare Facilities, Schools, Government Agencies</span>, and{" "}
              <span className="text-white font-bold font-mono text-sm">[Industrial Operations]</span>. Highly compliant batches formulated for elite custodial demands.
            </p>
          </div>

          {/* Quick core credential highlights (icons + inline badges) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { icon: Shield, label: "EPA Compliant" },
              { icon: CheckCircle2, label: "OSHA Compliant" },
              { icon: Settings, label: "GMP Facility" },
              { icon: Box, label: "Bulk Shipments" }
            ].map((cred, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-900 border-2 border-slate-800 px-3 py-2 rounded-none border-l-4 border-l-blue-600">
                <cred.icon className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200 tracking-wide font-bold">{cred.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            {/* Primary CTA: Request a Quote */}
            <button
              onClick={() => onNavigate("quote-section")}
              className="bg-blue-900 hover:bg-blue-800 text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-none border-2 border-transparent transition-all flex items-center justify-center space-x-2 group cursor-pointer shadow-md shadow-black/40"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary CTA: Private Label Program */}
            <button
              onClick={() => onNavigate("private-label")}
              className="bg-slate-950 hover:bg-slate-900 text-slate-200 hover:text-white font-mono font-bold text-xs border-2 border-slate-700 py-4 px-8 rounded-none tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Private Label Program</span>
            </button>
          </div>

          {/* B2B Compliance Note */}
          <p className="text-[11px] text-slate-500 font-mono tracking-wider">
            * Blended and bottled in accordance with OSHA HazCom 2012, dynamic GHS labels, and full EPA-approved sanitization safety protocols. SDS documentation available for all product shipments of 24oz, 1G, and 5G.
          </p>
        </div>

        {/* Right column: Interactive industrial preview box on Desktop, and simple highlights on smaller screens */}
        <div className="lg:col-span-5 relative z-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-slate-900 border-2 border-slate-700 p-6 rounded-none shadow-2xl space-y-6">
            <h3 className="font-display font-black text-base text-white border-b-2 border-slate-800 pb-3 flex items-center justify-between">
              <span className="tracking-tight uppercase">Northeast Logistics Network</span>
              <span className="text-[10px] bg-blue-900 px-2.5 py-1 text-white font-mono font-bold rounded-none">STOCK ACTIVE</span>
            </h3>

            {/* Micro route tracker showing shipping proximity */}
            <div className="space-y-4">
              <div className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-600">
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-blue-600 rounded-none border-4 border-slate-900 flex items-center justify-center"></div>
                <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">PRODUCTION SILOS</p>
                <p className="text-sm font-bold text-white">Jersey City Blending Plant, NJ</p>
                <p className="text-xs text-slate-400">Direct chemical synthesis, quality control labs, bulk drum filling.</p>
              </div>

              <div className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-600 font-bold">
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-indigo-600 rounded-none border-4 border-slate-900 flex items-center justify-center"></div>
                <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">FREIGHT SUPERCENTER</p>
                <p className="text-sm font-bold text-white">Newark Logistics Interchange</p>
                <p className="text-xs text-slate-400 font-light">Immediate access to freight systems, ready-to-ship inventory pallets.</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-emerald-500 rounded-none border-4 border-slate-900 flex items-center justify-center animate-pulse"></div>
                <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">B2B DESTINATION</p>
                <p className="text-sm font-bold text-slate-200">Your Facility / Facility Warehouse</p>
                <p className="text-xs text-emerald-400 font-mono font-bold">1–3 Day typical freight turnaround in Northeast quadrant.</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-none border-2 border-slate-800 text-xs flex hover:bg-slate-950/80 transition-colors cursor-pointer group" onClick={() => onNavigate("sds-section")}>
              <div className="mr-3 bg-blue-900 border-2 border-blue-800 w-10 h-10 rounded-none flex items-center justify-center shrink-0">
                <span className="text-white font-mono font-bold text-xs">PDF</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-200">Need SDS Documents?</p>
                <p className="text-slate-400 truncate mt-0.5 font-light">Immediate digital download for safety records.</p>
                <span className="text-[11px] text-blue-400 mt-1 font-bold inline-flex items-center group-hover:underline">
                  Browse SDS files →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
