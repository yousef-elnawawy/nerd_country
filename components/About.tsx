import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-surface-container/30 relative">
      <div className="page-container grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Right Column (First in RTL): Portrait Image */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group w-full max-w-[400px] aspect-square border border-surface-container-high p-4 bg-surface-container-lowest">
            {/* Red accent glow behind border */}
            <div className="absolute inset-0 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/yousef-portrait.png"
                alt="يوسف النواوي"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Left Column (Second in RTL): Text Details */}
        <div className="md:col-span-7 flex flex-col gap-6 text-right order-2 md:order-1">
          <h2 className="font-latin text-headline-lg font-black text-on-surface">
            من هو يوسف - <span className="font-latin">JOE</span> ؟
          </h2>
          <div className="w-20 h-1 bg-primary mb-2" />
          
          <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
            انا يوسف من مصر وعندي 15 سنة , مطور مواقع ويب ومهتم بمجالات البرمجة وعلوم الحاسب , بدأت رحلتي من سنة تقريبا وخلال الفترة دي اشتغلت كتير وطبقت اللي تعلمته في مشاريع عديدة , وبستمتع اني احول الأفكار لمواقع عملية وسهلة لأي حد أيا كان
          </p>
          <p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
            بعمل أيضا على مواقع كبيرة نوعا ما زي مواقع الـ "Ecommerce" و "CRP" , بجانب تطوير مواقع بسيطة للشركات والمؤسسات
          </p>
          <p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
          برضه بحب صناعة المحتوى , رغم اني بسيط في المجال ده لكن بحب برضه استكشف فيه , والحمد لله عندي تفاعل كبير على مواقع التواصل الاجتماعي
          </p>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6 pt-6 border-t border-surface-container-high">
            <div className="flex flex-col gap-2">
              <span className="font-latin text-[40px] md:text-[48px] font-black text-primary leading-none">
                1+
              </span>
              <span className="font-arabic text-body-md text-on-surface-variant">
                سنة من التعلم "لسة بتعلم أكتر"
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-latin text-[40px] md:text-[48px] font-black text-primary leading-none">
                10+
              </span>
              <span className="font-arabic text-body-md text-on-surface-variant">
                مشاريع بسيطة
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
