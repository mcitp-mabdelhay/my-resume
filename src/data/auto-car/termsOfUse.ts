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
  developerName: string;
  developerEmail: string;
  githubUrl: string;
  badge: string;
  tableOfContents: string;
  summaryNoticeTitle: string;
  summaryNoticeText: string;
  summaryNoticeLinkText: string;
  sections: TermsSection[];
}

export const termsOfUseTranslations: Record<'en' | 'ar', TermsOfUseContent> = {
  en: {
    lastUpdated: 'September 15, 2026',
    effectiveDate: 'September 15, 2026',
    backToHome: 'Back to AutoTracker',
    privacyLinkText: 'View Privacy Policy',
    title: 'Terms of Use',
    subtitle: 'Clear terms, data ownership rights, service guidelines, and important mechanical disclaimers for the AutoTracker application.',
    appName: 'AutoTracker',
    developerName: 'Mohammed Abdelhay',
    developerEmail: 'mohammed.abdelhay@ehopn.com',
    githubUrl: 'https://github.com/mcitp-mabdelhay/auto-car',
    badge: 'Legal Terms & User Agreement',
    tableOfContents: 'Table of Contents',
    summaryNoticeTitle: 'Direct-to-Cloud & Data Ownership Notice',
    summaryNoticeText: 'AutoTracker operates on a client-only architecture connecting directly to your personal Google account. You retain 100% ownership of your vehicle records, spreadsheets, and receipt files. We do not store or monetize your data on proprietary third-party servers.',
    summaryNoticeLinkText: 'Review our Google API Compliance & Privacy Policy',
    sections: [
      {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: [
          'Welcome to AutoTracker ("the Application", "we", "our", or "the Service"), developed and maintained by Mohammed Abdelhay.',
          'By downloading, installing, accessing, or using AutoTracker, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use ("Terms"). If you do not agree with any part of these Terms, you must immediately cease using and uninstall the Application.',
          'These Terms govern your use of the AutoTracker mobile application, website representations, and any associated software documentation.'
        ],
        callout: {
          type: 'info',
          title: 'Binding Agreement',
          text: 'Using AutoTracker signifies your complete agreement to these Terms and our Privacy Policy. Please read them thoroughly.'
        }
      },
      {
        id: 'architecture-and-service',
        title: '2. Description of Service & Direct-to-Cloud Architecture',
        content: [
          'AutoTracker is an open, privacy-first mobile vehicle maintenance, mileage tracking, and fuel expense monitoring utility designed for automotive owners.',
          'The Application operates exclusively on a Client-Only, Direct-to-Cloud architecture. This means the Application communicates directly from your mobile device to your personal Google Drive, Google Sheets, and Google Calendar accounts using OAuth 2.0 protocol.',
          'AutoTracker does NOT maintain, host, or route your records through private company databases or central intermediary cloud servers. All synchronization, spreadsheet maintenance, and receipt backups occur directly within your own cloud storage.'
        ],
        callout: {
          type: 'success',
          title: 'Direct Cloud Synchronization',
          text: 'No intermediary servers or central databases touch your vehicle records. Data flows strictly between your device and your personal Google account.'
        }
      },
      {
        id: 'user-accounts',
        title: '3. User Accounts & Google Authentication',
        content: [
          'To utilize cloud synchronization and automated calendar reminders, AutoTracker enables sign-in via your Google Account using official Google Identity services.',
          'You are solely responsible for safeguarding the credentials of your Google Account and maintaining the security of the mobile device on which AutoTracker is installed.',
          'You may revoke AutoTracker\'s access to your Google Account at any time via your Google Account Security Permissions (https://myaccount.google.com/permissions). Revocation will stop cloud synchronization without deleting existing spreadsheets or files already saved in your Google Drive.'
        ],
        listItems: [
          'You must be at least 13 years old (or the minimum legal age required in your jurisdiction) to use the Application.',
          'You are responsible for all activities that occur within your connected Google Drive spreadsheet and vehicle logs.',
          'We do not collect, store, or have access to your Google account password.'
        ]
      },
      {
        id: 'data-ownership',
        title: '4. Data Ownership & Storage Rights',
        content: [
          'You retain full, unencumbered ownership of all vehicle data, odometer readings, service records, receipts, fuel entries, and notes entered into or synchronized with AutoTracker.',
          'Because your data resides in your personal Google Sheets and Google Drive storage, you may export, share, duplicate, modify, or delete your records at any time independently of the Application.',
          'We do not claim any intellectual property or ownership rights over your personal vehicle content. We will never sell, lease, rent, or monetize your vehicle data.'
        ]
      },
      {
        id: 'mechanical-disclaimer',
        title: '5. Mechanical & Safety Advice Disclaimer',
        content: [
          'IMPORTANT NOTICE: AutoTracker is a personal record-keeping, calculation, and reminder utility. It is intended solely for informational and organizational convenience.',
          'AutoTracker is NOT a certified automotive diagnostic tool, certified mechanical inspection system, or replacement for professional vehicle inspection, maintenance, or repair.',
          'Calculations, projected service intervals, wear threshold alerts (e.g., engine oil lifespan, brake pad wear, fluid changes), and fuel consumption metrics provided by the Application are estimates based on user-entered values and generic rule-of-thumb guidelines. They do not account for individual driving conditions, climate extremes, component wear defects, or specific manufacturer service bulletins.'
        ],
        listItems: [
          'Always consult your vehicle\'s official Owner\'s Manual and manufacturer specifications for exact service intervals and fluid ratings.',
          'Always seek inspection and advice from certified automotive technicians for mechanical diagnosis, warning lights, braking issues, or vehicle safety concerns.',
          'You assume sole responsibility for maintaining your vehicle in a safe, roadworthy, and legally compliant condition.'
        ],
        callout: {
          type: 'warning',
          title: 'Safety Warning',
          text: 'Never ignore vehicle warning lamps or rely solely on estimated app intervals. Your vehicle safety and regular professional inspections are your sole responsibility.'
        }
      },
      {
        id: 'acceptable-use',
        title: '6. Acceptable Use Policy',
        content: [
          'You agree to use AutoTracker solely for lawful, personal, or legitimate internal business vehicle tracking purposes. You expressly agree that you will not:'
        ],
        listItems: [
          'Use the Application while actively operating a moving motor vehicle in a manner that causes driver distraction or violates local traffic laws.',
          'Attempt to disrupt, overload, or impair the normal operation of third-party APIs (including Google Sheets, Drive, or Calendar endpoints).',
          'Use the Application to transmit malicious code, viruses, or harmful components into your or others\' cloud storage.',
          'Misrepresent your affiliation with the developer or impersonate any individual or entity through the Application.'
        ]
      },
      {
        id: 'third-party-services',
        title: '7. Third-Party Services & Google APIs',
        content: [
          'AutoTracker integrates with third-party services provided by Google LLC (including Google Drive, Google Sheets, Google Calendar, and Google Play Services).',
          'Your use of those third-party services is governed by Google\'s respective terms and conditions and privacy policies. The developer of AutoTracker is not responsible for the availability, uptime, policies, or actions of Google or any external service provider.',
          'AutoTracker\'s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements, as detailed in our Privacy Policy.'
        ]
      },
      {
        id: 'intellectual-property',
        title: '8. Intellectual Property & Open Source',
        content: [
          'The AutoTracker name, logo, application design, user interface elements, animations, and documentation are the intellectual property of Mohammed Abdelhay.',
          'Where the AutoTracker source code is made publicly available under an open-source license on GitHub (https://github.com/mcitp-mabdelhay/auto-car), your use, modification, and distribution of that code are governed by the applicable open-source license provided in the repository.',
          'All trademarks, brand names, and vehicle logos referenced within the app or documentation (e.g., car brand names) belong to their respective registered trademark owners and are used strictly for identification purposes.'
        ]
      },
      {
        id: 'warranty-disclaimer',
        title: '9. Disclaimer of Warranties ("AS IS")',
        content: [
          'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AUTOTRACKER IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.',
          'THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, TITLE, AND NON-INFRINGEMENT.',
          'WE DO NOT WARRANT THAT THE APPLICATION WILL OPERATE ERROR-FREE, UNINTERRUPTED, OR COMPATIBLE WITH EVERY HARDWARE DEVICE OR OPERATING SYSTEM VERSION, NOR DO WE WARRANT THAT CALCULATIONS OR PREDICTED SERVICE DATES WILL BE COMPLETELY ACCURATE OR TIMELY.'
        ]
      },
      {
        id: 'limitation-of-liability',
        title: '10. Limitation of Liability',
        content: [
          'TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER (MOHAMMED ABDELHAY) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE AUTOTRACKER.',
          'THIS INCLUDES, WITHOUT LIMITATION, DAMAGES FOR VEHICLE MECHANICAL FAILURE, ENGINE DAMAGE, ACCIDENTS, TRAFFIC FINES, MISSED SERVICE INTERVALS, REPAIR EXPENSES, LOSS OF DATA, DEVICE DAMAGE, OR ANY OTHER COMMERCIAL OR PERSONAL LOSSES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
          'YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE APPLICATION IS TO DISCONTINUE USING AND UNINSTALL AUTOTRACKER.'
        ],
        callout: {
          type: 'warning',
          title: 'Limitation of Legal Liability',
          text: 'The developer is not liable for mechanical breakdowns, repair bills, missed services, or data losses resulting from the use of the Application.'
        }
      },
      {
        id: 'termination',
        title: '11. Termination & Data Retention',
        content: [
          'You may terminate these Terms at any time by ceasing all use of the Application, deleting the app from your mobile device, and revoking OAuth access in your Google Account security settings.',
          'Because AutoTracker does not store your records on proprietary servers, uninstalling the app leaves your Google Sheets spreadsheet and Google Drive files intact in your personal Google storage.',
          'You have the sole freedom to retain, archive, or permanently delete your "AutoTracker" Google Drive folder and tracking spreadsheet at your own discretion.'
        ]
      },
      {
        id: 'modifications',
        title: '12. Modifications to Terms',
        content: [
          'We reserve the right to revise or update these Terms of Use from time to time to reflect changes in the Application, new feature releases, legal compliance requirements, or third-party API policies.',
          'When modifications are made, the "Last Updated" date at the top of this page will be revised accordingly. For material updates, notice will be provided via the Application or on this webpage.',
          'Your continued use of AutoTracker after any revisions take effect constitutes your binding acceptance of the updated Terms.'
        ]
      },
      {
        id: 'governing-law-and-contact',
        title: '13. Governing Law & Contact Information',
        content: [
          'These Terms shall be interpreted and governed in accordance with applicable general principles of contract law, without giving effect to conflicts of law provisions.',
          'If you have questions, concerns, feedback, or legal inquiries regarding these Terms of Use, please contact:'
        ],
        listItems: [
          'Developer: Mohammed Abdelhay',
          'Email: mohammed.abdelhay@ehopn.com',
          'Open-Source Repository: https://github.com/mcitp-mabdelhay/auto-car',
          'Privacy Policy: https://mabdelhay.com/auto-car/privacy'
        ]
      }
    ]
  },
  ar: {
    lastUpdated: '15 سبتمبر 2026',
    effectiveDate: '15 سبتمبر 2026',
    backToHome: 'العودة إلى AutoTracker',
    privacyLinkText: 'عرض سياسة الخصوصية',
    title: 'شروط الاستخدام',
    subtitle: 'شروط واضحة ومحددة، وحقوق ملكية البيانات، وإرشادات الخدمة، وإخلاء المسؤولية الميكانيكية لتطبيق AutoTracker.',
    appName: 'AutoTracker',
    developerName: 'محمد عبد الحي',
    developerEmail: 'mohammed.abdelhay@ehopn.com',
    githubUrl: 'https://github.com/mcitp-mabdelhay/auto-car',
    badge: 'الشروط القانونية واتفاقية الاستخدام',
    tableOfContents: 'جدول المحتويات',
    summaryNoticeTitle: 'إشعار المعمارية المباشرة وملكية البيانات الكاملة',
    summaryNoticeText: 'يعمل تطبيق AutoTracker بمعمارية موجهة من العميل مباشرة إلى حساب Google الشخصي الخاص بك. تحتفظ بملكية 100% لجميع سجلات سيارتك، وجداول البيانات، وصور الفواتير. لا نقوم بتخزين أو تداول بياناتك على خوادم وسيطة.',
    summaryNoticeLinkText: 'مراجعة سياسة الخصوصية والتوافق مع Google API',
    sections: [
      {
        id: 'acceptance',
        title: '1. قبول شروط الاستخدام',
        content: [
          'مرحباً بك في تطبيق AutoTracker ("التطبيق"، أو "نحن"، أو "الخدمة")، المطور والمقدم من محمد عبد الحي.',
          'من خلال تحميل التطبيق أو تثبيته أو الوصول إليه أو استخدامه، فإنك تقر بأنك قرأت وفهمت ووافقت على الالتزام بشروط الاستخدام هذه ("الشروط"). إذا كنت لا توافق على أي جزء من هذه الشروط، يجب عليك التوقف فوراً عن استخدام التطبيق وإلغاء تثبيته.',
          'تحكم هذه الشروط استخدامك لتطبيق AutoTracker للأجهزة المحمولة، وأي واجهات أو صفحات وثائق تابعة له.'
        ],
        callout: {
          type: 'info',
          title: 'اتفاقية ملزمة قانونياً',
          text: 'استخدامك لتطبيق AutoTracker يمثل موافقتك التامة على هذه الشروط وعلى سياسة الخصوصية. يُرجى قراءتها بعناية.'
        }
      },
      {
        id: 'architecture-and-service',
        title: '2. وصف الخدمة والمعمارية السحابية المباشرة',
        content: [
          'تطبيق AutoTracker هو أداة شخصية مفتوحة المصدر وعالية الخصوصية مصممة لمساعدة مالكي السيارات في تتبع أعمال الصيانة، وقراءات العداد (الكيلومترات)، ونفقات واستهلاك الوقود.',
          'يعمل التطبيق بشكل حصري وفق معمارية تعتمد على العميل مباشرة إلى السحابة (Client-Only Direct-to-Cloud). هذا يعني أن التطبيق يتصل مباشرة من هاتفك المحمول بحسابك الشخصي على Google Drive وGoogle Sheets وGoogle Calendar باستخدام بروتوكول OAuth 2.0 المعتمد.',
          'لا يقوم تطبيق AutoTracker بإنشاء أو تشغيل أي خوادم وسيطة أو قواعد بيانات مركزية تخزن بياناتك أو تمر عبرها سجلات سيارتك. جميع عمليات المزامنة والتخزين الاحتياطي تحدث حصرياً داخل مساحتك السحابية الشخصية.'
        ],
        callout: {
          type: 'success',
          title: 'مزامنة سحابية مباشرة',
          text: 'لا توجد خوادم وسيطة أو قواعد بيانات خاصة بنا تطلع على سجلات مركبتك. البيانات تنتقل مباشرة بين هاتفك وحساب Google الخاص بك.'
        }
      },
      {
        id: 'user-accounts',
        title: '3. حسابات المستخدمين والتحقق عبر Google',
        content: [
          'لتمكين المزامنة السحابية وجدولة تنبيهات التقويم التلقائية، يتيح التطبيق تسجيل الدخول باستخدام حساب Google الخاص بك عبر خدمات Google الرسمية.',
          'أنت المسؤول الوحيد عن الحفاظ على سرية بيانات حساب Google الخاص بك وأمان جهازك المحمول المثبت عليه التطبيق.',
          'يمكنك إلغاء صلاحيات وصول AutoTracker إلى حساب Google الخاص بك في أي وقت عبر إعدادات أمان حساب Google (https://myaccount.google.com/permissions). إلغاء الصلاحيات سيوقف المزامنة السحابية المستقبلية دون حذف الملفات وجداول البيانات المحفوظة مسبقاً في Google Drive.'
        ],
        listItems: [
          'يجب ألا يقل عمرك عن 13 عاماً (أو السن القانوني الأدنى في بلدك) لاستخدام التطبيق.',
          'أنت مسؤول بالكامل عن كافة الأنشطة والبيانات المدخلة في جدول بياناتك وسجلات مركبتك.',
          'نحن لا نطلع ولا نخزن أبداً كلمات المرور الخاصة بحساب Google الخاص بك.'
        ]
      },
      {
        id: 'data-ownership',
        title: '4. ملكية البيانات وحقوق التخزين',
        content: [
          'تحتفظ بكامل الملكية التامة وغير المشروطة لجميع بيانات المركبة، وقراءات العداد، وسجلات الصيانة، والفواتير، ومصروفات الوقود، والملاحظات التي تقوم بإدخالها.',
          'نظراً لأن بياناتك تُخزن في حساب Google Sheets وGoogle Drive الشخصي الخاص بك، يمكنك تصديرها أو نسخها أو تعديلها أو حذفها بشكل مستقل تماماً وبمعزل عن التطبيق في أي وقت تشاء.',
          'نحن لا ندعي أي حقوق ملكية فكرية على سجلاتك الشخصية، ولن نقوم أبداً ببيع أو تأجير أو استغلال بيانات مركبتك لأي أغراض تجارية أو إعلانية.'
        ]
      },
      {
        id: 'mechanical-disclaimer',
        title: '5. إخلاء المسؤولية الميكانيكية وإرشادات السلامة',
        content: [
          'تنبيه هام جداً: يُقدم تطبيق AutoTracker كأداة تنظيمية لتسجيل البيانات وحساب التكاليف والتذكير بالمواعيد فقط، وهو مخصص للاستخدام الشخصي والمعلوماتي.',
          'تطبيق AutoTracker ليس جهاز فحص تشخيصي ميكانيكي معتمد، ولا يمثل بديلاً عن الفحص الفني الدوري للسيارة أو رأي الميكانيكي المتخصص أو توصيات الشركة المصنعة.',
          'الحسابات والتقديرات المتعلقة بعمر الزيوت أو القطع الاستهلاكية (مثل الفرامل والسيور وشمعات الاحتراق وفلاتر الهواء) ومعدلات استهلاك الوقود هي تقديرات تقريبية مبنية على المدخلات اليدوية والمتوسطات العامة، ولا تأخذ بعين الاعتبار ظروف القيادة القاسية أو الأعطال المفاجئة أو عيوب الصناعة.'
        ],
        listItems: [
          'يجب عليك دائماً مراجعة كتيب دليل المالك (Owner\'s Manual) الخاص بمركبتك لمعرفة الجداول والمواصفات الميكانيكية الدقيقة للزيوت والقطع.',
          'يجب استشارة فنيي ومراكز الصيانة المعتمدة فوراً عند ظهور أي لمبات تحذيرية في لوحة القيادة أو ملاحظة أي مشكلات في الفرامل أو منظومة التوجيه والسلامة.',
          'أنت وحدك المسؤول مسؤولية كاملة عن سلامة سيارتك وجاهزيتها الفنية وصلاحيتها للقيادة على الطرق العامة.'
        ],
        callout: {
          type: 'warning',
          title: 'إخلاء مسؤولية للسلامة العامة',
          text: 'لا تتجاهل أبداً أضواء التحذير في السيارة ولا تعتمد فقط على تقديرات التطبيق الرقمية. سلامة قيادتك وصيانة سيارتك الاحترافية تقع على عاتقك بالكامل.'
        }
      },
      {
        id: 'acceptable-use',
        title: '6. سياسة الاستخدام المقبول والمحظورات',
        content: [
          'توافق على استخدام تطبيق AutoTracker فقط للأغراض الشخصية أو التنظيمية المشروعة. وتتعهد بالامتناع عن القيام بأي مما يلي:'
        ],
        listItems: [
          'استخدام التطبيق أثناء القيادة الفعلية للسيارة بما قد يشتت انتباهك عن الطريق أو يخالف قوانين وأنظمة المرور المحلية.',
          'محاولة تعطيل أو التحميل الزائد أو الإضرار بالعمليات الطبيعية للواجهات البرمجية الخارجية (مثل Google Sheets أو Drive أو Calendar).',
          'استخدام التطبيق لنشر أو تخزين برمجيات ضارة أو فيروسات داخل مساحات التخزين السحابية الخاصة بك أو بالآخرين.',
          'انتحال شخصية المطور أو ادعاء تمثيل التطبيق بشكل زائف.'
        ]
      },
      {
        id: 'third-party-services',
        title: '7. الخدمات الخارجية وواجهات برمجة Google',
        content: [
          'يعتمد تطبيق AutoTracker على خدمات ومكتبات تقدمها شركة Google LLC (تشمل Google Drive وGoogle Sheets وGoogle Calendar وGoogle Play Services).',
          'يخضع استخدامك لتلك الخدمات الخارجية لشروط وأحكام وسياسات خصوصية شركة Google. ولا يتحمل مطور AutoTracker أي مسؤولية عن انقطاع تلك الخدمات الخارجية أو تعديل سياساتها أو أعطال شبكات الاتصال.',
          'يلتزم استخدام تطبيق AutoTracker للمعلومات الواردة من واجهات برمجة تطبيقات Google بسياسة بيانات مستخدم خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود (Limited Use).'
        ]
      },
      {
        id: 'intellectual-property',
        title: '8. الملكية الفكرية والمصدر المفتوح',
        content: [
          'تعد العلامة التجارية وتصاميم الواجهات ورسوميات وأيقونات AutoTracker ملكاً للمطور محمد عبد الحي.',
          'الشيفرة المصدرية للتطبيق المتاحة للعامة عبر مستودع GitHub (https://github.com/mcitp-mabdelhay/auto-car) تخضع لرخصة المصدر المفتوح المحددة في المستودع، ويُسمح باستخدامها وفق بنود تلك الرخصة.',
          'جميع العلامات التجارية والشعارات الخاصة بشركات وصناع السيارات الواردة في التطبيق أو الوثائق هي ملك لأصحابها الشرعيين وتُذكر فقط لتسهيل التعرف على طرازات المركبات.'
        ]
      },
      {
        id: 'warranty-disclaimer',
        title: '9. إخلاء الضمانات (الخدمة كما هي "AS IS")',
        content: [
          'إلى الحد الأقصى الذي يجيزه القانون المعمول به، يُقدم تطبيق AutoTracker "كما هو" و"بحالته الراهنة" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية.',
          'يخلي المطور مسؤوليته صراحةً عن كافة الضمانات بما في ذلك ملاءمة التطبيق لغرض معين، أو دقته التامة، أو خلوه من الأخطاء والعيوب البرمجية غير المتوقعة.',
          'لا نضمن أن التطبيق سيعمل دون أي انقطاع في المزامنة أو أنه متوافق مع كافة أنظمة وإصدارات الأجهزة القديمة أو الحديثة دون استثناء.'
        ]
      },
      {
        id: 'limitation-of-liability',
        title: '10. تحديد المسؤولية القانونية',
        content: [
          'إلى أقصى حد يسمح به القانون، لا يتحمل المطور (محمد عبد الحي) بأي حال من الأحوال أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك للتطبيق أو عدم القدرة على استخدامه.',
          'يشمل ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن تعطل محرك أو قطع المركبة، أو حوادث السير، أو المخالفات المرورية، أو فوات مواعيد الصيانة الدورية، أو تكاليف الإصلاح المرتفعة، أو فقدان البيانات، حتى لو تم إخطارنا باحتمالية وقوع تلك الأضرار.',
          'الحل الوحيد المتاح لك في حال عدم رضاك عن التطبيق هو التوقف عن استخدامه وحذفه من جهازك.'
        ],
        callout: {
          type: 'warning',
          title: 'تحديد المسؤولية',
          text: 'المطور غير مسؤول قانونياً أو مالياً عن أي أعطال تصيب مركبتك أو فواتير إصلاح أو بيانات مفقودة نتيجة الاعتماد على التطبيق.'
        }
      },
      {
        id: 'termination',
        title: '11. إنهاء الاستخدام وحذف البيانات',
        content: [
          'يمكنك إنهاء هذه الشروط في أي وقت من خلال التوقف عن استخدام التطبيق، وحذفه من هاتفك، وإلغاء صلاحية الوصول في إعدادات أمان حساب Google.',
          'نظراً لعدم وجود خوادم تابعة لنا تخزن بياناتك، فإن حذف التطبيق من هاتفك لن يؤدي إلى حذف جدول البيانات أو الفواتير المخزنة في حساب Google Drive الخاص بك.',
          'يمكنك الاحتفاظ بتلك الملفات أو تنزيلها أو حذفها نهائياً بنفسك من حساب Google في أي وقت تشاء.'
        ]
      },
      {
        id: 'modifications',
        title: '12. تعديل شروط الاستخدام',
        content: [
          'نحتفظ بالحق في تعديل أو تحديث شروط الاستخدام هذه في أي وقت لتعكس أي تحسينات في ميزات التطبيق أو لمواكبة المتطلبات القانونية والسياسات التقنية لواجهات Google.',
          'عند إجراء أي تحديثات، سيتم تعديل تاريخ "آخر تحديث" في أعلى هذه الصفحة. ويُعد استمرارك في استخدام التطبيق بعد نشر التعديلات موافقة صريحة منك على الشروط المحدثة.'
        ]
      },
      {
        id: 'governing-law-and-contact',
        title: '13. القانون الحاكم ومعلومات التواصل والدعم',
        content: [
          'تخضع هذه الشروط وتُفسر وفقاً للمبادئ القانونية العامة المعمول بها لتنظيم العقود والخدمات الرقمية.',
          'إذا كانت لديك أي استفسارات أو ملاحظات قانونية أو فنية تتعلق بشروط الاستخدام، يمكنك التواصل معنا عبر الوسائل التالية:'
        ],
        listItems: [
          'المطور: محمد عبد الحي (Mohammed Abdelhay)',
          'البريد الإلكتروني: mohammed.abdelhay@ehopn.com',
          'مستودع المشروع مفتوح المصدر: https://github.com/mcitp-mabdelhay/auto-car',
          'رابط سياسة الخصوصية: https://mabdelhay.com/auto-car/privacy'
        ]
      }
    ]
  }
};
