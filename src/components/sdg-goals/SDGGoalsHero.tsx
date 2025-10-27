import { Target, Globe } from "lucide-react";

export function SDGGoalsHero() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#527E5F]/10 rounded-full mb-6 sm:mb-8">
            <Target className="w-4 h-4 text-[#527E5F]" />
            <span className="text-sm text-[#527E5F] tracking-wide">Global Impact</span>
          </div>

          <h1 className="mb-4 sm:mb-6 tracking-tight text-gray-900 leading-tight">
            Alignment with SDG Goals
          </h1>
          
          <p className="text-gray-600 leading-relaxed">
            Rana54 directly supports the United Nations Sustainable Development Goals (SDGs) by transforming clean energy generation into verified social and environmental value.
          </p>
        </div>

        {/* Right: Visual element */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_20px_70px_-15px_rgba(82,126,95,0.4)] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <Globe className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white mx-auto mb-4 sm:mb-6" strokeWidth={1.5} />
              <div className="space-y-3 sm:space-y-4">
                <div className="text-white/90">Contributing to</div>
                <div className="text-white">17</div>
                <div className="text-white/90">UN Sustainable Development Goals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
