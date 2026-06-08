import { Product, Industry, Testimonial, FAQItem, SDSDocument } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "industrial-degreaser",
    name: "Industrial Degreaser",
    chemicalCode: "AC-88-DEGR",
    tagline: "Industrial-Strength Concentrated Grease & Oil Solvent",
    description: "Heavy-duty cleaning solution formulated specifically for stubborn industrial equipment, heavy machinery, production environments, automotive bays, and heavy soil loads.",
    color: "bg-emerald-500/20 text-emerald-600",
    bubbleColor: "bg-emerald-400",
    phLevel: 12.5,
    dilutionRatio: "1:10 to 1:50 (Water)",
    scent: "Light Pine",
    safetyRating: "Health: 2 | Fire: 0 | Reactivity: 0",
    sizes: [
      { label: "24oz Trigger Spray", volume: "24oz", type: "Spray Bottle", priceEstimationScale: "Ready-To-Use (RTU)" },
      { label: "1 Gallon Jug", volume: "1 Gallon", type: "Concentrate Jug", priceEstimationScale: "Commercial Grade bulk dilution" },
      { label: "5 Gallon Pail", volume: "5 Gallon", type: "Industrial Drum", priceEstimationScale: "Heavy Manufacturing Supply" }
    ],
    specifications: [
      "Concentrated formula handles petroleum, grease, grease trap residues, and organic oils.",
      "Biodegradable surfactants, low VOC emission compliance.",
      "Corrosion-inhibiting additives help protect structural alloy steel during application.",
      "Free-rinsing chemical agents accelerate prep-time."
    ]
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    chemicalCode: "AC-42-GLSS",
    tagline: "Streak-Free Professional Glass and Surface Polish",
    description: "Ammonia-free, ultra-pure streak-free professional glass and surface cleaner. Formulated to immediately dissolve residue from windows, mirrors, plexiglass, stainless steel, and display cases.",
    color: "bg-sky-400/20 text-sky-600",
    bubbleColor: "bg-sky-300",
    phLevel: 7.5,
    dilutionRatio: "Ready-To-Use or 1:4 (Concentrate)",
    scent: "Fresh Breeze",
    safetyRating: "Health: 1 | Fire: 0 | Reactivity: 0",
    sizes: [
      { label: "24oz Trigger Spray", volume: "24oz", type: "Spray Bottle", priceEstimationScale: "Ready-To-Use (RTU)" },
      { label: "1 Gallon Jug", volume: "1 Gallon", type: "Concentrate Jug", priceEstimationScale: "Commercial Refill Scale" },
      { label: "5 Gallon Pail", volume: "5 Gallon", type: "Industrial Drum", priceEstimationScale: "Mass Custodial Inventory" }
    ],
    specifications: [
      "Non-streaking quick-evaporation solvents leave surfaces pristine with zero film.",
      "Safely works on architectural windows, auto windshields, high-traffic mirrors, and steel rails.",
      "Formulated with dust-resistant anti-static agents to retard soil build-up.",
      "Eco-approved formula, free from ozone depleters and standard harsh chemical phosphates."
    ]
  },
  {
    id: "disinfectant-cleaner",
    name: "Disinfectant Cleaner",
    chemicalCode: "AC-55-SANI",
    tagline: "EPA-Registered Broad-Spectrum Multi-Surface Disinfectant",
    description: "Commercial-grade viral and bacterial disinfectant designed specifically for high-traffic facilities, clinical care environments, public schools, corporate offices, and athletic hubs.",
    color: "bg-indigo-500/20 text-indigo-600",
    bubbleColor: "bg-indigo-400",
    phLevel: 6.8,
    dilutionRatio: "1:64 to 1:128 (Super Concentrate)",
    scent: "Citrus Herb",
    safetyRating: "Health: 3 | Fire: 0 | Reactivity: 1",
    sizes: [
      { label: "24oz Trigger Spray", volume: "24oz", type: "Spray Bottle", priceEstimationScale: "Ready-To-Use (RTU)" },
      { label: "1 Gallon Jug", volume: "1 Gallon", type: "Concentrate Jug", priceEstimationScale: "High-Volume Dispenser Tank" },
      { label: "5 Gallon Pail", volume: "5 Gallon", type: "Industrial Drum", priceEstimationScale: "Institutional Facility Scale" }
    ],
    specifications: [
      "Broad-spectrum disinfectant kills 99.9% of specified clinical pathogens, viruses, and molds.",
      "Dual quaternary ammonium active ingredient formula is EPA-registered for surface treatment.",
      "Neutral pH profile will not strip protective floor finishes or damage sensitive vinyl polymers.",
      "Cleans, deodorizes, and sanitizes in a single industrial-speed application step."
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "ind-hospitality",
    name: "Hospitality",
    slug: "hospitality",
    description: "Maintain spotless guest chambers, lobby pathways, and laundry suites with consistent quality.",
    challenges: ["High guest feedback sensitivity", "Stubborn linens stains", "Constant restroom turnarounds"],
    recommendedProducts: ["Glass Cleaner", "Disinfectant Cleaner"]
  },
  {
    id: "ind-healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description: "Strict sanitation protocols, medical-grade sanitization, and safety-compliant chemicals.",
    challenges: ["Infectious vector risk", "Harsh medicine stains", "Strict regulatory audits"],
    recommendedProducts: ["Disinfectant Cleaner"]
  },
  {
    id: "ind-education",
    name: "Education",
    slug: "education",
    description: "Child-safe, low-VOC cleaning agents for classroom safety and robust custodial cycles.",
    challenges: ["Diverse high-traffic areas", "Vandalism and ink stains", "Budget efficiency pressures"],
    recommendedProducts: ["Disinfectant Cleaner", "Glass Cleaner"]
  },
  {
    id: "ind-government",
    name: "Government",
    slug: "government",
    description: "EPA-registered, high-grade chemicals procuring government-cleared facilities.",
    challenges: ["Strict procurement rules", "Rigid compliance requirements", "Inter-agency volume delivery"],
    recommendedProducts: ["Disinfectant Cleaner", "Industrial Degreaser", "Glass Cleaner"]
  },
  {
    id: "ind-foodservice",
    name: "Food Service",
    slug: "food-service",
    description: "Restricted non-toxic cleaners, intense grease removers, and sanitization for kitchen structures.",
    challenges: ["Stubborn animal fat lipids", "Strict health code inspections", "Non-contamination imperatives"],
    recommendedProducts: ["Industrial Degreaser", "Disinfectant Cleaner"]
  },
  {
    id: "ind-manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Industrial solvents, extreme degreasers, and safety equipment surface handlers.",
    challenges: ["Heavy carbon grease deposits", "Swarf and machine residues", "Heavy industrial safety rules"],
    recommendedProducts: ["Industrial Degreaser"]
  },
  {
    id: "ind-janitorial",
    name: "Janitorial Services",
    slug: "janitorial-services",
    description: "Concentrated bulk chemicals supporting commercial cleaning service companies efficiently.",
    challenges: ["Labor-cost performance pressure", "Multiple surface compatibility", "Portability & dilution safety"],
    recommendedProducts: ["Glass Cleaner", "Disinfectant Cleaner", "Industrial Degreaser"]
  },
  {
    id: "ind-industrial",
    name: "Industrial Facilities",
    slug: "industrial-facilities",
    description: "Power wash chemicals, heavy equipment cleaners, and shipping warehouse floor sanitizers.",
    challenges: ["Tire skid scuffs", "Uncontrolled thermal environments", "High corrosion risk factors"],
    recommendedProducts: ["Industrial Degreaser", "Disinfectant Cleaner"]
  },
  {
    id: "ind-distribution",
    name: "Distribution Partners",
    slug: "distribution-partners",
    description: "Turnkey white-label solutions, volume pricing, and dependable East Coast logistics supply chains.",
    challenges: ["Fulfillment container turnaround", "Margin preservation", "Consistency of certification audits"],
    recommendedProducts: ["Industrial Degreaser", "Glass Cleaner", "Disinfectant Cleaner"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Switching our corporate accounts to AmeriChem changed our cost-structure dramatically. Their 5-gallon concentrates dilute perfectly, and their EPA-registered disinfectants pass every compliance audit smoothly.",
    author: "Douglas Vance",
    role: "Director of Facilities",
    company: "Apex Janitorial Solutions Inc.",
    location: "Newark, NJ",
    rating: 5
  },
  {
    id: "t2",
    quote: "AmeriChem's Private Label Program made launching our unique restaurant sanitizer product effortless. They guided us through label compliance, custom tinting, and national freight arrangements seamlessly.",
    author: "Elena Rostova",
    role: "VP of Supply Chain",
    company: "Metro Hospitality Group",
    location: "New York, NY",
    rating: 5
  },
  {
    id: "t3",
    quote: "As a local distributor in the Tri-State area, having a responsive partner based right in Jersey City is invaluable. We get immediate delivery when stock runs low, and SDS documentation is always ready instantly.",
    author: "Marcus Thompson",
    role: "Managing Partner",
    company: "Atlantic General Custodial Supplies",
    location: "Jersey City, NJ",
    rating: 5
  },
  {
    id: "t4",
    quote: "We manage over 40 medical clinics. Hygiene is non-negotiable. AmeriChem's Broad-Spectrum Disinfectant performs consistently, has a pleasant scent, and gives our sanitizing staff absolute confidence.",
    author: "Dr. Sarah Lindon",
    role: "Chief Compliance Officer",
    company: "CareFirst Clinical Network",
    location: "Philadelphia, PA",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Private Label",
    question: "Do you offer private label services?",
    answer: "Yes, AmeriChem Supply Co. is a leading private-label manufacturing partner. We help brand owners, distributors, and large janitorial networks package our certified chemicals under their own unique branding. Our program covers custom container choices, high-durability label design, GHS/EPA label review assistance, and small to large production runs."
  },
  {
    category: "Compliance & Shipping",
    question: "What packaging sizes are available?",
    answer: "We supply our professional cleaning chemicals in many formats: 24oz trigger spray bottles (in boxes of 12), 1-gallon concentrate jugs (4 jugs per case), 5-gallon heavy-duty distribution pails, 55-gallon polymer drums, and also 275-gallon intermediate bulk containers (IBC Totes) for enterprise clients."
  },
  {
    category: "Compliance & Shipping",
    question: "Can I request SDS sheets?",
    answer: "Absolutely. Safety is our top priority. Complete Safety Data Sheets (SDS), Technical Data Sheets (TDS), certificates of analysis (COA), and third-party testing parameters are readily downloadable in PDF format on our dedicated documentation page or by filling out our prompt SDS retrieval form."
  },
  {
    category: "General",
    question: "Do you support bulk orders?",
    answer: "Yes. From standard LTL freight pallets up to dedicated full truckloads (FTL) leaving our warehouse in Jersey City, we have the high-capacity blending equipment and storage silos to meet bulk chemical requirements on demand."
  },
  {
    category: "Compliance & Shipping",
    question: "Do you distribute nationwide?",
    answer: "Yes! While our primary logistics supercenter is strategically situated in Jersey City, NJ, serving the immediate Northeast corridor with lightning-fast freight, we partner with nationwide carriers to safely and economically distribute commercial-grade chemicals to all 50 states."
  },
  {
    category: "General",
    question: "Are your chemicals manufactured in the USA?",
    answer: "Yes, 100% of our production occurs locally. From raw ingredient blending to safety labeling and quality-control audits, all AmeriChem liquids are designed, blended, and bottled right here in the United States, adhering strictly to global standards."
  }
];

export const SDS_LIBRARY: SDSDocument[] = [
  {
    id: "sds-degreaser",
    code: "SDS-AC-DEGR-88",
    name: "AmeriChem Industrial Degreaser (Concentrate)",
    category: "Degreaser",
    sdsUrl: "#sds-download",
    specSheetUrl: "#spec-download",
    coaUrl: "#coa-download",
    lastUpdated: "January 2026"
  },
  {
    id: "sds-glass",
    code: "SDS-AC-GLSS-42",
    name: "AmeriChem Streak-Free Glass Cleaner (RTU)",
    category: "Glass Cleaner",
    sdsUrl: "#sds-download",
    specSheetUrl: "#spec-download",
    coaUrl: "#coa-download",
    lastUpdated: "March 2026"
  },
  {
    id: "sds-disinfectant",
    code: "SDS-AC-SANI-55",
    name: "AmeriChem Broad-Spectrum Disinfectant Cleaner",
    category: "Disinfectant",
    sdsUrl: "#sds-download",
    specSheetUrl: "#spec-download",
    coaUrl: "#coa-download",
    lastUpdated: "May 2026"
  },
  {
    id: "sds-degreaser-rtu",
    code: "SDS-AC-DEGR-24",
    name: "AmeriChem Industrial Degreaser 24oz (Ready-To-Use)",
    category: "Degreaser",
    sdsUrl: "#sds-download",
    specSheetUrl: "#spec-download",
    coaUrl: "#coa-download",
    lastUpdated: "January 2026"
  },
  {
    id: "sds-neutral-floor",
    code: "SDS-AC-FLR-10",
    name: "AmeriChem All-Purpose Neutral Floor Restorer",
    category: "Specialty",
    sdsUrl: "#sds-download",
    specSheetUrl: "#spec-download",
    coaUrl: "#coa-download",
    lastUpdated: "February 2026"
  }
];
