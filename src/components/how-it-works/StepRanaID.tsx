import { ShieldCheck, FileCheck, Link2, Download, Award, Verified } from "lucide-react";

export function StepRanaID() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Digital Identity Layer",
      description: "Unique ID for each energy site and device"
    },
    {
      icon: Link2,
      title: "No Double-Counting",
      description: "Links verified data to real projects for integrity"
    },
    {
      icon: Award,
      title: "Generate Credits",
      description: "Creates verified energy attributes or carbon credits"
    },
    {
      icon: Download,
      title: "Registry-Compatible",
      description: "Downloadable proof in registry-compatible formats"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20">
          <span className="text-[#F6B842] tracking-wide">Step 3</span>
        </div>

        <div>
          <h2 className="text-5xl mb-4 tracking-tight text-gray-900">
            RanaID: Verify & Monetize
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform verified data into valuable carbon credits with our digital identity and verification layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#F6B842]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6B842] flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-900 mb-1 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Verification process */}
        <div className="p-6 rounded-2xl bg-[#F6B842]/10 border border-gray-200 space-y-4">
          <h3 className="text-gray-900 tracking-wide">Verification Process</h3>
          <div className="space-y-3">
            {[
              "Device data signed and encrypted",
              "Cross-referenced with project registry",
              "Third-party verification applied",
              "Carbon credit issued and tokenized"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#527E5F] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">{i + 1}</span>
                </div>
                <span className="text-sm text-gray-600">{step}</span>
                {i < 3 && <div className="ml-auto w-2 h-2 rounded-full bg-[#F6B842] animate-pulse" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Verification badge visualization placeholder */}
      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gray-50 border-2 border-gray-200 shadow-2xl overflow-hidden">
          {/* Placeholder for verification visualization */}
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="relative w-full h-full">
              {/* Central badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main badge */}
                  <div className="w-64 h-64 rounded-full bg-[#F6B842] p-2 shadow-2xl animate-pulse">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <ShieldCheck className="w-20 h-20 text-[#527E5F] mx-auto" strokeWidth={2} />
                        <div className="space-y-2">
                          <div className="h-3 rounded-full bg-gray-200 w-32 mx-auto" />
                          <div className="h-2 rounded-full bg-gray-100 w-24 mx-auto" />
                        </div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#527E5F]/10">
                          <Verified className="w-4 h-4 text-[#527E5F]" />
                          <span className="text-xs text-gray-700 tracking-wide">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-[#F57B44] shadow-lg flex items-center justify-center animate-bounce">
                    <FileCheck className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[#F6B842] shadow-lg flex items-center justify-center" style={{ animation: "bounce 2s infinite 0.5s" }}>
                    <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full border-4 border-[#527E5F]/20" />
                <div className="absolute top-16 left-16 w-32 h-32 rounded-full border-4 border-[#F57B44]/10" />
                <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border-4 border-[#F6B842]/20" />
                <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full border-4 border-[#527E5F]/10" />
              </div>

              {/* Decorative blurs */}
              <div className="absolute top-12 right-12 w-32 h-32 rounded-full bg-[#F6B842]/20 blur-3xl" />
              <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-[#527E5F]/20 blur-3xl" />
            </div>
          </div>

          {/* Image placeholder text */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
            <p className="text-sm text-gray-600 text-center">
              <span className="text-gray-900">RanaID Verification</span> — Digital identity & credit issuance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Verified({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
