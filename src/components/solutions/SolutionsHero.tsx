import { Sparkles, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function SolutionsHero() {
  const pillars = [
    {
      icon: Zap,
      name: "RanaMeter",
      description: "IoT metering at the edge",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Sparkles,
      name: "RanaOS",
      description: "App + Dashboard platform",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Shield,
      name: "RanaID",
      description: "Verified device identity",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  const proofHooks = [
    "MRV-ready data",
    "Device-level identity",
    "Registry-aligned outputs"
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-12 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57B44]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <Sparkles className="w-4 h-4 text-[#F6B842]" />
          <span className="text-white/90 tracking-wide">Solutions Overview</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl lg:text-6xl text-white mb-6 tracking-tight max-w-4xl mx-auto">
          Turn sunlight into verified, tradeable value
        </h1>
        
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          For homes, SMEs, and communities seeking to unlock the full potential of clean energy generation.
        </p>

        {/* Proof hooks */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {proofHooks.map((hook, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg"
            >
              <span className="text-[#527E5F] tracking-wide">{hook}</span>
            </div>
          ))}
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[#527E5F] mb-2 tracking-wide">{pillar.name}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-[#527E5F] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F57B44] to-[#e06a33] text-white hover:from-[#e06a33] hover:to-[#d05a22] shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8"
          >
            Partner with Rana54
          </Button>
        </div>
      </div>
    </div>
  );
}
