import { Sun, ArrowRight, Smartphone, ShieldCheck } from "lucide-react";

export function HowItWorksHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-12 lg:p-20 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl text-white mb-6 tracking-tight">
          See How Rana54 Turns Sunlight Into Verified Value
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every component of the Rana54 ecosystem works together to measure, verify, and monetize clean energy in real time.
        </p>

        {/* Animated flow visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-4xl mx-auto">
          {/* Sun */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F6B842] to-[#F57B44] flex items-center justify-center shadow-lg">
              <Sun className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white tracking-wide">Sunlight</span>
          </div>

          <ArrowRight className="w-8 h-8 text-white/60 hidden md:block" />
          <div className="block md:hidden">
            <ArrowRight className="w-8 h-8 text-white/60 rotate-90" />
          </div>

          {/* Device */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F6B842] rounded-full animate-pulse" />
              </div>
            </div>
            <span className="text-white tracking-wide">RanaMeter</span>
          </div>

          <ArrowRight className="w-8 h-8 text-white/60 hidden md:block" />
          <div className="block md:hidden">
            <ArrowRight className="w-8 h-8 text-white/60 rotate-90" />
          </div>

          {/* App */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-lg">
              <Smartphone className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white tracking-wide">RanaOS</span>
          </div>

          <ArrowRight className="w-8 h-8 text-white/60 hidden md:block" />
          <div className="block md:hidden">
            <ArrowRight className="w-8 h-8 text-white/60 rotate-90" />
          </div>

          {/* Verified Credits */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white tracking-wide">Verified Credits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
