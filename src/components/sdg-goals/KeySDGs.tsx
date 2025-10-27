import { Zap, Cpu, Building2, Leaf } from "lucide-react";

const sdgs = [
  {
    number: "7",
    title: "Affordable and Clean Energy",
    description: "Expanding renewable access across Africa.",
    icon: Zap,
    gradient: "from-[#F6B842] to-[#F57B44]",
  },
  {
    number: "9",
    title: "Industry, Innovation and Infrastructure",
    description: "Enabling data-driven energy infrastructure.",
    icon: Cpu,
    gradient: "from-[#527E5F] to-[#3d5d48]",
  },
  {
    number: "11",
    title: "Sustainable Cities and Communities",
    description: "Powering local resilience through solar networks.",
    icon: Building2,
    gradient: "from-[#F57B44] to-[#e06a33]",
  },
  {
    number: "13",
    title: "Climate Action",
    description: "Measuring, verifying, and monetizing carbon reductions.",
    icon: Leaf,
    gradient: "from-[#527E5F] to-[#3d5d48]",
  },
];

export function KeySDGs() {
  return (
    <section>
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="mb-4 sm:mb-6 tracking-tight text-gray-900 px-4">
          Key SDGs We Advance
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto px-4">
          Our technology and approach create measurable progress toward multiple global sustainability targets.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {sdgs.map((sdg, index) => {
          const Icon = sdg.icon;
          return (
            <div
              key={sdg.number}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-gray-300 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* SDG Number badge */}
                <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${sdg.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                  <span className="text-white">
                    {sdg.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-gray-900 tracking-tight leading-tight pr-2">
                      {sdg.title}
                    </h3>
                    <Icon className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#527E5F] transition-colors duration-500`} />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
