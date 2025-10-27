import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MapPin, Award, TrendingUp } from "lucide-react";

export function CaseStudyCard() {
  return (
    <Card className="relative overflow-hidden border-0 shadow-[0_30px_90px_-15px_rgba(82,126,95,0.3)] group bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48]">
      {/* Refined ambient lighting */}
      <div className="absolute top-16 right-16 w-48 h-48 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-24 left-24 w-56 h-56 bg-[#F57B44]/15 rounded-full blur-3xl" />
      
      <div className="relative grid lg:grid-cols-2 gap-0">
        <div className="relative h-[520px] lg:h-auto overflow-hidden">
          {/* Refined frame treatment */}
          <div className="absolute inset-8 bg-white/95 p-3 rounded-[2rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 z-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719256383688-305c0c00d179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYwNTI0MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="15 kW rooftop installation in Kaduna"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
          
          {/* Refined verification badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-[#F6B842] px-5 py-3 rounded-xl shadow-xl flex items-center gap-2.5">
              <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="text-white tracking-wide">Verified</span>
            </div>
          </div>
        </div>

        <div className="relative p-12 lg:p-16 flex flex-col justify-center text-white">
          <div className="mb-12">
            <p className="text-white/90 text-xl leading-relaxed">
              Rana54 connects households, businesses, and communities with a system that makes solar usage visible, verifiable, and valuable.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-white/90 text-xl leading-relaxed">
              Our goal is simple: turn everyday clean energy generation into measurable climate impact that attracts businesses, partners, and investors.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F6B842] mt-2.5 flex-shrink-0" />
                <p className="text-white/80 text-lg">Automated real-time data from the RanaMeter</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F6B842] mt-2.5 flex-shrink-0" />
                <p className="text-white/80 text-lg">Verified data, secured and standardized</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F6B842] mt-2.5 flex-shrink-0" />
                <p className="text-white/80 text-lg">Transparent metrics aligned with global standards</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F6B842] mt-2.5 flex-shrink-0" />
                <p className="text-white/80 text-lg">Scalable, professional, and partner-ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
