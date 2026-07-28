"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Flag_ripples_in_wind_202607231928.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `radial-gradient(circle at 50% 40%, var(--theme-hero-glow), transparent 60%)`,
        }}
      />

      <div className="page-container relative z-10 flex flex-col items-center text-center gap-8 py-20">
        {/* Subtitle badge */}
        <span className="text-primary font-arabic text-label-caps block tracking-widest border border-primary/30 px-4 py-1 bg-primary/10">
          الجمهورية النيردية المتحدة — منذ تأسيسها حتى اليوم
        </span>

        {/* Main Title */}
        <h1 className="font-arabic text-headline-lg font-black text-on-surface leading-tight md:text-[64px] lg:text-[80px] drop-shadow-lg">
          الجمهورية النيردية<br />
          <span className="text-primary">المتحدة</span>
        </h1>

        {/* Description */}
        <p className="font-arabic text-body-lg text-on-surface-variant max-w-2xl leading-relaxed drop-shadow">
          واحدة من أقوى دول العالم، رائدة في مجالات التكنولوجيا والتطور والمدن الحديثة بقيادة 
          الرئيس القوي <strong className="text-primary">جو نيرد</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
          <a href="/nabza" className="btn-primary w-full sm:w-auto text-center">
            تعرف على الجمهورية
          </a>
          <a href="/history" className="btn-secondary w-full sm:w-auto text-center">
            استكشف تاريخها
          </a>
        </div>
      </div>
    </section>
  );
}
