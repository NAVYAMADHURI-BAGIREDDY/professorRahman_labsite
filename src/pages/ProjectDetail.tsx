import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const ProjectDetail = () => {
  const [params] = useSearchParams();
  const focusParam = params.get('focus') || undefined;

  // Build a quick lookup from domain title -> slug id
  const domainIndex = useMemo(() => {
    const idx = new Map<string, string>();
    for (const area of researchAreas) {
      for (const d of area.domains ?? []) {
        idx.set(d.title.toLowerCase(), slugify(d.title));
      }
    }
    return idx;
  }, []);

  // After mount, if a focus is provided, scroll to that section
  useEffect(() => {
    if (!focusParam) return;
    const targetId =
      domainIndex.get(focusParam.toLowerCase()) || slugify(focusParam);
    const el = document.getElementById(targetId);
    if (el) {
      // small timeout to ensure layout/Images are painted
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [focusParam, domainIndex]);

  return (
    <div className="bg-white mt-16">
      {/* Header */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-3">
          <Link
          to="/research"
          className="text-cyan-600 hover:text-cyan-600 text-lg font-semibold inline-flex items-center mt-5"
          >
            <span aria-hidden className="mr-1">←</span> Back to Research Areas
          </Link>
        </div>
        </section>
      {/* All Areas & Focuses */}
      <section className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
        <div className="space-y-10 sm:space-y-12">
          {researchAreas.map((area) => (
            <div key={area.id}>
              {/* Area title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {area.title}
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {(area.domains ?? []).map((d) => {
                  const anchorId = slugify(d.title);
                  return (
                    <AnimatedSection key={d.id}>
                      <div
                        id={anchorId}
                        className="scroll-mt-24 md:scroll-mt-28 bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100"
                      >
                        <div className="flex flex-col md:flex-row items-start gap-4">
                          {/* Left */}
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

                          {/* Right */}
                          <div className="relative flex-shrink-0 w-full md:w-[420px] h-56 md:h-60 overflow-hidden rounded-md shadow-sm bg-gray-200">
                            <img
                              src={d.image}
                              alt={d.title}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Projects */}
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
                                  {p.href ? (
                                    <a href={p.href} className="hover:underline">
                                      {p.title}
                                    </a>
                                  ) : (
                                    p.title
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
