import { CheckCircle2, MapPin, Wrench, Play, ArrowRight } from "lucide-react";

export function GettingStarted() {
  const eligibilityChecks = [
    { label: "System size: 2kW or larger", icon: CheckCircle2 },
    { label: "Location: Service area coverage", icon: MapPin },
    { label: "Internet: Wi-Fi or cellular available", icon: CheckCircle2 },
    { label: "Installation: Access to meter point", icon: Wrench }
  ];

  const timeline = [
    {
      step: "01",
      title: "Check Eligibility",
      description: "Confirm your system meets requirements",
      duration: "5 minutes",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      step: "02",
      title: "Quick Install",
      description: "Approved installer sets up RanaMeter",
      duration: "Under 1 day",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      step: "03",
      title: "Verify & Track",
      description: "Site verification and tracking begins",
      duration: "24-48 hours",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      step: "04",
      title: "First Payout",
      description: "Receive your first earnings",
      duration: "30 days",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Getting Started</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From eligibility check to first payout in under 45 days
        </p>
      </div>

      {/* Eligibility checklist */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-8 shadow-lg">
        <h3 className="text-gray-900 mb-6 tracking-wide text-center">Eligibility Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {eligibilityChecks.map((check, index) => {
            const Icon = check.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
              >
                <Icon className="w-5 h-5 text-[#527E5F] flex-shrink-0" strokeWidth={2.5} />
                <span className="text-gray-700">{check.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {timeline.map((item, index) => (
          <div key={index} className="relative">
            <div className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Step number */}
              <div className="absolute top-4 right-4 text-4xl opacity-10 tracking-tight">
                {item.step}
              </div>

              {/* Gradient bar */}
              <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${item.gradient} mb-4`} />

              {/* Content */}
              <h4 className="text-gray-900 mb-2 tracking-wide">{item.title}</h4>
              <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
              
              {/* Duration badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700">
                <Play className="w-3 h-3" strokeWidth={2.5} />
                {item.duration}
              </div>
            </div>

            {/* Connector arrow (except last item) */}
            {index < timeline.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                <ArrowRight className="w-6 h-6 text-gray-300" strokeWidth={2} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Check your eligibility and connect with an approved installer in your area.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:shadow-lg transition-all duration-300 group">
            Check Eligibility
            <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-[#527E5F]/30 hover:shadow-lg transition-all duration-300">
            Find an Installer
          </button>
        </div>
      </div>
    </div>
  );
}
