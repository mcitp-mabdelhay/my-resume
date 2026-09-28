export interface PrivacySection {
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

export interface DataSafetyItem {
  category: string;
  status: string;
  explanation: string;
}

export interface PrivacyPolicyContent {
  lastUpdated: string;
  effectiveDate: string;
  backToHome: string;
  title: string;
  subtitle: string;
  appName: string;
  appVersion: string;
  developerName: string;
  developerEmail: string;
  badge: string;
  tableOfContents: string;
  summaryTitle: string;
  summaryText: string;
  keyHighlights: {
    title: string;
    description: string;
    badge: string;
  }[];
  dataSafetyAudit: {
    title: string;
    subtitle: string;
    items: DataSafetyItem[];
  };
  sections: PrivacySection[];
}

export const isometricPrivacyPolicyTranslations: Record<'en' | 'ar', PrivacyPolicyContent> = {
  en: {
    lastUpdated: 'September 28, 2026',
    effectiveDate: 'September 28, 2026',
    backToHome: 'Back to Isometric Holds',
    title: 'Data Privacy & Protection Policy',
    subtitle:
      'Comprehensive data protection documentation, detailing our Privacy-by-Design architecture, data minimization safeguards, technical sandboxing, and zero-telemetry technical controls.',
    appName: 'Isometric Holds',
    appVersion: 'v2.3.0',
    developerName: 'Mohammed Abdelhay',
    developerEmail: 'mamado2000@gmail.com',
    badge: 'Data Privacy & Protection Standards',
    tableOfContents: 'Table of Contents',
    summaryTitle: 'Privacy-by-Design & Data Protection Guarantee',
    summaryText:
      'Isometric Holds is engineered to deliver complete data sovereignty to the user. We adhere strictly to data minimization and local sandboxing: zero personal data collection, zero transmission across public networks, zero third-party brokers, and zero persistent telemetry. Your physical training records remain exclusively under your physical control on your device.',
    keyHighlights: [
      {
        title: 'Data Minimization Principle',
        description:
          'In accordance with Article 5(1)(c) of the GDPR, we collect strictly zero personal information beyond what is temporarily executed in volatile device memory.',
        badge: 'Zero PII Collected',
      },
      {
        title: 'Local Sandboxed Storage',
        description:
          'All workout histories, hold milestones, and custom routines are isolated inside the operating system’s private application sandbox (File-Based Encryption).',
        badge: 'Sandboxed Storage',
      },
      {
        title: 'Zero Third-Party Sharing or Sale',
        description:
          'We do not sell, rent, trade, or share user data with data brokers, ad networks, or commercial analytics providers (CCPA/CPRA & GDPR compliant).',
        badge: 'Never Sold or Shared',
      },
      {
        title: 'Instant User Data Erasure',
        description:
          'You retain full data sovereignty under GDPR Article 17 (Right to Erasure). Clearing app storage or uninstalling permanently purges all local records.',
        badge: 'Full User Control',
      },
    ],
    dataSafetyAudit: {
      title: 'Google Play Data Safety & Protection Audit',
      subtitle: 'Transparent declaration matching standard App Store and Google Play Data Safety specifications:',
      items: [
        {
          category: 'Personal Identification (Name, Email, Phone)',
          status: 'Not Collected',
          explanation: 'No account registration, login, or personal profile system exists.',
        },
        {
          category: 'Health, Fitness & Biometric Telemetry',
          status: 'Not Collected',
          explanation: 'No heart rate, body fat, or biometric sensor telemetry is monitored or recorded.',
        },
        {
          category: 'Location Data (GPS & Network Coarse/Fine)',
          status: 'Not Collected',
          explanation: 'No location APIs or cell tower geolocation services are accessed.',
        },
        {
          category: 'Device or Other Identifiers (GAID, IDFA, IMEI)',
          status: 'Not Collected',
          explanation: 'Zero advertising SDKs or hardware fingerprinting mechanisms are included.',
        },
        {
          category: 'Financial & Payment Data',
          status: 'Not Collected',
          explanation: 'Free of charge with no in-app purchases, payment processors, or banking SDKs.',
        },
        {
          category: 'Data Transfer & Network Security',
          status: 'Zero In-Transit Data',
          explanation: 'The application runs 100% offline; no data is transmitted across the internet.',
        },
      ],
    },
    sections: [
      {
        id: 'overview',
        title: '1. Overview & Privacy-by-Design Architecture',
        content: [
          'Isometric Holds is an athletic conditioning mobile application engineered for isometric strength, tendon resilience, and static muscular endurance.',
          'Under modern global data privacy regulations—including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the UK Data Protection Act—privacy must not be an afterthought. Isometric Holds is built around the fundamental engineering principle of Privacy-by-Design and Privacy-by-Default (GDPR Article 25).',
          'Unlike modern fitness apps that convert your physical workouts into commercial behavioral telemetry, Isometric Holds is architected as a standalone, client-only utility. We do not maintain any cloud infrastructure, analytics pipelines, or user tracking servers.',
        ],
        callout: {
          type: 'success',
          title: 'Zero Remote Exposure',
          text: 'Because there is no remote server, your data cannot be intercepted via Man-in-the-Middle (MITM) network attacks or exposed through third-party cloud data breaches.',
        },
      },
      {
        id: 'protection-principles',
        title: '2. Core Data Protection Principles',
        content: [
          'We evaluate every software release against established international data protection frameworks (including ISO/IEC 27701 principles and GDPR Article 5):',
        ],
        listItems: [
          'Lawfulness, Fairness, and Transparency: Transparent operation with no covert background tasks or undisclosed telemetry.',
          'Purpose Limitation: Device capabilities (audio, vibration) are used solely to run exercise intervals and for no secondary analytical or profiling purposes.',
          'Data Minimization: We collect the absolute minimum data required for local functionality—which, for remote collection, is strictly zero.',
          'Storage Limitation: Stored logs exist strictly on your device for as long as you wish to retain them, with immediate local deletion capabilities.',
          'Integrity and Confidentiality: Application data remains sealed inside the mobile operating system sandbox protected by File-Based Encryption (FBE).',
        ],
      },
      {
        id: 'data-classification',
        title: '3. Data Classification & Information Boundary',
        content: [
          'To ensure comprehensive transparency, we classify and define our strict data boundaries:',
        ],
        listItems: [
          'Personally Identifiable Information (PII): Strictly Non-Existent. We do not gather names, email addresses, phone numbers, addresses, social security numbers, or national IDs.',
          'Sensitive Personal Information (SPI) / Special Category Data: Strictly Non-Existent. We do not process genetic data, biometric identifiers for identification, medical records, or philosophical beliefs.',
          'Device Telemetry: Purely Volatile. Timer intervals, countdown states, and active hold durations exist only in ephemeral volatile memory (RAM) while the timer is running.',
          'User Preferences & History: Sandboxed Locally. Custom routine configurations, completed protocol history, and sound volume preferences are stored solely in your local app storage.',
        ],
      },
      {
        id: 'technical-safeguards',
        title: '4. Technical & Architectural Security Safeguards',
        content: [
          'Data protection requires rigorous technical safeguards. Isometric Holds enforces security at the hardware and operating system boundary:',
        ],
        listItems: [
          'OS Application Sandboxing: The app runs in an isolated user space (Linux UID sandbox on Android), preventing other installed applications from inspecting or accessing its internal storage files.',
          'SELinux Policy Enforcement: Security-Enhanced Linux kernel controls enforce strict permission boundaries on file access and device interactions.',
          'Hardware-Backed Encryption: Data written to internal flash storage benefits from Android’s default File-Based Encryption (FBE), using keys derived from your device unlock credential.',
          'Zero Network Transport Layer: Because the application executes zero HTTP/HTTPS network requests, there is no surface area for transport-layer eavesdropping or unauthorized remote exfiltration.',
        ],
        callout: {
          type: 'info',
          title: 'Tamper Resistance',
          text: 'No background daemons, analytics hooks, or unauthorized listener sockets are initiated during app execution.',
        },
      },
      {
        id: 'device-permissions',
        title: '5. Device Permissions & Security Boundary',
        content: [
          'Isometric Holds requests only the minimum hardware capabilities necessary to fulfill the user’s explicit workout instructions. Every permission is strictly confined to on-device processing:',
        ],
        listItems: [
          'Audio Playback (Sound Output): Utilized strictly to play synthesized tones, countdown beeps, and audio cues during hold intervals. No audio recording or microphone access is requested.',
          'Text-to-Speech (TTS Engine): Uses the device’s local operating system speech synthesizer to vocalize workout phases. No audio samples are recorded or uploaded to third-party speech recognition APIs.',
          'Haptic / Vibration Actuator: Triggers tactile pulses to signal hold starts, halfway marks, and rest periods, assisting visually impaired or headphones-free training.',
          'Wake-Lock (Keep Display On): Prevents the operating system from entering deep sleep while a timed exercise session is actively counting down.',
          'No Sensitive Hardware Permissions: The app does NOT request ACCESS_FINE_LOCATION, CAMERA, RECORD_AUDIO, READ_CONTACTS, READ_CALENDAR, or READ_EXTERNAL_STORAGE.',
        ],
      },
      {
        id: 'no-sharing-sale',
        title: '6. Zero Data Sharing, Sale, or Commercial Exploitation',
        content: [
          'We maintain a strict prohibition against commercializing user information:',
          'Isometric Holds has never sold, leased, or shared personal information with third parties, and will never do so in the future. We fully comply with the California Consumer Privacy Act (CCPA/CPRA) "Do Not Sell or Share My Personal Information" standard.',
          'We do not engage with ad networks, programmatic bidding platforms, credit reporting bureaus, data brokers, or marketing research syndicates.',
        ],
        callout: {
          type: 'success',
          title: 'No Data Monetization',
          text: 'Our software is built to empower your physical health, not to harvest your personal data for advertising profits.',
        },
      },
      {
        id: 'user-rights',
        title: '7. Individual Data Rights (GDPR & CCPA/CPRA)',
        content: [
          'Under data protection laws like the GDPR (Articles 15 through 22) and the California Consumer Privacy Act (CCPA/CPRA), users possess fundamental data rights. Because all data is stored on-device in your direct possession, you can exercise these rights autonomously:',
        ],
        listItems: [
          'Right to Access (GDPR Art. 15): You can view your entire workout history, custom protocols, and personal best records directly within the application at any time.',
          'Right to Rectification (GDPR Art. 16): You can edit, customize, or update any saved routine or protocol timing directly within the interface.',
          'Right to Erasure / Right to be Forgotten (GDPR Art. 17): You can permanently purge all stored information instantaneously by clearing application storage or uninstalling.',
          'Right to Restrict Processing (GDPR Art. 18): You can disable haptic feedback, turn off sound cues, or reset workout logs via in-app settings whenever you choose.',
          'Right to Data Portability (GDPR Art. 20): All records exist in standard device storage formats accessible through your device file management or OS-level backup utilities.',
          'Right to Non-Discrimination: We provide the exact same full-featured application experience to every user regardless of their privacy preferences.',
        ],
      },
      {
        id: 'retention-deletion',
        title: '8. Data Retention, Portability & Deletion Protocols',
        content: [
          'We believe in absolute data sovereignty: data retention should be entirely under user discretion.',
          'Because no data is hosted on remote cloud servers, deleting your data does not require submitting a support ticket, waiting for a 30-day compliance window, or verifying identity tokens.',
        ],
        listItems: [
          'Instant Purge via System Settings: Navigate to Settings > Apps > Isometric Holds > Storage > Tap "Clear Data" / "Clear Storage". This immediately wipes all local database and preference entries.',
          'Application Removal: Uninstalling the application automatically signals the mobile OS to decommission the app sandbox and overwrite its private directories.',
        ],
      },
      {
        id: 'children',
        title: '9. Children’s Data Privacy Protection (COPPA & GDPR-K)',
        content: [
          'Protecting children’s privacy is paramount. Isometric Holds is an exercise timer tool designed for general audiences and athletes.',
          'In strict compliance with the Children’s Online Privacy Protection Act (COPPA), the California Age-Appropriate Design Code Act, and GDPR Article 8 (GDPR-K), the application does not collect, solicit, or maintain personal information from any user, including children under 13 (or under 16 in applicable EU jurisdictions).',
        ],
      },
      {
        id: 'health-safety',
        title: '10. Health, Physical Safety & Medical Disclaimer',
        content: [
          'Data protection policies also ensure transparent disclosures regarding physical well-being and health boundaries.',
          'Isometric Holds provides timing structures, exercise posture guidance, and educational protocol demonstrations. It is NOT a medical device, nor does it provide personalized physical therapy diagnosis, cardiac monitoring, or medical treatment plans.',
        ],
        callout: {
          type: 'warning',
          title: 'Cardiovascular & Joint Safety Caution',
          text: 'Maximal isometric contractions (overcoming holds) can dramatically elevate systemic blood pressure and joint torque. Individuals with hypertension, cardiovascular anomalies, or active tendon injuries must obtain medical clearance before attempting maximal hold protocols.',
        },
      },
      {
        id: 'updates',
        title: '11. Policy Governance & Evolution',
        content: [
          'This Data Privacy & Protection Policy is reviewed periodically to ensure continuous alignment with evolving privacy jurisprudence, mobile OS security specifications, and regulatory frameworks.',
          'Any updates will be reflected directly on this webpage with a revised "Last Updated" and "Effective Date" header. Because the app does not maintain your email address, significant updates will also be highlighted in app release notes on distribution platforms.',
        ],
      },
      {
        id: 'contact',
        title: '12. Data Controller & Privacy Inquiries',
        content: [
          'If you have questions regarding this Data Privacy & Protection Policy, technical sandboxing, or regulatory compliance, you can contact the data controller directly:',
        ],
        listItems: [
          'Data Controller / Software Engineer: Mohammed Abdelhay',
          'Official Privacy Contact: mamado2000@gmail.com',
          'Application Portfolio: https://mabdelhay.com/isometric-holds',
          'Professional Profile: https://www.linkedin.com/in/mohammed-abdelhay',
          'GitHub Releases: https://github.com/mcitp-mabdelhay/isometric-holds/releases',
        ],
      },
    ],
  },
  ar: {
    lastUpdated: '28 سبتمبر 2026',
    effectiveDate: '28 سبتمبر 2026',
    backToHome: 'العودة إلى Isometric Holds',
    title: 'سياسة حماية وخصوصية البيانات',
    subtitle:
      'توثيق شامل لحماية وخصوصية البيانات يوضح معمارية الخصوصية بالتصميم، وضوابط الحد الأدنى من البيانات، وإجراءات العزل التقني، والتشغيل دون أي تتبع.',
    appName: 'Isometric Holds',
    appVersion: 'v2.3.0',
    developerName: 'محمد عبد الحي (Mohammed Abdelhay)',
    developerEmail: 'mamado2000@gmail.com',
    badge: 'معايير حماية وخصوصية البيانات',
    tableOfContents: 'جدول المحتويات',
    summaryTitle: 'ضمان حماية البيانات والخصوصية بالتصميم',
    summaryText:
      'تم تصميم Isometric Holds لتمكين المستخدم من السيادة الكاملة على بياناته. نحن نلتزم بمبدأ الحد الأدنى الصارم من البيانات والعزل المحلي: صفر جمع بيانات شخصية، صفر إرسال عبر الشبكات، صفر وسطاء تجاريين، وصفر تتبع سلوكي. سجلات تمارينك الرياضية تبقى حصرياً تحت تحكمك المادي الكامل على جهازك الشخصي.',
    keyHighlights: [
      {
        title: 'مبدأ الحد الأدنى من البيانات (Data Minimization)',
        description:
          'وفقاً للمادة 5(1)(c) من اللائحة الأوروبية العامة لحماية البيانات (GDPR)، لا نقوم بجمع أي بيانات شخصية تتجاوز متطلبات التشغيل اللحظي المؤقت في ذاكرة الجهاز.',
        badge: 'صفر بيانات شخصية',
      },
      {
        title: 'التخزين المحلي المعزول (Sandboxed Storage)',
        description:
          'تحفظ كافة سجلات التمارين وأوقات الثبات في مساحة تخزين التطبيق الآمنة والمعزولة داخل نظام التشغيل (مع تشفير الملفات FBE).',
        badge: 'تخزين محلي معزول',
      },
      {
        title: 'انعدام البيع أو المشاركة مع أطراف ثالثة',
        description:
          'نحن لا نبيع أو نؤجر أو نشارك أي بيانات للمستخدمين مع وسطاء البيانات أو الشبكات الإعلانية (متوافق مع CCPA/CPRA و GDPR).',
        badge: 'لا تباع ولا تشارك',
      },
      {
        title: 'المسح الفوري وحق النسيان',
        description:
          'أنت تحتفظ بكامل حقوقك تحت المادة 17 من GDPR (الحق في محو البيانات). مسح بيانات التطبيق أو حذفه يمسح كافة السجلات نهائياً فوراً.',
        badge: 'تحكم كامل للمستخدم',
      },
    ],
    dataSafetyAudit: {
      title: 'تدقيق أمان وسلامة البيانات (Google Play Data Safety)',
      subtitle: 'إقرار شفاف متوافق مع متطلبات أمان البيانات المعتمدة في متجر Google Play والمتاجر الرسمية:',
      items: [
        {
          category: 'البيانات الشخصية (الاسم، البريد الإلكتروني، الهاتف)',
          status: 'لا يتم جمعها نهائياً',
          explanation: 'لا يتوفر في التطبيق أي نظام لتسجيل الحسابات أو إنشاء الملفات الشخصية.',
        },
        {
          category: 'المؤشرات الحيوية والصحية والبيومترية',
          status: 'لا يتم جمعها نهائياً',
          explanation: 'لا يتم الاتصال بأي حساسات حيوية لقياس نبضات القلب أو نسبة الدهون.',
        },
        {
          category: 'بيانات الموقع الجغرافي (GPS والشبكات)',
          status: 'لا يتم جمعها نهائياً',
          explanation: 'لا يطلب التطبيق ولا يستخدم صلاحيات تحديد المواقع الجغرافية.',
        },
        {
          category: 'معرفات الأجهزة والإعلانات (GAID, IDFA, IMEI)',
          status: 'لا يتم جمعها نهائياً',
          explanation: 'لا يحتوي التطبيق على أي مكتبات إعلانية أو أدوات لتمييز بصمة الأجهزة.',
        },
        {
          category: 'البيانات المالية وعمليات الدفع',
          status: 'لا يتم جمعها نهائياً',
          explanation: 'التطبيق مجاني بالكامل وخالٍ من الاشتراكات أو عمليات الشراء داخل التطبيق.',
        },
        {
          category: 'أمان النقل عبر الشبكات',
          status: 'صفر بيانات منقولة',
          explanation: 'يعمل التطبيق بنسبة 100% دون اتصال بالإنترنت، ولا ترسل أي حزم بيانات للخارج.',
        },
      ],
    },
    sections: [
      {
        id: 'overview',
        title: '1. نظرة عامة ومعمارية الخصوصية بالتصميم',
        content: [
          'يعد Isometric Holds تطبيقاً رياضياً متخصصاً في تدريبات الثبات العضلي، وتقوية الأوتار، وزيادة التحمل الإيزومتري.',
          'بموجب أحدث التشريعات الدولية لحماية البيانات—بما في ذلك اللائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR)، وقانون خصوصية المستهلك في كاليفورنيا (CCPA/CPRA)، وقانون حماية البيانات البريطاني—يجب أن تكون حماية البيانات ركيزة أساسية منذ التأسيس. تم بناء التطبيق استناداً إلى مبدأ "الخصوصية بالتصميم والافتراض" (المادة 25 من GDPR).',
          'على النقيض من تطبيقات اللياقة الحديثة التي تحول تدريباتك الرياضية إلى بيانات سلوكية تباع للمعلنين، تم تصميم تطبيقنا ليعمل بالكامل كأداة محلية ذاتية التحكم لا ترتبط بأي خوادم سحابية خارجية.',
        ],
        callout: {
          type: 'success',
          title: 'صفر تعرض للاختراق السحابي',
          text: 'نظراً لعدم وجود خوادم سحابية، فإن بياناتك محصنة تماماً ضد اعتراض الشبكات (MITM) أو التسريبات الأمنية لقواعد البيانات السحابية.',
        },
      },
      {
        id: 'protection-principles',
        title: '2. المبادئ الجوهرية لحماية البيانات',
        content: [
          'نخضع كل إصدار من التطبيق لتدقيق مستمر للتأكد من موافقته لمبادئ حماية البيانات الدولية (وفقاً للمادة 5 من GDPR ومعايير ISO/IEC 27701):',
        ],
        listItems: [
          'الشفافية والعدالة: تشغيل التطبيق بوضوح كامل دون مهام خفية في الخلفية أو تحليلات غير مصرح بها.',
          'تحديد الغرض (Purpose Limitation): تُستخدم إمكانيات الجهاز (مثل الصوت والاهتزاز) لغرض توقيت التمارين فقط دون استخدامها في أي تصنيف سلوكي.',
          'الحد الأدنى للبيانات (Data Minimization): لا نقوم بتسجيل أو نقل أي معلومة تتجاوز ما يحتاجه الهاتف لعرض المؤقت اللحظي.',
          'الحد من فترة التخزين (Storage Limitation): تبقى السجلات على هاتفك طالما رغبت بذلك، مع إمكانية مسحها فوراً.',
          'السرية والسلامة (Integrity and Confidentiality): تعزل بيانات التطبيق داخل بيئة النظام الآمنة مع تشفير الملفات الافتراضي (FBE).',
        ],
      },
      {
        id: 'data-classification',
        title: '3. تصنيف البيانات والحدود الأمنية',
        content: [
          'لضمان الشفافية المطلقة، نقوم بتصنيف البيانات والحدود الفنية لحمايتها:',
        ],
        listItems: [
          'معلومات الهوية الشخصية (PII): غير موجودة مطلقاً. لا نطلب ولا نسجل الأسماء، أو البريد الإلكتروني، أو أرقام الهواتف، أو بطاقات الهوية.',
          'البيانات الحساسة والبيومترية (SPI): غير موجودة مطلقاً. لا نتعامل مع البيانات الجينية، أو البصمات، أو السجلات الطبية.',
          'بيانات التشغيل اللحظية: مؤقتة فقط. توجد أوقات الثبات والمؤقت فقط في الذاكرة العشوائية المتطايرة (RAM) أثناء عمل الجلسة.',
          'التفضيلات وسجلات التمارين: معزولة محلياً. تحفظ البروتوكولات المخصصة وسجلات التمارين حصرياً داخل الذاكرة المحلية للجهاز.',
        ],
      },
      {
        id: 'technical-safeguards',
        title: '4. الضمانات الأمنية التقنية والمعمارية',
        content: [
          'تتطلب حماية البيانات ضوابط تقنية صارمة. يطبق Isometric Holds الأمان عند حدود عتاد الجهاز ونظام التشغيل:',
        ],
        listItems: [
          'العزل الأمني للتطبيقات (OS Sandbox): يعمل التطبيق داخل بيئة معزولة (Linux UID sandbox على أندرويد)، مما يمنع التطبيقات الأخرى من قراءة بياناته.',
          'سياسات SELinux: تفرض حماية إضافية على مستوى نواة النظام للتحكم الصارم في صلاحيات قراءة الملفات واستخدام العتاد.',
          'التشفير المعتمد على الملفات (FBE): تشفر بيانات التطبيق المخزنة محلياً باستخدام التشفير الافتراضي للأجهزة الذكية والمرتبط برمز قفل الشاشة.',
          'انعدام طبقة النقل الشبكي: نظراً لأن التطبيق لا يقوم بأي اتصالات شبكية (HTTP/HTTPS)، فإنه لا توجد ثغرات لنقل البيانات أو اعتراضها عبر الإنترنت.',
        ],
        callout: {
          type: 'info',
          title: 'حماية ضد التعديل والتتبع',
          text: 'لا يتم إطلاق أي خدمات خلفية تتبع، ولا تفتح أي منافذ اتصال أو مقابس شبكية غير مصرح بها أثناء تشغيل التطبيق.',
        },
      },
      {
        id: 'device-permissions',
        title: '5. أذونات الجهاز وحدود استخدامها الفني',
        content: [
          'يطلب التطبيق الحد الأدنى الضروري من أذونات العتاد لتمكينك من أداء التمرين بنجاح. كل إذن يخضع لقيود تقنية محلية صارمة:',
        ],
        listItems: [
          'تشغيل الصوت (Audio Playback): يُستخدم حصرياً لتشغيل النغمات الصوتية والعد التنازلي. لا يطلب التطبيق ولا يستخدم إذن الميكروفون.',
          'محرك تحويل النص إلى كلام (TTS): يستخدم محرك النظام المدمج لنطق أسماء التمارين محلياً، دون إرسال أي مقاطع صوتية لخوادم سحابية.',
          'المحفز اللمسي والاهتزاز (Haptics): يرسل نبضات لمسية لتنبيهك ببداية وانتهاء فترات الثبات حتى لا تضطر للنظر للشاشة باستمرار.',
          'إبقاء الشاشة نشطة (Wake-Lock): يمنع شاشة الهاتف من الدخول في وضع السكون أثناء تشغيل جلسة التمرين فقط.',
          'لا أذونات حساسة: لا يطلب التطبيق أذونات الموقع الجغرافي، أو الكاميرا، أو الميكروفون، أو جهات الاتصال، أو ملفات الوسائط الخارجية.',
        ],
      },
      {
        id: 'no-sharing-sale',
        title: '6. انعدام مشاركة أو بيع البيانات أو استغلالها تجارياً',
        content: [
          'نلتزم بحظر كامل ضد استغلال أو تسييل بيانات المستخدمين:',
          'لم يقم تطبيق Isometric Holds مطلقاً ببيع أو تأجير أو مشاركة أي بيانات شخصية مع أطراف ثالثة، ولن يقوم بذلك مستقبلاً. نلتزم كلياً بمعيار "عدم بيع أو مشاركة معلوماتي الشخصية" بموجب قانون CCPA/CPRA في كاليفورنيا.',
          'لا نتعامل مع منصات المزادات الإعلانية، أو وكالات التصنيف الائتماني، أو مجمعي البيانات التجارية، أو شبكات التسويق.',
        ],
        callout: {
          type: 'success',
          title: 'صفر استغلال إعلاني',
          text: 'هدفنا دعم لياقتك البدنية وصحة أوتارك، وليس استغلال بياناتك لزيادة الأرباح الإعلانية.',
        },
      },
      {
        id: 'user-rights',
        title: '7. حقوق الأفراد في حماية بياناتهم (GDPR & CCPA/CPRA)',
        content: [
          'تمنح القوانين الدولية لحماية البيانات المستخدمين حقوقاً أساسية ومباشرة. وبما أن جميع البيانات محفوظة محلياً على جهازك، يمكنك ممارسة هذه الحقوق بنفسك بشكل كامل وفوري دون الحاجة لمراسلتنا:',
        ],
        listItems: [
          'حق الوصول (GDPR Art. 15): يمكنك الاطلاع على سجل تمارينك وأرقامك القياسية بالكامل مباشرة عبر واجهة التطبيق.',
          'حق التصحيح (GDPR Art. 16): يمكنك تعديل أو تخصيص أي تمرين أو فترة ثبات مباشرة من داخل التطبيق.',
          'حق محو البيانات والنسيان (GDPR Art. 17): يمكنك مسح جميع البيانات نهائياً بمسح ذاكرة التطبيق أو إلغاء تثبيته فوراً.',
          'حق تقييد المعالجة (GDPR Art. 18): يمكنك إيقاف الاهتزاز أو التوجيه الصوتي أو مسح السجلات عبر إعدادات التطبيق متى أردت.',
          'حق نقل البيانات (GDPR Art. 20): تحفظ كافة السجلات بصيغ تخزين محلية قياسية متاحة ضمن مساحة إدارة ملفات نظام التشغيل.',
          'حق عدم التمييز: يحصل جميع المستخدمين على نفس التجربة المتكاملة للتطبيق بغض النظر عن تفضيلات الخصوصية الخاصة بهم.',
        ],
      },
      {
        id: 'retention-deletion',
        title: '8. بروتوكولات الاحتفاظ بالبيانات وحذفها نهائياً',
        content: [
          'نؤمن بأن السيادة على البيانات تعني أن يكون قرار الاحتفاظ بها أو مسحها عائداً بالكامل للمستخدم.',
          'لأنه لا توجد خوادم سحابية، فإن حذف بياناتك لا يتطلب فتح تذاكر دعم فني أو الانتظار لمدة 30 يوماً للتنفيذ.',
        ],
        listItems: [
          'المسح الفوري عبر إعدادات النظام: انتقل إلى إعدادات الهاتف > التطبيقات > Isometric Holds > مكان التخزين > اضغط "مسح البيانات". سيتم مسح كافة السجلات وقواعد البيانات فوراً.',
          'إلغاء تثبيت التطبيق: يؤدي إلغاء تثبيت التطبيق إلى إصدار أمر مباشر لنظام التشغيل بإزالة مجلد التطبيق وتفريغ مساحته التخزينية بشكل دائم.',
        ],
      },
      {
        id: 'children',
        title: '9. حماية خصوصية بيانات الأطفال (COPPA & GDPR-K)',
        content: [
          'تعتبر حماية بيانات الأطفال أولوية قصوى. تطبيق Isometric Holds هو أداة توقيت رياضية مخصصة للجمهور العام والرياضيين.',
          'امتثالاً لقانون حماية خصوصية الأطفال على الإنترنت (COPPA) ولائحة حماية البيانات العامة في الاتحاد الأوروبي (المادة 8 GDPR-K)، لا يجمع التطبيق ولا يطلب ولا يحتفظ بأي معلومات شخصية من أي مستخدم، بما في ذلك الأطفال دون سن 13 (أو 16 عاماً في الاتحاد الأوروبي).',
        ],
      },
      {
        id: 'health-safety',
        title: '10. إخلاء المسؤولية الصحية والسلامة البدنية',
        content: [
          'تقتضي سياسات حماية البيانات توفير إفصاحات شفافة وواضحة فيما يتعلق بالسلامة البدنية وحدود الاستخدام الصحي.',
          'يقدم التطبيق مؤقتات تدريبية وإرشادات لتوضيح وضعيات الثبات الإيزومتري. التطبيق ليس جهازاً طبياً ولا يقدم برامج تأهيل علاجي أو فحوصات تشخيصية للقلب.',
        ],
        callout: {
          type: 'warning',
          title: 'تحذير لسلامة القلب والأوتار',
          text: 'تمارين الثبات الإيزومتري القصوى قد ترفع ضغط الدم بشكل مؤقت وتضع ضغطاً كبيراً على الأوتار. يجب على الأشخاص الذين يعانون من ارتفاع ضغط الدم أو أمراض القلب أو إصابات الأوتار الحادة استشارة طبيب متخصص قبل ممارسة التدريبات الإيزومترية المكثفة.',
        },
      },
      {
        id: 'updates',
        title: '11. حوكمة وتحديثات السياسة',
        content: [
          'تخضع سياسة حماية وخصوصية البيانات هذه للمراجعة الدورية لضمان توافقها المستمر مع التطورات القانونية ومتطلبات أمان أنظمة التشغيل.',
          'سيتم نشر أي تعديلات مباشرة على هذه الصفحة مع تحديث تاريخ "آخر تحديث". وبما أن التطبيق لا يجمع عناوين بريد إلكتروني، سيتم توضيح أي تغييرات جوهرية عبر ملاحظات التحديثات الرسمية في المتاجر.',
        ],
      },
      {
        id: 'contact',
        title: '12. مسؤول حماية البيانات وبيانات التواصل',
        content: [
          'إذا كانت لديك أي أسئلة أو استفسارات قانونية أو تقنية تتعلق بسياسة حماية وخصوصية البيانات لتطبيق Isometric Holds، يمكنك التواصل مباشرة مع مسؤول التطوير:',
        ],
        listItems: [
          'المطور والمسؤول التقني: محمد عبد الحي (Mohammed Abdelhay)',
          'البريد الإلكتروني المخصص للخصوصية: mamado2000@gmail.com',
          'موقع التطبيق الرسمي: https://mabdelhay.com/isometric-holds',
          'الملف المهني على LinkedIn: https://www.linkedin.com/in/mohammed-abdelhay',
          'مستودع الإصدارات (GitHub Releases): https://github.com/mcitp-mabdelhay/isometric-holds/releases',
        ],
      },
    ],
  },
};
