import { Card } from "../ui/card";
import { Sparkles } from "lucide-react";
import ranaIcon from "figma:asset/75d9f6498964c7cae6db926cc8c73ea0e9a75280.png";

export function AboutSection() {
  const categories = [
    { label: "Carbon credits", color: "#F6B842" },
    { label: "Partner-ready", color: "#527E5F" },
    { label: "Verified data", color: "#F57B44" },
    { label: "Scalable solutions", color: "#527E5F" },
    { label: "Transparent reporting", color: "#F6B842" },
    { label: "Real-time tracking", color: "#F57B44" },
  ];

  return (
    <Card className="relative overflow-hidden border-0 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_40px_110px_-20px_rgba(0,0,0,0.18)] transition-all duration-700 bg-white group/card">
      {/* Premium background layers */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#527E5F] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F57B44] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#F6B842] rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #527E5F 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative p-12 lg:p-24">
        <div className="relative flex flex-col items-center">
          {/* Premium "About Rana54" badge with sparkle */}
          <div className="relative inline-flex items-center gap-2.5 mb-14 group/badge">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#527E5F]/20 via-[#F57B44]/20 to-[#F6B842]/20 rounded-full blur-xl opacity-0 group-hover/badge:opacity-100 transition-all duration-500" />
            
            <div className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white pl-3 pr-5 py-3 rounded-full shadow-[0_8px_30px_-8px_rgba(82,126,95,0.4)] hover:shadow-[0_12px_40px_-8px_rgba(82,126,95,0.6)] transition-all duration-300">
              {/* Icon container with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#F6B842] rounded-full blur-md opacity-50 group-hover/badge:opacity-80 transition-opacity" />
                <div className="relative w-7 h-7 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/badge:scale-110 transition-transform p-1">
                  <img 
                    src={ranaIcon} 
                    alt="Rana54" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <span className="tracking-wide">About Rana54</span>
              
              {/* Sparkle accent */}
              <Sparkles className="w-3.5 h-3.5 text-[#F6B842] opacity-0 group-hover/badge:opacity-100 transition-opacity" strokeWidth={2.5} />
            </div>
          </div>

          {/* Main heading - with premium text treatment */}
          <div className="max-w-[920px] mb-20 text-center relative">
            <h2 className="text-2xl lg:text-[28px] leading-[1.6] tracking-[-0.3px] text-[#002101] relative">
              We are building a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">new standard</span>
                <div className="absolute bottom-1 left-0 right-0 h-3 bg-[#F6B842]/20 -rotate-1" />
              </span>
              {" "}for clean energy data. Rana54 connects households, businesses, and communities with a system that makes solar usage{" "}
              <span className="text-[#527E5F]">visible, verifiable, and valuable</span>.
              <br /><br />
              Our goal is simple: turn everyday clean energy generation into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">measurable climate impact</span>
                <div className="absolute bottom-1 left-0 right-0 h-3 bg-[#F57B44]/20 rotate-1" />
              </span>
              {" "}that attracts businesses, partners, and investors.
            </h2>
          </div>

          {/* Enhanced floating category pills - more dynamic arrangement */}
          <div className="relative w-full max-w-[900px] min-h-[200px]">
            {/* Row 1 - Top */}
            <div className="absolute left-[5%] top-0 animate-float-1">
              <CategoryPill label="Carbon credits" color="#F6B842" index={0} />
            </div>
            <div className="absolute left-[28%] top-0 animate-float-2">
              <CategoryPill label="Partner-ready" color="#527E5F" index={1} />
            </div>
            <div className="absolute right-[5%] top-0 animate-float-3">
              <CategoryPill label="Verified data" color="#F57B44" index={2} />
            </div>

            {/* Row 2 - Middle */}
            <div className="absolute left-[15%] top-[45%] animate-float-4">
              <CategoryPill label="Scalable solutions" color="#527E5F" index={3} />
            </div>
            <div className="absolute right-[20%] top-[45%] animate-float-5">
              <CategoryPill label="Real-time tracking" color="#F57B44" index={4} />
            </div>

            {/* Row 3 - Bottom */}
            <div className="absolute left-[35%] bottom-0 animate-float-6">
              <CategoryPill label="Transparent reporting" color="#F6B842" index={5} />
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs - more dynamic */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#F6B842]/10 to-[#F57B44]/10 rounded-full blur-3xl animate-pulse-orb" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-[#527E5F]/10 to-[#3d5d48]/10 rounded-full blur-3xl animate-pulse-orb-delayed" />

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -12px) rotate(2deg); }
          66% { transform: translate(-8px, -6px) rotate(-1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, -10px) rotate(-2deg); }
          66% { transform: translate(10px, -8px) rotate(1deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-8px, -14px) rotate(1deg); }
          66% { transform: translate(12px, -7px) rotate(-2deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(14px, -8px) rotate(-1deg); }
          66% { transform: translate(-10px, -12px) rotate(2deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-10px, -11px) rotate(2deg); }
          66% { transform: translate(8px, -9px) rotate(-1deg); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(12px, -9px) rotate(1deg); }
          66% { transform: translate(-14px, -13px) rotate(-2deg); }
        }
        @keyframes pulse-orb {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes pulse-orb-delayed {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.13; transform: scale(1.15); }
        }

        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5.5s ease-in-out infinite 0.2s; }
        .animate-float-3 { animation: float-3 6.5s ease-in-out infinite 0.4s; }
        .animate-float-4 { animation: float-4 5.8s ease-in-out infinite 0.6s; }
        .animate-float-5 { animation: float-5 6.2s ease-in-out infinite 0.8s; }
        .animate-float-6 { animation: float-6 5.9s ease-in-out infinite 1s; }
        .animate-pulse-orb { animation: pulse-orb 8s ease-in-out infinite; }
        .animate-pulse-orb-delayed { animation: pulse-orb-delayed 9s ease-in-out infinite 2s; }
      `}</style>
    </Card>
  );
}

interface CategoryPillProps {
  label: string;
  color: string;
  index: number;
}

function CategoryPill({ label, color, index }: CategoryPillProps) {
  return (
    <div 
      className="group/pill relative inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 bg-white/80 backdrop-blur-sm shadow-[0px_4px_16px_-4px_rgba(0,0,0,0.1),0px_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.15),0px_16px_40px_-8px_rgba(0,0,0,0.12)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ 
        borderColor: color,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Premium glow on hover */}
      <div 
        className="absolute -inset-1 rounded-full blur-md opacity-0 group-hover/pill:opacity-40 transition-all duration-300"
        style={{ backgroundColor: color }}
      />
      
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${color}15, ${color}05)`
        }}
      />
      
      {/* Accent dot */}
      <div 
        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 shadow-lg"
        style={{ backgroundColor: color }}
      />
      
      <span 
        className="relative text-sm tracking-wide transition-all duration-300 whitespace-nowrap group-hover/pill:scale-105"
        style={{ color: color }}
      >
        {label}
      </span>
    </div>
  );
}
