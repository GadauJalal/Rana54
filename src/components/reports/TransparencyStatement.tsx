import { Shield, CheckCircle, FileText, ArrowRight } from "lucide-react";

export function TransparencyStatement() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Statement */}
        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl tracking-tight text-gray-900">
              Transparency Statement
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              All Rana54 reports are prepared using internationally recognized methodologies and independently verified by accredited third-party auditors.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#527E5F] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Methodology Standards</h4>
                  <p className="text-gray-600">
                    Aligned with ISO 14064, GHG Protocol, and Gold Standard frameworks for carbon accounting
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#527E5F] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Independent Validation</h4>
                  <p className="text-gray-600">
                    Third-party audits conducted by accredited verification bodies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#527E5F] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Data Integrity</h4>
                  <p className="text-gray-600">
                    Hardware-verified measurements with blockchain-backed immutability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#527E5F] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-900 mb-1">Regular Updates</h4>
                  <p className="text-gray-600">
                    Quarterly impact reports and annual technical performance reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Related Resources */}
        <div className="space-y-6">
          {/* White Paper Link */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#527E5F]/10 flex items-center justify-center group-hover:bg-[#527E5F] transition-colors duration-300 flex-shrink-0">
                <FileText className="w-7 h-7 text-[#527E5F] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-gray-900 mb-2 tracking-tight group-hover:text-[#527E5F] transition-colors">
                  Read Our White Paper
                </h3>
                <p className="text-gray-600 mb-4">
                  Deep dive into our MRV methodology, technical architecture, and carbon verification framework
                </p>
                <div className="flex items-center gap-2 text-[#527E5F]">
                  <span className="text-sm">View White Paper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Carbon Savings Link */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#F57B44]/10 flex items-center justify-center group-hover:bg-[#F57B44] transition-colors duration-300 flex-shrink-0">
                <Shield className="w-7 h-7 text-[#F57B44] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl text-gray-900 mb-2 tracking-tight group-hover:text-[#F57B44] transition-colors">
                  CO₂ Savings Explained
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how we calculate, verify, and track carbon savings from clean energy usage
                </p>
                <div className="flex items-center gap-2 text-[#F57B44]">
                  <span className="text-sm">Explore Carbon Methodology</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#F6B842] rounded-3xl p-8 shadow-[0_20px_70px_-15px_rgba(246,184,66,0.4)]">
            <blockquote className="text-xl text-white/95 leading-relaxed mb-4">
              "Transparency is the foundation of trust in carbon markets. Our commitment to independent verification ensures every data point is credible."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-white">JM</span>
              </div>
              <div>
                <div className="text-white">Jane Muriuki</div>
                <div className="text-white/80 text-sm">Chief Impact Officer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
