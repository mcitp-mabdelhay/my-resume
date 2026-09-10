import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C#', 'VB', 'Python', 'SQL Server', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'Frameworks',
    skills: ['.Net', 'NUnit', 'Flask', 'VueJS', 'Angular2+']
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'Docker', 'Azure', 'GCP', 'AWS', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ']
  },
  {
    title: 'Libraries',
    skills: ['pandas', 'NumPy', 'Matplotlib']
  }
];

export default function About() {
  return (
    <section id="about" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/50 rounded-3xl my-12 border border-transparent dark:border-gray-800 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            With over a decade of experience spanning software engineering, solution architecture, and data science, I build high-availability and scalable applications using hybrid methods. I hold a Master's in Computer Science with a minor in Deep Learning and NLP from Cairo University.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am passionate about creating robust systems, developing REST APIs, and implementing full-stack web applications that solve complex business challenges.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
