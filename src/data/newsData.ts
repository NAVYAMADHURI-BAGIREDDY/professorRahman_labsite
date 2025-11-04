//import news1 from '../../images/news_section/news1.png';
//import news2 from '../../images/news_section/news2.png';
//import news3 from '../../images/news_section/news3.png';
//import news4 from '../../images/news_section/news4.png';
//import news5 from '../../images/news_section/news5.png';
import news6 from '../../images/news_section/news6.png';
import news7 from '../../images/news_section/news7.png';
import news8 from '../../images/news_section/news8.png';
import news9 from '../../images/news_section/news9.png';
//import news10 from '../../images/news_section/news10.png';
import news11 from '../../images/news_section/news11.png';
import news12 from '../../images/news_section/news12.png';
import news13 from '../../images/news_section/news13.png';
import news14 from '../../images/news_section/news14.png';
import news16 from '../../images/news_section/news16.png';
import news17 from '../../images/news_section/news17.png';
import news18 from '../../images/news_section/news18.png';
import news19 from '../../images/news_section/news19.png';
import news20 from '../../images/news_section/news20.png';
import news21 from '../../images/news_section/news21.png';


export interface NewsItem {
  id: string;
  title: string;
  Link?: string; // Optional news URL for the publication
  date?: string;
  content?: string; // Optional content URL for the publication
  image?: string; // Optional image URL for the publication
  category?:  'conference' | 'general'; // Optional category URL for the publication
}

export const newsItems: NewsItem[]  = [
  {
  id: 'news14',
  title: 'MSN listed our work as the top innovation among “10 New Materials Aiming to Replace Plastic.”',
  Link: 'https://www.msn.com/en-us/news/technology/10-new-materials-aiming-to-replace-plastic-researchers-reveal/ar-AA1OIQkl',
  date: '2025-10-18',
  image: news21,
},
{
  id: 'news13',
  title: 'Our work on bacteria-derived plastic is published in Nature Communications.',
  Link: 'https://www.youtube.com/watch?v=WRYi0ulIB7I&t=82s',
  date: '2025-07-08',
  image: news20,
},
{
  id: 'news12',
  title: 'Origami-inspired breakthrough: Our work on bendable 3D-printed ceramics featured on ASME.',
  Link: 'https://www.asme.org/topics-resources/content/origami-inspires-bendable-3d-printed-ceramics',
  date: '2025-05-15',
  image: news19,
},
{
  id: 'news11',
  title: 'Our work on algae-derived nacre-like bionanocomposite for green electronics is published in ACS Nano.',
  Link: 'https://pubs.acs.org/doi/10.1021/acsnano.4c09365',
  date: '2024-11-19',
  image: news18,
},
{
  id: 'news10',
  title: 'Nature featured our 3D printed wood innovation in their research highlight.',
  Link: 'https://www.nature.com/articles/d41586-024-00767-5',
  date: '2024-03-20',
  image: news17,
},
{
  id: 'news9',
  title: 'NewScientist featured our sustainable 3D printing innovation using recycled wood.',
  Link: 'https://www.newscientist.com/article/2422567-miniature-furniture-3d-printed-using-ink-made-from-recycled-wood/',
  date: '2024-03-15',
  image: news16,
},
{
  id: 'news8',
  title: 'Our lab receives an NSF (National Science Foundation) grant for developing protein-based edible coatings to extend the shelf life of fruits and vegetables.',
  Link: 'https://nsf.elsevierpure.com/en/projects/pfi-t-developing-protein-based-edible-coatings-to-extend-the-shel/',
  date: '2023-04-01',
  image: news14,
},
{
  id: 'news7',
  title: 'Rice University features our work on protein-based coating to keep fruits and vegetables fresh longer.',
  Link: 'https://news.rice.edu/news/2023/protein-based-coating-could-keep-fruits-and-vegetables-fresh-longer',
  date: '2023-03-27',
  image: news13,
},
{
  id: 'news6',
  title: 'Our work on engineered wood that can trap carbon dioxide featured in New Atlas.',
  Link: 'https://newatlas.com/science/engineered-wood-stronger-fights-climate-change-capturing-co2/',
  date: '2023-02-16',
  image: news12,
},
{
  id: 'news5',
  title: 'Rice University reports our work on asphaltene by products to graphene conversion, published in Science Advances.',
  Link: 'https://news.rice.edu/news/2022/rice-turns-asphaltene-graphene-composites',
  date: '2022-11-17',
  image: news11,
},
{
  id: 'news4',
  title: 'The Daily Star, a leading Bangladeshi newspaper, featured our edible-coating innovation on its first page.',
  Link: 'https://www.thedailystar.net/news/bangladesh/news/fruits-veggies-last-longer-2930281',
  date: '2022-01-02',
  image: news9,
},
{
  id: 'news3',
  title: 'Our lab secures first place for edible fruit coating innovation at the 2021 Create the Future Design Contest.',
  Link: 'https://contest.techbriefs.com/2021/entries/sustainable-technologies-future-energy/10878-0415-160640-multifunctional-bionanocomposite-fruit-coatings',
  date: '2021-04-15',
  image: news8,
},
{
  id: 'news2',
  title: 'Our lab demonstrates how a polymer coating enhances the strength of 3D-printed ceramic schwarzites.',
  Link: 'https://architexturez.net/pst/az-cf-219641-1621745167',
  date: '2021-07-07',
  image: news7,
},
{
  id: 'news1',
  title: 'Our lab develops a coating to preserve fruits and vegetables longer from wasted eggs.',
  Link: 'https://www.youtube.com/watch?v=dCSvs1_WgFg&t=18s',
  date: '2020-06-04',
  image: news6,
},
];
