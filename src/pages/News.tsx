import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { newsItems, NewsItem } from '../data/newsData';

import newsBanner from '../../images/news_section/news.png';

type Category = 'all' | 'publication' | 'award' | 'conference' | 'general';

/** Parse YYYY-MM-DD as *local* midnight (prevents UTC shifting one day back). */
const asLocalDate = (s?: string) => {
  if (!s) return undefined;
  // If it's exactly YYYY-MM-DD, force local midnight by appending T00:00:00 (no Z).
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(`${s}T00:00:00`);
  // Otherwise fall back to native parsing (URL dates, full ISO, etc.)
  return new Date(s);
};

const News = () => {
  const [category, setCategory] = useState<Category>('all');

  const filteredNews = newsItems
    .filter(item => category === 'all' || item.category === category)
    .sort((a, b) => {
      const bd = asLocalDate(b.date)?.getTime() ?? 0;
      const ad = asLocalDate(a.date)?.getTime() ?? 0;
      return bd - ad;
    });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-16 ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={newsBanner}
            alt="News and updates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-raleway leading-tight mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
          </motion.p>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white pt-6 pb-16">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* News Timeline */}
          <div className="space-y-12">
            {filteredNews.map((item, index) => {
              const d = asLocalDate(item.date);
              return (
                <AnimatedSection key={item.id} delay={0.1 * Math.min(index, 5)}>
                  <div className="relative pl-5 md:pl-0">
                    {/* Vertical Line Connector */}
                    <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-200">
                    </div>
                    <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
                      {/* Date - Desktop */}
                      <div className="hidden md:block relative mt-4">
                        <div className="text-right pr-8">
                          <span className="text-xl font-medium text-gray-900">
                            {d
                              ? d.toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })
                              : ''}
                          </span>
                          <span className="block text-gray-600 text-lg">
                            {d ? d.getFullYear() : ''}
                          </span>
                        </div>
                      </div>

                      {/* Date - Mobile */}
                      <div className="md:hidden mb-2 text-base text-gray-600">
                        {d
                          ? d.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          : ''}
                      </div>

                      {/* News Content */}
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="flex flex-col sm:flex-row p-4 gap-3">
                          {/* Text Content */}
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-xl font-semibold mb-2 text-cyan-600">
                              {item.Link ? (
                                <a
                                  href={item.Link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline hover:text-cyan-600"
                                >
                                  {item.title}
                                </a>
                              ) : (
                                item.title
                              )}
                            </h3>

                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                              {item.content}
                            </p>
                          </div>

                          {/* Image (Right Side) */}
                          {item.image && (
                            <div className="sm:w-64 w-full sm:flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-44 object-cover rounded-md"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
