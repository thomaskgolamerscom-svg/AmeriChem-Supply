import React, { useState } from "react";
import { ShoppingCart, Compass, CheckCircle, Flame, Shield, HelpCircle, ArrowRight, Download } from "lucide-react";
import { Product, QuoteCartItem } from "../types";
import { PRODUCTS } from "../data";

interface ProductsProps {
  onAddCartItem: (productId: string, selectedSize: string, qty: number) => void;
  onNavigate: (sectionId: string) => void;
}

// Custom interactive SVG component to render highly detailed realistic bottle mockups
// that morph depending on size (24oz spray vs 1 Gallon handle jug vs 5 Gallon industrial pail)
// with colored liquids inside and customized labels.
interface ChemicalContainerMockupProps {
  size: "24oz" | "1 Gallon" | "5 Gallon";
  liquidColorClass: string; // e.g. text-sky-500
  productName: string;
  chemicalCode: string;
  phLevel: number;
}

export function ChemicalContainerMockup({ size, liquidColorClass, productName, chemicalCode, phLevel }: ChemicalContainerMockupProps) {
  // Determine color hex codes based on name
  let liquidColor = "#10b981"; // Emerald
  let labelBg = "#064e3b";
  if (productName.includes("Glass")) {
    liquidColor = "#38bdf8"; // Sky Blue
    labelBg = "#0c4a6e";
  } else if (productName.includes("Disinfectant")) {
    liquidColor = "#6366f1"; // Indigo
    labelBg = "#312e81";
  }

  if (size === "24oz") {
    return (
      <div className="relative w-44 h-64 mx-auto flex items-center justify-center animate-fadeIn">
        <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl">
          {/* Spray Straw Inside */}
          <line x1="50" y1="35" x2="52" y2="135" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="1,1" />

          {/* Liquid contents filling up 65% of bottle */}
          <path d="M28 85 L72 85 C73 95, 73 125, 71 138 C70 142, 60 144, 50 144 C40 144, 30 142, 29 138 C27 125, 27 95, 28 85 Z" fill={liquidColor} fillOpacity="0.45" />
          
          {/* Clear Translucent Bottle body */}
          <path d="M50 35 L58 35 L58 55 L72 75 C75 80, 74 135, 72 140 C70 145, 62 146, 50 146 C38 146, 30 145, 28 140 C26 135, 25 80, 28 75 L42 55 L42 35 Z" fill="rgba(255, 255, 255, 0.15)" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Liquid bubbles */}
          <circle cx="36" cy="110" r="2.5" fill={liquidColor} fillOpacity="0.6" />
          <circle cx="62" cy="100" r="1.5" fill={liquidColor} fillOpacity="0.7" />
          <circle cx="50" cy="125" r="2" fill={liquidColor} fillOpacity="0.5" />
          <circle cx="44" cy="92" r="1" fill={liquidColor} fillOpacity="0.8" />

          {/* Spray Trigger Mechanism Piece */}
          <g transform="translate(32, 5)">
            {/* Trigger Base Neck */}
            <rect x="13" y="15" width="10" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="11" y="25" width="14" height="6" fill="#e2e8f0" rx="1" />
            
            {/* Spray Nozzle head */}
            <path d="M5 5 L30 5 L35 12 L35 20 L27 22 L11 22 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            {/* The actual nozzle tip */}
            <rect x="2" y="8" width="4" height="6" fill="#3b82f6" />
            {/* Actual finger trigger lever */}
            <path d="M12 21 L8 35 L12 35 L15 21 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          </g>

          {/* Front B2B Matte Label */}
          <g transform="translate(0, -2)">
            <rect x="30" y="86" width="40" height="42" rx="2" fill={labelBg} stroke="#ffffff" strokeWidth="1" />
            {/* Compliance stripes */}
            <rect x="33" y="90" width="34" height="2" fill="#d97706" />
            <text x="50" y="99" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AMERICHM</text>
            <text x="50" y="106" fill="rgba(255,255,255,0.8)" fontSize="3.5" textAnchor="middle" fontFamily="sans-serif">{chemicalCode}</text>
            {/* Miniature hazard diamond */}
            <g transform="translate(46, 110)">
              <rect x="0" y="0" width="8" height="8" fill="#e2e8f0" stroke="#475569" strokeWidth="0.5" transform="rotate(45 4 4)" />
              <text x="4" y="5" fill="#ff0000" fontSize="3" fontWeight="bold" textAnchor="middle">2</text>
            </g>
            <text x="50" y="123" fill="#ffffff" fontSize="3" textAnchor="middle" fontFamily="monospace">pH: {phLevel}</text>
          </g>
        </svg>
        <span className="absolute bottom-1 bg-slate-900 border border-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono text-[9px]">
          24oz Professional RTU
        </span>
      </div>
    );
  }

  if (size === "1 Gallon") {
    return (
      <div className="relative w-44 h-64 mx-auto flex items-center justify-center animate-fadeIn">
        <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl" id="svg-gallon-jug">
          {/* Cap */}
          <rect x="42" y="10" width="16" height="8" rx="1.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="45" y1="10" x2="45" y2="18" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="49" y1="10" x2="49" y2="18" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="53" y1="10" x2="53" y2="18" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="57" y1="10" x2="57" y2="18" stroke="#cbd5e1" strokeWidth="1" />

          {/* Liquid content pouring fill at 70% level */}
          <path d="M22 66 L78 66 C79 80, 79 125, 77 142 C74 145, 60 146, 50 146 C40 146, 26 145, 23 142 C21 125, 21 80, 22 66 Z" fill={liquidColor} fillOpacity="0.45" />

          {/* Heavy Duty 1 Gallon Handle Bottle */}
          <path d="M46 18 L54 18 L54 28 L74 48 C78 52, 79 58, 80 62 L80 140 C80 144, 76 147, 50 147 C24 147, 20 144, 20 140 L20 62 C21 58, 22 52, 26 48 L46 28 Z" fill="rgba(255,255,255,0.12)" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Hollow handle mold hole */}
          <path d="M 28 65 C 28 55, 36 48, 42 46 L 42 66 C 36 66, 30 65, 28 65 Z" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Micro Bubbles */}
          <circle cx="30" cy="110" r="3" fill={liquidColor} fillOpacity="0.6" />
          <circle cx="70" cy="90" r="2.5" fill={liquidColor} fillOpacity="0.5" />
          <circle cx="55" cy="120" r="2" fill={liquidColor} fillOpacity="0.4" />
          <circle cx="40" cy="80" r="1.5" fill={liquidColor} fillOpacity="0.7" />

          {/* Matte B2B label */}
          <g transform="translate(0, 5)">
            <rect x="32" y="70" width="38" height="54" rx="2" fill={labelBg} stroke="#ffffff" strokeWidth="1" />
            <rect x="35" y="74" width="32" height="2" fill="#3b82f6" />
            <text x="51" y="83" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AMERICHM</text>
            <text x="51" y="90" fill="rgba(255,255,255,0.8)" fontSize="3.5" textAnchor="middle" fontFamily="sans-serif">{chemicalCode}</text>
            
            {/* NFPA diamond representation */}
            <g transform="translate(47, 95)">
              <rect x="0" y="0" width="8" height="8" fill="#e2e8f0" stroke="#475569" strokeWidth="0.5" transform="rotate(45 4 4)" />
              <text x="4" y="5.5" fill="#ef4444" fontSize="3" fontWeight="bold" textAnchor="middle">1</text>
            </g>
            
            <text x="51" y="112" fill="#ffffff" fontSize="3.5" textAnchor="middle" fontFamily="monospace">pH: {phLevel}</text>
            <text x="51" y="119" fill="#93c5fd" fontSize="2.8" textAnchor="middle" fontFamily="sans-serif">MADE IN USA</text>
          </g>
        </svg>
        <span className="absolute bottom-1 bg-slate-900 border border-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono text-[9px]">
          1 Gal Concentrate
        </span>
      </div>
    );
  }

  // 5 Gallon Pail
  return (
    <div className="relative w-44 h-64 mx-auto flex items-center justify-center animate-fadeIn">
      <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-xl" id="svg-bucket">
        {/* Lid cover with reinforced rims */}
        <polygon points="12,18 88,18 85,26 15,26" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <line x1="20" y1="22" x2="80" y2="22" stroke="#cbd5e1" strokeWidth="1.5" />
        
        {/* Pouring spout cap on lid */}
        <rect x="22" y="12" width="10" height="6" fill="#ef4444" stroke="#475569" strokeWidth="1" />

        {/* Liquid indicator panel visible on semi-translucent buckets */}
        <path d="M19 32 L81 32 C81 32, 79 110, 77 135 C76 138, 62 142, 50 142 C38 142, 24 138, 23 135 C21 110, 19 32, 19 32 Z" fill={liquidColor} fillOpacity="0.25" />

        {/* Reinforced Heavy Duty Industrial 5 Gallon shipping pail body */}
        <path d="M15 26 L85 26 L81 138 C80 142, 65 144, 50 144 C35 144, 20 142, 19 138 Z" fill="rgba(255,255,255,0.1)" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Bucket structural ribs (vertical lines) */}
        <path d="M 17.5 50 L 82.5 50" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M 18.2 80 L 81.8 80" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M 19.1 110 L 80.9 110" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.3" />

        {/* Steel carry handle arch swing */}
        <path d="M10 50 C 15 2, 85 2, 90 50" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="300" strokeDashoffset="0" />
        {/* Handle grip */}
        <rect x="40" y="8" width="20" height="5" rx="1.5" fill="#475569" />
        {/* Handle ear bracket mounts */}
        <circle cx="14" cy="50" r="3.5" fill="#475569" />
        <circle cx="86" cy="50" r="3.5" fill="#475569" />

        {/* Big compliance sticker label */}
        <g transform="translate(0, 15)">
          <rect x="26" y="38" width="48" height="60" rx="3" fill={labelBg} stroke="#ffffff" strokeWidth="1.2" />
          
          <rect x="29" y="42" width="42" height="3" fill="#d97706" />
          <text x="50" y="52" fill="#ffffff" fontSize="5.5" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">AMERICHM</text>
          <text x="50" y="60" fill="rgba(255,255,255,0.7)" fontSize="4.2" textAnchor="middle" fontFamily="monospace">{chemicalCode}</text>
          
          {/* NFPA compliance label icon */}
          <g transform="translate(46, 65)">
            <rect x="0" y="0" width="8" height="8" fill="#e2e8f0" stroke="#334155" strokeWidth="0.5" transform="rotate(45 4 4)" />
            <text x="4" y="5.5" fill="#ef4444" fontSize="3" fontWeight="bold" textAnchor="middle">3</text>
          </g>

          <text x="50" y="84" fill="#ffffff" fontSize="3.5" textAnchor="middle" fontFamily="monospace">Vol: 5 GAL / 18.9 L</text>
          <text x="50" y="90" fill="#93c5fd" fontSize="2.8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">COMM_GRADE B2B ONLY</text>
        </g>
      </svg>
      <span className="absolute bottom-1 bg-slate-900 border border-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono text-[9px]">
        5 Gal Enterprise Pail
      </span>
    </div>
  );
}

export default function Products({ onAddCartItem, onNavigate }: ProductsProps) {
  // State tracking selected sizes for each individual product
  const [selectedSizes, setSelectedSizes] = useState<Record<string, "24oz" | "1 Gallon" | "5 Gallon">>({
    "industrial-degreaser": "1 Gallon",
    "glass-cleaner": "24oz",
    "disinfectant-cleaner": "5 Gallon"
  });

  // State tracking quantity for each individual product
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "industrial-degreaser": 5,
    "glass-cleaner": 12,
    "disinfectant-cleaner": 3
  });

  // Success indicator triggers
  const [addedNotification, setAddedNotification] = useState<Record<string, boolean>>({});

  const handleSizeChange = (productId: string, size: "24oz" | "1 Gallon" | "5 Gallon") => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQtyChange = (productId: string, val: number) => {
    if (isNaN(val) || val < 1) return;
    setQuantities((prev) => ({ ...prev, [productId]: val }));
  };

  const handleAddToCartSubmit = (product: Product) => {
    const size = selectedSizes[product.id];
    const qty = quantities[product.id];
    onAddCartItem(product.id, size, qty);

    // Trigger visual feedback
    setAddedNotification((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedNotification((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-blue-900 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-slate-200 border-2 border-slate-350 rounded-none inline-block">
              CERTIFIED PRODUCT CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight uppercase">
              B2B Professional Chemical Catalog
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Formulated for high efficiency, reliable sanitization, and compliance safety. Select a container size to dynamically render its dimensions, GHS label criteria, and bulk discount structures.
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => onNavigate("sds-section")}
              className="px-4 py-2.5 border-2 border-slate-300 hover:border-slate-400 bg-white rounded-none text-slate-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-900" />
              <span>Get SDS Forms</span>
            </button>
            <button
              onClick={() => onNavigate("private-label")}
              className="px-4 py-2.5 bg-blue-900 hover:bg-blue-850 text-white rounded-none text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <span>Private Label program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Product Cards Stack (3 items as specified) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const currentSize = selectedSizes[product.id];
            const currentQty = quantities[product.id];
            const sizeDetails = product.sizes.find(s => s.volume === currentSize);
            const isAdded = addedNotification[product.id];

            return (
              <div 
                key={product.id} 
                id={`product-card-${product.id}`}
                className="bg-white border-2 border-slate-300 rounded-none overflow-hidden hover:border-blue-900 transition-all duration-150 flex flex-col group justify-between shadow-sm hover:shadow-md"
              >
                {/* Visual Header / Chemical Container Rendering area */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 pt-10 text-center relative border-b border-slate-200">
                  {/* Decorative glowing backplate */}
                  <div className="absolute inset-0 opacity-10 grid-blueprint"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2.5xl"></div>

                  {/* Dynamic interactive mockup model container */}
                  <ChemicalContainerMockup 
                    size={currentSize}
                    liquidColorClass={product.color}
                    productName={product.name}
                    chemicalCode={product.chemicalCode}
                    phLevel={product.phLevel}
                  />

                  {/* Chemical physical parameter badges */}
                  <div className="mt-8 flex items-center justify-center space-x-2.5 text-[10px] font-mono">
                    <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                      pH level: {product.phLevel}
                    </span>
                    <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                      Scent: {product.scent}
                    </span>
                  </div>
                </div>

                {/* Info and interaction column */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title and descriptions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                        {product.chemicalCode}
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-semibold px-2 py-0.5 rounded border border-emerald-200">
                        In Stock • US Blended
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-500 text-xs font-mono tracking-wide">
                      {product.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Size Selectors (Dynamic togglers that adapt container SVG shape) */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Select Packaging Size
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {product.sizes.map((sizeOpt) => {
                        const active = currentSize === sizeOpt.volume;
                        return (
                          <button
                            key={sizeOpt.volume}
                            onClick={() => handleSizeChange(product.id, sizeOpt.volume as any)}
                            className={`py-2 px-1 text-center rounded-none border-2 text-xs font-mono font-medium transition-all cursor-pointer ${
                              active 
                                ? "bg-blue-900 text-white border-blue-900 font-black" 
                                : "bg-white hover:bg-slate-50 text-slate-700 border-slate-300"
                            }`}
                          >
                            <div>{sizeOpt.volume}</div>
                            <div className={`text-[8px] mt-0.5 font-sans truncate ${active ? "text-blue-100" : "text-slate-400"}`}>
                              {sizeOpt.volume === "24oz" ? "Box of 12" : sizeOpt.volume === "1 Gallon" ? "Case of 4" : "1 Pail"}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bullet Spec Highlights */}
                  <div className="bg-slate-50 p-4 rounded-none border-2 border-slate-250 space-y-2">
                    <p className="text-[10px] font-mono uppercase text-slate-400 tracking-widest font-bold">Dilution & Packaging Metrics</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-light">Recommended Dilution:</span>
                        <span className="font-mono text-slate-800 font-medium">{product.dilutionRatio}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-light font-sans">NFPA Health Index:</span>
                        <span className="font-mono text-slate-800 font-medium">{product.safetyRating.split(" | ")[0].replace("Health: ", "")} / 4 Risk</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-light">Industrial Class:</span>
                        <span className="font-mono text-slate-800 font-semibold">{sizeDetails?.priceEstimationScale}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote Volume Integration Controls */}
                  <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                    <div className="w-24 shrink-0">
                      <label className="block text-[9px] font-mono font-bold uppercase text-slate-450 mb-1">
                        QTY ({currentSize === "24oz" ? "Cases" : currentSize === "1 Gallon" ? "Cases" : "Pails"})
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={currentQty}
                        onChange={(e) => handleQtyChange(product.id, parseInt(e.target.value))}
                        className="w-full bg-white border-2 border-slate-300 rounded-none px-2.5 py-1.5 text-center font-mono text-sm focus:outline-none focus:border-blue-900 text-slate-800"
                      />
                    </div>

                    <button
                      onClick={() => handleAddToCartSubmit(product)}
                      className={`flex-1 font-mono font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-none flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                        isAdded 
                          ? "bg-emerald-700 text-white" 
                          : "bg-blue-900 text-white hover:bg-blue-800"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{isAdded ? "Added To Quote" : "Add to Quote"}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Global Catalog Footer info */}
        <div className="mt-16 bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-lg text-white">Looking for Custom Formulation or Branded Bottling?</h4>
            <p className="text-sm font-light text-slate-400">
              We leverage our Jersey City filling lines to blend custom dilutions to your exact specifications, packaged under your exact white-labeled brand.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("private-label")}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-xl hover:scale-102 transition-all cursor-pointer"
          >
            Launch Private Label Builder
          </button>
        </div>

      </div>
    </section>
  );
}
