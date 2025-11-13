import research1 from '../../images/research6.jpg';
import research2 from '../../images/research3.jpg';
import research3 from '../../images/research4.jpg';
import focusFood from '../../images/projects/foodcoating.png';
import focusgreen from '../../images/projects/algae.png';
import focusDesign from '../../images/projects/origami.png';
import focusDesign2 from '../../images/projects/cement.png';
import focusCarbon2 from '../../images/projects/dynamics.jpg';
import focusCarbon4 from '../../images/projects/fjhmodel.png';
import focusBiotic2 from '../../images/projects/egg.png';
import focusAMBio from '../../images/projects/3dwood.png';
import focusAMRecycle2 from '../../images/projects/bullet.png';
import focusAMBio2 from '../../images/projects/burning.png'; 
import focusFibre from '../../images/projects/bacteria-cellulose.png';
import focusFibre2 from '../../images/projects/cellulose.png';
import focusFibre3 from '../../images/projects/green_fibre.png';

export interface Figure {
  src: string;
  caption?: string; // independent figure name
}

export interface Publication {
  name?: string;        // paper title
  href?: string;        // DOI or link
  authors?: string;     // author list
  journal?: string;     // journal name
  year?: number;
}

export interface Project {
  title: string;
  description?: string;  
  images?: Figure[];       
  publications?: Publication[];  
}

export interface Domain {
  id: string;
  title: string;
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
      'Biotic Nanofibers',
      'Biotic Nanocomposites',
      'Carbon-Based Fibers & Composites'
    ],
    href: '/research/materials',
    domains: [
      {
        id: 'biotic-nanofibers',
        title: 'Biotic Nanofibers and Polymers',
        href: '/research/materials/biotic-nanofibers-and-nanocomposites',
        description:
          'We are advancing the development of next-generation fibers derived from renewable sources such as cellulose, algae, and mycelium, with exceptional properties and added functionalities that can replace glass and carbon fibers.',
        projects: [
          {
            title: 'Biotic Nanofibre from Microbes',
            description: 'For generations, microbes have produced finely structured natural fibres, offering a renewable platform for advanced material design. Bacterial cellulose, in particular, exhibits exceptional strength and purity, yet its broader use has been limited by challenges in controlling fibril alignment and adding new functionalities. By steering microbial growth through controlled fluid flow and introducing functional nanomaterials during biosynthesis, biotic nanofibres can be created with enhanced strength, flexibility, and thermal performance. This direction opens exciting possibilities for sustainable structural materials, advanced packaging, textiles, and green electronics.',
            images: [
              {src: focusFibre2, caption: 'Aligned plant-derived cellulose fibres'},
              {src: focusFibre,  caption: 'Bacterial cellulose sheet under shear'}
            ],
            publications: [
              {
                name: 'Flow-induced 2D nanomaterials intercalated aligned bacterial cellulose',
                href: 'https://doi.org/10.1038/s41467-025-60242-1',
                authors: 'Saadi, M.A.S.R.; Cui, Y.; Bhakta, S.P.; Hassan, Sakib; Harikrishnan, V.; Siqueira,  I.R.; Pasquali, M.; Bennett, M.; Ajayan, P.M.; Rahman, M.R.*',
                journal: 'Nature Communications',
                year: 2025,
              },
              {
                name: 'Oriented Bacterial Cellulose-Soy Protein based Fully ‘Green’ Nanocomposites',
                href: 'https://doi.org/10.1016/j.compscitech.2016.10.003',
                authors: 'Rahman, M. M.; Netravali, A. N.',
                journal: 'Composites Science and Technology',
                year: 2016,
              }
            ]
          },
          {
            title: 'Green Polymers from Agro-resources',
            description: 'For decades, vast amounts of agro-resources and plant-based residues have remained underutilized despite their natural potential to form strong and sustainable polymers. By extracting and transforming these non-edible components, it becomes possible to develop bio-based resins and composites that offer a credible alternative to petroleum-derived materials. Through gentle chemical modification and fiber reinforcement, these green polymers achieve impressive strength, durability, and cost-effectiveness while relying entirely on renewable feedstocks. This direction strengthens the broader vision of circularity, where waste streams are converted into high-value materials for sustainable manufacturing and everyday applications.',
            images: [{
              src: focusFibre3, caption: 'bla bla'
            }],
            publications: [
              {
                name: '“Green” composites using bioresins from agro-wastes and modified sisal fibers',
                href: 'https://4spepublications.onlinelibrary.wiley.com/doi/abs/10.1002/pc.24607',
                authors: 'Patil, N.V.; Rahman, M. M.; Netravali, A.N.',
                journal: 'Polymer Composites',
                year: 2017,
              },
              {
                name: 'Green Resin from Forestry Waste Residue “Karanja (Pongamia pinnata) Seed Cake” for Biobased Composite Structures',
                href: 'https://pubs.acs.org/doi/abs/10.1021/sc500095r',
                authors: 'Rahman, M. M.; Netravali, A. N.; Tiimob, B. J.; Rangari, V. K.',
                journal: 'ACS Sustainable Chemistry and Engineering',
                year: 2014,
              }
            ]
          }
        ]
      },
      {
        id: 'biotic-nanocomposites',
        title: 'Biotic Nanocomposites',
        href: '/research/materials/biotic-nanofibers-and-nanocomposites',
        description:
          'Slanting towards environmental and economic concerns, our lab is dedicated to developing green composites for multifunctional applications, ranging from automotive and economic packaging to sports and textile applications. Aiming to replace synthetic polymers or plastics, our research will optimize the properties of natural polymers, such as proteins, cellulose, and other carbohydrates, as well as nanomaterials (e.g., nanocellulose, calcium carbonate, hydroxyapatite), to develop fully bio-based, high-performance structures.',
        projects: [
          {
            title: 'Bionanocomposite',
            description: 'For generations, biological materials have offered remarkable structural and functional capabilities, yet their full potential in advanced engineering applications has remained largely untapped. By combining naturally derived polymers with nanoscale reinforcements, biotic nanocomposites create a new class of high-performance, sustainable materials that leverage the strengths of both biology and nanotechnology. These composites exhibit improved barrier properties, enhanced mechanical stability, and inherent antimicrobial behavior, all while remaining biodegradable and low-cost. As global industries seek alternatives to synthetic coatings and energy-intensive preservation methods, biotic nanocomposites present a promising pathway toward environmentally responsible solutions for packaging, protection, and long-term material circularity.',
            images: [{
              src: focusBiotic2, caption: 'bla bla'
            }],
            publications: [
              {
                name: 'Preserving fresh eggs via egg-derived bio-nanocomposite coating',
                href: 'https://doi.org/10.1002/adfm.202310091',
                authors: 'Zinke, A.; Pottackal, N.; Zahin, F.; Nur, I.; Ahmed, F.; ji, Y.; Mohammed, Z.; Meyer, M.D.; Miller, C.; Bennett, M.; Rangari, V.; Meredith, J.; Ajayan, P.M.; Rahman, M.M.*',
                journal: 'Advanced Functional Materials',
                year: 2024
              }
            ]
          }
        ]
      },
      {
        id: 'carbon-based-fibers',
        title: 'Carbon Based Fibers and Composites',
        href: '/research/materials/carbon-based-fibers',
        description:
          'Our lab is committed to integrating sustainability into composite manufacturing by developing waste-derived carbon fibers and nanomaterials as functional reinforcements in recyclable polymer matrices. One of our recent achievements includes the successful development of carbon fiber and graphene from asphaltene—a byproduct of the petroleum industry. We are now advancing efforts to incorporate these asphaltene-derived materials into polymer systems, aligning with the broader goal of utilizing carbon to drive decarbonization. In parallel, we are exploring the use of carbon-based reinforcements synthesized through environmentally conscious processes. For instance, we are particularly interested in carbon nanotubes (CNTs) synthesized from methane or light hydrocarbons that can be spun into macroscopic fibers and used to fabricate high-performance nanocomposites. We are developing both polymer composites reinforced with high-volume CNT fibers with enhanced toughness and interfacial strength, thereby improving resistance to delamination and extending material durability.',
        projects: [
          {
            title: 'Carbon Based Fiber and Nanomaterials',
            description: 'For decades, vast quantities of carbon-rich by-products from petroleum refining have been treated as low-value waste despite their inherent potential as precursors for advanced materials. These residues, particularly asphaltenes, contain the aromatic architectures needed to form strong carbon fibres and high-performance nanomaterials. By transforming these overlooked resources through controlled spinning, stabilization, and rapid thermal conversion, they can be upgraded into robust carbon fibres and graphene-like nanostructures without the costly pretreatment typically required. Such approaches not only unlock new pathways for producing lightweight, high-strength, and thermally stable materials, but also redirect industrial waste streams toward higher-value applications, supporting both economic and environmental sustainability.',
            images: [
              {src: focusCarbon4, caption: 'Sustainable valorization of asphaltene'}
            ],
            publications: [
              {
                name: 'Sustainable valorization of asphaltenes via flash joule heating',
                href: 'https://www.science.org/doi/10.1126/sciadv.add3555',
                authors: 'Saadi, M.A.S.R.; Advincula, P.A.; Thakur, M.S.H.; Khater, A.; Saad, S.; Zeraati, A.s.; Nabil, S.K.; Zinke, A.; Roy, S.; Lou, M.; Bheemasetti, S.N.; Bari, M.A.A.; Zheng, Y.; Beckham, J.L.; Gadhamshetty, V.; Vashisth, A.; Kibria, M.G.; Tour, J.M.; Ajayan, P.M.; Rahman, M. M.',
                journal: 'Science Advances',
                year: 2022,
              },
              { 
                name: 'Transformation of petroleum asphaltenes to carbon fibers',
                href: 'https://doi.org/10.1016/j.carbon.2022.01.011',
                authors: 'Saad, S.; Zeraati, A. S.; Roy, S.; Shahriar Rahman Saadi, M. A.; Radović, J. R.; Rajeev, A.; Miller, K. A.; Bhattacharyya, S.; Larter, S. R.; Natale, G.; Sundararaj, U.; Ajayan, P. M.; Rahman, M. M.; Kibria, M. G.',
                journal: 'Carbon',
                year: 2022
              }
            ]
          },
          {
            title: 'Carbon Based Composites',
            description: 'For years, carbon nanomaterials have been recognized for their remarkable strength and thermal conductivity, yet their integration into polymers has been hindered by issues such as agglomeration, voids, and poor interfacial bonding. As manufacturing moves toward more precise and sustainable approaches, extrusion-based additive techniques offer a way to overcome these limitations. By using shear-driven flow during printing, carbon nanotubes can be more uniformly dispersed, better aligned, and more effectively bonded within the polymer matrix. This advancement enables stronger, more reliable, and thermally efficient carbon-based composites for next-generation structural and functional applications.',
            images: [{
              src: focusCarbon2, caption: ''
            }],
            publications: [
              {
                name: 'Development of asphaltene-derived carbon fiber reinforced composites via additive manufacturing',
                href: 'https://doi.org/10.1016/j.carbon.2024.119413',
                authors: 'Akash, N.M.; Saad, S.; Bari, M.A.A.; Sarker, R.; Gupta, C.; Sarabi, G.A.; Phani, A.; Zahin, F.; Tabassum, S.; Subramanian, K.; Kim, S.; Rahman, M.M.; Egberts, P.; Kibria, M.G.',
                journal: 'Carbon',
                year: 2024,
              },
              {
               name: 'Processing Dynamics of Carbon Nanotube–Epoxy Nanocomposites during 3D Printing',
               href: 'https://doi.org/10.1016/j.xcrp.2023.101617',
               authors: 'Khater, A.; Saadi, M. A. S. R.; Bhattacharyya, S.; Kutana, A.; Tripathi, M.; Kamble, M.; Song, S.; Lou, M.; Barnes, M.; Meyer, M.; Harikrishnan, V.; Dalton, A. B.; Koratkar, N.; Tiwary, C. S.; Boul, P. J.; Yakobson, B.; Zhu, H.; Ajayan, P. M.; Rahman, M.M.*',
               journal: 'Cell Reports Physical Science',
               year: 2023,
              }
            ]
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
        href: '/research/manufacturing/additive-bio-materials',
        description:
          'Architectural benefits have not been acquired in many bio-based materials. Also, the development of architected bio-based materials that improve sustainability and can be scaled up for everyday use is a significant challenge. Our research group focuses on developing bio-based architected structures with specific properties via additive manufacturing (AM) techniques by tailoring the composition, structures, and properties. We also explore integrating different bio-based materials at various scales to achieve the required functionality of the structures.',
        projects: [
          {
            title: '3D Printing of Wood Structure',
            description: 'For countless centuries, natural wood has served as a fundamental material for a wide variety of purposes, encompassing the construction of buildings, the manufacturing of furniture, and the creation of architectural structures. Traditionally, wood shaping has relied on subtractive manufacturing techniques. However, this process often generates a substantial amount of waste material, resulting in material wastage and increased production costs. In light of the growing concerns surrounding sustainability and the need for effective waste management, recycling waste wood has become imperative. A potential opportunity arises if complex wood structures can be created using this waste wood through additive processes. To address this challenge, we work on developing an additive manufacturing process, which will enable complex structure manufacturing of wood with tailored properties and lower costs.',
            images: [
             { src: focusAMBio, caption: '3D printing process of wood'}
            ],
            publications: [
              { name: 'Three-dimensional Printing of Wood',
                href: 'https://doi.org/10.1126/sciadv.adk3250',
                authors: 'Thakur, M.S.H.; Shi, C.; Logan, K.; Saadi, M.A.S.R.; Naskar, A.; Ajayan, P.M.; Rahman, M.M.*',
                journal: 'Science Advances',
                year: 2024
              }
            ]
          },
          {
            title: 'Architected Fire-resistant Wood',
            description: 'Over the past three decades, fire incidents have caused over 1.16 million deaths worldwide, with more than 80% in residential buildings. In the United States alone, 2023 recorded 1.39 million fires, causing 3,670 deaths and $23 billion in losses. Despite its combustibility, natural wood remains central to construction due to its abundance and aesthetics. Current fire-retardant coatings on wood only protect surfaces, degrade over time, and often use toxic halogenated compounds. Our research group aim to deliver a completely environment-friendly novel and robust solution: intrinsically fire-resistant architected wood structures fabricated via state-of-the-art additive manufacturing technology.',
            images: [
              {src: focusAMBio2, caption: ''}
            ],
            publications: [
              {
                name: 'Direct Ink Writing: A 3D Printing Technology for Diverse Materials',
                href: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adma.202108855',
                authors: 'Saadi, M. a. S. R.; Maguire, A.; Pottackal, N. T.; Thakur, M. S. H.; Ikram, M. Md.; Hart, A. J.; Ajayan, P. M.; Rahman, M. M.',
                journal: 'Advanced Materials',
                year: 2022,
              }
            ]
          }
        ]
      },
      {
        id: 'recyclable-materials',
        title: 'Additive Manufacturing of Recyclable Materials',
        href: '/research/manufacturing/recyclable-materials',
        description:
          'We design and development architected recyclable nanocomposite materials using additive manufacturing (AM) techniques. By tailoring the composition, structure, and interfaces within these composites, we aim to unlock novel mechanical and functional properties that go beyond conventional material systems. Looking ahead, we plan to expand our work to a wider range of polymers and fiber reinforcements, exploring how interface engineering can be used to program structural and functional behaviors directly into the printed composites. Our ultimate goal is to develop lightweight, high-performance composite structures with unconventional mechanical responses, paving the way for their application in aerospace and next-generation structural systems.',
        projects: [
          {
            title: 'Design and Impact of Thermoplastic',
            description: 'For decades, designing lightweight yet impact-resistant materials has remained a critical challenge in defense and aerospace applications. Through advanced additive manufacturing, architected porous structures can now be tailored with precise geometries to absorb energy and withstand extreme loading. By utilizing high-performance thermoplastics and engineered lattice designs such as Schwarzites and Tubulanes, these materials achieve remarkable strength, resilience, and stability under dynamic impact. Combining experimental testing with computational modeling enables a deeper understanding of their deformation behavior, guiding the development of next-generation protective and structural systems.',
            images: [
              { src: focusAMRecycle2, caption: '' }
            ]
          }
        ]
      },
      {
        id: 'bio-inspired-design',
        title: 'Bio-Inspired Damage-Tolerant Design',
        href: '/research/manufacturing/bio-inspired-design',
        description:
          'The quest for the simultaneous full-scale attainment of strength and toughness in structural materials has traditionally been a trade-off. Despite many efforts, such synthetic composite has not yet been possible due to the lack of intelligent material design and manufacturing. Nature, on the other hand, overcomes such limitations by developing damage-tolerant composite materials through multiple length-scale internalized designs where the optimized composition of the hard phase (providing high strength) is packaged with soft organic phases (providing high toughness) in a complex architecture. Taking inspiration from nature’s complex designs, our research focuses on maximizing the combination of strength and toughness in brittle materials like ceramics using bio-based soft polymers by arranging different constituent blocks (hard and soft materials) in specific combinations and using intricate geometric designs at various length scales.',
        projects: [
          {
            title: 'Damage-Tolerant Architected Ceramic',
            description: 'For centuries, ceramics have been prized for their exceptional strength and stiffness, yet their inherent brittleness has limited their use in demanding structural roles. Unlike natural systems that combine hard minerals with soft phases to prevent catastrophic failure, engineered ceramics often lack mechanisms for damage control. By creating architected ceramic structures and introducing a thin external polymer layer, brittleness can be redirected into more graceful, tolerant failure modes. This simple surface-based approach enables lightweight ceramic components that are far stronger, tougher, and more reliable than traditional counterparts.',
            images: [
              {src: focusDesign, caption: '' 
              }],
            publications: [
              {
                name: 'Damage-tolerant 3D Printed Ceramics via Conformal Coating',
                href: 'https://advances.sciencemag.org/content/7/28/eabc5028',
                authors: 'Sajadi, S. M.; Vásárhelyi, L.; Mousavi, R. Rahmati, A. H.; Kónya, Z.; Kukovecz, A.; Arif, T.; Filleter, T.; Vajtai, R.; Tiwary, C. S.; Rahman, M. M.*, Ajayan, P. M.',
                journal: 'Science Advances',
                year: 2021
              },
              {
                name: 'Macroscale ceramic origami structures with hyper-elastic coating',
                href: 'https://doi.org/10.1007/s42114-025-01284-3',
                authors: 'Thakur, M.S.H.; Nath, M.D.; Paulino, G.H.; Ajayan, P.M.; Rahman, M.M.*',
                journal: 'Advanced Composites and Hybrid Materials',
                year: 2025
              },
              {
                name: '3D printed metamaterials for Damping Enhancement and Vibration Isolation: Schwarzites',
                href: 'https://www.sciencedirect.com/science/article/abs/pii/S0888327022008871',
                authors: 'Herkal, S.; Rahman, M. M.*; Nagarajah, S.; Harikrishnan, V, Ajayan, P. M.',
                journal: 'Mechanical Systems and Signal Processing',
                year: 2023
              }
            ]
          },
          {
            title: 'Damage-Tolerant Architected Cement',
            description: 'For decades, cement has been relied on for its strong compressive performance, yet its brittleness has continued to limit structural resilience. As construction demands more adaptable and damage-tolerant materials, shaping cement into controlled architectures offers a promising path forward. By engineering printable cement inks with tailored rheology, complex geometries can be fabricated that distribute stress more efficiently and resist sudden fracture. This approach transforms conventional brittle cement into tougher, more reliable architected structures suited for modern structural and functional needs.',
            images: [{
              src: focusDesign2, caption: ''
            }],
            publications: [
              {
                name: 'Direct Ink Writing of Cement Structures Modified with Nanoscale Additive',
                href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adem.201801380',
                authors: 'Sajadi, S.M.; Boul, P.J.; Thaemlitz, C.; Meiyazhagan, A.K.; Puthirath, A.B.; Tiwary, C.S.; Rahman, M.M.*; Ajayan, P.M',
                journal: 'Advanced Engineering Materials',
                year: 2019,
              }
            ]
          }
        ]
      },
      {
        id: 'living-composites',
        title: 'Biomanufacturing of Living Composites',
        href: '/research/manufacturing/living-composites',
        description:
          'Drawing inspiration from the natural world has led to the development of living materials, where living organisms are incorporated into material systems to generate structurally complex materials in situ, which would be otherwise extremely difficult to achieve by physical and chemical means. Our lab aims at developing such materials, investigating their stimuli responsivity, longevity, biocompatibility, and self-healing properties, and finally, evaluating their use in a myriad of applications. We aim to develop cellulose-based living nanocomposites that leverage the power of microorganisms, such as cellulose-producing bacteria, as self-healing and self-strengthening agents within three-dimensional polymeric matrices. By embedding microbes directly into the material system, we enable the in-situ growth of cellulose-based nanocomposites with enhanced structural and functional performance. Our work focuses on tuning stimuli-responsiveness, biocompatibility, longevity, and energy efficiency, pushing the boundaries of sustainable, adaptive material design through living systems.',
        projects: []
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
        href: '/research/design/food-safety-biomaterials',
        description:
          'Global hunger and food waste remain pressing challenges, with over 800 million people affected by undernourishment and nearly one-third of all food produced lost annually due to spoilage. At our lab, we are committed to developing sustainable, multi-functional materials that enhance food security, safety, and shelf life while minimizing environmental impact. Our work focuses on creating cost-effective, eco-friendly solutions by repurposing food waste into high-performance materials. In addition, we are developing bio-based seed-coating that support plant establishment by integrating biodegradability, encapsulation, seed preservation, germination enhancement, and delivery of micronutrients to mitigate environmental stress. Moving beyond conventional coatings, we are also exploring the potential of additive manufacturing to create novel food structures and materials, opening the door to personalized, data-driven nutrition and the future of food innovation.',
        projects: [
          {
            title: 'Protein-based Bionanocomposite Coating for Perishable Food Preservation',
            description: 'For generations, natural proteins have played essential roles in food systems, yet their potential as protective materials for extending shelf life remains largely underutilized. In a world where vast quantities of fresh produce spoil before consumption, relying on synthetic additives and inedible coatings raises growing health and environmental concerns. Protein-based biopolymers offer a compelling alternative. When combined with biocompatible nanomaterials, these proteins can form edible, flexible, and conformal coatings that slow ripening, reduce dehydration, and hinder microbial growth. Such protein-driven bionanocomposite barriers provide a safe, washable, and sustainable approach to preserving perishable foods while addressing global challenges of spoilage and waste.',
            images: [{
              src: focusFood, caption: ''
            }],
            publications: [
              {
                name: 'Multifunctional bionanocomposite coatings for perishable fruits',
                href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adma.201908291',
                authors: 'Jung, S.; Cui, Y.; Barnes, M.; Satam, C.; Zhang, S.; Chowdhury, R.; Adumbumkulath, A.; Sahin, O.; Miller, C.; Sajadi, S.M.; Sassi, L.; Ji, Y.; Bennett, M.; Yu, M.; Friguglietti, J.; Merchant, F.; Verduzco, R.; Roy, S.; Vajtai, R.; Meredith, J.C.; Youngblood, J.; Koratkar, N.; Rahman, M.M.*; Ajayan, P.M',
                journal: 'Advanced Materials',
                year: 2020,
              }
            ]
          }
        ]
      },
      {
        id: 'green-electronics',
        title: 'Green Electronics and Energy Materials',
        href: '/research/design/green-electronics',
        description:
          'The electronics industry faces serious environmental challenges, including fossil resource depletion, hazardous materials, and growing e-waste. Flexible electronics today rely on non-degradable synthetic polymers for dielectric and conductive functions. As a sustainable alternative, we focus on biopolymers derived from plants and microorganisms. However, their limited thermal, electrical, and mechanical properties present performance challenges. To address this, we are designing high-performance, biopolymer-based materials by enhancing their functionality through nanocomposite engineering. Our goal is to create eco-friendly alternatives to synthetic polymers, enabling more sustainable and responsible electronics.',
        projects: [
          {
            title:
              'Bionanocomposite Based Insulating Substance',
            description: 'For years, the rapid growth of electronic devices has intensified concerns over mounting e-waste and the reliance on synthetic insulating materials. Natural biopolymers offer a sustainable path forward when combined with high-performance nanomaterials. By integrating renewable carbohydrate-based polymers with nanoscale fillers, bionanocomposites can be engineered to exhibit strong mechanical integrity, thermal stability, flame resistance, and reliable dielectric behavior. These materials provide an eco-friendly alternative to conventional polymer insulators, enabling greener approaches to energy storage, flexible circuitry, and next-generation electronic components.',
            images: [{
              src: focusgreen, caption: ''
            }],
            publications: [
              {
                name: 'Algae-derived nacre-like dielectric bionanocomposite with high loading hexagonal boron nitride for green electronics',
                href: 'https://doi.org/10.1021/acsnano.4c09365', 
                authors: 'Saadi, M.A.S.R.; Likhi, F.H.; Zahin, F.; Yuan, Y.; Karim, A.; Ajayan, P.M.; Rahman, M.M.*', 
                journal: 'ACS Nano',
                year: 2024
              }
            ]
          }
        ]
      }
    ]
  }
];
