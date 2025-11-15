import pub1 from '../../images/Publications/01.jpg';
import pub2 from '../../images/Publications/02.jpg';
import pub3 from '../../images/Publications/03.gif';
import pub4 from '../../images/Publications/04.gif';
import pub5 from '../../images/Publications/05.jpg';
import pub6 from '../../images/Publications/06.jpg';
import pub7 from '../../images/Publications/07.jpg';
import pub8 from '../../images/Publications/08.gif';
import pub9 from '../../images/Publications/09.jpg';
import pub10 from '../../images/Publications/10.jpg';
import pub11 from '../../images/Publications/11.jpg';
import pub12 from '../../images/Publications/12.jpg';
import pub13 from '../../images/Publications/13.jpg';
import pub14 from '../../images/Publications/14.png';
import pub15 from '../../images/Publications/15.png';
import pub16 from '../../images/Publications/16.jpg';
import pub17 from '../../images/Publications/17.jpg';
import pub18 from '../../images/Publications/18.jpg';
import pub19 from '../../images/Publications/19.jpg';
import pub20 from '../../images/Publications/20.png';
import pub21 from '../../images/Publications/21.jpg';
import pub22 from '../../images/Publications/22.jpg';
import pub23 from '../../images/Publications/23.jpg';
import pub24 from '../../images/Publications/24.jpg';
import pub25 from '../../images/Publications/25.jpg';
import pub26 from '../../images/Publications/26.gif';
import pub27 from '../../images/Publications/27.jpg';
import pub28 from '../../images/Publications/28.jpg';
import pub29 from '../../images/Publications/29.jpg';
import pub30 from '../../images/Publications/30.jpg';
import pub31 from '../../images/Publications/31.jpg';
import pub32 from '../../images/Publications/32.jpg';
import pub33 from '../../images/Publications/33.jpg';
import pub34 from '../../images/Publications/34.png';
import pub35 from '../../images/Publications/35.gif';
import pub36 from '../../images/Publications/36.jpg';
import pub37 from '../../images/Publications/37.png';
import pub38 from '../../images/Publications/38.jpg';
import pub39 from '../../images/Publications/39.jpg';
import pub40 from '../../images/Publications/40.jpg';
import pub41 from '../../images/Publications/41.jpg';
import pub42 from '../../images/Publications/42.jpg';
import pub43 from '../../images/Publications/43.jpg';
import pub44 from '../../images/Publications/44.jpg';
import pub45 from '../../images/Publications/45.jpg';
import pub46 from '../../images/Publications/46.jpg';
import pub47 from '../../images/Publications/47.jpg';
import pub48 from '../../images/Publications/48.jpg';
import pub49 from '../../images/Publications/49.jpg';
import pub50 from '../../images/Publications/50.jpg';
import pub51 from '../../images/Publications/51.jpg';
import pub52 from '../../images/Publications/52.jpg';
import pub53 from '../../images/Publications/53.jpg';
import pub54 from '../../images/Publications/54.jpg';
import pub55 from '../../images/Publications/55.jpg';
import pub56 from '../../images/Publications/56.jpg';
import pub57 from '../../images/Publications/57.jpg';
import pub60 from '../../images/Publications/60.jpg';
import pub61 from '../../images/Publications/61.jpg';
import pub62 from '../../images/Publications/62.jpg';
import pub63 from '../../images/Publications/63.gif';
import pub64 from '../../images/Publications/64.jpg';
import pub65 from '../../images/Publications/65.jpg';
import pub66 from '../../images/Publications/66.jpg';
import pub67 from '../../images/Publications/67.jpg';
import pub68 from '../../images/Publications/68.jpg';
import pub69 from '../../images/Publications/69.jpg';
import pub70 from '../../images/Publications/70.jpg';
import pub71 from '../../images/Publications/71.webp';
import pub72 from '../../images/Publications/72.jpeg';
import pub73 from '../../images/Publications/73.png';
import pub74 from '../../images/Publications/74.jpg';
import pub75 from '../../images/Publications/75.png';

export interface JournalArticle {
  id: string;              // Unique identifier (UUID or string)
  title: string;           // Title of the journal article
  link: string;            // External link (e.g., DOI or full text)
  authors: string;         // Author list (as a single string or array)
  conference: string;      // Conference or journal name
  year: number;            // Publication year
  image?: string;
}

export const journalArticles: JournalArticle[] = [
  {
    id: 'pub73',
    title: '73. Polymer Derived and Ni-Single Atom Doped Carbon Nanofibers for CO2 Capture and Electroreduction to CO',
    link: 'https://doi.org/10.1002/cssc.202500602',
    authors: 'Shilpa, S.; Yuan, F.; Li, Z.; Dahiya, P.; Mata, A.C.; Yadav, R.M.; Gao, G.; Hung, S.F.; Khan, S.A.; Wu, J.; Rahman, M.M.; Roy, S*',
    conference: 'Chem Sus Chem',
    year: 2025,
    image: pub75
  },
  {
    id: 'pub72',
    title: '72. Flow-induced 2D nanomaterials intercalated aligned bacterial cellulose',
    link: 'https://doi.org/10.1038/s41467-025-60242-1',
    authors: 'Saadi, M.A.S.R.; Cui, Y.; Bhakta, S.P.; Hassan, Sakib; Harikrishnan, V.; Siqueira,  I.R.; Pasquali, M.; Bennett, M.; Ajayan, P.M.; Rahman, M.R.*',
    conference: 'Nature Communications',
    year: 2025,
    image: pub74
  },
  {
    id: 'pub71',
    title: '71. Macroscale ceramic origami structures with hyper-elastic coating',
    link: 'https://doi.org/10.1007/s42114-025-01284-3',
    authors: 'Thakur, M.S.H.; Nath, M.D.; Paulino, G.H.; Ajayan, P.M.; Rahman, M.M.*',
    conference: 'Advanced Composites and Hybrid Materials',
    year: 2025,
    image: pub73
  },
  {
    id: 'pub70',
    title: '70. Hexagonal Boron Nitride reinforced quick-setting multifunctional cement',
    link: 'https://doi.org/10.1093/oxfmat/itaf002',
    authors: 'Harikishan, V.; Islam, Md.; Herkel, S.; Meng, W.; Nagarajaiah, S.; Khater, A.; Johnson, K.; Boul, P.; Lou, M.; Rahman, M.M.*; Ajayan, P.M',
    conference: 'Oxford Open Materials Science',
    year: 2025,
    image: pub72
  },
  {
    id: 'pub69',
    title: '69. Direct Ink Writing of Metals, Multi-metals, and Metal/Non-metal Interfaces',
    link: 'https://doi.org/10.1007/s10853-024-10340-0',
    authors: 'Sajadi, M.S.; Das, R.; Thakur, M.S.H.; Boul, P.; Rahman, M. M.*; Tiwary, C.S.; Ajayan, P.M.',
    conference: 'Journal of Materials Science',
    year: 2025,
    image: pub71
  },
  {
    id: 'pub68',
    title: '68. A General Simulation based Study on Printability of Inks in Direct Ink Writing',
    link: 'https://www.nature.com/articles/s41598-024-74058-4',
    authors: 'Sourov, M.A.; Emu, S.I.; Thakur, M.S.H.; Morshed, A., Rahman, M.M*',
    conference: 'Scientific Reports',
    year: 2025,
    image: pub70
  },
  {
    id: 'pub67',
    title: '67. Graphene-coated nickel in biological environments: role of structural defects',
    link: 'https://doi.org/10.1039/D4NR00280F',
    authors: 'Devadig, R.; Sigdel, P.; Rahman, Md.; Ajayan, P. M.; Rahman, M.M.*; Gadhamshetty, V.',
    conference: 'Nanoscale',
    year: 2024,
    image: pub69
  },
  {
    id: 'pub66',
    title: '66. Three-dimensional Printing of Wood',
    link: 'https://doi.org/10.1126/sciadv.adk3250',
    authors: 'Thakur, M.S.H.; Shi, C.; Logan, K.; Saadi, M.A.S.R.; Naskar, A.; Ajayan, P.M.; Rahman, M.M.*',
    conference: 'Science Advances',
    year: 2024,
    image: pub68
  },
  {
    id: 'pub65',
    title: '65. Preserving fresh eggs via egg-derived bio-nanocomposite coating',
    link: 'https://doi.org/10.1002/adfm.202310091',
    authors: 'Zinke, A.; Pottackal, N.; Zahin, F.; Nur, I.; Ahmed, F.; ji, Y.; Mohammed, Z.; Meyer, M.D.; Miller, C.; Bennett, M.; Rangari, V.; Meredith, J.; Ajayan, P.M.; Rahman, M.M.*',
    conference: 'Advanced Functional Materials',
    year: 2024,
    image: pub67
  },
  {
    id: 'pub64',
    title: '64. Tuning Dielectric Properties with Nanofiller Dimensionality in Polymer Nanocomposites',
    link: 'https://doi.org/10.1021/acsami.4c16329',
    authors: 'Likhi, F.H.; Singh, M.; Potdukhe, H.; Ajayan, P.M.; Rahman, M.M.; Karim, A',
    conference: 'ACS Applied Materials and Interfaces',
    year: 2024,
    image: pub66
  },
  {
    id: 'pub63', 
    title: '63. Algae-derived nacre-like dielectric bionanocomposite with high loading hexagonal boron nitride for green electronics', 
    link: 'https://doi.org/10.1021/acsnano.4c09365', 
    authors: 'Saadi, M.A.S.R.; Likhi, F.H.; Zahin, F.; Yuan, Y.; Karim, A.; Ajayan, P.M.; Rahman, M.M.*', 
    conference: 'ACS Nano',
    year: 2024, 
    image: pub65
  },
  {
    id: 'pub62',
    title: '62. Fluorinated 2D conjugated porous organic polymer films with modular structural topology for controlled molecular sieving',
    link: 'https://doi.org/10.1039/D4TA04342A',
    authors: 'Gayle, J.; Hardian, R.; Guo, G.; Wang, X.; Rahman, M.M.; Verduzco, R.; Vajtai, R.; Ajayan, P.M.; Roy, S.; Szekely, G',
    conference: 'Journal of Materials Chemistry A',
    year: 2024,
    image: pub64
  },
  {
    id: 'pub61',
    title: '61. Development of asphaltene-derived carbon fiber reinforced composites via additive manufacturing',
    link: 'https://doi.org/10.1016/j.carbon.2024.119413',
    authors: 'Akash, N.M.; Saad, S.; Bari, M.A.A.; Sarker, R.; Gupta, C.; Sarabi, G.A.; Phani, A.; Zahin, F.; Tabassum, S.; Subramanian, K.; Kim, S.; Rahman, M.M.; Egberts, P.; Kibria, M.G',
    conference: 'Carbon',
    year: 2024,
    image: pub63
  },
  {
    id: 'pub60',
    title: '60. Process optimization, techno-economic analysis, and environmental impact assessment of producing soy protein isolate-cellulose nanocrystal coating solution for increasing fruit’s shelf-life',
    link: 'https://doi.org/10.1016/j.indcrop.2024.118213',
    authors: 'Naveenkumar, R.; Prakash, N.; Rahman, M.M.; Troy, R',
    conference: 'Industrial Crops and Products',
    year: 2024,
    image: pub62
  },
  {
    id: 'pub59',
    title: '59. Economic and Environmental Assessment of Asphaltene-derived Carbon Fiber Production',
    link: 'https://doi.org/10.1039/D3GC01573D',
    authors: 'Bari, M.A.A.; Nabil, S.; Saad, S.; Sarkar, R.; Sabiha, S.; Rahman, M.M.; Kibria, Md',
    conference: 'Green Chemistry',
    year: 2023,
    image: pub61
  },
  {
    id: 'pub58',
    title: '58. Processing Dynamics of Carbon Nanotube–Epoxy Nanocomposites during 3D Printing',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101617',
    authors: 'Khater, A.; Saadi, M. A. S. R.; Bhattacharyya, S.; Kutana, A.; Tripathi, M.; Kamble, M.; Song, S.; Lou, M.; Barnes, M.; Meyer, M.; Harikrishnan, V.; Dalton, A. B.; Koratkar, N.; Tiwary, C. S.; Boul, P. J.; Yakobson, B.; Zhu, H.; Ajayan, P. M.; Rahman, M.M.*',
    conference: 'Cell Reports Physical Science',
    year: 2023,
    image: pub60
  },
  {
    id: 'pub57',
    title: '57. Functional Wood for Carbon Dioxide Capture',
    link: 'https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00028-0',
    authors: 'Roy, S.; Philip, F.A.; Oliveira, E.F.; Singh, G.; Joseph, S.; Yadav, R.M.; Adumbumkulath, A.; Hassan, S.; Khater, A.; Vinu, A.; Shimizu, G.; Ajayan, P.M.; Kibria, M.G.; Rahman, M. M.*',
    conference: 'Cell Reports Physical Science',
    year: 2023,
    image: pub57
  },
  {
    id: 'pub56',
    title: '56. Graphene as Thinnest Coating on Copper Electrodes in Microbial Methanol Fuel Cells',
    link: 'https://pubs.acs.org/doi/10.1021/acsnano.2c05512',
    authors: 'Islam, J.; Obulisamy, P.K.; Upadhyayula, V.K.K.; Dalton, A.B.; Ajayan, P.M.; Rahman, M. M.*; Tripathi, M.; Sani, R.; Gadhamshetty, V.',
    conference: 'ACS Nano',
    year: 2023,
    image: pub56
  },
  {
    id: 'pub55',
    title: '55. 3D printed metamaterials for Damping Enhancement and Vibration Isolation: Schwarzites',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0888327022008871',
    authors: 'Herkal, S.; Rahman, M. M.*; Nagarajah, S.; Harikrishnan, V, Ajayan, P. M.',
    conference: 'Mechanical Systems and Signal Processing',
    year: 2023,
    image: pub55
  },
  {
    id: 'pub54',
    title: '54. Solvent induced incremental pore collapse in two-dimensional covalent organic frameworks',
    link: 'https://pubs.acs.org/doi/10.1021/acsmaterialslett.2c00672',
    authors: 'Zhu, D.; Yan, Q.; Zhu, Y.; Ajnsztajn, A.; Rahman, M. M.; Ajayan, P.M.; Verduzco, R.',
    conference: 'ACS Materials Letter',
    year: 2022,
    image: pub54
  },
  {
    id: 'pub53',
    title: '53. Sustainable Valorization of Asphaltene via Flash Joule Heating',
    link: 'https://www.science.org/doi/10.1126/sciadv.add3555',
    authors: 'Saadi, M.A.S.R.; Advincula, P.A.; Thakur, M.S.H.; Khater, A.; Saad, S.; Zeraati, A.s.; Nabil, S.K.; Zinke, A.; Roy, S.; Lou, M.; Bheemasetti, S.N.; Bari, M.A.A.; Zheng, Y.; Beckham, J.L.; Gadhamshetty, V.; Vashisth, A.; Kibria, M.G.; Tour, J.M.; Ajayan, P.M.; Rahman, M. M.',
    conference: 'Science Advances',
    year: 2022,
    image: pub53
  },
  {
    id: 'pub52',
    title: '52. Zero-crossover electrochemical CO2 reduction to ethylene with coproduction of valuable chemicals',
    link: 'https://www.sciencedirect.com/science/article/pii/S2667109322003360',
    authors: 'Khan, M.A.; Nabil, S.K.; Al-Attas, T.; Yasri, N.G..; Roy, S.; Rahman, M.M.; Larter, S.; Ajayan, P.M.; Hu, J.; Kibria, M.G',
    conference: 'Chem Catalysis',
    year: 2022,
    image: pub52
  },
  {
    id: 'pub51',
    title: '51. Understanding fragility and engineering activation stability in two-dimensional covalent organic frameworks',
    link: 'https://doi.org/10.1039/D2SC03489A',
    authors: 'Zhu, D.; Zhang, J.-J.; Wu, X.; Yan, Q.; Liu, F.; Zhu, Y.; Gao, X.; M. Rahman, M.; I. Yakobson, B.; M. Ajayan, P.; Verduzco, R.',
    conference: 'Chemical Science',
    year: 2022,
    image: pub51
  },
  {
    id: 'pub50',
    title: '50. 3D Printed Materials in Water Treatment Applications',
    link: 'https://doi.org/10.1002/adsu.202100282',
    authors: 'Ghosal, P.; Gupta, B.; Ambekar, R. S.; Rahman, M. M.; Ajayan, P. M.; Aich, N.; Gupta, A. K.; Tiwary, C. S.',
    conference: 'Advanced Sustainable Systems',
    year: 2022,
    image: pub50
  },
  {
    id: 'pub49',
    title: '49. Direct Ink Writing: A 3D Printing Technology for Diverse Materials',
    link: 'https://doi.org/10.1002/adma.202108855',
    authors: 'Saadi, M. a. S. R.; Maguire, A.; Pottackal, N. T.; Thakur, M. S. H.; Ikram, M. Md.; Hart, A. J.; Ajayan, P. M.; Rahman, M. M.',
    conference: 'Advanced Materials',
    year: 2022,
    image: pub49
  },
  {
    id: 'pub48',
    title: '48. Oxygen Reduction Reaction with Manganese Oxide Nanospheres in Microbial Fuel Cells',
    link: 'https://doi.org/10.1021/acsomega.1c06950',
    authors: 'Vemuri, B.; Chilkoor, G.; Dhungana, P.; Islam, J.; Baride, A.; Koratkar, N.; Ajayan, P. M.; Rahman, M. M.; Hoefelmeyer, J. D.; Gadhamshetty, V.',
    conference: 'ACS Omega',
    year: 2022,
    image: pub48
  },
  {
    id: 'pub47',
    title: '47. Transformation of petroleum asphaltenes to carbon fibers',
    link: 'https://doi.org/10.1016/j.carbon.2022.01.011',
    authors: 'Saad, S.; Zeraati, A. S.; Roy, S.; Shahriar Rahman Saadi, M. A.; Radović, J. R.; Rajeev, A.; Miller, K. A.; Bhattacharyya, S.; Larter, S. R.; Natale, G.; Sundararaj, U.; Ajayan, P. M.; Rahman, M. M.; Kibria, M. G.',
    conference: 'Carbon',
    year: 2022,
    image: pub47
  },
  {
    id: 'pub46',
    title: '46. Corrosion Resistance of Sulfur-Selenium Alloy Coatings',
    link: 'https://doi.org/10.1002/adma.202104467',
    authors: 'Susarla, S.; Chilkoor, G.; Cui, Y.; Arif, T.; Tsafack, T.; Puthirath, A.B.; Sudeep, P. M.; Kalimuthu, J. R.; Hassan, A.; Castro-Pardo, S.; Barnes, M.; Verduzco, R.; Filleter, T.; Koratkar, N.; Gadhamshetty, V.; Rahman, M. M.*; Ajayan, P. M.',
    conference: 'Advanced Materials',
    year: 2021,
    image: pub46
  },
  {
    id: 'pub45',
    title: '45. Structure, Properties and Applications of Two‐Dimensional Hexagonal Boron Nitride',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adma.202101589',
    authors: 'S. Roy, X. Zhang, A. B. Puthirath, A. Meiyazhagan, S. Bhattacharyya, M. M. Rahman, G. Babu, S. Susarla, S. K. Saju, M. K. Tran, L. M. Sassi, M. a. S. R. Saadi, J. Lai, O. Sahin, S. M. Sajadi, B. Dharmarajan, D. Salpekar, N. Chakingal, A. Baburaj, X. Shuai, A. Adumbumkulath, K. A. Miller, J. M. Gayle, A. Ajnsztajn, T. Prasankumar, V. V. J. Harikrishnan, V. Ojha, H. Kannan, A. Z. Khater, Z. Zhu, S. A. Iyengar, P. A. da S. Autreto, E. F. Oliveira, G. Gao, A. G. Birdwell, M. R. Neupane, T. G. Ivanov, J. Taha-Tijerina, R. M. Yadav, S. Arepalli, R. Vajtai, P. M. Ajayan',
    conference: 'Advanced Materials',
    year: 2021,
    image: pub45
  },
  {
    id: 'pub44',
    title: '44. Graphene Confers Ultralow Friction on Nanogear Cogs',
    link: 'https://doi.org/10.1002/smll.202104487',
    authors: 'A. Mescola, G. Paolicelli, S. P. Ogilvie, R. Guarino, J. G. McHugh, A. Rota, E. Iacob, E. Gnecco, S. Valeri, N. M. Pugno, V. Gadhamshetty, M. M. Rahman, P. Ajayan, A. B. Dalton, M. Tripathi',
    conference: 'Small',
    year: 2021,
    image: pub44
  },
  {
    id: 'pub43',
    title: '43. Corrosion Resistance of Sulfur–Selenium Alloy Coatings',
    link: 'https://doi.org/10.1002/adma.202104467',
    authors: 'Susarla, S.; Chilkoor, G.; Kalimuthu, J. R.; Saadi, M. a. S. R.; Cui, Y.; Arif, T.; Tsafack, T.; Puthirath, A. B.; Sigdel, P.; Jasthi, B.; Sudeep, P. M.; Hu, L.; Hassan, A.; Castro-Pardo, S.; Barnes, M.; Roy, S.; Verduzco, R.; Kibria, M. G.; Filleter, T.; Lin, H.; Solares, S. D.; Koratkar, N.; Gadhamshetty, V.; Rahman, M. M.; Ajayan, P. M.',
    conference: 'Advanced Materials',
    year: 2021,
    image: pub43
  },
  {
    id: 'pub42',
    title: '42. Patterning, Transfer, and Tensile Testing of Covalent Organic Frameworks Films with Nanoscale Thickness',
    link: 'https://doi.org/10.1021/acs.chemmater.1c01179',
    authors: 'Zhu, D.; Hu, Z.; Rogers, T.; Barnes, M.; Tseng, C.; Mei, H.; Sassi, L.; Zhang, Z.; Rahman, M. M.; Ajayan, P. M.; Verduzco, R',
    conference: 'Chemistry of Materials',
    year: 2021,
    image: pub42
  },
  {
    id: 'pub41',
    title: '41. Pure Crystalline Covalent Organic Framework Aerogels',
    link: 'https://doi.org/10.1021/acs.chemmater.1c01747',
    authors: 'Zhu, D.; Zhu, Y.; Yan, Q.; Liu, F.; Yu, P.; Tseng, C.; Tjahjono, N.; Huang, P.; Rahman, M.M.; Egap, E.; Ajayan, P; Verduzco, R.',
    conference: 'Chemistry of Materials',
    year: 2021,
    image: pub41
  },
  {
    id: 'pub40',
    title: '40. Covalent Organic Frameworks for Batteries',
    link: 'https://doi.org/10.1002/adfm.202100505',
    authors: 'Zhu, D.; Xu, G.; Barnes, M.; Zhang, Z.; Zhang, J.; Li, Y.; Khalil, S.; Rahman, M. M.*; Verduzco, R.; Ajayan, P. M.',
    conference: 'Advanced Functional Materials',
    year: 2021,
    image: pub40
  },
  {
    id: 'pub39',
    title: '39. Seawater Splitting for Hydrogen Production: A Solution Looking for a Problem?',
    link: 'https://doi.org/10.1039/D1EE00870F',
    authors: 'Khan, M.A.; Al-Attas, Tareq; Roy, S.; Rahman, M. M.; Ghaffour, N.; Thangadurai, V.; Larter, S.; Hu, J.; Ajayan, P.M.; Kibria, M.G.',
    conference: 'Energy & Environmental Science',
    year: 2021,
    image: pub39
  },
  {
    id: 'pub38',
    title: '38. Rapid, ambient temperature synthesis of imine covalent organic frameworks catalyzed by transition metal nitrates',
    link: 'https://doi.org/10.1021/acs.chemmater.1c00737',
    authors: 'Zhu, D.; Zhang, Z.; Li, Y.; Barnes, M.; Khalil, S.; Rahman, M.M.; Ajayan, P.M.; Verduzco, R',
    conference: 'Chemistry of Materials',
    year: 2021,
    image: pub38
  },
  {
    id: 'pub37',
    title: '37. Fiber Reinforced Monolithic Supercapacitor with Interdigitated Interfaces',
    link: 'https://pubs.rsc.org/en/content/articlelanding/2021/ta/d1ta00424g/unauth',
    authors: 'Yuan, F.; Salpekar, D.; Baburaj, A.; Hasan, S.; Putirath, A. B.; Saadi, M.A.S.R.; Robles, F.C.; Robetzazi, H.; Roy, S.; Sun, D.; Kotov, N.A.; Rahman, M. M.*; Ajayan, P. M.',
    conference: 'Journal of Materials Chemistry A',
    year: 2021,
    image: pub37
  },
  {
    id: 'pub36',
    title: '36. Damage-tolerant 3D Printed Ceramics via Conformal Coating',
    link: 'https://advances.sciencemag.org/content/7/28/eabc5028',
    authors: 'Sajadi, S. M.; Vásárhelyi, L.; Mousavi, R. Rahmati, A. H.; Kónya, Z.; Kukovecz, A.; Arif, T.; Filleter, T.; Vajtai, R.; Tiwary, C. S.; Rahman, M. M.*, Ajayan, P. M.',
    conference: 'Science Advances',
    year: 2021,
    image: pub36
  },
  {
    id: 'pub35',
    title: '35. Three-dimensional Printing of Complex Graphite Structures',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0008622321004978',
    authors: 'Sajadi, S. M.; Enayat, S.; Vásárhelyi, L.; Alabastri, A.; Lou, M.; Sassi, L.M.; Kutana, A.; Bhowmick, S.; Durante, C.; Kukovecz, A.; Puthirath, A. B.; Kónya, Z.; Vajtai, R.; Boul, P.; Tiwary, C. S.; Rahman, M. M.*, Ajayan, P. M.',
    conference: 'Carbon',
    year: 2021,
    image: pub35
  },
  {
    id: 'pub34',
    title: '34. Deformation Resilient Cement Structures using 3D Printed Molds',
    link: 'https://www.sciencedirect.com/science/article/pii/S2589004221001425#!',
    authors: 'Sajadi, S. M.; Tiwari, C.S.; Rahmati, A. H.; Eichmann, S. L.; Thaemlitz, C. J.; Salpekar, D.; Puthirath, A. B.; Boul, P. J.; Rahman, M. M.*; AshokKumar, M.; Ajayan, P. M.',
    conference: 'iScience',
    year: 2021,
    image: pub34
  },
  {
    id: 'pub33',
    title: '33. Structural Defects Modulate Electronic and Nanomechanical properties of 2D materials.',
    link: 'https://pubs.acs.org/doi/10.1021/acsnano.0c06701',
    authors: 'Tripathi, M.; Lee, F.; Michail, A.; Anestopoulos, D.; McHugh , J.; Ogilvie, S.; Large, M.; Amorim Graf, A.; Lynch, P.; Parthenios, J.; Papagelis, K.; Roy, S.; Rahman, M. M.; King, A.; Ajayan, P.; Dalton, A.',
    conference: 'ACS Nano',
    year: 2021,
    image: pub33
  },
  {
    id: 'pub32',
    title: '32. Transformation of One-Dimensional Linear Polymers into Two-Dimensional Covalent Organic Frameworks Through Sequential Reversible and Irreversible Chemistries',
    link: 'https://pubs.acs.org/doi/10.1021/acs.chemmater.0c04237',
    authors: 'Zhu, D.; Li, X.; Li, Y.; Barnes, M.; Tseng, C.; Khalil, S.; Rahman, M. M.; Ajayan, P. M.; Verduzco, R.',
    conference: 'Chemistry of Material',
    year: 2021,
    image: pub32
  },
  {
    id: 'pub31',
    title: '31. Free-standing SnS/Carbonized Cellulose Film as Durable Anode for Lithium-Ion Batteries',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0144861720315733',
    authors: 'Yuan, F.; Huang, Y.; Qian, J.; Rahman, M. M.*; Ajayan, P. M.; Sun, D.',
    conference: 'Carbohydrate Polymers',
    year: 2021,
    image: pub31
  },
  {
    id: 'pub30',
    title: '30. Additive Manufacturing of Polymer-based Structures by Extrusion Technologies',
    link: 'https://academic.oup.com/ooms/article/1/1/itaa004/5936536?login=true',
    authors: 'Maguire, A.; Pottackal, N.; Saadi, M.A.S.R.; Rahman, M. M.*; Ajayan, P. M.',
    conference: 'Oxford Open Materials Science',
    year: 2021,
    image: pub30
  },
  {
    id: 'pub29',
    title: '29. Atomic Layers of Graphene for Microbial Corrosion Prevention',
    link: 'https://pubs.acs.org/doi/10.1021/acsnano.0c03987',
    authors: 'Chilkoor, G.; Shrestha, N.; Kutana, A.; Hernández, F. C. R.; Yakobson, B. I.; Meyyappan, M.; Ajayan, P. M.; Rahman, M.M.*; Gadhamshetty, V.',
    conference: 'ACS Nano',
    year: 2021,
    image: pub29
  },
  {
    id: 'pub28',
    title: '28. Hexagonal Boron Nitride for Sulfur Corrosion Inhibition',
    link: 'https://pubs.acs.org/doi/10.1021/acsnano.0c03625',
    authors: 'Chilkoor, G.; Jawaharraj, K.; Vemuri, B. Kutana, A.; Triptahi, M.; Kota, D.; Arif, T.; Filleter, T.; Dalton, A.B.; Yakobson, B.I.; Meyyappan, M.; Rahman, M. M.*, Ajayan, P. M., Gadhamshetty, V.',
    conference: 'ACS Nano',
    year: 2020,
    image: pub28
  },
  {
    id: 'pub27',
    title: '27. Reactive 3D Printing of Shape Programmable Liquid Crystal Elastomers',
    link: 'https://pubs.acs.org/doi/10.1021/acsami.0c07331',
    authors: 'Barnes, M.; Sajadi, S.M.; Parekh, S.; Rahman, M.M.*; Ajayan, P.M.; Verduzco, R',
    conference: 'ACS Applied Materials & Interfaces',
    year: 2020,
    image: pub27
  },
  {
    id: 'pub26',
    title: '26. Multifunctional bionanocomposite coatings for perishable fruits',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adma.201908291',
    authors: 'Jung, S.; Cui, Y.; Barnes, M.; Satam, C.; Zhang, S.; Chowdhury, R.; Adumbumkulath, A.; Sahin, O.; Miller, C.; Sajadi, S.M.; Sassi, L.; Ji, Y.; Bennett, M.; Yu, M.; Friguglietti, J.; Merchant, F.; Verduzco, R.; Roy, S.; Vajtai, R.; Meredith, J.C.; Youngblood, J.; Koratkar, N.; Rahman, M.M.*; Ajayan, P.M',
    conference: 'Advanced Materials',
    year: 2020,
    image: pub26
  },
  {
    id: 'pub25',
    title: '25. 3D Printed Tubulanes as Lightweight Hypervelocity Impact Resistant Structures',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.201904747',
    authors: 'Sajadi, S. M.; Woellner, C. F.; Ramesh, P.; Eichmann, S. L.; Sun, Q.; Boul, P. J.; Thaemlitz, C.; Rahman, M. M.; Baughman, R. H.; Galvão, D.S.; Tiwary, C.S.; Ajayan, P.M.',
    conference: 'Small',
    year: 2019,
    image: pub25
  },
  {
    id: 'pub24',
    title: '24. Fiber reinforced layered dielectric nanocomposite',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adfm.201900056',
    authors: 'Rahman, M.M.*; Puthirath, A.B.; Adumbumkulath, A.; Tsafack T.; Robatjazi, H.; Barnes, M.; Wang, Z.; Kommandur, S.; Susarla, S.; Sajadi, S.; Salpekar, D.; Yuan, F.; Babu, G.; Nomoto, K.; Islam, SM; Verduzco, R.; Yee, SK; Xing, H.G.; Ajayan, PM',
    conference: 'Advanced Functional Materials',
    year: 2019,
    image: pub24
  },
  {
    id: 'pub23',
    title: '23. Direct Ink Writing of Cement Structures Modified with Nanoscale Additive',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/adem.201801380',
    authors: 'Sajadi, S.M.; Boul, P.J.; Thaemlitz, C.; Meiyazhagan, A.K.; Puthirath, A.B.; Tiwary, C.S.; Rahman, M.M.*; Ajayan, P.M',
    conference: 'Advanced Engineering Materials',
    year: 2019,
    image: pub23
  },
  {
    id: 'pub22',
    title: '22. Advanced green composites from liquid crystalline cellulose fibers and waxy maize starch-based resins',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0266353817332724',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    conference: 'Composites Science and Technology',
    year: 2018,
    image: pub22
  },
  {
    id: 'pub21',
    title: '21. High-performance ‘Green’ Nanocomposite using Aligned Bacterial Cellulose and Soy Protein',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0266353816318346',
    authors: 'Rahman, M.M.; Netravali, A',
    conference: 'Composites Science and Technology',
    year: 2017,
    image: pub21
  },
  {
    id: 'pub20',
    title: '20. Green Composite Using bioresins from agro-wastes and modified sisal fibers',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/pc.24607',
    authors: 'Patil, N.V., Rahman, M. M.; Netravali, A. N.',
    conference: 'Polymer Composites',
    year: 2017,
    image: pub20
  },
  {
    id: 'pub19',
    title: '19. Micro-fibrillated cellulose reinforced eco-friendly polymeric resin from non-edible ‘Jatropha curcus’ seed waste after biodiesel production',
    link: 'https://pubs.rsc.org/en/content/articlelanding/2016/ra/c6ra07749h',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    conference: 'RSC Advances',
    year: 2016,
    image: pub19
  },
  {
    id: 'pub18',
    title: '18. Aligned Bacterial Cellulose Arrays as "Green" Nanofibers for Composite Material',
    link: 'https://pubs.acs.org/doi/10.1021/acsmacrolett.6b00621',
    authors: 'Rahman, M. M. ; Netravali, A. N.',
    conference: 'ACS Macro Letters',
    year: 2016,
    image: pub18
  },
  {
    id: 'pub17',
    title: '17. Oriented Bacterial Cellulose-Soy Protein based Fully ‘Green’ Nanocomposites',
    link: 'https://doi.org/10.1016/j.compscitech.2016.10.003',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    conference: 'Composites Science and Technology',
    year: 2016,
    image: pub17
  },
  {
    id: 'pub16',
    title: '16. Bio-inspired “green” nanocomposite using hydroxyapatite synthesized from eggshell waste and soy protein',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/app.43477',
    authors: 'Rahman, M. M.; Netravali, A. N.; Tiimob, B. J.; Apalangya, V.; Rangari, V. K.',
    conference: 'Journal of Applied Polymer Science',
    year: 2016,
    image: pub16
  },
  {
    id: 'pub15',
    title: '15. Enhanced Tensile Performance of Epoxy and E-glass/epoxy Composites by Randomly oriented Amino-functionalized MWCNTs at Low Contents',
    link: 'https://doi.org/10.1177/0021998314525977',
    authors: 'Rahman, M. M.; Hosur, M.; Zainuddin, S.; Jahan, N.; Miller-Smith, E. B.; Jeelani, S.',
    conference: 'Journal of Composite Materials',
    year: 2015,
    image: pub15
  },
  {
    id: 'pub14',
    title: '14. Low Velocity Impact Properties of Carbon Nanofibers Integrated Carbon fiber/epoxy Hybrid Composites Manufactured by OOA–VBO Process',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0263822314005017',
    authors: 'Rahman, M. M.; Hosur, M.; Hsiao, K. T.; Wallace, L.; Jeelani, S.',
    conference: 'Composite Structures',
    year: 2015,
    image: pub14
  },
  {
    id: 'pub13',
    title: '13. Bio-based Polymeric Resin from Agricultural Waste, Neem (Azadirachta indica) Seed Cake, for Green Composites',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/app.41291',
    authors: 'Rahman, M. M.; Ho, K.; Netravali, A. N.',
    conference: 'Journal of Applied Polymer Science',
    year: 2015,
    image: pub13
  },
  {
    id: 'pub12',
    title: '12. Thermal Stability and Kinetics Analysis of Epoxy Composites Modified with Reactive Polyol Diluent and Multiwalled Carbon Nanotubes',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/app.41558',
    authors: 'Islam, M. E.; Rahman, M. M.; Hosur, M.; Jeelani, S.',
    conference: 'Journal of Applied Polymer Science',
    year: 2015,
    image: pub12
  },
  {
    id: 'pub11',
    title: '11. Bio-derived “Green” Composite from Soy Protein and Eggshell Nanopowder',
    link: 'https://pubs.acs.org/doi/10.1021/sc5003193',
    authors: 'Rahman, M. M.; Netravali, A. N.; Tiimob, B. J.; Rangari, V. K.',
    conference: 'ACS Sustainable Chemistry and Engineering',
    year: 2014,
    image: pub11
  },
  {
    id: 'pub10',
    title: '10. Green Resin from Forestry Waste Residue “Karanja (Pongamia pinnata) Seed Cake” for Biobased Composite Structures',
    link: 'https://doi.org/10.1021/sc500095r',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    conference: 'ACS Sustainable Chemistry and Engineering',
    year: 2014,
    image: pub10
  },
  {
    id: 'pub9',
    title: '9. Fracture Behavior of Epoxy Nanocomposites Modified with Polyol Diluent and Amino-functionalized Multiwalled Carbon Nanotubes: A Loading Rate Study',
    link: 'https://doi.org/10.1016/j.compositesa.2013.12.014',
    authors: 'Jajam, K. C.; Rahman, M. M.; Hosur, M. V.; Tippur, H. V.',
    conference: 'Composites Part A: Applied Science and Manufacturing',
    year: 2014,
    image: pub9
  },
  {
    id: 'pub8',
    title: '8. Optimization of Mechanical and Thermomechanical Properties of Epoxy and E-glass/epoxy Composites Using NH2-MWCNTs, Acetone Solvent and Combined Dispersion Methods',
    link: 'https://doi.org/10.1016/j.compstruct.2013.11.010',
    authors: 'Zainuddin, S.; Fahim, A.; Arifin, T.; Hosur, M. V.; Rahman, M. M.; Tyson, J. D.; Jeelani, S.',
    conference: 'Composite Structures',
    year: 2014,
    image: pub8
  },
    {
    id: 'pub7',
    title: '7. Effect of Carboxyl Functionalized MWCNTs on the Cure Behavior of Epoxy Resin',
    link: 'https://www.scirp.org/journal/paperinformation.aspx?paperid=30722',
    authors: 'Jahan, N.; Narteh, A.; Hosur, M.; Rahman, M.M.; Jeelani, S',
    conference: 'Open Journal of Composite Materials',
    year: 2013,
    image: pub7
  },
  {
    id: 'pub6',
    title: '6. Improvement in Mechanical and Thermo-Mechanical Properties of Carbon fiber/Epoxy Composites Using Carboxyl Functionalized Multi-Walled Carbon Nanotubes',
    link: 'http://dx.doi.org/10.4236/ojcm.2013.32A001',
    authors: 'Salam, M. B. A.; Hosur, M. V.; Jahan, N.; Rahman, M. M.; Jeelani, S.',
    conference: 'Polymer and Polymer Composites',
    year: 2013,
    image: pub6
  },
  {
    id: 'pub5',
    title: '5. Effects of Amino-functionalized MWCNTs on Ballistic Impact Performance of E-glass/epoxy Composites Using a Spherical Projectile',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0734743X13000183',
    authors: 'Rahman, M.M.; Hosur, M.; Zainuddin, S.; Vaidya, U.; Tauhid, A.; Kumar, A.; Trovillion, J.; Jeelani, S',
    conference: 'International Journal of Impact Engineering',
    year: 2013,
    image: pub5
  },
  {
    id: 'pub4',
    title: '4. Effect of NH2-MWCNTs on Crosslink Density of Epoxy Matrix and ILSS properties of E-glass/epoxy Composites',
    link: 'http://dx.doi.org/10.1016/j.compstruct.2012.07.019',
    authors: 'Rahman, M. M.; Zainuddin, S.; Hosur, M. V.; Robertson, C. J.; Kumar, A.; Trovillion, J.; Jeelani, S.',
    conference: 'Composite Structures',
    year: 2013,
    image: pub4
  },
  {
    id: 'pub3',
    title: '3. Improvements in Mechanical and Thermomechanical Properties of E-glass/epoxy Composites Using Amino-functionalized MWCNTs',
    link: 'http://dx.doi.org/10.1016/j.compstruct.2012.03.014',
    authors: 'Rahman, M. M.; Zainuddin, S.; Hosur, M. V.; Malone, J. E.; Salam, M. B. A.; Kumar, A.; Jeelani, S.',
    conference: 'Composite Structures',
    year: 2012,
    image: pub3
  },
  {
    id: 'pub2',
    title: '2. Mechanical Characterization of Epoxy Composites Modified with Reactive Polyol Diluent and Randomly oriented Amino-functionalized MWCNTs',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0142941812001596',
    authors: 'Rahman, M. M.; Hosur, M.; Zainuddin, S.; Jajam, K. C.; Tippur, H. V.; Jeelani, S.',
    conference: 'Polymer Testing',
    year: 2012,
    image: pub2
  },
  {
    id: 'pub1',
    title: '1. Thermo-mechanical Behavior of Epoxy Composites Modified with Reactive Polyol Diluent and Randomly oriented Amino-functionalized Multiwalled Carbon Nanotubes',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0142941812000918',
    authors: 'Rahman, M. M.; Hosur, M.; Ludwick, A. G.; Zainuddin, S.; Kumar, A.; Trovillion, J.; Jeelani, S.',
    conference: 'Polymer Testing',
    year: 2012,
    image: pub1
  }
  
];