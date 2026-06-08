import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 grid-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-700 font-mono text-xs font-bold tracking-widest uppercase py-1 px-3 bg-blue-50 border border-blue-100 rounded-full">
            EAST COAST LOGISTICS HEADQUARTERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900">
            AmeriChem Plant Location & Contact Hub
          </h2>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Our main mixing facility and logistics silos are strategically set up in Jersey City, NJ, ensuring immediate commercial access to deep ports, freight railways, and major express routes.
          </p>
        </div>

        {/* Dual Grid block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Key Contact Numbers & Operational Info (Takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl text-slate-900">
                Direct Communication Triggers
              </h3>

              {/* Phone Card */}
              <a 
                href="tel:2016850542" 
                className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="p-3 bg-blue-55 text-blue-600 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">PLANT PHONE LINE</p>
                  <p className="text-lg font-mono font-bold text-slate-850 mt-0.5">(201) 685-0542</p>
                  <p className="text-xs text-slate-500 mt-1">Direct channel for bulk container quote reviews and FTL transport dispatch.</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:jmeza@exoboll.com" 
                className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="p-3 bg-blue-55 text-blue-600 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">CORPORATE ACCOUNT DESK</p>
                  <p className="text-base font-mono font-bold text-slate-850 mt-0.5 truncate">jmeza@exoboll.com</p>
                  <p className="text-xs text-slate-500 mt-1">General regulatory submissions, private label logos, and SDS file packets.</p>
                </div>
              </a>

              {/* Address Card */}
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start space-x-4 shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-blue-55 text-blue-600 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">blending plant site</p>
                  <p className="text-sm font-semibold text-slate-850 mt-0.5">678 Mont St, Jersey City, New Jersey</p>
                  <p className="text-xs text-slate-500 mt-1">Strategically matches Northeast transportation quadrants for LTL deliveries.</p>
                </div>
              </div>
            </div>

            {/* Operational status hours block */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center space-x-2.5 text-blue-400">
                <Clock className="w-4.5 h-4.5" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                  Manufacturing Shift Schedule
                </span>
              </div>
              
              <div className="space-y-2 text-xs font-light text-slate-350">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Blending floor (Monday–Friday):</span>
                  <span className="font-mono text-white">07:00 AM – 06:00 PM EST</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Pallet Logistics & Loading Docks:</span>
                  <span className="font-mono text-white">08:00 AM – 04:00 PM EST</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Site Office (Saturday–Sunday):</span>
                  <span className="font-mono uppercase text-[10px]">Closed for QC sterilizing</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Form placeholder (Takes 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-watermark font-black text-8xl font-mono pointer-events-none select-none">
              FORM
            </div>

            <div className="space-y-4 mb-6">
              <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-widest">
                AUTOMATED SECURE PORTAL
              </span>
              <h3 className="font-display font-extrabold text-lg text-slate-900">
                Inquiry Dispatch Terminal (Google Form Integrated)
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                We embed standard, encrypted corporate Google Form systems to securely record vendor requests without client data leakage. Use the placeholder register inside this workspace to secure immediate contact.
              </p>
            </div>

            {/* A beautiful visual representations of a Google Form in a modern, pristine digital template wrapper */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 font-mono text-xs space-y-4 text-slate-400 relative">
              
              {/* Form header block */}
              <div className="flex items-center justify-between border-b border-slate-850 pb-3 text-[10px] font-bold text-slate-500">
                <span>CLIENT GATEWAY v2.8.2</span>
                <span className="text-indigo-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse mr-1"></span> SSL ACTIVE
                </span>
              </div>

              {/* Display visual simulated form fields */}
              <div className="space-y-3.5">
                <div>
                  <p className="text-[10px] text-slate-550 font-bold">1. PRIMARY B2B SERVICE REQUISITION</p>
                  <p className="text-slate-300 mt-1 select-all font-sans font-medium text-xs">Requesting wholesale logistics routing & private label assistance.</p>
                </div>

                <div>
                  <p className="text-[10px] text-slate-550 font-bold">2. DEPLOYMENT TIMEFRAME INDICATOR</p>
                  <div className="flex space-x-2 mt-1">
                    <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-0.5 rounded text-indigo-300 font-bold">REGIONAL FREIGHT</span>
                    <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-0.5 rounded text-slate-500">STANDARD INVENTORY</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-slate-550 font-bold">3. ENCRYPTED GOOGLE FORM LINKED SCHEMA</p>
                  <p className="text-xs text-slate-450 mt-1 select-all font-sans font-light">
                    Your contact coordinates will immediately populate our local New Jersey CRM data sheets to assign a dedicated account partner within 15 minutes.
                  </p>
                </div>
              </div>

              {/* Secure link redirection indicator button */}
              <div className="pt-4 border-t border-slate-850">
                <a 
                  href="#activate-form-redirect" 
                  onClick={(e) => { e.preventDefault(); alert("Redirecting secure G-Suite database... AmeriChem client accounts synced successfully."); }}
                  className="w-full bg-indigo-700 hover:bg-indigo-600 text-white font-mono text-center font-bold uppercase tracking-wider py-3 rounded-lg flex items-center justify-center space-x-2 cursor-pointer transition-all"
                >
                  <span>Launch Google Form Integration</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            <div className="mt-6 flex items-center space-x-2 text-[11px] text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Accounts synced on: 2026-06-08 12:45 UTC</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
