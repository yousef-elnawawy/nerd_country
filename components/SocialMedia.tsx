import Image from "next/image";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia() {
  const socialAccounts = [
    {
      name: "قناة اليوتيوب",
      handle: "@جو_نيرد",
      link: "https://youtube.com/@%D8%AC%D9%88_%D9%86%D9%8A%D8%B1%D8%AF",
      icon: <FaYoutube className="h-6 w-6 text-primary" />,
    },
    {
      name: "إنستغرام",
      handle: "joe._.nerd",
      link: "https://instagram.com/joe._.nerd",
      icon: <FaInstagram className="h-6 w-6 text-primary" />,
    },
    {
      name: "حساب تويتر",
      handle: "JOE_EGY_NERD",
      link: "https://twitter.com/JOE_EGY_NERD",
      icon: <FaXTwitter className="h-6 w-6 text-primary" />,
    },
    {
      name: "مستودع جيت هاب",
      handle: "yousef-elnawawy",
      link: "https://github.com/yousef-elnawawy",
      icon: <FaGithub className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="youtube" className="py-24 border-t border-surface-container/30 relative bg-surface-container-lowest/20">
      <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right Column: Text & Channels */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-right">
          <h2 className="font-latin text-headline-lg font-black text-on-surface">
           حساباتي
          </h2>
          <div className="w-20 h-1 bg-primary mb-2" />
          
          <p className="font-arabic text-body-lg text-on-surface-variant leading-relaxed">
            يمكنك التواصل معي أيضا على مواقع التواصل الاجتماعي الاتية , وهذا فيديو من قناتي المتخصصة في محتوى البرمجة
          </p>

          {/* Social Channels List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {socialAccounts.map((account, idx) => (
              <a
                key={idx}
                href={account.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-surface-container-low border border-surface-container-high transition-all duration-300 hover:border-primary-container"
              >
                <div className="flex items-center gap-3 flex-row-reverse justify-start">
                  <div className="p-2 bg-surface-container-lowest border border-surface-container-high group-hover:scale-105 transition-transform">
                    {account.icon}
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-arabic text-body-md font-bold text-on-surface">
                      {account.name}
                    </span>
                    <span className="font-latin text-sm text-on-surface-variant/70">
                      {account.handle}
                    </span>
                  </div>
                </div>
                {/* Arrow sign */}
                <span className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-[-4px] transition-all">
                  ←
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Left Column: Video Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <a
            href={"https://youtu.be/qaoP0vV4rlA?si=skh8OYahb0q2T1iZ"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[550px] aspect-video relative group border border-surface-container-high overflow-hidden cursor-pointer"
          >
            {/* Hover overlay glow */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
            
            <Image
              src="/images/video.avif"
              alt="عالم التقنية يوتيوب"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center border border-primary/40 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary">
                <svg
                  className="h-8 w-8 fill-current text-primary group-hover:text-on-primary ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-background/90 border-t border-surface-container-high z-20 flex justify-between items-center flex-row-reverse">
              <span className="font-arabic text-sm text-on-surface font-bold">شاهد أحدث الفيديوهات التعليمية</span>
              <span className="font-latin text-xs text-primary font-bold">YOUTUBE CHANNEL</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
