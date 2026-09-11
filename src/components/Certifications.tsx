import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'IBM AI Product Manager Professional Certificate',
    issuer: 'Coursera / IBM',
    icon: Award,
    link: 'https://www.credly.com/badges/64e62f8e-2605-4c33-8d44-8e7c8bfeda0e/linked_in_profile'
  },
  {
    id: 2,
    title: 'Generative AI for Product Managers Specialization',
    issuer: 'Coursera',
    icon: Award,
    link: 'https://www.credly.com/badges/11a41b13-b4ef-4816-96e4-31e057f5628a/linked_in_profile'
  },
  {
    id: 3,
    title: 'Google AI Professional Certificate',
    issuer: 'Coursera / Google',
    icon: ShieldCheck,
    link: 'https://www.credly.com/badges/7c1fbb77-06ad-4a98-af1f-22d814844a19/linked_in_profile'
  },
  {
    id: 4,
    title: 'Microsoft Certified Professional',
    issuer: 'Microsoft',
    icon: ShieldCheck,
    link: 'https://learn.microsoft.com/en-us/users/mabdelhay/credentials/df2810729c8db8a0?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
  {
    id: 5,
    title: 'Professional Cloud Architect Certification',
    issuer: 'Google Cloud',
    icon: Award,
    link: 'https://www.credly.com/badges/0d0cb36d-f4ac-4047-a1a5-27e2ca0c5177/public_url'
  },
  {
    id: 6,
    title: 'Google AI Specialization',
    issuer: 'Coursera',
    icon: Award,
    link: 'https://www.coursera.org/account/accomplishments/specialization/BQC5RKAQ5VF5'
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Certifications() {
  return (
    <section id="certifications" className="snap-start scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white flex items-center gap-3">
            <Award className="text-blue-600 dark:text-blue-400" size={32} />
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Professional credentials and verified achievements.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={itemVariants}
              className="group p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <cert.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Issued by {cert.issuer}
                </div>
              </div>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-xl transition-colors"
              >
                View Credential <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
