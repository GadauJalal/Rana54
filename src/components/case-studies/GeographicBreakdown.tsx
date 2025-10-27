import { MapPin, TrendingUp } from "lucide-react";

export function GeographicBreakdown() {
  const regions = [
    {
      name: "East Africa",
      countries: ["Kenya", "Tanzania", "Uganda", "Rwanda"],
      projects: 14,
      households: "12,450",
      co2: "4,280 tCO₂e",
      color: "#527E5F"
    },
    {
      name: "West Africa",
      countries: ["Nigeria", "Ghana", "Senegal"],
      projects: 8,
      households: "8,920",
      co2: "3,140 tCO₂e",
      color: "#F57B44"
    },
    {
      name: "Southern Africa",
      countries: ["South Africa", "Zambia"],
      projects: 2,
      households: "1,840",
      co2: "1,427 tCO₂e",
      color: "#F6B842"
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20 mb-4 sm:mb-6">
          <span className="text-[#F6B842] tracking-wide text-sm">Global Presence</span>
        </div>
        <h2 className="mb-4 sm:mb-6 tracking-tight text-gray-900 px-4">
          Geographic Distribution
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Our projects span across Africa, bringing verified clean energy impact to diverse communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {regions.map((region, index) => (
          <div
            key={index}
            className="group p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500"
          >
            {/* Region header */}
            <div className="flex items-start justify-between mb-6 sm:mb-8">
              <div>
                <h3 className="text-gray-900 mb-2 sm:mb-3 tracking-tight">
                  {region.name}
                </h3>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#527E5F]" />
                  {region.projects} Active Projects
                </div>
              </div>
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500"
                style={{ backgroundColor: region.color }}
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Countries */}
            <div className="mb-6 sm:mb-8">
              <div className="text-sm text-gray-500 mb-3 tracking-wide">Countries:</div>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-xl text-sm tracking-wide border-2 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${region.color}15`,
                      color: region.color,
                      borderColor: `${region.color}30`
                    }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4 pt-6 border-t-2 border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 tracking-wide">Households</span>
                <span className="text-xl text-gray-900 tabular-nums">{region.households}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 tracking-wide">CO₂ Avoided</span>
                <span className="text-xl text-gray-900 tabular-nums">{region.co2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall stats */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20 shadow-xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#527E5F] flex items-center justify-center shadow-lg">
            <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-gray-900 tracking-tight">
            Combined Impact
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#F6B842]/30 hover:shadow-lg transition-all duration-300">
            <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">24</div>
            <div className="text-xs sm:text-sm text-gray-600 tracking-wide">Total Projects</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#F6B842]/30 hover:shadow-lg transition-all duration-300">
            <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">12</div>
            <div className="text-xs sm:text-sm text-gray-600 tracking-wide">Countries</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#F6B842]/30 hover:shadow-lg transition-all duration-300">
            <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">23,210</div>
            <div className="text-xs sm:text-sm text-gray-600 tracking-wide">Households</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#F6B842]/30 hover:shadow-lg transition-all duration-300">
            <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">8,847</div>
            <div className="text-xs sm:text-sm text-gray-600 tracking-wide">tCO₂e Avoided</div>
          </div>
        </div>
      </div>
    </div>
  );
}
