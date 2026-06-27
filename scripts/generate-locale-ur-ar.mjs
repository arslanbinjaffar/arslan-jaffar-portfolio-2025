import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, "..", "src", "locales");

function readEn(namespace) {
  return JSON.parse(
    fs.readFileSync(path.join(localesDir, "en", `${namespace}.json`), "utf8")
  );
}

function writeLocale(locale, namespace, data) {
  const dir = path.join(localesDir, locale);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `${namespace}.json`),
    JSON.stringify(data, null, 2) + "\n"
  );
}

function translateItem(item, locale) {
  const key = item.title;
  const map = locale === "ur" ? itemTranslationsUr : itemTranslationsAr;
  if (map[key]) {
    return { ...item, ...map[key] };
  }
  return item;
}

const itemTranslationsUr = {
  "VoxtAsia Admin panel": { title: "VoxtAsia ایڈمن پینل", role: "بیک اینڈ انجینئر", impact: "ریئل ٹائم آڈیو اسٹریمنگ کے لیے ایونٹ ڈرiven مائیکرو سروسز", description: "VoxtAsia Admin ہمارے آڈیو اسٹریمنگ پلیٹ فارم کا مرکزی ڈیش بورڈ ہے۔" },
  "VoxtAsia — Mobile App": { title: "VoxtAsia — موبائل ایپ", role: "فل اسٹیک انجینئر", impact: "آف لائن فرسٹ آڈیو پلے بیک کے ساتھ کراس پلیٹ فارم موبائل ایپ", description: "VoxtAsia Mobile مکمل آڈیو اسٹریمنگ تجربہ آپ کے اسmartphone پر لاتا ہے۔" },
  "VoxtAsia — Web Platform": { title: "VoxtAsia — ویب پلیٹ فارم", role: "فل اسٹیک انجینئر", impact: "ریئل ٹائم مواد کی ترسیل کے ساتھ ریسپانسیو ویب اسٹریمنگ پلیٹ فارم", description: "VoxtAsia Web آڈیو اسٹریمنگ پلیٹ فارم کا فرنٹ اینڈ ہے۔" },
  "Enterprise AI Assistant Platform": { title: "انٹرپرائز AI اسسٹنٹ پلیٹ فارم", role: "AI سسٹمز انجینئر", impact: "RAG، ٹول کالنگ، اور MCP انٹیگریشنز کے ساتھ ملٹی ایجنٹ انٹرپرائز اسسٹنٹ", description: "PixelPK / Beyond Technologies میں انٹرپرائز AI اسسٹنٹ پلیٹ فارم — ملٹی ایجنٹ آرکسٹریشن اور RAG کے ساتھ پروڈکشن AI سسٹم۔" },
  "Gigbase — Freelancer Platform": { title: "Gigbase — فری لانسر پلیٹ فارم", role: "فل اسٹیک انجینئر", impact: "10+ الگ ٹولز کی جگہ AI سے مدد یافتہ فری لانسر ورک اسپیس", description: "Gigbase ڈیجیٹل فری لancers کے لیے آل ان ون پلیٹ فارم ہے۔" },
  "AML Watcher — Compliance Platform": { title: "AML Watcher — کمپلائنس پلیٹ فارم", role: "MERN اسٹیک ڈevelper", impact: "مالی لین دین کے потокوں میں ریئل ٹائم AML مانیٹرنگ", description: "AML Watcher ایپلیکیشن پر MERN ڈevelper کے طور پر کام کیا۔" },
  "AI Fleet Management ERP": { title: "AI فلیٹ مینجمنٹ ERP", role: "لیڈ بیک اینڈ انجینئر", impact: "فلیٹ، HR، فنانس، اور گیراج آپریشنز کا انٹرپرائز ERP", description: "فلیٹ ERP سسٹم — مکمل فلیٹ لائف سائیکل، گیراج، HR، اور فنانس مینجمنٹ۔" },
  "AIFA Services — Company Website": { title: "AIFA Services — کمپنی ویب سائٹ", role: "فرنٹ اینڈ ڈevelper", impact: "ملٹی سروس FM کمپنی کے لیے کنورژن فوکسڈ کارپوریٹ سائٹ", description: "ہماری کمپنی لاگت مؤثر سافٹ اور ہارڈ سروسز فراہم کرتی ہے۔" },
  "FeedDrop — AI Video Generation": { title: "FeedDrop — AI ویڈیو جنریشن", role: "فل اسٹیک انجینئر", impact: "2 منٹ سے کم میں شارٹ فارم سوشل ویڈیوز بنانے والا AI پائپ لائن", description: "FeedDrop AI سے چلنے والا پلیٹ فارم ہے جو TikTok اور Instagram ریلز جیسی ویڈیوز بناتا ہے۔" },
  "PATCO — Software Development Co.": { title: "PATCO — سافٹ ویئر ڈevelpment کمپنی", role: "فرنٹ اینڈ ڈevelper", impact: "بین الاقوامی 50+ ٹیم ایجنسی کے لیے اعتماد والی کارپوریٹ سائٹ", description: "PATCO آذربائیجان میں AI پر مبنی سافٹ ویئر ڈevelpment کمپنی ہے۔" },
  "Aifa ERP System": { title: "Aifa ERP سسٹم", role: "لیڈ فل اسٹیک انجینئر", impact: "دستی انتظامی کام ~60% کم کرنے والا end-to-end ERP آٹomation", description: "جامع ERP سسٹم جو تمام بنیادی کاروباری افعال کو ایک پلیٹ فارم میں یکجا کرتا ہے۔" },
  "Pakistan Lawbot — AI Legal Platform": { title: "Pakistan Lawbot — AI قانونی پلیٹ فارم", role: "فل اسٹیک انجینئر", impact: "پاکستان کا پہلا AI قانونی تحقیق، ڈrafting اور وکیل marketplace — 15,000+ صارفین", description: "Pakistan Lawbot PixelPK Technologies کا پروڈکٹ ہے — پاکستان کا پہلا AI قانونی پلیٹ فارم۔" },
  "AITube — AI Video Platform": { title: "AITube — AI ویڈیو پلیٹ فارم", role: "فل اسٹیک انجینئر", impact: "ٹیکسٹ سے ویڈیو تخلیق، دریافت، اور شیئرنگ کے لیے AI ویڈیو پلیٹ فارم", description: "AITube PixelPK Technologies کا AI سے چلنے والا ویڈیو پلیٹ فارم ہے۔" },
  "QuickLegals Website & User Portal": { title: "QuickLegals ویب سائٹ اور یوزر پورٹل", role: "فل اسٹیک انجینئر", impact: "وکیل کے بغیر UX کے ساتھ قانونی دستاویز جنریشن پلیٹ فارم", description: "QuickLegals آن لائن پلیٹ فارم ہے جو منٹوں میں قانونی دستاویزات بنانے میں مدد کرتا ہے۔" },
  "QuickLegals Admin Portal": { title: "QuickLegals ایڈمن پورٹل", description: "QuickLegals ایڈمن پورٹل صارفین، دستاویزات، اور پلیٹ فارم سیٹنگز کا انتظام کرتا ہے۔" },
  "Islamiyya — Shari'ah-Compliant Wills": { title: "Islamiyya — شریعت کے مطابق وصیت نامے", role: "فل اسٹیک انjینئر", impact: "سکاٹ لینڈ کی پہلی شریعت کے مطابق وصیت نامہ سروس", description: "Islamiyya سکاٹ لینڈ کی پہلی شریعت کے مطابق وصیت نامہ سروس ہے۔" },
  "Islamiyya Admin Panel": { title: "Islamiyya ایڈمن پینل", description: "Islamiyya ایڈمن پینل پلیٹ فارم کے آپریشنز پر انتظامی کنٹرول فراہم کرتا ہے۔" },
  "EventBuizz Mobile App": { title: "EventBuizz موبائل ایپ", description: "React.js، Material-UI، اور Firebase کے ساتھ بنایا گیا چیٹ اور ورک اسپیس۔" },
  "Facebook Clone": { title: "Facebook Clone", description: "React.js کے ساتھ بنایا گیا سوشل میڈیا پلیٹ فارم۔" },
  "Martial Arts": { title: "Martial Arts", description: "مارشل آرٹس ٹrainers اور شوقین افراد کے لیے ڈائnamic پلیٹ فارم۔" },
  "Hasty App": { title: "Hasty App", description: "ریئل اسٹیٹ پروجیکٹس کو منظم کرنے کے لیے جامع پلیٹ فارم۔" },
  "Ninja Training App": { title: "Ninja Training App", description: "نینجا کی طرح ٹrainنگ کے لیے ڈائnamic پلیٹ فارم۔" },
  "Eventcenter Web-app": { title: "Eventcenter ویب ایپ", role: "React.js ڈevelper", impact: "Eventbuizz میں ریئل ٹائم ایونٹ scheduling اور check-in سسٹم", description: "Eventcenter پروجیکٹ پر MERN ڈevelper کے طور پر کام کیا۔" },
  "Islamiya Backend": { title: "Islamiya Backend", description: "Islamiya پلیٹ فارم کے لیے solo backend پروجیکٹ۔" },
  "Fleet Management Backend": { title: "Fleet Management Backend", description: "Fleet Management سسٹم کے لیے solo backend پروجیکٹ۔" },
  "Quick Legals Backend": { title: "Quick Legals Backend", description: "Quick Legals پلیٹ فارم کے لیے solo backend پروجیکٹ۔" },
  "Aifa ERP Backend": { title: "Aifa ERP Backend", description: "Aifa ERP سسٹم کے لیے solo backend پروجیکٹ۔" },
};

const itemTranslationsAr = {
  "VoxtAsia Admin panel": { title: "لوحة تحكم VoxtAsia", role: "مهندس Backend", impact: "خدمات مصغرة قائمة على الأحداث للبث الصوتي في الوقت الفعلي", description: "VoxtAsia Admin هي لوحة التحكم المركزية لمنصة البث الصوتي." },
  "VoxtAsia — Mobile App": { title: "VoxtAsia — تطبيق الجوال", role: "مهندس Full-Stack", impact: "تطبيق جوال متعدد المنصات مع تشغيل صوتي offline-first", description: "VoxtAsia Mobile يجلب تجربة البث الصوتي الكاملة إلى هاتفك." },
  "VoxtAsia — Web Platform": { title: "VoxtAsia — منصة الويب", role: "مهندس Full-Stack", impact: "منصة بث ويب متجاوبة مع تسليم محتوى في الوقت الفعلي", description: "VoxtAsia Web هو الواجهة الأمامية لمنصة البث الصوتي." },
  "Enterprise AI Assistant Platform": { title: "منصة مساعد AI للمؤسسات", role: "مهندس أنظمة AI", impact: "مساعد مؤسسي متعدد الوكلاء مع RAG واستدعاء الأدوات وتكامل MCP", description: "منصة مساعد AI للمؤسسات في PixelPK / Beyond Technologies." },
  "Gigbase — Freelancer Platform": { title: "Gigbase — منصة Freelancers", role: "مهندس Full-Stack", impact: "مساحة عمل freelancers مدعومة بالAI تحل محل 10+ أدوات", description: "Gigbase هي المنصة الشاملة للfreelancers الرقميين." },
  "AML Watcher — Compliance Platform": { title: "AML Watcher — منصة الامتثال", role: "مطور MERN Stack", impact: "مراقبة AML في الوقت الفعلي عبر تدفقات المعاملات المالية", description: "عملت كمطور MERN على تطبيق AML Watcher." },
  "AI Fleet Management ERP": { title: "ERP إدارة الأسطول AI", role: "مهندس Backend رئيسي", impact: "ERP مؤسسي يغطي الأسطول والموارد البشرية والمالية والجرage", description: "نظام Fleet ERP — إدارة دورة حياة الأسطول والجرage والموارد البشرية والمالية." },
  "AIFA Services — Company Website": { title: "AIFA Services — موقع الشركة", role: "مطور Frontend", impact: "موقع مؤسسي يركز على التحويل لشركة FM متعددة الخدمات", description: "شركتنا تقدم خدمات soft و hard فعالة من حيث التكلفة." },
  "FeedDrop — AI Video Generation": { title: "FeedDrop — توليد فيديو AI", role: "مهندس Full-Stack", impact: "خط أنابيب AI ينشئ فيديوهات اجتماعية قصيرة في أقل من دقيقتين", description: "FeedDrop منصة مدعومة بالAI لإنشاء فيديوهات مثل TikTok و Instagram reels." },
  "PATCO — Software Development Co.": { title: "PATCO — شركة تطوير البرمجيات", role: "مطور Frontend", impact: "موقع مؤسسي موثوق لوكالة دولية بفريق 50+", description: "PATCO شركة تطوير برمجيات قائمة على AI في باكو، أذربيجان." },
  "Aifa ERP System": { title: "نظام Aifa ERP", role: "مهندس Full-Stack رئيسي", impact: "أتمتة ERP end-to-end تقلل الإدارة اليدوية ~60%", description: "نظام ERP شامل يدمج جميع وظائف الأعمال الأساسية." },
  "Pakistan Lawbot — AI Legal Platform": { title: "Pakistan Lawbot — منصة قانونية AI", role: "مهندس Full-Stack", impact: "أول منصة AI قانونية في باكستان — 15,000+ مستخدم", description: "Pakistan Lawbot منتج PixelPK Technologies — أول منصة AI قانونية في باكستان." },
  "AITube — AI Video Platform": { title: "AITube — منصة فيديو AI", role: "مهندس Full-Stack", impact: "منصة فيديو AI لإنشاء واكتشاف ومشاركة المحتوى", description: "AITube منصة فيديو مدعومة بالAI من PixelPK Technologies." },
  "QuickLegals Website & User Portal": { title: "QuickLegals موقع وبورتال المستخدم", role: "مهندس Full-Stack", impact: "منصة توليد مستندات قانونية بدون محامٍ", description: "QuickLegals منصة إلكترونية لإنشاء مستندات قانونية في دقائق." },
  "QuickLegals Admin Portal": { title: "QuickLegals بورتال الإدارة", description: "بورتال إدارة QuickLegals لإدارة المستخدمين والمستندات والإعدادات." },
  "Islamiyya — Shari'ah-Compliant Wills": { title: "Islamiyya — وصايا متوافقة مع الشريعة", role: "مهندس Full-Stack", impact: "أول خدمة كتابة وصايا متوافقة مع الشريعة في اسcotland", description: "Islamiyya أول خدمة كتابة وصايا متوافقة مع الشريعة في اسcotland." },
  "Islamiyya Admin Panel": { title: "Islamiyya لوحة الإدارة", description: "لوحة إدارة Islamiyya للتحكم في عمليات المنصة." },
  "EventBuizz Mobile App": { title: "EventBuizz تطبيق الجوال", description: "غرفة دردشة مبنية بـ React.js و Material-UI و Firebase." },
  "Facebook Clone": { title: "Facebook Clone", description: "منصة وسائط اجتماعية مبنية بـ React.js." },
  "Martial Arts": { title: "Martial Arts", description: "منصة ديناميكية لمدربي الفنون القتالية." },
  "Hasty App": { title: "Hasty App", description: "منصة شاملة لإدارة مشاريع العقارات." },
  "Ninja Training App": { title: "Ninja Training App", description: "منصة ديناميكية للتدريب كالنinja." },
  "Eventcenter Web-app": { title: "Eventcenter تطبيق الويب", role: "مطور React.js", impact: "نظام جدولة الأحداث وتسجيل الحضور في Eventbuizz", description: "عملت كمطور MERN على مشروع Eventcenter." },
  "Islamiya Backend": { title: "Islamiya Backend", description: "مشروع backend منفرد لمنصة Islamiya." },
  "Fleet Management Backend": { title: "Fleet Management Backend", description: "مشروع backend منفرد لنظام Fleet Management." },
  "Quick Legals Backend": { title: "Quick Legals Backend", description: "مشروع backend منfرد لمنصة Quick Legals." },
  "Aifa ERP Backend": { title: "Aifa ERP Backend", description: "مشروع backend منfرد لنظام Aifa ERP." },
};

const ur = {
  common: {
    nav: { home: "ہوم", about: "میرے بارے میں", projects: "پروجیکٹس", experience: "تجربہ", gallery: "گیلری", blog: "بلاگ", services: "خدمات", contact: "رابطہ", resume: "ریزیومے" },
    footer: {
      tagline: "سینior MERN اور AI انجینئر — scalable ویب پلیٹ فارمز، SaaS پروڈکٹس، اور production AI سسٹمز بناتا ہوں۔",
      quickLinks: "فوری لنکس", contact: "رابطہ", connect: "جڑیں",
      connectText: "ریموٹ freelance، part-time contracts، اور collaboration کے لیے دستیاب۔",
      location: "مقام", availability: "دستیابی", chatWhatsApp: "WhatsApp پر چیٹ کریں",
      privacyPolicy: "رازداری کی پالیسی", termsConditions: "شرائط و ضوابط",
      designedBy: "{{author}} نے ڈیزائن اور تیار کیا", copyright: "کاپی رائٹ © {{year}} {{author}}۔ تمام حقوق محفوظ ہیں۔",
    },
    social: { github: "GitHub", linkedin: "LinkedIn", linkedinMessage: "LinkedIn پر پیغام بھیجیں", twitter: "Twitter", whatsapp: "WhatsApp", viewGithub: "GitHub پر دیکھیں" },
    theme: { switchToLight: "لائٹ موڈ میں تبدیل کریں", switchToDark: "ڈارک موڈ میں تبدیل کریں" },
    language: { label: "زبان", en: "English", ur: "اردو", ar: "العربية" },
    rating: {
      title: "آپ کو میرا پورٹ فolio کیسا لگا؟",
      description: "آپ کی رائے مجھے بہتر کام کرنے اور پروجیکٹس بہتر پیش کرنے میں مدد کرتی ہے۔",
      skip: "چھوڑیں", submit: "درجہ جمع کریں", selectRating: "درجہ منتخب کریں",
      feedback: { "1": "😞 میں بہتری کے لیے آپ کی رائے سننا چاہوں گا!", "2": "😐 براہ کرم بہتری کے لیے رائے دیں۔", "3": "😊 خوشی ہے کہ آپ کو پسند آیا!", "4": "😄 زبردست! شکریہ!", "5": "🎉 شاندار! بہت بہت شکریہ!" },
    },
    buttons: { downloadResume: "ریزیومے ڈاؤن لوڈ", viewProjects: "میرے پروجیکٹس دیکھیں", sendMessage: "پیغام بھیجیں", messageSent: "پیغام بھیج دیا گیا! ✓" },
    site: { jobTitle: "سینior MERN Stack Developer", availability: "ریموٹ freelance اور part-time contracts کے لیے دستیاب" },
  },
  home: {
    welcome: "میرے پورٹ فolio میں خوش آمدید", greeting: "السلام، میں", name: "Arslan Jaffar",
    tagline: "میں صرف apps نہیں بناتا۔ میں ایسے systems ڈیزائن کرتا ہوں جو scale کریں۔",
    taglineLine1: "میں صرف apps نہیں بناتا۔", taglineLine2: "میں ایسے systems ڈیزائن کرتا ہوں جو scale کریں۔", taglineLine3: "خیال → architecture → production۔",
    introTitle: "مجھے", introAccent: "متعارف", introTitleEnd: "کرائیں",
    introBody: "السلام، میں Arslan Jaffar ہوں — PixelPK میں Senior Software Engineer اور Beyond Technologies میں AI Systems Engineer / Team Lead، 4+ سال scalable production-ready platforms بنانے کا تجربہ۔\n\nمیں Node.js، NestJS، اور Python کے ساتھ backend systems architect کرتا ہوں — microservices، event-driven workflows، اور AWS پر cloud-native deployments۔ میں AI systems بھی بناتا ہوں: RAG pipelines، LangGraph multi-agent workflows، Qdrant vector search، اور Gemini و Ollama کے ساتھ MCP integrations۔\n\nفی الحال enterprise ERP اور SaaS products پر cross-functional teams lead کرتا ہوں اور Pakistan Lawbot اور enterprise AI assistant platforms ship کرتا ہوں۔",
    findMeOn: "مجھے یہاں تلاش کریں", findMeText: "بلا جھجھک <accent>جڑیں</accent>",
    typewriter: ["AI Systems Engineer", "Senior Software Engineer @ PixelPK", "RAG & LLM Orchestration", "LangGraph Multi-Agent Developer", "Team Lead @ Beyond Technologies", "Backend Architect - Node.js / NestJS", "Microservices and API Specialist", "Cloud-Native Systems Engineer"],
    stats: [{ label: "سال کا تجربہ" }, { label: "شipped پروڈکٹس" }, { label: "Lawbot صارفین" }, { label: "API Response بہتری" }],
    engineering: {
      heading: "میں کیا", headingAccent: "واقعی بناتا ہوں",
      subtitle: "صرف code لکھنے سے آگے — real-world scale اور complexity handle کرنے والے systems۔",
      cards: [
        { title: "AI Agents & RAG Systems", desc: "LangGraph اور LangChain کے ساتھ multi-agent workflows۔ Qdrant vector retrieval، Gemini و Ollama LLMs، memory-aware conversations، tool-calling، اور MCP integrations۔" },
        { title: "Production AI Backend", desc: "LLM، Agent، اور RAG layers کے درمیان intelligent routing۔ Chunking، embeddings، reranking، contextual memory، اور observability کے ساتھ stateful orchestration۔" },
        { title: "Backend Systems & APIs", desc: "Node.js، NestJS، اور Express.js کے ساتھ production-grade REST اور GraphQL APIs۔ Security، validation، اور performance پر focus۔" },
        { title: "Microservices & Queues", desc: "RabbitMQ اور BullMQ کے ساتھ event-driven distributed architectures۔ Redis caching سے latency کم۔" },
        { title: "Cloud & DevOps", desc: "AWS اور GCP پر Dockerized deployments۔ GitLab اور GitHub Actions CI/CD۔ Kubernetes orchestration۔" },
        { title: "Frontend Engineering", desc: "React.js اور Next.js کے ساتھ clean responsive UIs۔ Redux state management۔ Performance، accessibility، اور SEO۔" },
      ],
    },
    highlights: { heading: "حالیہ", headingAccent: "کارنامے", subtitle: "حالیہ roles سے اہم engineering outcomes۔" },
  },
};

const ar = {
  common: {
    nav: { home: "الرئيسية", about: "نبذة عني", projects: "المشاريع", experience: "الخبرة", gallery: "المعرض", blog: "المدونة", services: "الخدمات", contact: "اتصل", resume: "السيرة الذاتية" },
    footer: {
      tagline: "مهندس MERN و AI أبني منصات ويب قابلة للتوسع ومنتجات SaaS وأنظمة AI للإنتاج.",
      quickLinks: "روابط سريعة", contact: "اتصل", connect: "تواصل",
      connectText: "متاح للعمل الحر عن بُعد والعقود بدوام جزئي والتعاون.",
      location: "الموقع", availability: "التوفر", chatWhatsApp: "دردشة على WhatsApp",
      privacyPolicy: "سياسة الخصوصية", termsConditions: "الشروط والأحكام",
      designedBy: "صمم وطور {{author}}", copyright: "حقوق النشر © {{year}} {{author}}. جميع الحقوق محفوظة.",
    },
    social: { github: "GitHub", linkedin: "LinkedIn", linkedinMessage: "رسالة على LinkedIn", twitter: "Twitter", whatsapp: "WhatsApp", viewGithub: "عرض على GitHub" },
    theme: { switchToLight: "التبديل إلى الوضع الفاتح", switchToDark: "التبديل إلى الوضع الداكن" },
    language: { label: "اللغة", en: "English", ur: "اردو", ar: "العربية" },
    rating: {
      title: "كيف أعجبك portfolio الخاص بي؟",
      description: "ملاحظاتك تساعدني على تحسين عملي وعرض المشاريع بشكل أفضل.",
      skip: "تخطي", submit: "إرسال التقييم", selectRating: "اختر تقييماً",
      feedback: { "1": "😞 أود سماع ما يمكنني تحسينه!", "2": "😐 يرجى مشاركة ملاحظاتك للتحسين.", "3": "😊 سعيد أنه أعجبك!", "4": "😄 رائع! شكراً!", "5": "🎉 ممتاز! شكراً جزيلاً!" },
    },
    buttons: { downloadResume: "تحميل السيرة الذاتية", viewProjects: "عرض مشاريعي", sendMessage: "إرسال رسالة", messageSent: "تم إرسال الرسالة! ✓" },
    site: { jobTitle: "Senior MERN Stack Developer", availability: "متاح للعمل الحر عن بُعد وعقود بدوام جزئي" },
  },
  home: {
    welcome: "مرحباً بك في portfolio الخاص بي", greeting: "مرحباً، أنا", name: "Arslan Jaffar",
    tagline: "لا أبني التطبيقات فقط. أصمم أنظمة قابلة للتوسع.",
    taglineLine1: "لا أبني التطبيقات فقط.", taglineLine2: "أصمم أنظمة قابلة للتوسع.", taglineLine3: "من الفكرة → الهندسة → الإنتاج.",
    introTitle: "دعني", introAccent: "أعرّف", introTitleEnd: "نفسي",
    introBody: "مرحباً، أنا Arslan Jaffar — Senior Software Engineer في PixelPK و AI Systems Engineer / Team Lead في Beyond Technologies، مع 4+ سنوات في بناء منصات production-ready قابلة للتوسع.\n\nأصمم أنظمة backend بـ Node.js و NestJS و Python — microservices و event-driven workflows ونشر cloud-native على AWS. أبني أيضاً أنظمة AI: RAG pipelines و LangGraph multi-agent workflows و Qdrant vector search و MCP integrations مع Gemini و Ollama.\n\nحالياً أقود فرق cross-functional على ERP مؤسسي ومنتجات SaaS وأطلق Pakistan Lawbot ومنصات AI assistant للمؤسسات.",
    findMeOn: "جدني على", findMeText: "لا تتردد في <accent>التواصل</accent> معي",
    typewriter: ["AI Systems Engineer", "Senior Software Engineer @ PixelPK", "RAG & LLM Orchestration", "LangGraph Multi-Agent Developer", "Team Lead @ Beyond Technologies", "Backend Architect - Node.js / NestJS", "Microservices and API Specialist", "Cloud-Native Systems Engineer"],
    stats: [{ label: "سنوات الخبرة" }, { label: "منتجات مطلقة" }, { label: "مستخدمي Lawbot" }, { label: "تحسين استجابة API" }],
    engineering: {
      heading: "ما", headingAccent: "أبنيه فعلاً",
      subtitle: "أبعد من كتابة الكود — تصميم أنظمة تتعامل مع scale وتعقيد العالم الحقيقي.",
      cards: [
        { title: "AI Agents & RAG Systems", desc: "Multi-agent workflows مع LangGraph و LangChain. Qdrant vector retrieval و Gemini و Ollama LLMs و memory-aware conversations و tool-calling و MCP integrations." },
        { title: "Production AI Backend", desc: "Intelligent routing عبر LLM و Agent و RAG layers. Chunking و embeddings و reranking و contextual memory و stateful orchestration مع observability." },
        { title: "Backend Systems & APIs", desc: "REST و GraphQL APIs production-grade مع Node.js و NestJS و Express.js. التركيز على الأمان والتحقق والأداء." },
        { title: "Microservices & Queues", desc: "Distributed architectures مع RabbitMQ و BullMQ. Redis caching لتقليل latency." },
        { title: "Cloud & DevOps", desc: "Dockerized deployments على AWS و GCP. CI/CD مع GitLab و GitHub Actions. Kubernetes orchestration." },
        { title: "Frontend Engineering", desc: "UIs نظيفة ومتجاوبة مع React.js و Next.js. Redux state management. Performance و accessibility و SEO." },
      ],
    },
    highlights: { heading: "أبرز", headingAccent: "الإنجازات", subtitle: "نتائج هندسية رئيسية من الأدوار الأخيرة." },
  },
};

function buildProjects(locale) {
  const en = readEn("projects");
  return {
    heading: locale === "ur" ? "میرے حالیہ" : "مشاريعي",
    headingAccent: locale === "ur" ? "کام" : "الأخيرة",
    subtitle: locale === "ur" ? "یہاں چند حالیہ پروجیکٹس ہیں جن پر میں نے کام کیا۔" : "إليك بعض المشاريع التي عملت عليها مؤخراً.",
    items: en.items.map((item) => translateItem(item, locale)),
    backendItems: en.backendItems.map((item) => translateItem(item, locale)),
  };
}

function buildExperience(locale) {
  const en = readEn("experience");
  const expMapUr = {
    "Full-Stack Engineer / AI Product Engineer": { role: "Full-Stack Engineer / AI Product Engineer", designation: "Senior Software Engineer", description: "PixelPK Technologies میں own-product legal technology بنانا، Pakistan Lawbot پر end-to-end ownership۔" },
    "AI Systems Engineer — AI Engineering Projects": { role: "AI Systems Engineer — AI Engineering Projects", designation: "AI Systems Engineer", description: "Enterprise AI assistant اور production AI backend architecture کی قیادت۔" },
    "Senior Software Engineer - MERN / Backend Architect": { role: "Senior Software Engineer - MERN / Backend Architect", designation: "Senior Software Engineer", description: "Scalable backend platforms architect کرنا اور cross-functional teams lead کرنا۔" },
  };
  const expMapAr = {
    "Full-Stack Engineer / AI Product Engineer": { role: "Full-Stack Engineer / AI Product Engineer", designation: "Senior Software Engineer", description: "بناء legal technology في PixelPK Technologies مع ملكية end-to-end لـ Pakistan Lawbot." },
    "AI Systems Engineer — AI Engineering Projects": { role: "AI Systems Engineer — AI Engineering Projects", designation: "AI Systems Engineer", description: "قيادة enterprise AI assistant وهندسة AI backend للإنتاج." },
    "Senior Software Engineer - MERN / Backend Architect": { role: "Senior Software Engineer - MERN / Backend Architect", designation: "Senior Software Engineer", description: "تصميم منصات backend قابلة للتوسع وقيادة فرق cross-functional." },
  };
  const map = locale === "ur" ? expMapUr : expMapAr;
  return {
    heading: locale === "ur" ? "کam" : "الخبرة",
    headingAccent: locale === "ur" ? "تجربہ" : "العمل",
    subtitle: locale === "ur" ? "Startups، enterprises، اور freelance work میں میرا professional سفر۔" : "رحلتي المهنية عبر startups و enterprises والعمل الحر.",
    openForWork: locale === "ur" ? "کam کے لیے دستیاب" : "متاح للعمل",
    items: en.items.map((item) => ({ ...item, ...(map[item.role] || {}) })),
    highlights: en.highlights,
  };
}

function buildServices(locale) {
  const en = readEn("services");
  if (locale === "ur") {
    return {
      heading: "خدمات جو میں", headingAccent: "فراہم کرتا ہوں",
      subtitle: "Startups، enterprises، اور freelance clients کے لیے end-to-end engineering services۔",
      items: en.items.map((item, i) => ({
        ...item,
        title: ["Full-Stack Web Development", "Backend & API Design", "AI & LLM Integration", "Technical Consulting"][i] || item.title,
        description: ["جدید React، Next.js، Node.js stacks کے ساتھ end-to-end web applications۔", "Microservices اور event-driven architecture کے ساتھ scalable backend systems۔", "LLMs سے intelligent features — RAG pipelines، multi-agent workflows، production AI systems۔", "Architecture reviews، code audits، اور strategic guidance۔"][i] || item.description,
      })),
    };
  }
  return {
    heading: "الخدمات", headingAccent: "التي أقدمها",
    subtitle: "خدمات هندسية end-to-end للstartups والمؤسسات وعملاء freelance.",
    items: en.items.map((item, i) => ({
      ...item,
      title: ["تطوير Full-Stack Web", "Backend & API Design", "AI & LLM Integration", "Technical Consulting"][i] || item.title,
      description: ["تطبيقات ويب end-to-end مع React و Next.js و Node.js.", "أنظمة backend قابلة للتوسع مع microservices.", "ميزات ذكية مدعومة بـ LLMs — RAG و multi-agent workflows.", "مراجعات الهندسة واستشارات استراتيجية."][i] || item.description,
    })),
  };
}

function buildContact(locale) {
  if (locale === "ur") {
    return {
      heading: "رابطہ", headingAccent: "کریں", subtitle: "Remote freelance، part-time work، یا collaboration کے لیے رابطہ کریں۔",
      formTitle: "مجھے پیغام بھیجیں", nameLabel: "آپ کا نام", namePlaceholder: "اپنا نام درج کریں",
      emailLabel: "آپ کا ای میل", emailPlaceholder: "your.email@example.com", messageLabel: "پیغام",
      messagePlaceholder: "اپنا پیغام یہاں لکھیں (کم از کم 10 حروف)...",
      infoTitle: "رابطے کی معلومات", chatTitle: "مجھ سے چیٹ کریں", followTitle: "مجھے فالو کریں",
      labels: { email: "ای میل", location: "مقام", availability: "دستیابی", whatsapp: "WhatsApp" },
      validation: { nameRequired: "نام ضروری ہے", emailRequired: "درست ای میل ضروری ہے", messageRequired: "پیغام کم از کم 10 حروف کا ہونا چاہیے" },
    };
  }
  return {
    heading: "تواصل", headingAccent: "معي", subtitle: "لا تتردد في التواصل للعمل الحر عن بُعد أو بدوام جزئي أو التعاون.",
    formTitle: "أرسل لي رسالة", nameLabel: "اسمك", namePlaceholder: "أدخل اسمك",
    emailLabel: "بريدك الإلكتروني", emailPlaceholder: "your.email@example.com", messageLabel: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا (10 أحرف على الأقل)...",
    infoTitle: "معلومات الاتصال", chatTitle: "دردش معي", followTitle: "تابعني",
    labels: { email: "البريد", location: "الموقع", availability: "التوفر", whatsapp: "WhatsApp" },
    validation: { nameRequired: "الاسم مطلوب", emailRequired: "بريد إلكتروني صالح مطلوب", messageRequired: "يجب أن تكون الرسالة 10 أحرف على الأقل" },
  };
}

function buildLegal(locale) {
  const en = readEn("legal");
  if (locale === "ur") {
    return {
      privacy: {
        heading: "رازداری", headingAccent: "پالیسی", lastUpdated: "آخری اپ ڈیٹ: 27 جون 2026",
        sections: en.privacy.sections.map((s) => ({
          ...s,
          title: { Introduction: "تعارف", "Information I Collect": "معلومات جو میں جمع کرتا ہوں", "How I Use Your Information": "معلومات کا استعمال", "Cookies & Analytics": "Cookies اور Analytics", "Data Retention": "ڈیٹا کی حفاظت", "Your Rights": "آپ کے حقوق", Contact: "رابطہ" }[s.title] || s.title,
          body: s.body.replace("Arslan Jaffar", "Arslan Jaffar").replace("This Privacy Policy explains", "یہ رازداری کی پالیسی وضاحت کرتی ہے"),
        })),
      },
      terms: {
        heading: "شرائط", headingAccent: "و ضوابط", lastUpdated: "آخری اپ ڈیٹ: 27 جون 2026",
        sections: en.terms.sections.map((s) => ({ ...s, title: s.title, body: s.body })),
      },
    };
  }
  return {
    privacy: {
      heading: "سياسة", headingAccent: "الخصوصية", lastUpdated: "آخر تحديث: 27 يونيو 2026",
      sections: en.privacy.sections.map((s) => ({
        ...s,
        title: { Introduction: "مقدمة", "Information I Collect": "المعلومات التي أجمعها", "How I Use Your Information": "كيف أستخدم معلوماتك", "Cookies & Analytics": "Cookies والتحليلات", "Data Retention": "الاحتفاظ بالبيانات", "Your Rights": "حقوقك", Contact: "اتصل" }[s.title] || s.title,
      })),
    },
    terms: {
      heading: "الشروط", headingAccent: "والأحكام", lastUpdated: "آخر تحديث: 27 يونيو 2026",
      sections: en.terms.sections.map((s) => ({
        ...s,
        title: { "Acceptance of Terms": "قبول الشروط", "Use of the Website": "استخدام الموقع", "Intellectual Property": "الملكية الفكرية", "External Links": "روابط خارجية", Disclaimer: "إخلاء المسؤولية", "Limitation of Liability": "تحديد المسؤولية", "Changes to Terms": "تغييرات الشروط", Contact: "اتصل" }[s.title] || s.title,
      })),
    },
  };
}

function buildSeo(locale) {
  const en = readEn("seo");
  if (locale === "ur") {
    return {
      ...en,
      defaultTitle: "Arslan Jaffar | Senior MERN Stack Developer",
      defaultDescription: "Arslan Jaffar Senior MERN Stack Developer ہے — React.js، Next.js، Node.js، NestJS کے ساتھ scalable web اور SaaS applications بنانے کا 3.5+ سال تجربہ۔",
      routes: Object.fromEntries(Object.entries(en.routes).map(([k, v]) => [k, { title: v.title.replace("About", "میرے بارے میں").replace("Projects", "پروجیکٹس").replace("Experience", "تجربہ").replace("Gallery", "گیلری").replace("Contact", "رابطہ").replace("Resume", "ریزیومے").replace("Blog", "بلاگ").replace("Services", "خدمات").replace("Privacy Policy", "رازداری کی پالیسی").replace("Terms & Conditions", "شرائط و ضوابط"), description: v.description }])),
    };
  }
  return {
    ...en,
    defaultDescription: "Arslan Jaffar Senior MERN Stack Developer مع 3.5+ سنوات خبرة في بناء تطبيقات ويب و SaaS قابلة للتوسع.",
    routes: Object.fromEntries(Object.entries(en.routes).map(([k, v]) => [k, { title: v.title.replace("About", "نبذة").replace("Projects", "المشاريع").replace("Experience", "الخبرة").replace("Gallery", "المعرض").replace("Contact", "اتصل").replace("Resume", "السيرة").replace("Blog", "المدونة").replace("Services", "الخدمات").replace("Privacy Policy", "سياسة الخصوصية").replace("Terms & Conditions", "الشروط"), description: v.description }])),
  };
}

for (const locale of ["ur", "ar"]) {
  const data = locale === "ur" ? ur : ar;
  writeLocale(locale, "common", data.common);
  writeLocale(locale, "home", data.home);
  writeLocale(locale, "projects", buildProjects(locale));
  writeLocale(locale, "experience", buildExperience(locale));
  writeLocale(locale, "services", buildServices(locale));
  writeLocale(locale, "contact", buildContact(locale));
  writeLocale(locale, "blog", locale === "ur" ? { heading: "میرا", headingAccent: "بلاگ", subtitle: "Full-stack development، backend architecture، اور AI systems پر مضامین۔", comingSoon: "بلاگ پوسٹس جلد آ رہی ہیں!" } : { heading: "مدونتي", headingAccent: "", subtitle: "مقالات ورؤى حول full-stack development وهندسة backend وأنظمة AI.", comingSoon: "المقالات قريباً!" });
  writeLocale(locale, "resume", locale === "ur" ? { heading: "میرا", headingAccent: "ریزیومے", subtitle: "میرا ریزیومے ڈاؤن لوڈ کریں یا نیچے دیکھیں۔", download: "CV ڈاؤن لوڈ" } : { heading: "سيرتي", headingAccent: "الذاتية", subtitle: "حمّل سيرتي الذاتية أو اعرضها أدناه.", download: "تحميل CV" });
  writeLocale(locale, "gallery", locale === "ur" ? { heading: "کارناموں کی", headingAccent: "گیلری", subtitle: "میرے engineering سفر کے awards، certificates، اور milestones۔", categories: ["Award", "Certificate", "Event", "Recognition"], items: [{ title: "LinkedIn Achievement", date: "2025", category: "Recognition", description: "LinkedIn پر شیئر کردہ milestone۔", embedTitle: "Embedded post" }] } : { heading: "معرض", headingAccent: "الإنجازات", subtitle: "جوائز وشهادات ومعالم من رحلتي الهندسية.", categories: ["Award", "Certificate", "Event", "Recognition"], items: [{ title: "LinkedIn Achievement", date: "2025", category: "Recognition", description: "إنجاز مشارك على LinkedIn.", embedTitle: "Embedded post" }] });
  writeLocale(locale, "about", locale === "ur" ? {
    ...readEn("about"),
    knowWho: "جانیں", knowAccent: "میں کون",
    skillsetHeading: "Professional", skillsetAccent: "Skillset",
    toolsHeading: "Tools", toolsAccent: "جو میں استعمال کرتا ہوں",
    valuesHeading: "Core", valuesAccent: "Engineering Values",
    values: readEn("about").values.map((v, i) => ({
      title: ["Scalability First", "Production Reliability", "Clean Architecture", "AI-First Systems"][i] ? ["پہلے Scalability", "Production Reliability", "Clean Architecture", "AI-First Systems"][i] : v.title,
      desc: v.desc,
    })),
    card: {
      ...readEn("about").card,
      intro: "السلام، میں Arslan Jaffar ہوں، Lahore، Pakistan سے۔",
      quote: "ایسے systems بنائیں جو scale کریں، teams جو grow کریں، اور products جو matter کریں۔",
    },
    github: { heading: "دن جو میں", headingAccent: "Code کرتا ہوں", subtitle: "میری GitHub contribution activity" },
  } : locale === "ar" ? {
    ...readEn("about"),
    knowWho: "تعرّف على", knowAccent: "من أنا",
    skillsetHeading: "Professional", skillsetAccent: "Skillset",
    toolsHeading: "الأدوات", toolsAccent: "التي أستخدمها",
    valuesHeading: "Core", valuesAccent: "Engineering Values",
    card: {
      ...readEn("about").card,
      intro: "مرحباً، أنا Arslan Jaffar من Lahore، Pakistan.",
      quote: "ابن أنظمة قابلة للتوسع وفرقاً تنمو ومنتجات ذات معنى.",
    },
    github: { heading: "أيام", headingAccent: "أكتب فيها الكود", subtitle: "نشاط مساهمات GitHub" },
  } : readEn("about"));
  writeLocale(locale, "legal", buildLegal(locale));
  writeLocale(locale, "seo", buildSeo(locale));
}

console.log("Generated ur and ar locale files");
