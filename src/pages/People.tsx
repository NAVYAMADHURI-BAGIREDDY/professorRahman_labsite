import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, X } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import { people, Person } from '../data/peopleData';
import { SiGooglescholar, SiLinkedin } from 'react-icons/si';
import teamBanner from '../../images/people.png';
import groupPhoto from '../../images/group.png'; 

const People = () => {
  const [selected, setSelected] = useState<Person | null>(null);

  const { director, current, alumni } = useMemo(() => {
    const dirByName = people.find(
      (p) =>
        p.name.toLowerCase().includes('maksud') &&
        p.name.toLowerCase().includes('rahman')
    );
    const dir = dirByName ?? people.find((p) => p.category === 'faculty') ?? null;
    const others = people.filter((p) => p.id !== dir?.id);
    return {
      director: dir,
      current: others.filter((p) => p.category !== 'alumni'),
      alumni: others.filter((p) => p.category === 'alumni'),
    };
  }, []);

  const PersonCard = ({
    person,
    size = 'md',
    delay = 0,
  }: {
    person: Person;
    size?: 'md' | 'xl';
    delay?: number;
  }) => {
    const wh = size === 'xl' ? 'w-48 h-48' : 'w-36 h-36';
    return (
      <AnimatedSection delay={delay}>
        <div
          className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setSelected(person)}
        >
          <div className={`${wh} rounded-full overflow-hidden`}>
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-raleway text-[17px] font-semibold text-gray-900 mt-4 mb-1">
            {person.name}
          </h3>
          {person.title && (
            <p className="text-[15px] text-gray-600 mb-2">{person.title}</p>
          )}
          <div className="flex gap-3">
            {person.googlescholar && (
              <a
                href={person.googlescholar}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D14836] p-2 rounded-full text-white hover:opacity-80"
                onClick={(e) => e.stopPropagation()}
              >
                <SiGooglescholar className="w-5 h-5" />
              </a>
            )}
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] p-2 rounded-full text-white hover:opacity-80"
                onClick={(e) => e.stopPropagation()}
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            )}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="bg-gray-600 p-2 rounded-full text-white hover:opacity-80"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <div>
      <section className="relative h-[160px] bg-gray-900 mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={teamBanner} alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-raleway mb-4"
          >
            Our Team
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Group: text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our Lab is composed of a dynamic team of passionate students and postdoctoral researchers, who work together at the forefront of materials innovation. We foster an inclusive, collaborative, and interdisciplinary research environment where creativity meets scientific rigor. Our members bring expertise spanning materials science and mechanical engineering to tackle challenges in circular materials, bio-inspired designs, and advanced manufacturing technologies. Together, we aim to transform fundamental discoveries into real-world solutions that promote sustainability, functionality, and circular design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={groupPhoto}
                alt="Group Photo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Lab Director */}
          {director && (
            <div>
              <h2 className="text-2xl md:text-3xl font-raleway font-semibold text-gray-900 mb-8">
                Lab Director
              </h2>
              <div className="flex justify-center md:justify-start">
                <AnimatedSection delay={0.05}>
                  {/* fixed width = image width -> keeps block left, centers text under image */}
                  <div
                    className="flex flex-col cursor-pointer hover:scale-105 transition-transform w-[17rem]"
                    onClick={() => setSelected(director)}
                  >
                    <div className="w-[17rem] h-[17rem] rounded-full overflow-hidden">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* text/icons centered within the same width */}
                    <div className="mt-5 text-center">
                      <h3 className="font-raleway text-[19px] font-semibold text-gray-900 mb-1">
                        {director.name}
                      </h3>
                      {director.title && (
                        <p className="text-[16px] text-gray-600 mb-3">
                          {director.title}
                        </p>
                      )}
                      <div className="flex gap-3 justify-center">
                        {director.googlescholar && (
                          <a
                            href={director.googlescholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#D14836] p-2 rounded-full text-white hover:opacity-80"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SiGooglescholar className="w-5 h-5" />
                          </a>
                        )}
                        {director.linkedin && (
                          <a
                            href={director.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0A66C2] p-2 rounded-full text-white hover:opacity-80"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SiLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        {director.email && (
                          <a
                            href={`mailto:${director.email}`}
                            className="bg-gray-600 p-2 rounded-full text-white hover:opacity-80"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          )}

          {/* Current Members */}
          {current.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-raleway font-semibold text-gray-900 mb-8">
                Current Members
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-12">
                {current.map((p, i) => (
                  <PersonCard key={p.id} person={p} size="xl" delay={0.05 * i} />
                ))}
              </div>
            </div>
          )}

          {/* Alumni */}
          {alumni.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-raleway font-semibold text-gray-900 mb-8">
                Alumni
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 sm:gap-12">
                {alumni.map((p, i) => (
                  <PersonCard key={p.id} person={p} size="md" delay={0.05 * i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-5xl h-[90vh] rounded-lg shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-black p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 max-h-96 md:max-h-full overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 sm:p-8 overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-2">{selected.name}</h2>
                {selected.title && (
                  <p className="text-gray-600 mb-4">{selected.title}</p>
                )}
                {selected.bio && (
                  <>
                    <h3 className="text-lg font-medium mb-2">Biography</h3>
                    <p className="text-gray-700 mb-6">{selected.bio}</p>
                  </>
                )}
                {selected.education?.length ? (
                  <>
                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                      {selected.education.map((e, i) => (
                        <li key={i}>{e}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <div className="flex flex-wrap gap-4 mb-6">
                  {selected.email && (
                    <a
                      href={`mailto:${selected.email}`}
                      className="flex items-center text-primary-600 hover:text-primary-800"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email
                    </a>
                  )}
                  {selected.website && (
                    <a
                      href={selected.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-800"
                    >
                      <LinkIcon className="mr-2 h-5 w-5" />
                      Website
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default People;
