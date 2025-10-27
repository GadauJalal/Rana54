import { Lock, Key, UserCheck, Server, Shield } from "lucide-react";

export function SecurityPrivacy() {
  const securityFeatures = [
    {
      icon: Key,
      title: "Device Key Management",
      description: "HSM-backed server keys with per-meter keypairs ensure cryptographic security at every layer.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Granular permissions control who can view, modify, and export data across the platform.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Shield,
      title: "PII Minimization",
      description: "Only essential personal data collected, with encrypted storage and access controls.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Server,
      title: "Regional Data Hosting",
      description: "Optional data residency in specific geographic regions for compliance requirements.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.4)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#527E5F]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Lock className="w-4 h-4 text-[#F6B842]" />
            <span className="text-white/90 tracking-wide">Security & Privacy</span>
          </div>
          <h2 className="text-5xl mb-4 tracking-tight text-white">Enterprise-Grade Protection</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Built with security-first architecture and privacy by design
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2 tracking-wide">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance badges */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SOC 2 Type II Ready",
              "GDPR Compliant",
              "ISO 27001 Standards",
              "End-to-End Encryption",
              "Regular Security Audits"
            ].map((badge, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
              >
                <span className="text-white/90 tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
