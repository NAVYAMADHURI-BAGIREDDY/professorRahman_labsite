import research1 from '../../images/research4.jpg';
import research2 from '../../images/research3.jpg';
import focusFood from '../../images/projects/strawberry.png';
import focusGreen from '../../images/projects/algae.png';
import focusDesign from '../../images/projects/damagemodel.jpeg';
import focusDesign2 from '../../images/projects/cement.png';
import focusDesign3 from '../../images/projects/deformation.jpg';
import focusCarbon2 from '../../images/projects/carbonsite.png';
import focusCarbon4 from '../../images/projects/fjhmodel.png';
import focusCarbonfiber from '../../images/projects/carbonfiber.png';
import focusAMBio from '../../images/projects/3dwood.png';
import focusAMRecycle2 from '../../images/projects/bullet.png';
import focusAMBio2 from '../../images/projects/burning.png'; 
import focusFibre from '../../images/projects/bacteria-cellulose.png';
import focusFibre2 from '../../images/projects/cellulose.png';
import focusFiber3 from '../../images/projects/eggshell.png';
import focusCapture from '../../images/projects/carbon.jpg';

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
      'Our lab develops multifunctional circular materials by integrating bio-based design, recyclability, and decarbonization into advanced composite materials. We study how a material’s composition, processing, structure, and properties work together to guide better, more sustainable designs. We create fibers, nanofibers, and nanocomposites from biomaterials as alternatives to traditional plastics. We also convert waste and renewable carbon sources into advanced carbon fibers and recyclable polymer composites. Our research supports a wide range of applications from structures and food systems to textiles, energy, and environmental technologies, all aimed at advancing the next generation of sustainable design.',
    focus: [
      'Biotic Nanofibers',
      'Biomaterials for Food Safety and Security',
      'Multifunctional Bionanocomposites',
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
            description: 'Microbes naturally produce highly ordered fibrous networks that serve as a renewable foundation for next-generation materials. Among them, bacterial cellulose stands out for its strength, purity, and biodegradability, yet its full potential has remained untapped due to limited control over structure and functionality. By guiding microbial fiber formation through directed fluid environments and integrating nanoscale additives during growth, biotic nanofibres can be engineered with improved mechanical, thermal, and functional performance. This approach enables sustainable pathways for high-performance materials spanning structural components, flexible packaging, advanced textiles, and eco-friendly electronic systems.',
            images: [
              {src: focusFibre2, caption: 'Aligned bacetrial cellulose from rotational culture'},
              {src: focusFibre,  caption: 'Wide-angle X-ray scattering (WAXS) patterns for bacterial cellulose: (i) static and (iv) rotational culture'}
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
                name: 'Aligned Bacterial Cellulose Arrays as "Green" Nanofibers for Composite Material',
                href: 'https://pubs.acs.org/doi/10.1021/acsmacrolett.6b00621',
                authors: 'Rahman, M. M. ; Netravali, A. N.',
                journal: 'ACS Macro Letters',
                year: 2016,
              }
            ]
          },
          {
            title: 'Green Polymers from Agro-resources',
            description: 'For decades, vast amounts of agro-resources and plant-based residues have remained underutilized despite their natural potential to form strong and sustainable polymers. By extracting and transforming these non-edible components, it becomes possible to develop bio-based resins and composites that offer a credible alternative to petroleum-derived materials. Through gentle chemical modification and fiber reinforcement, these green polymers achieve impressive strength, durability, and cost-effectiveness while relying entirely on renewable feedstocks. This direction strengthens the broader vision of circularity, where waste streams are converted into high-value materials for sustainable manufacturing and everyday applications.',
            images: [{
              src: focusFiber3, caption: 'Soy protein based green polymer modified by eggshell nanoparticles'
            }],
            publications: [
              {
              name: 'Bio-derived “Green” Composite from Soy Protein and Eggshell Nanopowder',
              href: 'https://pubs.acs.org/doi/10.1021/sc5003193',
              authors: 'Rahman, M. M.; Netravali, A. N.; Tiimob, B. J.; Rangari, V. K.',
              journal: 'ACS Sustainable Chemistry and Engineering',
              year: 2014,
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
        id: 'food-safety-biomaterials',
        title: 'Biomaterials for Food Safety and Security',
        href: '/research/design/food-safety-biomaterials',
        description:
          'Global hunger and food waste remain pressing challenges, with over 800 million people affected by undernourishment and nearly one-third of all food produced lost annually due to spoilage. At our lab, we are committed to developing sustainable, multi-functional materials that enhance food security, safety, and shelf life while minimizing environmental impact. Our work focuses on creating cost-effective, eco-friendly solutions by repurposing food waste into high-performance materials. In addition, we are developing bio-based seed-coating that support plant establishment by integrating biodegradability, encapsulation, seed preservation, germination enhancement, and delivery of micronutrients to mitigate environmental stress. Moving beyond conventional coatings, we are also exploring the potential of additive manufacturing to create novel food structures and materials, opening the door to personalized, data-driven nutrition and the future of food innovation.',
        projects: [
          {
            title: 'Protein-based Bionanocomposite Coating for Perishable Food Preservation',
            description: 'For generations, natural proteins have played essential roles in food systems, yet their potential as protective materials for extending shelf life remains largely underutilized. In a world where vast quantities of fresh produce spoil before consumption, relying on synthetic additives and inedible coatings raises growing health and environmental concerns. Protein-based biopolymers offer a compelling alternative. When combined with biocompatible nanomaterials, these proteins can form edible, flexible, and conformal coatings that slow ripening, reduce dehydration, and hinder microbial growth. Such protein-driven bionanocomposite barriers provide a safe, washable, and sustainable approach to preserving perishable foods while addressing global challenges of spoilage and waste.',
            images: [
              {src: focusFood, caption: 'Protein-cellulose based nanocomposite coating on strawberry with time-lapse photographs'}
            ],
            publications: [
              {
                name: 'Multifunctional bionanocomposite coatings for perishable fruits',
                href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adma.201908291',
                authors: 'Jung, S.; Cui, Y.; Barnes, M.; Satam, C.; Zhang, S.; Chowdhury, R.; Adumbumkulath, A.; Sahin, O.; Miller, C.; Sajadi, S.M.; Sassi, L.; Ji, Y.; Bennett, M.; Yu, M.; Friguglietti, J.; Merchant, F.; Verduzco, R.; Roy, S.; Vajtai, R.; Meredith, J.C.; Youngblood, J.; Koratkar, N.; Rahman, M.M.*; Ajayan, P.M',
                journal: 'Advanced Materials',
                year: 2020,
              }, 
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
        id: 'biotic-nanocomposites',
        title: 'Multifunctional Bionanocomposites',
        href: '/research/materials/biotic-nanofibers-and-nanocomposites',
        description:
          'Slanting towards environmental and economic concerns, our lab is dedicated to developing green composites for multifunctional applications, ranging from automotive and economic packaging to sports and textile applications. Aiming to replace synthetic polymers or plastics, our research will optimize the properties of natural polymers, such as proteins, cellulose, and other carbohydrates, as well as nanomaterials (e.g., nanocellulose, calcium carbonate, hydroxyapatite), to develop fully bio-based, high-performance structures.',
        projects: [
          {
            title:
              'Bionanocomposite for Green Electronics',
            description: 'As electronic devices continue to proliferate, so does the environmental burden of e-waste and petroleum-based insulating materials. Renewable biopolymers, when combined with functional nanomaterials, offer a sustainable alternative. These bionanocomposites can deliver strong mechanical stability, thermal endurance, flame resistance, and dependable dielectric performance. This direction enables eco-friendly materials for energy storage, flexible circuits, and next-generation green electronics.',
            images: [
              { src: focusGreen, caption: 'Green electronics application of Algae-derived bionanocomposite'}
            ],
            publications: [
              {
                name: 'Algae-derived nacre-like dielectric bionanocomposite with high loading hexagonal boron nitride for green electronics',
                href: 'https://doi.org/10.1021/acsnano.4c09365', 
                authors: 'Saadi, M.A.S.R.; Likhi, F.H.; Zahin, F.; Yuan, Y.; Karim, A.; Ajayan, P.M.; Rahman, M.M.*', 
                journal: 'ACS Nano',
                year: 2024
              }
            ]
          },
          {
            title:
              'Bionanocomposite for Carbon dioxide Capture',
            description: 'Rising atmospheric CO₂ levels continue to threaten environmental stability, demanding sustainable materials that can mitigate emissions while retaining structural performance. Bionanocomposites, when combined with functional porous materials, offer a promising pathway for carbon capture and storage. By integrating natural biopolymers with high-surface-area nanostructures, these composites enable selective CO₂ adsorption, enhanced durability, and tunable porosity. Such sustainable hybrid materials bridge the gap between environmental functionality and mechanical strength, paving the way for green solutions in construction, packaging, and energy systems.',
            images: [
              { src: focusCapture, caption: 'Fabrication of wood-CALF-20 composite'}
            ],
            publications: [
              {
               name: 'Functional Wood for Carbon Dioxide Capture',
               href: 'https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00028-0',
               authors: 'Roy, S.; Philip, F.A.; Oliveira, E.F.; Singh, G.; Joseph, S.; Yadav, R.M.; Adumbumkulath, A.; Hassan, S.; Khater, A.; Vinu, A.; Shimizu, G.; Ajayan, P.M.; Kibria, M.G.; Rahman, M. M.*',
               journal: 'Cell Reports Physical Science',
               year: 2023,
              }
            ]
          }
        ],
        
      },
      {
        id: 'carbon-based-fibers',
        title: 'Carbon Based Fibers and Composites',
        href: '/research/materials/carbon-based-fibers',
        description:
          'Our work focuses on creating sustainable, high-performance composites using carbon materials derived from low-value or clean-synthesis sources. We develop carbon fibers, graphene, and other carbon nanomaterials from waste streams such as asphaltene, and explore environmentally conscious routes for producing carbon nanotubes (CNTs) from light hydrocarbons. By integrating these carbon reinforcements into recyclable polymer matrices, we engineer tougher, stronger composites with improved interfacial performance and long-term durability.',
        projects: [
          {
            title: 'Carbon Based Fiber and Nanomaterials',
            description: 'Carbon-rich industrial residues possess significant potential as sustainable building blocks for advanced materials. By employing controlled conversion methods, including spinning, stabilization, and rapid thermal treatment, these by-products can be converted into robust carbon fibers and high-performance nanomaterials. This method facilitates the development of lightweight, thermally stable, and mechanically robust materials, while also repurposing waste streams for high-value applications, thereby enhancing economic and environmental sustainability.',
            images: [
              {src: focusCarbon4, caption: 'Flash graphene from asphaltene'},
              {src: focusCarbonfiber, caption: 'Development of carbon fibers from asphaltene'}
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
              src: focusCarbon2, caption: 'Interfaces of carbon nanotube fibers in polymer composite'
            }]
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
          'Building structural materials with full-scale strength and toughness has traditionally been a trade-off. Many attempts have failed to create a synthetic composite due to poor material design and manufacturing. However, nature develops damage-tolerant composite materials through multiple length-scale internalized designs that combine the optimized hard phase (high strength) with soft organic phases (high toughness) in a complex architecture. Drawing inspiration from complex designs of nature, our research maximizes strength and toughness in brittle materials like ceramics using bio-based soft polymers by arranging hard and soft blocks in specific combinations and using intricate geometric designs at various length scales.',
        projects: [
          {
            title: 'Damage-Tolerant Architected Ceramic',
            description: 'For centuries, ceramics have been prized for their exceptional strength and stiffness, yet their inherent brittleness has limited their use in demanding structural roles. Unlike natural systems that combine hard minerals with soft phases to prevent catastrophic failure, engineered ceramics often lack mechanisms for damage control. By creating architected ceramic structures and introducing a thin external polymer layer, brittleness can be redirected into more graceful, tolerant failure modes. This simple surface-based approach enables lightweight ceramic components that are far stronger, tougher, and more reliable than traditional counterparts.',
            images: [
              {src: focusDesign, caption: 'CT scan images of A) uncoated ceramic and B) coated ceramic under various load levels' }
            ],
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
              }
            ]
          },
          {
            title: 'Damage-Tolerant Architected Cement',
            description: 'For decades, cement has been relied on for its strong compressive performance, yet its brittleness has continued to limit structural resilience. As construction demands more adaptable and damage-tolerant materials, shaping cement into controlled architectures offers a promising path forward. By engineering printable cement inks with tailored rheology, complex geometries can be fabricated that distribute stress more efficiently and resist sudden fracture. This approach transforms conventional brittle cement into tougher, more reliable architected structures suited for modern structural and functional needs.',
            images: [
              { src: focusDesign2, caption: '3D printing of architected cement'},
              { src: focusDesign3, caption: 'Deformation resilient architected cement structure'}
            ],
            publications: [
              {
                name: 'Direct Ink Writing of Cement Structures Modified with Nanoscale Additive',
                href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adem.201801380',
                authors: 'Sajadi, S.M.; Boul, P.J.; Thaemlitz, C.; Meiyazhagan, A.K.; Puthirath, A.B.; Tiwary, C.S.; Rahman, M.M.*; Ajayan, P.M',
                journal: 'Advanced Engineering Materials',
                year: 2019,
              },
              {
                 name: '34. Deformation Resilient Cement Structures using 3D Printed Molds',
                 href: 'https://www.sciencedirect.com/science/article/pii/S2589004221001425#!',
                 authors: 'Sajadi, S. M.; Tiwari, C.S.; Rahmati, A. H.; Eichmann, S. L.; Thaemlitz, C. J.; Salpekar, D.; Puthirath, A. B.; Boul, P. J.; Rahman, M. M.*; AshokKumar, M.; Ajayan, P. M.',
                 journal: 'iScience',
                 year: 2021,
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
  }
];
