import { Card } from "../ui/card";
import { Check, X, Zap } from "lucide-react";
import ranaIcon from "figma:asset/75d9f6498964c7cae6db926cc8c73ea0e9a75280.png";

export function ComparisonCard() {
  const rana54Features = [
    "Automated real-time data from the RanaMeter",
    "Verified data, secured and standardized",
    "Live dashboards, always up to date",
    "Transparent metrics aligned with global standards",
    "Generates verified carbon credits for businesses",
    "Simple setup, insights in minutes",
    "Scalable, professional, and partner-ready"
  ];

  const traditionalLimitations = [
    "Manual logging, scattered sources",
    "Manual logging, scattered sources",
    "One-time, static reports",
    "Opaque numbers, hard to trust",
    "Limited to internal use",
    "Complex and time-consuming (hours each week)",
    "Chaotic and fragmented processes"
  ];

  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Rana54 Side - Bold Green Gradient */}
        <div className="relative bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-6 sm:p-8 lg:p-12 group/side overflow-hidden">
          {/* Ambient decoration */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-[#F6B842]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-12 w-40 h-40 bg-[#F57B44]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Premium header with logo */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                {/* Logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-xl blur-md" />
                  <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg p-2">
                    <img 
                      src={ranaIcon} 
                      alt="Rana54 Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-[28px] lg:text-[32px] tracking-[-0.32px] leading-tight text-white">
                    Rana54
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">The Future of Energy Tracking</p>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2 sm:space-y-3">
              {rana54Features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 group/item"
                >
                  <div className="flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:bg-white/30 transition-all duration-300">
                    <Check className="w-3 sm:w-4 h-3 sm:h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-[27.2px] text-white/95">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative accent */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/90">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={2} />
                <span className="text-xs sm:text-sm">Powered by verified technology</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Side - Muted Contrast */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6 sm:p-8 lg:p-12 group/side overflow-hidden">
          {/* Ambient decoration */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-gray-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-12 w-40 h-40 bg-gray-400/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-400/20 rounded-xl blur-md" />
                  <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-gray-300/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-400/30 shadow-sm">
                    <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-[28px] lg:text-[32px] tracking-[-0.32px] leading-tight text-gray-700">
                    Traditional Methods
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Outdated & Inefficient</p>
                </div>
              </div>
            </div>

            {/* Limitations list */}
            <div className="space-y-2 sm:space-y-3">
              {traditionalLimitations.map((limitation, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 group/item opacity-70"
                >
                  <div className="flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-gray-400/40 backdrop-blur-sm border border-gray-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-[27.2px] text-gray-700">
                    {limitation}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative accent */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-400/30">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-xs sm:text-sm">Limited to basic reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VS Badge in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-[#F6B842] rounded-full blur-xl opacity-60" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-[#F6B842] to-[#d9a131] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
            <span className="text-white text-xl tracking-wide">VS</span>
          </div>
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
