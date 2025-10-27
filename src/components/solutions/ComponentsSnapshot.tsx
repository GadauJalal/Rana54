import { Cpu, Smartphone, Fingerprint } from "lucide-react";

export function ComponentsSnapshot() {
  const components = [
    {
      icon: Cpu,
      name: "RanaMeter",
      tagline: "Hardware Intelligence",
      gradient: "from-[#F57B44] to-[#e06a33]",
      features: [
        "Edge metering with tamper-evident logs",
        "Secure key storage and signatures",
        "Offline buffering for reliability",
        "Cellular/Wi-Fi backhaul connectivity",
        "Real-time kWh capture at source"
      ]
    },
    {
      icon: Smartphone,
      name: "RanaOS",
      tagline: "App + Web Platform",
      gradient: "from-[#527E5F] to-[#3d5d48]",
      features: [
        "Live kWh, CO₂, and earnings tracking",
        "Integrated wallet and payouts",
        "Smart alerts and notifications",
        "Fleet management dashboards",
        "CSV/API export for data access"
      ]
    },
    {
      icon: Fingerprint,
      name: "RanaID",
      tagline: "Verified Identity Layer",
      gradient: "from-[#F6B842] to-[#F57B44]",
      features: [
        "Unique asset identity per device/site",
        "Customizable issuance rules",
        "Direct linkage to registries",
        "Marketplace integration ready",
        "Audit trail and provenance tracking"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Components Snapshot</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Three integrated layers powering the verified energy ecosystem
        </p>
      </div>

      {/* Components grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {components.map((component, index) => {
          const Icon = component.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`relative p-8 bg-gradient-to-br ${component.gradient} overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                  <h3 className="text-white mb-1 tracking-wide">{component.name}</h3>
                  <p className="text-white/80">{component.tagline}</p>
                </div>
              </div>

              {/* Features list */}
              <div className="p-8">
                <ul className="space-y-3">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#527E5F] mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#527E5F]/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
