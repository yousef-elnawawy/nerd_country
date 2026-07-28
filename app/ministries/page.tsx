import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الوزارات — الجمهورية النيردية المتحدة",
  description: "تعرف على وزارات الجمهورية النيردية المتحدة واختصاصاتها.",
};

export default function MinistriesPage() {
  // ضع صورة كل وزير داخل /public/ministries/ وحدّث المسار هنا
  // مقاس مقترح للصور: 400x400 بكسل (مربعة) لأفضل نتيجة
  const ministries = [
    {
      name: "وزارة المالية",
      englishName: "MINISTRY OF FINANCE",
      minister: "فتى الاصرار",
      image: "/images/fata2.jpg",
      desc: "تدير خزينة الجمهورية وتضبط الميزانية العامة بإصرار لا يلين، وتسهر على استقرار الاقتصاد الوطني مهما كانت التحديات.",
      tasks: ["الميزانية العامة", "الضرائب", "الاستثمار"],
      spanClass: "md:col-span-12",
      isWide: true,
    },
    {
      name: "وزارة التعليم",
      englishName: "MINISTRY OF EDUCATION",
      minister: "حسن xp",
      image: "/images/ta3lam.jpg",
      desc: "تشرف على المنظومة التعليمية وتراكم خبرة الأجيال الجديدة نقطة نقطة حتى الوصول لأعلى مستوى من المعرفة.",
      tasks: ["المناهج الدراسية", "التدريب", "رفع المستوى"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      name: "وزارة الفنون",
      englishName: "MINISTRY OF ARTS",
      minister: "سلمى",
      image: "/images/salm.jpg",
      desc: "تدعم الفنانين والمبدعين في كافة المجالات، وتعمل على نشر الثقافة والفنون بين مواطني الجمهورية، لتكون الفنون جزءاً لا يتجزأ من حياتهم اليومية.",
      tasks: ["الروعة", "الفن", "رفع المستوى"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      name: "وزارة التغذية",
      englishName: "MINISTRY OF NUTRITION",
      minister: "فتى القوة",
      image: "/images/fata1.jpg",
      desc: "تضمن وصول الغذاء الصحي والقوي لكل مواطن، وتبني أجيالاً بنية جسدية قوية تليق بجمهورية النيردز.",
      tasks: ["الأمن الغذائي", "التغذية الصحية", "اللياقة البدنية"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      name: "وزارة الطاقة النووية",
      englishName: "MINISTRY OF NUCLEAR ENERGY",
      minister: "Hearts",
      image: "/images/he.jpg",
      desc: "تشغّل المفاعلات النووية الوطنية بأعلى معايير الأمان، وتزود الجمهورية بطاقة نظيفة لا تنضب.",
      tasks: ["المفاعلات النووية", "الطاقة النظيفة", "السلامة الإشعاعية"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      name: "وزارة الحربية",
      englishName: "MINISTRY OF WAR",
      minister: "تازوبي باشا",
      image: "/images/tazoby.jpg",
      desc: "تقود القوات المسلحة وتحمي حدود الجمهورية بحزم، وتخطط لكل معركة بذكاء استراتيجي لا يُضاهى.",
      tasks: ["القوات المسلحة", "الاستراتيجية العسكرية", "حماية الحدود"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      name: "وزارة الخارجية",
      englishName: "MINISTRY OF FOREIGN AFFAIRS",
      minister: "هوتي",
      image: "/images/boom.jpg",
      desc: "تدير العلاقات الدولية للجمهورية، وتعمل على بناء تحالفات قوية مع الدول الصديقة، وتدافع عن مصالح الجمهورية في المحافل العالمية.",
      tasks: ["العلاقات الدولية", "التحالفات", "الدبلوماسية"],
      spanClass: "md:col-span-6",
      isWide: false,
    },
    {
      // ملاحظة: اسم الوزير غير محدد في الطلب، تم اقتراح اسم مؤقت يمكنك تغييره
      name: "وزارة الجيش والتجهيز للحروب",
      englishName: "MINISTRY OF ARMY & WAR READINESS",
      minister: "الفراغ",
      image: "/images/kaeed.jpg",
      desc: "تتولى تجنيد وتدريب وتجهيز القوات، وتضمن جاهزية الجمهورية الكاملة لخوض أي معركة في أي لحظة.",
      tasks: ["التجنيد والتدريب", "التسليح", "الجاهزية القتالية"],
      spanClass: "md:col-span-12",
      isWide: true,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative pt-32 pb-16 border-b border-surface-container/30">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 60% 40%, var(--theme-hero-glow), transparent 50%)`,
            }}
          />
          <div className="page-container relative z-10">
            <span className="text-primary font-arabic text-label-caps block tracking-widest mb-4">
              الجهاز التنفيذي
            </span>
            <h1 className="font-arabic text-headline-lg font-black text-on-surface mb-4">
              وزارات الجمهورية
            </h1>
            <div className="w-20 h-1 bg-primary" />
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="page-container text-right">
            <p className="font-arabic text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
              تعمل الجمهورية النيردية المتحدة من خلال منظومة حكومية متكاملة تضم عدداً من الوزارات المتخصصة،
              تعمل كل منها بكفاءة عالية لضمان تقدم الجمهورية ورقيّ مواطنيها في كافة المجالات.
            </p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-12 border-t border-surface-container/30">
          <div className="page-container flex flex-col gap-12 text-right">
            <div className="flex flex-col gap-4">
              <h2 className="font-arabic text-headline-lg font-black text-on-surface">
                قائمة الوزارات
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {ministries.map((ministry, idx) => (
                <div
                  key={idx}
                  className={`card bg-surface-container-low border border-surface-container-high transition-all duration-300 hover:border-primary-container ${ministry.spanClass} flex flex-col overflow-hidden`}
                >
                  {ministry.isWide ? (
                    // Wide Layout
                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                      {/* Image Column */}
                      <div className="lg:col-span-3 bg-surface-container-lowest flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-l border-surface-container-high gap-3">
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/40 shadow-md bg-surface-container">
                          <Image
                            src={ministry.image}
                            alt={ministry.minister}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                        <div className="font-arabic text-sm text-on-surface-variant text-center">
                          الوزير: <strong className="text-primary">{ministry.minister}</strong>
                        </div>
                      </div>
                      {/* Text Column */}
                      <div className="lg:col-span-9 p-8 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                          <span className="font-latin text-label-caps text-primary tracking-widest block">
                            {ministry.englishName}
                          </span>
                          <h3 className="font-arabic text-headline-md font-bold text-on-surface">{ministry.name}</h3>
                          <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">{ministry.desc}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap pt-2">
                          {ministry.tasks.map((task) => (
                            <span key={task} className="chip">{task}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Narrow Layout
                    <div className="flex flex-col h-full">
                      <div className="bg-surface-container-lowest p-6 border-b border-surface-container-high flex items-center gap-4 flex-row-reverse justify-between">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 shadow-md bg-surface-container shrink-0">
                          <Image
                            src={ministry.image}
                            alt={ministry.minister}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <span className="font-arabic text-sm text-on-surface-variant">
                          الوزير: <strong className="text-primary">{ministry.minister}</strong>
                        </span>
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow justify-between">
                        <div className="flex flex-col gap-3">
                          <span className="font-latin text-label-caps text-primary tracking-widest block">
                            {ministry.englishName}
                          </span>
                          <h3 className="font-arabic text-headline-md font-bold text-on-surface">{ministry.name}</h3>
                          <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">{ministry.desc}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap pt-2">
                          {ministry.tasks.map((task) => (
                            <span key={task} className="chip">{task}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* More leaders note */}
            <p className="font-arabic text-body-md text-on-surface-variant text-center pt-4">
              والمزيد والمزيد من القادة العظماء 🚀
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}