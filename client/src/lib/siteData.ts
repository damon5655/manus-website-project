/*
Design philosophy for this file: Warm & Trustworthy Local Service.
Content should sound approachable, reliable, and locally grounded in Abington / Greater Boston.
Brand colors: #79abdc (sky blue), #5dab3b (fresh green)
*/
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Droplets,
  Home,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Stars,
  Users,
  Truck,
  Hammer,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  idealFor: string[];
  icon: LucideIcon;
};

export const brand = {
  name: "AG Best Cleaning",
  legalName: "AG Best Cleaning Services",
  phoneDisplay: "(781) 824-0404",
  phoneHref: "tel:+17818240404",
  email: "contact@agbestcleaning.com",
  address: "Abington, MA",
  serviceArea: "Abington, Boston, and Greater Boston Area",
  heroImage:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
  servicesImage:
    "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1200&q=80",
  teamImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  contactImage:
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustStats = [
  { value: "6+", label: "Years of trusted cleaning experience in Greater Boston" },
  { value: "Mon–Sat", label: "Available 8am–6pm for flexible scheduling" },
  { value: "100%", label: "Satisfaction-focused service on every visit" },
  { value: "Free", label: "Instant estimate — no commitment required" },
];

export const differentiators = [
  {
    title: "Personal, owner-led service",
    description:
      "Aninha and her team personally oversee every job, ensuring consistent quality and a cleaning experience that feels genuinely cared for.",
    icon: Users,
  },
  {
    title: "Flexible scheduling around you",
    description:
      "We work around your schedule — mornings, evenings, or weekends — so your home or office is clean without disrupting your day.",
    icon: Clock3,
  },
  {
    title: "Abington & Greater Boston coverage",
    description:
      "Locally based and community-focused, we serve Abington and the surrounding Greater Boston area with fast response and reliable follow-through.",
    icon: MapPin,
  },
];

export const services: ServiceItem[] = [
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    short: "A thorough top-to-bottom clean for homes and spaces that need a fresh, detailed reset.",
    description:
      "Our deep cleaning service goes beyond the surface — scrubbing baseboards, cleaning inside appliances, tackling built-up grime, and leaving every corner of your space genuinely spotless. Perfect for first-time clients, seasonal resets, or any space that needs extra attention.",
    bullets: [
      "Inside oven and refrigerator cleaning",
      "Baseboard, door frame, and window sill detailing",
      "Cabinet interior and exterior wipe-down",
      "Bathroom deep scrub including grout and fixtures",
      "Bedroom and living area thorough dusting and vacuuming",
      "Kitchen appliance and countertop sanitizing",
    ],
    idealFor: ["First-time clients", "Seasonal deep cleans", "Pre-sale home preparation", "Post-party or event cleanup"],
    icon: Sparkles,
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    short: "Professional cleaning for offices, retail spaces, and business environments.",
    description:
      "We keep your business looking its best with reliable, scheduled commercial cleaning tailored to your space and hours. From small offices to multi-room commercial suites, our team delivers consistent results that reflect well on your brand.",
    bullets: [
      "Office desk, surface, and touchpoint disinfection",
      "Restroom sanitizing and restocking",
      "Trash removal and liner replacement",
      "Lobby, reception, and common area cleaning",
      "Breakroom and kitchen cleaning",
      "Floor vacuuming, mopping, and spot treatment",
    ],
    idealFor: ["Small and mid-size offices", "Retail and storefront spaces", "Medical and professional suites", "Property management clients"],
    icon: Building2,
  },
  {
    slug: "move-in-move-out",
    name: "Move-In / Move-Out Cleaning",
    short: "Leave your old place spotless or start fresh in your new home.",
    description:
      "Moving is stressful enough — let us handle the cleaning. Our move-in/move-out service ensures every surface is cleaned, every cabinet is wiped, and every room is ready for handover or move-in.",
    bullets: [
      "Full kitchen and bathroom deep clean",
      "Inside all cabinets and closets",
      "Walls, baseboards, and light fixtures",
      "All floors vacuumed and mopped",
      "Window sills and tracks cleaned",
      "Appliances cleaned inside and out",
    ],
    idealFor: ["Tenants moving out", "New homeowners moving in", "Landlords between tenants", "Real estate agents and property managers"],
    icon: Truck,
  },
  {
    slug: "post-construction",
    name: "Post-Construction Cleaning",
    short: "Remove dust, debris, and construction residue after renovation or new builds.",
    description:
      "Construction leaves behind more than just a finished space — dust settles everywhere, debris accumulates, and surfaces need careful attention before occupancy. Our post-construction cleaning team handles the full cleanup so your space is move-in ready.",
    bullets: [
      "Construction dust removal from all surfaces",
      "Window and glass detailing",
      "Floor cleaning and debris removal",
      "Vent and fixture wipe-down",
      "Cabinet and countertop cleaning",
      "Final walkthrough quality check",
    ],
    idealFor: ["New construction handovers", "Home renovation projects", "Commercial build-outs", "Contractor and developer clients"],
    icon: Hammer,
  },
  {
    slug: "residential-cleaning",
    name: "Residential Cleaning",
    short: "Regular home cleaning that keeps your space consistently fresh and welcoming.",
    description:
      "Our residential cleaning service is designed for busy households that want a clean home without the effort. Whether weekly, bi-weekly, or monthly, we show up on time, follow your preferences, and leave your home smelling fresh and looking great.",
    bullets: [
      "Kitchen cleaning including counters, sink, and appliance exteriors",
      "Bathroom scrubbing and sanitizing",
      "Bedroom dusting, vacuuming, and bed-making",
      "Living area tidying and surface cleaning",
      "Floor vacuuming and mopping throughout",
      "Trash removal and light organizing",
    ],
    idealFor: ["Busy families and professionals", "Weekly or bi-weekly maintenance", "Elderly or mobility-limited clients", "Vacation rental hosts"],
    icon: Home,
  },
];

export const summaryHighlights = [
  { label: "Abington-based team", icon: MapPin },
  { label: "Owner-supervised cleaning", icon: BadgeCheck },
  { label: "Flexible scheduling available", icon: Clock3 },
  { label: "Eco-friendly products on request", icon: Droplets },
];

export const industries = [
  "Private homes and condos",
  "Small and mid-size offices",
  "Medical and professional suites",
  "Retail and storefront spaces",
  "Vacation and short-term rentals",
  "Post-construction and renovation sites",
];

export const testimonials = [
  {
    quote:
      "Dependable, extremely reasonable and speedy! It is always great to walk into a fresh smelling clean home.",
    name: "Sarah M.",
    role: "Residential client, Abington",
  },
  {
    quote:
      "The AG Best Cleaning Services personnel are professional, friendly, flexible and care about their clients. I recommend AG Best Cleaning without hesitation.",
    name: "James T.",
    role: "Regular client, Greater Boston",
  },
  {
    quote:
      "Anna and her team did a wonderful, amazing job with my apartment. I'd recommend them to anyone looking for a reliable, thorough cleaning service.",
    name: "Rachel K.",
    role: "Move-out cleaning client",
  },
  {
    quote:
      "We've been using Aninha and her team for over a year. They're always on time, thorough, and genuinely care about doing a great job.",
    name: "David L.",
    role: "Recurring home cleaning client",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Get your free estimate",
    text: "Tell us about your space, service type, and preferred schedule. We'll give you a clear, no-obligation estimate — usually within 24 hours.",
  },
  {
    step: "02",
    title: "We build your cleaning plan",
    text: "We tailor the scope, frequency, and timing around your home or business — no cookie-cutter packages, just a plan that fits your needs.",
  },
  {
    step: "03",
    title: "Sit back and enjoy a clean space",
    text: "Our team arrives on time, follows your checklist, and leaves your space spotless. We follow up to make sure you're completely satisfied.",
  },
];

export const aboutPillars = [
  {
    title: "Consistency you can count on",
    description:
      "We show up when we say we will, clean the way we promised, and follow up to make sure every visit meets your expectations.",
    icon: Stars,
  },
  {
    title: "Clear, friendly communication",
    description:
      "You always know who's coming, what's being cleaned, and how to reach us. No guesswork, no surprises — just reliable service.",
    icon: Mail,
  },
  {
    title: "A team that genuinely cares",
    description:
      "Aninha built AG Best Cleaning on a simple belief: treat every client's home or business like your own. That standard drives everything we do.",
    icon: Users,
  },
];

export const contactDetails = [
  {
    title: "Call us anytime",
    value: brand.phoneDisplay,
    href: brand.phoneHref,
    icon: Phone,
  },
  {
    title: "Send us an email",
    value: brand.email,
    href: `mailto:${brand.email}`,
    icon: Mail,
  },
  {
    title: "Service area",
    value: brand.serviceArea,
    href: "#service-area",
    icon: MapPin,
  },
];

export const footerLinks = [
  {
    title: "Explore",
    items: navItems,
  },
  {
    title: "Our services",
    items: services.slice(0, 4).map((service) => ({
      label: service.name,
      href: `/services#${service.slug}`,
    })),
  },
  {
    title: "Contact",
    items: [
      { label: brand.phoneDisplay, href: brand.phoneHref },
      { label: brand.email, href: `mailto:${brand.email}` },
      { label: brand.address, href: "https://maps.google.com/?q=Abington+MA" },
    ],
  },
];

export const primaryCTA = {
  label: "Get a free estimate",
  href: "/contact",
  icon: ArrowRight,
};

export const secondaryCTA = {
  label: "Call us now",
  href: brand.phoneHref,
};

export const serviceComparison = [
  {
    segment: "Residential cleaning",
    frequency: "Weekly / bi-weekly",
    focus: "Kitchens, bathrooms, bedrooms, living areas",
  },
  {
    segment: "Deep cleaning",
    frequency: "One-time or seasonal",
    focus: "Inside appliances, baseboards, cabinets, full reset",
  },
  {
    segment: "Commercial cleaning",
    frequency: "Daily / weekly",
    focus: "Offices, restrooms, common areas, floors",
  },
  {
    segment: "Move-in / move-out",
    frequency: "Project-based",
    focus: "Full property turnover, cabinets, appliances, floors",
  },
];

export const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — we provide free, no-obligation estimates for all services. You can request one online or call us directly at (781) 824-0404.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Abington, MA and serve the Greater Boston area including surrounding towns. Contact us to confirm availability in your location.",
  },
  {
    question: "Can I customize what gets cleaned?",
    answer:
      "Absolutely. We build a cleaning plan around your specific needs, preferences, and schedule — whether it's a recurring service or a one-time deep clean.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes, we bring all necessary cleaning supplies and equipment. If you prefer eco-friendly or specific products, just let us know in advance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours notice for cancellations or reschedules. We're flexible and will always work with you to find a time that works.",
  },
];
