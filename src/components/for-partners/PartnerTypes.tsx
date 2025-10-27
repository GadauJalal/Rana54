import { Wrench, Package, Users } from "lucide-react";

export function PartnerTypes() {
  const partnerTypes = [
    {
      icon: Wrench,
      title: "Installers / EPCs",
      tagline: "Expand your offering with RanaMeter devices",
      benefits: [
        "Add verified monitoring to every installation",
        "Differentiate with carbon-credit-eligible systems",
        "Earn commissions on device sales and data",
        "Access training and technical support"
      ],
      gradient: "from-[#527E5F] to-[#3d5d48]",
      examples: "Solar EPCs, electrical contractors, energy service companies"
    },
    {
      icon: Package,
      title: "Distributors / Retailers",
      tagline: "Bundle Rana devices for local solar markets",
      benefits: [
        "Wholesale pricing on RanaMeter hardware",
        "Co-branded marketing and sales materials",
        "Revenue share on deployed units",
        "Exclusive territory opportunities"
      ],
      gradient: "from-[#F6B842] to-[#F57B44]",
      examples: "Solar product distributors, off-grid retailers, energy equipment suppliers"
    },
    {
      icon: Users,
      title: "Programs / NGOs",
      tagline: "Deploy impact-verified solar for communities",
      benefits: [
        "Demonstrate measurable program outcomes",
        "Connect beneficiaries to carbon revenue",
        "Real-time monitoring and reporting",
        "Custom deployment support"
      ],
      gradient: "from-[#F57B44] to-[#e06a33]",
      examples: "Development NGOs, energy access programs, impact investors"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Partner Types</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Solutions tailored to your business model
        </p>
      </div>

      {/* Partner cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partnerTypes.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#F57B44]/30 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Header */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{partner.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{partner.tagline}</p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-6">
                {partner.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#F57B44] mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Examples */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  {partner.examples}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
