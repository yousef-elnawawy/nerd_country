import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "موقع الجمهورية — الجمهورية النيردية المتحدة",
  description: "اكتشف الموقع الجغرافي للجمهورية النيردية المتحدة ومناطقها ومدنها الكبرى.",
};

export default function LocationPage() {
  const regions = [
    {
      name: "إقليم النيرد الشمالي",
      area: "3.2M كم²",
      capital: "نيردوبوليس",
      icon: "🏙️",
      desc: "قلب الجمهورية وأكثر مناطقها تطوراً، تضم أكبر مراكز البيانات والجامعات التقنية على مستوى العالم.",
    },
    {
      name: "إقليم الشرق الرقمي",
      area: "2.8M كم²",
      capital: "كيبوسيتي",
      icon: "⚡",
      desc: "مركز الطاقة المتجددة والمدن الذكية، تنتج 80% من الطاقة الكهربائية للجمهورية.",
    },
    {
      name: "إقليم البحار الجنوبي",
      area: "2.5M كم²",
      capital: "بيكسلهافن",
      icon: "🌊",
      desc: "ميناء الجمهورية الرئيسي، مركز التجارة الدولية ومنصة إطلاق الأقمار الصناعية.",
    },
    {
      name: "إقليم السهل الغربي",
      area: "2.5M كم²",
      capital: "داتاسبرينغ",
      icon: "🌿",
      desc: "الغلة الزراعية التكنولوجية للجمهورية، تجمع بين الزراعة الذكية والمختبرات البيولوجية.",
    },
  ];

  const geographyFacts = [
    { title: "المساحة الإجمالية", value: "11 مليون كم²", icon: "📐" },
    { title: "عدد الأقاليم", value: "4 أقاليم رئيسية", icon: "🗺️" },
    { title: "أطول نقطة شمالاً", value: "خط العرض 78°", icon: "🧭" },
    { title: "الامتداد الساحلي", value: "14,500 كم", icon: "⛵" },
    { title: "أعلى قمة", value: "جبل نيردفيرست 8,900م", icon: "⛰️" },
    { title: "أكبر نهر", value: "نهر بايتستريم 6,200 كم", icon: "🏞️" },
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
              background: `radial-gradient(circle at 30% 50%, var(--theme-hero-glow), transparent 50%)`,
            }}
          />
          <div className="page-container relative z-10">
            <span className="text-primary font-arabic text-label-caps block tracking-widest mb-4">
              الجغرافيا والامتداد
            </span>
            <h1 className="font-arabic text-headline-lg font-black text-on-surface mb-4">
              موقع الجمهورية
            </h1>
            <div className="w-20 h-1 bg-primary" />
          </div>
        </section>

        {/* Map Visual Section */}
        <section className="py-24 relative">
          <div className="page-container flex flex-col gap-12">

            {/* Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6 text-right">
                <h2 className="font-arabic text-headline-md font-bold text-on-surface">
                  امتداد جغرافي هائل
                </h2>
                <div className="w-16 h-1 bg-primary" />
                <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
                  تمتد الجمهورية النيردية المتحدة على مساحة إجمالية تبلغ <strong className="text-primary">11 مليون كيلومتر مربع</strong>،
                  مما يجعلها من أكبر الكيانات الجغرافية في العالم. تتوزع أراضيها بين السهول الممتدة والجبال الشاهقة
                  والسواحل الطويلة.
                </p>
                <p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
                  استطاعت الجمهورية السيطرة على هذه المساحات الشاسعة خلال مراحل توسعها المتعاقبة،
                  محوّلةً كل شبر منها إلى أرض حضارة وإنتاج وتقدم تكنولوجي.
                </p>
              </div>

              {/* Stylized Map Placeholder */}
              <div className="lg:col-span-5">
<div className="relative w-full overflow-hidden rounded-xl border border-surface-container-high hover:border-primary-container transition-all duration-300">
  <Image
    src="/map.png"
    alt="خريطة الجمهورية النيردية المتحدة"
    width={1200}
    height={1200}
    className="w-full h-auto object-cover"
    priority
  />
</div>
              </div>
            </div>

            {/* Geography Facts Grid */}
            <div className="flex flex-col gap-6">
              <h2 className="font-arabic text-headline-md font-bold text-on-surface text-right">
                حقائق جغرافية
              </h2>
              <div className="w-16 h-1 bg-primary" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {geographyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="card bg-surface-container-low border border-surface-container-high p-6 flex flex-col gap-3 text-right hover:border-primary-container transition-all duration-300"
                  >
                    <span className="text-3xl">{fact.icon}</span>
                    <div className="flex flex-col gap-1">
                      <span className="font-latin text-primary font-black text-xl">{fact.value}</span>
                      <span className="font-arabic text-sm text-on-surface-variant">{fact.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section className="py-24 border-t border-surface-container/30 bg-surface-container-lowest/20">
          <div className="page-container flex flex-col gap-12 text-right">
            <div className="flex flex-col gap-4">
              <h2 className="font-arabic text-headline-lg font-black text-on-surface">
                الأقاليم الرئيسية
              </h2>
              <div className="w-20 h-1 bg-primary" />
              <p className="font-arabic text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                تنقسم الجمهورية إلى أربعة أقاليم رئيسية، كل منها يتمتع بطابع خاص وموارد فريدة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region, idx) => (
                <div
                  key={idx}
                  className="card bg-surface-container-low border border-surface-container-high p-8 flex flex-col gap-4 hover:border-primary-container transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-row-reverse justify-start">
                    <div className="p-3 bg-surface-container-lowest border border-surface-container-high text-3xl">
                      {region.icon}
                    </div>
                    <div className="flex flex-col text-right">
                      <h3 className="font-arabic text-headline-md font-bold text-on-surface">
                        {region.name}
                      </h3>
                      <span className="font-arabic text-sm text-primary">
                        العاصمة: {region.capital}
                      </span>
                    </div>
                  </div>
                  <hr className="divider" />
                  <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">
                    {region.desc}
                  </p>
                  <div className="flex justify-between flex-row-reverse items-center pt-2">
                    <span className="chip">المساحة: {region.area}</span>
                  </div>
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
