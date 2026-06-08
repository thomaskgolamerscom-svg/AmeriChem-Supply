import React, { useState } from "react";
import { Tag, Edit3, ShieldAlert, BadgeCheck, Check, Sparkles, Building2, Paintbrush, Award } from "lucide-react";
import { PrivateLabelConfig } from "../types";

interface PrivateLabelProps {
  onStartInquiry: (config: PrivateLabelConfig) => void;
}

export default function PrivateLabel({ onStartInquiry }: PrivateLabelProps) {
  // State for live brand customizer
  const [companyName, setCompanyName] = useState("Alpha Janitorial Solutions");
  const [brandName, setBrandName] = useState("PRISTINE PRO");
  const [bottleSize, setBottleSize] = useState<"24oz" | "1 Gallon" | "5 Gallon">("1 Gallon");
  const [productType, setProductType] = useState<"Industrial Degreaser" | "Streak-Free Glass Cleaner" | "Ultra Disinfectant">("Ultra Disinfectant");
  const [accentColor, setAccentColor] = useState("#3b82f6"); // Blue primary accent

  const handleStartInquiryClick = () => {
    let liquidColor = "Green";
    if (productType.includes("Glass")) liquidColor = "Sky Blue";
    if (productType.includes("Disinfectant")) liquidColor = "Deep Indigo";

    onStartInquiry({
      companyName,
      brandName,
      bottleColor: "Natural Semi-Translucent",
      accentColor,
      bottleSize,
      liquidColor,
      uploadedLogoText: brandName,
      productType
    });
  };

  const colors = [
    { name: "Navy Royal", hex: "#1e3a8a" },
    { name: "Safety Orange", hex: "#f97316" },
    { name: "Forest Shield", hex: "#15803d" },
    { name: "Signal Red", hex: "#dc2626" },
    { name: "Compliance Gold", hex: "#d97706" },
    { name: "Sleek Violet", hex: "#6d28d9" }
  ];

  // Fluid Liquid color render
  let liquidFillColor = "#10b981"; // green standard
  if (productType.includes("Glass")) {
    liquidFillColor = "#38bdf8"; // blue glass
  } else if (productType.includes("Disinfectant")) {
    liquidFillColor = "#6366f1"; // purple-indigo
  }

  // Draw appropriate container mockup depending on size selection
  const renderInteractiveMockup = () => {
    if (bottleSize === "24oz") {
      return (
        <svg viewBox="0 0 100 150" className="w-52 h-72 drop-shadow-2xl mx-auto transition-all">
          <line x1="50" y1="35" x2="52" y2="135" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="1,1" />
          <path d="M28 85 L72 85 C73 95, 73 125, 71 138 C70 142, 60 144, 50 144 C40 144, 30 142, 29 138 C27 125, 27 95, 28 85 Z" fill={liquidFillColor} fillOpacity="0.5" />
          <path d="M50 35 L58 35 L58 55 L72 75 C75 80, 74 135, 72 140 C70 145, 62 146, 50 146 C38 146, 30 145, 28 140 C26 135, 25 80, 28 75 L42 55 L42 35 Z" fill="rgba(255, 255, 255, 0.15)" stroke="#64748b" strokeWidth="2.5" />
          <g transform="translate(32, 5)">
            <rect x="13" y="15" width="10" height="15" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <path d="M5 5 L30 5 L35 12 L35 20 L27 22 L11 22 Z" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
            <rect x="2" y="8" width="4" height="6" fill={accentColor} />
            <path d="M12 21 L8 35 L12 35 L15 21 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
          </g>
          {/* Custom Brand Label */}
          <g transform="translate(0, -2)">
            <rect x="29" y="86" width="42" height="42" rx="2" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
            <rect x="32" y="90" width="36" height="3" fill={accentColor} />
            {/* User dynamic text */}
            <text x="50" y="100" fill="#ffffff" fontSize="4.2" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">{brandName || "YOUR BRAND"}</text>
            <text x="50" y="106" fill="rgba(255,255,255,0.7)" fontSize="2.8" textAnchor="middle" fontFamily="sans-serif">{productType}</text>
            <text x="50" y="113" fill="#ffffff" fontSize="2.5" textAnchor="middle" fontFamily="monospace">pH APPROVED</text>
            <text x="50" y="122" fill="#94a3b8" fontSize="2.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">BY {companyName || "COMPANY"}</text>
          </g>
        </svg>
      );
    }

    if (bottleSize === "1 Gallon") {
      return (
        <svg viewBox="0 0 100 150" className="w-52 h-72 drop-shadow-2xl mx-auto transition-all">
          <rect x="42" y="10" width="16" height="8" rx="1.5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
          <path d="M22 66 L78 66 C79 80, 79 125, 77 142 C74 145, 60 146, 50 146 C40 146, 26 145, 23 142 C21 125, 21 80, 22 66 Z" fill={liquidFillColor} fillOpacity="0.5" />
          <path d="M46 18 L54 18 L54 28 L74 48 C78 52, 79 58, 80 62 L80 140 C80 144, 76 147, 50 147 C24 147, 20 144, 20 140 L20 62 C21 58, 22 52, 26 48 L46 28 Z" fill="rgba(255,255,255,0.15)" stroke="#64748b" strokeWidth="2.5" />
          <path d="M 28 65 C 28 55, 36 48, 42 46 L 42 66 C 36 66, 30 65, 28 65 Z" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          {/* Custom label details */}
          <g transform="translate(0, 5)">
            <rect x="31" y="70" width="40" height="54" rx="2" fill="#1e293b" stroke="#ffffff" strokeWidth="1" />
            <rect x="34" y="74" width="34" height="3" fill={accentColor} />
            {/* User company details and brand custom name printed nicely */}
            <text x="51" y="85" fill="#ffffff" fontSize="4.5" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">
              {brandName || "YOUR BRAND"}
            </text>
            <text x="51" y="93" fill="rgba(255,255,255,0.8)" fontSize="3.1" textAnchor="middle" fontFamily="sans-serif">
              {productType}
            </text>
            <line x1="36" y1="99" x2="66" y2="99" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            <text x="51" y="106" fill="#cbd5e1" fontSize="2.8" textAnchor="middle" fontFamily="sans-serif">PREMIUM PERFORMANCE</text>
            <text x="51" y="113" fill="#ffffff" fontSize="2.5" textAnchor="middle" fontFamily="monospace">pH NEUTRAL</text>
            <text x="51" y="120" fill={accentColor} fontSize="2.8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              BY: {companyName.substring(0, 18) || "YOUR COMPANY"}
            </text>
          </g>
        </svg>
      );
    }

    // 5 Gallon Pail
    return (
      <svg viewBox="0 0 100 150" className="w-52 h-72 drop-shadow-2xl mx-auto transition-all">
        <polygon points="12,18 88,18 85,26 15,26" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <path d="M19 32 L81 32 C81 32, 79 110, 77 135 C76 138, 62 142, 50 142 C38 142, 24 138, 23 135 C21 110, 19 32, 19 32 Z" fill={liquidFillColor} fillOpacity="0.25" />
        <path d="M15 26 L85 26 L81 138 C80 142, 65 144, 50 144 C35 144, 20 142, 19 138 Z" fill="rgba(255,255,255,0.12)" stroke="#64748b" strokeWidth="2.8" />
        <path d="M10 50 C 15 2, 85 2, 90 50" fill="none" stroke="#94a3b8" strokeWidth="2" />
        <rect x="40" y="8" width="20" height="5" rx="1.5" fill="#334155" />
        {/* Custom B2B Label */}
        <g transform="translate(0, 15)">
          <rect x="25" y="38" width="50" height="60" rx="3" fill="#0f172a" stroke="#ffffff" strokeWidth="1.2" />
          <rect x="28" y="42" width="44" height="3" fill={accentColor} />
          <text x="50" y="53" fill="#ffffff" fontSize="5.5" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">{brandName || "YOUR BRAND"}</text>
          <text x="50" y="61" fill="rgba(255,255,255,0.7)" fontSize="3.8" textAnchor="middle" fontFamily="monospace">{productType}</text>
          <line x1="30" y1="67" x2="70" y2="67" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <text x="50" y="75" fill="#f1f5f9" fontSize="3" textAnchor="middle" fontFamily="sans-serif">BULK B2B FORMULA</text>
          <text x="50" y="82" fill="#e2e8f0" fontSize="2.8" textAnchor="middle" fontFamily="monospace">pH SECURE</text>
          <text x="50" y="91" fill={accentColor} fontSize="3" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">{companyName || "YOUR COMPANY"}</text>
        </g>
      </svg>
    );
  };

  return (
    <section id="private-label" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 z-0 opacity-15 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-slate-800/80 border border-slate-705/10 rounded-full">
            USA PRIVATE LABEL SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Build Your Own Chemical Brand
          </h2>
          <p className="text-slate-400 font-light text-base leading-relaxed">
            We operate high-speed automated bottling lines in Jersey City, New Jersey. Let us handle chemical engineering, regulatory OSHA filings, and high-purity blending while you scale your local sales brand.
          </p>
        </div>

        {/* Dual-grid block: Brand customizer on Left, Program features list on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Brand Customizer Console (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Customizer Parameters Panel (6 cols) */}
            <div className="md:col-span-7 space-y-5">
              <h3 className="font-display font-bold text-base text-slate-100 flex items-center space-x-2">
                <Paintbrush className="w-4 h-4 text-blue-400" />
                <span>Customizer Console</span>
              </h3>

              {/* Company Input */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  Company Name (Inquirer)
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Janitorial"
                  className="w-full bg-slate-900 text-slate-100 placeholder-slate-550 border border-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 font-mono text-xs"
                />
              </div>

              {/* Brand Label Title */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  Appointed Brand Title
                </label>
                <input
                  type="text"
                  maxLength={18}
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value.toUpperCase())}
                  placeholder="e.g. VANTAGE PRO"
                  className="w-full bg-slate-900 text-slate-100 placeholder-slate-550 border border-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 font-mono font-bold text-xs"
                />
              </div>

              {/* Chemical Type Selector */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  Select Chemical Base
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Streak-Free Glass Cleaner", "Ultra Disinfectant", "Industrial Degreaser"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setProductType(t as any)}
                      className={`p-2 rounded-lg border text-[10px] font-semibold text-center leading-snug transition-all cursor-pointer ${
                        productType === t 
                          ? "bg-blue-600 border-blue-600 text-white font-bold" 
                          : "bg-slate-900 hover:bg-slate-850 text-slate-350 border-slate-800"
                      }`}
                    >
                      {t.split(" ").slice(-1)[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Capacity sizing */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  Appointed Bottle Geometry
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["24oz", "1 Gallon", "5 Gallon"].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setBottleSize(sz as any)}
                      className={`p-2 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                        bottleSize === sz 
                          ? "bg-blue-600 border-blue-600 text-white font-bold" 
                          : "bg-slate-900 hover:bg-slate-850 text-slate-350 border-slate-800"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Label Accent Picker */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  Select Brand Theme Color
                </label>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setAccentColor(c.hex)}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                      className={`w-7 h-7 rounded-lg border-2 transition-all cursor-pointer ${
                        accentColor === c.hex 
                          ? "border-white scale-110 shadow" 
                          : "border-slate-900 hover:scale-105"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Interactive Rendering (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-between min-h-[300px]">
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-slate-850 pb-2 mb-2">
                <span>PREVIEW UNIT</span>
                <span className="text-emerald-400 animate-pulse">● RENDER LIVE</span>
              </div>

              {renderInteractiveMockup()}

              <div className="w-full text-center mt-3 pt-2 border-t border-slate-850 text-[10px] font-mono text-slate-400">
                Custom packaging prototype layout
              </div>
            </div>

          </div>

          {/* Program features and direct inquiry submission on Right (Takes 5 cols) */}
          <div className="lg:col-span-1 border border-transparent hidden lg:block"></div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-display font-extrabold text-white">
              Turnkey Branding Features
            </h3>
            
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Why build production lines from scratch? Our automated facilities in Jersey City offer complete B2B brand launches with flawless regulatory security.
            </p>

            <div className="space-y-4">
              {[
                { title: "Custom Branding", desc: "Your unique custom logos and custom brand titles printed crisp on matte sheets." },
                { title: "Custom Labels", desc: "Compliance GHS labels mapped with full safety pictograms in high durability paper." },
                { title: "White Label Manufacturing", desc: "Select our proven Chemical formulations with fully certified EPA registration numbers." },
                { title: "Bulk Packaging", desc: "Flexible shipments ranging from cases of 24oz sprayers to robust 5-gallon distribution bundles." },
                { title: "Distributor Programs", desc: "Pre-negotiated tiered pricing based on consistent monthly gallon volume thresholds." },
                { title: "National Fulfillment Support", desc: "We direct-ship freight and pallets straight to regional 3PL networks and distributor hubs." }
              ].map((f, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm">
                  <div className="p-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm">{f.title}</h4>
                    <p className="text-xs text-slate-450 mt-0.5 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core CTA */}
            <div className="pt-4">
              <button
                onClick={handleStartInquiryClick}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg hover:scale-102 active:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Start Private Label Inquiry</span>
                <Edit3 className="w-4 h-4 ml-1" />
              </button>
              <p className="text-[10px] text-slate-500 font-mono text-center mt-2">
                * Initiates inquiry with pre-loaded custom container color and size parameters.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
