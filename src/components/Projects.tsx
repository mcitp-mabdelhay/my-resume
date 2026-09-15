import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Isometric Holds',
    tech: 'React, TypeScript, Tailwind CSS, Sports Science',
    period: '2024 – Present',
    description: 'Distraction-free martial conditioning and tendon resilience app with 5 battle-tested protocols, interactive timers, and offline-first APK.',
    link: '/isometric-holds',
  },
  {
    title: 'AutoTracker',
    tech: 'React, TypeScript, Tailwind CSS, Google Sheets API',
    period: '2024 – Present',
    description: 'Vehicle maintenance, fuel logging, and repair receipt tracker with bi-directional Google Sheets sync and bilingual English/Arabic interface.',
    link: '/auto-car',
  },
  {
    title: 'Idle Lands',
    tech: '.Net Core, VueJs, SQL Server, Docker',
    period: 'Aug 2021 – Present',
    description: 'Developed Application to Collect idle lands for price evaluation, calculate taxes, and needed infrastructures to develop those lands. Used Redis for distributed cache.'
  },
  {
    title: 'Labor Camps',
    tech: '.Net Core, VueJs, SQL Server, Docker, Git',
    period: 'Dec 2020 – July 2021',
    description: 'Governmental project which aims to collect information about the foreign employees, for analysis and support decision making about new roles about the market and its companies.'
  },
  {
    title: 'Acumen',
    tech: '.Net Core, Angular, SQL Server, Docker, Git',
    period: 'Dec 2015 – July 2016',
    description: 'Acumen was established to document, archive, and analyze media in the MENA region. Acumen is a leader of electronic content from MENA.'
  },
  {
    title: 'AVL',
    tech: '.Net Core, Knockoutjs, SQL Server, TFS',
    period: 'Aug 2016 – July 2017',
    description: 'AVL is a Fleet management and tracking system that allows the client to manage their vehicles, monitoring, and tracking. Implemented GPS real time tracking service.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => {
      p.tech.split(',').forEach(t => tags.add(t.trim()));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">Selected Projects</motion.h2>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border border-transparent'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const cardBody = (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2 flex-wrap">
                        <span>{project.title}</span>
                        {project.link && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                            Subpage App
                          </span>
                        )}
                      </h3>
                      <ArrowUpRight className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" size={24} />
                    </div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{project.tech}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider mt-auto">{project.period}</p>
                </div>
              );

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.title} 
                  className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md h-full flex flex-col justify-between"
                >
                  {project.link ? (
                    <Link to={project.link} className="flex flex-col justify-between h-full">
                      {cardBody}
                    </Link>
                  ) : (
                    cardBody
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
