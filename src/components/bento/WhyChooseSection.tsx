import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

export function WhyChooseSection() {
  return (
    <Card className="relative p-6 sm:p-10 lg:p-16 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#527E5F]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#F57B44]/8 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Premium badge */}
        <div className="relative w-fit mb-6 sm:mb-8 group/badge mx-auto">
          <div className="absolute inset-0 bg-[#527E5F]/10 rounded-full blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
          <div className="relative backdrop-blur-sm bg-white/60 border border-black/6 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-[0px_0.84px_0.84px_-0.313px_rgba(1,71,36,0.09),0px_1.99px_1.99px_-0.625px_rgba(1,71,36,0.09),0px_3.631px_3.631px_-0.938px_rgba(1,71,36,0.09),0px_6.036px_6.036px_-1.25px_rgba(1,71,36,0.09)] flex items-center gap-2 sm:gap-3 group-hover/badge:scale-105 transition-transform duration-300">
            <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#527E5F] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="sm:w-[10px] sm:h-[10px]">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[11px] sm:text-[13px] text-[rgba(0,33,1,0.6)] tracking-[1.04px] uppercase">
              Why Choose Rana54
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] tracking-[-1.12px] leading-[1.1] text-[#002101] px-4 sm:px-0">
            The platform that makes{" "}
            <span className="italic">clean energy count</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl xl:text-[18px] text-[rgba(0,33,1,0.6)] leading-[1.8] max-w-[680px] mx-auto px-4 sm:px-0">
          We've built more than just technology. We've created a complete ecosystem that
          connects your solar generation to real climate action and financial opportunity.
        </p>

        {/* Optional: Add subtle decorative element */}
        <div className="mt-8 sm:mt-12 flex items-center gap-4 opacity-40 px-4 sm:px-0">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#527E5F] to-transparent" />
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
