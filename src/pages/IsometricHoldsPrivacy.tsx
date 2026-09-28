import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Globe,
  Lock,
  HardDrive,
  Volume2,
  Vibrate,
  Smartphone,
  WifiOff,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  ExternalLink,
  Calendar,
  Layers,
  ArrowUp,
  FileCheck,
  Database,
  ServerOff,
  Scale
} from 'lucide-react';
import {
  isometricPrivacyPolicyTranslations,
} from '../data/isometric-holds/privacyPolicy';

export const IsometricHoldsPrivacy: React.FC = () => {
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

  const p = isometricPrivacyPolicyTranslations[lang];
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
            ? 'سياسة حماية وخصوصية البيانات | Isometric Holds'
            : 'Data Privacy & Protection Policy — Isometric Holds'}
        </title>
        <meta
          name="description"
          content={
            isRtl
              ? 'سياسة حماية وخصوصية البيانات الرسمية لتطبيق Isometric Holds. معايير أمان معمارية متوافقة مع GDPR و CCPA مع تشغيل محلي 100% دون خوادم سحابية.'
              : 'Official Data Privacy & Protection Policy for Isometric Holds. GDPR, CCPA/CPRA, and Google Play Data Safety compliant with 100% offline sandboxed execution.'
          }
        />
        <meta
          property="og:title"
          content={
            isRtl
              ? 'سياسة حماية وخصوصية البيانات | Isometric Holds'
              : 'Data Privacy & Protection Policy — Isometric Holds'
          }
        />
        <meta
          property="og:description"
          content={p.subtitle}
        />
        <link rel="canonical" href="https://mabdelhay.com/isometric-holds/privacy" />
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
                <span>{p.backToHome}</span>
              </Link>

              <div className="h-5 w-px bg-gray-800 hidden sm:block" />

              <Link to="/isometric-holds" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm shadow-inner group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                  IH
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
                    {p.appName}
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">
                      {p.appVersion}
                    </span>
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {p.title}
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <Link
                to="/isometric-holds/terms-of-use"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
                title="View Terms of Use"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>{isRtl ? 'شروط الاستخدام' : 'Terms of Use'}</span>
              </Link>

              <Link
                to="/"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-gray-200 bg-gray-900/60 hover:bg-gray-900 border border-gray-800 transition-colors"
                title="Return to Mohammed Abdelhay Portfolio"
              >
                <span>{isRtl ? 'ملف الأعمال' : 'Portfolio'}</span>
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
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{p.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {p.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {p.subtitle}
            </p>

            {/* Standards Compliance Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-[11px] font-mono text-emerald-400">
                GDPR (EU) Art. 25 Compliant
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-[11px] font-mono text-amber-400">
                CCPA / CPRA "Do Not Sell" Certified
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-[11px] font-mono text-blue-400">
                Google Play Data Safety Aligned
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 text-[11px] font-mono text-purple-400">
                Zero Telemetry Architecture
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <strong className="text-gray-200">{isRtl ? 'التطبيق:' : 'App:'}</strong> {p.appName} ({p.appVersion})
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-gray-200">{isRtl ? 'المطور والمسؤول:' : 'Data Controller:'}</strong> {p.developerName}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <strong className="text-gray-200">{isRtl ? 'تاريخ التحديث:' : 'Last Updated:'}</strong> {p.lastUpdated}
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
                  <span>{p.tableOfContents}</span>
                </h3>
                <nav className="space-y-1 text-sm max-h-[55vh] overflow-y-auto pr-1">
                  {p.sections.map((sec) => (
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

              {/* Data Controller & Contact Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
                    MA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isRtl ? 'مسؤول حماية البيانات والتحكم' : 'Data Controller & Architect'}
                    </h4>
                    <p className="text-sm font-bold text-white">{p.developerName}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-gray-800/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a
                      href={`mailto:${p.developerEmail}`}
                      className="hover:underline font-mono text-amber-400 break-all"
                    >
                      {p.developerEmail}
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

              {/* Quick Privacy Protection Audit */}
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'ضوابط حماية البيانات الفورية' : 'Data Protection Snapshot'}</span>
                </h4>
                <div className="space-y-2.5 text-xs text-gray-400">
                  <div className="flex items-center justify-between pb-1 border-b border-gray-800/50">
                    <span>{isRtl ? 'جمع البيانات عن بُعد' : 'Remote Data Collection'}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{isRtl ? 'صفر (لا يوجد)' : 'Zero'}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-gray-800/50">
                    <span>{isRtl ? 'تشفير التخزين الداخلي' : 'Storage Encryption'}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{isRtl ? 'تشفير الجهاز FBE' : 'OS FBE Sandboxed'}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-gray-800/50">
                    <span>{isRtl ? 'مشاركة أو بيع البيانات' : 'Data Sale / Brokering'}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{isRtl ? 'محظور تماماً' : 'Prohibited'}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 border-b border-gray-800/50">
                    <span>{isRtl ? 'حق محو البيانات (Art. 17)' : 'Right to Erasure (Art. 17)'}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{isRtl ? 'فوري ومستقل' : 'Autonomous & Instant'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{isRtl ? 'الاتصال بالإنترنت' : 'Network Requirement'}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{isRtl ? '100% دون اتصال' : '100% Offline'}</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Privacy Articles & Disclosures */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            
            {/* Guarantee Highlight Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-gray-900 to-gray-950 text-white border-2 border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    Privacy-by-Design • ISO/IEC 27701 & GDPR Core Principles
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    {p.summaryTitle}
                  </h2>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-black/40 border-l-4 border-amber-400 font-medium text-gray-200 text-sm sm:text-base leading-relaxed">
                “{p.summaryText}”
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
                  Zero In-App Ads • Zero Tracking SDKs
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 font-mono text-[11px] border border-amber-500/30">
                  Sandboxed Local Storage Only
                </span>
              </div>
            </div>

            {/* 4 Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.keyHighlights.map((hl) => (
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

            {/* Google Play & App Store Data Safety Audit Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-900/60 border border-gray-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {p.dataSafetyAudit.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {p.dataSafetyAudit.subtitle}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800 text-gray-400">
                      <th className={`py-3 px-3 font-semibold ${isRtl ? 'text-right' : 'text-left'}`}>
                        {isRtl ? 'فئة البيانات' : 'Data Category'}
                      </th>
                      <th className={`py-3 px-3 font-semibold ${isRtl ? 'text-right' : 'text-left'}`}>
                        {isRtl ? 'حالة الجمع' : 'Collection Status'}
                      </th>
                      <th className={`py-3 px-3 font-semibold ${isRtl ? 'text-right' : 'text-left'}`}>
                        {isRtl ? 'التفسير الفني للأمان' : 'Technical Safeguard'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60">
                    {p.dataSafetyAudit.items.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-3 text-gray-200 font-medium whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{item.status}</span>
                          </span>
                        </td>
                        <td className="py-3 px-3 text-gray-400">
                          {item.explanation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Permission Visual Cards */}
            <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>{isRtl ? 'الأذونات الفعلية المستخدمة على الجهاز' : 'How Device Capabilities Are Used'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">{isRtl ? 'الصوت والكلام (TTS)' : 'Audio & TTS'}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {isRtl
                      ? 'تشغيل العد التنازلي ونطق أسماء التمارين عبر محرك الجهاز المدمج دون تسجيل أي صوت.'
                      : 'Plays countdowns and vocal cues via on-device speech engine. Zero mic recording.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Vibrate className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">{isRtl ? 'الاهتزاز اللمسي' : 'Haptic Vibration'}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {isRtl
                      ? 'نبضات اهتزاز خفيفة لتنبيهك ببدء وانتهاء فترات الثبات دون الحاجة للنظر للشاشة.'
                      : 'Gentle tactile feedback when holds start, reach halfway, or conclude.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">{isRtl ? 'إبقاء الشاشة نشطة' : 'Keep Screen Awake'}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {isRtl
                      ? 'منع شاشة الهاتف من الدخول في السكون أثناء تشغيل جلسة التمرين فقط.'
                      : 'Prevents display sleep during active workout timers. Zero background tracking.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Articles / Sections */}
            <div className="space-y-12 divide-y divide-gray-800/80">
              {p.sections.map((section, idx) => (
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
                <div className="text-gray-500">v2.3.0 Production • Data Privacy & Protection Shield</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <Link to="/isometric-holds" className="hover:text-amber-400 transition">
                {isRtl ? 'الرئيسية' : 'Home'}
              </Link>
              <Link to="/isometric-holds/privacy" className="text-emerald-400 font-semibold transition">
                {isRtl ? 'الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link to="/isometric-holds/terms-of-use" className="hover:text-amber-400 transition">
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
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>100% Privacy & Data Protection Safeguarded • Zero Telemetry</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IsometricHoldsPrivacy;
