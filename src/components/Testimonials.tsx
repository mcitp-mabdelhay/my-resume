import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Mohammed is a phenomenal architect who consistently delivers robust, scalable solutions. His expertise in both software engineering and data science brought immense value to our enterprise architecture.",
    author: "Project Director",
    company: "National Housing Company"
  },
  {
    quote: "Working with Mohammed on the Acumen project was a great experience. His deep understanding of .Net Core and ability to lead complex data analysis initiatives is unmatched.",
    author: "VP of Engineering",
    company: "Arabia Inform"
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800 transition-colors"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 tracking-tight text-center">Recommendations</motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col">
              <Quote className="text-gray-600 mb-6" size={32} />
              <p className="text-lg text-gray-300 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
