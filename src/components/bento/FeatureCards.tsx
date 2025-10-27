import { Card } from "../ui/card";
import { Eye, Shield, Coins } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Eye,
      title: "Real-time energy visibility",
      description: "See your solar generation as it happens.",
      gradient: "from-[#F57B44] to-[#e06a33]",
      glowColor: "rgba(245,123,68,0.3)"
    },
    {
      icon: Shield,
      title: "Data you can trust",
      description: "Every reading is verified and secure.",
      gradient: "from-[#527E5F] to-[#3d5d48]",
      glowColor: "rgba(82,126,95,0.3)"
    },
    {
      icon: Coins,
      title: "Credits that matter",
      description: "Convert clean energy use into tradable carbon credits.",
      gradient: "from-[#F6B842] to-[#d9a131]",
      glowColor: "rgba(246,184,66,0.3)"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {features.map((feature, index) => (
        <Card 
          key={index}
          className="relative p-6 sm:p-8 border border-white/60 bg-[#fafafa] shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.13),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.13),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.13),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.13),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.13),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.13),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.13),0px_50px_30px_-2.5px_rgba(204,204,204,0.13)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 group hover:scale-[1.02]"
        >
          <div className="space-y-4 sm:space-y-5">
            {/* Premium icon container */}
            <div className="relative w-fit">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundColor: feature.glowColor }}
              />
              
              {/* Icon box */}
              <div className={`relative w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-[0px_0.84px_0.84px_-0.313px_rgba(1,71,36,0.09),0px_1.99px_1.99px_-0.625px_rgba(1,71,36,0.09),0px_3.631px_3.631px_-0.938px_rgba(1,71,36,0.09),0px_6.036px_6.036px_-1.25px_rgba(1,71,36,0.09),0px_9.748px_9.748px_-1.563px_rgba(1,71,36,0.09),0px_15.957px_15.957px_-1.875px_rgba(1,71,36,0.09),0px_27.476px_27.476px_-2.188px_rgba(1,71,36,0.09),0px_50px_50px_-2.5px_rgba(1,71,36,0.09)] group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" strokeWidth={2} />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl lg:text-[22px] text-[#002101] tracking-[-0.24px] leading-tight sm:leading-[36px]">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-[17px] text-[#636363] leading-relaxed sm:leading-[28.8px]">
                {feature.description}
              </p>
            </div>
          </div>

          {/* Subtle highlight accent on hover */}
          <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[#527E5F]/5 to-transparent" />
          </div>
        </Card>
      ))}
    </div>
  );
}
