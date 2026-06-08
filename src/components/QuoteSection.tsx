import React, { useState, useEffect } from "react";
import { Send, ShoppingBag, Trash2, CheckCircle2, ChevronRight, FileCheck2, Calculator, Info } from "lucide-react";
import { QuoteCartItem, PrivateLabelConfig, QuoteInquiry } from "../types";

interface QuoteSectionProps {
  cart: QuoteCartItem[];
  privateLabel: PrivateLabelConfig | null;
  onRemoveCartItem: (productId: string, selectedSize: string) => void;
  onClearCart: () => void;
  onSubmitInquiry: (inquiry: QuoteInquiry) => void;
}

export default function QuoteSection({ cart, privateLabel, onRemoveCartItem, onClearCart, onSubmitInquiry }: QuoteSectionProps) {
  // Input fields
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productInterest, setProductInterest] = useState("Bulk Order Purchases");
  const [monthlyVolume, setMonthlyVolume] = useState("100 to 500 Gallons");
  const [message, setMessage] = useState("");

  const [formSuccess, setFormSuccess] = useState(false);
  const [freightCostIndicator, setFreightCostIndicator] = useState("calculating...");

  // Sync inputs if user pre-configured a private label company
  useEffect(() => {
    if (privateLabel) {
      setCompanyName(privateLabel.companyName);
      setProductInterest("Private Label Program (" + privateLabel.brandName + ")");
      setMessage(`Interested in Private Label manufacturing. Dynamic Configuration chosen:\n- Brand: ${privateLabel.brandName}\n- Chemical base: ${privateLabel.productType}\n- Container Shape: ${privateLabel.bottleSize}\n- Accents: Theme configured with Hex ${privateLabel.accentColor}\n- Liquid base: ${privateLabel.liquidColor}`);
    }
  }, [privateLabel]);

  // Simulated live freight routing indicator for Jersey City dispatch
  useEffect(() => {
    if (companyName.length > 3) {
      setFreightCostIndicator("Optimized via LTL Freight (NJ Depot Hub)");
    } else {
      setFreightCostIndicator("Awaiting location info");
    }
  }, [companyName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactPerson || !email) return;

    onSubmitInquiry({
      companyName,
      contactPerson,
      email,
      phone,
      productInterest,
      monthlyVolume,
      message,
      items: cart
    });

    setFormSuccess(true);
    setTimeout(() => {
      // Clear inputs
      setContactPerson("");
      setEmail("");
      setPhone("");
      setMessage("");
      onClearCart();
    }, 200);
  };

  return (
    <section id="quote-section" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-700 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-blue-50 border border-blue-150 rounded-full">
            B2B PRICE STRUCTURE CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Request an Enterprise Quote
          </h2>
          <p className="text-slate-650 font-light text-base leading-relaxed">
            Submit your facility requirements and volume metrics. Our sales engineers based in Jersey City compile compliant freight pricing, volume discount thresholds, and turnaround timelines.
          </p>
        </div>

        {/* Dual Grid: Left Inquiry Cart Summary, Right Lead Generation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Cart Overview and Freight Router (Takes 5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800">
            <h3 className="font-display font-bold text-lg text-white border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Your B2B Quote Basket</span>
              <span className="text-[10px] font-mono bg-blue-900 text-blue-300 px-2 py-0.5 rounded uppercase">
                ESTIMATED FREIGHT ACTIVE
              </span>
            </h3>

            {/* Render Items if Cart exists */}
            {cart.length > 0 ? (
              <div className="space-y-4">
                <div role="list" aria-label="Cart Items" className="space-y-3 max-h-[240px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="bg-slate-950 p-4 rounded-2xl border border-slate-850 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-100">{item.product.name}</p>
                        <p className="text-[11px] font-mono text-blue-400 mt-0.5 uppercase">
                          Size Selected: {item.selectedSize}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Calculated Base: {item.selectedSize === "24oz" ? "Case of 12" : item.selectedSize === "1 Gallon" ? "Case of 4" : "1 Pail"}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="text-xs font-mono font-bold text-slate-300">QTY: {item.quantity}</p>
                          <p className="text-[9px] font-sans text-slate-500">Bulk Level Tier</p>
                        </div>
                        <button
                          onClick={() => onRemoveCartItem(item.product.id, item.selectedSize)}
                          className="p-1.5 bg-slate-900 hover:bg-slate-850 rounded text-slate-500 hover:text-red-400 transition-colors"
                          title="Erase requested batch item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                  <span>Batch Total Items Requested:</span>
                  <span className="font-mono font-bold text-white text-base">
                    {cart.reduce((total, i) => total + i.quantity, 0)} Units
                  </span>
                </div>
              </div>
            ) : privateLabel ? (
              // Display Private Label Pre-selected layout if they used customizer
              <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-3">
                <p className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                  PRE-CONFIGURED PRIVATE LABEL PRESET
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p className="font-semibold text-white">Brand Name: {privateLabel.brandName}</p>
                  <p>Product Base: {privateLabel.productType}</p>
                  <p>Bottle size selection: {privateLabel.bottleSize}</p>
                  <p>Label Accents: {privateLabel.accentColor}</p>
                  <p className="text-slate-500 italic mt-2 text-[11px]">
                    * Specifications have been injected into the Message box below. Just complete your corporate details.
                  </p>
                </div>
              </div>
            ) : (
              // Empty basket placeholder
              <div className="text-center py-10 bg-slate-950 border border-slate-850 rounded-2xl">
                <ShoppingBag className="w-10 h-10 text-slate-700 mx-auto mb-2" />
                <p className="text-xs text-slate-400">Basket queue empty</p>
                <p className="text-[11px] text-slate-500 mt-1 max-w-xs mx-auto">
                  Select packaging capacities on our product listings to construct custom discount structures.
                </p>
              </div>
            )}

            {/* Freight Proximity Dispatch router panel */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 space-y-3">
              <div className="flex items-center space-x-2 text-indigo-400">
                <Calculator className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                  Logistics Routing Engine
                </span>
              </div>
              <div className="text-xs space-y-1.5 font-light text-slate-300">
                <div className="flex justify-between">
                  <span>Origin Terminal:</span>
                  <span className="font-mono text-white">Jersey City Site (NJ)</span>
                </div>
                <div className="flex justify-between">
                  <span>Dispatch Schedule:</span>
                  <span className="font-mono text-emerald-400">Ready Within 48-hr</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Freight:</span>
                  <span className="font-mono text-indigo-400 font-bold">{freightCostIndicator}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl text-xs flex items-start space-x-2.5">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Need customized dilution metrics, specialty non-corrosive properties, or FTL shipping parameters? Make a note in the message box, and our Jersey City safety coordinators will reach out.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Request Form (Takes 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl relative">
            {formSuccess ? (
              <div className="text-center py-20 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">B2B Quote Request Recorded</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-light">
                    Your inquiry has been successfully queued into the AmeriChem dispatcher logic. Representative J. Meza (jmeza@exoboll.com / (201) 685-0542) will process and compile your customized volume discount sheet shortly.
                  </p>
                </div>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Configure Additional Quotes
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="quote-request-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="quoteCompName" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                      Company Name *
                    </label>
                    <input
                      id="quoteCompName"
                      type="text"
                      required
                      placeholder="e.g. Northeast Janitorial Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1.5">
                    <label htmlFor="quoteContactPerson" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                      Contact Person *
                    </label>
                    <input
                      id="quoteContactPerson"
                      type="text"
                      required
                      placeholder="e.g. Douglas Vance"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="quoteEmail" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                      Email Address *
                    </label>
                    <input
                      id="quoteEmail"
                      type="email"
                      required
                      placeholder="e.g. dvance@apexjanitorial.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="quotePhone" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                      Phone Number *
                    </label>
                    <input
                      id="quotePhone"
                      type="tel"
                      required
                      placeholder="e.g. (201) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  {/* Product Interest Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="quoteInterest" className="block text-xs font-mono font-bold text-slate-700 uppercase font-bold">
                      Product Interest
                    </label>
                    <select
                      id="quoteInterest"
                      value={productInterest}
                      onChange={(e) => setProductInterest(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-500"
                    >
                      <option value="Bulk Order Purchases">Bulk Order Purchases</option>
                      <option value="Industrial Degreaser Line">Industrial Degreaser Line</option>
                      <option value="Glass Surface Cleaner Line">Glass Surface Cleaner Line</option>
                      <option value="Broad-Spectrum Disinfectant Line">Broad-Spectrum Disinfectant Line</option>
                      <option value="Private Label Program">Private Label Program</option>
                      <option value="Custom Chemical Synthesis Formulation">Custom Chemical Synthesis Formulation</option>
                      <option value="Distributor Channel Program">Distributor Channel Program</option>
                    </select>
                  </div>

                  {/* Monthly Volume */}
                  <div className="space-y-1.5">
                    <label htmlFor="quoteVolume" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                      Expected Monthly Volume
                    </label>
                    <select
                      id="quoteVolume"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(e.target.value)}
                      className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-blue-500"
                    >
                      <option value="Less than 100 Gallons">Less than 100 Gallons</option>
                      <option value="100 to 500 Gallons">100 to 500 Gallons</option>
                      <option value="500 to 2,000 Gallons">500 to 2,000 Gallons</option>
                      <option value="2,000 to 10,000 Gallons">2,000 to 10,000 Gallons</option>
                      <option value="Enterprise Scale Bulk Cargo (FTL)">Enterprise Scale Bulk Cargo (FTL)</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="quoteMessage" className="block text-xs font-mono font-bold text-slate-700 uppercase">
                    Inquiry Message / Delivery Requirements
                  </label>
                  <textarea
                    id="quoteMessage"
                    rows={4}
                    required
                    placeholder="Provide details about your facility cleaning setups, packaging requests, or compliance guidelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white text-slate-800 border border-slate-250 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-600 resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
