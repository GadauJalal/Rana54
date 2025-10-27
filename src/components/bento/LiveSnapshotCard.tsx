import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, Activity, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function LiveSnapshotCard() {
  const [currentPower, setCurrentPower] = useState(3.2);
  
  // Simulate live power fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower(prev => Math.max(2.8, Math.min(3.8, prev + (Math.random() - 0.5) * 0.3)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="relative p-10 border-0 shadow-[0_20px_70px_-15px_rgba(82,126,95,0.3)] hover:shadow-[0_30px_90px_-15px_rgba(82,126,95,0.4)] transition-all h-full flex flex-col bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48] text-white overflow-hidden group">
      {/* Refined ambient lighting */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#F57B44]/15 rounded-full blur-3xl" />
      
      {/* Refined corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-[3px] border-r-[3px] border-[#F6B842]/25 rounded-tr-[2rem]" />
      
      <div className="relative space-y-8 flex-grow">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative flex items-center justify-center w-7 h-7">
              <div className="absolute w-7 h-7 rounded-full bg-[#F6B842] opacity-40 animate-ping" />
              <div className="relative w-3.5 h-3.5 rounded-full bg-[#F6B842]" />
            </div>
            <span className="text-sm tracking-widest uppercase opacity-90">Live Data</span>
          </div>
          <h3 className="text-4xl tracking-tight">Right Now</h3>
        </div>
        
        {/* Current generation - refined */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-[1.5rem] p-8 border-2 border-white/20 shadow-2xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6B842]/20 flex items-center justify-center">
                <Sun className="w-5 h-5 text-[#F6B842]" strokeWidth={2.5} />
              </div>
              <p className="text-base opacity-90 tracking-wide">Generating</p>
            </div>
            <Activity className="w-5 h-5 text-[#F6B842]" strokeWidth={2} />
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <p className="text-7xl font-black tabular-nums tracking-tight">{currentPower.toFixed(1)}</p>
            <span className="text-2xl opacity-80 pb-2">kW</span>
          </div>
          {/* Refined progress indicator */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#F6B842] to-[#F57B44] rounded-full transition-all duration-500" 
                 style={{ width: `${(currentPower / 4) * 100}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-6 border border-white/20 hover:bg-white/15 transition-all">
            <p className="text-sm opacity-80 mb-3 tracking-wide">Today's CO₂</p>
            <p className="text-4xl mb-3 font-black">186</p>
            <div className="inline-flex items-center gap-1.5 bg-[#F6B842]/20 px-3 py-1.5 rounded-lg">
              <span className="text-xs text-[#F6B842]">kg saved</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-6 border border-white/20 hover:bg-white/15 transition-all">
            <p className="text-sm opacity-80 mb-3 tracking-wide">Earnings</p>
            <p className="text-4xl mb-3 font-black">₦12k</p>
            <div className="inline-flex items-center gap-1.5 bg-[#F57B44]/20 px-3 py-1.5 rounded-lg">
              <TrendingUp className="w-3 h-3 text-[#F57B44]" strokeWidth={2.5} />
              <span className="text-xs text-[#F57B44]">+18%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-8 pt-6 border-t border-white/20">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F6B842]" />
          <span className="text-sm opacity-80 tracking-wide">Updated 2 seconds ago</span>
        </div>
      </div>
    </Card>
  );
}
