/** Studio content - contact details, process and about copy. */

export const studio = {
  name: "D Innovations",
  tagline: "Designing Spaces. Shaping Lives.",
  /** Meta / short blurb. Full about copy lives in `about`. */
  statement:
    "D Innovations is a multidisciplinary architecture, interior design and landscaping firm. Vijay Kapoor & M J Naseem are the Joint Principal Architects of D Innovations.",
  founded: "2010",
  email: "mjnaseem@gmail.com",
  phone: "+91 99114 05689",
  address: ["D Innovations", "207, Ajnara Tower", "LSC, Savita Vihar", "Delhi, 110092"],
  mapQuery: "Ajnara Tower, LSC Savita Vihar, Delhi 110092",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ajnara%20Tower%2C%20LSC%20Savita%20Vihar%2C%20Delhi%20110092&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

/** Exact studio about copy, kept as provided. */
export const about = [
  "D Innovations is a multidisciplinary architecture, interior design and landscaping firm. Vijay Kapoor & M J Naseem are the Joint Principal Architects of D Innovations. The firm works at multiple scales and with various organizations right from private clients to corporates. This allows us to experiment and diversify our work: architectural & interior projects such as luxury villas, high-end residences, and unique offices.",
  "D Innovations' design approach is to re-connect architecture with nature, make optimum use of space, natural materials, lighting & landscape to reinvent and transform living environments and urban spaces. The firm strives to create design that inspires, approaching each project, regardless of size & scale, with an understanding that architecture has a unique power to influence lifestyle and society.",
  "Our forte is attention to details and customization. Honesty to design, client satisfaction, and sustainability are the driving forces, along with the ability to constantly explore & evolve. We are dedicated to unique design approaches adapted to each project, and achieving a balance between functionality & aesthetics, context, climate, material, cost & time-frame.",
] as const;

export const services = [
  {
    title: "Architecture",
    body: "Private residences, workplace and adaptive reuse, from feasibility and concept through statutory approvals and construction documentation.",
    scope: [
      "Feasibility & site studies",
      "Concept & schematic design",
      "Statutory approvals",
      "Construction documentation",
      "Site supervision",
    ],
  },
  {
    title: "Interiors",
    body: "Interior architecture for homes, galleries and workplaces, including bespoke joinery, lighting design and material specification.",
    scope: [
      "Spatial planning",
      "Bespoke joinery",
      "Lighting design",
      "Material & finish specification",
      "Art & furniture curation",
    ],
  },
  {
    title: "Landscape",
    body: "Planting designed alongside the building rather than after it, so soil depth, drainage and irrigation are resolved in the structure instead of retrofitted onto it.",
    scope: [
      "Planting design",
      "Terrace & balcony gardens",
      "Courtyards & setbacks",
      "Irrigation & drainage",
      "External lighting",
    ],
  },
  {
    title: "Design-Build",
    body: "Single-contract delivery where the studio can carry design and construction together - one programme, one budget, and one point of contact.",
    scope: [
      "Single-point delivery",
      "Cost planning",
      "Programme management",
      "Trade procurement",
      "Handover & defects",
    ],
  },
];

export const process = [
  {
    n: "01",
    title: "Meet & Agree",
    body: "We understand your requirements, vision, budget, and expectations to establish a clear direction for the project.",
  },
  {
    n: "02",
    title: "Site and brief",
    body: "A visit, a measured survey, and a first conversation about how the space should work. Nothing is drawn until the constraints are understood.",
  },
  {
    n: "03",
    title: "Idea & Concept",
    body: "We transform your needs into creative concepts, exploring space, form, functionality, and the character of the project.",
  },
  {
    n: "04",
    title: "Design",
    body: "The chosen concept is developed into detailed architectural designs, drawings, materials, and specifications-ready for execution.",
  },
  {
    n: "05",
    title: "Build",
    body: "We bring the design to life with careful coordination, quality execution, and attention to every detail on site.",
  },
];

export const navigation = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export const workCategories = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "institutional", label: "Institutional" },
] as const;

export type WorkCategory = (typeof workCategories)[number]["id"];
