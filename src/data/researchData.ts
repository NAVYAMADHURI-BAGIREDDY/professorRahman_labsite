import research1 from '../../images/research1.png';
import research2 from '../../images/research2.png';
import research3 from '../../images/research3.png';


export interface ResearchArea {
  id: string;
  title: string;
  image: string;
  description: string;
  href?: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "materials",
    title: "Materials for Circularity",
    image: research1,
    description:
      "Developing circular and multifunctional materials for structural, environmental, and food-security applications. We engineer bio-based and architected systems with tunable properties across nano-to-macro scales.",
    href: "/research/materials"
  },
  {
    id: "manufacturing",
    title: "Manufacturing for Circularity",
    image: research2,
    description:
      "Scaling sustainable materials through frugal and advanced manufacturing routes — including DIW 3D printing, scalable bio-polymer fabrication, and circular composite processing — with minimal waste and energy use.",
    href: "/research/manufacturing"
  },
  {
    id: "design",
    title: "Design for Circularity",
    image: research3,
    description:
      "Creating bio-inspired and architected material systems that achieve exceptional strength, toughness, and lightweight efficiency through multiscale structural design and topology optimization — advancing durable, repairable, and high-performance circular materials.",
    href: "/research/design"
  },
];
