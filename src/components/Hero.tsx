import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Mohammed<br/>Abdelhay
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
          Senior Solutions Architect & Data Scientist specializing in high-availability systems, deep learning, and scalable cloud solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#contact" className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
            <Mail size={18} />
            Get in touch
          </a>
          <a href="/resume.pdf" download className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
            <FileText size={18} />
            Download CV
          </a>
          <div className="flex items-center gap-4 ml-2 sm:ml-4 mt-4 sm:mt-0">
            <a href="https://github.com/mma1979" target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-black transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mohammed-abdelhay" target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-[#0A66C2] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
