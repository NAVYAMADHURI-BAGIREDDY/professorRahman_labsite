import maksud from '../../images/People_page/Maksud Rahman portrait.jpg';
import saadi from '../../images/People_page/saadi.png';
import shajed from '../../images/People_page/shajed.png';
import toffal from '../../images/People_page/tofazzal.png';
import rifat from '../../images/People_page/rifat.png';
import mahjabin from '../../images/People_page/mahjabin.png';
import mia from '../../images/People_page/mia.png';
import chen from '../../images/People_page/chen.png';
import sif from '../../images/People_page/sif.png';
import julie from '../../images/People_page/julie.png';
import zahin from '../../images/People_page/zahin.png';
import evan from '../../images/People_page/evan.png';


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
      'Ph.D. in Fiber Science, Cornell University, NY, USA',
      'M.Sc. in Mechanical Engineering, Tuskegee University, AL, USA',
      'B.Sc. in Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    email: 'maksud@uh.edu',
    website: 'https://maksud-innovation-lab.netlify.app/',
    linkedin: 'https://www.linkedin.com/in/maksud-rahman-04559883/',
    googlescholar: 'https://scholar.google.com/citations?user=hky0f9UAAAAJ&hl=en',
    category: 'faculty'
  },
  {
    id: 'Tofazzal',
    name: 'Md Tofazzal Hossain',
    title: 'PhD Student',
    image: toffal,
    bio: 'Tofazzal is a Ph.D. candidate in Mechanical Engineering at the University of Houston, where he works on advanced manufacturing of biopolymer-based composites with a focus on sustainability and circularity in materials design. He is currently on study leave from his position as an Assistant Professor of Mechanical Engineering at Ahsanullah University of Science and Technology (AUST), Bangladesh. He earned his M.Sc. (2022) and B.Sc. (2017) in Mechanical Engineering from the Bangladesh University of Engineering and Technology (BUET). His earlier research spans finite-element modeling of the human left ventricle for post-AMI prognosis and CFD-based design of naturally ventilated residential buildings. Driven by the future of sustainable manufacturing, he views machine learning as a transformative tool for accelerating advancements in materials science and engineering.',
    education: [
      'M.Sc. in Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD',
      'B.Sc. in Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/mohammad-hossain-822659132/',
    googlescholar:'https://scholar.google.com/citations?user=RJ9mJk0AAAAJ&hl=en',
    category: 'current'
  },
  {
    id: 'Rifat',
    name: 'Md Rifat Hossain',
    title: 'PhD Student',
    image: rifat,
    bio: 'Rifat is a Ph.D. student in Mechanical Engineering at the University of Houston, where his research focuses on the 3D printing of polyetherimide (PEI), integrating experimental and computational methods to explore its advanced manufacturing potential. He earned his M.Sc. in Mechanical Engineering from Rensselaer Polytechnic Institute (RPI), where he developed multiscale finite-element methodologies to investigate the material behavior of fibrous biological tissues. Rifat’s work reflects a broader interest in advanced materials and manufacturing, combining modeling and experimentation to drive innovation in polymer engineering.',
    education: [
      'M.Sc. in Mechanical Engineering, Rensselaer Polytechnic Institute, NY, USA',
      'B.Sc. in Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
    ],
    linkedin: 'https://www.linkedin.com/in/md-rifat-hossain-kawshik/',
    category: 'current'
  },
  {
    id: 'Mahjabin',
    name: 'Mahjabin Rahman',
    title: 'PhD Student',
    image: mahjabin,
    bio: 'Mahjabin is a Ph.D. student in Mechanical Engineering at the University of Houston, where she works on developing nanocomposite films for extending the shelf life of fruits and vegetables. Her work reflects a broader interest in sustainable design and circularity within emerging material systems. She earned her M.Sc. in Industrial Engineering from the University of Pittsburgh, where she served as a Circular Economy Fellow studying end-of-life photovoltaic (PV) solar panels. Her research examined recycling processes, material recovery, and system-level strategies to reduce environmental impact. Motivated by sustainability-driven innovation, Mahjabin integrates systems-level industrial engineering perspectives with experimental materials research to promote efficient, circular, and environmentally responsible technologies.',
    education: [
      'M.Sc. in Industrial Engineering, University of Pittsburgh, PA, USA',
      'B.Sc. in Industrial and Production Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
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
      'M.Sc. in Mechanical and Aerospace Engineering, George Washington University, DC, USA',
      'B.Sc. in Materials and Metallurgical Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, BD'
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
    linkedin: 'https://www.linkedin.com/in/chen-shi-027810250/',
    googlescholar: '',
    category: 'current'
  },
  {
    id: 'Sif',
    name: 'Sif Eddine JABOR TLEMCANI',
    title: 'MSc Student',
    image: sif,
    bio: 'Sif Eddine is an Erasmus master student at TU Darmstadt and INP-UGA Phelma. He is currently completing his MS thesis research at the University of Houston, where his work focuses on the 3D printing of cellulose-based bio-nanocomposites for CO2 capture. His academic and research background spans the U.S., Europe, and Morocco, with a core technical focus on materials science, polymers, cellulose, and sustainable solutions for environmental applications. Previously, Sif Eddine worked as a Research Assistant and R&D Intern at Mohammed VI Polytechnic University in Morocco. There, he specialized in cellulose nanocrystals and sustainable packaging as an alternative to single-use plastics, as well as the formulation of biopolymer materials for direct carbon capture. He is deeply motivated by sustainability, innovation, and entrepreneurship.',
    education: [
      'M.Sc. in Erasmus Mundus (Functional Advanced Materials Engineering with Artificial Intelligence for Sustainability), Technical University of Darmstadt, Germany and Grenoble INP-UGA Phelma, France',
      'M.Sc. in Materials Science and Engineering, Mohammed VI Polytechnic University, Benguerir, Morocco',
    ],
    linkedin: 'https://www.linkedin.com/in/sif-eddine-jabor-tlemcani-243a75154/',
    googlescholar: 'https://scholar.google.com/citations?user=Os-b4ZwAAAAJ&hl=fr',
    category: 'current'
  },
  {
    id: 'Mia',
    name: 'Mia Rodriguez',
    title: 'Undergraduate Researcher',
    image: mia,
    bio: 'Mia Rodriguez is a junior majoring in Mechanical Engineering at the University of Houston, with growing interests in bio-inspired design and the intersection of engineering and the natural world. She has experience in CAD, MATLAB, and Arduino systems and is eager to apply her skills to research in advanced materials and sustainable design.',
    education: [
      'B.Sc. in Mechanical Engineering, University of Houston, TX, USA'
    ],
    category: 'current'
  },
  {
    id: 'Julie',
    name: 'Julissa Garcia',
    title: 'Undergraduate Researcher',
    image: julie,
    bio: 'Julissa Garcia is a junior Mechanical Engineering student at the University of Houston’s Cullen College of Engineering. She serves as a Cullen College Student Ambassador and Outreach Officer, representing the college and supporting outreach initiatives. She is also the Servium Officer for the Catholic student organization, coordinating volunteer service efforts for individuals and communities in need. Her contribution to the lab is focused on the development and characterization of sustainable, bio-based composite materials.',
    education: [
      'B.Sc. in Mechanical Engineering, University of Houston, TX, USA'
    ],
    category: 'current'
  },
  {
    id: 'Zahin',
    name: 'Zahin Nanjiba',
    title: 'Undergraduate Researcher',
    image: zahin,
    bio: 'Zahin Nanjiba is a Mechanical Engineering student at the University of Houston. She has experience with CAD and MATLAB through her coursework and is interested in manufacturing, 3D Printing, and how things are designed and made in real world engineering systems.',
    education: [
      'B.Sc. in Mechanical Engineering, University of Houston, TX, USA'
    ],
    linkedin: 'https://www.linkedin.com/in/zahin-nanjiba-68794527a/',
    category: 'current'
  },
   {
    id: 'Evan',
    name: 'Evan Matthews',
    title: 'Undergraduate Researcher',
    image: evan,
    bio: 'Evan Matthews is currently pursuing a B.S. in Mechanical Engineering at the University of Houston. He focuses on applying engineering analysis to real-world design challenges. His experience includes CAD modeling, MATLAB-based computation, and FDM prototyping, and he is committed to continuously strengthening his technical expertise while contributing to innovative and impactful research.',
    education: [
      'B.Sc. in Mechanical Engineering, University of Houston, TX, USA'
    ],
    category: 'current'
  },
  {
    id: 'Shajedul Hoque',
    name: 'Shajedul Hoque',
    title: 'King Fahd University of Petroleum and Minerals',
    image: shajed,
    bio: 'https://sites.google.com/view/mdshajedulhoque',
    education: [
      'Ph.D. in Materials Science and NanoEngineering, Rice University, TX, USA'
    ],
    linkedin: 'https://www.linkedin.com/in/mdshajedulhoquethakur/',
    googlescholar:'https://scholar.google.com/citations?user=2PN5lQ8AAAAJ&hl=en&oi=ao',
    category: 'alumni'
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