export interface Conference {
  id: string;
  title: string;
  authors: string;
  link?: string;
  conference: string;
  year: number;
  image?: string;
}

export const conferenceProceedings: Conference[] = [
  {
    id: 'C-001',
    title: '1. Additive Manufacturing of Wood Nanocomposites Using Natural Fibers',
    authors: 'Thakur, M. S. H.; Shi, C.; Rahman, M. M.',
    link: '10.1007/978-3-032-01730-7_21',
    conference: 'Design and Analysis of Composites: Proceedings of the American Society for Composites Annual Technical Conferences (ASC 2024), Springer',
    year: 2026,
  },
];