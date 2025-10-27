import { Plug, Smartphone, Coins } from "lucide-react";

export function HowItWorksUsers() {
  const steps = [
    {
      number: "01",
      icon: Plug,
      title: "Install RanaMeter",
      description: "Pair with app",
      detail: "Quick installation by an approved installer. Connect your RanaMeter device to your solar system and pair it with the RanaOS mobile app.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      number: "02",
      icon: Smartphone,
      title: "App Records & Verifies",
      description: "Your energy is tracked",
      detail: "RanaOS automatically records every kilowatt-hour with device-level signatures, running integrity checks in real-time.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      number: "03",
      icon: Coins,
      title: "Convert to Payouts",
      description: "Verified units → credits",
      detail: "Your verified energy units are converted into tradeable credits and transferred to your wallet. Watch your earnings grow automatically.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Three simple steps from installation to earnings
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
