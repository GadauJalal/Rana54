import { DollarSign, TrendingUp, BarChart3, Leaf } from "lucide-react";

export function EconomicsImpact() {
  const kpis = [
    {
      icon: BarChart3,
      value: "125M+",
      label: "kWh Tracked",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Leaf,
      value: "62K+",
      label: "Tonnes CO₂ Avoided",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Total Payouts",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: TrendingUp,
      value: "38K+",
      label: "Credits Issued",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Economics & Impact</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transparent value creation for homeowners and businesses
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Earnings */}
        <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-white tracking-wide">User Earnings Model</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">Revenue share:</span> Users earn a percentage per issued energy attribute unit
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">Transparent fees:</span> Complete breakdown of platform and transaction costs
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">Automated payouts:</span> Direct to wallet with detailed earning reports
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-white/70 text-sm">
              No hidden fees. Full visibility into your clean energy earnings.
            </p>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-white tracking-wide">Business Benefits</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">High-integrity:</span> Device-level provenance for every credit
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">Granular data:</span> Time-stamped, geo-tagged generation records
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="text-[#F6B842]">Story-ready:</span> Impact narratives backed by verified data
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Premium assets with unmatched traceability for ESG reporting.
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl text-gray-900 mb-1 tracking-tight">{kpi.value}</div>
              <div className="text-gray-600">{kpi.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
