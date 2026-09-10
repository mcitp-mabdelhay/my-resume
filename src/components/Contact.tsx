import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-md transition-colors">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Email</p>
                  <a href="mailto:mohammed.m.abdelhay@gmail.com" className="text-gray-900 dark:text-white font-medium hover:underline transition-colors">
                    mohammed.m.abdelhay@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Phone</p>
                  <a href="tel:+201008983687" className="text-gray-900 dark:text-white font-medium hover:underline transition-colors">
                    +20 100 898 3687
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium transition-colors">Riyadh, KSA / Cairo, EG</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm transition-colors">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-gray-600 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-gray-600 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-gray-600 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                'Sending...'
              ) : isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
