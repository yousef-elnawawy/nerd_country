import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "منصات التواصل — الجمهورية النيردية المتحدة",
  description: "انضم إلى مجتمع الجمهورية النيردية المتحدة على منصات التواصل الاجتماعي.",
};

export default function SocialPage() {
  const platforms = [
    {
      name: "مجموعة انستغرام",
      handle: "الجمهورية النيردية",
      link: "https://ig.me/j/AbaUwOW8IoZ4j-7F/",
      icon: <FaInstagram className="h-8 w-8 text-primary" />,
      bgIcon: "📸",
      type: "GROUP",
      desc: "انضم إلى مجتمعنا على انستغرام وكن جزءاً من مواطني الجمهورية. تابع آخر الأخبار والإعلانات الرسمية والمحتوى الحصري من داخل الجمهورية النيردية.",
      isWide: true,
      buttonText: "انضم للمجموعة",
    },
    {
      name: "سيرفر ديسكورد",
      handle: "الجمهورية النيردية",
      link: "https://discord.com/invite/cFdz6jpGH",
      icon: <FaDiscord className="h-8 w-8 text-primary" />,
      bgIcon: "🎮",
      type: "SERVER",
      desc: "انضم إلى سيرفر الجمهورية على ديسكورد، حيث يجتمع مواطنو الجمهورية للنقاش والتحاور وتبادل المعرفة في كافة المجالات التكنولوجية.",
      isWide: true,
      buttonText: "انضم للسيرفر",
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
              background: `radial-gradient(circle at 40% 50%, var(--theme-hero-glow), transparent 50%)`,
            }}
          />
          <div className="page-container relative z-10">
            <span className="text-primary font-arabic text-label-caps block tracking-widest mb-4">
              التواصل مع الجمهورية
            </span>
            <h1 className="font-arabic text-headline-lg font-black text-on-surface mb-4">
              منصات التواصل
            </h1>
            <div className="w-20 h-1 bg-primary" />
          </div>
        </section>

        {/* Main Social Section */}
        <section className="py-24 relative">
          <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-right">
              <h2 className="font-arabic text-headline-lg font-black text-on-surface">
                كن مواطناً نيردياً
              </h2>
              <div className="w-20 h-1 bg-primary mb-2" />

              <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
                انضم إلى مجتمع الجمهورية النيردية المتحدة على منصات التواصل الاجتماعي وكن جزءاً
                من أكبر تجمع للعقول النيردية في العالم.
              </p>
              <p className="font-arabic text-body-md text-on-surface-variant/80 leading-relaxed">
                تابع الأخبار الرسمية، شارك في النقاشات التقنية، واكتشف محتوى حصري عن الجمهورية
                وإنجازاتها المذهلة.
              </p>

              {/* Platform Cards List */}
              <div className="flex flex-col gap-4 mt-4">
                {platforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 bg-surface-container-low border border-surface-container-high transition-all duration-300 hover:border-primary-container"
                  >
                    <div className="flex items-center gap-3 flex-row-reverse justify-start">
                      <div className="p-2 bg-surface-container-lowest border border-surface-container-high group-hover:scale-105 transition-transform">
                        {platform.icon}
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-arabic text-body-md font-bold text-on-surface">
                          {platform.name}
                        </span>
                        <span className="font-latin text-sm text-on-surface-variant/70">
                          {platform.handle}
                        </span>
                      </div>
                    </div>
                    {/* Arrow */}
                    <span className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-[-4px] transition-all">
                      ←
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Visual / Join Badge */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[500px] aspect-square relative border border-surface-container-high bg-surface-container-low flex flex-col items-center justify-center gap-6 overflow-hidden group hover:border-primary-container transition-all duration-300">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <span className="text-[80px] relative z-20">🌐</span>
                <div className="relative z-20 flex flex-col items-center gap-2 text-center px-8">
                  <span className="font-arabic text-headline-md font-black text-on-surface">
                    مجتمع الجمهورية
                  </span>
                  <span className="font-arabic text-body-md text-on-surface-variant">
                    انضم الآن وكن جزءاً من التاريخ
                  </span>
                  <div className="font-latin text-label-caps text-primary tracking-widest mt-2">
                    NERD REPUBLIC COMMUNITY
                  </div>
                </div>
                {/* Decorative border line */}
                <div className="absolute bottom-0 inset-x-0 p-4 border-t border-surface-container-high z-20 flex justify-between items-center flex-row-reverse">
                  <span className="font-arabic text-sm text-on-surface font-bold">جمهورية بلا حدود</span>
                  <span className="font-latin text-xs text-primary font-bold">NERD REPUBLIC</span>
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
