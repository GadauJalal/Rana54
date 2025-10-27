import { Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function UsersHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
          <Zap className="w-4 h-4 text-[#F6B842]" />
          <span className="text-white tracking-wide">For Solar Homeowners</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl lg:text-7xl text-white mb-6 tracking-tight">
          Track your solar.<br />Get paid. See your impact.
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Turn every kilowatt-hour into verified value with RanaMeter's seamless tracking and payout system.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-[#F57B44] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
