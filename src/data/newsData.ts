import news1 from '../../images/news_section/news1.png';
import news2 from '../../images/news_section/news2.png';
import news3 from '../../images/news_section/news3.png';
import news4 from '../../images/news_section/news4.png';
import news5 from '../../images/news_section/news5.png';
import news6 from '../../images/news_section/news6.png';
import news7 from '../../images/news_section/news7.png';
import news8 from '../../images/news_section/news8.png';
import news9 from '../../images/news_section/news9.png';
import news10 from '../../images/news_section/news10.png';
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
  id: 'news21',
  title: 'MSN recognizes Saadi’s work in developing a sustainable alternative to plastics by converting bacterial cellulose into a strong, flexible, and non-toxic material',
  Link: 'https://www.msn.com/en-us/news/technology/10-new-materials-aiming-to-replace-plastic-researchers-reveal/ar-AA1OIQkl',
  date: '2025-10-18',
  image: news21,
},
{
  id: 'news20',
  title: 'ScienceDaily features our lab: Goodbye plastic? Scientists create new supermaterial that outperforms metals and glass',
  Link: 'https://www.sciencedaily.com/releases/2025/07/250721223831.htm',
  date: '2025-07-22',
  image: news20,
},
{
  id: 'news19',
  title: 'Saadi’s work on developing strong and environmentally sustainable materials from bacteria is featured in a Rice University article',
  Link: 'https://www.youtube.com/watch?v=WRYi0ulIB7I&t=82s',
  date: '2025-07-08',
  image: news19,
},
{
  id: 'news18',
  title: 'Origami-inspired breakthrough: Thakur’s work on bendable 3D-printed ceramics featured on ASME',
  Link: 'https://www.asme.org/topics-resources/content/origami-inspires-bendable-3d-printed-ceramics',
  date: '2025-05-15',
  image: news18,
},
{
  id: 'news17',
  title: 'Saadi’s work on algae-derived nacre-like bionanocomposite for green electronics is published in ACS Nano',
  Link: 'https://pubs.acs.org/doi/10.1021/acsnano.4c09365',
  date: '2024-11-19',
  image: news17,
},
{
  id: 'news16',
  title: 'New Atlas features the groundbreaking achievement of 3D-printing wooden items using exclusively wood-based materials for the first time',
  Link: 'https://newatlas.com/3d-printing/wooden-items-3d-printed-wood-ingredients/',
  date: '2024-03-20',
  image: news16,
},
{
  id: 'news15',
  title: 'PI Maksud Rahman receives a USD 468,000 USFS (United States Forest Service) grant for scaling up CNC-Agroprotein nanocomposite coatings for perishable fruits. Congratulations to the team!',
  Link: '',
  date: '2023-09-01',
  image: news14,
},
{
  id: 'news14',
  title: 'PI Maksud Rahman receives a USD 249,610 NSF (National Science Foundation) grant for developing protein-based edible coatings to extend the shelf life of fruits and vegetables. Congratulations to the team!',
  Link: '',
  date: '2023-04-01',
  image: news14,
},
{
  id: 'news13',
  title: 'Rice University reports how protein-based coating could keep fruits and vegetables fresh longer',
  Link: 'https://news.rice.edu/news/2023/protein-based-coating-could-keep-fruits-and-vegetables-fresh-longer',
  date: '2023-03-27',
  image: news13,
},
{
  id: 'news12',
  title: 'Rice University reports how engineered wood could make buildings cleaner and greener by capturing carbon dioxide',
  Link: 'https://news.rice.edu/news/2023/engineered-wood-grows-stronger-while-trapping-carbon-dioxide',
  date: '2023-02-16',
  image: news12,
},
{
  id: 'news11',
  title: 'Rice University reports on an asphaltene-to-graphene innovation turning carbon waste into high-value material, published in Science Advances',
  Link: 'https://news.rice.edu/news/2022/rice-turns-asphaltene-graphene-composites',
  date: '2022-11-17',
  image: news11,
},
{
  id: 'news10',
  title: 'Saadi’s work on direct ink writing techniques for diverse materials is published in Advanced Materials',
  Link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adma.202108855',
  date: '2022-03-04',
  image: news10,
},
{
  id: 'news9',
  title: 'The Daily Star, a leading Bangladeshi daily, featured our lab’s edible-coating innovation on its top page',
  Link: 'https://www.thedailystar.net/news/bangladesh/news/fruits-veggies-last-longer-2930281',
  date: '2022-01-02',
  image: news9,
},
{
  id: 'news8',
  title: 'Our lab secures first place for sustainable edible coating innovation at the 2021 Create the Future Design Contest',
  Link: 'https://msne.rice.edu/news/rice-team-wins-sustainable-technologies-category-create-future-contest',
  date: '2021-10-14',
  image: news8,
},
{
  id: 'news7',
  title: 'Our lab demonstrates how a polymer coating enhances the strength of 3D-printed ceramic schwarzites',
  Link: 'https://architexturez.net/pst/az-cf-219641-1621745167',
  date: '2021-03-07',
  image: news7,
},
{
  id: 'news6',
  title: 'Rice University article “Egg-based coating preserves fresh produce” reports on a sustainable method to keep fruits and vegetables fresh longer',
  Link: 'https://news.rice.edu/news/2020/egg-based-coating-preserves-fresh-produce',
  date: '2020-06-04',
  image: news6,
},
{
  id: 'news5',
  title: 'Our lab develops a solution utilizing protein derived from wasted eggs, which works as a coating to prolong the freshness of fruits and vegetables.',
  Link: 'https://www.youtube.com/watch?v=dCSvs1_WgFg&t=18s',
  date: '2020-06-04',
  image: news5,
},
{
  id: 'news4',
  title: 'Dr. Rahman and team develop fiber-reinforced layered dielectric nanocomposite, published in Advanced Functional Materials',
  Link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adfm.201900056',
  date: '2019-05-08',
  image: news4,
},
{
  id: 'news3',
  title: 'Our lab develops cement-based direct ink with nanoscale modification, published in Advanced Engineering Materials',
  Link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adem.201801380',
  date: '2019-03-03',
  image: news3,
},
{
  id: 'news2',
  title: 'Dr. Rahman develops aligned bacterial cellulose arrays as “green” nanofibers for composite materials, published in ACS Macro Letters',
  Link: 'https://pubs.acs.org/doi/abs/10.1021/acsmacrolett.6b00621',
  date: '2016-09-09',
  image: news2,
},
{
  id: 'news1',
  title: 'Our lab develops bioderived “green” composite from soy protein and eggshell nanopowder, published in ACS Sustainable Chemistry & Engineering',
  Link: 'https://pubs.acs.org/doi/full/10.1021/sc5003193',
  date: '2014-09-02',
  image: news1,
},
];
