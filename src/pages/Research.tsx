import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';
import pubBanner from '../../images/lab.png';

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const Research = () => {
  const areas = useMemo(() => researchAreas, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative mt-20 h-[160px]">
        {/* Background image */}
        <img
         src={pubBanner}
         alt="Research"
         className="absolute inset-0 w-full h-full object-cover"
         loading="lazy"
        />
        
        {/* Centered text */}
        <div className="relative z-20 h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center">
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-raleway font-semibold text-white"
            >
              Research
            </motion.h1>
          </div>
        </div>
      </section>
      
      {/* Research Areas */}
      <section className="bg-white mt-10 pb-24 sm:pb-12">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8">
            {areas.map(({ id, title, image, description, focus, domains }) => (
              <AnimatedSection key={id}>
                <div className="bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition overflow-hidden">
                  <div className="flex flex-col md:flex-row items-stretch">
                    
                    {/* Left: Title, description, and focus */}
                    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                      <h3 className="text-gray-800 text-2xl md:text-2xl font-bold mb-2 tracking-tight">
                        {title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base md:text-medium font-medium mb-8">
                          {description}
                        </p>
                        <h4 className="ext-gray-900 text-xl font-bold uppercase mb-4">
                         Research Focus
                        </h4>
                    <ul className="space-y-1 text-cyan-700 text-lg font-semibold">
                      {(domains ?? []).map((dom) => {
                          const to = `/projectDetail/${encodeURIComponent(id)}/${slugify(dom.title)}`;
                          return (
                          <li key={dom.id}>
                            <Link to={to} className="underline hover:text-gray-600">
                               {dom.title}
                            </Link>
                          </li>
                         );
                      })}
                    </ul>
                  </div>
                  
                  {/* Right: Image */}
                  <div className="w-full md:w-[500px] flex items-center justify-center"> 
                    <img
                     src={image}
                     alt={title}
                      className="block w-full h-auto"
                       loading="lazy"
                     />
                   </div>
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
