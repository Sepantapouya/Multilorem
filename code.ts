// MultiLorem - Figma Plugin for generating Lorem Ipsum in multiple languages
// Author: Sepanta Pouya

/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__, { 
  width: 320, 
  height: 500,
  title: "MultiLorem - Multi-language Lorem Ipsum Generator"
});

// Type definitions for language content
interface LanguageContent {
  words: string[];
  adjectives: string[];
  nouns: string[];
  verbs: string[];
  starter: string;
  isRTL: boolean;
  samplePhrases: string[];
  sentences: string[];
}

interface LoremContentMap {
  [key: string]: LanguageContent;
}

// Embedded language content for all supported languages
const loremContent: LoremContentMap = {
  en: {
    words: ['design', 'creative', 'beautiful', 'modern', 'elegant', 'innovative', 'professional', 'stunning', 'amazing', 'awesome', 'fantastic', 'excellent', 'perfect', 'wonderful', 'brilliant', 'outstanding', 'remarkable', 'impressive', 'exceptional', 'magnificent', 'splendid', 'gorgeous', 'lovely', 'charming', 'delightful', 'inspiring', 'captivating', 'engaging', 'compelling', 'powerful', 'sophisticated', 'minimalist', 'contemporary', 'dynamic', 'versatile', 'seamless', 'intuitive', 'robust', 'scalable', 'flexible', 'responsive', 'interactive', 'immersive', 'sleek', 'polished', 'refined', 'strategic', 'thoughtful', 'purposeful', 'intentional', 'cutting-edge', 'state-of-the-art', 'revolutionary', 'groundbreaking', 'pioneering', 'next-generation', 'forward-thinking', 'visionary', 'transformative', 'disruptive', 'user-friendly'],
    adjectives: ['beautiful', 'modern', 'elegant', 'creative', 'innovative', 'professional', 'stunning', 'amazing', 'fantastic', 'excellent', 'perfect', 'wonderful', 'brilliant', 'outstanding', 'remarkable', 'impressive', 'exceptional', 'magnificent', 'sophisticated', 'minimalist', 'contemporary', 'dynamic', 'versatile', 'seamless', 'intuitive', 'robust', 'scalable', 'flexible', 'responsive', 'interactive', 'immersive', 'sleek', 'polished', 'refined', 'strategic', 'thoughtful', 'purposeful', 'intentional', 'cutting-edge', 'state-of-the-art', 'revolutionary', 'groundbreaking', 'pioneering', 'next-generation', 'forward-thinking', 'visionary', 'transformative', 'disruptive', 'user-friendly', 'efficient'],
    nouns: ['design', 'project', 'website', 'application', 'interface', 'experience', 'solution', 'product', 'service', 'platform', 'system', 'framework', 'technology', 'innovation', 'creativity', 'development', 'presentation', 'portfolio', 'branding', 'identity', 'architecture', 'methodology', 'workflow', 'process', 'strategy', 'concept', 'prototype', 'iteration', 'collaboration', 'integration', 'optimization', 'performance', 'functionality', 'usability', 'accessibility', 'scalability', 'sustainability', 'ecosystem', 'infrastructure', 'component', 'module', 'element', 'feature', 'capability', 'enhancement', 'transformation', 'evolution', 'revolution', 'breakthrough', 'milestone', 'algorithm', 'data', 'information', 'network', 'security', 'privacy', 'encryption'],
    verbs: ['create', 'design', 'develop', 'build', 'innovate', 'inspire', 'transform', 'enhance', 'improve', 'optimize', 'deliver', 'achieve', 'accomplish', 'realize', 'implement', 'execute', 'produce', 'generate', 'establish', 'maintain', 'collaborate', 'integrate', 'streamline', 'revolutionize', 'modernize', 'customize', 'personalize', 'automate', 'simplify', 'amplify', 'accelerate', 'elevate', 'refine', 'perfect', 'craft', 'engineer', 'architect', 'strategize', 'conceptualize', 'visualize', 'prototype', 'iterate', 'validate', 'test', 'launch', 'deploy', 'scale', 'evolve', 'advance', 'progress', 'analyze', 'process', 'store', 'transfer', 'encrypt'],
    starter: 'Beautiful design creates amazing experiences',
    isRTL: false,
    samplePhrases: [
      'exceptional user experience',
      'innovative design solution',
      'creative digital platform',
      'modern web application',
      'elegant user interface',
      'professional development process',
      'stunning visual presentation',
      'remarkable creative achievement',
      'seamless integration workflow',
      'cutting-edge technology stack',
      'robust system architecture',
      'intuitive navigation design',
      'responsive mobile experience',
      'scalable cloud infrastructure',
      'dynamic content management',
      'interactive prototype development',
      'collaborative design process',
      'strategic brand positioning',
      'transformative digital solution',
      'revolutionary user interface',
      'sophisticated design system',
      'comprehensive testing strategy',
      'agile development methodology',
      'performance optimization technique',
      'accessibility compliance standard',
      'sustainable design practice',
      'next-generation framework',
      'intelligent automation system',
      'personalized user journey',
      'data-driven design decision'
    ],
    sentences: [
      'Beautiful design creates amazing experiences for every user.',
      'Modern technology transforms how we build digital products.',
      'Creative solutions emerge from collaborative design processes.',
      'Innovative platforms deliver exceptional value to customers.',
      'Professional development ensures scalable system architecture.',
      'Elegant interfaces enhance user engagement and satisfaction.',
      'Responsive design adapts seamlessly across all devices.',
      'Strategic planning drives successful product launches.',
      'Dynamic content keeps audiences engaged and informed.',
      'Robust frameworks provide foundation for growth.',
      'Interactive prototypes validate concepts before development.',
      'Data-driven decisions improve overall performance metrics.',
      'Accessible design ensures inclusive user experiences.',
      'Sustainable practices create long-term business value.',
      'Intelligent automation streamlines complex workflows.',
      'Personalized journeys increase conversion rates significantly.',
      'Comprehensive testing guarantees reliable product delivery.',
      'Cutting-edge technology enables breakthrough innovations.',
      'Sophisticated systems handle massive scale requirements.',
      'Transformative solutions revolutionize entire industries.',
      'Agile methodologies accelerate time-to-market delivery.',
      'Performance optimization ensures lightning-fast response times.',
      'Cloud infrastructure provides unlimited scalability potential.',
      'Visual presentations communicate complex ideas effectively.',
      'Brand positioning establishes strong market presence.',
      'Next-generation frameworks simplify development processes.',
      'Collaborative teams produce remarkable creative achievements.',
      'Integration workflows connect disparate system components.',
      'Navigation design guides users through intuitive pathways.',
      'Digital platforms enable global business transformation.'
    ]
  },
  fa: {
    words: ['طراحی', 'خلاقانه', 'زیبا', 'مدرن', 'شیک', 'نوآورانه', 'حرفه‌ای', 'فوق‌العاده', 'عالی', 'بی‌نظیر', 'استثنایی', 'لامع', 'جذاب', 'الهام‌بخش', 'پیشرفته', 'کاربردی', 'موثر', 'قدرتمند', 'منحصربه‌فرد', 'بهینه', 'دقیق', 'ساده', 'کاراآمد', 'مناسب', 'ایده‌آل', 'هنرمندانه', 'تخصصی', 'باکیفیت', 'متمایز', 'پیچیده', 'یکپارچه', 'تعاملی', 'واکنش‌گرا', 'انطباق‌پذیر', 'انعطاف‌پذیر', 'مقیاس‌پذیر', 'پایدار', 'ایمن', 'سریع', 'بهینه‌شده', 'هوشمند', 'خودکار', 'شخصی‌سازی‌شده', 'چندمنظوره', 'کارآمد', 'پردازشی', 'ابری', 'دیجیتال', 'الکترونیکی', 'محاسباتی', 'شبکه‌ای', 'موبایل', 'تحلیلی', 'آماری', 'علمی', 'تکنیکی', 'فنی', 'صنعتی', 'درخشان', 'شگفت‌انگیز', 'چشمگیر', 'ماهرانه', 'هوشیارانه', 'استراتژیک', 'تاکتیکی', 'سیستماتیک', 'منطقی', 'عقلانی', 'علمی', 'تجربی', 'عملی', 'کاربرمحور', 'محتوامحور', 'هدفمند', 'برنامه‌ریزی‌شده', 'سازمان‌یافته', 'منضبط', 'دقیق', 'متقن', 'کامل', 'جامع', 'فراگیر', 'گسترده', 'عمیق', 'بنیادی', 'اساسی', 'ضروری', 'حیاتی', 'اولویت‌دار', 'فوری', 'سریع', 'فوری', 'آنی', 'لحظه‌ای', 'بی‌درنگ', 'بلادرنگ', 'فوراً', 'سریعاً', 'به‌سرعت', 'سرعت', 'کیفیت', 'دقت', 'ظرافت', 'زیبایی', 'جاذبه', 'کشش', 'تأثیر', 'نفوذ', 'قدرت', 'توان', 'قابلیت', 'ظرفیت', 'گنجایش', 'وسعت', 'عمق', 'ارتفاع', 'بلندی', 'رشد', 'توسعه', 'گسترش', 'افزایش', 'بهبود', 'ارتقاء', 'پیشرفت', 'تکامل', 'تحول', 'دگرگونی', 'تغییر', 'نوسازی', 'بازسازی'],
    adjectives: ['زیبا', 'مدرن', 'شیک', 'خلاقانه', 'نوآورانه', 'حرفه‌ای', 'فوق‌العاده', 'عالی', 'بی‌نظیر', 'استثنایی', 'لامع', 'جذاب', 'الهام‌بخش', 'پیشرفته', 'کاربردی', 'موثر', 'قدرتمند', 'پیچیده', 'یکپارچه', 'تعاملی', 'واکنش‌گرا', 'انطباق‌پذیر', 'انعطاف‌پذیر', 'مقیاس‌پذیر', 'پایدار', 'ایمن', 'سریع', 'بهینه‌شده', 'هوشمند', 'خودکار', 'شخصی‌سازی‌شده', 'چندمنظوره', 'کارآمد', 'پردازشی', 'ابری', 'دیجیتال', 'الکترونیکی', 'نوین', 'پیشگامانه', 'تحول‌آفرین', 'مخرب', 'بصیرانه', 'آینده‌نگر', 'درخشان', 'شگفت‌انگیز', 'چشمگیر', 'ماهرانه', 'استراتژیک', 'تاکتیکی', 'سیستماتیک', 'منطقی', 'عقلانی', 'تجربی', 'عملی', 'کاربرمحور', 'محتوامحور', 'هدفمند', 'سازمان‌یافته', 'منضبط', 'متقن', 'کامل', 'جامع', 'فراگیر', 'گسترده', 'عمیق', 'بنیادی', 'اساسی', 'ضروری', 'حیاتی', 'اولویت‌دار', 'فوری', 'آنی', 'لحظه‌ای', 'بی‌درنگ', 'سریع‌الاجرا', 'کارساز', 'مؤثر', 'تأثیرگذار', 'نفوذپذیر', 'قابل‌اعتماد', 'اطمینان‌بخش', 'مطمئن', 'قطعی', 'حتمی', 'یقینی', 'واضح', 'شفاف', 'روشن', 'صریح', 'مشخص', 'معین', 'تعریف‌شده', 'مشخص‌شده', 'تعیین‌شده', 'برنامه‌ریزی‌شده', 'طراحی‌شده', 'ساخته‌شده', 'تولیدشده', 'ایجادشده', 'توسعه‌یافته', 'پیشرفته', 'تکامل‌یافته', 'بهبودیافته', 'ارتقایافته', 'نوسازی‌شده', 'مدرنیزه‌شده', 'به‌روزرسانی‌شده', 'تازه', 'جدید', 'نو', 'تازه‌وارد', 'جدیدالورود', 'نوظهور', 'در‌حال‌ظهور'],
    nouns: ['طراحی', 'پروژه', 'وب‌سایت', 'اپلیکیشن', 'رابط کاربری', 'تجربه کاربری', 'راه‌حل', 'محصول', 'سرویس', 'پلتفرم', 'سیستم', 'فریمورک', 'تکنولوژی', 'نوآوری', 'خلاقیت', 'توسعه', 'ارائه', 'نمونه‌کار', 'برندسازی', 'هویت', 'معماری', 'متدولوژی', 'گردش‌کار', 'فرآیند', 'استراتژی', 'مفهوم', 'نمونه‌اولیه', 'تکرار', 'همکاری', 'یکپارچه‌سازی', 'بهینه‌سازی', 'عملکرد', 'قابلیت', 'کاربری‌پذیری', 'دسترسی‌پذیری', 'مقیاس‌پذیری', 'پایداری', 'اکوسیستم', 'زیرساخت', 'مؤلفه', 'ماژول', 'عنصر', 'ویژگی', 'بهبود', 'تحول', 'انقلاب', 'پیشرفت', 'نقطه عطف', 'الگوریتم', 'داده', 'اطلاعات', 'شبکه', 'امنیت', 'حریم خصوصی', 'رمزنگاری', 'مدیریت', 'سازمان', 'شرکت', 'کسب‌وکار', 'تجارت', 'بازار', 'مشتری', 'کاربر', 'مخاطب', 'مدیر', 'مدیریت', 'رهبری', 'رهبر', 'تیم', 'گروه', 'واحد', 'بخش', 'قسمت', 'بازه', 'مرحله', 'فاز', 'گام', 'قدم', 'روش', 'رویه', 'شیوه', 'ابزار', 'وسیله', 'دستگاه', 'تجهیزات', 'سخت‌افزار', 'نرم‌افزار', 'برنامه', 'کد', 'کدنویسی', 'برنامه‌نویسی', 'توسعه‌دهنده', 'برنامه‌نویس', 'طراح', 'مهندس', 'متخصص', 'کارشناس', 'مشاور', 'مشاوره', 'آموزش', 'تربیت', 'یادگیری', 'آموزش', 'مطالعه', 'تحقیق', 'پژوهش', 'بررسی', 'تجزیه‌وتحلیل', 'ارزیابی', 'سنجش', 'اندازه‌گیری', 'محاسبه', 'برآورد', 'تخمین', 'پیش‌بینی', 'پیشگویی', 'آینده‌نگری', 'چشم‌انداز', 'برنامه', 'طرح', 'پروژه', 'پروپوزال', 'پیشنهاد', 'توصیه', 'راهنما', 'راهنمایی', 'کمک', 'پشتیبانی', 'حمایت', 'خدمات', 'ارائه', 'تحویل', 'انتشار', 'انتشار', 'توزیع', 'پخش', 'ارسال', 'تحویل', 'دریافت', 'گیرنده', 'فرستنده', 'مرسل', 'مخاطب', 'دریافت‌کننده'],
    verbs: ['ایجاد', 'طراحی', 'توسعه', 'ساخت', 'نوآوری', 'الهام', 'تبدیل', 'بهبود', 'بهینه‌سازی', 'ارائه', 'دستیابی', 'انجام', 'تحقق', 'پیاده‌سازی', 'اجرا', 'تولید', 'برقراری', 'نگهداری', 'همکاری', 'یکپارچه‌سازی', 'ساده‌سازی', 'انقلاب', 'مدرنیزه', 'سفارشی‌سازی', 'شخصی‌سازی', 'خودکارسازی', 'تقویت', 'تسریع', 'ارتقاء', 'تصفیه', 'کامل‌سازی', 'مهندسی', 'معماری', 'استراتژی‌سازی', 'مفهوم‌سازی', 'تجسم', 'نمونه‌سازی', 'تکرار', 'اعتبارسنجی', 'آزمایش', 'راه‌اندازی', 'استقرار', 'مقیاس‌بندی', 'تکامل', 'پیشرفت', 'تحلیل', 'پردازش', 'ذخیره‌سازی', 'انتقال', 'رمزگذاری', 'مدیریت‌کردن', 'سازمان‌دهی', 'هماهنگ‌کردن', 'هدایت‌کردن', 'راهنمایی‌کردن', 'آموزش‌دادن', 'یاد‌دادن', 'یادگرفتن', 'مطالعه‌کردن', 'تحقیق‌کردن', 'پژوهش‌کردن', 'بررسی‌کردن', 'ارزیابی‌کردن', 'سنجیدن', 'اندازه‌گیری‌کردن', 'محاسبه‌کردن', 'برآورد‌کردن', 'تخمین‌زدن', 'پیش‌بینی‌کردن', 'پیشگویی‌کردن', 'برنامه‌ریزی‌کردن', 'طرح‌ریزی‌کردن', 'پیشنهاد‌کردن', 'توصیه‌کردن', 'راهنمایی‌کردن', 'کمک‌کردن', 'پشتیبانی‌کردن', 'حمایت‌کردن', 'خدمت‌کردن', 'ارائه‌دادن', 'تحویل‌دادن', 'منتشر‌کردن', 'توزیع‌کردن', 'پخش‌کردن', 'ارسال‌کردن', 'فرستادن', 'دریافت‌کردن', 'گرفتن', 'قبول‌کردن', 'پذیرفتن', 'تأیید‌کردن', 'تصدیق‌کردن', 'تصویب‌کردن', 'رد‌کردن', 'نپذیرفتن', 'مخالفت‌کردن', 'موافقت‌کردن', 'همراهی‌کردن', 'دنبال‌کردن', 'پیگیری‌کردن', 'نظارت‌کردن', 'کنترل‌کردن', 'بازرسی‌کردن', 'مراقبت‌کردن', 'محافظت‌کردن', 'حفاظت‌کردن', 'دفاع‌کردن', 'مقاومت‌کردن', 'استقامت‌کردن', 'تحمل‌کردن', 'صبر‌کردن', 'منتظر‌ماندن', 'انتظار‌کشیدن'],
    starter: 'طراحی زیبا تجربه‌های شگفت‌انگیز ایجاد می‌کند',
    isRTL: true,
    samplePhrases: [
        'تجربه کاربری استثنایی',
        'راه‌حل طراحی نوآورانه',
        'پلتفرم دیجیتال خلاقانه',
        'اپلیکیشن وب مدرن',
        'رابط کاربری شیک',
        'فرآیند توسعه حرفه‌ای',
        'ارائه بصری فوق‌العاده',
        'دستاورد خلاقانه چشمگیر',
        'گردش‌کار یکپارچه‌سازی بی‌درز',
        'پشته تکنولوژی پیشرفته',
        'معماری سیستم مقاوم',
        'طراحی ناوبری شهودی',
        'تجربه موبایل واکنش‌گرا',
        'زیرساخت ابری مقیاس‌پذیر',
        'مدیریت محتوای پویا',
        'توسعه نمونه‌اولیه تعاملی',
        'فرآیند طراحی همکارانه',
        'موضع‌گیری استراتژیک برند',
        'راه‌حل دیجیتال تحول‌آفرین',
        'رابط کاربری انقلابی',
        'سیستم طراحی پیچیده',
        'استراتژی آزمایش جامع',
        'متدولوژی توسعه چابک',
        'تکنیک بهینه‌سازی عملکرد',
        'استاندارد انطباق دسترسی‌پذیری',
        'روش طراحی پایدار',
        'فریمورک نسل بعدی',
        'سیستم اتوماسیون هوشمند',
        'سفر کاربری شخصی‌سازی‌شده',
        'تصمیم طراحی مبتنی بر داده',
        'مدیریت پروژه حرفه‌ای',
        'سازمان‌دهی کارآمد تیم',
        'هماهنگی فرآیندهای کاری',
        'رهبری پروژه‌های پیچیده',
        'آموزش تخصصی تیم',
        'تحقیق و توسعه نوآورانه',
        'تجزیه‌وتحلیل داده‌های عمیق',
        'ارزیابی کیفیت محصول',
        'سنجش رضایت کاربر',
        'محاسبه بازگشت سرمایه',
        'برآورد هزینه‌های پروژه',
        'پیش‌بینی روندهای بازار',
        'برنامه‌ریزی استراتژیک',
        'طرح‌ریزی عملیاتی',
        'پیشنهاد راه‌حل خلاقانه',
        'توصیه بهترین شیوه‌ها',
        'راهنمایی فنی تخصصی',
        'پشتیبانی کامل کاربر',
        'حمایت فناوری پیشرفته',
        'خدمات مشاوره‌ای',
        'ارائه آموزش‌های تخصصی',
        'تحویل محصول باکیفیت',
        'انتشار نسخه‌های جدید',
        'توزیع محتوای دیجیتال',
        'پخش اطلاعات مهم',
        'ارسال گزارش‌های دوره‌ای',
        'دریافت بازخورد کاربران',
        'تأیید کیفیت عملکرد',
        'کنترل فرآیندهای کاری',
        'نظارت بر پیشرفت پروژه',
        'مراقبت از امنیت سیستم',
        'حفاظت از داده‌های حساس',
        'دفاع در برابر تهدیدات',
        'مقاومت در مقابل مشکلات',
        'انعطاف‌پذیری در تغییرات',
        'سازگاری با استانداردها',
        'بهبود مستمر عملکرد',
        'ارتقاء سطح خدمات',
        'توسعه قابلیت‌های جدید',
        'گسترش بازار هدف',
        'تقویت موقعیت رقابتی',
        'تسریع فرآیند تولید',
        'کامل‌سازی ویژگی‌ها'
      ],
      sentences: [
        'طراحی زیبا تجربه‌های شگفت‌انگیز برای کاربران ایجاد می‌کند.',
        'تکنولوژی مدرن شیوه ساخت محصولات دیجیتال را تغییر می‌دهد.',
        'راه‌حل‌های خلاقانه از فرآیندهای طراحی همکارانه پدید می‌آیند.',
        'پلتفرم‌های نوآورانه ارزش استثنایی به مشتریان ارائه می‌دهند.',
        'توسعه حرفه‌ای معماری سیستم قابل گسترش را تضمین می‌کند.',
        'رابط‌های شیک تعامل و رضایت کاربر را بهبود می‌بخشند.',
        'طراحی واکنش‌گرا در تمام دستگاه‌ها به‌طور یکپارچه تطبیق می‌یابد.',
        'برنامه‌ریزی استراتژیک راه‌اندازی موفق محصولات را هدایت می‌کند.',
        'محتوای پویا مخاطبان را درگیر و آگاه نگه می‌دارد.',
        'فریمورک‌های مقاوم پایه‌ای برای رشد فراهم می‌آورند.',
        'نمونه‌اولیه‌های تعاملی مفاهیم را قبل از توسعه اعتبارسنجی می‌کنند.',
        'تصمیمات مبتنی بر داده معیارهای عملکرد کلی را بهبود می‌بخشند.',
        'طراحی قابل دسترس تجربه‌های کاربری فراگیر را تضمین می‌کند.',
        'روش‌های پایدار ارزش تجاری بلندمدت ایجاد می‌کنند.',
        'اتوماسیون هوشمند گردش‌کارهای پیچیده را ساده می‌کند.',
        'مسیرهای شخصی‌سازی‌شده نرخ تبدیل را به‌طور قابل‌توجهی افزایش می‌دهند.',
        'آزمایش جامع تحویل محصول قابل اعتماد را تضمین می‌کند.',
        'تکنولوژی پیشرفته نوآوری‌های پیشگامانه را ممکن می‌سازد.',
        'سیستم‌های پیچیده نیازهای مقیاس عظیم را برآورده می‌کنند.',
        'راه‌حل‌های تحول‌آفرین صنایع کامل را متحول می‌سازند.',
        'متدولوژی‌های چابک تحویل زمان‌به‌بازار را تسریع می‌کنند.',
        'بهینه‌سازی عملکرد زمان پاسخ فوق‌سریع را تضمین می‌کند.',
        'زیرساخت ابری پتانسیل گسترش نامحدود ارائه می‌دهد.',
        'ارائه‌های بصری ایده‌های پیچیده را مؤثر منتقل می‌کنند.',
        'موضع‌گیری برند حضور قوی بازار برقرار می‌کند.',
        'فریمورک‌های نسل بعدی فرآیندهای توسعه را ساده می‌کنند.',
        'تیم‌های همکارانه دستاوردهای خلاقانه چشمگیر تولید می‌کنند.',
        'گردش‌کارهای یکپارچه‌سازی اجزای سیستم پراکنده را متصل می‌کنند.',
        'طراحی ناوبری کاربران را از مسیرهای شهودی راهنمایی می‌کند.',
        'پلتفرم‌های دیجیتال تحول تجاری جهانی را ممکن می‌سازند.',
        'مدیریت کیفیت اطمینان از استانداردهای عالی محصول فراهم می‌آورد.',
        'آنالیز داده‌ها بینش‌های ارزشمند برای تصمیم‌گیری ارائه می‌دهد.',
        'رابط‌کاربری بصری تعامل طبیعی و لذت‌بخش ایجاد می‌کند.',
        'امنیت سایبری محافظت جامع از اطلاعات حساس تضمین می‌کند.',
        'پردازش ابری منابع نامحدود و انعطاف‌پذیری ارائه می‌دهد.',
        'هوش مصنوعی فرآیندهای پیچیده را هوشمند خودکار می‌سازد.',
        'تست کاربری واقعی کیفیت تجربه نهایی را اعتبارسنجی می‌کند.',
        'معماری میکروسرویس سیستم‌های مدولار و قابل نگهداری ایجاد می‌کند.',
        'توسعه متقابل پلتفرم‌ها زمان و هزینه را بهینه می‌سازد.',
        'تحلیل رقابتی موقعیت استراتژیک برند را تقویت می‌کند.',
        'مانیتورینگ مداوم عملکرد سیستم پایداری خدمات را تضمین می‌کند.',
        'رویکرد چابک انطباق سریع با تغییرات بازار را ممکن می‌سازد.',
        'یکپارچه‌سازی API اتصال یکپارچه بین سیستم‌ها برقرار می‌کند.',
        'بهینه‌سازی موتور جستجو دیده‌شدن آنلاین را افزایش می‌دهد.',
        'طراحی تعامل مستقیم جذابیت کاربر را به حداکثر می‌رساند.',
        'مدیریت ورژن کنترل دقیق تغییرات کد را تسهیل می‌کند.',
        'پشتیبان‌گیری خودکار حفاظت مطمئن از داده‌ها فراهم می‌آورد.',
        'تجزیه‌وتحلیل رفتار کاربر الگوهای استفاده مفید کشف می‌کند.',
        'بهبود مستمر فرآیند کیفیت محصول را ارتقا می‌دهد.',
        'طراحی ماژولار انعطاف‌پذیری و قابلیت توسعه ارائه می‌دهد.',
        'اتوماسیون آزمون دقت و سرعت کنترل کیفیت را افزایش می‌دهد.',
        'مدیریت منابع انسانی بهره‌وری تیم را بهینه می‌سازد.'
      ]
  },
  ar: {
    words: ['تصميم', 'إبداعي', 'جميل', 'حديث', 'أنيق', 'مبتكر', 'احترافي', 'رائع', 'ممتاز', 'فريد', 'استثنائي', 'لامع', 'جذاب', 'ملهم', 'متقدم', 'عملي', 'فعال', 'قوي', 'متميز', 'مثالي', 'دقيق', 'بسيط', 'كفوء', 'مناسب', 'مثالي', 'فني', 'متخصص', 'عالي', 'مميز'],
    adjectives: ['جميل', 'حديث', 'أنيق', 'إبداعي', 'مبتكر', 'احترافي', 'رائع', 'ممتاز', 'فريد', 'استثنائي', 'لامع', 'جذاب', 'ملهم', 'متقدم', 'عملي', 'فعال', 'قوي'],
    nouns: ['تصميم', 'مشروع', 'موقع', 'تطبيق', 'واجهة', 'تجربة', 'حل', 'منتج', 'خدمة', 'منصة', 'نظام', 'إطار', 'تقنية', 'ابتكار', 'إبداع', 'تطوير', 'عرض', 'محفظة', 'علامة', 'هوية'],
    verbs: ['إنشاء', 'تصميم', 'تطوير', 'بناء', 'ابتكار', 'إلهام', 'تحويل', 'تحسين', 'تطوير', 'تقديم', 'تحقيق', 'إنجاز', 'تنفيذ', 'إنتاج', 'توليد', 'إنشاء', 'صيانة'],
    starter: 'التصميم الجميل ينشئ تجارب رائعة',
    isRTL: true,
    samplePhrases: [
      'تجربة مستخدم استثنائية',
      'حل تصميم مبتكر',
      'منصة رقمية إبداعية',
      'تطبيق ويب حديث',
      'واجهة مستخدم أنيقة',
      'عملية تطوير احترافية',
      'عرض بصري رائع',
      'إنجاز إبداعي ملحوظ'
    ],
    sentences: [
      'التصميم الجميل ينشئ تجارب رائعة لكل المستخدمين.',
      'التكنولوجيا الحديثة تحول طريقة بناء المنتجات الرقمية.',
      'الحلول الإبداعية تنبثق من عمليات التصميم التعاونية.',
      'المنصات المبتكرة تقدم قيمة استثنائية للعملاء.',
      'التطوير المهني يضمن معمارية نظام قابلة للتوسع.',
      'الواجهات الأنيقة تعزز تفاعل ورضا المستخدمين.',
      'التصميم المتجاوب يتكيف بسلاسة عبر جميع الأجهزة.',
      'التخطيط الاستراتيجي يقود إطلاق المنتجات الناجحة.',
      'المحتوى الديناميكي يحافظ على تفاعل الجماهير وإعلامهم.',
      'الأطر القوية توفر أساساً للنمو.',
      'النماذج الأولية التفاعلية تتحقق من المفاهيم قبل التطوير.',
      'القرارات المدفوعة بالبيانات تحسن مقاييس الأداء الشاملة.',
      'التصميم المتاح يضمن تجارب مستخدم شاملة.',
      'الممارسات المستدامة تخلق قيمة تجارية طويلة المدى.',
      'الأتمتة الذكية تبسط سير العمل المعقد.',
      'الرحلات الشخصية تزيد معدلات التحويل بشكل كبير.',
      'الاختبار الشامل يضمن تسليم منتج موثوق.',
      'التكنولوجيا المتطورة تمكن الابتكارات الرائدة.',
      'الأنظمة المتطورة تتعامل مع متطلبات النطاق الضخم.',
      'الحلول التحويلية تحدث ثورة في صناعات كاملة.'
    ]
  },
  es: {
    words: ['diseño', 'creativo', 'hermoso', 'moderno', 'elegante', 'innovador', 'profesional', 'impresionante', 'increíble', 'fantástico', 'excelente', 'perfecto', 'maravilloso', 'brillante', 'excepcional', 'magnífico', 'espléndido', 'encantador', 'cautivador', 'poderoso'],
    adjectives: ['hermoso', 'moderno', 'elegante', 'creativo', 'innovador', 'profesional', 'impresionante', 'increíble', 'fantástico', 'excelente', 'perfecto', 'maravilloso', 'brillante', 'excepcional'],
    nouns: ['diseño', 'proyecto', 'sitio web', 'aplicación', 'interfaz', 'experiencia', 'solución', 'producto', 'servicio', 'plataforma', 'sistema', 'framework', 'tecnología', 'innovación', 'creatividad', 'desarrollo', 'presentación', 'portafolio'],
    verbs: ['crear', 'diseñar', 'desarrollar', 'construir', 'innovar', 'inspirar', 'transformar', 'mejorar', 'optimizar', 'entregar', 'lograr', 'realizar', 'implementar', 'ejecutar', 'producir', 'generar'],
    starter: 'El hermoso diseño crea experiencias increíbles',
    isRTL: false,
    samplePhrases: [
      'experiencia de usuario excepcional',
      'solución de diseño innovadora',
      'plataforma digital creativa',
      'aplicación web moderna',
      'interfaz de usuario elegante',
      'proceso de desarrollo profesional',
      'presentación visual impresionante',
      'logro creativo notable'
    ],
    sentences: [
      'El hermoso diseño crea experiencias increíbles para cada usuario.',
      'La tecnología moderna transforma cómo construimos productos digitales.',
      'Las soluciones creativas emergen de procesos de diseño colaborativos.',
      'Las plataformas innovadoras entregan valor excepcional a los clientes.',
      'El desarrollo profesional asegura arquitectura de sistema escalable.',
      'Las interfaces elegantes mejoran el compromiso y satisfacción del usuario.',
      'El diseño responsivo se adapta perfectamente en todos los dispositivos.',
      'La planificación estratégica impulsa lanzamientos exitosos de productos.',
      'El contenido dinámico mantiene a las audiencias comprometidas e informadas.',
      'Los marcos robustos proporcionan fundación para el crecimiento.',
      'Los prototipos interactivos validan conceptos antes del desarrollo.',
      'Las decisiones basadas en datos mejoran las métricas de rendimiento general.',
      'El diseño accesible asegura experiencias de usuario inclusivas.',
      'Las prácticas sostenibles crean valor comercial a largo plazo.',
      'La automatización inteligente optimiza flujos de trabajo complejos.',
      'Los viajes personalizados aumentan significativamente las tasas de conversión.',
      'Las pruebas exhaustivas garantizan entrega confiable de productos.',
      'La tecnología de vanguardia permite innovaciones revolucionarias.',
      'Los sistemas sofisticados manejan requisitos de escala masiva.',
      'Las soluciones transformadoras revolucionan industrias enteras.'
    ]
  },
  fr: {
    words: ['design', 'créatif', 'beau', 'moderne', 'élégant', 'innovant', 'professionnel', 'époustouflant', 'incroyable', 'fantastique', 'excellent', 'parfait', 'merveilleux', 'brillant', 'exceptionnel', 'magnifique', 'splendide', 'charmant', 'captivant', 'puissant'],
    adjectives: ['beau', 'moderne', 'élégant', 'créatif', 'innovant', 'professionnel', 'époustouflant', 'incroyable', 'fantastique', 'excellent', 'parfait', 'merveilleux', 'brillant', 'exceptionnel'],
    nouns: ['design', 'projet', 'site web', 'application', 'interface', 'expérience', 'solution', 'produit', 'service', 'plateforme', 'système', 'framework', 'technologie', 'innovation', 'créativité', 'développement', 'présentation', 'portfolio'],
    verbs: ['créer', 'concevoir', 'développer', 'construire', 'innover', 'inspirer', 'transformer', 'améliorer', 'optimiser', 'livrer', 'atteindre', 'accomplir', 'réaliser', 'implémenter', 'exécuter', 'produire'],
    starter: 'Le beau design crée des expériences incroyables',
    isRTL: false,
    samplePhrases: [
      'expérience utilisateur exceptionnelle',
      'solution de design innovante',
      'plateforme numérique créative',
      'application web moderne',
      'interface utilisateur élégante',
      'processus de développement professionnel',
      'présentation visuelle époustouflante',
      'réalisation créative remarquable'
    ],
    sentences: [
      "Le beau design crée des expériences incroyables pour chaque utilisateur.",
      "La technologie moderne transforme notre façon de construire les produits numériques.",
      "Les solutions créatives émergent des processus de conception collaborative.",
      "Les plateformes innovantes offrent une valeur exceptionnelle aux clients.",
      "Le développement professionnel assure une architecture système évolutive.",
      "Les interfaces élégantes améliorent l'engagement et la satisfaction des utilisateurs.",
      "Le design réactif s'adapte parfaitement à tous les appareils.",
      "La planification stratégique guide les lancements de produits réussis.",
      "Le contenu dynamique maintient les audiences engagées et informées.",
      "Les frameworks robustes fournissent une fondation pour la croissance.",
      "Les prototypes interactifs valident les concepts avant le développement.",
      "Les décisions basées sur les données améliorent les métriques de performance.",
      "Le design accessible garantit des expériences utilisateur inclusives.",
      "Les pratiques durables créent de la valeur commerciale à long terme.",
      "L'automatisation intelligente rationalise les flux de travail complexes.",
      "Les parcours personnalisés augmentent significativement les taux de conversion.",
      "Les tests complets garantissent une livraison de produit fiable.",
      "La technologie de pointe permet des innovations révolutionnaires.",
      "Les systèmes sophistiqués gèrent les exigences d'échelle massive.",
      "Les solutions transformatrices révolutionnent des industries entières."
    ]
  },
  de: {
    words: ['Design', 'kreativ', 'schön', 'modern', 'elegant', 'innovativ', 'professionell', 'beeindruckend', 'unglaublich', 'fantastisch', 'ausgezeichnet', 'perfekt', 'wunderbar', 'brillant', 'außergewöhnlich', 'großartig', 'prächtig', 'charmant', 'fesselnd', 'kraftvoll'],
    adjectives: ['schön', 'modern', 'elegant', 'kreativ', 'innovativ', 'professionell', 'beeindruckend', 'unglaublich', 'fantastisch', 'ausgezeichnet', 'perfekt', 'wunderbar', 'brillant', 'außergewöhnlich'],
    nouns: ['Design', 'Projekt', 'Website', 'Anwendung', 'Benutzeroberfläche', 'Erfahrung', 'Lösung', 'Produkt', 'Service', 'Plattform', 'System', 'Framework', 'Technologie', 'Innovation', 'Kreativität', 'Entwicklung', 'Präsentation', 'Portfolio'],
    verbs: ['erstellen', 'entwerfen', 'entwickeln', 'bauen', 'innovieren', 'inspirieren', 'transformieren', 'verbessern', 'optimieren', 'liefern', 'erreichen', 'vollbringen', 'realisieren', 'implementieren', 'ausführen', 'produzieren'],
    starter: 'Schönes Design schafft unglaubliche Erfahrungen',
    isRTL: false,
    samplePhrases: [
      'außergewöhnliche Benutzererfahrung',
      'innovative Designlösung',
      'kreative digitale Plattform',
      'moderne Webanwendung',
      'elegante Benutzeroberfläche',
      'professioneller Entwicklungsprozess',
      'beeindruckende visuelle Präsentation',
      'bemerkenswerte kreative Leistung'
    ],
    sentences: [
      'Schönes Design schafft unglaubliche Erfahrungen für jeden Benutzer.',
      'Moderne Technologie transformiert wie wir digitale Produkte erstellen.',
      'Kreative Lösungen entstehen aus kollaborativen Designprozessen.',
      'Innovative Plattformen liefern außergewöhnlichen Wert für Kunden.',
      'Professionelle Entwicklung gewährleistet skalierbare Systemarchitektur.',
      'Elegante Schnittstellen verbessern Benutzerengagement und Zufriedenheit.',
      'Responsives Design passt sich nahtlos an alle Geräte an.',
      'Strategische Planung treibt erfolgreiche Produkteinführungen voran.',
      'Dynamische Inhalte halten Zielgruppen engagiert und informiert.',
      'Robuste Frameworks bieten eine Grundlage für Wachstum.',
      'Interaktive Prototypen validieren Konzepte vor der Entwicklung.',
      'Datengetriebene Entscheidungen verbessern die Gesamtleistungsmetriken.',
      'Barrierefreies Design gewährleistet inklusive Benutzererfahrungen.',
      'Nachhaltige Praktiken schaffen langfristigen Geschäftswert.',
      'Intelligente Automatisierung rationalisiert komplexe Arbeitsabläufe.',
      'Personalisierte Reisen steigern Konversionsraten erheblich.',
      'Umfassende Tests gewährleisten zuverlässige Produktlieferung.',
      'Spitzentechnologie ermöglicht bahnbrechende Innovationen.',
      'Hochentwickelte Systeme bewältigen massive Skalierungsanforderungen.',
      'Transformative Lösungen revolutionieren ganze Branchen.'
    ]
  },
  ru: {
    words: ['дизайн', 'креативный', 'красивый', 'современный', 'элегантный', 'инновационный', 'профессиональный', 'потрясающий', 'невероятный', 'фантастический', 'отличный', 'идеальный', 'замечательный', 'блестящий', 'исключительный', 'великолепный', 'прекрасный', 'очаровательный', 'захватывающий', 'мощный'],
    adjectives: ['красивый', 'современный', 'элегантный', 'креативный', 'инновационный', 'профессиональный', 'потрясающий', 'невероятный', 'фантастический', 'отличный', 'идеальный', 'замечательный', 'блестящий'],
    nouns: ['дизайн', 'проект', 'веб-сайт', 'приложение', 'интерфейс', 'опыт', 'решение', 'продукт', 'сервис', 'платформа', 'система', 'фреймворк', 'технология', 'инновация', 'креативность', 'разработка', 'презентация', 'портфолио'],
    verbs: ['создавать', 'проектировать', 'разрабатывать', 'строить', 'внедрять', 'вдохновлять', 'трансформировать', 'улучшать', 'оптимизировать', 'доставлять', 'достигать', 'выполнять', 'реализовывать', 'внедрять', 'производить'],
    starter: 'Красивый дизайн создает невероятные впечатления',
    isRTL: false,
    samplePhrases: [
      'исключительный пользовательский опыт',
      'инновационное дизайнерское решение',
      'креативная цифровая платформа',
      'современное веб-приложение',
      'элегантный пользовательский интерфейс',
      'профессиональный процесс разработки',
      'потрясающая визуальная презентация',
      'замечательное творческое достижение'
    ],
    sentences: [
      'Красивый дизайн создает невероятные впечатления для каждого пользователя.',
      'Современные технологии трансформируют способы создания цифровых продуктов.',
      'Креативные решения возникают из совместных процессов проектирования.',
      'Инновационные платформы предоставляют исключительную ценность клиентам.',
      'Профессиональная разработка обеспечивает масштабируемую архитектуру системы.',
      'Элегантные интерфейсы улучшают вовлеченность и удовлетворенность пользователей.',
      'Адаптивный дизайн идеально приспосабливается ко всем устройствам.',
      'Стратегическое планирование обеспечивает успешные запуски продуктов.',
      'Динамический контент поддерживает аудиторию в курсе и вовлеченности.',
      'Надежные фреймворки обеспечивают основу для роста.',
      'Интерактивные прототипы подтверждают концепции до разработки.',
      'Решения на основе данных улучшают общие показатели производительности.',
      'Доступный дизайн обеспечивает инклюзивный пользовательский опыт.',
      'Устойчивые практики создают долгосрочную бизнес-ценность.',
      'Интеллектуальная автоматизация оптимизирует сложные рабочие процессы.',
      'Персонализированные пути значительно увеличивают коэффициенты конверсии.',
      'Комплексное тестирование гарантирует надежную поставку продукта.',
      'Передовые технологии обеспечивают прорывные инновации.',
      'Сложные системы справляются с требованиями масштабирования.',
      'Трансформационные решения революционизируют целые отрасли.'
    ]
  },
  zh: {
    words: ['设计', '创意', '美丽', '现代', '优雅', '创新', '专业', '令人惊叹', '不可思议', '奇妙', '优秀', '完美', '精彩', '出色', '卓越', '杰出', '辉煌', '迷人', '引人入胜', '强大'],
    adjectives: ['美丽', '现代', '优雅', '创意', '创新', '专业', '令人惊叹', '不可思议', '奇妙', '优秀', '完美', '精彩', '出色', '卓越'],
    nouns: ['设计', '项目', '网站', '应用程序', '界面', '体验', '解决方案', '产品', '服务', '平台', '系统', '框架', '技术', '创新', '创意', '开发', '演示', '作品集'],
    verbs: ['创建', '设计', '开发', '构建', '创新', '启发', '转换', '改进', '优化', '交付', '实现', '完成', '实施', '执行', '生产', '生成'],
    starter: '美丽的设计创造不可思议的体验',
    isRTL: false,
    samplePhrases: [
      '卓越的用户体验',
      '创新的设计解决方案',
      '创意数字平台',
      '现代网络应用',
      '优雅的用户界面',
      '专业的开发过程',
      '令人惊叹的视觉呈现',
      '非凡的创意成就'
    ],
    sentences: [
      '美丽的设计为每个用户创造不可思议的体验。',
      '现代技术改变了我们构建数字产品的方式。',
      '创意解决方案来自于协作设计过程。',
      '创新平台为客户提供卓越价值。',
      '专业开发确保可扩展的系统架构。',
      '优雅的界面提升用户参与度和满意度。',
      '响应式设计完美适配所有设备。',
      '战略规划推动成功的产品发布。',
      '动态内容保持观众的参与和信息获取。',
      '强大的框架为增长提供基础。',
      '交互式原型在开发前验证概念。',
      '数据驱动的决策改善整体性能指标。',
      '无障碍设计确保包容性用户体验。',
      '可持续实践创造长期商业价值。',
      '智能自动化简化复杂工作流程。',
      '个性化旅程显著提高转化率。',
      '全面测试确保可靠的产品交付。',
      '尖端技术实现突破性创新。',
      '复杂系统处理大规模需求。',
      '变革性解决方案彻底改变整个行业。'
    ]
  }
};

// Helper function to get random item from array
function getRandomItem(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate meaningful words combinations
function generateMeaningfulWords(language: string, count: number, startWithLorem: boolean): string {
  const lang = loremContent[language];
  if (!lang) return '';
  
  const words: string[] = [];
  
  if (startWithLorem) {
    words.push(lang.starter);
    count = Math.max(1, count - 1); // Ensure at least 1 more word is generated
  }
  
  // Generate meaningful phrases instead of random words
  for (let i = 0; i < count; i++) {
    if (Math.random() > 0.4 && lang.samplePhrases.length > 0) {
      // Use sample phrases more frequently (they're already meaningful)
      words.push(getRandomItem(lang.samplePhrases));
    } else {
      // Create meaningful combinations
      if (Math.random() > 0.3) {
        const adj = getRandomItem(lang.adjectives);
        const noun = getRandomItem(lang.nouns);
        words.push(`${adj} ${noun}`);
      } else {
        words.push(getRandomItem(lang.words));
      }
    }
  }
  
  return words.join(lang.isRTL ? '، ' : ', ');
}

// Generate meaningful sentences
function generateMeaningfulSentences(language: string, count: number, startWithLorem: boolean): string {
  const lang = loremContent[language];
  if (!lang) return '';
  
  const sentences: string[] = [];
  
  for (let i = 0; i < count; i++) {
    let sentence = '';
    
    if (i === 0 && startWithLorem) {
      sentence = lang.starter;
      // Ensure sentence ends with period
      if (!sentence.endsWith('.') && !sentence.endsWith('。') && !sentence.endsWith('؟')) {
        sentence += language === 'zh' ? '。' : '.';
      }
    } else {
      // Use predefined sentences if available (much better grammar and structure)
      if (lang.sentences && lang.sentences.length > 0) {
        sentence = getRandomItem(lang.sentences);
      } else {
        // Fallback to sample phrases for languages without predefined sentences
        if (lang.samplePhrases.length > 0) {
          sentence = getRandomItem(lang.samplePhrases);
          // Ensure sentence ends with period
          if (!sentence.endsWith('.') && !sentence.endsWith('。') && !sentence.endsWith('؟')) {
            sentence += language === 'zh' ? '。' : '.';
          }
        } else {
          // Last resort: create simple combination
          const adj = getRandomItem(lang.adjectives);
          const noun = getRandomItem(lang.nouns);
          sentence = `${adj} ${noun}.`;
        }
      }
    }
    
    sentences.push(sentence);
  }
  
  return sentences.join(' ');
}

// Generate meaningful paragraphs
function generateMeaningfulParagraphs(language: string, count: number, startWithLorem: boolean): string {
  const lang = loremContent[language];
  if (!lang) return '';
  
  const paragraphs: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const sentences: string[] = [];
    const sentencesInParagraph = Math.floor(Math.random() * 3) + 3; // 3-6 sentences per paragraph
    
    // First sentence of first paragraph can be the starter
    if (i === 0 && startWithLorem) {
      sentences.push(lang.starter);
    }
    
    // Fill the rest of the paragraph with meaningful content
    const remaining = sentencesInParagraph - sentences.length;
    for (let j = 0; j < remaining; j++) {
      let sentence = '';
      
      // Use predefined sentences if available (much better structure)
      if (lang.sentences && lang.sentences.length > 0) {
        sentence = getRandomItem(lang.sentences);
      } else {
        // Fallback to sample phrases for languages without predefined sentences
        if (lang.samplePhrases.length > 0) {
          sentence = getRandomItem(lang.samplePhrases);
          // Ensure sentence ends with period
          if (!sentence.endsWith('.') && !sentence.endsWith('。') && !sentence.endsWith('؟')) {
            sentence += language === 'zh' ? '。' : '.';
          }
        } else {
          // Last resort: create simple combination
          const adj = getRandomItem(lang.adjectives);
          const noun = getRandomItem(lang.nouns);
          sentence = `${adj} ${noun}.`;
        }
      }
      
      sentences.push(sentence);
    }
    
    paragraphs.push(sentences.join(' '));
  }
  
  return paragraphs.join('\n\n');
}

// Generate Lorem Ipsum text
function generateLoremIpsum(
  language: string, 
  generationType: 'words' | 'sentences' | 'paragraphs' | 'characters',
  count: number,
  startWithLorem: boolean
): string {
  const lang = loremContent[language];
  if (!lang) return '';

  let result = '';

  switch (generationType) {
    case 'words':
      result = generateMeaningfulWords(language, count, startWithLorem);
      break;
    case 'sentences':
      result = generateMeaningfulSentences(language, count, startWithLorem);
      break;
    case 'paragraphs':
      result = generateMeaningfulParagraphs(language, count, startWithLorem);
      break;
    case 'characters':
      // For characters, generate meaningful text and trim to exact count
      let tempText = generateMeaningfulSentences(language, 10, startWithLorem);
      
      // If we need more characters and the generated text is shorter, generate more
      while (tempText.length < count) {
        tempText += ' ' + generateMeaningfulSentences(language, 5, false);
      }
      
      // If starting with lorem and the result would cut off the starter, adjust
      if (startWithLorem) {
        const starter = loremContent[language]?.starter;
        if (starter && count < starter.length) {
          // If count is less than starter length, return truncated starter with ellipsis
          result = starter.substring(0, Math.max(10, count - 3)) + '...';
        } else {
          // Normal trimming
          result = tempText.substring(0, count).trim();
        }
      } else {
        result = tempText.substring(0, count).trim();
      }
      break;
  }

  return result;
}

// Insert text into Figma
async function insertText(text: string) {
  try {
    // Check if there's a text selection
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      // No selection, create new text node
      const textNode = figma.createText();
      
      // Load font before setting characters
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      
      // Set the text
      textNode.characters = text;
      
      // Position in center of viewport
      textNode.x = figma.viewport.center.x - textNode.width / 2;
      textNode.y = figma.viewport.center.y - textNode.height / 2;
      
      // Add to page and select it
      figma.currentPage.appendChild(textNode);
      figma.currentPage.selection = [textNode];
      figma.viewport.scrollAndZoomIntoView([textNode]);
      
    } else {
      // Process each selected item
      let textInserted = false;
      
      for (const node of selection) {
        if (node.type === 'TEXT') {
          // Load the font used in this text node
          const fonts = node.getRangeAllFontNames(0, node.characters.length);
          for (const font of fonts) {
            await figma.loadFontAsync(font);
          }
          
          // Replace the text
          node.characters = text;
          textInserted = true;
        }
      }
      
      if (!textInserted) {
        // No text nodes selected, create new one
        const textNode = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        textNode.characters = text;
        
        // Position near first selected item
        const firstSelected = selection[0];
        textNode.x = firstSelected.x;
        textNode.y = firstSelected.y + firstSelected.height + 20;
        
        figma.currentPage.appendChild(textNode);
        figma.currentPage.selection = [textNode];
        figma.viewport.scrollAndZoomIntoView([textNode]);
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error inserting text:', error);
    return false;
  }
}

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    switch (msg.type) {
      case 'generate-and-insert':
        const generatedText = generateLoremIpsum(
          msg.language,
          msg.generationType,
          msg.count,
          msg.startWithLorem
        );
        
        if (!generatedText) {
          figma.ui.postMessage({
            type: 'error',
            message: 'Failed to generate text for the selected language'
          });
          return;
        }
        
        const success = await insertText(generatedText);
        
        if (success) {
          figma.ui.postMessage({
            type: 'success',
            message: 'Text inserted successfully!'
          });
        } else {
          figma.ui.postMessage({
            type: 'error',
            message: 'Failed to insert text'
          });
        }
        break;
        
      default:
        console.warn('Unknown message type:', msg.type);
    }
  } catch (error) {
    console.error('Error in plugin:', error);
    figma.ui.postMessage({
      type: 'error',
      message: 'An unexpected error occurred'
    });
  }
}; 