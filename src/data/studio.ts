/** Placeholder studio content - replace with the firm's real details. */

export const studio = {
  name: "D Innovations",
  tagline: "We design it. We build it.",
  statement:
    "We are an architecture and interiors practice in Delhi and Noida, working on private houses, apartments and show flats. We take a small number of commissions each year, and we only construct what we design - one team from the first sketch through handover.",
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
    title: "Only what we draw",
    body: "We do not build other people's designs, and we do not hand our drawings to outside contractors. If we construct it, we designed it first.",
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
    body: "Single-contract delivery where the studio designs and builds - we do not take construction-only work, and we do not issue drawings for others to build.",
    scope: ["Single-point delivery", "Cost planning", "Programme management", "Trade procurement", "Handover & defects"],
  },
];

/** Dates are drafted, not verified - correct them against the studio's records. */
export const timeline = [
  { year: studio.founded, event: "Practice founded in Delhi" },
  { year: "2013", event: "First independent residential commission completed" },
  { year: "2016", event: "Interiors brought in-house" },
  { year: "2019", event: "First project delivered under a single design-build contract" },
  { year: "2022", event: "Construction team formed, ending reliance on outside contractors" },
  { year: "2024", event: "Landscape added to the studio's scope" },
  { year: "2025", event: "Residential House completed in Noida" },
];

/** How a commission actually proceeds. Sequence, not marketing. */
export const process = [
  {
    n: "01",
    title: "Enquiry",
    body: "Send the site, the brief and a rough timeline. We design and build only - no construction-only work, and no drawings for others to build.",
  },
  {
    n: "02",
    title: "Site and brief",
    body: "A visit, a measured survey, and a first conversation about how the rooms should work. Nothing is drawn until the constraints are understood.",
  },
  {
    n: "03",
    title: "Design",
    body: "Concept through drawings, samples and models, until the plan, the finishes and the budget sit together. Changes happen here, not on site.",
  },
  {
    n: "04",
    title: "Build",
    body: "The same team that drew the project builds it - one contract, one programme, one point of contact on site.",
  },
  {
    n: "05",
    title: "Handover",
    body: "Snagging, as-built drawings, and the first season of occupation. A principal remains the point of contact after the keys are handed over.",
  },
];

export const navigation = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];
