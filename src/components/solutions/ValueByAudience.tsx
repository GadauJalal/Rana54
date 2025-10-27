import { Users, Building2, Wrench, ArrowRight } from "lucide-react";

export function ValueByAudience() {
  const audiences = [
    {
      icon: Users,
      title: "Solar Users",
      subtitle: "Homeowners & SMEs",
      gradient: "from-[#527E5F] to-[#3d5d48]",
      benefits: [
        "Track kWh, savings, and CO₂ avoided in real-time",
        "Earn from verified energy attributes automatically",
        "Simple onboarding via mobile app",
        "Transparent impact reporting"
      ]
    },
    {
      icon: Building2,
      title: "Businesses",
      subtitle: "REC/Carbon/ESG",
      gradient: "from-[#F57B44] to-[#e06a33]",
      benefits: [
        "Device-level traceability for every credit",
        "Anti-double-count safeguards built-in",
        "API export for seamless audits",
        "High-integrity provenance data"
      ]
    },
    {
      icon: Wrench,
      title: "Installers & Programs",
      subtitle: "EPCs & Operators",
      gradient: "from-[#F6B842] to-[#F57B44]",
      benefits: [
        "New revenue via device resale + financing",
        "Fleet dashboards for portfolio management",
        "Bulk provisioning and deployment tools",
        "White-label integration options"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Value by Audience</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tailored solutions for every stakeholder in the clean energy ecosystem
        </p>
      </div>

      {/* Audience cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon badge */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{audience.title}</h3>
              <p className="text-gray-500 mb-6">{audience.subtitle}</p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-6">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#527E5F] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-600 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
