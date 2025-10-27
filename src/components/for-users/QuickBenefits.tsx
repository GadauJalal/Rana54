import { DollarSign, Eye, ShieldCheck } from "lucide-react";

export function QuickBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn",
      description: "Monetize verified clean energy",
      detail: "Every kilowatt-hour you generate is tracked, verified, and converted into tradeable credits that put money in your pocket.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Eye,
      title: "See",
      description: "Live kWh, bills saved, CO₂ avoided",
      detail: "Real-time visibility into your solar production, financial savings, and environmental impact—all in one beautiful dashboard.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "Device-level verification and anti-double-count",
      detail: "Hardware-backed signatures ensure your energy data is tamper-proof and uniquely yours—no duplicates, no disputes.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div
            key={index}
            className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <h3 className="text-gray-900 mb-2 tracking-wide">{benefit.title}</h3>
            <p className="text-gray-700 mb-4">{benefit.description}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{benefit.detail}</p>

            {/* Bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
          </div>
        );
      })}
    </div>
  );
}
