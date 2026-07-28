import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تاريخ الجمهورية — الجمهورية النيردية المتحدة",
  description: "تاريخ الجمهورية النيردية المتحدة من لحظة التأسيس حتى يومنا هذا.",
};

export default function HistoryPage() {
const timeline = [
  {
    year: "مايو 2026",
    era: "عصر التأسيس",
    title: "إعلان قيام الجمهورية النيردية المتحدة",
    desc: "في شهر مايو 2026 أُعلن رسميًا تأسيس الجمهورية النيردية المتحدة بقيادة الرئيس جو نيرد، واعتماد الدستور والعلم والشعار الوطني، لتبدأ رحلة بناء دولة حديثة تعتمد على العلم والتكنولوجيا.",
    isWide: true,
  },
  {
    year: "مايو 2026",
    era: "عصر النهضة",
    title: "تشكيل الحكومة الأولى",
    desc: "تعيين عباس رئيسًا للوزراء، وتأسيس الوزارات والمؤسسات الحكومية وإطلاق أول خطة وطنية للتحول الرقمي.",
    isWide: false,
  },
  {
    year: "يونيو 2026",
    era: "عصر التجارة",
    title: "إطلاق السوق النيردي العالمي",
    desc: "افتتاح أكبر منصة تجارية رقمية للجمهورية، وربط الشركات الوطنية بمنظومة تجارة إلكترونية متطورة دعمت الاقتصاد المحلي.",
    isWide: false,
  },
  {
    year: "يونيو 2026",
    era: "عصر التكنولوجيا",
    title: "النهضة التقنية الكبرى",
    desc: "إطلاق مشاريع وطنية في الذكاء الاصطناعي، والأمن السيبراني، والحوسبة السحابية، مما جعل الجمهورية من أسرع الدول نموًا في القطاع التقني.",
    isWide: true,
  },
  {
    year: "يوليو 2026",
    era: "عصر الدبلوماسية",
    title: "بناء التحالفات الدولية",
    desc: "وقّعت الجمهورية اتفاقيات تعاون في مجالات التكنولوجيا والاقتصاد مع عدة دول وأطراف صديقة، من بينها دولة الرايخ وحزب الفرسان، إلى جانب شركاء آخرين.",
    isWide: false,
  },
  {
    year: "يوليو 2026",
    era: "عصر المنافسة",
    title: "تعزيز الاستقلال الاقتصادي",
    desc: "أطلقت الجمهورية برامج هدفت إلى تعزيز الاكتفاء التقني والاقتصادي وزيادة قدرتها على المنافسة عالميًا في مجالات التجارة والابتكار.",
    isWide: false,
  },
  {
    year: "أغسطس 2026",
    era: "عصر الاتحاد",
    title: "تأسيس منظمة اتحاد الجمهوريات الحرة",
    desc: "بعد سلسلة من التعاونات والاتفاقيات، شاركت الجمهورية مع حلفائها في تأسيس منظمة «اتحاد الجمهوريات الحرة»، بهدف تعزيز التعاون الاقتصادي والتقني وتبادل الخبرات بين الأعضاء.",
    isWide: true,
  },
];

  const eraColors: Record<string, string> = {
    "عصر التأسيس": "text-primary",
    "عصر التوسع الأول": "text-emerald-400",
    "عصر الهيمنة": "text-amber-400",
    "عصر القمة": "text-primary",
  };

  const wideItems = timeline.filter((e) => e.isWide);
  const narrowItems = timeline.filter((e) => !e.isWide);

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative pt-32 pb-16 border-b border-surface-container/30">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--theme-hero-glow), transparent 60%)`,
            }}
          />
          <div className="page-container relative z-10">
            <span className="text-primary font-arabic text-label-caps block tracking-widest mb-4">
              السجل التاريخي
            </span>
            <h1 className="font-arabic text-headline-lg font-black text-on-surface mb-4">
              تاريخ الجمهورية
            </h1>
            <div className="w-20 h-1 bg-primary" />
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="page-container text-right">
<p className="font-arabic text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
  بدأت قصة الجمهورية النيردية المتحدة في شهر مايو من عام 2026، حيث انطلقت برؤية
  تقوم على المعرفة والابتكار والتكنولوجيا. وخلال أشهر قليلة فقط، حققت الجمهورية
  إنجازات كبيرة في التجارة والاقتصاد الرقمي، وأقامت شراكات دولية واسعة، لتصبح
  نموذجًا لدولة حديثة تسعى إلى التعاون والتقدم.
</p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 border-t border-surface-container/30">
          <div className="page-container flex flex-col gap-12 text-right">
            <div className="flex flex-col gap-4">
              <h2 className="font-arabic text-headline-lg font-black text-on-surface">
                الأحداث التاريخية
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {timeline.map((event, idx) => (
                <div
                  key={idx}
                  className={`card bg-surface-container-low border border-surface-container-high transition-all duration-300 hover:border-primary-container ${event.isWide ? "md:col-span-12" : "md:col-span-6"} flex flex-col overflow-hidden`}
                >
                  {event.isWide ? (
                    // Wide Card (Horizontal on desktop)
                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                      {/* Year Display */}
                      <div className="lg:col-span-3 bg-surface-container-lowest flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-l border-surface-container-high">
                        <span className="font-latin text-[64px] font-black text-primary leading-none">{event.year}</span>
                        <span className={`font-arabic text-sm font-bold mt-2 ${eraColors[event.era]}`}>{event.era}</span>
                      </div>
                      {/* Content */}
                      <div className="lg:col-span-9 p-8 flex flex-col gap-4">
                        <span className="font-latin text-label-caps text-primary tracking-widest block">
                          {event.year} — {event.era}
                        </span>
                        <h3 className="font-arabic text-headline-md font-bold text-on-surface">{event.title}</h3>
                        <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  ) : (
                    // Narrow Card (Vertical)
                    <div className="flex flex-col h-full">
                      <div className="bg-surface-container-lowest p-4 border-b border-surface-container-high flex items-center gap-3 flex-row-reverse justify-between">
                        <span className="font-latin text-[40px] font-black text-primary leading-none">{event.year}</span>
                        <span className={`font-arabic text-sm font-bold ${eraColors[event.era]}`}>{event.era}</span>
                      </div>
                      <div className="p-6 flex flex-col gap-3 flex-grow">
                        <span className="font-latin text-label-caps text-primary tracking-widest block">
                          {event.year}
                        </span>
                        <h3 className="font-arabic text-headline-md font-bold text-on-surface">{event.title}</h3>
                        <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
