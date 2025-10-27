import { FileText, Download, Link2, Database, Clock } from "lucide-react";

export function TransparencyProof() {
  const features = [
    {
      icon: Link2,
      title: "Unique Identification",
      description: "Each carbon-saving record tied to a specific RanaID and timestamp."
    },
    {
      icon: FileText,
      title: "Issuance Reports",
      description: "Buyers can view detailed issuance reports for full transparency."
    },
    {
      icon: Download,
      title: "Proof Files",
      description: "Download proof files in registry-compatible formats."
    },
    {
      icon: Database,
      title: "API Access",
      description: "Optional API for ESG dashboards and audit exports."
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="mb-4 tracking-tight text-gray-900">
          Transparency & Proof
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Every carbon credit is backed by verifiable data and immutable records.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Features grid */}
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 hover:border-[#527E5F]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#527E5F] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1 sm:mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proof document mockup */}
        <div className="relative">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-2xl">
            {/* Document header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#527E5F] flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-sm tracking-wide text-gray-900">Verification Certificate</div>
                  <div className="text-xs text-gray-500">RanaID: #R54-2025-0847</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20">
                <span className="text-xs text-[#527E5F] tracking-wide">VERIFIED</span>
              </div>
            </div>

            {/* Document content */}
            <div className="space-y-4">
              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F6B842]/10">
                  <div className="text-xs text-gray-500 mb-1">Carbon Credits</div>
                  <div className="text-gray-900">847.3 tCO₂e</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F57B44]/10">
                  <div className="text-xs text-gray-500 mb-1">Energy Tracked</div>
                  <div className="text-gray-900">524,180 kWh</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Verification Timeline
                </div>
                <div className="space-y-2">
                  {[
                    { date: "Oct 15, 2025", event: "Data Collection Started" },
                    { date: "Oct 18, 2025", event: "RanaID Verification" },
                    { date: "Oct 20, 2025", event: "Credits Issued" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#527E5F]" />
                      <div className="text-xs">
                        <span className="text-gray-500">{item.date}:</span>{" "}
                        <span className="text-gray-900">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download section */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full px-6 py-3 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] transition-colors duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span className="tracking-wide">Download Proof File</span>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative badge */}
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#F6B842] rounded-full shadow-lg border-2 border-white">
            <span className="text-xs sm:text-sm text-white tracking-wide">Blockchain Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
