import research1 from '../../images/research4.jpg';
import research2 from '../../images/research5.png';
import research3 from '../../images/research6.png';

export interface Project {
  title: string;
  venue?: string;   // e.g., journal, conference
  year?: number;
  type?: 'paper' | 'preprint' | 'project' | 'demo';
  href?: string;
}

export interface Domain {
  id: string;
  title: string;
  image: string;
  description?: string;
  href?: string;
  projects?: Project[];
}

export interface ResearchArea {
  id: string;
  title: string;
  image: string;
  description: string;
  focus: string[];
  href?: string;
  domains?: Domain[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'materials',
    title: 'MATERIALS FOR CIRCULARITY',
    image: research1,
    description:
      'We develop circular and multifunctional materials for structural, environmental, and food-security applications—engineering bio-based and architected systems with tunable properties from nano to macro scales.',
    focus: [
      'Biotic Nanofibers',
      'Multifunctional Bionanocomposites',
      'Recyclable Nanocomposites',
      'Carbon-Based Fibers & Composites'
    ],
    href: '/research/materials',
    domains: [
      {
        id: 'biotic-nanofibers',
        title: 'Biotic Nanofibers',
        image:
          'https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/biotic-nanofibers',
        description:
          'We design green structural composites using natural polymers (proteins, cellulose, other carbohydrates) and nanomaterials to replace petroleum-based plastics. We are developing bio-derived fibers (e.g., cellulose) with tailored functionality and high specific properties as alternatives to glass and carbon fibers.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'multifunctional-bionanocomposites',
        title: 'Multifunctional Bionanocomposites',
        image:
          'https://images.pexels.com/photos/3850684/pexels-photo-3850684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/multifunctional-bionanocomposites',
        description:
          'We create fully bio-based, high-performance composites by combining biopolymers with functional nanofillers (e.g., nanocellulose, CaCO₃, hydroxyapatite). We also explore next-gen renewable fibers (cellulose, algae, mycelium) to achieve multifunctionality and replace conventional fiber reinforcements.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'recyclable-nanocomposites',
        title: 'Recyclable Nanocomposites',
        image:
          'https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/recyclable-nanocomposites',
        description:
          'We study the processability of thermoplastics and vitrimers and the synergistic effects of 1D/2D nanomaterials, natural rubber, and supramolecular modifiers (e.g., polyrotaxane) on rheology and thermo-mechanical behavior. We relate processing—extrusion, injection, RTM, compression—to properties and recyclability.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'carbon-based-fibers',
        title: 'Carbon-Based Fibers & Composites',
        image:
          'https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/carbon-based-fibers',
        description:
          'We integrate sustainability into composites by using waste-derived carbon (e.g., asphaltene-based carbon fibers/graphene) and environmentally conscious CNTs (e.g., methane-derived) spun into macroscopic fibers. We engineer interfaces to boost toughness and interlaminar strength in recyclable polymer matrices.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      }
    ]
  },

  {
    id: 'manufacturing',
    title: 'MANUFACTURING FOR CIRCULARITY',
    image: research2,
    description:
      'Intricate hierarchical structures found in nature reveal how exceptional mechanical and functional performance can be achieved with minimal material diversity. These distinguished properties stem not just from the material composition but, more importantly, from the topology and spatial arrangement of their building blocks. At our lab, we draw inspiration from these natural design principles to engineer advanced lightweight structures with tailored multiscale geometries. Leveraging the capabilities of additive manufacturing, we aim to translate these design paradigms at the macroscale into damage-tolerant and energy-efficient architectures.',
    focus: [
      'Additive Manufacturing of Biotic Materials',
      'Additive Manufacturing of Recyclable Materials',
      'Bio-Inspired Damage-Tolerant Design',
      'Biomanufacturing of Living Composites'
    ],
    href: '/research/manufacturing',
    domains: [
      {
        id: 'additive-bio-materials',
        title: 'Additive Manufacturing of Biotic Materials',
        image:
          'https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/manufacturing/additive-bio-materials',
        description:
          'We design architected bio-based materials by tailoring composition, geometry, and interfaces. Custom printheads and adaptive multi-material printing enable graded structures for structural and functional applications.',
        projects: [
          {
            title:
              'Damage-tolerant 3D-Printed Ceramics via Conformal Coating',
            venue: 'Science Advances',
            year: 2021,
            type: 'paper'
          }
        ]
      },
      {
        id: 'recyclable-materials',
        title: 'Additive Manufacturing of Recyclable Materials',
        image:
          'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/manufacturing/recyclable-materials',
        description:
          'We design architected recyclable nanocomposites for unconventional mechanical responses by programming interfaces and mesoscale geometry directly in the print path.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'bio-inspired-design',
        title: 'Bio-Inspired Damage-Tolerant Design',
        image:
          'https://images.pexels.com/photos/5074100/pexels-photo-5074100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/manufacturing/bio-inspired-design',
        description:
          'Taking cues from hierarchical biological composites, we co-arrange hard and soft phases across length scales to concurrently maximize strength and toughness, especially in brittle systems like ceramics.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'living-composites',
        title: 'Biomanufacturing of Living Composites',
        image:
          'https://images.pexels.com/photos/1170978/pexels-photo-1170978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/manufacturing/living-composites',
        description:
          'We embed microorganisms (e.g., cellulose-producing bacteria) within polymer matrices to enable in-situ growth of cellulose-based nanocomposites with self-healing, stimuli-responsive behavior, and long-term stability.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      }
    ]
  },
  {
    id: 'design',
    title: 'DESIGN & APPLICATIONS FOR CIRCULARITY',
    image: research3,
    description:
      'Bio-inspired, architected systems that achieve strength, toughness, and lightweight efficiency via multiscale design and topology optimization.',
    focus: [
      'Biomaterials for Food Safety and Security',
      'Green Electronics and Energy Materials'
    ],
    href: '/research/design',
    domains: [
      {
        id: 'food-safety-biomaterials',
        title: 'Biomaterials for Food Safety and Security',
        image:
          'https://images.pexels.com/photos/1170978/pexels-photo-1170978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/design/food-safety-biomaterials',
        description:
          'We develop sustainable, multifunctional materials to reduce food waste and enhance shelf life—repurposing food waste streams, creating bio-based seed coatings for stress mitigation and germination, and exploring AM for personalized nutrition.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      },
      {
        id: 'green-electronics',
        title: 'Green Electronics and Energy Materials',
        image:
          'https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/design/green-electronics',
        description:
          'We engineer high-performance biopolymer-based dielectrics and conductors via nanocomposite design to reduce reliance on fossil-derived polymers and mitigate e-waste.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
            year: 2025
          }
        ]
      }
    ]
  }
];
