import { Mail, MessageSquare } from "lucide-react";

export function ContactHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="text-white tracking-wide">Get In Touch</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl lg:text-7xl text-white mb-6 tracking-tight">
          Let's Start a Conversation
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you're ready to deploy RanaMeter, have questions about our platform, or want to explore partnership opportunities—we're here to help.
        </p>

        {/* Quick contact options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@rana54.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            hello@rana54.com
          </a>
          <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white">
            <span className="text-white/70">Response time:</span> Within 24 hours
          </div>
        </div>
      </div>
    </div>
  );
}
