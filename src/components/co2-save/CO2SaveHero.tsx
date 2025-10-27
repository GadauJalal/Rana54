import { TrendingUp, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function CO2SaveHero() {
  const [co2Count, setCo2Count] = useState(12847);
  const [kwhCount, setKwhCount] = useState(8542163);

  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Count(prev => prev + Math.floor(Math.random() * 3) + 1);
      setKwhCount(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#527E5F]/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16">
        {/* Left: Content */}
        <div className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20">
            <span className="text-[#527E5F] tracking-wide">Climate Impact</span>
          </div>

          <div>
            <h1 className="mb-6 tracking-tight text-gray-900 leading-tight">
              Turning clean energy data into measurable climate impact
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Rana54 converts verified energy generation into certified carbon savings that fund more solar access.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span className="tracking-wide">See Our Methodology</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#527E5F] rounded-xl border-2 border-[#527E5F] hover:bg-[#527E5F]/5 transition-all duration-300">
              <span className="tracking-wide">Join the Impact Network</span>
            </button>
          </div>
        </div>

        {/* Right: Animated CO2 Counter */}
        <div className="relative">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-2xl">
            {/* Live indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-[#F57B44] rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 tracking-wide">LIVE TRACKING</span>
            </div>

            {/* Main counter */}
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#527E5F]/5 border border-[#527E5F]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#527E5F] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-gray-600 tracking-wide">CO₂ Avoided</span>
                </div>
                <div className="text-gray-900 mb-1 tabular-nums">
                  {co2Count.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">tCO₂e and counting</div>
              </div>

              {/* Sub metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-[#F6B842]/10 border border-[#F6B842]/20">
                  <div className="text-gray-900 mb-1 tabular-nums">
                    {kwhCount.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600">kWh Tracked</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-[#F57B44]/10 border border-[#F57B44]/20">
                  <div className="text-gray-900 mb-1">847+</div>
                  <div className="text-xs text-gray-600">Sites Active</div>
                </div>
              </div>

              {/* Graph visualization */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="text-xs text-gray-500 mb-3">Impact Over Time</div>
                <div className="flex items-end justify-between h-32 gap-2">
                  {[45, 52, 48, 65, 58, 72, 68, 80, 75, 88, 92, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-[#527E5F] transition-all duration-500 relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {Math.floor(height * 100)} tCO₂e
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
