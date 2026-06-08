import React, { useState, useEffect } from "react";
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
import { Phone, Mail, MapPin, Linkedin, ArrowUp } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<QuoteCartItem[]>([]);
  const [privateLabel, setPrivateLabel] = useState<PrivateLabelConfig | null>(null);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [cartOpen, setCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor screen positions to update active navbar section indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = [
        "products",
        "private-label",
        "why-choose",
        "industries",
        "sds-section",
        "about-us",
        "quote-section",
        "contact"
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 350) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling for header top banner
      const offset = 110;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
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
    // Real-time local state trigger handles user feedback directly in QuoteSection
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white" id="app-root">
      
      {/* Header element */}
      <Header 
        cart={cart}
        onNavigate={handleNavigate}
        onOpenCart={() => setCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main layout contents */}
      <main className="flex-1" id="main-content">
        <Hero onNavigate={handleNavigate} />
        
        {/* Dynamic Catalog Section */}
        <div id="products-anchor">
          <Products onAddCartItem={handleAddCartItem} onNavigate={handleNavigate} />
        </div>

        {/* Private Label Section */}
        <PrivateLabel onStartInquiry={handleStartPrivateLabelInquiry} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Industries Served */}
        <Industries onNavigate={handleNavigate} />

        {/* SDS Documentation Section */}
        <SDSSection />

        {/* About Company */}
        <AboutUs />

        {/* Quote and volumes inquiry Section */}
        <QuoteSection 
          cart={cart}
          privateLabel={privateLabel}
          onRemoveCartItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
          onSubmitInquiry={handleSubmitInquiry}
        />

        {/* Testimonial slider reviews */}
        <Testimonials />

        {/* Accordion FAQ disclosures */}
        <FAQSection />

        {/* Physical site contact detail cards and form embeds */}
        <ContactSection />
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

      {/* Scroll to Top floating Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 z-40 hover:scale-105 active:translate-y-0.5 transition-all cursor-pointer border border-blue-400"
          title="Scroll up to top section"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* B2B Fortune 500 compliant Corporate Footer */}
      <footer id="app-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo Brand column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-700 to-slate-800 rounded-lg">
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-white" stroke="currentColor" fill="none" strokeWidth="3">
                  <path d="M50 15 L80 25 L80 55 C80 72, 65 83, 50 88 C35 83, 20 72, 20 55 L20 25 Z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-white text-base uppercase tracking-tight">AmeriChem</span>
            </div>
            
            <p className="text-xs leading-relaxed font-light text-slate-500">
              Professional cleaning chemicals manufactured in USA. Enterprise distribution networks and custom private-label solutions designed for scale.
            </p>

            <div className="pt-2 flex space-x-4">
              <a 
                href="https://linkedin.com/company/americhem-supply-co" 
                target="_blank" 
                rel="referrePolicy" 
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-850 hover:border-slate-700 transition-all cursor-pointer"
                aria-label="LinkedIn Corporate Page link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">Target Solutions</h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => handleNavigate("products")} 
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleNavigate("private-label")} 
                  className="hover:text-white transition-colors cursor-pointer text-left font-medium text-blue-400"
                >
                  Private Label Program
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">Jersey City plant</h4>
            <div className="space-y-3 text-xs leading-relaxed font-light text-slate-500">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-650 shrink-0 mt-0.5" />
                <span>678 Mont St, Jersey City, New Jersey, USA</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-650 shrink-0" />
                <a href="tel:2016850542" className="hover:text-white transition-all font-mono">(201) 685-0542</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-650 shrink-0" />
                <a href="mailto:jmeza@exoboll.com" className="hover:text-white transition-all">jmeza@exoboll.com</a>
              </p>
            </div>
          </div>

          {/* Urgent direct actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">Direct Actions</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => handleNavigate("quote-section")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-center font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg shadow-md transition-all cursor-pointer"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => handleNavigate("sds-section")}
                className="w-full bg-slate-900 hover:bg-slate-850 text-slate-300 font-mono text-center text-xs uppercase tracking-wider py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                Compliance SDS Hub
              </button>
            </div>
          </div>

        </div>

        {/* SEO Compliance, legal info, and verification signatures */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-xs">
          
          {/* SEO Compliance keyword layout footer panel listing key search parameters cleanly */}
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-900 mb-8 space-y-2">
            <p className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
              AmeriChem B2B Index Keywords & Compliance Disclosures
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-slate-600 font-sans tracking-wide">
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
              <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            </div>
            
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider bg-slate-950 border border-slate-900 px-3 py-1 rounded-full text-slate-550">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Made in USA • EPA Compliance Registered</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
