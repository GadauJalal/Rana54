import { Card } from "../ui/card";
import { Shield, CheckCircle2, Award } from "lucide-react";

export function TrustCard() {
  return (
    <Card className="relative p-10 border-0 shadow-[0_20px_70px_-15px_rgba(246,184,66,0.3)] hover:shadow-[0_30px_90px_-15px_rgba(246,184,66,0.4)] transition-all h-full flex flex-col justify-between overflow-hidden group bg-gradient-to-br from-[#F6B842] via-[#F6B842] to-[#d9a131] text-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute top-24 -left-12 w-32 h-32 bg-white/8 rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 bg-white rounded-[1.25rem] transform group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-10 h-10 text-[#F6B842]" strokeWidth={2.5} />
          </div>
        </div>
        
        <h3 className="text-4xl mb-4 leading-tight tracking-tight">Verified Impact</h3>
        <p className="text-white/90 text-lg leading-relaxed mb-10">
          Every kilowatt tracked, secured, and auditable.
        </p>
      </div>

      <div className="relative space-y-4">
        {[
          { text: "Live dashboards, always up to date", icon: CheckCircle2 },
          { text: "Generates verified carbon credits", icon: CheckCircle2 },
          { text: "Simple setup, insights in minutes", icon: CheckCircle2 }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-5 rounded-[1.25rem] bg-white/15 backdrop-blur-sm border-2 border-white/20 hover:bg-white/25 transition-all group/item">
            <item.icon className="w-6 h-6 text-white flex-shrink-0" strokeWidth={2.5} />
            <span className="text-white text-lg">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Trust badge - refined */}
      <div className="relative mt-8 pt-6 border-t-2 border-white/25">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
          <span className="text-white/90 tracking-wide">200+ verified installations</span>
        </div>
      </div>
    </Card>
  );
}
