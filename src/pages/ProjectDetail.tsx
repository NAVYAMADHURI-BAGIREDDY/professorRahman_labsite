import { useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
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
  // Route params for separate pages
  const { areaId, focus: focusSlugFromRoute } = useParams<{ areaId?: string; focus?: string }>();
  const [params] = useSearchParams();
  const focusFromQuery = params.get('focus') || undefined;
  const areaIdFromQuery = params.get('areaId') || undefined;

  const { area, domain } = useMemo(() => {
    const desiredAreaId = areaId ?? areaIdFromQuery;
    const desiredFocusSlug = focusSlugFromRoute ?? (focusFromQuery ? slugify(focusFromQuery) : undefined);

    // For both area and focus slug, render the single focus page.
    if (desiredAreaId && desiredFocusSlug) {
      const a = researchAreas.find(r => String(r.id) === String(desiredAreaId));
      const d = a?.domains?.find(dom => slugify(dom.title) === desiredFocusSlug);
      return { area: a, domain: d };
    }

    // If only a focus slug is provided, search globally.
    if (desiredFocusSlug) {
      for (const a of researchAreas) {
        const d = a.domains?.find(dom => slugify(dom.title) === desiredFocusSlug);
        if (d) return { area: a, domain: d };
      }
    }

    return { area: undefined, domain: undefined };
  }, [areaId, areaIdFromQuery, focusFromQuery, focusSlugFromRoute]);

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

      {/* Single Focus Page */}
      <section className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
        {area && domain ? (
          <div className="space-y-10 sm:space-y-12">
            <div>
              {/* Area title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {area.title}
              </h2>

              <AnimatedSection key={domain.id}>
                <div
                  id={slugify(domain.title)}
                  className="scroll-mt-24 md:scroll-mt-28 bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    {/* Left */}
                    <div className="flex-1">
                      <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-2 tracking-tight">
                        {domain.title}
                      </h3>
                      {domain.description && (
                        <p className="text-gray-600 leading-relaxed text-base md:text-medium font-medium">
                          {domain.description}
                        </p>
                      )}
                    </div>

                    {/* Right */}
                    <div className="relative flex-shrink-0 w-full md:w-[420px] h-56 md:h-60 overflow-hidden rounded-md shadow-sm bg-gray-200">
                      <img
                        src={domain.image}
                        alt={domain.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Projects */}
                  {Array.isArray(domain.projects) && domain.projects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2">
                        Projects
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {domain.projects.map((p, i) => (
                          <li
                            key={`${domain.id}-proj-${i}`}
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
            </div>
          </div>
        ) : (
          <div className="text-gray-700">
            <p className="mb-4 font-medium">We couldn't find that research focus.</p>
            <Link to="/research" className="text-cyan-600 hover:underline">
              Go back to all Research Areas
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetail;
