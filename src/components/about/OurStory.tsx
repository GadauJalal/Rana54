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
                  Across Africa, millions of solar systems generate clean energy every day—yet this impact remains invisible. Fragmented data, unverifiable claims, and disconnected systems meant that solar users couldn't prove their contribution to climate action or access the value their clean energy creates.
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
                  We built a unified ecosystem—RanaMeter hardware for tamper-proof measurement, RanaOS for seamless data management, and RanaID for verifiable digital identity. Together, they make every watt of clean energy measurable, traceable, and valuable.
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
              Rana54 was founded on a simple belief: clean energy should benefit everyone—not just those who can afford expensive verification systems. We saw an opportunity to merge IoT, blockchain, and climate technology to democratize access to carbon markets and energy finance.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Starting with pilot deployments in Kenya, we've grown into a pan-African platform serving thousands of users. Every device we deploy, every kilowatt-hour we verify, and every dollar we help users earn brings us closer to a future where clean energy is truly universal.
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
