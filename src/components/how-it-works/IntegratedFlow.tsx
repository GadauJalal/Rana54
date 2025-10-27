import { Sun, Activity, Smartphone, ShieldCheck, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function IntegratedFlow() {
  const flowSteps = [
    {
      icon: Activity,
      label: "Data Captured",
      description: "Real-time energy monitoring",
      color: "#527E5F"
    },
    {
      icon: Smartphone,
      label: "Analyzed",
      description: "Performance tracking",
      color: "#F57B44"
    },
    {
      icon: ShieldCheck,
      label: "Verified",
      description: "Credits generated",
      color: "#F6B842"
    },
    {
      icon: DollarSign,
      label: "Payment Made",
      description: "Earnings distributed",
      color: "#F6B842"
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-12 lg:p-16 border-2 border-gray-200 shadow-2xl">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#527E5F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/5 rounded-full blur-3xl" />

      <div className="relative z-10 space-y-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#527E5F]" />
            <span className="text-[#527E5F] tracking-wide">Complete Ecosystem</span>
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight text-gray-900">
            From Sunlight to Verified Impact
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how every component works together in perfect harmony to create measurable, verifiable, and monetizable clean energy impact.
          </p>
        </div>

        {/* Flow visualization */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#F6B842] transform -translate-y-1/2 hidden lg:block opacity-20" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" style={{ backgroundColor: step.color }}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Label */}
                  <div>
                    <h3 className="text-gray-900 mb-1 tracking-wide">{step.label}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-300 hidden lg:block absolute top-10 transform rotate-0" style={{ left: `${(index + 0.7) * 25}%` }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed flow explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-transparent border border-[#527E5F]/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center mb-4 shadow-md">
              <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-2 tracking-wide">RanaMeter Captures</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              IoT device monitors energy at the source, signing each reading with a unique device key for tamper-proof verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F57B44]/5 to-transparent border border-[#F57B44]/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center mb-4 shadow-md">
              <Smartphone className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-2 tracking-wide">RanaOS Analyzes</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cross-platform app displays live data, CO₂ impact, and earnings while managing sites and sending alerts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F6B842]/5 to-transparent border border-[#F6B842]/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6B842] to-[#F57B44] flex items-center justify-center mb-4 shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-2 tracking-wide">RanaID Verifies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Digital identity layer verifies data, prevents double-counting, and generates registry-compatible carbon credits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F6B842]/5 to-[#F57B44]/5 border border-[#F6B842]/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6B842] to-[#d9a131] flex items-center justify-center mb-4 shadow-md">
              <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-2 tracking-wide">RanaPay Distributes</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Secure payment platform processes carbon credit earnings with fast settlement and multiple payout options.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:from-[#3d5d48] hover:to-[#527E5F] shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8"
          >
            Explore the Ecosystem
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#527E5F] text-[#527E5F] hover:bg-[#527E5F]/5 rounded-xl px-8"
          >
            Join the Pilot
          </Button>
        </div>
      </div>
    </div>
  );
}
