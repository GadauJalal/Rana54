import { Users, Zap, DollarSign, MapPin, TrendingUp } from "lucide-react";

export function SocialEconomicImpact() {
  const impacts = [
    {
      icon: Users,
      value: "12,400+",
      label: "People with Energy Access",
      description: "Communities powered by funded solar systems"
    },
    {
      icon: DollarSign,
      value: "$2.8M",
      label: "Direct Earnings to Users",
      description: "Payments to solar system owners across Africa"
    },
    {
      icon: Zap,
      value: "18.5M",
      label: "kWh Clean Energy",
      description: "Verified solar generation from funded sites"
    },
    {
      icon: TrendingUp,
      value: "9,200",
      label: "Tonnes CO₂ Avoided",
      description: "Measurable climate impact from your purchases"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Social & Economic Impact</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Every credit purchase creates real economic opportunity and measurable climate action
        </p>
      </div>

      {/* Impact stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;
          const gradients = [
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F6B842] to-[#F57B44]",
            "from-[#F57B44] to-[#e06a33]",
            "from-[#527E5F] to-[#3d5d48]"
          ];
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/30 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-md mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-3xl text-gray-900 mb-2 tracking-tight">{impact.value}</div>
              <div className="text-gray-700 mb-2">{impact.label}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{impact.description}</div>
            </div>
          );
        })}
      </div>

      {/* Interactive map section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <MapPin className="w-4 h-4 text-[#F6B842]" />
              <span className="text-white tracking-wide">Impact Map</span>
            </div>
            <h3 className="text-3xl text-white mb-4 tracking-tight">
              Where Your Credits Make a Difference
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore the geographic distribution of funded solar sites and see the real-world impact of your carbon credit purchases.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl text-[#F6B842] mb-1">Kenya</div>
                <div className="text-sm text-white/70">840 sites</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl text-[#F6B842] mb-1">Nigeria</div>
                <div className="text-sm text-white/70">720 sites</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl text-[#F6B842] mb-1">Ghana</div>
                <div className="text-sm text-white/70">480 sites</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="text-2xl text-[#F6B842] mb-1">S. Africa</div>
                <div className="text-sm text-white/70">360 sites</div>
              </div>
            </div>
            <button className="px-6 py-3 rounded-xl bg-white text-[#527E5F] hover:bg-white/90 shadow-lg transition-all duration-300">
              Explore Interactive Map
            </button>
          </div>
        </div>
      </div>

      {/* Community impact story */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-2xl text-gray-900 mb-4 tracking-tight">Real Communities, Real Impact</h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you purchase Rana54 credits, you're not just offsetting carbon—you're funding reliable energy access in underserved communities, creating local jobs for installers and technicians, and enabling solar users to earn sustainable income from their clean energy production.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> Energy access
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> Job creation
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> Sustainable income
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-gray-200">
              <span className="text-[#527E5F]">✓</span> Climate action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
