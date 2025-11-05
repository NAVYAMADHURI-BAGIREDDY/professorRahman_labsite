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
    title: "Materials for Circularity",
    image: research1,
    description:
    "Developing circular and multifunctional materials for structural, environmental, and food-security applications. We engineer bio-based and architected systems with tunable properties across nano-to-macro scales.",
    focus: [
      "BIOTIC NANOFIBERS",
      "MULTIFUNCTIONAL BIONANOCOMPOSITES",
      "RECYCLABLE NANOCOMPOSITES",
      "CARBON-BASED FIBERS & COMPOSITES"
    ],
    href: "/research/materials"
  },
  {
    id: "manufacturing",
    title: "Manufacturing for Circularity",
    image: research2,
    description:
    "Intricate hierarchical structures found in nature reveal how exceptional mechanical and functional performance can be achieved with minimal material diversity. These distinguished properties stem not just from the material composition but, more importantly, from the topology and spatial arrangement of their building blocks. At our lab, we draw inspiration from these natural design principles to engineer advanced lightweight structures with tailored multiscale geometries. Leveraging the capabilities of additive manufacturing, we aim to translate these design paradigms at the macroscale into damage-tolerant and energy-efficient architectures.",
    focus: [
      "ADDITIVE MANUFACTURING OF BIOTIC MATERIALS",
      "ADDITIVE MANUFACTURING OF RECYCLABLE MATERIALS",
      "BIO-INSPIRED DAMAGE-TOLERANT DESIGN",
      "BIOMANUFACTURING OF LIVING COMPOSITES"
    ],
    href: "/research/manufacturing"
  },
  {
    id: "design",
    title: "Design & Applications for Circularity",
    image: research3,
    description:
    "Creating bio-inspired and architected material systems that achieve exceptional strength, toughness, and lightweight efficiency through multiscale structural design and topology optimization — advancing durable, repairable, and high-performance circular materials.",
    focus: [
      "BIOMATERIALS FOR FOOD SAFETY AND SECURITY",
      "GREEN ELECTRONICS AND ENERGY MATERIALS"
    ],
    href: "/research/design"
  },
];