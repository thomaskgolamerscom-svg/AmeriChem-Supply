export interface Product {
  id: string;
  name: string;
  chemicalCode: string;
  description: string;
  tagline: string;
  color: string; // Tailwind tint for the liquid in the mockup
  bubbleColor: string; // Tailwind color for the bubble accents
  phLevel: number;
  dilutionRatio: string;
  scent: string;
  safetyRating: string; // Health, Flammability, Reactivity (e.g., 2-0-0)
  sizes: {
    label: string;
    volume: string;
    type: string;
    priceEstimationScale: string; // e.g. "Commercial Grade Bulk", "Standard"
  }[];
  specifications: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  recommendedProducts: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Private Label" | "Compliance & Shipping";
}

export interface SDSDocument {
  id: string;
  code: string;
  name: string;
  category: "Degreaser" | "Glass Cleaner" | "Disinfectant" | "Specialty";
  sdsUrl: string;
  specSheetUrl: string;
  coaUrl: string;
  lastUpdated: string;
}

export interface QuoteCartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface QuoteInquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productInterest: string;
  monthlyVolume: string;
  message: string;
  items?: QuoteCartItem[];
}

export interface PrivateLabelConfig {
  companyName: string;
  brandName: string;
  bottleColor: string;
  accentColor: string;
  bottleSize: string;
  liquidColor: string;
  uploadedLogoText: string;
  productType: string;
}
