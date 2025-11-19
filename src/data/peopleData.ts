import maksud from '../../images/People_page/Maksud Rahman portrait.jpg';
import saadi from '../../images/People_page/saadi.png';
import shajed from '../../images/People_page/shajed.png';
import toffal from '../../images/People_page/tofazzal.png';
import fahad from '../../images/People_page/fahad.png';
import rifat from '../../images/People_page/rifat.png';
import mahjabin from '../../images/People_page/mahjabin.png';
import mia from '../../images/People_page/mia.png';
import chen from '../../images/People_page/chen.png';

import ali from '../../images/People_page/ali.png';


export interface Person {
  id: string;
  name: string;
  title?: string;
  image?: string;
  bio?: string;
  education?: string[];
  email?: string;
  website?: string;
  linkedin?:string;
  googlescholar?:string;
  category?: 'faculty' | 'current' | 'alumni';
}

export const people: Person[] = [
  {
    id: 'prof-rahman',
    name: 'Maksud Rahman',
    title: 'PI & Director',
    image: maksud,
    bio: 'Maksud Rahman is an Assistant Professor in the Department of Mechanical and Aerospace Engineering at the University of Houston. His research focuses on designing and manufacturing next-generation nanocomposites through advanced and additive manufacturing, with a strong emphasis on sustainability and circularity across applications in structural materials, food, textiles, energy, and the environment. He has published in leading journals such as Science Advances, Nature Communications, Advanced Materials, Advanced Functional Materials, and ACS Nano. His work has been featured by Science, Nature, BBC, New Scientist, and other major media outlets. Prof. Rahman has secured multiple federal and industrial grants, including NSF and USDA, and received the prestigious Herschel M. Rich Award at Rice University in 2020. He is also a Climate Reality Project Leader trained by former U.S. Vice President Al Gore.',
    education: [
      'Ph.D. in Fiber Science from Cornell University, NY, USA',
      'M.Sc. in Mechanical Engineering from Tuskegee University, AL, USA',
      'B.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    email: 'maksud@uh.edu',
    website: 'https://maksud-innovation-lab.netlify.app/',
    linkedin: 'https://www.linkedin.com/in/maksud-rahman-04559883/',
    googlescholar: 'https://scholar.google.com/citations?user=hky0f9UAAAAJ&hl=en',
    category: 'faculty'
  },
  {
    id: 'Shajedul Hoque',
    name: 'Shajedul Hoque',
    title: 'Postdoctoral Fellow',
    image: shajed,
    bio: 'Shajedul is a Postdoctoral Fellow in Mechanical Engineering at the University of Houston. His work focuses on advanced manufacturing of wood, drawing inspiration from natural structures to develop sustainable, high-performance materials. He completed his Ph.D. at Rice University, where he pioneered the first-ever 3D printing of wood structures using water-based inks—a breakthrough published in Science Advances and highlighted in Nature. He earned his B.Sc. in Mechanical Engineering from the Bangladesh University of Engineering and Technology (BUET), where he worked on deep learning, molecular dynamics, and nanoscale thermal transport. Driven by bio-inspired design and AI-enhanced material innovation, Shajed aims to advance sustainable manufacturing and next-generation composite materials.',
    education: [
      'Ph.D. in Materials Science and NanoEngineering from Rice University, TX, USA',
      'B.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/mdshajedulhoquethakur/',
    googlescholar:'https://scholar.google.com/citations?user=2PN5lQ8AAAAJ&hl=en&oi=ao',
    category: 'current'
  },
  {
    id: 'Tofazzal',
    name: 'Md Tofazzal Hossain',
    title: 'PhD Student',
    image: toffal,
    bio: 'Tofazzal is a Ph.D. candidate in Mechanical Engineering at the University of Houston, where he works on advanced manufacturing of biopolymer-based composites with a focus on sustainability and circularity in materials design. He is currently on study leave from his position as an Assistant Professor of Mechanical Engineering at Ahsanullah University of Science and Technology (AUST), Bangladesh. He earned his M.Sc. (2022) and B.Sc. (2017) in Mechanical Engineering from the Bangladesh University of Engineering and Technology (BUET). His earlier research spans finite-element modeling of the human left ventricle for post-AMI prognosis and CFD-based design of naturally ventilated residential buildings. Driven by the future of sustainable manufacturing, he views machine learning as a transformative tool for accelerating advancements in materials science and engineering.',
    education: [
      'M.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD',
      'B.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/mohammad-hossain-822659132/',
    googlescholar:'https://scholar.google.com/citations?user=RJ9mJk0AAAAJ&hl=en',
    category: 'current'
  },
  {
    id: 'Fahad',
    name: 'Mir Muhammad Fahad',
    title: 'PhD student',
    image: fahad,
    bio: 'Fahad is a Ph.D. student in the Department of Mechanical and Aerospace Engineering at the University of Houston, where he works on developing protein-based nanocomposite films designed to extend the shelf life of fruits—essentially creating edible, high-performance “protective coatings” for fresh produce. His background in polymer materials began with a B.Sc. in Textile Engineering from the Bangladesh University of Textiles and expanded through an M.S. in Advanced Materials Engineering for Information and Electronics at Kyung Hee University, South Korea. His research experience spans textile chemistry, polymer science, biomedical sensing, and cryopreservation. Outside the lab, Fahad enjoys late-night walks, cooking, swimming, flight simulator games, and dissecting the physics behind sci-fi movies.',
    education: [
      'M.Sc. in Advanced Materials Engineering for Information and Electronics from Kyung Hee University, South Korea',
      'B.Sc. in Textile Engineering from Bangladesh University of Textiles, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/mmfahad7430/',
    googlescholar: 'https://scholar.google.com/citations?user=JNd4HhMAAAAJ&hl=en&oi=ao',
    category: 'current'
  },
  {
    id: 'Rifat',
    name: 'Md Rifat Hossain ',
    title: 'PhD Student',
    image: rifat,
    bio: 'Rifat is a Ph.D. student in Mechanical Engineering at the University of Houston, where his research focuses on the 3D printing of polyetherimide (PEI), integrating experimental and computational methods to explore its advanced manufacturing potential. He earned his M.Sc. in Mechanical Engineering from Rensselaer Polytechnic Institute (RPI), where he developed multiscale finite-element methodologies to investigate the material behavior of fibrous biological tissues. Rifat’s work reflects a broader interest in advanced materials and manufacturing, combining modeling and experimentation to drive innovation in polymer engineering.',
    education: [
      'M.Sc. in Mechanical Engineering from Rensselaer Polytechnic Institute, NY, USA',
      'B.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/md-rifat-hossain-kawshik/',
    category: 'current'
  },
  {
    id: '<Mahjabin>',
    name: 'Mahjabin Rahman',
    title: 'PhD Student',
    image: mahjabin,
    bio: 'Mahjabin is a Ph.D. student in Mechanical Engineering at the University of Houston, where she works on developing nanocomposite films for extending the shelf life of fruits and vegetables. Her work reflects a broader interest in sustainable design and circularity within emerging material systems. She earned her M.Sc. in Industrial Engineering from the University of Pittsburgh, where she served as a Circular Economy Fellow studying end-of-life photovoltaic (PV) solar panels. Her research examined recycling processes, material recovery, and system-level strategies to reduce environmental impact. Motivated by sustainability-driven innovation, Mahjabin integrates systems-level industrial engineering perspectives with experimental materials research to promote efficient, circular, and environmentally responsible technologies.',
    education: [
      'M.Sc. in Industrial Engineering from University of Pittsburgh, PA, USA',
      'B.Sc. in Industrial and Production Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/mahjabin-rahman-663306116/',
    googlescholar:'https://scholar.google.com/citations?user=jOhgz7AAAAAJ&hl=en&oi=ao',
    category: 'current'
  },
  {
    id: 'Saadi',
    name: 'M.A.S.R. Saadi',
    title: 'PhD Student (Rice University)',
    image: saadi,
    bio: 'Saadi is a Ph.D. student in Materials Science and NanoEngineering at Rice University, where he works on developing sustainable bionanocomposites for multifunctional applications across the energy, environment, and food nexus. His work focuses on hierarchically assembled 1D and 2D nanosystems integrated into carbohydrate- and protein-based matrices. He completed his B.S. in Materials and Metallurgical Engineering at the Bangladesh University of Engineering and Technology (BUET), studying how multiscale reinforcement particle size influences the mechanical and thermal behavior of polymer composites. He later earned his M.S. in Mechanical and Aerospace Engineering from George Washington University, where he worked on the nanomechanics and electronic structures of organic photovoltaics and 2D materials. In addition to his research, Saadi has a passion for singing Metal, Rock, and Bengali Folk music. He also enjoys playing table tennis, soccer, and FIFA.',
    education: [
      'M.Sc. in Mechanical and Aerospace Engineering from George Washington University, DC, USA',
      'B.Sc. in Materials and Metallurgical Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/m-a-s-r-saadi-b15a691a9/',
    googlescholar: 'https://scholar.google.com/citations?user=Emevh2EAAAAJ&hl=en&oi=ao',
    category: 'current'
  },
  {
    id: 'Chen',
    name: 'Chen Shi',
    title: 'PhD Student (Rice University)',
    image: chen,
    bio: 'Chen is a Ph.D. student in Materials Science and NanoEngineering at Rice University, where he works on developing structures from carbon nanotube.',
    education: [
      
    ],
    linkedin: '',
    googlescholar: '',
    category: 'current'
  },
  {
    id: 'Mia',
    name: 'Mia Rodriguez ',
    title: 'Undergraduate Researcher',
    image: mia,
    bio: 'Mia Rodriguez is a junior majoring in Mechanical Engineering at the University of Houston, with growing interests in bio-inspired design and the intersection of engineering and the natural world. She has experience in CAD, MATLAB, and Arduino systems and is eager to apply her skills to research in advanced materials and sustainable design.',
    education: [
      'B.Sc. in Mechanical Engineering at University of Houston, TX, USA'
    ],
    category: 'current'
  },
  {
    id: 'Ali',
    name: 'Ali Z. Khater',
    title: 'The Aerospace Corporation',
    image: ali,
    bio: '',
    education: [
    ],
    category: 'alumni'
  }
];