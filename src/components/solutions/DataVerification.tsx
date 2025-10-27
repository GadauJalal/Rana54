import { Database, ShieldAlert, FileCheck, ArrowRight } from "lucide-react";

export function DataVerification() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-12 shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#527E5F]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Data, Verification & Integrity</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multi-layered security and validation for trustworthy clean energy data
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* MRV Pipeline */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Database className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-3 tracking-wide">MRV Pipeline</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Device signatures flow through server validation into the issuance queue, ensuring measurement, reporting, and verification at every step.
            </p>
            <div className="flex items-center gap-2 text-[#527E5F] group-hover:gap-3 transition-all">
              <span className="tracking-wide">Learn more</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>

          {/* Anti-fraud */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#F57B44]/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <ShieldAlert className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-3 tracking-wide">Anti-Fraud</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Time-series anomaly detection, geo/device binding, and duplicate detection protect against manipulation and ensure data authenticity.
            </p>
            <div className="flex items-center gap-2 text-[#F57B44] group-hover:gap-3 transition-all">
              <span className="tracking-wide">View safeguards</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>

          {/* Audit-ready */}
          <div className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#F6B842]/30 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F6B842] to-[#F57B44] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <FileCheck className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-gray-900 mb-3 tracking-wide">Audit-Ready</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Immutable logs, downloadable attestations, and comprehensive business audit packs enable seamless third-party verification.
            </p>
            <div className="flex items-center gap-2 text-[#F6B842] group-hover:gap-3 transition-all">
              <span className="tracking-wide">Export data</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Bottom feature strip */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-gray-200">
          {[
            "Hardware-backed signatures",
            "Cryptographic validation",
            "Tamper-evident logging",
            "Registry compliance",
            "Real-time monitoring"
          ].map((feature, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm"
            >
              <span className="text-gray-700 tracking-wide">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
