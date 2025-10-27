import { Database, ShieldCheck, ShoppingCart } from "lucide-react";

export function HowItWorksBuyers() {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Source",
      description: "Data captured and signed from real devices",
      detail: "RanaMeter devices deployed at solar sites continuously capture energy production data with cryptographic signatures, creating an immutable record.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Verify",
      description: "MRV process ensures authenticity, prevents double count",
      detail: "Multi-layer verification checks device integrity, validates signatures, cross-references registry data, and applies anti-double-counting algorithms.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Acquire",
      description: "Purchase verified units with traceable provenance",
      detail: "Browse available credits, filter by criteria, and purchase with complete documentation including source metadata, verification proofs, and impact metrics.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From solar generation to verified credit in three steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6">
                <span className="text-5xl opacity-10 tracking-tight">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>

              {/* Connector line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#527E5F]/30 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
