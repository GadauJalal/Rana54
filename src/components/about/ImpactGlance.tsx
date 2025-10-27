import { Zap, TrendingDown, Cpu, Users, ArrowRight } from "lucide-react";

export function ImpactGlance() {
  const stats = [
    {
      icon: Zap,
      value: "18.5M",
      unit: "kWh",
      label: "Energy Tracked",
      description: "Total verified solar generation",
      color: "text-[#F6B842]",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: TrendingDown,
      value: "9,200",
      unit: "tonnes",
      label: "CO₂ Avoided",
      description: "Measurable climate impact",
      color: "text-[#527E5F]",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Cpu,
      value: "2,400+",
      unit: "devices",
      label: "Devices Deployed",
      description: "RanaMeters in the field",
      color: "text-[#F57B44]",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Users,
      value: "12,400+",
      unit: "people",
      label: "Communities Reached",
      description: "Users with energy access",
      color: "text-[#F6B842]",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Impact at a Glance</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real numbers from real deployments across Africa
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Stats */}
              <div className={`relative text-4xl ${stat.color} mb-2 tracking-tight`}>{stat.value}</div>
              <div className="relative text-sm text-gray-500 mb-3">{stat.unit}</div>
              <div className="relative text-gray-900 mb-2 tracking-wide">{stat.label}</div>
              <div className="relative text-sm text-gray-600">{stat.description}</div>
            </div>
          );
        })}
      </div>

      {/* Impact visualization */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl text-white mb-4 tracking-tight">Growing Every Day</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              These numbers represent real systems generating real clean energy for real people. And they're growing with every installation.
            </p>
          </div>

          {/* Mini stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <div className="text-2xl text-[#F6B842] mb-1">15</div>
              <div className="text-sm text-white/70">Countries</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <div className="text-2xl text-[#F6B842] mb-1">120+</div>
              <div className="text-sm text-white/70">Partners</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <div className="text-2xl text-[#F6B842] mb-1">$2.8M</div>
              <div className="text-sm text-white/70">User Earnings</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <div className="text-2xl text-[#F6B842] mb-1">99.8%</div>
              <div className="text-sm text-white/70">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to impact stories */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <h4 className="text-2xl text-gray-900 mb-4 tracking-tight">See Our Impact Stories</h4>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Behind every statistic are real people and communities benefiting from verified clean energy.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:shadow-lg transition-all duration-300">
          Read Impact Stories
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
