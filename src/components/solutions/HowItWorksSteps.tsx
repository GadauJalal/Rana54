import { Sun, Activity, ShieldCheck, DollarSign } from "lucide-react";

export function HowItWorksSteps() {
  const steps = [
    {
      number: "01",
      title: "Generate",
      description: "Solar → kWh captured at source.",
      detail: "Clean energy production measured in real-time at the point of generation.",
      icon: Sun,
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      number: "02",
      title: "Measure",
      description: "RanaMeter signs readings with device identity.",
      detail: "Hardware-backed signatures ensure tamper-proof data collection.",
      icon: Activity,
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      number: "03",
      title: "Verify",
      description: "Data flows to RanaOS; integrity checks + project rules.",
      detail: "Multi-layered validation ensures data quality and compliance.",
      icon: ShieldCheck,
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      number: "04",
      title: "Monetize",
      description: "Issuable credits/attributes → payouts & impact reporting.",
      detail: "Transform verified energy into tradeable value and transparent earnings.",
      icon: DollarSign,
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Four seamless steps from generation to monetization
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6">
                <span className="text-5xl opacity-10 tracking-tight">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-3 tracking-wide">{step.title}</h3>
              <p className="text-gray-700 mb-3">{step.description}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>

              {/* Connector line (except last item on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#527E5F]/30 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
