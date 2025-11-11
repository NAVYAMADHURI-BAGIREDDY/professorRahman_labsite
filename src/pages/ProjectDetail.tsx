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
  const { areaId, focus: focusSlugFromRoute } = useParams<{
    areaId?: string;
    focus?: string;
  }>();
  const [params] = useSearchParams();

  const focusFromQuery = params.get('focus') || undefined;
  const areaIdFromQuery = params.get('areaId') || undefined;

  const { area, domain } = useMemo(() => {
    const desiredAreaId = areaId ?? areaIdFromQuery;
    const desiredFocusSlug =
      focusSlugFromRoute ?? (focusFromQuery ? slugify(focusFromQuery) : undefined);

    if (desiredAreaId && desiredFocusSlug) {
      const a = researchAreas.find((r) => String(r.id) === String(desiredAreaId));
      const d = a?.domains?.find((dom) => slugify(dom.title) === desiredFocusSlug);
      return { area: a, domain: d };
    }

    if (desiredFocusSlug) {
      for (const a of researchAreas) {
        const d = a.domains?.find((dom) => slugify(dom.title) === desiredFocusSlug);
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

                {/* Project List */}
                <div className="mt-8 space-y-8">
                  {(domain.projects ?? []).map((p, idx) => {
                    const projectNumber = idx + 1;

                    const publicationItems = (p.publications ?? [])
                      .map((pub, i) => {
                        const line = [
                          pub.authors || undefined,
                          pub.year ? `(${pub.year})` : undefined,
                          pub.name || undefined,
                          pub.journal || undefined,
                        ]
                          .filter(Boolean)
                          .join('. ')
                          .trim();

                        if (!line && !(pub.href && pub.name)) return null;

                        return {
                          key: `pub-${i}`,
                          text: line || pub.name || '',
                          href: pub.href,
                        };
                      })
                      .filter(Boolean) as { key: string; text: string; href?: string }[];

                    const hasMultipleImages = Array.isArray(p.images) && p.images.length > 1;
                    const fallbackImage =
                      Array.isArray(p.images) && p.images.length === 1
                        ? p.images[0]
                        : p.image;

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

                            {p.description && (
                              <p className="mt-2 text-gray-800 text-base md:text-lg leading-relaxed">
                                {p.description}
                              </p>
                            )}

                            {publicationItems.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold tracking-wide text-gray-700">
                                  Related Publications:
                                </h4>
                                <ol className="mt-2 list-decimal list-inside space-y-1 text-gray-800">
                                  {publicationItems.map((item) => (
                                    <li key={item.key} className="break-words">
                                      {item.href ? (
                                        <a
                                          href={item.href}
                                          className="hover:underline text-gray-800"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {item.text}
                                        </a>
                                      ) : (
                                        item.text
                                      )}
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>

                          {/* Right: images */}
                          {hasMultipleImages ? (
                            <div className="relative w-full md:w-[380px] md:ml-auto mt-10 flex flex-col gap-4">
                              {p.images!.map((src, i) => (
                                <img
                                  key={`${domain.id}-img-${i}`}
                                  src={src}
                                  alt={`${p.title || `Project ${projectNumber}`} image ${i + 1}`}
                                  className="block w-full h-auto rounded-lg shadow-sm object-contain"
                                  loading="lazy"
                                />
                              ))}
                            </div>
                          ) : fallbackImage ? (
                            <div className="relative w-full md:w-[380px] md:ml-auto mt-10">
                              <img
                                src={fallbackImage}
                                alt={p.title || `${domain.title} project`}
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
