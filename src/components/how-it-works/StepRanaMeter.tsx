import { Activity, Lock, Wifi, WifiOff, Database } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function StepRanaMeter() {
  const features = [
    {
      icon: Activity,
      title: "Smart IoT Device",
      description: "Installed at each site to monitor energy in real-time"
    },
    {
      icon: Database,
      title: "Source Monitoring",
      description: "Tracks energy generation and usage at the source"
    },
    {
      icon: Lock,
      title: "Tamper-Proof",
      description: "Signs each reading with a unique device key"
    },
    {
      icon: Wifi,
      title: "Auto-Sync",
      description: "Works online or offline; auto-syncs when connected"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20">
          <span className="text-[#527E5F] tracking-wide">Step 1</span>
        </div>

        <div>
          <h2 className="text-5xl mb-4 tracking-tight text-gray-900">
            RanaMeter: Capture & Measure
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The foundation of verified clean energy data starts at the source with our smart IoT device.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#527E5F] flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-900 mb-1 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Energy flow visualization */}
        <div className="p-6 rounded-2xl bg-[#F6B842]/10 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-[#F6B842]" />
                <span className="text-sm text-gray-600">Solar Panels</span>
              </div>
              <div className="h-2 rounded-full bg-[#F6B842] animate-pulse" />
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="w-16 h-16 rounded-xl bg-[#527E5F] flex items-center justify-center shadow-lg">
              <Activity className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Live energy data flowing from solar panels to RanaMeter
          </p>
        </div>
      </div>

      {/* Right: Device visual placeholder */}
      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gray-50 border-2 border-gray-200 shadow-2xl overflow-hidden">
          {/* Placeholder for device image */}
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="relative w-full h-full">
              {/* Device mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-3xl bg-[#527E5F] shadow-2xl p-8 border-8 border-white/20 relative">
                  {/* Screen */}
                  <div className="w-full h-full rounded-2xl bg-black/10 backdrop-blur-sm border-2 border-white/30 p-6 flex flex-col items-center justify-center gap-4">
                    <Activity className="w-16 h-16 text-white animate-pulse" />
                    <div className="space-y-2 w-full">
                      <div className="h-3 rounded-full bg-white/40 w-3/4 mx-auto" />
                      <div className="h-3 rounded-full bg-white/30 w-1/2 mx-auto" />
                      <div className="h-3 rounded-full bg-white/20 w-2/3 mx-auto" />
                    </div>
                  </div>
                  {/* LED indicator */}
                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#F6B842] animate-pulse shadow-lg" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-[#F6B842]/20 blur-2xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[#F57B44]/20 blur-2xl" />
            </div>
          </div>
          
          {/* Image placeholder text */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
            <p className="text-sm text-gray-600 text-center">
              <span className="text-gray-900">RanaMeter Device</span> — IoT hardware installed at energy source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sun({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
