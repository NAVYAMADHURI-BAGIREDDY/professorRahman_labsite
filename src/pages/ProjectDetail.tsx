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
  const { areaId, focus: focusSlugFromRoute } = useParams<{ areaId?: string; focus?: string }>();
  const [params] = useSearchParams();

  const focusFromQuery = params.get('focus') || undefined;
  const areaIdFromQuery = params.get('areaId') || undefined;

  const { area, domain } = useMemo(() => {
    const desiredAreaId = areaId ?? areaIdFromQuery;
    const desiredFocusSlug =
      focusSlugFromRoute ?? (focusFromQuery ? slugify(focusFromQuery) : undefined);

    if (desiredAreaId && desiredFocusSlug) {
      const a = researchAreas.find(r => String(r.id) === String(desiredAreaId));
      const d = a?.domains?.find(dom => slugify(dom.title) === desiredFocusSlug);
      return { area: a, domain: d };
    }

    if (desiredFocusSlug) {
      for (const a of researchAreas) {
        const d = a.domains?.find(dom => slugify(dom.title) === desiredFocusSlug);
        if (d) return { area: a, domain: d };
      }
    }

    return { area: undefined, domain: undefined };
  }, [areaId, areaIdFromQuery, focusFromQuery, focusSlugFromRoute]);

  return (
    <div className="bg-white mt-16 pb-24 sm:pb-12">
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

      {/* Content */}
      <section className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
        {area && domain ? (
          <div className="space-y-10 sm:space-y-12">
            {/* Area title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {area.title}
            </h2>

            <AnimatedSection key={domain.id}>
              <div id={slugify(domain.title)} className="scroll-mt-24 md:scroll-mt-28">
                {/* Domain header block */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                    {domain.title}
                  </h3>
                  {domain.description && (
                    <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
                      {domain.description}
                    </p>
                  )}
                </div>

                {/* Project sections */}
                <div className="mt-8 space-y-8">
                  {(domain.projects ?? []).map((p, idx) => {
                    const projectNumber = idx + 1;
                    const imageSrc =
                      Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : p.image;

                    // Build a single publication line, only if there is meaningful metadata
                    const hasMeta = Boolean(p.authors || p.conference || p.year || p.name);
                    const metaLine = hasMeta
                      ? [
                          p.authors || undefined,
                          p.year ? `(${p.year})` : undefined,
                          p.name || p.title,
                          p.conference || undefined,
                        ]
                          .filter(Boolean)
                          .join('. ')
                      : '';

                    // Fallback to title if link exists and no metadata
                    const publicationLine =
                      metaLine || (p.href && p.title ? p.title : '');

                    return (
                      <div
                        key={`${domain.id}-project-${idx}`}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 md:p-6"
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          {/* Left: text */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg md:text-xl font-semibold text-cyan-600 tracking-tight">
                              {p.title || `Project ${projectNumber}`}
                            </h4>

                            {p.description ? (
                              <p className="mt-2 text-gray-800 text-base md:text-lg leading-relaxed">
                                {p.description}
                              </p>
                            ) : null}

                            {publicationLine ? (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold tracking-wide text-gray-700">
                                  Related Publications:
                                </h4>
                                <ol className="mt-2 list-decimal list-inside space-y-1 text-gray-800">
                                  <li className="break-words">
                                    {p.href ? (
                                      <a
                                        href={p.href}
                                        className="hover:underline text-black-700"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {publicationLine}
                                      </a>
                                    ) : (
                                      publicationLine
                                    )}
                                  </li>
                                </ol>
                              </div>
                            ) : null}
                          </div>

                          {/* Right: image */}
                          {imageSrc ? (
                            <div className="relative w-full md:w-[380px] md:ml-auto md:top-10">
                              <img
                                src={imageSrc}
                                alt={p.title || `${domain.title} project ${projectNumber}`}
                                className="block w-full h-auto rounded-lg shadow-sm object-contain"
                                loading="lazy"
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
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
