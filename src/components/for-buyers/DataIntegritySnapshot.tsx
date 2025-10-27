import { BarChart3, Download, Link2, TrendingUp } from "lucide-react";

export function DataIntegritySnapshot() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57B44]/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-white mb-4 tracking-tight">Data Integrity Snapshot</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Complete transparency into credit verification and issuance
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Real-time Dashboards */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F6B842]/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#F6B842]" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Real-Time Dashboards</span>
            </div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F6B842] flex-shrink-0" strokeWidth={2} />
                <span>Live kWh production tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F6B842] flex-shrink-0" strokeWidth={2} />
                <span>CO₂ avoided calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F6B842] flex-shrink-0" strokeWidth={2} />
                <span>Credit issuance records</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F6B842] flex-shrink-0" strokeWidth={2} />
                <span>Site performance metrics</span>
              </li>
            </ul>
          </div>

          {/* Downloadable Attestations */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F57B44]/20 flex items-center justify-center">
                <Download className="w-5 h-5 text-[#F57B44]" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Downloadable Attestations</span>
            </div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F57B44] flex-shrink-0" strokeWidth={2} />
                <span>Cryptographic proof files</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F57B44] flex-shrink-0" strokeWidth={2} />
                <span>Verification certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F57B44] flex-shrink-0" strokeWidth={2} />
                <span>Audit trail documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-[#F57B44] flex-shrink-0" strokeWidth={2} />
                <span>Chain-of-custody records</span>
              </li>
            </ul>
          </div>

          {/* Registry Integrations */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#527E5F]/30 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Registry Integrations</span>
            </div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-white flex-shrink-0" strokeWidth={2} />
                <span>ESG reporting systems</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-white flex-shrink-0" strokeWidth={2} />
                <span>Carbon registry APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-white flex-shrink-0" strokeWidth={2} />
                <span>Automated data sync</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-white flex-shrink-0" strokeWidth={2} />
                <span>Compliance reporting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sample dashboard preview */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-3xl text-[#F6B842] mb-1">18.5M</div>
              <div className="text-sm text-white/70">Total kWh Verified</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-3xl text-[#F57B44] mb-1">9,200</div>
              <div className="text-sm text-white/70">Tonnes CO₂ Avoided</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-3xl text-white mb-1">2,400+</div>
              <div className="text-sm text-white/70">Active Sites</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-3xl text-[#527E5F] mb-1">99.8%</div>
              <div className="text-sm text-white/70">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
