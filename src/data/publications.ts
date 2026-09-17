import { journalArticles } from './journalArticles';
import { bookChapters } from './bookchapter';
import { patents } from './patent';

// Base type to unify all publication types
export type Category = 'journal' | 'patent' | 'conference' | 'book';


export interface UnifiedPublication {
  id: string;
  title: string;

  authors?: string;
  author?: string;

  link?: string;

  journal?: string;
  bookTitle?: string;
  patentNumber?: string;

  year: number;
  category: Category;

  media?: string;
  image?: string;
}

// Combine all datasets into one array
export const publications: UnifiedPublication[] = [
  ...journalArticles.map((j) => ({
    id: j.id,
    title: j.title,
    authors: j.authors,
    link: j.link,
    journal: j.journal,
    year: j.year,
    category: 'journal' as const,
    image: j.image,
    media: j.media,         
  })),
  ...patents.map((p) => ({
    id: p.id,
    title: p.title,
    author: p.author,
    link: p.link,
    patentNumber: p.patentNumber,
    year: p.year,
    category: 'patent' as const,
    image: p.image,
  })),
  ...bookChapters.map((b) => ({
    id: b.id,
    title: b.title,
    link: b.link,
    authors: b.authors,
    bookTitle: b.bookTitle,
    year: b.year,
    category: 'book' as const,
    image: b.image,
  })),
  
];
