import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Globe,
  Sun,
  Moon,
  Lock,
  FileSpreadsheet,
  HardDrive,
  Calendar,
  KeyRound,
  Trash2,
  ExternalLink,
  Mail,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Database,
  Scale
} from 'lucide-react';
import { privacyPolicyTranslations } from '../data/auto-car/privacyPolicy';
import type { Language } from '../components/auto-car/translations';

export function AutoCarPrivacy() {
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

  // Synchronize direction and language attribute on document
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

  const p = privacyPolicyTranslations[lang];
  const isRtl = lang === 'ar';

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans ${
        isRtl ? 'font-arabic' : ''
      }`}
    >
      <Helmet>
        <title>
          {isRtl
            ? 'سياسة الخصوصية وتوافق Google API | AutoTracker'
            : 'Privacy Policy & Google API Compliance | AutoTracker'}
        </title>
        <meta
          name="description"
          content={
            isRtl
              ? 'سياسة الخصوصية الرسمية لتطبيق AutoTracker متوافقة مع شروط التحقق من Google وسياسة الاستخدام المحدود (Limited Use).'
              : 'Official Privacy Policy for AutoTracker, compliant with Google OAuth verification requirements and the Google API Services User Data Policy.'
          }
        />
        <meta property="og:title" content="AutoTracker Privacy Policy" />
        <meta
          property="og:description"
          content="AutoTracker Privacy Policy, data handling, and Google API Limited Use compliance."
        />
        <link rel="canonical" href="https://mabdelhay.com/auto-car/privacy" />
      </Helmet>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Return Link */}
            <div className="flex items-center gap-4">
              <Link
                to="/auto-car"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all border border-slate-200/60 dark:border-slate-700/60"
              >
                {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{p.backToHome}</span>
              </Link>

              <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-3">
                <img
                  src="/auto-car/icon.png"
                  alt="AutoTracker"
                  className="w-9 h-9 rounded-xl shadow-md shadow-emerald-500/20 object-cover"
                />
                <div className="hidden sm:flex flex-col">
                  <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                    AutoTracker
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {p.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Toggles */}
            <div className="flex items-center gap-2">
              <Link
                to="/auto-car/terms"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
              >
                <Scale className="w-3.5 h-3.5 text-emerald-500" />
                <span>{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</span>
              </Link>

              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="relative py-14 md:py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{p.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {p.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {p.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <strong className="text-slate-200">{isRtl ? 'التطبيق:' : 'App:'}</strong> {p.appName}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-slate-200">{isRtl ? 'المطور:' : 'Developer:'}</strong> {p.developerName}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-slate-200">{isRtl ? 'تاريخ التحديث:' : 'Last Updated:'}</strong> {p.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span>{p.tableOfContents}</span>
                </h3>
                <nav className="space-y-1 text-sm">
                  {p.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800/60 transition-colors"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Developer & Contact Quick Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {isRtl ? 'المساعدة والاستفسارات' : 'Support & Legal Contact'}
                </h4>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                    <a
                      href={`mailto:${p.developerEmail}`}
                      className="hover:underline font-mono text-emerald-600 dark:text-emerald-400 break-all"
                    >
                      {p.developerEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-emerald-500 shrink-0" />
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      github.com/mcitp-mabdelhay/auto-car
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Privacy Articles & Disclosures */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            
            {/* Mandatory Highlight Banner: Google API Limited Use Disclosure */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border-2 border-emerald-500/50 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Google OAuth Compliance
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    {p.googleNoticeTitle}
                  </h2>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-black/40 border-l-4 border-emerald-400 font-medium text-slate-200 text-sm sm:text-base leading-relaxed">
                “{p.googleNoticeText}”
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
                >
                  <span>{p.googleNoticeLinkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                  Zero Ads • Zero Data Brokering
                </span>
              </div>
            </div>

            {/* Google Scope Quick Reference Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Google Sheets</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isRtl
                    ? 'تسجيل ومزامنة بيانات الصيانة والوقود في جدول بيانات خاص بك فقط.'
                    : 'Syncs maintenance records and fuel logs inside your designated sheet.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <HardDrive className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Google Drive File</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isRtl
                    ? 'إذن مقيد (drive.file) لحفظ الفواتير وصور الإيصالات الخاصة بـ AutoTracker فقط.'
                    : 'Per-file scope strictly for receipts and files created by AutoTracker.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Google Calendar</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isRtl
                    ? 'إنشاء مواعيد التذكيرات وتنبيهات الصيانة المستقبلية في تقويمك.'
                    : 'Creates reminders for scheduled service intervals in your calendar.'}
                </p>
              </div>
            </div>

            {/* Dynamic Detailed Sections */}
            <div className="space-y-12 divide-y divide-slate-200 dark:divide-slate-800/80">
              {p.sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 space-y-5 ${idx > 0 ? 'pt-10' : ''}`}
                >
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                    <span>{section.title}</span>
                  </h2>

                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {section.listItems.map((item, lIdx) => (
                        <li
                          key={lIdx}
                          className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div
                      className={`p-5 rounded-2xl border text-sm leading-relaxed flex items-start gap-3.5 ${
                        section.callout.type === 'success'
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : section.callout.type === 'warning'
                          ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                          : 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200'
                      }`}
                    >
                      {section.callout.type === 'success' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {section.callout.type === 'warning' && (
                        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      )}
                      {section.callout.type === 'info' && (
                        <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1">
                        <h4 className="font-bold">{section.callout.title}</h4>
                        <p>{section.callout.text}</p>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom Call to Action / Back Link */}
            <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/auto-car"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all"
              >
                {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{p.backToHome}</span>
              </Link>

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                {isRtl
                  ? 'تم صياغة هذه السياسة لتتوافق مع معايير التحقق والتطبيق في Google Cloud Console.'
                  : 'Crafted to fully comply with Google Cloud Console OAuth verification guidelines.'}
              </p>
            </div>

          </article>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AutoTracker • {p.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auto-car/terms" className="hover:text-emerald-400 transition-colors">
              {lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
            </Link>
            <span>•</span>
            <p>© {new Date().getFullYear()} {p.developerName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AutoCarPrivacy;
