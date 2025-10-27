import { Activity, ShieldCheck, Coins, TrendingUp } from "lucide-react";

export function HowCarbonSavingWorks() {
  const steps = [
    {
      number: "01",
      icon: Activity,
      title: "Measure",
      description: "RanaMeter records exact renewable energy generated (kWh).",
      color: "#527E5F"
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Verify",
      description: "RanaID and RanaOS validate data authenticity and prevent duplication.",
      color: "#F57B44"
    },
    {
      number: "03",
      icon: Coins,
      title: "Convert",
      description: "Verified data is transformed into carbon savings or credits based on accepted emission factors.",
      color: "#F6B842"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Monetize & Reinvest",
      description: "Issued credits can be sold or offset, and proceeds support more installations.",
      color: "#527E5F"
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="mb-4 tracking-tight text-gray-900">
          How Carbon Saving Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          From measurement to monetization—a transparent, verified process at every step.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative p-5 sm:p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F6B842] shadow-lg flex items-center justify-center">
                <span className="text-white tracking-wide text-sm sm:text-base">{step.number}</span>
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md"
                style={{ backgroundColor: step.color }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 sm:mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M6 16H26M26 16L20 10M26 16L20 22"
                      stroke="#D1D5DB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
