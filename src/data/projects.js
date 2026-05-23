import proj1 from '../assets/project_1.png';
import proj2 from '../assets/project_2.png';
import proj3 from '../assets/project_3.png';

export const allProjects = [
  {
    id: 1,
    title: "Azure Penthouse",
    category: "Interior Design",
    location: "Dubai, UAE",
    year: "2024",
    area: "420 m\u00B2",
    description:
      "A sky-high residence where deep navy lacquers meet hand-stitched leather and 24k gold hardware. Every surface tells a story of refined luxury.",
    image: proj1,
  },
  {
    id: 2,
    title: "The Obsidian Kitchen",
    category: "Renovation",
    location: "Riyadh, KSA",
    year: "2023",
    area: "180 m\u00B2",
    description:
      "A complete transformation of a heritage villa\u2019s culinary space \u2014 merging matte black cabinetry, marble islands and bespoke brass fittings.",
    image: proj2,
  },
  {
    id: 3,
    title: "Lumina Villa",
    category: "Architecture",
    location: "Abu Dhabi, UAE",
    year: "2024",
    area: "1,200 m\u00B2",
    description:
      "A clifftop sanctuary engineered for serenity. Floor-to-ceiling glazing dissolves the boundary between interior and the Arabian Gulf.",
    image: proj3,
  },
  {
    id: 4,
    title: "The Golden Suite",
    category: "Interior Design",
    location: "Doha, Qatar",
    year: "2023",
    area: "310 m\u00B2",
    description:
      "Private suite commission for a royal family \u2014 a masterclass in opulence, featuring hand-painted ceilings and bespoke Italian furnishings.",
    image: proj1,
  },
  {
    id: 5,
    title: "Noir Residence",
    category: "Architecture",
    location: "Dubai, UAE",
    year: "2022",
    area: "850 m\u00B2",
    description:
      "A dark concrete monolith softened by warm amber lighting and lush landscaping. Architecture that commands attention without a word.",
    image: proj3,
  },
  {
    id: 6,
    title: "Ivory Courtyard",
    category: "Renovation",
    location: "Muscat, Oman",
    year: "2023",
    area: "650 m\u00B2",
    description:
      "The revival of a 1970s estate \u2014 stripped back, re-imagined and brought into the modern era while preserving its original graceful bones.",
    image: proj2,
  },
  {
    id: 7,
    title: "Marble and Mist Spa",
    category: "Interior Design",
    location: "Abu Dhabi, UAE",
    year: "2024",
    area: "240 m\u00B2",
    description:
      "A wellness retreat designed around Calacatta marble, soft ambient lighting and a palette of warm neutrals to evoke calm and renewal.",
    image: proj2,
  },
  {
    id: 8,
    title: "The Horizon Tower",
    category: "Architecture",
    location: "Dubai, UAE",
    year: "2024",
    area: "3,400 m\u00B2",
    description:
      "A landmark mixed-use tower whose faceted glass facade captures the sunrise \u2014 a new silhouette on the Dubai skyline.",
    image: proj3,
  },
  {
    id: 9,
    title: "Copper and Clay Loft",
    category: "Renovation",
    location: "Riyadh, KSA",
    year: "2022",
    area: "290 m\u00B2",
    description:
      "Industrial bones, artisanal soul. Raw copper piping meets handmade ceramic tile in a loft renovation that celebrates craft over convention.",
    image: proj1,
  },
];

export const categories = ["All", ...new Set(allProjects.map((p) => p.category))];
