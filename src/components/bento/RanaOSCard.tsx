import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Smartphone, BarChart3, Bell, Shield } from "lucide-react";

export function RanaOSCard() {
  const features = [
    {
      icon: BarChart3,
      text: "Real-time energy monitoring",
      color: "#F57B44"
    },
    {
      icon: Bell,
      text: "Smart alerts & insights",
      color: "#527E5F"
    },
    {
      icon: Shield,
      text: "Verified impact tracking",
      color: "#F6B842"
    }
  ];

  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-gradient-to-br from-[#527E5F] to-[#3d5d48] group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left side - Content */}
        <div className="relative p-12 lg:p-16 flex flex-col justify-center z-10">
          {/* Ambient decoration */}
          <div className="absolute top-8 left-8 w-32 h-32 bg-[#F6B842]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-12 w-40 h-40 bg-[#F57B44]/10 rounded-full blur-3xl" />
          
          <div className="relative space-y-8">
            {/* Icon badge */}
            <div className="relative w-fit">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg" />
              <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl text-white tracking-tight leading-tight">
                Meet RanaOS
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-md">
                The operating system that transforms your solar data into actionable insights and verifiable impact.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 group/feature"
                >
                  <div 
                    className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover/feature:scale-110 transition-transform duration-300"
                  >
                    <feature.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg text-white/95">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-white text-[#527E5F] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/cta">
                <span className="tracking-wide">Explore RanaOS</span>
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

        {/* Right side - Image/Visual */}
        <div className="relative lg:min-h-[600px] min-h-[400px]">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#527E5F]/30 via-transparent to-[#F57B44]/20 z-[2]" />
          
          {/* Premium glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F6B842]/30 rounded-full blur-3xl z-[1] group-hover:scale-125 transition-transform duration-700" />

          {/* Image container with premium treatment */}
          <div className="relative h-full p-8 lg:p-12 flex items-center justify-center z-[3]">
            <div className="relative max-w-md w-full">
              {/* Phone mockup shadow */}
              <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] blur-2xl scale-95" />
              
              {/* Phone mockup frame */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-[2.5rem] p-3 shadow-2xl border-4 border-white/50 group-hover:scale-105 transition-transform duration-500">
                {/* Screen bezel */}
                <div className="bg-black rounded-[2rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-6 bg-black relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                  </div>
                  
                  {/* Dashboard image */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYwNTM0MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="RanaOS Dashboard Interface"
                      className="w-full h-full object-cover opacity-90"
                    />
                    
                    {/* Overlay gradient for premium effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#527E5F]/40 via-transparent to-transparent" />
                    
                    {/* Floating stat cards on the image */}
                    <div className="absolute bottom-6 left-4 right-4 space-y-2">
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Energy Generated</div>
                          <div className="text-sm text-gray-900">2,847 kWh</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Carbon Credits</div>
                          <div className="text-sm text-gray-900">1.4 tonnes verified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating pills */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#F6B842] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">Live Data</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#F57B44] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">iOS & Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white/10 inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
