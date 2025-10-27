import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "../ui/button";

export function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Ready to Start Earning from Your Solar?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of solar homeowners already monetizing their clean energy production with RanaMeter.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F57B44] to-[#e06a33] text-white hover:from-[#e06a33] hover:to-[#d05a22] shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
          >
            Join the Pilot
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 shadow-lg transition-all duration-300 rounded-xl px-8 group"
          >
            <MapPin className="mr-2 w-5 h-5" />
            Talk to an Installer
          </Button>
        </div>

        {/* Quick form teaser */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="text-white/80 text-sm">Takes less than 2 minutes to apply</span>
          <span className="text-white/60">•</span>
          <span className="text-white/80 text-sm">No commitment required</span>
        </div>
      </div>
    </div>
  );
}
