import { journalArticles } from './journalArticles';
import { bookChapters } from './bookchapter';
import { patents } from './patent';

// Base type to unify all publication types
export type Category = 'journal' | 'book' | 'patent';

export interface UnifiedPublication {
  id: string;
  title: string;
  authors?: string;
  author?: string;
  link?: string;
  conference?: string;
  bookTitle?: string;
  applicationNumber?: string;
  year: number;
  category: Category;
  image?:string;
}

// Combine all datasets into one array
export const publications: UnifiedPublication[] = [
  ...journalArticles.map((j) => ({
    id: j.id,
    title: j.title,
    authors: j.authors,
    link: j.link,
    conference: j.conference,
    year: j.year,
    category: 'journal' as const,
    image : j.image,
  })),
  ...bookChapters.map((b) => ({
    id: b.id,
    title: b.title,
    authors: b.authors,
    bookTitle: b.bookTitle,
    year: b.year,
    category: 'book' as const,
    image:b.image
  })),
  ...patents.map((p) => ({
    id: p.id,
    title: p.title,
    author: p.author,
    link: p.link,
    applicationNumber: p.applicationNumber,
    year: p.year,
    category: 'patent' as const,
    image:p.image
  })),
];
