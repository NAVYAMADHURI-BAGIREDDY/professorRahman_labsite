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

                  {/* LEFT: Image + overlay labels */}
                  <div className="relative flex-shrink-0 w-full md:w-[500px] h-56 md:h-64 overflow-hidden rounded-md shadow-sm bg-gray-200">
                    
                    {/* Blurred background image */}
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover object-center blur-[1px] scale-105"
                      loading="lazy"
                    />

                    {/* Overlay tint + gradient */}
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Research Focus Header + List */}
                    <div className="absolute left-3 right-3 top-3 z-20">
                      <h4 className="text-white text-medium sm:text-medium font-semibold uppercase mb-3 leading-tight">
                        Research Focus
                      </h4>

                      <ul className="space-y-[2px] text-medium md:text-base text-white font-semibold leading-relaxed">
                        {focus.map((f) => {
                          const to = focusHref(href, f);
                          return (
                            <li key={f}>
                              {to ? (
                                <a href={to} className="underline hover:text-cyan-600">
                                  {f}
                                </a>
                              ) : (
                                <span className="underline">{f}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT: Title + Description */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-2xl md:text-2xl font-bold mb-2 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-medium font-medium">
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
