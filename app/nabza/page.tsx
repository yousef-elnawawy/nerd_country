import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "نبذة — الجمهورية النيردية المتحدة",
  description: "تعرف على الجمهورية النيردية المتحدة، إحدى أقوى دول العالم في مجال التكنولوجيا.",
};

export default function NabzaPage() {
  const stats = [
    { value: "11M", label: "كيلومتر مربع", sub: "مساحة إجمالية" },
    { value: "500M+", label: "مواطن نيردي", sub: "عدد السكان" },
    { value: "#1", label: "في التكنولوجيا", sub: "تصنيف عالمي" },
    { value: "2026", label: "سنة التأسيس", sub: "تأسست رسمياً" },
  ];

  const leaders = {
  president: {
    instagram: "https://instagram.com/joe._.nerd",
    youtube: "https://youtube.com/@جو_نيرد",
  },

  primeMinister: {
    instagram: "https://www.instagram.com/bskhldty",
    youtube: "https://www.youtube.com/@عباسالمياح-س1ج",
  },
};
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative pt-32 pb-16 border-b border-surface-container/30">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 70% 30%, var(--theme-hero-glow), transparent 50%)`,
            }}
          />
          <div className="page-container relative z-10">
            <span className="text-primary font-arabic text-label-caps block tracking-widest mb-4">
              نبذة عن الجمهورية
            </span>
            <h1 className="font-arabic text-headline-lg font-black text-on-surface mb-4">
              الجمهورية النيردية المتحدة
            </h1>
            <div className="w-20 h-1 bg-primary" />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 relative">
          <div className="page-container grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

            {/* Right Column: Flag / Visual */}
            <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative group w-full max-w-[420px] aspect-video border border-surface-container-high bg-surface-container-lowest overflow-hidden">
                <div className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/Flag_ripples_in_wind_202607231928.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-background/80 border-t border-surface-container-high z-10 text-center">
                  <span className="font-arabic text-sm text-primary font-bold">علم الجمهورية النيردية المتحدة</span>
                </div>
              </div>
            </div>

            {/* Left Column: Text */}
            <div className="md:col-span-7 flex flex-col gap-6 text-right order-2 md:order-1">
              <h2 className="font-arabic text-headline-md font-bold text-on-surface">
                من نحن؟
              </h2>
<p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
  الجمهورية النيردية المتحدة هي دولة ذات سيادة كاملة، تُعدّ من أقوى وأعظم الدول على وجه البسيطة.
  تأسست رسميًا في عام <strong className="text-primary">2026</strong>، وخلال فترة وجيزة حققت
  نهضة استثنائية وتطورًا متسارعًا فاق كل التوقعات، حتى أصبحت نموذجًا عالميًا في الابتكار
  والتكنولوجيا والإدارة الحديثة، ووصل تأثيرها إلى مختلف أنحاء العالم.
</p>
<p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
  بقيادة الرئيس <strong className="text-primary">جو نيرد</strong> ورئيس الوزراء
  <strong className="text-primary"> عباس</strong>، استطاعت الجمهورية بناء منظومة
  حكومية حديثة تعتمد على العلم والابتكار والذكاء الاصطناعي، مما جعلها تتصدر العديد
  من المجالات التقنية وتصبح رمزًا للتقدم والحضارة.
</p>
<p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
  ورغم حداثة تأسيسها، أثبتت الجمهورية النيردية المتحدة أن التقدم لا يقاس بعمر الدول،
  بل برؤية قادتها وطموح شعبها. واليوم تُعرف بأنها دولة المستقبل، وشعارها الدائم:
  <strong className="text-primary"> "المعرفة قوة، والنيرد يحكم."</strong>
</p>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6 pt-6 border-t border-surface-container-high">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-latin text-[36px] md:text-[44px] font-black text-primary leading-none">
                      {stat.value}
                    </span>
                    <span className="font-arabic text-body-md text-on-surface font-bold">
                      {stat.label}
                    </span>
                    <span className="font-arabic text-sm text-on-surface-variant/70">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* President Section */}
        <section className="py-24 border-t border-surface-container/30 bg-surface-container-lowest/20">
          <div className="page-container flex flex-col gap-12 text-right">
            <div className="flex flex-col gap-4">
              <h2 className="font-arabic text-headline-lg font-black text-on-surface">
                رئيس الجمهورية
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
<div className="relative w-56 h-56 flex items-center justify-center">

  {/* الهالة */}
  <div
    className="
      absolute
      inset-0
      rounded-2xl
      blur-3xl
      scale-110
      animate-pulse
      bg-[radial-gradient(circle,rgba(255,180,0,0.9)_0%,rgba(255,120,0,0.6)_40%,transparent_80%)]
    "
  />

  {/* الإطار المتوهج */}
  <div
    className="
      absolute
      inset-0
      rounded-2xl
      border
      border-yellow-400/40
      shadow-[0_0_30px_rgba(255,180,0,.7)]
    "
  />

  {/* الصورة */}
  <div
    className="
      relative
      w-52
      h-52
      overflow-hidden
      rounded-xl
      border-2
      border-yellow-400
      bg-neutral-900
      shadow-[0_0_25px_rgba(255,170,0,.8)]
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_0_70px_rgba(255,140,0,1)]
    "
  >
    <img
      src="/joe_nerd.jpeg"
      alt="جو نيرد"
      className="w-full h-full object-cover"
    />

    {/* طبقة إضاءة فوق الصورة */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-yellow-300/10" />
  </div>

</div>



              </div>
              <div className="md:col-span-9 flex flex-col gap-4">
                <span className="text-primary font-arabic text-label-caps block tracking-widest">
                  الرئيس الأعلى للجمهورية
                </span>
                <h3 className="font-arabic text-headline-md font-black text-on-surface">
                  جو نيرد
                </h3>
                <div className="w-16 h-0.5 bg-primary" />
                <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
                  يعدّ الرئيس جو نيرد من أبرز القادة في تاريخ البشرية المعاصرة. بفكره الثاقب وإستراتيجيته
                  المحكمة، قاد الجمهورية النيردية من نقطة الصفر إلى قمة العالم التكنولوجي. يؤمن بأن المعرفة
                  هي السلاح الأقوى وأن الحضارة الحقيقية تُبنى بالعقول لا بالأسلحة.
                </p>
                <div className="flex items-center gap-3 flex-wrap mt-3">

  <span className="font-arabic text-sm text-on-surface-variant">
    الحسابات الرسمية:
  </span>

  <a
    href={leaders.president.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-surface-container-low border border-surface-container-high
      hover:border-red-500 transition-all duration-300"
  >
    <FaYoutube className="text-red-500 text-xl" />
    <span className="font-arabic">يوتيوب</span>
  </a>

  <a
    href={leaders.president.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-surface-container-low border border-surface-container-high
      hover:border-pink-500 transition-all duration-300"
  >
    <FaInstagram className="text-pink-500 text-xl" />
    <span className="font-arabic">إنستغرام</span>
  </a>

</div>
                <div className="flex gap-3 flex-wrap mt-2">
                  {["مبتكر", "استراتيجي", "تكنولوجي", "قائد ملهم"].map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prime Minister Section */}
<section className="py-24 border-t border-surface-container/30">
  <div className="page-container flex flex-col gap-12 text-right">

    <div className="flex flex-col gap-4">
      <h2 className="font-arabic text-headline-lg font-black text-on-surface">
        رئيس الوزراء
      </h2>
      <div className="w-20 h-1 bg-primary" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

      {/* الصورة */}
      <div className="md:col-span-3 flex justify-center">
        <div className="relative w-56 h-56 flex items-center justify-center">

          <div
            className="absolute inset-0 rounded-2xl blur-3xl scale-110 animate-pulse
            bg-[radial-gradient(circle,rgba(255,180,0,0.9)_0%,rgba(255,120,0,0.6)_40%,transparent_80%)]"
          />

          <div
            className="absolute inset-0 rounded-2xl border border-yellow-400/40
            shadow-[0_0_30px_rgba(255,180,0,.7)]"
          />

          <div
            className="relative w-52 h-52 overflow-hidden rounded-xl border-2
            border-yellow-400 bg-neutral-900
            shadow-[0_0_25px_rgba(255,170,0,.8)]
            transition-all duration-500 hover:scale-105
            hover:shadow-[0_0_70px_rgba(255,140,0,1)]"
          >
            <img
              src="/abas.jpg"
              alt="عباس"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-yellow-300/10" />
          </div>

        </div>
      </div>

      {/* النص */}
      <div className="md:col-span-9 flex flex-col gap-4">

        <span className="text-primary font-arabic text-label-caps block tracking-widest">
          رئيس وزراء الجمهورية
        </span>

        <h3 className="font-arabic text-headline-md font-black text-on-surface">
          عباس
        </h3>

        <div className="w-16 h-0.5 bg-primary" />

        <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
          يُعرف رئيس الوزراء عباس بحكمته وبعد نظره، ويقود الحكومة بكفاءة عالية في إدارة
          مؤسسات الدولة وتطوير الاقتصاد والعلوم والتكنولوجيا. يشتهر بقدرته على اتخاذ
          القرارات المدروسة وتعزيز التعاون بين مختلف الوزارات، مما جعله أحد أبرز الشخصيات
          القيادية في الجمهورية النيردية المتحدة.
        </p>

        <div className="flex items-center gap-3 flex-wrap mt-3">

  <span className="font-arabic text-sm text-on-surface-variant">
    الحسابات الرسمية:
  </span>

  <a
    href={leaders.primeMinister.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-surface-container-low border border-surface-container-high
      hover:border-red-500 transition-all duration-300"
  >
    <FaYoutube className="text-red-500 text-xl" />
    <span className="font-arabic">يوتيوب</span>
  </a>

  <a
    href={leaders.primeMinister.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-surface-container-low border border-surface-container-high
      hover:border-pink-500 transition-all duration-300"
  >
    <FaInstagram className="text-pink-500 text-xl" />
    <span className="font-arabic">إنستغرام</span>
  </a>

</div>

        <div className="flex gap-3 flex-wrap mt-2">
          {[
            "حكيم",
            "إداري بارع",
            "رؤية مستقبلية",
            "قائد تنفيذي"
          ].map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}
