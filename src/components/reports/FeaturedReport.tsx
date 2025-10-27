import { Download, FileText, Zap, Leaf, Award, Users } from "lucide-react";

export function FeaturedReport() {
  const quickStats = [
    { label: "kWh Tracked", value: "12.4M", icon: Zap },
    { label: "CO₂ Saved", value: "8,350", unit: "tCO₂e", icon: Leaf },
    { label: "Credits Issued", value: "6,200", icon: Award },
    { label: "Beneficiaries", value: "45,000+", icon: Users },
  ];

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          Featured Report
        </h2>
        <p className="text-lg text-gray-600">
          Our most recent impact and performance analysis
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: Report Cover Mockup */}
          <div className="bg-gray-50 p-12 flex items-center justify-center border-r border-gray-200">
            <div className="relative max-w-sm w-full">
              {/* Report Cover */}
              <div className="bg-[#F57B44] rounded-2xl p-10 shadow-2xl transform perspective-1000 rotate-y-5">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-white/80 mb-2 tracking-wide uppercase">
                      Q3 2025 Impact Report
                    </p>
                    <h3 className="text-3xl text-white mb-3 tracking-tight leading-tight">
                      Verified Clean Energy Impact
                    </h3>
                    <p className="text-base text-white/90 leading-relaxed">
                      Kenya, Uganda & Tanzania Performance Review
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-white/60">
                      Published: October 15, 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle shadow for depth */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-[#F57B44]/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          {/* Right: Report Details */}
          <div className="p-10">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-[#F57B44]/10 text-[#F57B44] rounded-lg text-sm mb-4">
                Impact Report
              </div>
              <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">
                Q3 2025 Impact Report
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive analysis of our clean energy tracking across East Africa, including device performance metrics, verified carbon savings, and community economic impact from July through September 2025.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F57B44]"></span>
                  Version 1.0
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  October 15, 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  4.8 MB PDF
                </span>
              </div>

              <button className="w-full px-8 py-4 bg-[#F57B44] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mb-8">
                <Download className="w-5 h-5" />
                <span className="tracking-wide">Download Full Report</span>
              </button>
            </div>

            {/* Quick Stats Preview */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg text-gray-900 mb-6 tracking-tight">
                Quick Stats Preview
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      <Icon className="w-5 h-5 text-[#F57B44] mb-2" />
                      <div className="text-2xl text-gray-900 mb-1">
                        {stat.value}
                        {stat.unit && (
                          <span className="text-sm text-gray-600 ml-1">
                            {stat.unit}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
