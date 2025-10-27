import { TrendingUp, Zap, Users, Award } from "lucide-react";

export function ImpactSnapshot() {
  const stats = [
    {
      icon: TrendingUp,
      value: "12,847",
      unit: "tCO₂e",
      label: "CO₂ Avoided",
      color: "#527E5F",
      bgColor: "bg-[#527E5F]/10"
    },
    {
      icon: Zap,
      value: "8,542,163",
      unit: "kWh",
      label: "Energy Tracked",
      color: "#F6B842",
      bgColor: "bg-[#F6B842]/10"
    },
    {
      icon: Users,
      value: "127",
      unit: "+",
      label: "Communities Impacted",
      color: "#F57B44",
      bgColor: "bg-[#F57B44]/10"
    },
    {
      icon: Award,
      value: "9,284",
      unit: "",
      label: "Credits Issued",
      color: "#527E5F",
      bgColor: "bg-[#527E5F]/10"
    }
  ];

  return (
    <div className="py-12 sm:py-16 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F6B842]/10 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20 mb-4 sm:mb-6">
          <Award className="w-4 h-4 text-[#527E5F]" strokeWidth={2.5} />
          <span className="text-[#527E5F] tracking-wide text-sm">VERIFIED IMPACT</span>
        </div>
        <h2 className="mb-4 tracking-tight text-gray-900">
          Impact Snapshot
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Cumulative global climate impact tracked and verified through our RanaMeter network.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: stat.color }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Counter */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <div className="text-gray-900 tabular-nums">
                    {stat.value}
                  </div>
                  {stat.unit && (
                    <div className="text-gray-500">
                      {stat.unit}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-600 tracking-wide">
                  {stat.label}
                </div>
              </div>

              {/* Verified badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded-full ${stat.bgColor} border border-current opacity-60`} style={{ borderColor: stat.color }}>
                <div className="w-2 h-2 bg-current rounded-full" style={{ color: stat.color }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional context */}
      <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div>
            <div className="text-gray-900 mb-2">154</div>
            <div className="text-sm text-gray-600">Active Countries</div>
          </div>
          <div>
            <div className="text-gray-900 mb-2">2.4M+</div>
            <div className="text-sm text-gray-600">Beneficiaries</div>
          </div>
          <div>
            <div className="text-gray-900 mb-2">$8.7M</div>
            <div className="text-sm text-gray-600">Value Created</div>
          </div>
        </div>
      </div>
    </div>
  );
}
