import research1 from '../../images/research1.png';
import research2 from '../../images/research5.png';
import research3 from '../../images/research6.jpg';

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
    title: 'Materials for Circularity',
    image: research1,
    description:
      'Our lab develops circular materials by uniting bio-based design, recyclability, and carbon valorization in advanced composites. We create nanofibers and nanocomposites from renewable polymers to replace conventional plastics, and design recyclable, high-performance thermoplastics enhanced with nanomaterial and supramolecular modifiers for improved durability and processability. In parallel, we upcycle waste and renewable carbon into strong, sustainable carbon-based fibers and composites. Together, these efforts establish a unified framework for renewable, recyclable, and resilient materials that drive next-generation circular manufacturing.',
    focus: [
      'Biotic Nanofibers and Nanocomposites',
      'Recyclable Nanocomposites',
      'Carbon-Based Fibers & Composites'
    ],
    href: '/research/materials',
    domains: [
      {
        id: 'biotic-nanofibers-and-nanocomposites',
        title: 'Biotic Nanofibers and Nanocomposites',
        image:
          'https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/biotic-nanofibers-and-nanocomposites',
        description:
          'Slanting towards environmental and economic concerns, our lab is dedicated to developing green composites for multifunctional applications, ranging from automotive and economic packaging to sports and textile applications. Aiming to replace synthetic polymers or plastics, our research will optimize the properties of natural polymers, such as proteins, cellulose, and other carbohydrates, as well as nanomaterials (e.g., nanocellulose, calcium carbonate, hydroxyapatite), to develop fully bio-based, high-performance structures. We are also advancing the development of next-generation fibers derived from renewable sources such as cellulose, algae, and mycelium, with exceptional properties and added functionalities that can replace glass and carbon fibers.',
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
          'We aim to understand the processibility of thermoplastic polymers and vitrimers. Thermoplastic and vitrimer composites, even though recyclable, have several manufacturing limitations, e.g., high processing temperature and high viscosity of the polymer above melting temperature that makes impregnation of the reinforcement challenging. We are interested to understand the synergistic effect of nanomaterials (1D/2D) of various dimensions in thermoplastics along with natural rubber and supramolecules such as poly-rotaxane that could influence the mechanical behavior. Our focus is to understand the effect of these modifiers on the rheology, curing, viscosity, and thermomechanical behavior of base polymers during the processing via injection molding, extrusion, resin transfer, compression molding based manufacturing and ultimately how these variables affect the material properties.',
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
        title: 'Carbon-Based Fibers and Composites',
        image:
          'https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
        href: '/research/materials/carbon-based-fibers',
        description:
          'Our lab is committed to integrating sustainability into composite manufacturing by developing waste-derived carbon fibers and nanomaterials as functional reinforcements in recyclable polymer matrices. One of our recent achievements includes the successful development of carbon fiber and graphene from asphaltene—a byproduct of the petroleum industry. We are now advancing efforts to incorporate these asphaltene-derived materials into polymer systems, aligning with the broader goal of utilizing carbon to drive decarbonization. In parallel, we are exploring the use of carbon-based reinforcements synthesized through environmentally conscious processes. For instance, we are particularly interested in carbon nanotubes (CNTs) synthesized from methane or light hydrocarbons that can be spun into macroscopic fibers and used to fabricate high-performance nanocomposites. We are developing both polymer composites reinforced with high-volume CNT fibers with enhanced toughness and interfacial strength, thereby improving resistance to delamination and extending material durability.',
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
    title: 'Manufacturing for Circularity',
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
          'Architectural benefits have not been acquired in many bio-based materials. Also, the development of architected bio-based materials that improve sustainability and can be scaled up for everyday use is a significant challenge. Our research group focuses on developing bio-based architected structures with specific properties via additive manufacturing (AM) techniques by tailoring the composition, structures, and properties. We also explore integrating different bio-based materials at various scales to achieve the required functionality of the structures. To enable these complex architectures, we are developing customizable printheads and adaptive printing methods capable of printing multi-material and graded structures. This approach allows us to fabricate next-generation architected sustainable materials that meet the demands of various applications, from structural systems to functional devices.',
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
          'We design and development architected recyclable nanocomposite materials using additive manufacturing (AM) techniques. By tailoring the composition, structure, and interfaces within these composites, we aim to unlock novel mechanical and functional properties that go beyond conventional material systems. Looking ahead, we plan to expand our work to a wider range of polymers and fiber reinforcements, exploring how interface engineering can be used to program structural and functional behaviors directly into the printed composites. Our ultimate goal is to develop lightweight, high-performance composite structures with unconventional mechanical responses, paving the way for their application in aerospace and next-generation structural systems.',
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
          'The quest for the simultaneous full-scale attainment of strength and toughness in structural materials has traditionally been a trade-off. Despite many efforts, such synthetic composite has not yet been possible due to the lack of intelligent material design and manufacturing. Nature, on the other hand, overcomes such limitations by developing damage-tolerant composite materials through multiple length-scale internalized designs where the optimized composition of the hard phase (providing high strength) is packaged with soft organic phases (providing high toughness) in a complex architecture. Taking inspiration from nature’s complex designs, our research focuses on maximizing the combination of strength and toughness in brittle materials like ceramics using bio-based soft polymers by arranging different constituent blocks (hard and soft materials) in specific combinations and using intricate geometric designs at various length scales.',
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
          'Drawing inspiration from the natural world has led to the development of living materials, where living organisms are incorporated into material systems to generate structurally complex materials in situ, which would be otherwise extremely difficult to achieve by physical and chemical means. Our lab aims at developing such materials, investigating their stimuli responsivity, longevity, biocompatibility, and self-healing properties, and finally, evaluating their use in a myriad of applications. We aim to develop cellulose-based living nanocomposites that leverage the power of microorganisms, such as cellulose-producing bacteria, as self-healing and self-strengthening agents within three-dimensional polymeric matrices. By embedding microbes directly into the material system, we enable the in-situ growth of cellulose-based nanocomposites with enhanced structural and functional performance. Our work focuses on tuning stimuli-responsiveness, biocompatibility, longevity, and energy efficiency, pushing the boundaries of sustainable, adaptive material design through living systems.',
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
    title: 'Design and Applications for Circularity',
    image: research3,
    description:
      'Our lab advances circular materials design across the food–energy–water nexus. We transform food waste into high-performance, biodegradable materials and develop smart, bio-based seed coatings that enhance germination, nutrient delivery, and resilience under stress. In parallel, our Green Electronics and Energy Materials project creates bionanocomposites as biodegradable alternatives for flexible electronics, reducing e-waste and fossil dependence. Together, these initiatives build a circular, regenerative materials platform that strengthens environmental and economic resilience.',
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
          'Global hunger and food waste remain pressing challenges, with over 800 million people affected by undernourishment and nearly one-third of all food produced lost annually due to spoilage. At our lab, we are committed to developing sustainable, multi-functional materials that enhance food security, safety, and shelf life while minimizing environmental impact. Our work focuses on creating cost-effective, eco-friendly solutions by repurposing food waste into high-performance materials. In addition, we are developing bio-based seed-coating that support plant establishment by integrating biodegradability, encapsulation, seed preservation, germination enhancement, and delivery of micronutrients to mitigate environmental stress. Moving beyond conventional coatings, we are also exploring the potential of additive manufacturing to create novel food structures and materials, opening the door to personalized, data-driven nutrition and the future of food innovation.',
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
          'The electronics industry faces serious environmental challenges, including fossil resource depletion, hazardous materials, and growing e-waste. Flexible electronics today rely on non-degradable synthetic polymers for dielectric and conductive functions. As a sustainable alternative, we focus on biopolymers derived from plants and microorganisms. However, their limited thermal, electrical, and mechanical properties present performance challenges. To address this, we are designing high-performance, biopolymer-based materials by enhancing their functionality through nanocomposite engineering. Our goal is to create eco-friendly alternatives to synthetic polymers, enabling more sustainable and responsible electronics.',
        projects: [
          {
            title:
              'High-strength cellulose fiber architectures for lightweight composites',
            type: 'project',
          }
        ]
      }
    ]
  }
];
