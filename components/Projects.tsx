import Image from "next/image";

export default function Projects() {
  const projectsList = [
    {
      title: "موقع مواقيت الصلاة",
      englishTitle: "PRAYERS TIMES APP",
      desc: "موقع ويب بسيط لعرض مواقيت الصلاة بشكل جميل ورائع , ويمكنك فيه تغيير المدينة ايضا حسب موقعك",
      link: "https://prayers-time-ebon.vercel.app/",
      image: "/images/prayers.png",
      spanClass: "md:col-span-6", // كان 4
      isWide: false,
      buttonText: "زيارة الموقع",
    },
    {
      title: "تطبيق فوازير بسيط",
      englishTitle: "FAWAZER & RIDDLES",
      desc: "هذا مجرد موقع بسيط جدا لأسئلة بسيطة",
      link: "https://yousef-elnawawy.github.io/fawazer/",
      image: "/images/fawazer.png",
      spanClass: "md:col-span-6", // كان 4
      isWide: false,
      buttonText: "العب الآن",
    },
    {
      title: "حاسبة تفاصيل ويوم الميلاد",
      englishTitle: "BIRTHDAY CALCULATOR",
      desc: "مجرد موقع فكاهي بسيط لعرض عيد ميلاد اي شخص بشكل بسيط ومرح",
      link: "https://yousef-elnawawy.github.io/birth/",
      image: "/images/birth.png",
      spanClass: "md:col-span-12", // كان 8
      isWide: true,
      buttonText: "احسب ميلادك",
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-surface-container/30 relative">
      <div className="page-container flex flex-col gap-12 text-right">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-latin text-headline-lg font-black text-on-surface">
            بعض من مشاريعي البسيطة
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className={`card bg-surface-container-low border border-surface-container-high transition-all duration-300 hover:border-primary-container ${project.spanClass} flex flex-col overflow-hidden`}
            >
              {project.isWide ? (
                // Wide Card Layout (Horizontal on desktop)
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                  {/* Left Column: Image (Desktop only on left, scales up) */}
                  <div className="lg:col-span-6 relative min-h-[250px] lg:min-h-full overflow-hidden bg-surface-container-lowest">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                  {/* Right Column: Text content */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <span className="font-latin text-label-caps text-primary tracking-widest block">
                        {project.englishTitle}
                      </span>
                      <h3 className="font-arabic text-headline-sm font-bold text-on-surface">
                        {project.title}
                      </h3>
                      <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target={project.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex"
                      >
                        {project.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                // Narrow Card Layout (Vertical)
                <div className="flex flex-col h-full justify-between">
                  {/* Top: Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-container-lowest">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                  {/* Bottom: Text Content */}
                  <div className="p-6 sm:p-8 flex flex-col gap-6 flex-grow justify-between">
                    <div className="flex flex-col gap-3">
                      <span className="font-latin text-label-caps text-primary tracking-widest block">
                        {project.englishTitle}
                      </span>
                      <h3 className="font-arabic text-headline-sm font-bold text-on-surface">
                        {project.title}
                      </h3>
                      <p className="font-arabic text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>
                    </div>
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full text-center"
                      >
                        {project.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
