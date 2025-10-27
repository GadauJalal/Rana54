import { Award, FileCheck, ShieldCheck, BookOpen } from "lucide-react";

export function ComplianceStandards() {
  const standards = [
    {
      icon: Award,
      title: "International Standards Alignment",
      items: [
        "Verra VCS methodology compliance",
        "Gold Standard for Global Goals",
        "ISO 14064 GHG accounting",
        "GHG Protocol compatibility"
      ],
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: FileCheck,
      title: "MRV Data Integrity",
      items: [
        "Device-level measurement with cryptographic signatures",
        "Multi-layer verification protocols",
        "Anti-double-counting safeguards",
        "Immutable audit trails"
      ],
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Compliance & Standards</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Credits you can trust, backed by rigorous verification
        </p>
      </div>

      {/* Standards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {standards.map((standard, index) => {
          const Icon = standard.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${standard.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-4 tracking-wide">{standard.title}</h3>
              <ul className="space-y-3">
                {standard.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-[#527E5F] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Methodology & Legal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Methodology Explainer */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#527E5F]" strokeWidth={2.5} />
            <h4 className="text-gray-900 tracking-wide">Methodology Documentation</h4>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Access detailed methodology papers explaining our MRV process, data integrity protocols, and verification workflows.
          </p>
          <button className="text-[#527E5F] hover:underline">
            Download Methodology PDF →
          </button>
        </div>

        {/* Legal & Disclosure */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-6 h-6 text-[#F57B44]" strokeWidth={2.5} />
            <h4 className="text-gray-900 tracking-wide">Legal & Disclosure</h4>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Review terms of service, credit transfer agreements, and disclosure statements for regulatory compliance.
          </p>
          <button className="text-[#527E5F] hover:underline">
            View Legal Documentation →
          </button>
        </div>
      </div>

      {/* Certifications badge */}
      <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <h4 className="text-gray-600 mb-6 tracking-wide">Recognized by Leading Standards Bodies</h4>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
          {["Verra", "Gold Standard", "ISO 14064", "GHG Protocol", "CDP"].map((cert, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-600 tracking-wide"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
