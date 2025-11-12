import { useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';

type Pub = { name?: string; href?: string; authors?: string; journal?: string; year?: number };
type Fig = { src: string; caption?: string };

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const ProjectDetail = () => {
  const { areaId, focus: focusSlugFromRoute } = useParams<{ areaId?: string; focus?: string }>();
  const [params] = useSearchParams();

  const focusFromQuery = params.get('focus') || undefined;
  const areaIdFromQuery = params.get('areaId') || undefined;

  const { area, domain } = useMemo(() => {
    const desiredAreaId = areaId ?? areaIdFromQuery;
    const desiredFocusSlug = focusSlugFromRoute ?? (focusFromQuery ? slugify(focusFromQuery) : undefined);

    if (!desiredFocusSlug) return { area: undefined, domain: undefined };

    const a = desiredAreaId
      ? researchAreas.find((r) => String(r.id) === String(desiredAreaId))
      : researchAreas.find((r) => r.domains?.some((d) => slugify(d.title) === desiredFocusSlug));

    const d = a?.domains?.find((dom) => slugify(dom.title) === desiredFocusSlug);
    return { area: a, domain: d };
  }, [areaId, areaIdFromQuery, focusFromQuery, focusSlugFromRoute]);

  const defaultCaption = (title: string, index?: number) =>
    `Figure: ${title}${typeof index === 'number' ? ` (image ${index + 1})` : ''}`;

  const resolveCaption = (title: string, fig?: Fig, i?: number): string | null => {
    if (!fig) return defaultCaption(title, i);
    if (fig.caption === '') return null;            // explicit hide
    if (typeof fig.caption === 'string') return fig.caption;
    return defaultCaption(title, i);                // fallback
  };

  if (!area || !domain) {
    return (
      <div className="bg-white mt-16 pb-24 sm:pb-12">
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <p className="mb-4 font-medium text-gray-700">We couldn't find that research focus.</p>
          <Link to="/research" className="text-cyan-600 hover:underline">Go back to all Research Areas</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white mt-16 pb-24 sm:pb-12">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/research" className="text-cyan-600 text-lg font-semibold inline-flex items-center mt-5">
          <span aria-hidden className="mr-1">←</span> Back to Research Areas
        </Link>
      </section>

      <section className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{area.title}</h2>

        <AnimatedSection key={domain.id}>
          <div id={slugify(domain.title)} className="scroll-mt-24 md:scroll-mt-28">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">{domain.title}</h3>
              {domain.description && (
                <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">{domain.description}</p>
              )}
            </div>

            <div className="mt-8 space-y-8">
              {(domain.projects ?? []).map((p, idx) => {
                const title = p.title || `Project ${idx + 1}`;
                const pubs = (p.publications ?? []) as Pub[];
                const figs = (p.images ?? []) as Fig[];

                return (
                  <div key={`${domain.id}-project-${idx}`} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-semibold text-cyan-600 tracking-tight">{title}</h4>
                        {p.description && <p className="mt-2 text-gray-800 text-base md:text-lg leading-relaxed">{p.description}</p>}

                        {pubs.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold tracking-wide text-gray-700">
                              Related Publications:
                              </h4>
                            <ol className="mt-2 list-decimal list-inside space-y-1 text-gray-800">
                              {pubs.map((pub, i) => {
                                const authors = pub.authors ? `${pub.authors}. ` : '';
                                const year = pub.year ? `(${pub.year}). ` : '';
                                const ptitle = pub.name ? `${pub.name}. ` : '';
                                const journal = pub.journal ? <strong className="font-extrabold text-gray-900">{pub.journal}</strong> : null;

                                const content = <>{authors}{year}{ptitle}{journal}</>;
                                return (
                                  <li key={`pub-${i}`} className="break-words">
                                    {pub.href ? (
                                      <a href={pub.href} className="hover:underline text-gray-800" target="_blank" rel="noreferrer">
                                        {content}
                                      </a>
                                    ) : content}
                                  </li>
                                );
                              })}
                            </ol>
                          </div>
                        )}
                      </div>

                      {figs.length > 0 && (
                        <div className="relative w-full md:w-[380px] md:ml-auto mt-10 flex flex-col gap-4">
                          {figs.map((fig, i) => {
                            const cap = resolveCaption(title, fig, i);
                            return (
                              <figure key={`${domain.id}-fig-${i}`}>
                                <img
                                  src={fig.src}
                                  alt={`${title} image ${i + 1}`}
                                  className="block w-full h-auto rounded-lg shadow-sm object-contain"
                                  loading="lazy"
                                />
                                {cap && (
                                  <figcaption className="mt-1 text-sm text-gray-600 text-center font-semibold">
                                    {cap}
                                  </figcaption>
                                )}
                              </figure>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default ProjectDetail;
