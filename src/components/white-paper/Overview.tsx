import { BookOpen, Users, FileText } from "lucide-react";

export function Overview() {
  const whatItCovers = [
    "The Rana54 ecosystem (RanaMeter, RanaOS, RanaID)",
    "Data verification and MRV methodology",
    "Carbon savings and REC conversion model",
    "Governance, partnerships, and expansion roadmap",
  ];

  const targetReaders = [
    "Investors",
    "Partners",
    "Regulators",
    "ESG Analysts",
  ];

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: What it covers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl tracking-tight text-gray-900">
              Overview
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
                What It Covers
              </h3>
              <ul className="space-y-3">
                {whatItCovers.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#527E5F] mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
                Target Readers
              </h3>
              <div className="flex flex-wrap gap-2">
                {targetReaders.map((reader, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#527E5F]/10 text-[#527E5F] rounded-lg text-sm"
                  >
                    {reader}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual mockup */}
        <div className="relative">
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)]">
            {/* 3D Book-style mockup */}
            <div className="relative">
              {/* Book cover */}
              <div className="bg-[#527E5F] rounded-2xl p-12 shadow-2xl transform perspective-1000 rotate-y-5">
                <div className="space-y-8">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl text-white mb-4 tracking-tight">
                      Rana54 White Paper
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      Verified Clean Energy Infrastructure for Africa
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <p className="text-sm text-white/60">Version 2.1 • 2025</p>
                  </div>
                </div>
              </div>

              {/* Subtle shadow for depth */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-[#527E5F]/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
