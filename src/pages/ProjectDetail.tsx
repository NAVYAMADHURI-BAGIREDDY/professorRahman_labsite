import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';

const ProjectDetail = () => {
  const [params] = useSearchParams();
  const areaId = params.get('areaId') || undefined;
  const focus = params.get('focus') || undefined;

  const area = useMemo(() => researchAreas.find(a => a.id === areaId), [areaId]);
  const domains = useMemo(() => area?.domains ?? [], [area]);

  if (!area) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-2xl font-bold text-gray-800">Research area not found</h1>
        <p className="text-gray-600 mt-2">We couldn't find the requested area.</p>
      </div>
    );
  }

  return (
    <div className="bg-white mt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-raleway text-gray-900 mb-2"
        >
          {focus || 'Research Focus'}
        </motion.h1>
        <p className="text-gray-600 max-w-3xl">{area.description}</p>
      </section>

      {/* Domains */}
      <section className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
        <div className="space-y-6 sm:space-y-8">
          {domains.map(d => (
            <AnimatedSection key={d.id}>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-2 tracking-tight">
                      {d.title}
                    </h3>
                    {d.description && (
                      <p className="text-gray-600 leading-relaxed text-base md:text-medium font-medium">
                        {d.description}
                      </p>
                    )}
                  </div>

                  <div className="relative flex-shrink-0 w-full md:w-[420px] h-56 md:h-60 overflow-hidden rounded-md shadow-sm bg-gray-200">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {Array.isArray(d.projects) && d.projects.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2">
                      Projects
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {d.projects.map((p, i) => (
                        <li
                          key={`${d.id}-proj-${i}`}
                          className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm"
                        >
                          {p.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
          {domains.length === 0 && <div className="text-gray-500">No domains added yet.</div>}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
