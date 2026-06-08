import React, { useState } from "react";
import { FileText, Search, Download, Check, AlertCircle, RefreshCw, Send, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SDSDocument } from "../types";
import { SDS_LIBRARY } from "../data";

export default function SDSSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  // Form states
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [docTypes, setDocTypes] = useState<string[]>(["Safety Data Sheets (SDS)"]);
  const [additionalMessage, setAdditionalMessage] = useState("");

  // Download simulation states
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [unlockedDocId, setUnlockedDocId] = useState<string | null>(null);

  // Form submission success trigger
  const [formSubmitted, setFormSubmitted] = useState(false);

  const availableDocTypes = [
    "Safety Data Sheets (SDS)",
    "Product Specifications",
    "Certificates of Analysis (COA)",
    "Technical Data Sheets",
    "Compliance Documentation"
  ];

  const handleDocTypeToggle = (type: string) => {
    if (docTypes.includes(type)) {
      setDocTypes(docTypes.filter(t => t !== type));
    } else {
      setDocTypes([...docTypes, type]);
    }
  };

  const handleDownloadTrigger = (doc: SDSDocument) => {
    setDownloadingId(doc.id);
    setProgress(15);
    setUnlockedDocId(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingId(null);
            setUnlockedDocId(doc.id);
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName) return;

    setFormSubmitted(true);
    setTimeout(() => {
      // Clear form states
      setCompanyName("");
      setContactName("");
      setAdditionalMessage("");
    }, 200);
  };

  // Filter logic
  const filteredDocs = SDS_LIBRARY.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === "All" || doc.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="sds-section" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 z-0 opacity-15 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase py-1.5 px-4 bg-slate-800 border-2 border-slate-705 rounded-none inline-block">
            REGULATORY SAFETY DATABASES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white uppercase col-span-1 border-b border-transparent">
            GHS Safety Sheets & Technical Downloads
          </h2>
          <p className="text-slate-400 font-light text-base leading-relaxed">
            Acquire immediate digital copies of vital Safety Data Sheets (SDS), Technical Data Sheets (TDS), and ISO-compliant Certificates of Analysis (COA) for your custodial safety books.
          </p>
        </div>

        {/* Dual Grid Layout: Left searchable SDS index, Right custom documentation request form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Searchable Document Bank Panel (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 bg-slate-950 border-2 border-slate-800 p-6 sm:p-8 rounded-none shadow-2xl space-y-6">
            <h3 className="font-display font-black text-base text-white flex items-center justify-between border-b-2 border-slate-800 pb-3 uppercase">
              <span>Dynamic GHS SDS Search Engine</span>
              <span className="text-[10px] text-slate-500 font-mono">AUTOMATED SYNCED DB</span>
            </h3>

            {/* Filter tags & Search input */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Input formulation title or chemical code (e.g. AC-88)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 border-2 border-slate-800 rounded-none pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-900 font-mono"
                />
              </div>

              {/* Categorical tag selectors */}
              <div className="flex flex-wrap gap-2 text-xs">
                {["All", "Degreaser", "Glass Cleaner", "Disinfectant"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-none border-2 font-mono transition-all cursor-pointer ${
                      filterCategory === cat 
                        ? "bg-blue-900 border-blue-900 font-bold" 
                        : "bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-400"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Document list render */}
            <div id="filtered-docs-list" className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc) => {
                  const isSimulatedDl = downloadingId === doc.id;
                  const isUnlocked = unlockedDocId === doc.id;

                  return (
                    <div 
                      key={doc.id}
                      className="bg-slate-950 border-2 border-slate-800 hover:border-blue-900 p-4 rounded-none flex items-center justify-between transition-all"
                    >
                      <div className="flex items-start space-x-3 min-w-0">
                        <div className="p-2 bg-slate-900 border border-slate-800 text-emerald-400 rounded-none">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-mono font-bold text-slate-500 select-all block uppercase">
                            {doc.code}
                          </p>
                          <p className="text-xs font-bold text-slate-200 truncate mt-0.5">
                            {doc.name}
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                            Last Revised: {doc.lastUpdated}
                          </p>
                        </div>
                      </div>

                      {/* Download controls */}
                      <div>
                        {isSimulatedDl ? (
                          <div className="w-24 flex flex-col items-end space-y-1">
                            <span className="text-[9px] font-mono text-blue-400 animate-pulse uppercase tracking-wider flex items-center">
                              <RefreshCw className="w-2.5 h-2.5 mr-1 animate-spin" /> Packaging...
                            </span>
                            <div className="w-full bg-slate-950 h-1.5 border border-slate-850 rounded-none overflow-hidden">
                              <div className="bg-blue-900 h-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
                            </div>
                          </div>
                        ) : isUnlocked ? (
                          <a 
                            href="#download-mock-doc" 
                            onClick={(e) => { e.preventDefault(); alert("Mock download activated: Clean Safety Sheet file has been successfully stored to your local computer's downloads partition."); }} 
                            className="bg-blue-900 text-slate-50 text-xs px-3.5 py-1.5 rounded-none font-mono font-bold uppercase tracking-wider hover:bg-blue-800 flex items-center space-x-1"
                          >
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Unlock File</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => handleDownloadTrigger(doc)}
                            className="p-2.5 bg-slate-900 border-2 border-slate-800 hover:bg-slate-850 rounded-none text-slate-350 hover:text-white transition-all cursor-pointer"
                            title="Acquire Safety Data Sheets"
                          >
                            <Download className="w-4 h-4 text-blue-450" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-slate-905 border border-slate-850 rounded-2xl">
                  <AlertCircle className="w-8 h-8 text-slate-550 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-400">No matching GHS files located</p>
                  <p className="text-xs text-slate-500 mt-1">Refine your catalog keywords or request direct compilation on the right side.</p>
                </div>
              )}
            </div>

            <p className="text-[10px] text-slate-500 font-mono tracking-wide leading-relaxed">
              * The AmeriChem safety database is dynamically audited against GHS Rev.10 criteria, OSHA Hazard Communication standard rule, and individual state level pesticide ingredient disclosures.
            </p>
          </div>

          {/* Document request B2B compliance form Panel (Takes 5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border-2 border-slate-800 p-6 sm:p-8 rounded-none shadow-2xl relative">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-none flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-black text-base text-white uppercase">GHS Safety Packet Compiled</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Your dynamic regulatory request has been processed successfully. An email containing secure download access keys has been dispatched directly to:
                  </p>
                  <p className="font-mono text-sm text-blue-400 font-bold underline select-all">{email}</p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 border-2 border-slate-700 hover:border-slate-600 bg-slate-900 text-xs font-mono font-bold text-slate-300 uppercase transition-all cursor-pointer rounded-none"
                >
                  Request Additional Sheets
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-5" id="sds-request-form">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-blue-450 font-bold uppercase">
                    B2B CHEMICAL LOGS REGISTER
                  </span>
                  <h3 className="font-display font-black text-base text-white mt-1 uppercase">
                    Request Specialized Chemical Proofs
                  </h3>
                  <p className="text-slate-400 text-xs font-light mt-1">
                    Select your exact requested documents and security criteria.
                  </p>
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="compName" className="block text-[10.5px] font-mono text-slate-400 uppercase font-bold">
                    Company Registered Title *
                  </label>
                  <input
                    id="compName"
                    type="text"
                    required
                    placeholder="e.g. Northeast Bio-Safe Labs"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 border-2 border-slate-805 rounded-none py-2 px-3 text-xs focus:outline-none focus:border-blue-900 font-mono"
                  />
                </div>

                {/* Contact name */}
                <div className="space-y-1.5">
                  <label htmlFor="contName" className="block text-[10.5px] font-mono text-slate-400 uppercase font-bold">
                    Safety Inspector / Contact *
                  </label>
                  <input
                    id="contName"
                    type="text"
                    required
                    placeholder="e.g. Inspector Miller"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 border-2 border-slate-805 rounded-none py-2 px-3 text-xs focus:outline-none focus:border-blue-900 font-mono"
                  />
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label htmlFor="contEmail" className="block text-[10.5px] font-mono text-slate-400 uppercase font-bold">
                    Recipient Corporate Email *
                  </label>
                  <input
                    id="contEmail"
                    type="email"
                    required
                    placeholder="e.g. safety@clinicalalliance.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 border-2 border-slate-805 rounded-none py-2 px-3 text-xs focus:outline-none focus:border-blue-900 font-mono"
                  />
                </div>

                {/* Checklist of required files */}
                <div className="space-y-2">
                  <label className="block text-[10.5px] font-mono text-slate-400 uppercase font-bold">
                    Select Documentation Types
                  </label>
                  <div className="space-y-2">
                    {availableDocTypes.map((type) => {
                      const active = docTypes.includes(type);
                      return (
                        <div 
                          key={type}
                          onClick={() => handleDocTypeToggle(type)}
                          className={`p-2.5 rounded-none border-2 text-xs flex items-center justify-between cursor-pointer transition-all ${
                            active 
                              ? "bg-slate-900 border-blue-900 text-white font-bold" 
                              : "bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-900"
                          }`}
                        >
                          <span className="font-bold">{type}</span>
                          <div className={`w-4 h-4 rounded-none border-2 flex items-center justify-center ${active ? "bg-blue-900 border-blue-900 text-white" : "border-slate-800"}`}>
                            {active && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Extra Message */}
                <div className="space-y-1.5">
                  <label htmlFor="docMessage" className="block text-[10.5px] font-mono text-slate-400 uppercase font-bold">
                    Additional compliance specifics
                  </label>
                  <textarea
                    id="docMessage"
                    rows={2}
                    placeholder="e.g. Specify if seeking EPA registration copies or batch numbers"
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 border-2 border-slate-805 rounded-none py-2 px-3 text-xs focus:outline-none focus:border-blue-900 font-mono resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-mono font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer border-2 border-transparent shadow-md"
                >
                  <Send className="w-3.5 h-3.5 mr-1" />
                  <span>Request Compiled Packet</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
