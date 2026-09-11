import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert(error instanceof Error ? error.message : 'An error occurred while sending the message. Please ensure the email configuration is setup.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-md transition-colors">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Email</p>
                  <a href="mailto:mohammed.m.abdelhay@gmail.com" className="text-gray-900 dark:text-white font-medium hover:underline transition-colors">
                    mohammed.m.abdelhay@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Phone</p>
                  <a href="tel:+201008983687" className="text-gray-900 dark:text-white font-medium hover:underline transition-colors">
                    +20 100 898 3687
                  </a>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin size={20} className="text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium transition-colors">Riyadh, KSA / Cairo, EG</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form variants={itemVariants} onSubmit={handleSubmit} noValidate className="space-y-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm transition-colors">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-black dark:focus:ring-gray-600'} bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-black dark:focus:ring-gray-600'} bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : 'border-gray-200 dark:border-gray-700 focus:ring-black dark:focus:ring-gray-600'} bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
              </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
