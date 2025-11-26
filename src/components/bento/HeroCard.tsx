import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Zap } from "lucide-react";
import Video from "../../assets/herovid.mp4";

export function HeroCard() {
  return (
    <Card className="relative overflow-hidden border-0 shadow-[0_30px_90px_-15px_rgba(82,126,95,0.15)] group bg-white">
      {/* Premium sun-ray pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#F57B44] to-transparent origin-left"
            style={{ transform: `rotate(${i * 22.5}deg) translateX(-50%)` }}
          />
        ))}
      </div>

      <div className="relative p-6 sm:p-10 lg:p-20 flex flex-col items-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#527E5F] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all mb-8 sm:mb-12 text-sm sm:text-base">
          <Zap className="w-3 sm:w-4 h-3 sm:h-4" strokeWidth={2.5} fill="#F6B842" />
          <span className="tracking-wide">Verified Impact Platform</span>
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-center text-center max-w-[700px] mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] leading-[1.15] tracking-[-0.7px] mb-6 sm:mb-8">
            Turning solar{" "}
            <span className="relative inline-block">
              <span className="relative z-10">energy into</span>
              <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-4 bg-[#F6B842]/25 -rotate-1" />
            </span>{" "}
            <span className="text-[#527E5F]">verified impact</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-[520px] mb-8 sm:mb-12 px-4 sm:px-0">
            Rana54 connects clean energy generation with financial value. With our device, app, and verification pipeline, every kilowatt counts toward real climate solutions.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-5 justify-center px-4 sm:px-0">
            <Button className="relative overflow-hidden bg-gradient-to-r from-[#F57B44] to-[#e06a33] hover:from-[#e06a33] hover:to-[#F57B44] text-white px-8 sm:px-12 py-5 sm:py-7 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(245,123,68,0.5)] hover:scale-[1.02] transition-all duration-300 group/btn w-full sm:w-auto">
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                Get Started
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
              </span>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-[#527E5F] text-[#527E5F] hover:bg-[#527E5F] hover:text-white px-8 sm:px-12 py-5 sm:py-7 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
            >
              See demo
            </Button>
          </div>
        </div>

        {/* Hero video */}
        <div className="relative w-full max-w-5xl mt-6 sm:mt-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F6B842]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#527E5F]/10 rounded-full blur-3xl" />

          <div className="relative transform hover:scale-[1.01] transition-all duration-700">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#527E5F] via-[#F57B44] to-[#F6B842] rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="relative bg-white p-3 rounded-[2rem] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.25)]">
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/9]">
                <video src={Video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[#F6B842] to-[#F57B44] rounded-xl opacity-90 shadow-lg flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" strokeWidth={2.5} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
