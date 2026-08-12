import proj1 from '../assets/project_1.png';
import proj2 from '../assets/project_2.png';
import proj3 from '../assets/project_3.png';
import marseiliaImg from '../assets/marseilia_beach_4.jpg';
import blueBlueImg from '../assets/BlueBlue.png';
import marassiImg from '../assets/Marassi.png';
import marinaImg from '../assets/Marina View.png';
import panoramaImg from '../assets/Panorama.png';
import alexPortImg from '../assets/Alex Port.png';

export const allProjects = [
  {
    id: 1,
    title: "Marseilia Beach 4",
    category: "COASTAL & RESORTS",
    location: "Sidi Abdel Rahman, North Coast | 40 Acres",
    description: "Master architectural planning and engineering supervision for a 40-acre premier Mediterranean resort.",
    image: marseiliaImg,
  },
  {
    id: 2,
    title: "Blue Blue Resort",
    category: "COASTAL & RESORTS",
    location: "Ain Sokhna | 35 Acres",
    description: "Comprehensive architectural design and coastal engineering across a 35-acre Red Sea destination.",
    image: blueBlueImg,
  },
  {
    id: 3,
    title: "Marassi Palm View",
    category: "COASTAL & RESORTS",
    location: "Sidi Abdel Rahman, North Coast | 60 Acres",
    description: "Strategic urban master plan and engineering consultancy for an exclusive 60-acre beachfront compound.",
    image: marassiImg,
  },
  {
    id: 4,
    title: "Alexandria Residential Compound",
    category: "RESIDENTIAL TOWERS",
    location: "Alexandria, Egypt | 7 Buildings",
    description: "Premium architectural layout and cover design for an exclusive residential compound featuring exactly seven buildings.",
    image: proj2,
  },
  {
    id: 5,
    title: "Panorama Tower",
    category: "RESIDENTIAL TOWERS",
    location: "Alexandria, Egypt | 12 Stories",
    description: "Detailed architectural visualization and drafting for a 12-story commercial and residential building aligned parallel to an active railway corridor.",
    image: panoramaImg,
  },
  {
    id: 6,
    title: "Alex Port Towers",
    category: "RESIDENTIAL TOWERS",
    location: "Wardian, Alexandria | 2 Towers (200 Units)",
    description: "Landmark waterfront residential development engineered with advanced structural solutions overlooking the port.",
    image: alexPortImg,
  },
  {
    id: 7,
    title: "Sawary Towers",
    category: "RESIDENTIAL TOWERS",
    location: "Alexandria, Egypt",
    description: "Turnkey construction and interior finishing contracts executed in strategic partnership with United and Redcon.",
    image: proj3,
  },
  {
    id: 8,
    title: "Marina View Compound",
    category: "COASTAL & RESORTS",
    location: "North Coast | 10 Acres",
    description: "Architectural design and engineering execution for a mixed-use commercial and hospitality center.",
    image: marinaImg,
  },
  {
    id: 9,
    title: "Porto Golf Marina",
    category: "COASTAL & RESORTS",
    location: "El Alamein, North Coast",
    description: "Local real estate development including structural evaluations, fire-retardant electrical conduit installations, and excavation waste logistical management.",
    image: proj3,
  },
];

export const categories = ["ALL", ...new Set(allProjects.map((p) => p.category))];
