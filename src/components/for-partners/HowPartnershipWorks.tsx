import { UserPlus, GraduationCap, Zap, DollarSign } from "lucide-react";

export function HowPartnershipWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up",
      description: "Apply and get verified as an official Rana partner",
      detail: "Complete our partner application with your company details, service area, and deployment capabilities. Our team reviews and approves qualified partners within 5 business days.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "Onboard",
      description: "Receive training, materials, and dashboard access",
      detail: "Join our partner onboarding program with live training sessions, technical documentation, and sales enablement materials. Get credentials for the partner dashboard and ordering system.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      number: "03",
      icon: Zap,
      title: "Deploy",
      description: "Install RanaMeters and link systems to RanaOS",
      detail: "Integrate RanaMeter devices into your solar installations following our installation guides. Register systems in RanaOS, assign to client accounts, and activate verification services.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      number: "04",
      icon: DollarSign,
      title: "Earn",
      description: "Share in device, data, and credit revenue",
      detail: "Receive commissions on hardware sales, ongoing service fees, and carbon credit revenue sharing. Track earnings in real-time through your partner dashboard with monthly payouts.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">How Partnership Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From application to revenue in four simple steps
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#F57B44]/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6">
                <span className="text-5xl opacity-10 tracking-tight">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Timeline visual */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
        <div className="text-center">
          <h4 className="text-2xl text-gray-900 mb-4 tracking-tight">Fast-Track to Revenue</h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Most partners complete onboarding and deploy their first systems within 2-3 weeks of approval.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-xl bg-white border border-gray-200">
              <div className="text-2xl text-[#F57B44] mb-1">5 days</div>
              <div className="text-sm text-gray-600">Application review</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="px-6 py-3 rounded-xl bg-white border border-gray-200">
              <div className="text-2xl text-[#F6B842] mb-1">1 week</div>
              <div className="text-sm text-gray-600">Training & setup</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="px-6 py-3 rounded-xl bg-white border border-gray-200">
              <div className="text-2xl text-[#527E5F] mb-1">2 weeks</div>
              <div className="text-sm text-gray-600">First deployments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
