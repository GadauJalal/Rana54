import { Zap, ShieldCheck, Wifi, Clock } from "lucide-react";

export function HardwareInstall() {
  const features = [
    {
      icon: Zap,
      title: "Universal Compatibility",
      description: "Works with standard solar inverters and panel configurations—no proprietary hardware required."
    },
    {
      icon: ShieldCheck,
      title: "Tamper-Evident Design",
      description: "Cryptographically sealed device with physical tamper detection for data integrity."
    },
    {
      icon: Wifi,
      title: "Offline Buffering",
      description: "Continues tracking even without connectivity. Data syncs automatically when connection restored."
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Typical install time under a day by certified installer. Non-invasive setup with minimal downtime."
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57B44]/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-white mb-4 tracking-tight">Hardware & Installation</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional-grade metering that works with your existing setup
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = [
              "from-[#527E5F] to-[#3d5d48]",
              "from-[#F57B44] to-[#e06a33]",
              "from-[#F6B842] to-[#F57B44]",
              "from-[#527E5F] to-[#3d5d48]"
            ];
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 tracking-wide">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Installation info */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-white mb-1 tracking-wide">Professional Installation Included</h4>
              <p className="text-white/70">
                All installations performed by certified technicians with full warranty coverage.
              </p>
            </div>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F57B44] to-[#e06a33] text-white hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Find Installer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
