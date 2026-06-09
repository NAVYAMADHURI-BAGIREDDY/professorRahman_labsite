export interface BookChapter {
  id: string;              // Unique identifier
  category: 'book';        // Required for filtering
  title: string;           // Title of the book chapter
  link: string;            // External link
  authors: string;         // Author list
  bookTitle: string;       // Title of the book
  year: number;            // Publication year
  image?: string;
}

export const bookChapters: BookChapter[] = [
  {
    id: 'BC-002',
    category: 'book',
    title: '2. Three-dimensional Printing of Lignin',
    link: 'https://doi.org/10.1007/978-981-95-4025-9_7',
    authors: 'Thakur, M. S. H.; Hossain, M. T.; Fahad, M. M.; Rahman, M. M.',
    bookTitle: 'Biodegradable 3D-Printing',
    year: 2026
  },
  {
    id: 'BC-001',
    category: 'book',
    title: '1. Green Resins from Plant Sources and Strengthening Mechanisms',
    link: 'https://www.google.com/books/edition/Advanced_Green_Composites/TmatDwAAQBAJ?hl=en&gbpv=0',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    bookTitle: 'Advanced Green Composites',
    year: 2018
  }
];