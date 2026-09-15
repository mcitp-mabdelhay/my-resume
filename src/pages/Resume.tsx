import { Suspense, lazy, useMemo, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useActiveSection } from '../hooks/useActiveSection';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import BackToTop from '../components/BackToTop';
import { SectionSkeleton } from '../components/Skeleton';

const About = lazy(() => import('../components/About'));
const Experience = lazy(() => import('../components/Experience'));
const Education = lazy(() => import('../components/Education'));
const Certifications = lazy(() => import('../components/Certifications'));
const Publications = lazy(() => import('../components/Publications'));
const Projects = lazy(() => import('../components/Projects'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

export default function Resume() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enable scroll snapping only when on Resume page
  useEffect(() => {
    document.documentElement.classList.add('resume-snap-enabled');
    return () => {
      document.documentElement.classList.remove('resume-snap-enabled');
    };
  }, []);

  const sectionIds = useMemo(() => ['hero', 'about', 'experience', 'education', 'certifications', 'publications', 'projects', 'testimonials', 'contact'], []);
  const activeSection = useActiveSection(sectionIds);

  const sectionMeta: Record<string, { title: string, description: string }> = {
    hero: { title: 'Mohammed Abdelhay - Senior Solutions Architect', description: 'Portfolio of Mohammed Abdelhay, Senior Solutions Architect and Data Scientist.' },
    about: { title: 'About Me - Mohammed Abdelhay', description: 'Learn more about my background, skills, and expertise.' },
    experience: { title: 'Experience - Mohammed Abdelhay', description: 'Explore my professional journey and past roles.' },
    education: { title: 'Education - Mohammed Abdelhay', description: 'My academic background and qualifications.' },
    certifications: { title: 'Certifications - Mohammed Abdelhay', description: 'Professional credentials and verified achievements.' },
    publications: { title: 'Publications - Mohammed Abdelhay', description: 'Academic research and scientific contributions.' },
    projects: { title: 'Projects - Mohammed Abdelhay', description: 'View selected projects spanning deep learning, cloud architecture, and high-availability systems.' },
    testimonials: { title: 'Testimonials - Mohammed Abdelhay', description: 'Read recommendations from colleagues and clients.' },
    contact: { title: 'Contact - Mohammed Abdelhay', description: 'Get in touch for new projects and collaborations.' },
  };

  const currentMeta = sectionMeta[activeSection] || sectionMeta.hero;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
      </Helmet>
      <Cursor />
      <BackToTop />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Publications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
