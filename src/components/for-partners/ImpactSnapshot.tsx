import { MapPin, Zap, TrendingDown, DollarSign, Users } from "lucide-react";

export function ImpactSnapshot() {
  const stats = [
    {
      icon: Zap,
      value: "18.5M",
      label: "kWh Tracked",
      description: "Total solar generation verified by partners",
      color: "text-[#F6B842]"
    },
    {
      icon: TrendingDown,
      value: "9,200",
      label: "Tonnes CO₂ Avoided",
      description: "Climate impact from partner deployments",
      color: "text-[#527E5F]"
    },
    {
      icon: DollarSign,
      value: "$2.8M",
      label: "Income Distributed",
      description: "Revenue shared with solar users",
      color: "text-[#F57B44]"
    },
    {
      icon: Users,
      value: "2,400+",
      label: "Sites Deployed",
      description: "Active installations across Africa",
      color: "text-[#F6B842]"
    }
  ];

  const regions = [
    { name: "Kenya", sites: 840, percentage: 35 },
    { name: "Nigeria", sites: 720, percentage: 30 },
    { name: "Ghana", sites: 480, percentage: 20 },
    { name: "South Africa", sites: 360, percentage: 15 }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Impact Snapshot</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Powered by our global partner network
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#F57B44]/30 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Icon className={`w-6 h-6 ${stat.color}`} strokeWidth={2.5} />
              </div>
              <div className={`text-3xl ${stat.color} mb-2 tracking-tight`}>{stat.value}</div>
              <div className="text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{stat.description}</div>
            </div>
          );
        })}
      </div>

      {/* Map section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white tracking-wide">Partner Network Map</span>
            </div>
            <h3 className="text-3xl text-white mb-4 tracking-tight">
              Where Our Partners Make a Difference
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore partner-driven deployments across Africa bringing verified clean energy to communities.
            </p>
          </div>

          {/* Regional breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {regions.map((region, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-2xl text-white mb-1">{region.name}</div>
                <div className="text-sm text-white/70 mb-2">{region.sites} sites</div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F6B842] rounded-full"
                    style={{ width: `${region.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 rounded-xl bg-white text-[#F57B44] hover:bg-white/90 shadow-lg transition-all duration-300">
              View Interactive Map
            </button>
          </div>
        </div>
      </div>

      {/* Partner spotlight */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-2xl text-gray-900 mb-4 tracking-tight">Powered by Our Partners</h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every installation, every verified kilowatt-hour, and every dollar of impact revenue is made possible by our network of dedicated partners bringing clean energy solutions to African communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> 120+ active partners
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> 15 countries
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> 99.2% uptime
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> $8.4M revenue generated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
