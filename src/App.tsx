import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Industries from "./components/Industries";
import AboutUs from "./components/AboutUs";
import PrivateLabel from "./components/PrivateLabel";
import SDSSection from "./components/SDSSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import CartTray from "./components/CartTray";

import { QuoteCartItem, PrivateLabelConfig, QuoteInquiry } from "./types";
import { PRODUCTS } from "./data";
import { Phone, Mail, MapPin, Linkedin, ArrowUp, RefreshCw, LayoutGrid, Sparkles, ShieldCheck, FileText, Building2, HelpCircle, Layers } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<QuoteCartItem[]>([]);
  const [privateLabel, setPrivateLabel] = useState<PrivateLabelConfig | null>(null);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Dynamic Navigation Interceptor with 700ms Spinning Logo Loading State
  const handleNavigate = (sectionId: string) => {
    // If target is top-level root, map to hero-section
    const normalizedTarget = sectionId === "app-root" ? "hero-section" : sectionId;

    if (normalizedTarget === activeSection && !isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Trigger spinning logo loading state (600ms - 800ms)
    setIsLoading(true);

    setTimeout(() => {
      setActiveSection(normalizedTarget);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  const handleAddCartItem = (productId: string, selectedSize: string, qty: number) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === productId && item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        return [...prev, { product, selectedSize, quantity: qty }];
      }
    });
  };

  const handleRemoveCartItem = (productId: string, selectedSize: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleStartPrivateLabelInquiry = (config: PrivateLabelConfig) => {
    setPrivateLabel(config);
    handleNavigate("quote-section");
  };

  const handleSubmitInquiry = (inquiry: QuoteInquiry) => {
    console.log("Wholesale Lead captured successfully:", inquiry);
  };

  // Section Tab definitions for quick sub-navigation
  const sectionViews = [
    { id: "hero-section", label: "Overview", icon: LayoutGrid },
    { id: "products", label: "Chemical Catalog", icon: Sparkles },
    { id: "private-label", label: "Private Label", icon: Layers },
    { id: "why-choose", label: "Why Choose Us", icon: ShieldCheck },
    { id: "industries", label: "Industries", icon: Building2 },
    { id: "sds-section", label: "SDS & Compliance", icon: FileText },
    { id: "about-us", label: "About AmeriChem", icon: Building2 },
    { id: "quote-section", label: "Request Quote", icon: Sparkles },
    { id: "testimonials", label: "Case Studies", icon: ShieldCheck },
    { id: "faq-section", label: "Compliance FAQ", icon: HelpCircle },
    { id: "contact", label: "Plant Location", icon: MapPin },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-100 text-slate-800 antialiased selection:bg-blue-900 selection:text-white" id="app-root">
      
      {/* Fixed/Sticky Header element */}
      <Header 
        cart={cart}
        onNavigate={handleNavigate}
        onOpenCart={() => setCartOpen(true)}
        activeSection={activeSection}
        isLoading={isLoading}
      />

      {/* Main Single Page Dynamic Content Container */}
      <main className="flex-1 relative min-h-[600px]" id="main-content">
        
        {/* Spinning Logo Loading State (Requirement 3) */}
        {isLoading ? (
          <div 
            id="view-loading-overlay" 
            className="w-full py-32 sm:py-48 flex flex-col items-center justify-center space-y-6 text-center px-4"
          >
            {/* Spinning Shield Emblem */}
            <div className="relative w-16 h-16 bg-blue-900 flex items-center justify-center shadow-lg border-2 border-blue-700 animate-logo-spin">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-slate-100">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5c-.83 0-1.5-.67-1.5-1.5 0-1.16 1.5-3 1.5-3s1.5 1.84 1.5 3c0 .83-.67 1.5-1.5 1.5z" />
              </svg>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase flex items-center justify-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-900" />
                <span>Synchronizing Chemical View...</span>
              </p>
              <h3 className="font-display font-black text-xl text-slate-900 uppercase">
                AmeriChem Industrial Data Engine
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-mono">
                Loading certified formulations, compliance metrics, and interactive calculators.
              </p>
            </div>

            {/* Micro loading progress bar */}
            <div className="w-48 h-1.5 bg-slate-200 border border-slate-300 overflow-hidden">
              <div className="h-full bg-blue-900 w-full animate-pulse"></div>
            </div>
          </div>
        ) : (
          /* Dynamic Active View Display with Fade-In Animation (Requirement 2 & 3) */
          <div className="animate-fadeInView">
            
            {/* Dynamic View 1: Overview / Home Dashboard */}
            {activeSection === "hero-section" && (
              <div id="view-hero">
                <Hero onNavigate={handleNavigate} />
                
                {/* Embedded quick preview grid to explore other modules */}
                <div className="bg-slate-900 text-white py-16 border-t-2 border-slate-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                      <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">
                        AMERICHEM HUB NAVIGATION
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white">
                        Explore Full Chemical Capabilities
                      </h2>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Select an enterprise division below to access certified specifications, quote tools, and safety data.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {sectionViews.filter(v => v.id !== "hero-section").slice(0, 8).map((mod) => {
                        const Icon = mod.icon;
                        return (
                          <button
                            key={mod.id}
                            onClick={() => handleNavigate(mod.id)}
                            className="p-5 bg-slate-950 hover:bg-slate-850 border-2 border-slate-800 hover:border-blue-700 text-left transition-all group flex flex-col justify-between h-36 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div className="p-2.5 bg-slate-900 text-blue-400 border border-slate-800 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] font-mono text-slate-500 uppercase">ENTERPRISE</span>
                            </div>
                            <div>
                              <p className="font-display font-black text-sm uppercase text-white group-hover:text-blue-400 transition-colors">
                                {mod.label}
                              </p>
                              <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                                View certified division specs &rarr;
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic View 2: Chemical Products Catalog */}
            {activeSection === "products" && (
              <div id="view-products" className="py-4">
                <Products onAddCartItem={handleAddCartItem} onNavigate={handleNavigate} />
              </div>
            )}

            {/* Dynamic View 3: Private Label Program */}
            {activeSection === "private-label" && (
              <div id="view-private-label" className="py-4">
                <PrivateLabel onStartInquiry={handleStartPrivateLabelInquiry} />
              </div>
            )}

            {/* Dynamic View 4: Why Choose Us */}
            {activeSection === "why-choose" && (
              <div id="view-why-choose" className="py-4">
                <WhyChooseUs />
              </div>
            )}

            {/* Dynamic View 5: Industries Served */}
            {activeSection === "industries" && (
              <div id="view-industries" className="py-4">
                <Industries onNavigate={handleNavigate} />
              </div>
            )}

            {/* Dynamic View 6: SDS & Compliance Regulatory Sheets */}
            {activeSection === "sds-section" && (
              <div id="view-sds" className="py-4">
                <SDSSection />
              </div>
            )}

            {/* Dynamic View 7: About Company */}
            {activeSection === "about-us" && (
              <div id="view-about" className="py-4">
                <AboutUs />
              </div>
            )}

            {/* Dynamic View 8: Wholesale Quote Inquiry */}
            {activeSection === "quote-section" && (
              <div id="view-quote" className="py-4">
                <QuoteSection 
                  cart={cart}
                  privateLabel={privateLabel}
                  onRemoveCartItem={handleRemoveCartItem}
                  onClearCart={handleClearCart}
                  onSubmitInquiry={handleSubmitInquiry}
                />
              </div>
            )}

            {/* Dynamic View 9: Client Testimonials */}
            {activeSection === "testimonials" && (
              <div id="view-testimonials" className="py-4">
                <Testimonials />
              </div>
            )}

            {/* Dynamic View 10: FAQ & Regulatory Guidance */}
            {activeSection === "faq-section" && (
              <div id="view-faq" className="py-4">
                <FAQSection />
              </div>
            )}

            {/* Dynamic View 11: Contact & Plant Logistics */}
            {activeSection === "contact" && (
              <div id="view-contact" className="py-4">
                <ContactSection />
              </div>
            )}

          </div>
        )}
      </main>

      {/* Slide-over cart tray drawer */}
      <CartTray 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemoveCartItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onCheckout={() => {
          setCartOpen(false);
          handleNavigate("quote-section");
        }}
      />

      {/* B2B Fortune 500 compliant Corporate Footer */}
      <footer id="app-footer" className="bg-slate-950 text-slate-400 py-16 border-t-2 border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo Brand column */}
          <div className="space-y-4">
            <div 
              onClick={() => handleNavigate("hero-section")}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-blue-900 border border-blue-700 rounded-none shrink-0 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-100">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5c-.83 0-1.5-.67-1.5-1.5 0-1.16 1.5-3 1.5-3s1.5 1.84 1.5 3c0 .83-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <span className="font-display font-black text-white text-base uppercase tracking-tight">AmeriChem</span>
            </div>
            
            <p className="text-xs leading-relaxed font-light text-slate-400">
              Professional cleaning chemicals manufactured in USA. Enterprise distribution networks and custom private-label solutions designed for scale.
            </p>

            <div className="pt-2 flex space-x-4">
              <a 
                href="https://linkedin.com/company/americhem-supply-co" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-none border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
                aria-label="LinkedIn Corporate Page link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">Catalog Solutions</h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => handleNavigate("products")} 
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center space-x-1"
                  >
                    <span className="text-blue-500 font-mono text-[10px]">&rsaquo;</span>
                    <span>{p.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleNavigate("private-label")} 
                  className="hover:text-white transition-colors cursor-pointer text-left font-bold text-blue-400 flex items-center space-x-1"
                >
                  <span className="text-blue-500 font-mono text-[10px]">&rsaquo;</span>
                  <span>Private Label Program</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">Jersey City plant</h4>
            <div className="space-y-3 text-xs leading-relaxed font-light text-slate-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>678 Mont St, Jersey City, New Jersey, USA</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:2016850542" className="hover:text-white transition-all font-mono font-bold">(201) 685-0542</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:jmeza@exoboll.com" className="hover:text-white transition-all">jmeza@exoboll.com</a>
              </p>
            </div>
          </div>

          {/* Direct actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">Direct Actions</h4>
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => handleNavigate("quote-section")}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-mono text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-all cursor-pointer border border-blue-700 shadow-sm"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => handleNavigate("sds-section")}
                className="w-full bg-slate-900 hover:bg-slate-850 text-slate-300 font-mono text-center text-xs uppercase tracking-wider py-3 rounded-none border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                Compliance SDS Hub
              </button>
              <button 
                onClick={() => handleNavigate("faq-section")}
                className="w-full bg-slate-900 hover:bg-slate-850 text-slate-300 font-mono text-center text-xs uppercase tracking-wider py-3 rounded-none border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                FAQ & Regulatory Q&A
              </button>
            </div>
          </div>

        </div>

        {/* SEO Compliance, legal info, and verification signatures */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-900 text-xs">
          
          {/* SEO Compliance keyword layout footer panel */}
          <div className="bg-slate-950 p-4 rounded-none border-2 border-slate-900 mb-8 space-y-2">
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              AmeriChem B2B Index Keywords & Compliance Disclosures
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-slate-500 font-sans tracking-wide">
              <span>• commercial cleaning chemicals</span>
              <span>• industrial degreaser supplier</span>
              <span>• private label cleaning products</span>
              <span>• USA cleaning chemical distributor</span>
              <span>• janitorial supply chemicals</span>
              <span>• bulk cleaning chemicals</span>
              <span>• EPA compliant cleaning products</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-slate-500 text-[11px] font-light">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
              <span>© {new Date().getFullYear()} AmeriChem Supply Co. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("AmeriChem Privacy Policy: All client data is encrypted and strictly preserved under NDA."); }} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert("AmeriChem Terms & Conditions: Industrial delivery terms adhere to standard DOT and EPA safety protocols."); }} className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            </div>
            
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-none text-slate-400">
              <span className="w-2 h-2 rounded-none bg-emerald-500"></span>
              <span>Made in USA • EPA Compliance Registered</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
