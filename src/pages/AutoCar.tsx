import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/auto-car/Navbar';
import { Hero } from '../components/auto-car/Hero';
import { Features } from '../components/auto-car/Features';
import { InteractivePreview } from '../components/auto-car/InteractivePreview';
import { HowItWorks } from '../components/auto-car/HowItWorks';
import { SecurityPrivacy } from '../components/auto-car/SecurityPrivacy';
import { Faq } from '../components/auto-car/Faq';
import { Footer } from '../components/auto-car/Footer';
import { translations } from '../components/auto-car/translations';
import type { Language } from '../components/auto-car/translations';

export function AutoCar() {
  // Language state with persistent storage
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('autotracker_lang');
    if (saved === 'ar' || saved === 'en') return saved;
    return navigator.language.startsWith('ar') ? 'ar' : 'en';
  });

  // Dark mode state with persistent storage
  const [isDark, setIsDark] = useState<boolean>(() => {
    return document.documentElement.classList.contains('dark');
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Synchronize direction and language attribute on document, clean up on unmount
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('autotracker_lang', lang);

    return () => {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    };
  }, [lang]);

  // Synchronize dark theme class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Helmet>
        <title>{lang === 'ar' ? 'AutoTracker | متتبع صيانة المركبات الذكي ومزامنة جداول جوجل' : 'AutoTracker | Smart Vehicle Maintenance Tracker & Google Sheets Sync'}</title>
        <meta
          name="description"
          content={
            lang === 'ar'
              ? 'تتبع صيانة سيارتك، مصاريف الوقود، وفواتير الإصلاحات مع مزامنة سحابية ثنائية مع جداول بيانات Google Drive وبدون أي تقييد.'
              : 'Track your vehicle maintenance, fuel expenses, and repair receipts with seamless Google Sheets two-way sync, Google Calendar reminders, and zero vendor lock-in.'
          }
        />
        <meta property="og:title" content="AutoTracker | Smart Vehicle Maintenance Tracker" />
        <meta
          property="og:description"
          content="Vehicle maintenance and expense tracker with 2-way Google Sheets sync."
        />
      </Helmet>

      {/* Sticky Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        t={t}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero lang={lang} t={t} />
        <Features lang={lang} t={t} />
        <InteractivePreview lang={lang} t={t} />
        <HowItWorks lang={lang} t={t} />
        <SecurityPrivacy lang={lang} t={t} />
        <Faq lang={lang} t={t} />
      </main>

      {/* Footer & CTA */}
      <Footer lang={lang} onToggleLang={toggleLang} t={t} />
    </div>
  );
}

export default AutoCar;
