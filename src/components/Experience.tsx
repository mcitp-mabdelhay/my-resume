import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Solutions Architect',
    company: 'National Housing Company, NHC',
    location: 'Riyadh, KSA',
    period: 'May 2026 – Present',
    description: [
      'Design and Develop High available and scalable application using hybrid methods using cloud and On-Perm services.',
      'Developed a REST API using .Net Core and SQL Server to store data from real states management systems.',
      'Developed a full-stack web application using .Net Core API, VueJs, SQL Server and Docker to analyze Labor residency data.'
    ],
    skills: ['.Net Core API', 'VueJs', 'SQL Server', 'Docker', 'Hybrid Cloud Architecture']
  },
  {
    id: 2,
    role: 'Software Solutions Architect',
    company: 'National Housing Company, NHC',
    location: 'Riyadh, KSA',
    period: 'June 2020 – May 2026',
    description: [
      'Create and Enhance Solution Architecture for company systems.',
      'Design and Develop High available and scalable application using hybrid methods using cloud and On-Perm services.',
    ],
    skills: ['Solution Architecture', 'Cloud Services', 'System Design']
  },
  {
    id: 3,
    role: 'Technical Team Lead/Solution Architect',
    company: 'Future Face',
    location: 'Cairo, EG',
    period: 'Oct 2018 – June 2020',
    description: [
      'Design and Develop solutions for health care industry in KSA.',
      'Upgrade some legacy solution to .Net Core.',
      'Maintain solution architecture and features.'
    ],
    skills: ['.Net Core', 'Healthcare Systems', 'Legacy Migration']
  },
  {
    id: 4,
    role: 'Technical Team Lead/ Data Scientist',
    company: 'AHCC',
    location: 'Cairo, EG',
    period: 'March 2018 – Sept 2018',
    description: [
      'Developed SAPTCO Haj management System.'
    ],
    skills: ['Data Science', 'System Development']
  },
  {
    id: 5,
    role: 'Technical Team Lead',
    company: 'Starware',
    location: 'Cairo, EG',
    period: 'July 2016 – March 2018',
    description: [
      'Developed and Maintain AVL Fleet Management System.',
      'Developed a dispatching algorithms for cars and drivers shifts.',
      'Contributed in applying CMMI Methodology.',
      'Trained new comers and mid level seniors.'
    ],
    skills: ['Algorithms', 'CMMI', 'Team Leadership', 'Fleet Management']
  },
  {
    id: 6,
    role: 'Technical Team Lead/ Data Scientist',
    company: 'Arabia Inform',
    location: 'Cairo, EG',
    period: 'Dec 2015 – June 2016',
    description: [
      'Developed Acumen news Tracing and Analysis System.',
      'Developed some prediction models for republic opinion measurement.',
      'Trained new comers and mid level seniors.'
    ],
    skills: ['Machine Learning', 'Data Analysis', 'Prediction Models']
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleExperience = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Career Timeline</h2>
          <p className="text-gray-600">A look at my professional milestones and skill growth over time.</p>
        </div>
        
        <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-10 ml-8 md:ml-12 ${index === experiences.length - 1 ? 'mb-0' : ''}`}>
              <div 
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center -left-5 md:-left-5 bg-white border-2 cursor-pointer transition-colors z-10 ${
                  activeId === exp.id ? 'border-black text-black shadow-md' : 'border-gray-200 text-gray-400 hover:border-gray-400'
                }`}
                onClick={() => toggleExperience(exp.id)}
              >
                <Briefcase size={18} />
              </div>

              <div 
                className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeId === exp.id ? 'border-gray-300 shadow-md' : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => toggleExperience(exp.id)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold ${activeId === exp.id ? 'text-black' : 'text-gray-800'}`}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <motion.div
                        animate={{ rotate: activeId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 font-medium">{exp.company} &middot; {exp.location}</p>
                </div>

                <AnimatePresence>
                  {activeId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100 mt-2">
                        <ul className="list-disc list-outside ml-4 mt-6 mb-8 space-y-3 text-gray-600">
                          {exp.description.map((item, i) => (
                            <li key={i} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Skills & Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1.5 bg-black text-white rounded-lg text-sm font-medium shadow-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
