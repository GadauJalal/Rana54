import { Award, FileCheck, Lock, CheckCircle } from "lucide-react";

export function MethodologyStandards() {
  const standards = [
    {
      icon: Award,
      title: "Global Benchmarks",
      description: "Uses global emission benchmarks (e.g., IPCC, Verra, Gold Standard)."
    },
    {
      icon: FileCheck,
      title: "MRV Framework",
      description: "MRV (Measurement, Reporting, Verification) framework ensures transparency."
    },
    {
      icon: Lock,
      title: "Data Integrity",
      description: "Data integrity secured via device-level digital signatures."
    },
    {
      icon: CheckCircle,
      title: "Traceable Benefits",
      description: "Each unit of clean energy equals a traceable, verified climate benefit."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="mb-3 sm:mb-4 tracking-tight text-gray-900">
            Methodology & Standards
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our carbon calculation methodology adheres to internationally recognized standards and frameworks, ensuring credibility and market acceptance.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {standards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-gray-200 hover:border-[#527E5F]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#527E5F] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1 tracking-wide">
                      {standard.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {standard.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Standards badges */}
        <div className="relative">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20">
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-gray-900 mb-2 tracking-tight">
                  Recognized Standards
                </h3>
                <p className="text-sm text-gray-600">
                  Aligned with leading carbon registries
                </p>
              </div>

              {/* Standard badges grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "IPCC", subtitle: "Methodology" },
                  { name: "Verra", subtitle: "VCS Standard" },
                  { name: "Gold Standard", subtitle: "Certified" },
                  { name: "MRV", subtitle: "Framework" }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#527E5F] flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-gray-900 tracking-wide mb-1 text-sm sm:text-base">
                      {badge.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {badge.subtitle}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance note */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#527E5F] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-600">
                    All calculations audited by third-party verifiers and comply with international carbon accounting standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
