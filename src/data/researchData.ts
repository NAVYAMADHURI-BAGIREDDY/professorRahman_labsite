import research1 from '../../images/research1.png';
import research2 from '../../images/research2.png';
import research3 from '../../images/research3.png';

export interface ResearchArea {
  id: string;
  title: string;
  image: string;
  description: string; 
  focus: string[]; // research focus
  href?: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "materials",
    title: "MATERIALS FOR CIRCULARITY",
    image: research1,
    description:
    "Developing circular and multifunctional materials for structural, environmental, and food-security applications. We engineer bio-based and architected systems with tunable properties across nano-to-macro scales.",
    focus: [
      "Biotic Nanofibers",
      "Multifunctional Bionanocomposites",
      "Recyclable Nanocomposites",
      "Carbon-Based Fibers & Composites"

    ],
    href: "/research/materials"
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING FOR CIRCULARITY",
    image: research2,
    description:
    "Intricate hierarchical structures found in nature reveal how exceptional mechanical and functional performance can be achieved with minimal material diversity. These distinguished properties stem not just from the material composition but, more importantly, from the topology and spatial arrangement of their building blocks. At our lab, we draw inspiration from these natural design principles to engineer advanced lightweight structures with tailored multiscale geometries. Leveraging the capabilities of additive manufacturing, we aim to translate these design paradigms at the macroscale into damage-tolerant and energy-efficient architectures.",
    focus: [
      "Additive Manufacturing of Biotic Materials",
      "Additive Manufacturing of Recyclable Materials",
      "Bio-Inspired Damage-Tolerant Design",
      "Biomanufacturing of Living Composites"
    ],
    href: "/research/manufacturing"
  },
  {
    id: "design",
    title: "DESIGN & APPLICATIONS FOR CIRCULARITY",
    image: research3,
    description:
    "Creating bio-inspired and architected material systems that achieve exceptional strength, toughness, and lightweight efficiency through multiscale structural design and topology optimization — advancing durable, repairable, and high-performance circular materials.",
    focus: [
      "Biomaterials for Food Safety and Security",
      "Green Electronics and Energy Materials"
    ],
    href: "/research/design"
  },
];