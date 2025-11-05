import { useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';

import pubBanner from '../../images/pub.png';

// helper for focus link formatting
const focusHref = (baseHref: string | undefined, focus: string) => {
  if (!baseHref) return undefined;
  const url = new URL(
    baseHref,
    typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  );
  url.searchParams.set('focus', focus);
  return url.pathname + url.search;
};

const Research = () => {
  const areas = useMemo(() => researchAreas, []);

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

      {/* Areas */}
      <section className="bg-white mt-10">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">

          <div className="space-y-6 sm:space-y-8">
            {areas.map(({ id, title, image, description, focus, href }) => (
              <AnimatedSection key={id}>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition flex flex-col md:flex-row items-start gap-4 border border-gray-100">
                  
                  {/* Left section */}
                  <div className="relative flex-shrink-0 w-full md:w-[560px] h-56 md:h-64 overflow-hidden rounded-md shadow-sm bg-gray-200">
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />

                    {/* subtle dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />

                    {/* Research Focus */}
                    <div className="absolute top-3 left-3 right-3 z-10">
                      <ul className="list-none m-0 p-0 space-y-1 text-base md:text-lg text-white font-medium leading-snug">
                        {focus.map((f) => {
                          const to = focusHref(href, f);
                          return (
                            <li key={f}>
                              {to ? (
                                <a href={to} className="hover:underline">
                                  {f}
                                </a>
                              ) : (
                                <span>{f}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Research Area Names */}
                    <div className="absolute inset-x-0 bottom-4 z-10">
                      <div className="bg-gradient-to-t from-black/70 to-transparent pt-8 pb-3 px-3 sm:px-4 text-center">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: description */}
                  <div className="flex-1 mt-6">
                    <p className="text-cyan-600 leading-relaxed text-base md:text-lg text-center font-semibold">
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
