import { ArrowRight, FileText, Users } from "lucide-react";

export function CO2SaveCTA() {
  return (
    <div className="py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* CTA 1: Methodology */}
        <div className="relative p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#527E5F] text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <FileText className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h3 className="text-3xl mb-3 tracking-tight">
                See How We Calculate Savings
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Dive deep into our methodology and understand exactly how we convert clean energy into verified carbon savings.
              </p>
            </div>

            <button className="px-8 py-4 bg-white text-[#527E5F] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span className="tracking-wide">View Methodology</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Stats */}
            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl mb-1">100%</div>
                  <div className="text-sm text-white/80">Transparent Process</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">3rd Party</div>
                  <div className="text-sm text-white/80">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 2: Join Network */}
        <div className="relative p-10 rounded-3xl bg-[#F6B842] text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
              <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>

            <div>
              <h3 className="text-3xl mb-3 tracking-tight">
                Join the Impact Network
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Whether you're a partner or buyer, join our growing network of organizations making measurable climate impact.
              </p>
            </div>

            <button className="px-8 py-4 bg-white text-[#F6B842] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span className="tracking-wide">Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Stats */}
            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl mb-1">847+</div>
                  <div className="text-sm text-white/80">Active Partners</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">154</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
