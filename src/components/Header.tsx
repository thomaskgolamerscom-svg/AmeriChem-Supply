import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail, ShoppingCart, Menu, X, ArrowRight, ChevronDown, Sparkles, Layers, Building2, ShieldCheck, FileText, Info } from "lucide-react";
import { QuoteCartItem } from "../types";

interface HeaderProps {
  cart: QuoteCartItem[];
  onNavigate: (sectionId: string) => void;
  onOpenCart: () => void;
  activeSection: string;
  isLoading?: boolean;
}

export default function Header({ cart, onNavigate, onOpenCart, activeSection, isLoading = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Close dropdown on outside click
  useEffect(() => {
    const handleGlobalClick = () => {
      setOpenDropdown(null);
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Consolidated Navigation Structure
  const navStructure = [
    {
      type: "link" as const,
      label: "Overview",
      target: "hero-section",
      isActive: activeSection === "hero-section",
    },
    {
      type: "dropdown" as const,
      id: "products-dropdown",
      label: "Products",
      mainTarget: "products",
      isActive: activeSection === "products" || activeSection === "private-label",
      items: [
        {
          label: "Chemical Products",
          target: "products",
          description: "Explore commercial cleaners, degreasers & bulk catalog",
          icon: Sparkles,
          isActive: activeSection === "products",
        },
        {
          label: "Private Label",
          target: "private-label",
          description: "Custom chemical formulations, bottling & branding",
          icon: Layers,
          isActive: activeSection === "private-label",
        },
      ],
    },
    {
      type: "dropdown" as const,
      id: "industries-dropdown",
      label: "Industries",
      mainTarget: "industries",
      isActive: activeSection === "industries" || activeSection === "why-choose",
      items: [
        {
          label: "Industries Served",
          target: "industries",
          description: "Sector solutions for Healthcare, Hospitality & Janitorial",
          icon: Building2,
          isActive: activeSection === "industries",
        },
        {
          label: "Why Choose Us",
          target: "why-choose",
          description: "USA manufacturing, GMP facility & batch compliance",
          icon: ShieldCheck,
          isActive: activeSection === "why-choose",
        },
      ],
    },
    {
      type: "dropdown" as const,
      id: "about-dropdown",
      label: "About Us",
      mainTarget: "about-us",
      isActive: activeSection === "about-us" || activeSection === "sds-section",
      items: [
        {
          label: "About AmeriChem",
          target: "about-us",
          description: "Jersey City blending facility, heritage & capacity",
          icon: Info,
          isActive: activeSection === "about-us",
        },
        {
          label: "SDS & Compliance",
          target: "sds-section",
          description: "GHS Safety Data Sheets & regulatory download bank",
          icon: FileText,
          isActive: activeSection === "sds-section",
        },
      ],
    },
    {
      type: "link" as const,
      label: "Contact",
      target: "contact",
      isActive: activeSection === "contact",
    },
  ];

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white text-slate-900 border-b border-slate-200 shadow-sm">
      {/* Top Banner (Corporate Info and Direct Support) */}
      <div id="header-top-banner" className="bg-slate-900 text-slate-300 text-[11px] py-1.5 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono tracking-wider font-semibold text-slate-200">USA MANUFACTURING • GMP CERTIFIED</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="font-sans text-slate-400">Jersey City Blending Facility</span>
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

      {/* Main Corporate Navigation Bar */}
      <div id="header-main-nav" className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Sleek Vector Logo with 360-Degree Spinning Animation */}
        <div 
          id="corporate-logo" 
          onClick={() => handleNavClick("hero-section")} 
          className="flex items-center space-x-3 cursor-pointer group shrink-0"
          title="AmeriChem Home & Overview"
        >
          <div className={`w-10 h-10 bg-blue-900 flex items-center justify-center rounded shadow-sm group-hover:bg-blue-800 transition-all shrink-0 ${isLoading ? "animate-logo-spin ring-2 ring-blue-500 ring-offset-2" : ""}`}>
            <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-slate-100 ${isLoading ? "animate-spin" : ""}`}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5c-.83 0-1.5-.67-1.5-1.5 0-1.16 1.5-3 1.5-3s1.5 1.84 1.5 3c0 .83-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h1 className="text-xl font-bold tracking-tight text-blue-950 leading-none">
                AmeriChem
              </h1>
              {isLoading && (
                <span className="text-[9px] font-mono text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 uppercase animate-pulse">
                  Syncing
                </span>
              )}
            </div>
            <p className="text-[10.5px] font-medium text-slate-500 tracking-wide leading-none mt-1">
              Supply Co. • Jersey City
            </p>
          </div>
        </div>

        {/* Center: Consolidated Dropdown Navigation with Smooth Modern Typography */}
        <nav id="desktop-links" className="hidden lg:flex flex-1 justify-center items-center space-x-1 xl:space-x-3 px-4">
          {navStructure.map((nav) => {
            if (nav.type === "link") {
              return (
                <button
                  key={nav.target}
                  onClick={() => handleNavClick(nav.target)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all duration-150 cursor-pointer rounded-md ${
                    nav.isActive 
                      ? "text-blue-900 bg-blue-50/70 font-semibold shadow-xs" 
                      : "text-slate-650 hover:text-blue-900 hover:bg-slate-50"
                  }`}
                >
                  {nav.label}
                </button>
              );
            }

            const isOpen = openDropdown === nav.id;

            return (
              <div
                key={nav.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(nav.id)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Dropdown Trigger Button */}
                <button
                  onClick={() => {
                    handleNavClick(nav.mainTarget);
                  }}
                  className={`px-3.5 py-2 text-sm font-medium transition-all duration-150 cursor-pointer rounded-md flex items-center space-x-1.5 ${
                    nav.isActive 
                      ? "text-blue-900 bg-blue-50/70 font-semibold shadow-xs" 
                      : "text-slate-650 hover:text-blue-900 hover:bg-slate-50"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{nav.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-900" : "text-slate-400 group-hover:text-blue-900"}`} />
                </button>

                {/* Floating Dropdown Menu */}
                {isOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-72 bg-white rounded-lg shadow-xl border border-slate-200/80 p-2 z-50 animate-fadeInView"
                    style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.08))" }}
                  >
                    {/* Arrow pointer indicator */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-200/80 transform rotate-45"></div>

                    <div className="relative z-10 space-y-1">
                      {nav.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.target}
                            onClick={() => handleNavClick(item.target)}
                            className={`w-full text-left p-2.5 rounded-md transition-all flex items-start space-x-3 group/item cursor-pointer ${
                              item.isActive 
                                ? "bg-blue-50/80 text-blue-900" 
                                : "hover:bg-slate-50 text-slate-700 hover:text-blue-900"
                            }`}
                          >
                            <div className={`p-2 rounded-md shrink-0 transition-colors mt-0.5 ${
                              item.isActive 
                                ? "bg-blue-900 text-white" 
                                : "bg-slate-100 text-slate-600 group-hover/item:bg-blue-900 group-hover/item:text-white"
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className={`text-xs font-semibold leading-snug ${
                                item.isActive ? "text-blue-950 font-bold" : "text-slate-800 group-hover/item:text-blue-900"
                              }`}>
                                {item.label}
                              </p>
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5 font-normal">
                                {item.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Quote Actions */}
        <div id="header-actions" className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Quote Basket Button */}
          <button
            id="quote-basket-trigger"
            onClick={onOpenCart}
            className="relative px-3 sm:px-3.5 py-2 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-250 transition-all flex items-center space-x-1.5 sm:space-x-2 text-slate-700 font-medium cursor-pointer group hover:border-slate-350"
            title="View Quote Inquiry Basket"
          >
            <ShoppingCart className="w-4 h-4 text-blue-900 group-hover:scale-105 transition-transform" />
            <span className="text-xs font-medium hidden md:inline">Quote Basket</span>
            {totalCartItems > 0 ? (
              <span className="bg-blue-900 text-white font-mono font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2">
                {totalCartItems}
              </span>
            ) : (
              <span className="bg-slate-200 text-slate-600 font-mono text-[9px] px-1.5 py-0.5 rounded">
                0
              </span>
            )}
          </button>

          {/* Primary Action: Request a Quote */}
          <button
            id="header-quote-cta"
            onClick={() => handleNavClick("quote-section")}
            className="hidden sm:flex bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold py-2.5 px-4 sm:px-4.5 rounded-md transition-all items-center space-x-1.5 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Icon Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-650 hover:text-blue-900 hover:bg-slate-100 rounded-md border border-slate-250 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popdown Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-4 animate-fadeInView shadow-xl">
          {/* Quick Info contacts */}
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-150 text-xs text-slate-500">
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">PLANT OFFICE</p>
              <a href="tel:2016850542" className="flex items-center space-x-1 text-slate-700 hover:text-blue-900 pt-0.5">
                <Phone className="w-3 h-3 text-blue-900" />
                <span className="font-mono font-medium">(201) 685-0542</span>
              </a>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">B2B SALES</p>
              <a href="mailto:jmeza@exoboll.com" className="flex items-center space-x-1 text-slate-700 hover:text-blue-900 pt-0.5">
                <Mail className="w-3 h-3 text-blue-900" />
                <span className="truncate font-medium">jmeza@exoboll.com</span>
              </a>
            </div>
          </div>

          {/* Links with expandable dropdown groups */}
          <div className="flex flex-col space-y-1">
            {navStructure.map((nav) => {
              if (nav.type === "link") {
                return (
                  <button
                    key={nav.target}
                    onClick={() => handleNavClick(nav.target)}
                    className={`text-left w-full px-3.5 py-2.5 rounded-md font-medium text-sm transition-all flex items-center justify-between cursor-pointer ${
                      nav.isActive 
                        ? "bg-blue-50 text-blue-900 font-semibold" 
                        : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{nav.label}</span>
                    {nav.isActive && <span className="text-[10px] font-mono text-blue-900 bg-blue-100/70 px-2 py-0.5 rounded font-semibold">ACTIVE</span>}
                  </button>
                );
              }

              const isExpanded = mobileExpandedGroup === nav.id;

              return (
                <div key={nav.id} className="border-b border-slate-100 pb-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick(nav.mainTarget)}
                      className={`text-left flex-1 px-3.5 py-2.5 rounded-md font-medium text-sm transition-all cursor-pointer ${
                        nav.isActive 
                          ? "text-blue-900 font-semibold" 
                          : "text-slate-700 hover:text-blue-900"
                      }`}
                    >
                      {nav.label}
                    </button>
                    <button
                      onClick={() => setMobileExpandedGroup(isExpanded ? null : nav.id)}
                      className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                      aria-label={`Expand ${nav.label} options`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-blue-900" : ""}`} />
                    </button>
                  </div>

                  {/* Sub-items in mobile menu */}
                  {isExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-md mb-1 animate-fadeInView">
                      {nav.items.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <button
                            key={subItem.target}
                            onClick={() => handleNavClick(subItem.target)}
                            className={`w-full text-left p-2 rounded flex items-center space-x-2.5 text-xs transition-all cursor-pointer ${
                              subItem.isActive 
                                ? "bg-white text-blue-900 font-semibold shadow-2xs" 
                                : "text-slate-650 hover:text-blue-900 hover:bg-white/80"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                            <div className="min-w-0">
                              <p className="font-medium">{subItem.label}</p>
                              <p className="text-[10px] text-slate-400 font-normal truncate">{subItem.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("quote-section")}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white text-center py-2.5 rounded-md font-medium text-xs shadow-xs"
            >
              Request a B2B Quote
            </button>
            <button
              onClick={() => handleNavClick("private-label")}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-center py-2.5 rounded-md font-medium text-xs border border-slate-200"
            >
              Private Label Program
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
