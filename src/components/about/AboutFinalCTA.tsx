import { Mail, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function AboutFinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] via-[#3d5d48] to-[#527E5F] p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Let's Build the Future Together
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you want to partner with us, join our team, or simply learn more about our work—we'd love to hear from you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F57B44] to-[#e06a33] text-white hover:from-[#e06a33] hover:to-[#d05a22] shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 shadow-lg transition-all duration-300 rounded-xl px-8 group"
          >
            <Briefcase className="mr-2 w-5 h-5" />
            Work With Us
          </Button>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-sm text-white/70 mb-1">General Inquiries</div>
            <div className="text-white">hello@rana54.com</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-sm text-white/70 mb-1">Partnerships</div>
            <div className="text-white">partners@rana54.com</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-sm text-white/70 mb-1">Careers</div>
            <div className="text-white">careers@rana54.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
