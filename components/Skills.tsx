export default function Skills() {
  const skillCategories = [
    {
      title: "البرمجيات واللغات",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React & Next.js", level: 85 },
        { name: "PHP & Laravel", level: 80 },
        { name: "Python", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-surface-container/30 relative">
      <div className="page-container flex flex-col gap-12 text-right">

        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-latin text-headline-lg font-black text-on-surface">
            المهارات التقنية
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </div>

        {/* Full-Width Skills Grid */}
        <div className="grid grid-cols-1 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card bg-surface-container-low border border-surface-container-high p-8 flex flex-col gap-6 text-right transition-all hover:border-primary-container"
            >
              {/* Icon & Category Title */}
              <div className="flex items-center gap-4 flex-row-reverse justify-start">
                <div className="p-3 bg-surface-container-lowest border border-surface-container-high">
                  {category.icon}
                </div>
                <h3 className="font-arabic text-headline-sm font-bold text-on-surface">
                  {category.title}
                </h3>
              </div>

              {/* Category Divider */}
              <hr className="divider" />

              {/* Skills Progress List - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between flex-row-reverse text-body-md font-medium text-on-surface-variant">
                      <span className="font-arabic text-right">{skill.name}</span>
                      <span className="font-latin">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-1 bg-surface-container-highest">
                      <div
                        className="h-full bg-primary-container transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
