import { ArrowRight, FileText, Mail } from "lucide-react";

export function CaseStudiesCTA() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* CTA 1: Custom Case Study */}
        <div className="relative p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#527E5F] text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <FileText className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h3 className="text-4xl mb-4 tracking-tight leading-tight">
                Request a Custom Case Study
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Interested in how RanaMeter can work for your specific use case? We'll create a tailored analysis for your project.
              </p>
            </div>

            <button className="px-10 py-5 bg-white text-[#527E5F] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
              <span className="tracking-wide">Contact Research Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Response time */}
            <div className="pt-8 border-t border-white/20">
              <div className="text-sm text-white/80">
                Average response time: <span className="text-white">24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 2: Pilot Program */}
        <div className="relative p-12 rounded-3xl bg-[#F6B842] text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h3 className="text-4xl mb-4 tracking-tight leading-tight">
                Partner With Us
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Explore partnership opportunities and discover how RanaMeter can create impact in your community or organization.
              </p>
            </div>

            <button className="px-10 py-5 bg-white text-[#F6B842] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
              <span className="tracking-wide">Explore Partnerships</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Application info */}
            <div className="pt-8 border-t border-white/20">
              <div className="text-sm text-white/80">
                Multiple partnership models • <span className="text-white">Custom solutions available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional info bar */}
      <div className="mt-12 p-8 rounded-2xl bg-white border-2 border-gray-200 text-center shadow-lg">
        <p className="text-lg text-gray-600">
          All case studies and reports are available for download. For media inquiries or partnership discussions,{" "}
          <button className="text-[#527E5F] hover:text-[#3d5d48] transition-colors underline decoration-2 underline-offset-4">
            contact our team
          </button>
          .
        </p>
      </div>
    </div>
  );
}
