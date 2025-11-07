import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';
import pubBanner from '../../images/research.png';

const Research = () => {
  const areas = useMemo(() => researchAreas, []);

  // Color gradients for the 3 decks
  const gradients = [
    'bg-gradient-to-t from-teal-700 via-teal-700 to-teal-800 opacity-90',
    'bg-gradient-to-t from-green-700 via-green-700 to-green-800 opacity-90',
    'bg-gradient-to-t from-lime-700 via-lime-700 to-lime-800 opacity-90',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={pubBanner}
            alt="Research"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-raleway mb-4"
          >
            Research
          </motion.h1>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-white mt-10">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8">
            {areas.map(({ id, title, image, description, focus }, index) => (
              <AnimatedSection key={id}>

                {/* Entire card with background image */}
                <div className="relative rounded-lg p-4 sm:p-6 hover:shadow-md transition flex flex-col md:flex-row items-start gap-4 border border-gray-100 overflow-hidden">
                  
                  {/* background image for both decks */}
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-100/60 backdrop-blur-[0.5px]" />

                  {/* LEFT: Gradient block */}
                  <div className="relative z-10 flex-shrink-0 w-full md:w-[500px] h-56 md:h-64 overflow-hidden rounded-md shadow-sm">
                    <div className={`absolute inset-0 ${gradients[index % gradients.length]}`} />

                    {/* Research Focus Overlay */}
                    <div className="absolute left-3 right-3 top-3 z-20">
                      <h4 className="text-white text-medium sm:text-medium font-semibold uppercase mb-3 leading-tight">
                        Research Focus
                      </h4>

                      <ul className="space-y-[2px] text-lg text-white font-semibold leading-relaxed">
                        {focus.map((f) => {
                          const to = `/projectDetail?areaId=${encodeURIComponent(id)}&focus=${encodeURIComponent(f)}`;
                          return (
                            <li key={f}>
                              <Link
                                to={to}
                                className="underline hover:text-cyan-600 transition-colors duration-200"
                              >
                                {f}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT: Text content */}
                  <div className="relative z-10 flex-1">
                    <h3 className="text-gray-800 text-2xl md:text-2xl font-bold mb-2 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-black leading-relaxed text-base md:text-medium font-bold">
                      {description}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
