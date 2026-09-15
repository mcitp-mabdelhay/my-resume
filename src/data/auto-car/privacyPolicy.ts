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

export interface PrivacyPolicyContent {
  lastUpdated: string;
  effectiveDate: string;
  backToHome: string;
  title: string;
  subtitle: string;
  appName: string;
  developerName: string;
  developerEmail: string;
  githubUrl: string;
  badge: string;
  tableOfContents: string;
  googleNoticeTitle: string;
  googleNoticeText: string;
  googleNoticeLinkText: string;
  sections: PrivacySection[];
}

export const privacyPolicyTranslations: Record<'en' | 'ar', PrivacyPolicyContent> = {
  en: {
    lastUpdated: 'September 15, 2026',
    effectiveDate: 'September 15, 2026',
    backToHome: 'Back to AutoTracker',
    title: 'Privacy Policy',
    subtitle: 'Comprehensive data protection, Google API integration disclosure, and Limited Use compliance for the AutoTracker application.',
    appName: 'AutoTracker',
    developerName: 'Mohammed Abdelhay',
    developerEmail: 'mohammed.abdelhay@ehopn.com',
    githubUrl: 'https://github.com/mcitp-mabdelhay/auto-car',
    badge: 'Google Verification & Transparency',
    tableOfContents: 'Table of Contents',
    googleNoticeTitle: 'Google API Limited Use Disclosure',
    googleNoticeText: "AutoTracker's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
    googleNoticeLinkText: 'Read Google API Services User Data Policy',
    sections: [
      {
        id: 'overview',
        title: '1. Overview & Architecture Philosophy',
        content: [
          'AutoTracker is an open, privacy-first mobile vehicle maintenance and expense tracking application designed for car owners who value data ownership and transparency.',
          'Unlike traditional automotive management software that stores your sensitive vehicle information on private third-party database silos, AutoTracker operates on a Client-Only, Direct-to-Cloud architecture. This means AutoTracker communicates directly from your device to your personal Google Drive and Google Sheets account without passing through any intermediate company servers.',
          'We do not host or operate any backend database or proxy server capable of recording, collecting, or analyzing your vehicle history, expenses, or personal data. You retain 100% ownership and control over your records at all times.'
        ],
        callout: {
          type: 'success',
          title: 'Zero Third-Party Database Silos',
          text: 'AutoTracker does not store your records on proprietary cloud servers. Your data lives exclusively in your personal Google account and on your local device.'
        }
      },
      {
        id: 'information-collected',
        title: '2. Information Accessed & Handled',
        content: [
          'AutoTracker only handles information necessary to provide vehicle maintenance tracking and calculation services. The data handled includes:'
        ],
        listItems: [
          'Vehicle Information: Vehicle make, model, production year, trim level, fuel tank capacity, license plate, or VIN (Vehicle Identification Number) optionally entered by you.',
          'Mileage & Odometer Readings: Current and historical odometer mileage values used to calculate component wear thresholds and schedule upcoming maintenance.',
          'Maintenance & Repair Records: Service dates, service categories (engine oil, brake pads, spark plugs, fluids, filters, tires), replaced part details, service costs, and mechanic notes.',
          'Fuel & Expense Records: Fuel fill-up dates, volume (liters/gallons), cost, fuel economy calculations, emergency road repairs, and accessory purchases.',
          'Receipt & Invoice Images: Photos of receipts or invoices you choose to capture or attach to substantiate your vehicle repair history.',
          'Google Account Authentication Profile: Basic profile information (your email address and display name) provided during Google Sign-In, utilized strictly to identify your sync session and display your account avatar in the app interface.'
        ]
      },
      {
        id: 'google-api-scopes',
        title: '3. Google API Scopes & User Data Usage',
        content: [
          'To enable cloud synchronization, spreadsheet backup, and automated calendar reminders, AutoTracker requests explicit user permission for specific Google API scopes. Here is precisely how each scope is utilized:'
        ],
        listItems: [
          'https://www.googleapis.com/auth/spreadsheets: AutoTracker reads and writes rows in a dedicated Google Sheets spreadsheet created specifically for your vehicle. This spreadsheet stores maintenance logs, odometer readings, and expense calculations. AutoTracker does not access or alter any spreadsheets other than the one designated for vehicle tracking.',
          'https://www.googleapis.com/auth/drive.file: AutoTracker uses this per-file restricted permission to create an "AutoTracker" folder inside your personal Google Drive, store the tracking spreadsheet, and upload receipt photos. AutoTracker CANNOT view, search, read, modify, or delete any other files or folders in your Google Drive.',
          'https://www.googleapis.com/auth/calendar.events: When you choose to schedule maintenance reminders (e.g., upcoming engine oil change or timing belt service), AutoTracker creates reminder events directly in your Google Calendar with alert notifications.',
          'openid, email, profile: Used solely for authenticating your identity via Google Sign-In and displaying your connected Google Account within the application.'
        ]
      },
      {
        id: 'limited-use',
        title: '4. Google API Services User Data Policy (Limited Use)',
        content: [
          "AutoTracker strictly complies with Google's requirements regarding user data obtained via Google APIs.",
          "AutoTracker's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
          'In strict compliance with the Limited Use requirements:'
        ],
        listItems: [
          'User-Facing Purpose Only: We access Google user data strictly to provide and enhance user-facing features prominently visible in the AutoTracker interface (spreadsheets sync, Drive receipt backups, and Calendar notifications).',
          'No Advertising: Google user data is NEVER used or transferred for serving advertisements, including personalized, contextual, retargeted, or interest-based advertising.',
          'No Data Transfers or Sales: We do NOT sell, rent, license, or transfer Google user data to third parties, data brokers, or marketing networks.',
          'No Generalized AI/ML Training: Google user data is NEVER used to train or fine-tune generalized, non-personalized artificial intelligence or machine learning models.',
          'No Human Access: No humans—including the developer or maintenance personnel—are permitted to inspect or read your Google user data, unless: (1) you provide express written permission for troubleshooting a specific technical issue, (2) it is required for internal security audits (such as investigating security bugs), or (3) required by applicable law.'
        ],
        callout: {
          type: 'info',
          title: 'Mandatory Limited Use Compliance',
          text: 'AutoTracker is built to adhere strictly to the Google API Services User Data Policy. Your Google Sheets and Drive files remain your confidential personal data.'
        }
      },
      {
        id: 'data-storage-security',
        title: '5. Data Storage, Transmission & Security',
        content: [
          'We take comprehensive security precautions to safeguard your data at every layer:',
          'All communication between AutoTracker and Google APIs is encrypted in transit using industry-standard TLS 1.3 / HTTPS encryption.',
          'OAuth tokens (Access and Refresh tokens) are stored locally on your device utilizing secure hardware-backed key storage (Android Keystore / EncryptedSharedPreferences). Tokens are never transmitted to any external server other than Google OAuth authentication endpoints.',
          'Offline caching: For offline accessibility, vehicle records are stored locally in an encrypted sandbox on your device. When internet connectivity is restored, records synchronize directly with your personal Google Sheet.'
        ]
      },
      {
        id: 'data-retention-deletion',
        title: '6. Data Retention, User Rights & Deletion',
        content: [
          'Because AutoTracker does not maintain a central server repository of your information, you have complete control over data retention and deletion:'
        ],
        listItems: [
          'Deleting Vehicle Records: You can delete any vehicle log, receipt photo, or expense item directly within the AutoTracker app or directly inside your Google Drive / Google Sheets.',
          'Deleting the Entire Database: To permanently delete all vehicle records, simply delete the AutoTracker spreadsheet and folders from your personal Google Drive (drive.google.com) and clear the app storage on your device.',
          'Revoking Google Account Access: You can immediately disconnect AutoTracker from your Google Account at any time by visiting Google Account Security Settings at https://myaccount.google.com/permissions. Once revoked, AutoTracker loses all access to your Google account and APIs.'
        ],
        callout: {
          type: 'warning',
          title: 'Immediate Access Revocation',
          text: 'You can revoke AutoTracker permissions instantly at any time from your Google Account settings: https://myaccount.google.com/permissions.'
        }
      },
      {
        id: 'third-party-sharing',
        title: '7. Third-Party Sharing & Telemetry',
        content: [
          'AutoTracker has a strict zero-telemetry policy:',
          'We do NOT incorporate third-party advertising SDKs (e.g., Google AdMob, Meta Audience Network).',
          'We do NOT embed user behavior trackers, session recording tools, or data broker libraries.',
          'We do NOT share, trade, or monetize your vehicle records, location, or usage habits under any circumstances.'
        ]
      },
      {
        id: 'children',
        title: '8. Children\'s Privacy',
        content: [
          'AutoTracker is designed for drivers and vehicle owners. The application is not directed toward children under 13 years of age (or under 16 in certain jurisdictions), and we do not knowingly collect personal information from children.'
        ]
      },
      {
        id: 'changes',
        title: '9. Changes to this Privacy Policy',
        content: [
          'We may update this Privacy Policy from time to time to reflect modifications to the application, Google API requirements, or legal regulations.',
          'Any updates will be posted on this page with an updated "Last Updated" date at the top of the policy. We encourage you to review this page periodically.'
        ]
      },
      {
        id: 'contact',
        title: '10. Contact Information & Inquiries',
        content: [
          'If you have any questions, concerns, or requests regarding this Privacy Policy or AutoTracker data handling practices, please contact the developer:'
        ],
        listItems: [
          'Developer: Mohammed Abdelhay',
          'Contact Email: mohammed.abdelhay@ehopn.com',
          'Application Home: https://mabdelhay.com/auto-car',
          'Open-Source Repository: https://github.com/mcitp-mabdelhay/auto-car'
        ]
      }
    ]
  },
  ar: {
    lastUpdated: '15 سبتمبر 2026',
    effectiveDate: '15 سبتمبر 2026',
    backToHome: 'العودة إلى تطبيق AutoTracker',
    title: 'سياسة الخصوصية',
    subtitle: 'بيان شامل لحماية البيانات، وتفاصيل استخدام واجهات Google API، والامتثال لمتطلبات الاستخدام المحدود (Limited Use) لتطبيق AutoTracker.',
    appName: 'AutoTracker',
    developerName: 'محمد عبد الحي (Mohammed Abdelhay)',
    developerEmail: 'mohammed.abdelhay@ehopn.com',
    githubUrl: 'https://github.com/mcitp-mabdelhay/auto-car',
    badge: 'التحقق والشفافية مع Google',
    tableOfContents: 'فهرس المحتويات',
    googleNoticeTitle: 'إقرار سياسة الاستخدام المحدود لبيانات مستخدمي Google',
    googleNoticeText: 'يلتزم استخدام تطبيق AutoTracker ونقله لأي معلومات يتم تلقيها من واجهات برمجة تطبيقات Google (Google APIs) إلى أي تطبيق آخر بسياسة بيانات مستخدم خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود (Limited Use).',
    googleNoticeLinkText: 'قراءة سياسة بيانات مستخدم خدمات Google API الرسمية',
    sections: [
      {
        id: 'overview',
        title: '1. نظرة عامة وفلسفة البنية البرمجية',
        content: [
          'تطبيق AutoTracker هو تطبيق محمول مفتوح وموجه للحفاظ على الخصوصية لتتبع صيانة ونفقات المركبات، مصمم لمالكي السيارات الذين يقدرون ملكية بياناتهم والشفافية الكاملة.',
          'على عكس برامج إدارة السيارات التقليدية التي تخزن بيانات مركبتك الحساسة على خوادم وقواعد بيانات خاصة بأطراف ثالثة، يعمل AutoTracker بنظام برمجي مباشر بين جهاز العميل والسحابة (Client-Only Direct-to-Cloud). هذا يعني أن التطبيق يتصل مباشرة من هاتفك المحمول إلى حسابك الشخصي في Google Drive وجداول Google Sheets دون المرور بأي خوادم وسيطة تابعة لنا.',
          'نحن لا ندير ولا نمتلك أي خوادم خلفية أو خوادم وكيلة (Proxy) قادرة على تسجيل أو جمع أو فحص تاريخ سيارتك أو مصروفاتك أو بياناتك الشخصية. تظل أنت المالك والمتحكم الوحيد في بياناتك بنسبة 100%.'
        ],
        callout: {
          type: 'success',
          title: 'انعدام قواعد البيانات المغلقة للطرف الثالث',
          text: 'لا يقوم تطبيق AutoTracker بتخزين سجلاتك على خوادم سحابية تابعة لأي طرف ثالث. تعيش بياناتك حصرياً داخل حساب Google الشخصي الخاص بك وعلى ذاكرة هاتفك.'
        }
      },
      {
        id: 'information-collected',
        title: '2. البيانات التي يتم الوصول إليها والتعامل معها',
        content: [
          'يتعامل AutoTracker فقط مع المعلومات الضرورية لتوفير خدمات احتساب وتتبع صيانة المركبة. تشمل البيانات:'
        ],
        listItems: [
          'بيانات المركبة: الصانع، الطراز، سنة الصنع، الفئة، سعة خزان الوقود، ورقم اللوحة أو رقم الشاسيه (VIN) الذي تقوم بإدخاله اختيارياً.',
          'قراءات عداد المسافات (Odometer): قيم عداد المسافات الحالية والتاريخية المستخدمة لاحتساب استهلاك القطع وتحديد مواعيد الصيانة الدورية القادمة بدقة.',
          'سجلات الصيانة والإصلاحات: تواريخ الصيانة، بنود الصيانة (زيت المحرك، بطانات الفرامل، شمعات الاحتراق، الفلاتر، السوائل، الإطارات)، القطع المستبدلة، التكلفة، وملاحظات الفني.',
          'سجلات الوقود والنفقات: تواريخ التزود بالوقود، الكمية (باللترات/الجالونات)، التكلفة، معدل استهلاك الوقود، وتكاليف الإصلاحات الطارئة وقطع الغيار.',
          'صور الفواتير والإيصالات: صور الفواتير أو إيصالات ورش الصيانة التي تختار التقاطها لتوثيق تاريخ صيانة سيارتك.',
          'بيانات ملف حساب Google الشخصي: الاسم وعنوان البريد الإلكتروني المتوفران عبر تسجيل الدخول بحساب Google، ويُستخدمان حصراً للتحقق من هوية الجلسة وعرض صورة الحساب داخل واجهة التطبيق.'
        ]
      },
      {
        id: 'google-api-scopes',
        title: '3. أذونات واجهات برمجة تطبيقات Google (Scopes) والغرض منها',
        content: [
          'لتمكين المزامنة السحابية مع جداول البيانات والتذكيرات التلقائية عبر التقويم، يطلب AutoTracker إذناً صريحاً من المستخدم للنطاقات (Scopes) التالية:'
        ],
        listItems: [
          'https://www.googleapis.com/auth/spreadsheets: يقرأ AutoTracker ويكتب الصفوف في جدول Google Sheets مخصص تم إنشاؤه لسيارتك لتسجيل الصيانة والمسافات والنفقات. لا يقرأ أو يعدل التطبيق أي جداول بيانات أخرى في حسابك.',
          'https://www.googleapis.com/auth/drive.file: يستخدم التطبيق هذا الإذن المقيد (drive.file) لإنشاء مجلد مخصص باسم AutoTracker في حساب Google Drive الخاص بك لحفظ جدول البيانات وصور الفواتير. لا يمكن لـ AutoTracker عرض أو البحث أو فتح أو تعديل أو حذف أي ملفات أو مجلدات أخرى في Google Drive.',
          'https://www.googleapis.com/auth/calendar.events: عندما تختار جدولة تذكير بالصيانة القادمة (مثل موعد تغيير الزيت)، ينشئ التطبيق حدث تذكير مباشرة في تقويم Google الخاص بك.',
          'openid, email, profile: تستخدم حصرياً لمصادقة تسجيل الدخول الآمن بحساب Google وربط جلسة التخزين السحابي.'
        ]
      },
      {
        id: 'limited-use',
        title: '4. الامتثال لسياسة الاستخدام المحدود لـ Google (Limited Use Requirements)',
        content: [
          'يلتزم تطبيق AutoTracker بشكل صارم بجميع الشروط والضوابط الصادرة عن Google فيما يتعلق بالتعامل مع بيانات المستخدمين المستلمة عبر واجهات APIs.',
          'يلتزم استخدام تطبيق AutoTracker ونقله لأي معلومات يتم تلقيها من واجهات برمجة تطبيقات Google إلى أي تطبيق آخر بسياسة بيانات مستخدم خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود (Limited Use).',
          'وتفصيلاً للامتثال لمتطلبات الاستخدام المحدود:'
        ],
        listItems: [
          'حصرية الاستخدام للمزايا الظاهرة للمستخدم: نستخدم بيانات Google فقط لتوفير وتحسين الميزات البارزة في واجهة التطبيق (مزامنة جداول البيانات، حفظ صور الفواتير في Drive، وتنبيهات التقويم).',
          'منع الإعلانات تماماً: لا يتم مطلقاً استخدام أو نقل بيانات مستخدمي Google لأغراض عرض الإعلانات، بما في ذلك الإعلانات المخصصة أو المستهدفة أو إعادة الاستهداف.',
          'منع بيع البيانات أو نقلها: لا نقوم ببيع أو تأجير أو مشاركة أو نقل بيانات مستخدمي Google لأي طرف ثالث أو سماسرة بيانات أو شبكات تسويقية.',
          'منع تدريب نماذج الذكاء الاصطناعي العامة: لا تُستخدم بيانات مستخدمي Google إطلاقاً لتدريب أو ضبط نماذج الذكاء الاصطناعي أو تعلم الآلة غير المخصصة للمستخدم نفسه.',
          'منع الفحص البشري: لا يُسمح لأي إنسان، بما في ذلك المطور نفسه، بقراءة بيانات مستخدمي Google إلا في الحالات التالية: (1) الحصول على موافقة كتابية صريحة منك لأغراض حل مشكلة تقنية، (2) لأغراض أمنية داخلية مثل التحقيق في ثغرة أو إساءة استخدام، أو (3) امتثالاً لطلب قانوني ملزم.'
        ],
        callout: {
          type: 'info',
          title: 'الامتثال الإلزامي لسياسة الاستخدام المحدود',
          text: 'تم تصميم التطبيق ليتوافق بدقة مع سياسة بيانات مستخدم خدمات Google API. تظل ملفاتك في Google Drive وGoogle Sheets ملكية خاصة بك وسرية تماماً.'
        }
      },
      {
        id: 'data-storage-security',
        title: '5. أمن وتخزين ونقل البيانات',
        content: [
          'نطبق أعلى معايير الأمان لحماية بياناتك في جميع المراحل:',
          'يتم تشفير جميع الاتصالات بين تطبيق AutoTracker وواجهات Google API أثناء النقل باستخدام بروتوكول TLS 1.3 / HTTPS القياسي.',
          'يتم تخزين رموز الدخول وتجديد الجلسة (OAuth Access & Refresh Tokens) محلياً داخل الهاتف باستخدام نظام التشفير المعتمد على الأجهزة (Android Keystore / EncryptedSharedPreferences)، ولا يتم إرسال هذه الرموز إلى أي خادم خارجي سوى خوادم Google الرسمية.',
          'التخزين المؤقت في وضع عدم الاتصال: يتيح التطبيق العمل دون إنترنت عبر تخزين السجلات في قاعدة بيانات محلية مشفرة ومعزولة على هاتفك، وبمجرد عودة الاتصال تتم المزامنة مباشرة مع جدول Google Sheets الخاص بك.'
        ]
      },
      {
        id: 'data-retention-deletion',
        title: '6. الاحتفاظ بالبيانات، وحقوق المستخدم، وحذف البيانات',
        content: [
          'نظراً لعدم وجود خوادم وسيطة أو قواعد بيانات مركزية لدينا، فإنك تتمتع بالتحكم الكامل في الاحتفاظ بالبيانات وحذفها:'
        ],
        listItems: [
          'حذف السجلات الفردية: يمكنك حذف أي سجل صيانة أو صورة فاتورة أو قيد وقود مباشرة من داخل التطبيق أو من داخل ملف Google Sheets الخاص بك.',
          'حذف قاعدة البيانات بالكامل: لحذف جميع سجلات مركبتك نهائياً، ما عليك سوى حذف جدول ومجلدات AutoTracker مباشرة من حسابك في Google Drive (drive.google.com) ومسح بيانات التطبيق من إعدادات الهاتف.',
          'إلغاء صلاحيات الوصول لحساب Google: يمكنك إلغاء وصول تطبيق AutoTracker إلى حساب Google الخاص بك فوراً وفي أي وقت بالانتقال إلى إعدادات الأمان في حساب Google عبر: https://myaccount.google.com/permissions. وبمجرد الإلغاء، يفقد التطبيق تلقائياً أي قدرة على الوصول إلى حسابك.'
        ],
        callout: {
          type: 'warning',
          title: 'إلغاء صلاحية الوصول فوراً',
          text: 'يمكنك إلغاء صلاحيات تطبيق AutoTracker في أي وقت وبضغطة زر من صفحة أمان حساب Google: https://myaccount.google.com/permissions.'
        }
      },
      {
        id: 'third-party-sharing',
        title: '7. مشاركة البيانات مع أطراف ثالثة والتتبع (Telemetry)',
        content: [
          'يتبع تطبيق AutoTracker سياسة صارمة تنعدم فيها أي أدوات تتبع (Zero Telemetry):',
          'لا ندمج أي حزم برمجية إعلانية (مثل Google AdMob أو شبكات إعلانية أخرى).',
          'لا نستخدم أدوات تتبع سلوك المستخدم أو تسجيل الجلسات أو حزم سماسرة البيانات.',
          'لا نقوم بمشاركة أو بيع أو استغلال بيانات مركبتك أو موقعك الجغرافي أو عادات قيادتك تحت أي ظرف.'
        ]
      },
      {
        id: 'children',
        title: '8. خصوصية الأطفال',
        content: [
          'تطبيق AutoTracker مخصص للسائقين ومالكي المركبات. لا يستهدف التطبيق الأطفال الذين تقل أعمارهم عن 13 عاماً (أو 16 عاماً في بعض التشريعات)، ولا نقوم بجمع أي معلومات شخصية من الأطفال عن علم.'
        ]
      },
      {
        id: 'changes',
        title: '9. التعديلات على سياسة الخصوصية',
        content: [
          'قد نقوم بتحديث سياسة الخصوصية هذه من حين لآخر لتعكس التحسينات في التطبيق أو أي متطلبات جديدة من Google API أو التغييرات القانونية.',
          'سيتم نشر أي تحديثات في هذه الصفحة مع تحديث تاريخ "آخر تحديث" في أعلى السياسة. نوصي بمراجعة هذه الصفحة بشكل دوري.'
        ]
      },
      {
        id: 'contact',
        title: '10. معلومات الاتصال والاستفسارات',
        content: [
          'إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو ممارسات معالجة البيانات في تطبيق AutoTracker، يرجى التواصل مع المطور:'
        ],
        listItems: [
          'المطور: محمد عبد الحي (Mohammed Abdelhay)',
          'البريد الإلكتروني: mohammed.abdelhay@ehopn.com',
          'الموقع الرسمي للتطبيق: https://mabdelhay.com/auto-car',
          'المستودع مفتوح المصدر (GitHub): https://github.com/mcitp-mabdelhay/auto-car'
        ]
      }
    ]
  }
};
