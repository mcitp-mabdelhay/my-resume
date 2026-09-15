import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Database, KeyRound, Lock, FileSpreadsheet, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Language, TranslationContent } from './translations';

interface SecurityPrivacyProps {
  lang: Language;
  t: TranslationContent;
}

export const SecurityPrivacy: React.FC<SecurityPrivacyProps> = ({ lang, t }) => {
  return (
    <section id="security" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.privacy.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.privacy.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {t.privacy.subtitle}
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{t.privacy.card1Title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.privacy.card1Desc}</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{t.privacy.card2Title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.privacy.card2Desc}</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{t.privacy.card3Title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{t.privacy.card3Desc}</p>
          </div>

        </div>

        {/* Comparison Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-800 to-teal-950/70 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-base text-white">Full Privacy Guarantee</h4>
              <p className="text-xs text-slate-300">
                You retain complete ownership of your vehicle history. Delete, share, or export at any time.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              OAuth 2.0 Client-Only
            </span>
            <Link
              to="/auto-car/privacy"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all"
            >
              <span>{lang === 'ar' ? 'سياسة الخصوصية وتوثيق Google' : 'Google Verification & Privacy Policy'}</span>
              {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </Link>
          </div>
        </div>

        {/* Google Verification & Limited Use Callout */}
        <div id="privacy" className="mt-8 p-6 rounded-2xl bg-slate-800/90 border border-emerald-500/40 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>{lang === 'ar' ? 'إقرار التحقق لخدمات Google API' : 'Google API Limited Use Disclosure'}</span>
          </div>
          <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-emerald-500 pl-3">
            {lang === 'ar'
              ? 'يلتزم استخدام تطبيق AutoTracker ونقله لأي معلومات يتم تلقيها من واجهات برمجة تطبيقات Google إلى أي تطبيق آخر بسياسة بيانات مستخدم خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود (Limited Use).'
              : "AutoTracker's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements."}
          </blockquote>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
            <span>{lang === 'ar' ? 'بياناتك لا تُستخدم للإعلانات أو تدريب الذكاء الاصطناعي العام.' : 'No ads • No data broking • No generalized AI training'}</span>
            <Link to="/auto-car/privacy" className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 flex items-center gap-1">
              <span>{lang === 'ar' ? 'عرض سياسة الخصوصية الكاملة' : 'View Full Privacy Policy'}</span>
              {lang === 'ar' ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
