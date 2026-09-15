import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/isometric-holds/Navbar';
import { Hero } from '../components/isometric-holds/Hero';
import { ScienceSection } from '../components/isometric-holds/ScienceSection';
import { ProtocolExplorer } from '../components/isometric-holds/ProtocolExplorer';
import { FeaturesGrid } from '../components/isometric-holds/FeaturesGrid';
import { InteractiveTimer } from '../components/isometric-holds/InteractiveTimer';
import { DownloadSection } from '../components/isometric-holds/DownloadSection';
import { AboutDeveloper } from '../components/isometric-holds/AboutDeveloper';
import { Footer } from '../components/isometric-holds/Footer';

export const IsometricHolds: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-300 font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
      <Helmet>
        <title>Isometric Holds — Ancient Strength. Modern Precision.</title>
        <meta
          name="description"
          content="Master static muscular tension, bulletproof tendon resilience, and mental stillness with zero equipment. 5 battle-tested protocols, 28+ holds, offline-first Android app."
        />
        <meta property="og:title" content="Isometric Holds — Ancient Strength. Modern Precision." />
        <meta
          property="og:description"
          content="Build unbreakable tendons, reduce joint pain, and boost muscular endurance with science-backed isometric protocols. 100% offline & private."
        />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ScienceSection />
        <ProtocolExplorer />
        <FeaturesGrid />
        <InteractiveTimer />
        <DownloadSection />
        <AboutDeveloper />
      </main>
      <Footer />
    </div>
  );
};

export default IsometricHolds;
