export interface TermsSection {
  id: string;
  title: string;
  content: string[];
  listItems?: string[];
  callout?: {
    type: 'info' | 'success' | 'warning';
    title: string;
    text: string;
  };
}

export interface TermsOfUseContent {
  lastUpdated: string;
  effectiveDate: string;
  backToHome: string;
  privacyLinkText: string;
  title: string;
  subtitle: string;
  appName: string;
  appVersion: string;
  developerName: string;
  developerEmail: string;
  badge: string;
  tableOfContents: string;
  summaryNoticeTitle: string;
  summaryNoticeText: string;
  summaryNoticeLinkText: string;
  keyHighlights: {
    title: string;
    description: string;
    badge: string;
  }[];
  sections: TermsSection[];
}

export const isometricTermsTranslations: Record<'en' | 'ar', TermsOfUseContent> = {
  en: {
    lastUpdated: 'September 28, 2026',
    effectiveDate: 'September 28, 2026',
    backToHome: 'Back to Isometric Holds',
    privacyLinkText: 'View Data Privacy Policy',
    title: 'Terms of Use',
    subtitle:
      'Clear user agreement, intellectual property terms, software licensing guidelines, and essential physical safety & health disclaimers for the Isometric Holds application.',
    appName: 'Isometric Holds',
    appVersion: 'v2.3.0',
    developerName: 'Mohammed Abdelhay',
    developerEmail: 'mamado2000@gmail.com',
    badge: 'Legal Terms & User Agreement',
    tableOfContents: 'Table of Contents',
    summaryNoticeTitle: 'Offline-First & User Safety Agreement',
    summaryNoticeText:
      'Isometric Holds is a standalone, offline-first physical conditioning utility. You retain 100% ownership of all workout records saved on your device. By using this software, you acknowledge the intense physical nature of isometric training and agree to train responsibly with proper medical clearance.',
    summaryNoticeLinkText: 'Review our Data Privacy & Protection Policy',
    keyHighlights: [
      {
        title: 'Complete User Data Sovereignty',
        description:
          'You retain exclusive ownership over all workout logs, personal bests, and custom routines stored locally on your device hardware.',
        badge: '100% User Owned',
      },
      {
        title: 'Personal Training License',
        description:
          'Free non-commercial license granted for individual physical fitness, martial arts conditioning, and tendon resilience training.',
        badge: 'Free Personal License',
      },
      {
        title: 'Crucial Health & Medical Disclaimer',
        description:
          'Static holds exert intense cardiovascular and tendon tension. Consult a licensed physician prior to beginning maximum-effort holds.',
        badge: 'Medical Advisory',
      },
      {
        title: 'Zero Third-Party Telemetry',
        description:
          'No background telemetry, ads, or data monetizing scripts are packaged with this software.',
        badge: 'Zero Tracking',
      },
    ],
    sections: [
      {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: [
          'Welcome to Isometric Holds ("the Application", "the App", or "the Service"), engineered and published by Mohammed Abdelhay ("Developer", "we", or "us").',
          'By downloading, installing, accessing, or using Isometric Holds on any mobile device or platform, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Use ("Terms"). If you do not agree to all terms and conditions set forth herein, you must immediately cease using and uninstall the Application.',
          'These Terms govern your use of the application binary, algorithms, instructional cues, workout routines, and associated web interfaces.',
        ],
        callout: {
          type: 'info',
          title: 'Legally Binding Agreement',
          text: 'Using the app constitutes acceptance of these Terms and our companion Data Privacy & Protection Policy.',
        },
      },
      {
        id: 'license-grant',
        title: '2. License Grant & Permitted Use',
        content: [
          'Subject to your ongoing compliance with these Terms, Developer grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and execute the Application on personal mobile devices solely for your personal, non-commercial fitness training.',
          'This license does not convey any ownership interest in the software codebase, brand assets, or underlying intellectual property.',
        ],
        listItems: [
          'Permitted: Installing and using the timer protocols for personal conditioning, athletic preparation, and martial arts training.',
          'Permitted: Creating and executing custom workout routines on your personal mobile hardware.',
          'Prohibited: Commercial sublicensing, reselling, renting, or leasing the Application or modified APK packages.',
          'Prohibited: Decompiling, disassembling, reverse engineering, or attempting to extract source code except where explicitly authorized by mandatory open-source provisions.',
          'Prohibited: Removing, altering, or obscuring copyright notices, trademarks, or proprietary markings.',
        ],
      },
      {
        id: 'medical-disclaimer',
        title: '3. Physical Health, Exercise Safety & Medical Disclaimer',
        content: [
          'PLEASE READ THIS SECTION CAREFULLY. YOUR PHYSICAL SAFETY AND WELL-BEING DEPEND ON IT.',
          'Isometric training involves generating high levels of intramuscular tension without dynamic joint movement (both overcoming and yielding isometric holds). Sustained contractions can produce transient spikes in systolic and diastolic arterial blood pressure, intra-abdominal pressure, and tendon strain.',
          'Isometric Holds is strictly an educational timing and coaching utility. IT IS NOT A MEDICAL DEVICE, PHYSICAL THERAPY PRESCRIPTION, OR CLINICAL CARDIAC MONITOR. The information provided in the App does not constitute personalized medical advice, diagnosis, or rehabilitation protocols.',
        ],
        callout: {
          type: 'warning',
          title: 'Mandatory Physician Consultation',
          text: 'If you have hypertension, heart disease, cardiac arrhythmias, aneurysms, hernias, joint instability, or are recovering from acute tendon tears, you MUST consult a licensed medical physician or certified physical therapist before performing high-intensity isometric protocols.',
        },
        listItems: [
          'Continuous Breathing Principle: Never perform the Valsalva maneuver (prolonged breath holding against a closed glottis) during maximal holds, as this can cause dangerous blood pressure spikes or dizziness.',
          'Listen to Your Body: Stop immediately if you experience chest pain, shortness of breath, acute joint pain, dizziness, nausea, or palpitations.',
          'Progressive Overload: Begin with sub-maximal yielding holds (e.g., standard planks, moderate wall sits) before attempting maximal overcoming holds or advanced protocols.',
        ],
      },
      {
        id: 'assumption-of-risk',
        title: '4. Assumption of Risk & Release of Liability',
        content: [
          'Physical exercise, calisthenics, and isometric conditioning inherently involve risks of physical strain, joint injury, muscle tears, tendonitis, cardiovascular events, and other health complications.',
          'By using Isometric Holds, you knowingly, freely, and voluntarily assume all risks, known and unknown, associated with your participation in the exercise protocols displayed in or timed by the Application.',
          'To the fullest extent permitted by applicable law, you hereby release, discharge, and hold harmless Mohammed Abdelhay, his affiliates, contributors, and agents from any and all claims, demands, liabilities, or causes of action resulting from personal injury, physical disability, property damage, or wrongful death arising from your use of the Application.',
        ],
      },
      {
        id: 'data-ownership',
        title: '5. Data Ownership & Privacy Sovereignty',
        content: [
          'We believe in absolute user data sovereignty.',
          'All workout histories, hold records, timer configurations, and personal milestones generated within the Application remain 100% your property.',
          'Because Isometric Holds operates on a local-only, offline-first architecture, no workout telemetry or personal identifiers are uploaded to our servers or monetized with third parties.',
          'For complete information regarding our technical sandboxing and data minimization safeguards, please review our comprehensive Data Privacy & Protection Policy.',
        ],
        callout: {
          type: 'success',
          title: 'Direct Link to Privacy Policy',
          text: 'Our Data Privacy & Protection Policy is available at /isometric-holds/privacy and governs all data handling principles.',
        },
      },
      {
        id: 'intellectual-property',
        title: '6. Intellectual Property Rights',
        content: [
          'All intellectual property rights in the Application—including but not limited to the source code, timer orchestration logic, audio cue arrangements, instructional text, user interface graphics, icons, logos, and visual designs—are owned by Mohammed Abdelhay.',
          'The "Isometric Holds" brand name, "IH" crest monogram, and associated visual trade dress are protected under applicable copyright, trademark, and unfair competition laws worldwide.',
          'Any rights not expressly granted to you under these Terms are reserved by the Developer.',
        ],
      },
      {
        id: 'app-availability',
        title: '7. Software Availability & "As-Is" Warranty Disclaimer',
        content: [
          'THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.',
          'TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER STATUTORY, EXPRESS, OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
          'The Developer does not guarantee that the Application will be completely error-free, uninterrupted, or compatible with every specific mobile hardware configuration, audio chipset, or operating system modification.',
        ],
      },
      {
        id: 'limitation-of-liability',
        title: '8. Limitation of Liability',
        content: [
          'TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MOHAMMED ABDELHAY BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, DEVICE HARDWARE MALFUNCTIONS, OR PERSONAL INJURIES) ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR INABILITY TO USE THE APPLICATION.',
          'IN JURISDICTIONS THAT DO NOT PERMIT THE EXCLUSION OR LIMITATION OF LIABILITY FOR CERTAIN DAMAGES, LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.',
        ],
      },
      {
        id: 'user-conduct',
        title: '9. User Conduct & Responsible Use',
        content: [
          'When utilizing Isometric Holds, you agree to adhere to common-sense safety and operational guidelines:',
        ],
        listItems: [
          'Safe Training Environment: Ensure your training space is clear of sharp objects, slippery surfaces, and hazards before executing wall sits, horse stances, or floor holds.',
          'Device Safety: Secure your mobile device safely during workouts to prevent drops, screen damage, or accidental impacts during intense sets.',
          'No Malicious Tampering: Do not attempt to inject malicious code, alter APK binaries, or distribute counterfeit versions of the Application.',
        ],
      },
      {
        id: 'modifications-termination',
        title: '10. Modifications to Terms & Termination',
        content: [
          'We reserve the right to revise or update these Terms at our sole discretion to reflect functional enhancements, distribution platform rules, or legal developments. Revised versions will be published immediately on this website with an updated "Last Updated" timestamp.',
          'You may terminate this agreement at any time simply by discontinuing use and uninstalling the Application from your device.',
          'Developer reserves the right to terminate or restrict your license if you breach any material provision of these Terms.',
        ],
      },
      {
        id: 'governing-law',
        title: '11. Governing Law & Dispute Resolution',
        content: [
          'These Terms shall be interpreted and governed in accordance with general principles of international contract law and applicable local consumer protection statutes, without regard to conflicts of law provisions.',
          'In the event of any disagreement or dispute arising under these Terms, you and Developer agree to first seek an informal, good-faith resolution by contacting the Developer via email.',
        ],
      },
      {
        id: 'contact',
        title: '12. Legal Inquiries & Contact Information',
        content: [
          'If you have questions, feedback, or legal inquiries concerning these Terms of Use, please contact the developer directly:',
        ],
        listItems: [
          'Developer & Creator: Mohammed Abdelhay',
          'Official Support Email: mamado2000@gmail.com',
          'Project Portal: https://mabdelhay.com/isometric-holds',
          'LinkedIn: https://www.linkedin.com/in/mohammed-abdelhay',
          'GitHub Releases: https://github.com/mcitp-mabdelhay/isometric-holds/releases',
        ],
      },
    ],
  },
  ar: {
    lastUpdated: '28 سبتمبر 2026',
    effectiveDate: '28 سبتمبر 2026',
    backToHome: 'العودة إلى Isometric Holds',
    privacyLinkText: 'عرض سياسة حماية وخصوصية البيانات',
    title: 'شروط الاستخدام',
    subtitle:
      'اتفاقية الاستخدام الرسمية، وحقوق الملكية الفكرية، وضوابط ترخيص البرنامج، وإخلاء المسؤولية الصحية والطبية الجوهري لتطبيق Isometric Holds.',
    appName: 'Isometric Holds',
    appVersion: 'v2.3.0',
    developerName: 'محمد عبد الحي (Mohammed Abdelhay)',
    developerEmail: 'mamado2000@gmail.com',
    badge: 'الشروط القانونية واتفاقية المستخدم',
    tableOfContents: 'جدول المحتويات',
    summaryNoticeTitle: 'اتفاقية التشغيل دون اتصال وسلامة المتدرب',
    summaryNoticeText:
      'تطبيق Isometric Holds هو أداة رياضية مستقلة تعمل محلياً بنسبة 100% دون خوادم سحابية. أنت تحتفظ بالملكية الكاملة لسجلات تمارينك على هاتفك. باستخدامك للتطبيق، فإنك تقر بالطبيعة البدنية المكثفة لتمارين الثبات الإيزومتري وتوافق على ممارسة التدريب بمسؤولية وبموافقة طبية متخصصة.',
    summaryNoticeLinkText: 'مراجعة سياسة حماية وخصوصية البيانات',
    keyHighlights: [
      {
        title: 'السيادة الكاملة على البيانات',
        description:
          'أنت المالك الحصري لكافة سجلات التمارين، والأرقام القياسية، والجداول التدريبية المحفوظة محلياً على عتاد هاتفك.',
        badge: 'ملكية 100% للمستخدم',
      },
      {
        title: 'ترخيص استخدام شخصي مجاني',
        description:
          'ترخيص مجاني غير تجاري مخصص للياقة البدنية الفردية، وتكييف الفنون القتالية، وتقوية الأوتار.',
        badge: 'ترخيص شخصي مجاني',
      },
      {
        title: 'إخلاء مسؤولية طبي وصحي جوهري',
        description:
          'تولد تمارين الثبات ضغطاً كبيراً على الأوتار والدورة الدموية. استشر طبيباً مرخصاً قبل بدء تمارين الجهد الأقصى.',
        badge: 'تحذير طبي وصحي',
      },
      {
        title: 'صفر تتبع أو إعلانات',
        description:
          'لا يحتوي التطبيق على أي مكتبات تتبع، أو إعلانات، أو جمع تجاري للبيانات في الخلفية.',
        badge: 'بدون تتبع أو إعلانات',
      },
    ],
    sections: [
      {
        id: 'acceptance',
        title: '1. قبول الشروط والاتفاقية',
        content: [
          'مرحباً بك في تطبيق Isometric Holds ("التطبيق"، أو "الخدمة")، المطور والمنشور بواسطة محمد عبد الحي ("المطور"، أو "نحن").',
          'بتحميل التطبيق، أو تثبيته، أو تشغيله على أي جهاز ذكي، فإنك تقر بأنك قد قرأت وفهمت ووافقت تماماً على الالتزام بهذه الشروط القانونية ("شروط الاستخدام"). إذا كنت لا توافق على أي جزء من هذه الشروط، فيجب عليك التوقف فوراً عن استخدام التطبيق وإلغاء تثبيته.',
          'تنظم هذه الشروط استخدامك لملفات التطبيق، والمؤقتات، والإرشادات التدريبية، والواجهات البرمجية المرتبطة بها.',
        ],
        callout: {
          type: 'info',
          title: 'اتفاقية قانونية ملزمة',
          text: 'استخدام التطبيق يعتبر موافقة صريحة على هذه الشروط وعلى سياسة حماية وخصوصية البيانات المصاحبة له.',
        },
      },
      {
        id: 'license-grant',
        title: '2. منح الترخيص والاستخدام المصرح به',
        content: [
          'شريطة التزامك المستمر بهذه الشروط، يمنحك المطور ترخيصاً شخصياً، ومحدوداً، وغير حصري، وغير قابل للتحويل، وقابلاً للإلغاء، لتثبيت واستخدام التطبيق على أجهزتك المحمولة لأغراض التدريب البدني الشخصي غير التجاري.',
          'لا ينقل هذا الترخيص أي ملكية للكود المصدري أو العلامات التجارية أو حقوق الملكية الفكرية الخاصة بالمطور.',
        ],
        listItems: [
          'مصرح به: استخدام بروتوكولات المؤقت للتدريب الرياضي الشخصي، وتكييف الأوتار، والفنون القتالية.',
          'مصرح به: إنشاء وتخصيص جداول تمارين إيزومترية وتشغيلها محلياً على هاتفك الشخصي.',
          'محظور: إعادة بيع التطبيق، أو تأجيره، أو توزيعه تجارياً أو نشر نسخ معدلة من حزمة التثبيت (APK).',
          'محظور: محاولة فك الشفرة المصدرية، أو الهندسة العكسية، أو استخراج الأكواد إلا في الحدود التي يسمح بها القانون صراحة.',
          'محظور: إزالة أو حجب إشعارات حقوق النشر أو العلامات التجارية.',
        ],
      },
      {
        id: 'medical-disclaimer',
        title: '3. إخلاء المسؤولية الصحية والسلامة والطبية',
        content: [
          'يرجى قراءة هذا القسم بعناية بالغة. سلامتك البدنية وصحتك تعتمد على هذا الإقرار.',
          'تتضمن تمارين الثبات الإيزومتري توليد توتر عضلي مكثف دون حركة في المفاصل. هذا الانقباض المستمر قد يؤدي إلى ارتفاع مؤقت في ضغط الدم الشرياني، والضغط الداخلي للبطن، وإجهاد الأوتار.',
          'تطبيق Isometric Holds هو أداة توجيه وتوقيت تعليمية ورياضية بحتة. هو ليس جهازاً طبياً ولا بديلاً عن استشارة أخصائي العلاج الطبيعي أو أطباء القلب. المعلومات الواردة في التطبيق لا تشكل تشخيصاً أو علاجاً طبياً.',
        ],
        callout: {
          type: 'warning',
          title: 'استشارة الطبيب إلزامية',
          text: 'إذا كنت تعاني من ارتفاع ضغط الدم، أو أمراض القلب، أو الفتق، أو عدم استقرار المفاصل، أو تمزق الأوتار الحديث، فيجب عليك استشارة طبيب متخصص قبل البدء في تمارين الثبات ذات الكثافة العالية.',
        },
        listItems: [
          'مبدأ التنفس المستمر: لا تكتم أنفاسك (تجنب مناورة فالسالفا) أثناء الثبات الأقصى، لأن ذلك قد يؤدي لارتفاع حاد في ضغط الدم أو الشعور بالدوار.',
          'استمع لجسدك: توقف فوراً إذا شعرت بألم في الصدر، أو ضيق في التنفس، أو ألم حاد ومفاجئ في المفاصل أو الأوتار.',
          'التدرج التدريبي: ابدأ بالتمارين البسيطة وأوقات الثبات القصيرة قبل الانتقال إلى بروتوكولات القوة القصوى المتقدمة.',
        ],
      },
      {
        id: 'assumption-of-risk',
        title: '4. تحمل المخاطر وإخلاء المسؤولية عن الإصابات',
        content: [
          'تنطوي ممارسة التمارين الرياضية وتدريبات القوة القصوى بطبيعتها على احتمالية التعرض لإصابات عضلية، أو التواء الأوتار، أو مضاعفات في الدورة الدموية.',
          'باستخدامك للتطبيق، فإنك تقر بتحملك الكامل والطوعي لكافة المخاطر المرتبطة بأداء التمارين المعروضة أو الموقوتة داخل التطبيق.',
          'إلى أقصى حد يسمح به القانون المعمول به، فإنك تعفي المطور محمد عبد الحي من أي مطالبات أو أضرار أو مسؤوليات ناجمة عن إصابات جسدية أو أضرار مادية مرتبطة باستخدام التطبيق.',
        ],
      },
      {
        id: 'data-ownership',
        title: '5. ملكية البيانات والخصوصية',
        content: [
          'نحن نؤمن بحق المستخدم المطلق في امتلاك بياناته.',
          'تظل جميع سجلات التمارين، والأرقام القياسية، والإعدادات التي تحفظها داخل التطبيق ملكاً حصرياً لك بنسبة 100%.',
          'نظراً لأن التطبيق يعمل محلياً بالكامل دون اتصال بالإنترنت، فإن سجلاتك لا ترسل إلى أي خوادم خارجية ولا تباع لأي جهة.',
          'للمزيد من التفاصيل حول الحماية التقنية والعزل الأمني للبيانات، يرجى مراجعة سياسة حماية وخصوصية البيانات.',
        ],
        callout: {
          type: 'success',
          title: 'سياسة حماية البيانات',
          text: 'يمكنك مراجعة سياسة حماية وخصوصية البيانات بالتفصيل عبر الرابط: /isometric-holds/privacy',
        },
      },
      {
        id: 'intellectual-property',
        title: '6. حقوق الملكية الفكرية',
        content: [
          'جميع حقوق الملكية الفكرية في التطبيق—بما يشمل الكود المصدري، ومنطق مؤقتات الثبات، والنصوص التعليمية، وتصميم الواجهات، والأيقونات، والشعارات—مملوكة حصرياً للمطور محمد عبد الحي.',
          'شعار "Isometric Holds" ورمز "IH" والتصميم البصري للتطبيق محمية بموجب قوانين الملكية الفكرية وحقوق النشر الدولية.',
          'أي حقوق لم يتم منحها صراحة في هذه الشروط تظل محفوظة بالكامل للمطور.',
        ],
      },
      {
        id: 'app-availability',
        title: '7. توفر التطبيق وإخلاء المسؤولية عن الضمانات',
        content: [
          'يُقدم التطبيق "كما هو" و"بحسب توفره"، مع كافة عيوبه ودون أي ضمانات صريحة أو ضمنية.',
          'لا يضمن المطور أن يكون التطبيق خالياً تماماً من الأخطاء العارضة أو متوافقاً مع كل إصدارات العتاد القديمة أو معالجات الصوت المختلفة.',
        ],
      },
      {
        id: 'limitation-of-liability',
        title: '8. حدود المسؤولية القانونية',
        content: [
          'إلى أقصى حد يسمح به القانون، لا يتحمل المطور بأي حال من الأحوال أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة أو تبعية (بما في ذلك فقدان البيانات أو تلف الأجهزة أو الإصابات البدنية) الناتجة عن استخدام أو عدم القدرة على استخدام التطبيق.',
        ],
      },
      {
        id: 'user-conduct',
        title: '9. السلوك المسؤول أثناء التدريب',
        content: [
          'أثناء استخدام التطبيق، يرجى الالتزام بمعايير السلامة العامة:',
        ],
        listItems: [
          'بيئة تدريب آمنة: تأكد من أن المكان المحيط بك خالٍ من الأدوات الحادة أو الأرضيات الزلقة قبل أداء تمارين الثبات.',
          'تثبيت الهاتف: ضع هاتفك في مكان آمن أثناء التمرين لتجنب سقوطه أو اصطدامك به أثناء الجولات المكثفة.',
          'عدم العبث بالنظام: تجنب تعديل ملفات التطبيق أو نشر حزم غير رسمية.',
        ],
      },
      {
        id: 'modifications-termination',
        title: '10. تعديل الشروط وإنهاء الاتفاقية',
        content: [
          'يحق للمطور تعديل هذه الشروط من حين لآخر لمواكبة التحديثات البرمجية أو المتطلبات القانونية. سيتم نشر أي تعديل على هذه الصفحة مباشرة.',
          'يمكنك إنهاء هذه الاتفاقية في أي وقت بكل بساطة عن طريق إلغاء تثبيت التطبيق من جهازك والتوقف عن استخدامه.',
        ],
      },
      {
        id: 'governing-law',
        title: '11. القانون المعمول به وتسوية النزاعات',
        content: [
          'تخضع هذه الشروط وتفسر وفقاً للمبادئ العامة لقوانين العقود وحماية المستهلك الدولية.',
          'في حال حدوث أي نزاع، يتعهد الطرفان باللجوء أولاً إلى التسوية الودية بالتواصل المباشر عبر البريد الإلكتروني بحسن نية.',
        ],
      },
      {
        id: 'contact',
        title: '12. التواصل والاستفسارات القانونية',
        content: [
          'إذا كانت لديك أي أسئلة أو استفسارات تتعلق بشروط الاستخدام هذه، يرجى التواصل مباشرة مع المطور:',
        ],
        listItems: [
          'المطور والمنشئ: محمد عبد الحي (Mohammed Abdelhay)',
          'البريد الإلكتروني المباشر: mamado2000@gmail.com',
          'رابط المشروع: https://mabdelhay.com/isometric-holds',
          'الملف المهني: https://www.linkedin.com/in/mohammed-abdelhay',
          'مستودع الإصدارات (GitHub Releases): https://github.com/mcitp-mabdelhay/isometric-holds/releases',
        ],
      },
    ],
  },
};
