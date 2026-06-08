import React, { useState } from "react";
import { Phone, Mail, FileText, ShoppingCart, Menu, X, ShieldAlert, Award, ArrowRight } from "lucide-react";
import { QuoteCartItem } from "../types";

interface HeaderProps {
  cart: QuoteCartItem[];
  onNavigate: (sectionId: string) => void;
  onOpenCart: () => void;
  activeSection: string;
}

export default function Header({ cart, onNavigate, onOpenCart, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navigationItems = [
    { label: "Products", target: "products" },
    { label: "Private Label", target: "private-label" },
    { label: "Why Choose Us", target: "why-choose" },
    { label: "Industries Served", target: "industries" },
    { label: "SDS & Compliance", target: "sds-section" },
    { label: "About Us", target: "about-us" },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white text-slate-900 border-b-2 border-slate-300 shadow-sm">
      {/* Top Banner (Corporate Info and Direct Support) */}
      <div id="header-top-banner" className="bg-slate-900 text-slate-300 text-[11px] py-1.5 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse mr-1"></span>
              <span className="font-mono tracking-widest font-bold">USA MANUFACTURING • GMP CERTIFIED</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="font-sans text-slate-400 font-medium">Jersey City Blending Site</span>
          </div>
          <div className="flex items-center space-x-5">
            <a href="tel:2016850542" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono font-medium">(201) 685-0542</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="mailto:jmeza@exoboll.com" className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono">jmeza@exoboll.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div id="header-main-nav" className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Sleek Vector Logo */}
        <div 
          id="corporate-logo" 
          onClick={() => handleNavClick("app-root")} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-sm shadow-inner group-hover:scale-102 transition-transform shrink-0">
            {/* Geometric Shield Grid Icon */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-slate-100">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5c-.83 0-1.5-.67-1.5-1.5 0-1.16 1.5-3 1.5-3s1.5 1.84 1.5 3c0 .83-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-blue-900 uppercase leading-none">
              AmeriChem
            </h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
              Supply Co. • Jersey City
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav id="desktop-links" className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className={`pb-1 transition-all duration-150 cursor-pointer uppercase tracking-wider font-bold text-xs ${
                  isActive 
                    ? "text-blue-900 border-b-2 border-blue-900 font-black" 
                    : "text-slate-500 hover:text-blue-900 border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Call to Actions on right side */}
        <div id="header-actions" className="flex items-center space-x-4">
          {/* Quote Basket Tray */}
          <button
            id="quote-basket-trigger"
            onClick={onOpenCart}
            className="relative px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-none border-2 border-slate-300 transition-all flex items-center space-x-2 text-slate-800 font-bold cursor-pointer group"
            title="View Quote Inquiry Basket"
          >
            <ShoppingCart className="w-4 h-4 text-blue-900 group-hover:scale-105 transition-transform" />
            <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">Quote Basket</span>
            {totalCartItems > 0 ? (
              <span className="bg-blue-900 text-white font-mono font-bold text-[10px] w-5 h-5 rounded-none flex items-center justify-center border border-white absolute -top-2.5 -right-2.5">
                {totalCartItems}
              </span>
            ) : (
              <span className="bg-slate-200 text-slate-500 font-mono text-[9px] px-1 py-0.5 rounded-none border border-slate-300">
                0
              </span>
            )}
          </button>

          {/* Core Corporate CTA */}
          <button
            id="header-quote-cta"
            onClick={() => handleNavClick("quote-section")}
            className="hidden sm:flex bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-bold uppercase tracking-wide py-2.5 px-5 rounded-none transition-all items-center space-x-1.5 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Icon Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-none border-2 border-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-slate-300 px-6 py-6 space-y-4 animate-fadeIn shadow-lg">
          {/* Quick Info contacts */}
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-200 text-xs text-slate-500">
            <div>
              <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">PLANT OFFICE</p>
              <a href="tel:2016850542" className="flex items-center space-x-1 text-slate-700 hover:text-blue-900 pt-1">
                <Phone className="w-3 h-3 text-blue-900" />
                <span className="font-mono font-bold">(201) 685-0542</span>
              </a>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">B2B SALES</p>
              <a href="mailto:jmeza@exoboll.com" className="flex items-center space-x-1 text-slate-700 hover:text-blue-900 pt-1">
                <Mail className="w-3 h-3 text-blue-900" />
                <span className="truncate font-bold">jmeza@exoboll.com</span>
              </a>
            </div>
          </div>

          {/* Links stack */}
          <div className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-left w-full px-4 py-2.5 text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-none font-bold text-xs uppercase tracking-wider border-l-2 border-transparent hover:border-blue-900 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("quote-section")}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white text-center py-2.5 rounded-none font-mono font-bold text-xs uppercase tracking-wide"
            >
              Request a B2B Quote
            </button>
            <button
              onClick={() => handleNavClick("private-label")}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-center py-2.5 rounded-none font-mono font-bold text-xs uppercase tracking-wide border-2 border-slate-300"
            >
              Private Label Program
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
