import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, GraduationCap, FileText, Presentation, File, Quote, Check } from 'lucide-react';

const publications = [
  {
    title: 'Self-Driving Car Path Planning Using Evolutionary Algorithm',
    authors: 'Mohammed Abdelhay, Dr. Ahmed El-Bialy',
    journal: 'Master\'s Thesis, Cairo University',
    date: 'July 2021',
    category: 'Thesis',
    description: 'Developed an innovative evolutionary algorithm to optimize path planning and obstacle avoidance in simulated self-driving car environments, significantly reducing collision rates compared to traditional pathfinding heuristics.',
    icon: GraduationCap,
    link: '#',
    bibtex: `@mastersthesis{abdelhay2021selfdriving,
  title={Self-Driving Car Path Planning Using Evolutionary Algorithm},
  author={Abdelhay, Mohammed and El-Bialy, Ahmed},
  school={Cairo University},
  year={2021},
  month={July}
}`
  },
  {
    title: 'Cloud-Native High Availability Architectures for Financial Services',
    authors: 'Mohammed Abdelhay',
    journal: 'Industry Whitepaper',
    date: 'November 2023',
    category: 'Whitepaper',
    description: 'An in-depth analysis of modern cloud-native architectural patterns designed to ensure 99.999% uptime in transactional financial systems.',
    icon: FileText,
    link: '#',
    bibtex: `@techreport{abdelhay2023cloudnative,
  title={Cloud-Native High Availability Architectures for Financial Services},
  author={Abdelhay, Mohammed},
  institution={Industry Whitepaper},
  year={2023},
  month={November}
}`
  },
  {
    title: 'Optimizing Latency in Microservices with gRPC and Protocol Buffers',
    authors: 'Mohammed Abdelhay, et al.',
    journal: 'International Conference on Cloud Computing',
    date: 'March 2022',
    category: 'Conference',
    description: 'Presented findings on reducing inter-service communication latency by migrating from REST/JSON to gRPC/Protobuf in large-scale deployments.',
    icon: Presentation,
    link: '#',
    bibtex: `@inproceedings{abdelhay2022optimizing,
  title={Optimizing Latency in Microservices with gRPC and Protocol Buffers},
  author={Abdelhay, Mohammed and others},
  booktitle={International Conference on Cloud Computing},
  year={2022},
  month={March}
}`
  }
];

const categories = ['All', 'Thesis', 'Journal', 'Conference', 'Whitepaper'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

function BibtexButton({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-200/50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
      title="Copy BibTeX citation"
    >
      {copied ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Quote size={14} />}
      <span className="hidden sm:inline">{copied ? 'Copied!' : 'BibTeX'}</span>
    </button>
  );
}

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPublications = useMemo(() => {
    if (activeCategory === 'All') return publications;
    return publications.filter(pub => pub.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="publications" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
              Publications
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Academic research and scientific contributions.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, index) => (
              <motion.div 
                key={pub.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                  <pub.icon className="text-gray-900 dark:text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pub.title}</h3>
                    <div className="flex items-center gap-2">
                      <BibtexButton bibtex={pub.bibtex} />
                      <a 
                        href={pub.link} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                      >
                        View <span className="hidden sm:inline">Publication</span> <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-gray-200/50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs">
                      {pub.category}
                    </span>
                    <span>&bull;</span>
                    <span>{pub.authors}</span>
                    <span>&bull;</span>
                    <span className="text-gray-500 dark:text-gray-400">{pub.journal}</span>
                    <span>&bull;</span>
                    <span>{pub.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {filteredPublications.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center text-gray-500 dark:text-gray-400"
              >
                No publications found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
