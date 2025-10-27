import { ShieldCheck, Eye, Heart } from "lucide-react";

export function WhyRana54Credits() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Verifiable",
      description: "Device-level data from RanaMeter and RanaID",
      detail: "Every credit is backed by cryptographically signed data from tamper-evident hardware deployed at real solar sites. No estimates, no extrapolations—just verified kilowatt-hours.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "Real-time dashboards and audit-ready reports",
      detail: "Full visibility into credit provenance with live monitoring dashboards, downloadable attestations, and complete audit trails. Every data point traceable to its source.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Heart,
      title: "Impactful",
      description: "Direct funding to solar users and communities",
      detail: "Your purchases directly compensate solar users in emerging markets, creating real economic opportunity while supporting verified climate action.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Why Rana54 Credits</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The most trustworthy carbon credits on the market
        </p>
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
