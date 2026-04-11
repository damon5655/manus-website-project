/*
Design philosophy for this file: Refined Corporate Modernism.
Content should sound credible, operationally competent, and locally grounded in Boston.
*/
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Building,
  Clock3,
  Droplets,
  Hospital,
  Mail,
  MapPin,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Stars,
  Users,
  Warehouse,
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
  name: "Harbor Shine",
  legalName: "Harbor Shine Commercial Cleaning",
  phoneDisplay: "(617) 555-0148",
  phoneHref: "tel:+16175550148",
  email: "quotes@harborshineclean.com",
  address: "100 Summer Street, Boston, MA 02110",
  serviceArea: "Boston, Cambridge, Somerville, Brookline, Quincy, and Greater Boston",
  heroImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/aoQe6L7QsHM9KQ2U2Tpvg5/boston-clean-hero-01-8eUrLmwRsQrctAWcYkczdd.webp",
  servicesImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/aoQe6L7QsHM9KQ2U2Tpvg5/boston-clean-services-02-Pi6Mjn3RGuCvB445qUdCF2.webp",
  teamImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/aoQe6L7QsHM9KQ2U2Tpvg5/boston-clean-team-03-6AjKE6MCfPyTjH7KsqYnxh.webp",
  contactImage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/aoQe6L7QsHM9KQ2U2Tpvg5/boston-clean-contact-04-XogijycWQGzi6mf6n97kmF.webp",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustStats = [
  { value: "24 hr", label: "Typical response time for quote requests" },
  { value: "99%", label: "Scheduled cleaning completion rate target" },
  { value: "7 days", label: "Flexible service availability for active accounts" },
  { value: "100%", label: "Site-specific quality checklists for each client" },
];

export const differentiators = [
  {
    title: "Dedicated account oversight",
    description:
      "Each client receives a clear communication path, inspection cadence, and escalation protocol to reduce service inconsistency.",
    icon: ShieldCheck,
  },
  {
    title: "Built around facility operations",
    description:
      "We tailor frequencies, staffing windows, and scope by building type, occupant load, and compliance expectations.",
    icon: Building2,
  },
  {
    title: "Boston-focused response coverage",
    description:
      "Teams are positioned for downtown Boston and surrounding submarkets, making after-hours and urgent support easier to coordinate.",
    icon: MapPin,
  },
];

export const services: ServiceItem[] = [
  {
    slug: "office-janitorial",
    name: "Office Janitorial Cleaning",
    short: "Consistent nightly or daytime cleaning for professional offices and shared workspaces.",
    description:
      "Routine janitorial programs designed for corporate offices, multi-tenant suites, and headquarters environments that need reliable daily presentation and reduced operational friction.",
    bullets: [
      "Restroom sanitizing and replenishment",
      "Workstation touchpoint disinfection",
      "Trash removal and liner replacement",
      "Lobby, breakroom, and conference room detailing",
    ],
    idealFor: ["Corporate offices", "Coworking spaces", "Property-managed suites"],
    icon: Building,
  },
  {
    slug: "medical-education",
    name: "Medical & Education Facility Cleaning",
    short: "Protocol-driven cleaning for clinics, schools, and spaces with higher hygiene expectations.",
    description:
      "Specialized cleaning workflows for facilities that need documented procedures, controlled products, and careful attention to high-touch areas and occupant safety.",
    bullets: [
      "High-touch disinfection rounds",
      "Exam room and reception area cleaning",
      "Classroom, corridor, and common-area detailing",
      "Site-specific checklists for regulated spaces",
    ],
    idealFor: ["Medical offices", "Private schools", "Training centers"],
    icon: Hospital,
  },
  {
    slug: "floor-care",
    name: "Commercial Floor Care",
    short: "Hard floor restoration, carpet care, and appearance maintenance for heavily trafficked buildings.",
    description:
      "A floor care program that protects high-traffic surfaces, extends finish life, and keeps public-facing areas polished without disrupting building operations.",
    bullets: [
      "Strip and wax scheduling",
      "Burnishing and machine scrubbing",
      "Carpet extraction and spot treatment",
      "Entry mat and lobby floor appearance plans",
    ],
    idealFor: ["Lobbies", "Schools", "Retail-adjacent commercial properties"],
    icon: SquareStack,
  },
  {
    slug: "post-construction",
    name: "Post-Construction Cleanup",
    short: "Turnover-ready cleaning for renovated offices, tenant fit-outs, and project handoff stages.",
    description:
      "Detailed debris, dust, and residue removal for commercial build-outs and renovation projects so teams can reopen or occupy spaces on schedule.",
    bullets: [
      "Fine dust removal from surfaces and vents",
      "Glass and fixture detailing",
      "Floor cleanup and adhesive residue removal",
      "Final turnover punch-list support",
    ],
    idealFor: ["Tenant improvements", "Office renovations", "Commercial build-outs"],
    icon: Sparkles,
  },
  {
    slug: "day-porter",
    name: "Day Porter & Consumables Support",
    short: "Daytime upkeep that keeps lobbies, restrooms, and common areas guest-ready.",
    description:
      "Ongoing daytime service for buildings that need visible upkeep, rapid resets, and replenishment support while occupants are on site.",
    bullets: [
      "Lobby touch-ups and spill response",
      "Restroom reset and supply refill",
      "Trash monitoring in common areas",
      "Event support and conference turnover",
    ],
    idealFor: ["Mixed-use office buildings", "High-traffic facilities", "Reception-heavy spaces"],
    icon: Users,
  },
  {
    slug: "industrial-support",
    name: "Warehouse & Light Industrial Support",
    short: "Practical cleaning for logistics, back-of-house, and support areas that demand dependable execution.",
    description:
      "Cleaning support for operational environments where dust control, breakroom sanitation, and common-area safety need to be maintained without disrupting workflows.",
    bullets: [
      "Breakroom and restroom sanitation",
      "Dust reduction in support areas",
      "Entry, hallway, and admin office cleaning",
      "Flexible weekend or off-shift scheduling",
    ],
    idealFor: ["Warehouse offices", "Distribution support areas", "Light industrial campuses"],
    icon: Warehouse,
  },
];

export const summaryHighlights = [
  { label: "Boston-focused teams", icon: MapPin },
  { label: "Inspected cleaning programs", icon: BadgeCheck },
  { label: "Flexible after-hours service", icon: Clock3 },
  { label: "Eco-conscious products available", icon: Droplets },
];

export const industries = [
  "Corporate offices",
  "Medical practices",
  "Educational facilities",
  "Multi-tenant office buildings",
  "Property management portfolios",
  "Light industrial support spaces",
];

export const testimonials = [
  {
    quote:
      "Harbor Shine gave us a clear scope, consistent communication, and a visible improvement in our lobby and shared spaces within the first week.",
    name: "Melissa R.",
    role: "Operations Manager, Back Bay law office",
  },
  {
    quote:
      "What stood out was the inspection follow-up. We finally had a cleaning partner who documented issues and corrected them quickly.",
    name: "David L.",
    role: "Property Manager, Downtown Boston office building",
  },
  {
    quote:
      "Their team adapted to our schedule, handled floor care professionally, and kept occupant disruption to a minimum.",
    name: "Anika S.",
    role: "Facilities Coordinator, Cambridge education center",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Walkthrough & scope review",
    text: "We review the building type, occupant patterns, service frequency, and priorities before proposing a plan.",
  },
  {
    step: "02",
    title: "Custom site plan",
    text: "We build a site-specific checklist, communication rhythm, and staffing window around your operating schedule.",
  },
  {
    step: "03",
    title: "Launch with quality checks",
    text: "Service starts with documented inspections, issue tracking, and clear escalation paths to keep standards stable.",
  },
];

export const aboutPillars = [
  {
    title: "Professional consistency",
    description:
      "We are built for organizations that need dependable execution, not one-off cleaning promises.",
    icon: Stars,
  },
  {
    title: "Transparent communication",
    description:
      "Clients know who to contact, how quality is measured, and what happens when priorities shift.",
    icon: Mail,
  },
  {
    title: "People-first staffing",
    description:
      "Screened crews, practical training, and respectful site coordination help us maintain better outcomes over time.",
    icon: Users,
  },
];

export const contactDetails = [
  {
    title: "Call for immediate needs",
    value: brand.phoneDisplay,
    href: brand.phoneHref,
    icon: Phone,
  },
  {
    title: "Email your scope",
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
    title: "Core services",
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
      { label: brand.address, href: "https://maps.google.com/?q=100+Summer+Street+Boston+MA" },
    ],
  },
];

export const primaryCTA = {
  label: "Request a quote",
  href: "/contact",
  icon: ArrowRight,
};

export const secondaryCTA = {
  label: "Call Boston team",
  href: brand.phoneHref,
};

export const serviceComparison = [
  {
    segment: "Routine janitorial",
    frequency: "3–7x weekly",
    focus: "Restrooms, touchpoints, trash, public areas",
  },
  {
    segment: "Day porter",
    frequency: "Business hours",
    focus: "Visible upkeep, restocking, spill response",
  },
  {
    segment: "Floor care",
    frequency: "Monthly / quarterly",
    focus: "Finish preservation, carpet appearance, traction",
  },
  {
    segment: "Post-construction",
    frequency: "Project-based",
    focus: "Dust removal, glass detailing, turnover readiness",
  },
];

export const faqs = [
  {
    question: "Do you provide after-hours commercial cleaning in Boston?",
    answer:
      "Yes. Most ongoing programs are scheduled before opening, after closing, or on weekends to minimize disruption for staff and visitors.",
  },
  {
    question: "Can the scope be customized for our facility type?",
    answer:
      "Absolutely. We tailor frequency, task lists, inspection points, and products based on building use, traffic, and hygiene expectations.",
  },
  {
    question: "Do you support one-time project work as well as recurring service?",
    answer:
      "Yes. We support both recurring janitorial plans and project-based work such as floor care or post-construction cleanup.",
  },
];
