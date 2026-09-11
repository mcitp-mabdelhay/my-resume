import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, GraduationCap, FileText, Presentation, File, Quote, Check } from 'lucide-react';

const publications = [
  {
    title: 'A Comprehensive Review of Multimodal Deep Learning for Enhanced Medical Diagnostics',
    authors: 'Aya M. Al-Zoghby, Ahmed I. Ebada, Aya S. Saleh, Mohammed Abdelhay, Wael A. Awad',
    journal: 'CMC',
    date: 'July 7, 2025',
    category: 'Journal',
    description: 'This review delves into the transformative potential of multimodal deep learning in healthcare. It explores how integrating diverse data sources like genomic profiles, radiological imaging, and histopathological slides can lead to more precise diagnostics and improved patient outcomes.',
    icon: BookOpen,
    link: 'https://www.techscience.com/cmc/v84n3/63164',
    bibtex: `@article{alzoghby2025multimodal,
  title={A Comprehensive Review of Multimodal Deep Learning for Enhanced Medical Diagnostics},
  author={Al-Zoghby, Aya M. and Ebada, Ahmed Ismail and Saleh, Aya S. and Abdelhay, Mohammed and Awad, Wael A.},
  journal={CMC},
  year={2025},
  month={July}
}`
  },
  {
    title: 'Deep learning for Arabic healthcare: MedicalBot',
    authors: 'Mohammed Abdelhay, et al.',
    journal: 'Springer',
    date: 'April 18, 2023',
    category: 'Journal',
    description: 'Outlines the development of MedicalBot: an Arabic question-answering system designed specifically for healthcare-related inquiries. MedicalBot is a transformer-based model trained on MAQA, our proposed largest healthcare corpus consisting of over 430k questions spanning 20 distinct medical specializations.',
    icon: BookOpen,
    link: 'https://link.springer.com/article/10.1007/s13278-023-01077-w',
    bibtex: `@article{abdelhay2023medicalbot,
  title={Deep learning for Arabic healthcare: MedicalBot},
  author={Abdelhay, Mohammed and others},
  journal={Springer},
  year={2023},
  month={April}
}`
  },
  {
    title: 'MAQA: Medical Arabic Q&A dataset',
    authors: 'Mohammed Abdelhay, et al.',
    journal: 'Harvard Dataverse',
    date: 'August 1, 2022',
    category: 'Dataset',
    description: 'The largest Arabic Healthcare Q&A dataset as we know (MAQA) was collected from various websites. The dataset consists of more than 430k questions. We have made MAQA publicly available in order to facilitate further research within the academic community.',
    icon: FileText,
    link: 'https://dataverse.harvard.edu/citation?persistentId=doi:10.7910/DVN/Y2JBEZ',
    bibtex: `@misc{abdelhay2022maqa,
  title={MAQA: Medical Arabic Q&A dataset},
  author={Abdelhay, Mohammed and others},
  publisher={Harvard Dataverse},
  year={2022},
  month={August}
}`
  }
];

const categories = ['All', 'Journal', 'Dataset'];

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
                        target="_blank"
                        rel="noopener noreferrer"
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
