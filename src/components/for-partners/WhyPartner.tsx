import { DollarSign, ShieldCheck, TrendingUp } from "lucide-react";

export function WhyPartner() {
  const reasons = [
    {
      icon: DollarSign,
      title: "New Revenue",
      description: "Offer verified clean-energy devices and earn on every deployment",
      detail: "Generate recurring revenue streams from device sales, installation services, data monetization, and carbon credit sharing. Our partner commission structure rewards growth and quality deployments.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      description: "Verified data, simple dashboards, automatic reporting",
      detail: "Give your clients confidence with tamper-evident hardware and real-time verification. Access partner dashboards showing installation stats, client sites, and revenue tracking—all in one place.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: TrendingUp,
      title: "Growth Access",
      description: "Tap into carbon finance and energy programs",
      detail: "Unlock new funding sources through carbon markets and impact investment. Connect your installations to global ESG buyers and development finance programs seeking verified clean energy projects.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Why Partner With Rana54</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build your business while driving Africa's energy transformation
        </p>
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#F57B44]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{reason.title}</h3>
              <p className="text-gray-700 mb-4">{reason.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.detail}</p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
