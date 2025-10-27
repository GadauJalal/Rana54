import { Card } from "../ui/card";
import { Zap, Activity, DollarSign, ArrowRight } from "lucide-react";

export function HowItWorksCard() {
  const steps = [
    { 
      icon: Zap, 
      title: "Step 1 — Capture", 
      description: "Install the RanaMeter device to collect real-time solar generation data, secured and verified at the source.",
      color: "from-[#F57B44] to-[#e06a33]",
      iconBg: "bg-[#F57B44]"
    },
    { 
      icon: Activity, 
      title: "Step 2 — Track", 
      description: "View your energy use and impact instantly through the RanaOS app and dashboard.",
      color: "from-[#527E5F] to-[#3d5d48]",
      iconBg: "bg-[#527E5F]"
    },
    { 
      icon: DollarSign, 
      title: "Step 3 — Convert", 
      description: "Turn verified clean energy data into carbon credits that can be issued, sold, or reported for ESG value.",
      color: "from-[#F6B842] to-[#d9a131]",
      iconBg: "bg-[#F6B842]"
    },
  ];

  return (
    <Card className="relative p-12 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#F57B44]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#527E5F]/8 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="mb-12 text-center">
          <h2 className="text-5xl mb-4 tracking-tight">How Rana54 Works</h2>
          <p className="text-xl text-gray-600">Three steps to measurable climate impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group/card">
              {/* Refined connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 -right-4 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-300" strokeWidth={2} />
                </div>
              )}
              
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-[1.5rem] p-8 shadow-md hover:shadow-xl transition-all h-full border-2 border-gray-100 hover:border-gray-200 group-hover/card:scale-[1.02] duration-300">
                {/* Step number - refined */}
                <div className={`absolute -top-5 -left-5 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform`}>
                  <span className="text-2xl text-white font-black">{index + 1}</span>
                </div>
                
                <div className="space-y-6 mt-4">
                  <div className={`w-16 h-16 rounded-xl ${step.iconBg} flex items-center justify-center shadow-md group-hover/card:shadow-lg transition-all`}>
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
