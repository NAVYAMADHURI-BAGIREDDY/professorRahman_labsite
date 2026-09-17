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
    link: 'https://doi.org/10.1007/978-3-032-01730-7_21',
    conference: 'Design and Analysis of Composites, ASC 2024, Proceedings of the American Society for Composites Annual Technical Conferences, Springer',
    year: 2026,
  },
];