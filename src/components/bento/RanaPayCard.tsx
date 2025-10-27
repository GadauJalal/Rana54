import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Wallet, TrendingUp, CheckCircle, DollarSign } from "lucide-react";

export function RanaPayCard() {
  const features = [
    {
      icon: DollarSign,
      text: "Direct carbon credit payouts",
      color: "#F6B842"
    },
    {
      icon: TrendingUp,
      text: "Market-linked pricing",
      color: "#527E5F"
    },
    {
      icon: CheckCircle,
      text: "Instant verification & settlement",
      color: "#F57B44"
    }
  ];

  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-gradient-to-br from-[#F6B842] to-[#d9a131] group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left side - Content */}
        <div className="relative p-12 lg:p-16 flex flex-col justify-center z-10">
          {/* Ambient decoration */}
          <div className="absolute top-8 left-8 w-32 h-32 bg-[#F57B44]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-12 w-40 h-40 bg-[#527E5F]/10 rounded-full blur-3xl" />
          
          <div className="relative space-y-8">
            {/* Icon badge */}
            <div className="relative w-fit">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg" />
              <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Wallet className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl text-white tracking-tight leading-tight">
                Introducing RanaPAY
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-md">
                Turn verified impact into real value. Get paid directly for the carbon credits your clean energy generates—transparent, fast, and secure.
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

            {/* Stats row */}
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl text-white mb-1">$2.4M+</div>
                <div className="text-sm text-white/80">Payouts processed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl text-white mb-1">24hr</div>
                <div className="text-sm text-white/80">Average settlement</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-white text-[#F6B842] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/cta">
                <span className="tracking-wide">Start Earning</span>
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

        {/* Right side - Payment Interface Visual */}
        <div className="relative lg:min-h-[600px] min-h-[400px]">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6B842]/30 via-transparent to-[#527E5F]/20 z-[2]" />
          
          {/* Premium glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F57B44]/30 rounded-full blur-3xl z-[1] group-hover:scale-125 transition-transform duration-700" />

          {/* Payment interface mockup */}
          <div className="relative h-full p-8 lg:p-12 flex items-center justify-center z-[3]">
            <div className="relative max-w-md w-full">
              {/* Phone mockup shadow */}
              <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] blur-2xl scale-95" />
              
              {/* Phone mockup frame */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-[2.5rem] p-3 shadow-2xl border-4 border-white/50 group-hover:scale-105 transition-transform duration-500">
                {/* Screen bezel */}
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-[2rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-6 bg-white relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
                  </div>
                  
                  {/* Payment interface */}
                  <div className="relative aspect-[9/16] bg-white p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-1">Available Balance</div>
                      <div className="text-4xl text-gray-900 mb-2">$1,847.50</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        +$142.30 this month
                      </div>
                    </div>

                    {/* Recent transaction card */}
                    <div className="bg-gradient-to-br from-[#F6B842] to-[#d9a131] rounded-2xl p-5 text-white shadow-lg mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm opacity-90">Latest Payout</div>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="text-3xl mb-1">$284.20</div>
                      <div className="text-sm opacity-90">Carbon Credits • Oct 2025</div>
                    </div>

                    {/* Transaction history */}
                    <div className="space-y-3">
                      <div className="text-sm text-gray-500 mb-2">Recent Activity</div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-900">Sept Credits</div>
                            <div className="text-xs text-gray-500">Verified</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-900">+$198.40</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#F57B44] to-[#e06a33] rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-900">Aug Credits</div>
                            <div className="text-xs text-gray-500">Verified</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-900">+$221.80</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl opacity-60">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-900">Oct Credits</div>
                            <div className="text-xs text-gray-500">Pending</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">~$245.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating pills */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#527E5F] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">Secure</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#F57B44] rounded-full shadow-lg border-2 border-white">
                <span className="text-sm text-white">Fast Transfer</span>
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
