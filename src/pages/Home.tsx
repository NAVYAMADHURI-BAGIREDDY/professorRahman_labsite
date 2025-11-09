import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import introBg from '../../images/bacterial_cellulose.png';

import { newsItems } from '../data/newsData';
import { publications } from '../data/publications';
import imageData from '../../images/home-drop.png';
import { FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

import hp1 from "../../images/home_pub/hp1.png";
import hp2 from "../../images/home_pub/hp2.png";
import hp3 from "../../images/home_pub/hp3.png";
import hp4 from "../../images/home_pub/hp4.png";
import hp5 from "../../images/home_pub/hp5.png";
import hp6 from "../../images/home_pub/hp6.png";

/* Funding Logos */
import nsf from '../../images/fund_logos/nsf.png';
import usda from '../../images/fund_logos/usda.png';
import lmc from '../../images/fund_logos/lmc.png';
import alberta from '../../images/fund_logos/alberta.png';
import flow from '../../images/fund_logos/flow.png';

const homePubImages: Record<string, string> = {
  pub74: hp1,
  pub68: hp2,
  pub53: hp3,
  pub49: hp4,
  pub36: hp5,
  pub26: hp6,
};

type Sponsor = { name: string; logo?: string };
const partners: Sponsor[] = [
  { name: 'National Science Foundation', logo: nsf },
  { name: 'U.S. Department of Agriculture', logo: usda },
  { name: 'Lockheed Martin Corporation', logo: lmc },
  { name: 'Alberta Innovates – Technology Futures', logo: alberta },
  { name: 'Flowserve US, Inc', logo: flow },
];

const Home = () => {
  // NEWS (window of 3 on desktop, 1 on mobile)
  const [startIdx, setStartIdx] = useState(0);

  // NEW: responsive window size (1 on < md, 3 on >= md)
  const [windowSize, setWindowSize] = useState(3);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(min-width: 768px)');
    const update = (e?: MediaQueryListEvent) => {
      const isDesktop = e ? e.matches : mql.matches;
      setWindowSize(isDesktop ? 3 : 1);
      setStartIdx(0); // reset when layout changes to avoid overflow
    };
    update();
    if (mql.addEventListener) mql.addEventListener('change', update);
    else mql.addListener(update);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update);
      else mql.removeListener(update);
    };
  }, []);

  const topFiveNews = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const total = topFiveNews.length;

  const nextNews = () => {
    if (startIdx < total - windowSize) setStartIdx(startIdx + 1);
  };
  const prevNews = () => {
    if (startIdx > 0) setStartIdx(startIdx - 1);
  };

  // Highlighted Publications
  const highlighted_pub_id: string[] = ['pub66', 'pub72', 'pub53', 'pub49', 'pub36', 'pub26'];
  type Pub = typeof publications[number];
  const meta = (p: Pub) => p.conference ?? p.bookTitle ?? p.applicationNumber ?? '';
  const byId = new Map(publications.map(p => [p.id, p]));
  const highlightedPubs: Pub[] = highlighted_pub_id.length
    ? (highlighted_pub_id.map(id => byId.get(id)).filter(Boolean).slice(0, 6) as Pub[])
    : [...publications].sort((a, b) => b.year - a.year).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <img
            src={imageData}
            alt="Laboratory research"
            className="w-full h-[90%] sm:h-[110%] object-cover translate-y-16 sm:translate-y-[25px]"
          />
        </div>

        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-2">
              <h1 className="font-bold font-raleway text-2xl sm:text-2xl md:text-2xl lg:text-6xl tracking-widest">
                Maksud Innovation Lab
              </h1>
            </div>
            <div>
              <p className="font-semibold font-raleway text-2xl sm:text-2xl md:text-2xl lg:text-3xl tracking-widest">
                of Circular Materials and Manufacturing
              </p>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-raleway sm:text-xl md:text-1.5xl mb-8 max-w-2xl"
          >
            Redesigning Materials. Rethinking Waste. Rebuilding the Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/research"
              className="px-6 sm:px-8 py-3 text-xl bg-primary-600 hover:bg-primary-700 rounded-md font-bold transition-colors flex items-center"
            >
              Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
            href="https://scholar.google.com/citations?user=hky0f9UAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D14836] h-11 w-11 flex items-center justify-center rounded-full text-white hover:opacity-80"
            >
              <SiGooglescholar className="h-6 w-6" />
            </a>
            <a
            href="https://www.linkedin.com/in/maksud-rahman-04559883/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077B5] h-12 w-12 flex items-center justify-center rounded-full text-white hover:opacity-80"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${introBg})` }}
      >
        <div className="absolute inset-0 bg-white/80 z-0"></div>

        <div className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="font-raleway text-3xl md:text-4xl font-medium text-cyan-600">
                Exploring Nature. Engineering the Future.
              </h2>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <AnimatedSection delay={0.2}>
                <p className="text-black text-base sm:text-lg mb-4 leading-relaxed font-semibold">
                  At the Maksud Innovation Lab, we pursue curiosity-driven research at the intersection of materials science, advanced manufacturing, and circularity to promote a greener and more resilient future.
                </p>
                <p className="text-black text-base sm:text-lg mb-4 leading-relaxed font-semibold">
                  Our mission is to develop sustainable and scalable solutions to address global challenges in structural systems, food safety and security, and environmental technologies. We focus on the design and manufacturing of multifunctional circular materials that integrate principles of frugality, functionality, and circular economy.
                </p>
                <p className="text-black text-base sm:text-lg mb-4 leading-relaxed font-semibold">
                  From architected wood to fresh produce preservation to recyclable structural composites, our research explores structure–property–performance relationships across a wide range of circular material systems, spanning the nano to macro scales. Through this work, we aim to translate fundamental scientific insights into impactful, real-world innovations that promote a more sustainable planet.
                </p>

                <Link
                  to="/people"
                  className="text-cyan-600 hover:text-primary-400 font-semibold text-2xl flex items-center justify-center transition-colors"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white pt-4 pb-16 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mt-10 mb-3">
            <SectionHeading title="Latest News" centered />
          </div>

          {/* Arrows */}
          <button
            onClick={prevNews}
            disabled={startIdx === 0}
            aria-label="Previous news"
            className={`absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-cyan-600 rounded-full p-2 shadow-md transition ${
              startIdx === 0 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <ArrowRight className="rotate-180 w-6 h-6" />
          </button>

          <button
            onClick={nextNews}
            disabled={startIdx >= total - windowSize}
            aria-label="Next news"
            className={`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-cyan-600 rounded-full p-2 shadow-md transition ${
              startIdx >= total - windowSize ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Viewport */}
          <div className="mt-0 overflow-hidden relative">
            {/* Track */}
            <div
              className="flex -mx-3 transition-transform duration-500 ease-linear"
              style={{
                // move one card at a time; 100% per slide on mobile, 33.333% on desktop
                transform: `translateX(-${(startIdx * 100) / windowSize}%)`,
              }}
            >
              {topFiveNews.map((news) => (
                <div
                  key={news.id}
                  className="basis-full md:basis-1/3 shrink-0 px-3"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-[20rem] md:h-[21rem] flex flex-col">
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-gray-500 mb-2 block">
                          {new Date(news.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <h3 className="text-base md:text-xl font-semibold leading-snug mb-2 min-h-[2.75rem]">
                          {news.Link ? (
                            <a
                              href={news.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline text-cyan-600"
                            >
                              {news.title}
                            </a>
                          ) : (
                            news.title
                          )}
                        </h3>
                      </div>
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-36 md:h-40 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All */}
          <div className="mt-10 text-center">
            <Link
              to="/news"
              className="text-cyan-600 hover:text-primary-400 font-medium text-2xl inline-flex items-center transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlighted Publications */}
      <section className="bg-white pt-4 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Highlighted Publications" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {highlightedPubs.map((pub, idx) => (
              <AnimatedSection key={pub.id} delay={0.08 * idx}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full p-6 transition-transform transform hover:scale-105">
                  {pub.image && (
                    <img
                      src={homePubImages[pub.id] || pub.image}
                      alt={pub.title}
                      className="w-full h-auto max-h-40 object-contain rounded-md mb-4 bg-white p-2"
                    />
                  )}
                  <p className="text-2xl text-cyan-600 font-semibold mb-1 text-center">
                    {meta(pub)}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-black-800"
                      >
                        {pub.title.replace(/^\d+\.\s*/, '')}
                      </a>
                    ) : (
                      pub.title.replace(/^\d+\.\s*/, '')
                    )}
                  </h3>
                  {(pub.authors ?? pub.author) && (() => {
                    const authorString = pub.authors ?? pub.author;
                    const firstAuthor = authorString.split(',')[0];
                    return (
                      <p className="text-sm text-gray-700 text-center italic">
                        {firstAuthor} et al.
                      </p>
                    );
                  })()}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/publications"
              className="text-cyan-600 hover:text-primary-400 font-medium text-2xl flex items-center justify-center transition-colors"
            >
              View All Publications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="bg-white pt-4 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Sponsors" centered />
          <div className="relative">
            <div className="absolute inset-0 bg-gray-50 rounded-xl shadow-sm"></div>
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center py-6">
              {partners.map((p, idx) => (
                <AnimatedSection key={p.name} delay={0.05 * idx}>
                  <div className="flex flex-col items-center">
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-12 md:h-14 object-contain mb-2"
                      />
                    )}
                    <p className="text-lg text-cyan-600 text-center font-bold">
                      {p.name}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyan-600 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Interested in Our Research?</h2>
            <p className="font-raleway text-base sm:text-xl md:text-xl text-black-200 mb-8 max-w-3xl mx-auto">
              Anyone interested in making science and our mother nature their way of life is welcome to contact us. We value creativity, integrity, passion, and persistence in everyone we work with, and we are always open to collaborating with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary-900 hover:bg-gray-100 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
