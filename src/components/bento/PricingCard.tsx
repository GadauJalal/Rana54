import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check, ArrowRight, Sparkles, Star } from "lucide-react";

export function PricingCard() {
  return (
    <Card className="relative p-12 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col overflow-hidden group bg-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-[#F6B842]/10 to-[#F57B44]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#527E5F]/8 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F6B842] to-[#F57B44] text-white px-6 py-3 rounded-xl mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" strokeWidth={2.5} />
            <span className="tracking-wide">Transparent pricing</span>
          </div>
          <h2 className="text-5xl mb-4 leading-tight tracking-tight">Simple plans</h2>
          <p className="text-gray-600 text-xl">Pick what works for you</p>
        </div>

        <div className="space-y-6 flex-grow mb-10">
          {/* Starter Plan */}
          <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-[1.5rem] p-8 border-2 border-gray-100 hover:border-[#527E5F] transition-all group/card shadow-md hover:shadow-lg">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] text-white px-5 py-2 rounded-xl shadow-lg transform group-hover/card:scale-110 transition-transform">
              <span className="text-sm tracking-wide">Homes</span>
            </div>
            
            <h3 className="text-3xl mb-2 tracking-tight">Starter</h3>
            <p className="text-gray-600 text-lg mb-8">Perfect for residential solar</p>
            
            <ul className="space-y-4">
              {["Real-time monitoring", "Monthly reports", "Basic support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#527E5F] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-[1.5rem] p-8 border-2 border-[#F6B842] transition-all group/card shadow-xl hover:shadow-2xl text-white">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F6B842] to-[#d9a131] text-white px-5 py-2 rounded-xl shadow-lg flex items-center gap-2 transform group-hover/card:scale-110 transition-transform">
              <Star className="w-4 h-4" fill="white" strokeWidth={0} />
              <span className="text-sm tracking-wide">SMEs</span>
            </div>
            
            <h3 className="text-3xl mb-2 tracking-tight">Pro</h3>
            <p className="text-white/80 text-lg mb-8">Everything you need to scale</p>
            
            <ul className="space-y-4">
              {["All Starter features", "Priority verification", "Advanced analytics", "Dedicated support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#F6B842] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-[#F57B44] to-[#e06a33] hover:from-[#e06a33] hover:to-[#F57B44] text-white py-7 text-lg rounded-xl shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(245,123,68,0.4)] transition-all group/btn hover:scale-[1.02]">
          See full pricing
          <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
        </Button>
      </div>
    </Card>
  );
}
