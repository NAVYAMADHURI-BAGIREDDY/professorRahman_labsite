import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';

import { researchAreas } from '../data/researchData';
import researchBanner from "../../images/researchBanner.png";

// helper to create a URL-friendly topic
const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Research = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[160px] bg-gray-900 mt-[64px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={researchBanner}
            alt="Research"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-6 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-raleway font-bold"
          >
            Research Areas
          </motion.h1>
        </div>
      </section>

      {/* Research Cards */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 space-y-10 sm:space-y-12">

          {researchAreas.map((area, index) => (
            <AnimatedSection key={area.id} delay={index * 0.08}>
              <div className="relative h-72 sm:h-80 lg:h-[380px] rounded-xl overflow-hidden shadow-md group">

                {/* Background Image */}
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60"></div>

                <div className="absolute inset-0 flex">

                  {/* Left Title Box */}
                  <div className="w-[40%] sm:w-[35%] flex items-end p-4 sm:p-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 sm:px-5 sm:py-4 shadow-lg">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold font-raleway text-gray-900 leading-tight">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Description + Focus links */}
                  <div className="ml-auto w-[60%] sm:w-[65%] flex items-end p-5 sm:p-7">
                    <div className="bg-black/60 rounded-lg p-4 sm:p-5 md:p-6 text-white max-w-2xl w-full">

                      {/* Description */}
                      <p className="text-base sm:text-lg leading-relaxed font-semibold mb-4">
                        {area.description}
                      </p>

                      {/* Research focus card */}
                      {area.focus && area.focus.length > 0 && (
                        <div className="mt-4 bg-white/10 rounded-lg p-3 border border-white/20">
                          <h4 className="text-sm uppercase opacity-80 mb-2 tracking-wide">
                            Research Focus
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {area.focus.map((name, i) => (
                              <Link
                                key={i}
                                to={`${area.href}?topic=${encodeURIComponent(toSlug(name))}`}
                                className="bg-white/20 hover:bg-white/30 text-white text-sm px-2 py-1 rounded-md transition whitespace-nowrap"
                              >
                                {name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Research;
