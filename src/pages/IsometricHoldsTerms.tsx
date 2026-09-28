import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FileText,
  Shield,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Globe,
  Scale,
  Lock,
  Mail,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  HeartPulse,
  Layers,
  ArrowUp
} from 'lucide-react';
import {
  isometricTermsTranslations,
} from '../data/isometric-holds/termsOfUse';

export const IsometricHoldsTerms: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    const saved = localStorage.getItem('isometricholds_lang');
    if (saved === 'ar' || saved === 'en') return saved;
    return navigator.language.startsWith('ar') ? 'ar' : 'en';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('isometricholds_lang', lang);

    return () => {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    };
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = isometricTermsTranslations[lang];
  const isRtl = lang === 'ar';

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-950 text-gray-100 selection:bg-amber-500/30 selection:text-amber-300 font-['Plus_Jakarta_Sans',system-ui,sans-serif] ${
        isRtl ? 'font-arabic' : ''
      }`}
    >
      <Helmet>
        <title>
          {isRtl
            ? 'شروط الاستخدام واتفاقية المتدرب | Isometric Holds'
            : 'Terms of Use & User Agreement — Isometric Holds'}
        </title>
        <meta
          name="description"
          content={
            isRtl
              ? 'شروط الاستخدام الرسمية لتطبيق Isometric Holds، متضمنة ترخيص الاستخدام الشخصي، وسيادة ملكية البيانات، وإخلاء المسؤولية الصحية والطبية.'
              : 'Official Terms of Use and User Agreement for Isometric Holds, covering personal licensing, data ownership, and health safety disclaimers.'
          }
        />
        <meta
          property="og:title"
          content={
            isRtl
              ? 'شروط الاستخدام | Isometric Holds'
              : 'Terms of Use — Isometric Holds'
          }
        />
        <meta
          property="og:description"
          content={t.subtitle}
        />
        <link rel="canonical" href="https://mabdelhay.com/isometric-holds/terms-of-use" />
      </Helmet>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-gray-950/85 backdrop-blur-md border-b border-gray-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand & Return Links */}
            <div className="flex items-center gap-4">
              <Link
                to="/isometric-holds"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-gray-900 border border-gray-800 hover:border-amber-500/40 transition-all"
              >
                {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.backToHome}</span>
              </Link>

              <div className="h-5 w-px bg-gray-800 hidden sm:block" />

              <Link to="/isometric-holds" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm shadow-inner group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                  IH
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
                    {t.appName}
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">
                      {t.appVersion}
                    </span>
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {t.title}
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <Link
                to="/isometric-holds/privacy"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
                title="View Data Privacy Policy"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
              </Link>

              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-gray-900 border border-gray-800 hover:border-amber-500/40 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative py-14 md:py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 border-b border-gray-800/80 overflow-hidden">
        {/* Ambient decorative blurs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <strong className="text-gray-200">{isRtl ? 'التطبيق:' : 'App:'}</strong> {t.appName} ({t.appVersion})
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-gray-200">{isRtl ? 'المطور:' : 'Developer:'}</strong> {t.developerName}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <strong className="text-gray-200">{isRtl ? 'تاريخ التحديث:' : 'Last Updated:'}</strong> {t.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents & Info Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents Box */}
              <div className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800 shadow-sm backdrop-blur-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>{t.tableOfContents}</span>
                </h3>
                <nav className="space-y-1 text-sm max-h-[55vh] overflow-y-auto pr-1">
                  {t.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-gray-800/60 transition-colors text-xs sm:text-sm"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Developer & Legal Contact Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                    MA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isRtl ? 'المطور والاستفسارات القانونية' : 'Legal & Developer Contact'}
                    </h4>
                    <p className="text-sm font-bold text-white">{t.developerName}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-gray-800/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a
                      href={`mailto:${t.developerEmail}`}
                      className="hover:underline font-mono text-amber-400 break-all"
                    >
                      {t.developerEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-400 shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/mohammed-abdelhay"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline text-blue-400"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Link to Privacy Policy Card */}
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'حماية وخصوصية البيانات' : 'Privacy Protection'}</span>
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {isRtl
                    ? 'تعمل معمارية التطبيق دون جمع أي بيانات شخصية أو مؤشرات بيومترية.'
                    : 'Isometric Holds operates with zero cloud data transmission and zero telemetry.'}
                </p>
                <Link
                  to="/isometric-holds/privacy"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  <span>{t.privacyLinkText}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>

            </div>
          </aside>

          {/* Main Terms Articles */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            
            {/* Summary Notice Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-gray-900 to-gray-950 text-white border-2 border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    Offline First • Personal License Agreement
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    {t.summaryNoticeTitle}
                  </h2>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-black/40 border-l-4 border-amber-400 font-medium text-gray-200 text-sm sm:text-base leading-relaxed">
                “{t.summaryNoticeText}”
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
                <Link
                  to="/isometric-holds/privacy"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
                >
                  <span>{t.summaryNoticeLinkText}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
                <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 font-mono text-[11px] border border-amber-500/30">
                  Non-Commercial License
                </span>
              </div>
            </div>

            {/* 4 Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.keyHighlights.map((hl) => (
                <div
                  key={hl.title}
                  className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-amber-500/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                      {hl.badge}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-sm text-white pt-1">{hl.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Exercise Safety Callout Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-100 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <HeartPulse className="w-5 h-5 text-rose-400" />
                <span>{isRtl ? 'تنبيه السلامة البدنية والتنفس' : 'Exercise Safety & Continuous Breathing Principle'}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {isRtl
                  ? 'تمارين الثبات الإيزومتري المكثف ترفع ضغط الدم الشرياني المؤقت وتضع جهداً هائلاً على الأوتار. احرص دائماً على التنفس الإيقاعي المستمر وتجنب كتم الأنفاس (مناورة فالسالفا) لتفادي الدوار أو الإغماء.'
                  : 'Maximal isometric contractions induce significant transient spikes in arterial blood pressure. Never hold your breath (Valsalva maneuver) during maximal sets; maintain smooth, continuous diaphragmatic breathing throughout every hold.'}
              </p>
            </div>

            {/* Detailed Articles / Sections */}
            <div className="space-y-12 divide-y divide-gray-800/80">
              {t.sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 space-y-5 ${idx > 0 ? 'pt-10' : ''}`}
                >
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
                    <span>{section.title}</span>
                  </h2>

                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {section.listItems.map((item, lIdx) => (
                        <li
                          key={lIdx}
                          className="flex items-start gap-3 text-sm sm:text-base text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div
                      className={`p-5 rounded-2xl border text-sm leading-relaxed flex items-start gap-3.5 ${
                        section.callout.type === 'success'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                          : section.callout.type === 'warning'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-200'
                      }`}
                    >
                      {section.callout.type === 'success' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {section.callout.type === 'warning' && (
                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      {section.callout.type === 'info' && (
                        <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong className="block font-bold text-white mb-1">
                          {section.callout.title}
                        </strong>
                        <span>{section.callout.text}</span>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800/80 py-12 text-gray-400 text-xs mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                IH
              </div>
              <div>
                <div className="text-white font-bold text-sm">Isometric Holds</div>
                <div className="text-gray-500">v2.3.0 Production • Offline First • User Agreement</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <Link to="/isometric-holds" className="hover:text-amber-400 transition">
                {isRtl ? 'الرئيسية' : 'Home'}
              </Link>
              <Link to="/isometric-holds/privacy" className="hover:text-amber-400 transition">
                {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link to="/isometric-holds/terms-of-use" className="text-amber-400 font-semibold transition">
                {isRtl ? 'شروط الاستخدام' : 'Terms of Use'}
              </Link>
              <Link to="/" className="hover:text-amber-400 transition">
                {isRtl ? 'المطور' : 'Developer'}
              </Link>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-white transition"
            >
              <span>{isRtl ? 'للأعلى' : 'Back to top'}</span>
              <ArrowUp size={14} />
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
            <p>© {new Date().getFullYear()} Isometric Holds. Created by Mohammed Abdelhay. All rights reserved.</p>
            <div className="flex items-center gap-2 text-gray-400">
              <Scale size={14} className="text-amber-400" />
              <span>Official Terms of Use • Personal Fitness License</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IsometricHoldsTerms;
