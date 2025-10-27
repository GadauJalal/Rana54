import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";

export function PartnersFinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Ready to Join Our Partner Network?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Grow your business while bringing verified clean energy solutions to communities across Africa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="bg-white text-[#F57B44] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
          >
            Become a Partner
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 shadow-lg transition-all duration-300 rounded-xl px-8 group"
          >
            <Phone className="mr-2 w-5 h-5" />
            Book a Call
          </Button>
        </div>

        {/* Partnership tiers preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-lg text-white mb-1">Standard</div>
            <div className="text-sm text-white/70">Up to 100 systems/year</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-lg text-white mb-1">Growth</div>
            <div className="text-sm text-white/70">100-500 systems/year</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-lg text-white mb-1">Enterprise</div>
            <div className="text-sm text-white/70">500+ systems/year</div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-sm text-white/70">
          All tiers include training, dashboard access, and co-branding opportunities
        </div>
      </div>
    </div>
  );
}
