import { useState } from 'react';
import { motion } from 'framer-motion'; 
import AnimatedSection from '../components/common/AnimatedSection';
import { publications, UnifiedPublication, Category } from '../data/publications';
import pubBanner from '../../images/journal.png';

const Publications = () => {
  const [category, setCategory] = useState<Category>('journal');

  const filteredPublications = publications.filter((pub) => pub.category === category);
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, UnifiedPublication[]>);

  const years = Object.keys(publicationsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" />
          <img
            src={pubBanner}
            alt="Publications"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-raleway mb-4"
          >
            Publications
          </motion.h1>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-white mt-10 pb-24 sm:pb-12">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { value: 'journal', label: 'Journal Articles' },
              { value: 'book', label: 'Book Chapters' },
              { value: 'patent', label: 'Patents' },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value as Category)}
                className={`px-4 py-2 rounded-md text-sm sm:text-base ${
                  category === item.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Publications by Year */}
          <div className="space-y-12">
            {years.map((year) => (
              <AnimatedSection key={year}>
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">
                  {year}
                </h2>

                <div className="space-y-6">
                  {publicationsByYear[year].map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition flex flex-col md:flex-row items-start gap-4"
                    >
                      {pub.image && (
                        <div className="flex-shrink-0 w-36 h-48 overflow-hidden rounded-md shadow-sm">
                          <img
                            src={pub.image}
                            alt={pub.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-medium mb-1 text-cyan-600">
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                        </h3>

                        {(pub.authors || pub.author) && (
                          <p className="text-gray-700 text-sm sm:text-base mb-1">
                            {pub.authors || pub.author}
                          </p>
                        )}

                        <p className="text-sm sm:text-base text-gray-600">
                          <span className="font-bold text-black text-lg sm:text-xl">
                            {pub.conference || pub.bookTitle || pub.applicationNumber}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
