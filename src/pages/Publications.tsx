import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { publications, Publication } from '../data/publicationsData';

type Category = 'publication' | 'journal' | 'patent' | 'book';

const Publications = () => {
  const [category, setCategory] = useState<Category>('publication');

  // Filter publications based on category
  const filteredPublications = publications.filter(
    (pub) => category === 'publication' || pub.category === category
  );

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/159711/books-bookshelf-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      <section className="bg-white mt-10">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { value: 'publication', label: 'Publications' },
              { value: 'journal', label: 'Journal Articles' },
              { value: 'book', label: 'Book Chapters' },
              { value: 'patent', label: 'Patents' },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value as Category)}
                className={`px-4 py-2 rounded-md text-sm sm:text-base transition ${
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
                  {publicationsByYear[year].map((publication) => (
                    <div
                      key={publication.id}
                      className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md flex flex-col md:flex-row gap-4 items-start transition"
                    >
                      {/* Image */}
                      <img
                        src={publication.image || '/default-publication-image.png'}
                        alt={publication.title}
                        className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-md flex-shrink-0"
                      />

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-medium mb-1">
                          <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800"
                          >
                            {publication.title}
                          </a>
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2">
                          {publication.authors}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <span className="font-medium">{publication.journal}</span>, {publication.year}
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
