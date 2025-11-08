import research1 from '../../images/research1.png';
import research2 from '../../images/research5.png';
import research3 from '../../images/research6.jpg';

import focusFood from '../../images/projects/foodsafe.png';
import focusLiving1 from '../../images/projects/livingcompo.png';
import focusLiving2 from '../../images/projects/livingcompo2.png';
import focusLiving3 from '../../images/projects/livingcompo3.png';
import focusgreen from '../../images/projects/algae.png';
import focusgreen2 from '../../images/projects/graphene.png';
import focusgreen3 from '../../images/projects/greenelectronic.png';
import focusDesign from '../../images/projects/origami.png';
import focusCarbon1 from '../../images/projects/carbonfibre.png';
import focusCarbon2 from '../../images/projects/carbonfibre2.png';
import focusCarbon3 from '../../images/projects/carbonfibre3.png';
import focusBiotic from '../../images/projects/flow2d.png';
import focusBiotic2 from '../../images/projects/greencoat.png';
import focusRecycle from '../../images/projects/dielectric.png';
import focusRecycle2 from '../../images/projects/3d.png';
import focusAMBio from '../../images/projects/3dwood.png';
import focusAMRecycle from '../../images/projects/complex.png';
import focusAMRecycle2 from '../../images/projects/diw.png';


export interface Project {
  title: string;
  href?: string;
}

export interface Domain {
  id: string;
  title: string;
  image?: string;
  images?: string[];
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
      'Our lab focuses on developing circular materials through the integration of bio-based design, recyclability, and carbon valorization in advanced composites. We engineer nanofibers and nanocomposites from renewable polymers as sustainable alternatives to conventional plastics and design recyclable, high-performance thermoplastics enhanced with nanomaterials and supramolecular modifiers. Simultaneously, we convert waste and renewable carbon sources into durable carbon-based fibers and composites, establishing a unified framework for renewable, recyclable, and resilient materials that advance next-generation circular manufacturing.',
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
        images: [focusBiotic, focusBiotic2], 
        href: '/research/materials/biotic-nanofibers-and-nanocomposites',
        description:
          'Slanting towards environmental and economic concerns, our lab is dedicated to developing green composites for multifunctional applications, ranging from automotive and economic packaging to sports and textile applications. Aiming to replace synthetic polymers or plastics, our research will optimize the properties of natural polymers, such as proteins, cellulose, and other carbohydrates, as well as nanomaterials (e.g., nanocellulose, calcium carbonate, hydroxyapatite), to develop fully bio-based, high-performance structures. We are also advancing the development of next-generation fibers derived from renewable sources such as cellulose, algae, and mycelium, with exceptional properties and added functionalities that can replace glass and carbon fibers.',
        projects: [
          {
          title: 'Flow-induced 2D nanomaterials intercalated aligned bacterial cellulose',
          href: 'https://www.nature.com/articles/s41467-025-60242-1'
          },
          {
          title: 'Preserving Fresh Eggs via Egg-Derived Bionanocomposite Coating',
          href: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202310091'
          },
          {
          title: 'High-performance green nanocomposites using aligned bacterial cellulose and soy protein',
          href: 'https://www.sciencedirect.com/science/article/abs/pii/S0266353816318346'
          }
        ]
      },
      {
        id: 'recyclable-nanocomposites',
        title: 'Recyclable Nanocomposites',
        images: [focusRecycle, focusRecycle2],
        href: '/research/materials/recyclable-nanocomposites',
        description:
          'We aim to understand the processibility of thermoplastic polymers and vitrimers. Thermoplastic and vitrimer composites, even though recyclable, have several manufacturing limitations, e.g., high processing temperature and high viscosity of the polymer above melting temperature that makes impregnation of the reinforcement challenging. We are interested to understand the synergistic effect of nanomaterials (1D/2D) of various dimensions in thermoplastics along with natural rubber and supramolecules such as poly-rotaxane that could influence the mechanical behavior. Our focus is to understand the effect of these modifiers on the rheology, curing, viscosity, and thermomechanical behavior of base polymers during the processing via injection molding, extrusion, resin transfer, compression molding based manufacturing and ultimately how these variables affect the material properties.',
        projects: [
          {
          title: 'Tuning dielectric properties with nanofiller dimensionality in polymer nanocomposites',
          href: 'https://pubs.acs.org/doi/10.1021/acsami.4c16329'
          },
          {
          title: 'Processing dynamics of carbon nanotube-epoxy nanocomposites during 3D printing',
          href: 'https://doi.org/10.1016/j.xcrp.2023.101617'
          },
          {
          title: 'Direct ink writing: a 3D printing technology for diverse materials',
          href: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202108855'
          }
        ]
      },
      {
        id: 'carbon-based-fibers',
        title: 'Carbon-Based Fibers and Composites',
        images:[focusCarbon1,focusCarbon2,focusCarbon3],
        href: '/research/materials/carbon-based-fibers',
        description:
          'Our lab is committed to integrating sustainability into composite manufacturing by developing waste-derived carbon fibers and nanomaterials as functional reinforcements in recyclable polymer matrices. One of our recent achievements includes the successful development of carbon fiber and graphene from asphaltene—a byproduct of the petroleum industry. We are now advancing efforts to incorporate these asphaltene-derived materials into polymer systems, aligning with the broader goal of utilizing carbon to drive decarbonization. In parallel, we are exploring the use of carbon-based reinforcements synthesized through environmentally conscious processes. For instance, we are particularly interested in carbon nanotubes (CNTs) synthesized from methane or light hydrocarbons that can be spun into macroscopic fibers and used to fabricate high-performance nanocomposites. We are developing both polymer composites reinforced with high-volume CNT fibers with enhanced toughness and interfacial strength, thereby improving resistance to delamination and extending material durability.',
        projects: [
          {
          title: 'Polymer derived and Ni-single atom doped carbon nanofibers for CO2 capture and electroreduction to CO',
          href: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cssc.202500602'
          },
          {
          title: 'Development of asphaltene-derived carbon fiber reinforced composites via additive manufacturing',
          href: 'https://doi.org/10.1016/j.carbon.2024.119413'
          },
          {
          title: 'Transformation of petroleum asphaltenes to carbon fibers',
          href: 'https://doi.org/10.1016/j.carbon.2022.01.011'
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
      'Our lab draws inspiration from nature’s hierarchical architectures, where exceptional mechanical and functional performance emerge from optimized topology and spatial organization rather than material diversity. We apply these bioinspired design principles to engineer lightweight structures with tailored multiscale geometries and controlled deformation behavior. By leveraging the precision of additive manufacturing, we translate these natural strategies into macroscale architectures that combine damage tolerance, energy efficiency, and structural resilience for next-generation sustainable applications.',
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
        image: focusAMBio, 
        href: '/research/manufacturing/additive-bio-materials',
        description:
          'Architectural benefits have not been acquired in many bio-based materials. Also, the development of architected bio-based materials that improve sustainability and can be scaled up for everyday use is a significant challenge. Our research group focuses on developing bio-based architected structures with specific properties via additive manufacturing (AM) techniques by tailoring the composition, structures, and properties. We also explore integrating different bio-based materials at various scales to achieve the required functionality of the structures. To enable these complex architectures, we are developing customizable printheads and adaptive printing methods capable of printing multi-material and graded structures. This approach allows us to fabricate next-generation architected sustainable materials that meet the demands of various applications, from structural systems to functional devices.',
        projects: [
          {
            title:
              'Three-dimensional printing of wood',
            href: 'https://www.science.org/doi/10.1126/sciadv.adk3250',
          }
        ]
      },
      {
        id: 'recyclable-materials',
        title: 'Additive Manufacturing of Recyclable Materials',
        images: [focusAMRecycle, focusAMRecycle2], 
        href: '/research/manufacturing/recyclable-materials',
        description:
          'We design and development architected recyclable nanocomposite materials using additive manufacturing (AM) techniques. By tailoring the composition, structure, and interfaces within these composites, we aim to unlock novel mechanical and functional properties that go beyond conventional material systems. Looking ahead, we plan to expand our work to a wider range of polymers and fiber reinforcements, exploring how interface engineering can be used to program structural and functional behaviors directly into the printed composites. Our ultimate goal is to develop lightweight, high-performance composite structures with unconventional mechanical responses, paving the way for their application in aerospace and next-generation structural systems.',
        projects: [
          {
          title: 'Direct ink writing of metals and metal-based heterostructures',
          href: 'https://link.springer.com/article/10.1007/s10853-024-10340-0'
          },
          {
          title: 'Three-dimensional printing of complex graphite structures',
          href: 'https://www.sciencedirect.com/science/article/abs/pii/S0008622321004978'
          }
        ]
      },
      {
        id: 'bio-inspired-design',
        title: 'Bio-Inspired Damage-Tolerant Design',
        image: focusDesign,
        href: '/research/manufacturing/bio-inspired-design',
        description:
          'The quest for the simultaneous full-scale attainment of strength and toughness in structural materials has traditionally been a trade-off. Despite many efforts, such synthetic composite has not yet been possible due to the lack of intelligent material design and manufacturing. Nature, on the other hand, overcomes such limitations by developing damage-tolerant composite materials through multiple length-scale internalized designs where the optimized composition of the hard phase (providing high strength) is packaged with soft organic phases (providing high toughness) in a complex architecture. Taking inspiration from nature’s complex designs, our research focuses on maximizing the combination of strength and toughness in brittle materials like ceramics using bio-based soft polymers by arranging different constituent blocks (hard and soft materials) in specific combinations and using intricate geometric designs at various length scales.',
        projects: [
          {
          title: 'Macroscale ceramic origami structures with hyper-elastic coating',
          href: 'https://link.springer.com/article/10.1007/s42114-025-01284-3'
          },
          {
          title: 'Damage-tolerant 3D-printed ceramics via conformal coating',
          href: 'https://www.science.org/doi/10.1126/sciadv.abc5028'
          }
        ]
      },
      {
        id: 'living-composites',
        title: 'Biomanufacturing of Living Composites',
        images: [focusLiving1, focusLiving2, focusLiving3],
        href: '/research/manufacturing/living-composites',
        description:
          'Drawing inspiration from the natural world has led to the development of living materials, where living organisms are incorporated into material systems to generate structurally complex materials in situ, which would be otherwise extremely difficult to achieve by physical and chemical means. Our lab aims at developing such materials, investigating their stimuli responsivity, longevity, biocompatibility, and self-healing properties, and finally, evaluating their use in a myriad of applications. We aim to develop cellulose-based living nanocomposites that leverage the power of microorganisms, such as cellulose-producing bacteria, as self-healing and self-strengthening agents within three-dimensional polymeric matrices. By embedding microbes directly into the material system, we enable the in-situ growth of cellulose-based nanocomposites with enhanced structural and functional performance. Our work focuses on tuning stimuli-responsiveness, biocompatibility, longevity, and energy efficiency, pushing the boundaries of sustainable, adaptive material design through living systems.',
        projects: [
          {
          title: 'Aligned bacterial cellulose arrays as “Green” nanofibers for composite materials',
          href: 'https://pubs.acs.org/doi/10.1021/acsmacrolett.6b00621'
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
      'Our lab advances circular materials design across the food–energy–water nexus. We transform food waste into high-performance, biodegradable materials and engineer smart, bio-based seed coatings that improve germination, nutrient delivery, and stress resilience. Meanwhile, our Green Electronics and Energy Materials initiative develops bionanocomposites as biodegradable alternatives for flexible electronics, minimizing e-waste and fossil dependence. Together, these efforts establish a circular and regenerative materials platform that enhances both environmental and economic resilience.',
    focus: [
      'Biomaterials for Food Safety and Security',
      'Green Electronics and Energy Materials'
    ],
    href: '/research/design',
    domains: [
      {
        id: 'food-safety-biomaterials',
        title: 'Biomaterials for Food Safety and Security',
        image: focusFood,
        href: '/research/design/food-safety-biomaterials',
        description:
          'Global hunger and food waste remain pressing challenges, with over 800 million people affected by undernourishment and nearly one-third of all food produced lost annually due to spoilage. At our lab, we are committed to developing sustainable, multi-functional materials that enhance food security, safety, and shelf life while minimizing environmental impact. Our work focuses on creating cost-effective, eco-friendly solutions by repurposing food waste into high-performance materials. In addition, we are developing bio-based seed-coating that support plant establishment by integrating biodegradability, encapsulation, seed preservation, germination enhancement, and delivery of micronutrients to mitigate environmental stress. Moving beyond conventional coatings, we are also exploring the potential of additive manufacturing to create novel food structures and materials, opening the door to personalized, data-driven nutrition and the future of food innovation.',
        projects: [
          {
          title: 'Preserving fresh eggs via egg-derived bionanocomposite coating',
          href: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202310091'
          },
          {
          title: 'Multifunctional bio-nanocomposite coatings for perishable fruits',
          href: 'https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.201908291'
          }
        ]
      },
      {
        id: 'green-electronics',
        title: 'Green Electronics and Energy Materials',
        images: [focusgreen,focusgreen2,focusgreen3],
        href: '/research/design/green-electronics',
        description:
          'The electronics industry faces serious environmental challenges, including fossil resource depletion, hazardous materials, and growing e-waste. Flexible electronics today rely on non-degradable synthetic polymers for dielectric and conductive functions. As a sustainable alternative, we focus on biopolymers derived from plants and microorganisms. However, their limited thermal, electrical, and mechanical properties present performance challenges. To address this, we are designing high-performance, biopolymer-based materials by enhancing their functionality through nanocomposite engineering. Our goal is to create eco-friendly alternatives to synthetic polymers, enabling more sustainable and responsible electronics.',
        projects: [
          {
          title: 'Algae-derived nacre-like dielectric bionanocomposite with high loading hexagonal boron nitride for green electronics',
          href: 'https://pubs.acs.org/doi/10.1021/acsnano.4c09365'  
          },
          {
          title: 'Graphene as thinnest coating on Copper electrodes in microbial Methanol fuel cells',
          href: 'https://pubs.acs.org/doi/10.1021/acsnano.2c05512'
          },
          {
          title: 'Seawater splitting for Hydrogen production: a solution looking for a problem?',
          href: 'https://pubs.rsc.org/en/content/articlelanding/2021/ee/d1ee00870f'
          }
        ]
      }
    ]
  }
];
