import { FileText, MapPin, TrendingUp, Globe } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <div className="relative overflow-hidden py-8 sm:py-12 lg:py-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F6B842]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#527E5F]/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20 shadow-sm">
            <FileText className="w-4 h-4 text-[#527E5F]" strokeWidth={2.5} />
            <span className="text-[#527E5F] tracking-wide">Real Impact Stories</span>
          </div>

          <div>
            <h1 className="mb-4 sm:mb-6 tracking-tight text-gray-900 leading-tight">
              Case Studies & Reports
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Real-world implementations demonstrating measurable clean energy impact across Africa and beyond.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">24</div>
              <div className="text-xs text-gray-600 tracking-wide">Active Projects</div>
            </div>
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">12</div>
              <div className="text-xs text-gray-600 tracking-wide">Countries</div>
            </div>
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">47K+</div>
              <div className="text-xs text-gray-600 tracking-wide">Beneficiaries</div>
            </div>
          </div>
        </div>

        {/* Right: Visual element */}
        <div className="relative">
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Map placeholder with location pins */}
            <div className="aspect-[4/3] rounded-2xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 sm:space-y-5 p-4 sm:p-8">
                  <div className="relative inline-block">
                    <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-[#527E5F] mx-auto opacity-20" strokeWidth={1.5} />
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#527E5F] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-2 tracking-tight">Global Reach</div>
                    <div className="text-sm text-gray-600">Projects across 3 continents</div>
                  </div>
                </div>
              </div>

              {/* Decorative location markers */}
              <div className="absolute top-1/4 left-1/3">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#527E5F] rounded-full animate-pulse shadow-lg" />
                  <div className="absolute inset-0 w-4 h-4 bg-[#527E5F] rounded-full animate-ping opacity-75" />
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#F57B44] rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-0 w-4 h-4 bg-[#F57B44] rounded-full animate-ping opacity-75" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#F6B842] rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1s" }} />
                  <div className="absolute inset-0 w-4 h-4 bg-[#F6B842] rounded-full animate-ping opacity-75" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </div>

            {/* Impact summary */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#527E5F]/5 border border-[#527E5F]/20">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#527E5F] flex items-center justify-center shadow-md">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-600 mb-1">Total CO₂ Avoided</div>
                  <div className="text-gray-900 tracking-tight">8,847 tCO₂e</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
