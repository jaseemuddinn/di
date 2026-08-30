/** Placeholder studio content — replace with the firm's real details. */

export const studio = {
  name: "D Innovations",
  tagline: "Architecture, interiors and design-build",
  statement:
    "We are an architecture and interiors practice working across private houses, apartments and show flats in Delhi and Noida. We take a small number of projects each year and see each one through construction ourselves.",
  founded: "2010",
  email: "hello@dinnovations.com",
  phone: "+91 99114 05689",
  address: ["D Innovations", "101, Ajnara Tower", "LSC, Savita Vihar", "Delhi, 110092"],
} as const;

export const principles = [
  {
    n: "01",
    title: "Site before style",
    body: "Every project starts with orientation, light, wind and slope. The form follows from what the site will already give us for free.",
  },
  {
    n: "02",
    title: "Built by people we know",
    body: "We work repeatedly with the same masons, joiners and fabricators. Detailing is written for their hands, not for a generic contractor.",
  },
  {
    n: "03",
    title: "Fewer, longer projects",
    body: "We take on a limited number of commissions each year so that a principal stays on every project from first sketch to handover.",
  },
];

export const services = [
  {
    title: "Architecture",
    body: "Private residences, workplace and adaptive reuse, from feasibility and concept through statutory approvals and construction documentation.",
    scope: ["Feasibility & site studies", "Concept & schematic design", "Statutory approvals", "Construction documentation", "Site supervision"],
  },
  {
    title: "Interiors",
    body: "Interior architecture for homes, galleries and workplaces, including bespoke joinery, lighting design and material specification.",
    scope: ["Spatial planning", "Bespoke joinery", "Lighting design", "Material & finish specification", "Art & furniture curation"],
  },
  {
    title: "Landscape",
    body: "Planting designed alongside the building rather than after it, so soil depth, drainage and irrigation are resolved in the structure instead of retrofitted onto it.",
    scope: ["Planting design", "Terrace & balcony gardens", "Courtyards & setbacks", "Irrigation & drainage", "External lighting"],
  },
  {
    title: "Design-Build",
    body: "Single-contract delivery where the studio carries both design and construction responsibility, with one programme and one budget.",
    scope: ["Single-point delivery", "Cost planning", "Programme management", "Trade procurement", "Handover & defects"],
  },
];

/** Dates are drafted, not verified — correct them against the studio's records. */
export const timeline = [
  { year: studio.founded, event: "Practice founded in Delhi" },
  { year: "2013", event: "First independent residential commission completed" },
  { year: "2016", event: "Interiors brought in-house" },
  { year: "2019", event: "First project delivered under a single design-build contract" },
  { year: "2022", event: "Construction team formed, ending reliance on outside contractors" },
  { year: "2024", event: "Landscape added to the studio's scope" },
  { year: "2025", event: "Residence House completed in Noida" },
];

/**
 * Article titles are drafted to fit the studio's work, but the publications are
 * placeholders. Replace `source` with real mastheads and add links, or drop
 * this list and remove the Press section from the home page.
 */
export const press = [
  { year: "2025", title: "A Noida house that grows its own shade", source: "Publication name" },
  { year: "2024", title: "One contract, from first drawing to handover", source: "Publication name" },
  { year: "2023", title: "Balconies deep enough to live on", source: "Publication name" },
];

export const navigation = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];
