import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
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
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 tracking-tight">Selected Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
              </div>
              <p className="text-sm font-medium text-blue-600 mb-4">{project.tech}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{project.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
