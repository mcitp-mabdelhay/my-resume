import { motion } from 'motion/react';
import { GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';

const educations = [
  {
    id: 1,
    school: 'Cairo University',
    degree: 'Master\'s Degree, Computer Science',
    period: 'Sep 2018 – Sep 2023',
    grade: null
  },
  {
    id: 2,
    school: 'Cairo University',
    degree: 'Higher Diploma, Computer Science',
    period: '2011 – 2013',
    grade: '80%'
  },
  {
    id: 3,
    school: 'Mansoura University',
    degree: 'Bachelor\'s Degree, Accounting and Business/Management',
    period: '2000 – 2003',
    grade: '65%'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Education() {
  return (
    <section id="education" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white flex items-center gap-3">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400">My academic background and qualifications.</p>
        </motion.div>

        <div className="space-y-6">
          {educations.map((edu) => (
            <motion.div 
              key={edu.id}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Building2 size={20} className="text-gray-400" />
                    {edu.school}
                  </h3>
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <BookOpen size={18} />
                    {edu.degree}
                  </div>
                  {edu.grade && (
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800 inline-flex items-center px-3 py-1 rounded-full">
                      Grade: {edu.grade}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-800 shrink-0 self-start">
                  <Calendar size={16} />
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
