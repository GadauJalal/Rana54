import { Lightbulb, AlertCircle, Zap } from "lucide-react";

export function OurStory() {
  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Our Story</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Born in Africa, built for global impact
        </p>
      </div>

      {/* Story content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Narrative */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2 tracking-wide">The Problem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Across Africa, millions of people and businesses still struggle with unreliable, expensive, and inconsistent power. Frequent outages, rising energy costs, and limited access to clean alternatives have created a cycle where productivity slows, opportunities shrink, and progress depends on the grid’s next flicker.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2 tracking-wide">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                 We built a unified ecosystem RanaMeter for tamper-proof measurement, RanaOS for seamless energy data management, and RanaID for secure digital identity.Together, they make every watt of clean energy measurable, traceable, and valuable.
To complete the loop, Rana-Iris brings intelligence to the system , a solar simulation tool that helps users understand their true energy potential, savings, and system needs before installation. It’s how we turn data into decisions, and decisions into lasting power for Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Vision statement */}
        <div className="relative">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] shadow-lg">
            <Lightbulb className="w-16 h-16 text-[#F6B842] mb-6" strokeWidth={2} />
            <h3 className="text-3xl text-white mb-6 tracking-tight">
              The Vision That Drives Us
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
             Rana54's vision is to power Africa’s next chapter through intelligence ,A future where clean, reliable energy is woven into everyday life, and where data and technology give people the power to take control of their own light.
We imagine a continent where electricity never limits potential , where a student can study without interruption, a business can run without fear of outages, and a village can thrive because its energy is homegrown, affordable, and smart.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Rana54 exists to turn that vision into reality. By combining measurement, management, and intelligence through RanaMeter, RanaOS, RanaID, and Rana-Iris, we are building Africa’s first connected clean-energy ecosystem , one that makes renewable power not just possible, but dependable and personal.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm text-white tracking-wide">From local roots to continental impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline snippet */}
      <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <div className="text-center mb-6">
          <h4 className="text-2xl text-gray-900 tracking-tight mb-2">Our Journey So Far</h4>
          <p className="text-gray-600">From concept to continental scale</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-3xl text-[#527E5F] mb-1">2021</div>
            <div className="text-sm text-gray-600">Founded</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="text-3xl text-[#F57B44] mb-1">2022</div>
            <div className="text-sm text-gray-600">First pilots</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="text-3xl text-[#F6B842] mb-1">2023</div>
            <div className="text-sm text-gray-600">Platform launch</div>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="text-3xl text-[#527E5F] mb-1">2024</div>
            <div className="text-sm text-gray-600">Multi-country scale</div>
          </div>
        </div>
      </div>
    </div>
  );
}
