/**
 * Studio photography only. Years, areas and clients are omitted when they
 * have not been confirmed - the spec table drops empty rows rather than
 * inventing figures.
 */

import type { StaticImageData } from "next/image";
import heroImage from "@/assets/hero.webp";
import sachinHall from "@/assets/sachinji/hall.webp";
import sachinStairs from "@/assets/sachinji/stairs.webp";
import sachinDoubleFloor from "@/assets/sachinji/doublefloor.webp";
import sachinDrawingRoom from "@/assets/sachinji/drawingroom.webp";
import penthouseHall from "@/assets/penthouse-sector-78/hall.webp";
import penthouseSofa from "@/assets/penthouse-sector-78/sofa-area.webp";
import penthouseBedroom1 from "@/assets/penthouse-sector-78/bedroom1.webp";
import penthouseBedroom2 from "@/assets/penthouse-sector-78/bedroom2.webp";
import yojnaTerrace from "@/assets/yojna-vihar/terrace.webp";
import yojnaBalcony from "@/assets/yojna-vihar/balcony.webp";
import yojnaKitchen from "@/assets/yojna-vihar/kitchen.webp";
import yojnaStairs from "@/assets/yojna-vihar/stairs.webp";
import yojnaAboveStairs from "@/assets/yojna-vihar/above-stairs.webp";
import kaushambiExterior from "@/assets/residence-kaushambi/exterior.webp";
import kaushambiHall from "@/assets/residence-kaushambi/hall.webp";
import kaushambiStairs from "@/assets/residence-kaushambi/stairs.webp";
import kaushambiBathroom1 from "@/assets/residence-kaushambi/bathroom1.webp";
import kaushambiBathroom2 from "@/assets/residence-kaushambi/bathroom2.webp";
import showFlatHall1 from "@/assets/show-flat/hall1.webp";
import showFlatHall2 from "@/assets/show-flat/hall2.webp";
import showFlatHall3 from "@/assets/show-flat/hall3.webp";
import showFlatKitchen from "@/assets/show-flat/kitchen.webp";
import showFlatRoom from "@/assets/show-flat/room.webp";
import type { WorkCategory } from "@/data/studio";

export type Discipline = "Architecture" | "Interiors" | "Landscape" | "Design-Build";

export type Ratio = "3:2" | "4:5";

/** Two ratios only, site-wide. Mixed crops are the fastest way to look cheap. */
export const ratioClass: Record<Ratio, string> = {
  "3:2": "aspect-3/2",
  "4:5": "aspect-4/5",
};

export interface ProjectImage {
  /** A static import gets a blur placeholder for free; a URL does not. */
  src: string | StaticImageData;
  alt: string;
  ratio: Ratio;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  typology: string;
  category: WorkCategory;
  disciplines: Discipline[];
  location: string;
  year?: string;
  status: string;
  /** Floor area. Omitted rather than guessed when the real figure is unknown. */
  area?: string;
  client?: string;
  team: string;
  photographer?: string;
  /** One line, used on the index hover state. */
  summary: string;
  narrative: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "residential-house",
    title: "Residential Property in Noida",
    typology: "Private Residence",
    category: "residential",
    disciplines: ["Architecture", "Interiors", "Design-Build"],
    location: "Noida, Uttar Pradesh",
    year: "2025",
    status: "Completed",
    client: "Sachin Agarwal",
    team: "D Innovations",
    photographer: "Team ONNOFF",
    summary:
      "A four-storey house on a sector plot, where every level is given a planted balcony deep enough to live on.",
    narrative: [
      "A sector plot in Noida gives you a rectangle, two party walls and a single street frontage. Everything the house can offer has to come from that one open face, so the whole design effort went into making the street edge habitable rather than merely presentable.",
      "Each floor is pushed out into a balcony deep enough to hold furniture and a full run of planting, and the slabs are stepped so that no terrace sits in the shadow of the one above it. The planters are cast into the slab edge rather than stood on top of it, which keeps the parapet line thin and lets the greenery break the horizontals as it matures. The creeper running the full height of the elevation was planted at ground level and trained upward through all four levels.",
      "Inside, the plan is organised around a family hall that rises through two floors, with the upper landing looking back down into it. A timber stair crosses that void on a single steel stringer, its treads cantilevered clear of frameless glass balustrades, and a cluster of pendants hangs the full height of the opening so the room reads as one volume from either level. The formal drawing room is kept apart from all of this - panelled, quieter, lit from a garden edge of full-height glazing - so the house can hold a reception and an ordinary evening at the same time without the two meeting.",
      "Because the studio carried the architecture, the interiors and the construction under a single contract, details that usually fall between trades were resolved once. Planter waterproofing and drainage, the recessed cove lighting that washes the stair and hall walls, and the boundary wall with its integrated gate and signage were all detailed and built by the same team that drew them.",
    ],
    hero: {
      src: heroImage,
      alt: "Street elevation at dusk, with planted balconies and warm interior light",
      ratio: "3:2",
    },
    gallery: [
      {
        src: sachinHall,
        alt: "Double-height family hall with sheer curtains and a stone-clad media wall",
        ratio: "3:2",
        caption: "The family hall, rising through two floors",
      },
      {
        src: sachinStairs,
        alt: "Timber stair treads cantilevered from a black steel stringer behind frameless glass",
        ratio: "4:5",
        caption: "Timber treads cantilevered from a single steel stringer",
      },
      {
        src: sachinDoubleFloor,
        alt: "The hall seen from the upper landing, past a cluster of pendant lights",
        ratio: "4:5",
        caption: "Looking down into the hall from the upper landing",
      },
      {
        src: sachinDrawingRoom,
        alt: "Formal drawing room with panelled walls, coffered ceiling and full-height glazing",
        ratio: "3:2",
        caption: "The formal drawing room, glazed to the garden edge",
      },
    ],
    featured: true,
  },
  {
    slug: "penthouse-sector-78",
    title: "Penthouse at Sector 78",
    typology: "Penthouse Interiors",
    category: "residential",
    disciplines: ["Interiors"],
    location: "Noida, Uttar Pradesh",
    status: "Completed",
    client: "Withheld",
    team: "D Innovations",
    summary:
      "A top-floor apartment organised around a single living hall and two quieter bedrooms.",
    narrative: [
      "A penthouse in a Sector 78 tower is a box with one long glazed wall and a ceiling that can take whatever you ask of it. The hall uses that ceiling as the main event: a large recessed light panel, cove lighting around the perimeter, and a single curved sofa holding the centre of the room against two darker armchairs.",
      "The second sitting area is smaller and more ordinary - a green sofa, a tufted armchair, a black glass table - so the apartment can take a formal evening and a weekday one without using the same furniture twice.",
      "Both bedrooms turn away from that colour. One is built around a tall padded headwall and a hanging pendant; the other around a tufted platform bed, a plastered feature wall with vertical light slots, and a run of tinted-glass wardrobes. The work is interiors only, fitted into an existing shell.",
    ],
    hero: {
      src: penthouseHall,
      alt: "Living hall with a curved mustard sofa under a large recessed ceiling light",
      ratio: "3:2",
    },
    gallery: [
      {
        src: penthouseSofa,
        alt: "Secondary sitting area with a green sofa and a black glass coffee table",
        ratio: "4:5",
        caption: "The quieter sitting area",
      },
      {
        src: penthouseBedroom1,
        alt: "Bedroom with a tall padded headwall and a cylindrical pendant",
        ratio: "4:5",
        caption: "Bedroom, against a padded headwall",
      },
      {
        src: penthouseBedroom2,
        alt: "Bedroom with a tufted platform bed and tinted-glass wardrobes",
        ratio: "3:2",
        caption: "Second bedroom, with a run of tinted-glass wardrobes",
      },
    ],
    featured: true,
  },
  {
    slug: "198-yojna-vihar",
    title: "198, Yojna Vihar",
    typology: "Private Residence",
    category: "residential",
    disciplines: ["Architecture", "Interiors", "Landscape"],
    location: "Yojna Vihar, Delhi",
    status: "Completed",
    client: "Withheld",
    team: "D Innovations",
    summary:
      "A house in East Delhi where the terrace and the screened balcony are treated as rooms.",
    narrative: [
      "The house sits in a dense East Delhi neighbourhood, so the outdoor rooms had to work as hard as the interiors. The terrace is a deck against a beige wall, with circular planted recesses of different sizes and a low line of pots along the outer edge. The balcony below it is a narrower slot, screened in black vertical slats, with turf insets in the stone floor and a planter of marigolds against the rail.",
      "Inside, a white stair with a glass balustrade climbs past a mezzanine and opens onto a hall of polished stone. From the landing above, dark timber ceiling beams and a single chandelier hold the upper floor together. The kitchen is an L of cream uppers and dark stone bases, handleless, with a light strip at the toe so the run reads as one piece.",
    ],
    hero: {
      src: yojnaTerrace,
      alt: "Rooftop terrace at dusk, with circular planted recesses in a beige wall",
      ratio: "3:2",
    },
    gallery: [
      {
        src: yojnaBalcony,
        alt: "Balcony screened in black vertical slats, with turf insets in the stone floor",
        ratio: "3:2",
        caption: "The balcony, screened in black slats",
      },
      {
        src: yojnaAboveStairs,
        alt: "Upper landing looking over a glass balustrade into the living floor",
        ratio: "4:5",
        caption: "From the landing, looking down",
      },
      {
        src: yojnaKitchen,
        alt: "L-shaped kitchen with cream upper cabinets and dark stone bases",
        ratio: "3:2",
        caption: "The kitchen",
      },
      {
        src: yojnaStairs,
        alt: "White stair with a glass balustrade opening onto a polished stone hall",
        ratio: "3:2",
        caption: "The stair, opening onto the hall",
      },
    ],
    featured: true,
  },
  {
    slug: "residence-kaushambi",
    title: "Residence at Kaushambi",
    typology: "Private Residence",
    category: "residential",
    disciplines: ["Architecture", "Interiors"],
    location: "Kaushambi, Uttar Pradesh",
    status: "Completed",
    client: "Withheld",
    team: "D Innovations",
    summary:
      "A white house behind an ornamental gate, finished through to the bathrooms.",
    narrative: [
      "The street elevation is a white house with a curved balcony and a green wrought-iron gate set against a marble pier. That is the only face the neighbourhood sees; everything else is internal.",
      "The hall is a pale room looking through a glass partition onto a timber stair. A coffered wood ceiling and a backlit slatted recess on the far wall do the work that a view would do on a more open site. The stair itself starts in marble, picks up a dark riser with a recessed light, and continues as floating treads behind frameless glass.",
      "The two bathrooms are treated as finished rooms rather than leftover space: one in pale stone with a lit oval mirror and a dark marble partition at the WC; the other entirely in black marble, with a circular LED mirror and a fluted vanity.",
    ],
    hero: {
      src: kaushambiExterior,
      alt: "White street elevation with a curved balcony and a green wrought-iron gate",
      ratio: "4:5",
    },
    gallery: [
      {
        src: kaushambiHall,
        alt: "Living hall with a coffered wood ceiling, looking through glass onto the stair",
        ratio: "4:5",
        caption: "The hall, looking through to the stair",
      },
      {
        src: kaushambiStairs,
        alt: "Marble stair becoming floating treads behind a glass balustrade",
        ratio: "4:5",
        caption: "The stair, from the dining end",
      },
      {
        src: kaushambiBathroom1,
        alt: "Bathroom in pale stone with a lit oval mirror and a dark marble partition",
        ratio: "4:5",
        caption: "Bathroom in pale stone",
      },
      {
        src: kaushambiBathroom2,
        alt: "Bathroom in black marble with a circular LED mirror and a fluted vanity",
        ratio: "4:5",
        caption: "Bathroom in black marble",
      },
    ],
    featured: true,
  },
  {
    slug: "show-flat",
    title: "Show Flat",
    typology: "Show Flat",
    category: "residential",
    disciplines: ["Interiors"],
    location: "Delhi NCR",
    status: "Completed",
    client: "Withheld",
    team: "D Innovations",
    summary:
      "A sales apartment staged as an open living, dining and kitchen, with one bedroom in a single colour.",
    narrative: [
      "A show flat has to photograph well and walk well in the same afternoon. The plan is kept open - living, dining and kitchen in one volume - so a visitor can stand in the door and see the whole apartment without being led.",
      "Three versions of that volume were finished: a yellow living-dining opening onto a compact kitchen; a dining table set against a balcony planter; and a darker scheme held together by a laser-cut screen between dining and kitchenette. The dry kitchen is a black-and-white run with a single sink and a long white counter.",
      "The bedroom is the only room allowed a strong colour. Orange curtains, a patterned bedcover and a padded headwall with inset mirrors - enough to remember after the tour, and nothing that would fight the rest of the flat.",
    ],
    hero: {
      src: showFlatHall2,
      alt: "Dining table set against full-height glazing and a planted balcony",
      ratio: "3:2",
    },
    gallery: [
      {
        src: showFlatHall1,
        alt: "Open living and dining in white and yellow, opening onto a compact kitchen",
        ratio: "3:2",
        caption: "Living and dining, opening onto the kitchen",
      },
      {
        src: showFlatHall3,
        alt: "Dining table beside a laser-cut screen, with a kitchenette beyond",
        ratio: "3:2",
        caption: "Dining, held by a laser-cut screen",
      },
      {
        src: showFlatKitchen,
        alt: "Black-and-white dry kitchen with a long white counter and a single sink",
        ratio: "3:2",
        caption: "The dry kitchen",
      },
      {
        src: showFlatRoom,
        alt: "Bedroom with orange curtains, a patterned bedcover and a padded mirrored headwall",
        ratio: "3:2",
        caption: "The bedroom",
      },
    ],
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);

/**
 * Residence House has a confirmed year and leads. The rest keep source order
 * until their completion years are known.
 */
export const orderedProjects = [...projects].sort((a, b) => {
  if (a.year && b.year) return b.year.localeCompare(a.year);
  if (a.year) return -1;
  if (b.year) return 1;
  return 0;
});

export const projectsByCategory = (category: WorkCategory) =>
  orderedProjects.filter((p) => p.category === category);

export const adjacentProject = (slug: string) => {
  const i = orderedProjects.findIndex((p) => p.slug === slug);
  return orderedProjects[(i + 1) % orderedProjects.length];
};
