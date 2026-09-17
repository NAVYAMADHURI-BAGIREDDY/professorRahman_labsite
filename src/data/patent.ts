export interface Patent {
  id: string;               // Unique identifier
  title: string;            // Title of the patent
  link: string;             // External link to the patent (e.g., Google Patents or USPTO)
  author: string;           // Inventors (you can also rename this to 'inventors' for clarity)
  // applicationNumber: string;
  patentNumber: string;
  year : number // Patent application number
  image?: string
}
export const patents: Patent[] = [
  {
    id: 'P-007',
    title: '7. 3D-printed polyrotaxane additives and compositions',
    link: 'https://patents.google.com/patent/US12338383B2/en',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    patentNumber: 'Patent No.: US12338383B2',
    // applicationNumber: '17/550,631',
    year: 2025
  },
  {
    id: 'P-006',
    title: '6. Shape memory behavior of epoxy/sliding-ring polymer composites',
    link: 'https://patents.google.com/patent/US12269944B2/en',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    patentNumber: 'Patent No.: US12269944B2',
    // applicationNumber: '17/550,653',
    year: 2025
  },
  {
    id: 'P-005',
    title: '5. Epoxy compositions containing polyrotaxane additives having improved impact strength',
    link: 'https://patents.google.com/patent/US12234356B2/en',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    patentNumber: 'Patent No.: US12234356B2',
    // applicationNumber: '17/550,638',
    year: 2025
  },
  {
    id: 'P-004',
    title: '4. Direct ink printing of multi-material composite structures',
    link: 'https://patents.google.com/patent/US11858039B2/en',
    author: 'Sajadi, S. M.; Boul, P. J.; Tiwary, C. S.; Rahman, M. M.; Ajayan, P. M.; Thaemlitz, C.',
    patentNumber: 'Patent No.: US11858039B2',
    // applicationNumber: '17/575,177',
    year: 2024
  },
  {
    id: 'P-003',
    title: '3. Cementing a wellbore using a direct ink printing',
    link: 'https://patents.google.com/patent/US12540269B2/en',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    patentNumber: 'Patent No.: US12540269B2',
   // applicationNumber: '17/551,051',
    year: 2022
  },
  {
    id: 'P-002',
    title: '2. Additive manufacture-assisted method for making structural elements having controlled failure characteristics',
    link: 'https://patents.google.com/patent/US20210354366A1/en',
    author: 'Sajadi, S. M.; Meiyazhagan, A.; Boul, P.; Rahman, M. M.; Thaemlitz, C.; Ajayan, P. M.',
    patentNumber: 'Patent No.: US20210354366A1', 
    // applicationNumber: 'US20210354366A1',
    year: 2021
  },
  {
    id: 'P-001',
    title: '1. Cement-based direct ink for 3D-printing of complex architected structures',
    link: 'https://patents.google.com/patent/US10913683B2/en',
    author: 'Rahman, M. M.; Sajadi, S. M.; Kumar, A.; Boul, P. J.; Thaemlitz, C.; Ajayan, P. M.',
    patentNumber: 'Patent No.: US10913683B2',
    // applicationNumber: '16/596,396',
    year: 2021
  }
];