import { Leaf, Zap, Sun, Wind, Droplet, Battery, Globe } from "lucide-react";

export function TrustedBySection() {
  const partners = [
    { name: "SolarEdge Africa", icon: Sun },
    { name: "GreenTech Partners", icon: Leaf },
    { name: "CleanEnergy Co", icon: Zap },
    { name: "WindPower Africa", icon: Wind },
    { name: "AquaSolar", icon: Droplet },
    { name: "PowerGrid Plus", icon: Battery },
    { name: "EcoGlobal", icon: Globe },
    { name: "SunRise Energy", icon: Sun },
  ];

  // Double the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#527E5F_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#F57B44_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#527E5F]" />
            <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-500">
              trusted by{" "}
              <span className="text-[#527E5F]">Green Tech Leaders</span>
            </p>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#527E5F]" />
          </div>
        </div>

        {/* Scrolling logo strip with gradient masks */}
        <div className="relative">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite hover:[animation-play-state:paused]">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex-shrink-0 group"
                >
                  {/* Icon with premium styling */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#527E5F]/10 to-[#3d5d48]/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <partner.icon className="w-4 sm:w-5 h-4 sm:h-5 text-[#527E5F]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Company name */}
                  <span className="text-sm sm:text-base text-gray-700 tracking-tight whitespace-nowrap group-hover:text-[#527E5F] transition-colors">
                    {partner.name}
                  </span>

                  {/* Separator dot */}
                  <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-gray-300 ml-3 sm:ml-5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional subtext */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            Powering verified impact across Africa and beyond
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
      `}</style>
    </div>
  );
}