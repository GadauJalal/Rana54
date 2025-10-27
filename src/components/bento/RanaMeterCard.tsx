import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Gauge, Wifi, Lock, Zap } from "lucide-react";

export function RanaMeterCard() {
  const specs = [
    {
      icon: Gauge,
      text: "Precision energy capture",
      color: "#F57B44"
    },
    {
      icon: Wifi,
      text: "Seamless connectivity",
      color: "#527E5F"
    },
    {
      icon: Lock,
      text: "Blockchain-verified data",
      color: "#F6B842"
    }
  ];

  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-gradient-to-br from-[#F57B44] to-[#e06a33] group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left side - Image/Visual */}
        <div className="relative lg:min-h-[600px] min-h-[400px] order-2 lg:order-1">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F57B44]/30 via-transparent to-[#527E5F]/20 z-[2]" />
          
          {/* Premium glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F6B842]/40 rounded-full blur-3xl z-[1] group-hover:scale-125 transition-transform duration-700" />

          {/* Device showcase */}
          <div className="relative h-full p-8 lg:p-12 flex items-center justify-center z-[3]">
            <div className="relative max-w-lg w-full">
              {/* Device shadow */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl blur-3xl scale-95" />
              
              {/* Device container */}
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border-4 border-white/60 group-hover:scale-105 transition-transform duration-500">
                {/* Inner device frame */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-inner">
                  {/* Device image */}
                  <div className="relative aspect-[4/3]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZGV2aWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1NTA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="RanaMeter Device"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    
                    {/* Status indicator on device */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/50">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-900">Active</span>
                    </div>

                    {/* Device specs overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">Current Output</span>
                          <Zap className="w-4 h-4 text-[#F6B842]" />
                        </div>
                        <div className="text-2xl text-gray-900">4.2 kW</div>
                        <div className="text-xs text-gray-500 mt-1">Peak efficiency</div>
                      </div>
                    </div>
                  </div>

                  {/* Device display screen simulation */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <div className="w-2 h-2 bg-[#F6B842] rounded-full" />
                      </div>
                      <div className="text-xs text-gray-400 font-mono">RMT-2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating pills */}
              <div className="absolute -top-4 -left-4 px-4 py-2 bg-[#527E5F] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">Plug & Play</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-[#F6B842] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="relative p-12 lg:p-16 flex flex-col justify-center z-10 order-1 lg:order-2">
          {/* Ambient decoration */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-[#F6B842]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-12 w-40 h-40 bg-[#527E5F]/20 rounded-full blur-3xl" />
          
          <div className="relative space-y-8">
            {/* Icon badge */}
            <div className="relative w-fit">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg" />
              <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Gauge className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl text-white tracking-tight leading-tight">
                The RanaMeter Device
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-md">
                Hardware designed for accuracy. A compact, tamper-proof meter that captures every watt of clean energy generated—ensuring data integrity from source to credit.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 pt-4">
              {specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 group/feature"
                >
                  <div 
                    className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover/feature:scale-110 transition-transform duration-300"
                  >
                    <spec.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg text-white/95">
                    {spec.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.667 3.5L5.25 9.91667L2.33334 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white/90 text-base">
                  Easy installation—works with any solar system
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.667 3.5L5.25 9.91667L2.33334 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white/90 text-base">
                  Real-time sync with RanaOS for instant insights
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-white text-[#F57B44] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/cta">
                <span className="tracking-wide">Learn About Hardware</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  className="group-hover/cta:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M7.5 15L12.5 10L7.5 5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white/10 inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
