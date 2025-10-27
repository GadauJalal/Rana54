import { BarChart3, Bell, DollarSign, Users, Smartphone, Monitor } from "lucide-react";

export function StepRanaOS() {
  const features = [
    {
      icon: BarChart3,
      title: "Live Energy Data",
      description: "Real-time monitoring of generation and usage"
    },
    {
      icon: DollarSign,
      title: "Earnings Tracking",
      description: "See your CO₂ avoided and accumulated earnings"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Payouts, performance alerts, and insights"
    },
    {
      icon: Users,
      title: "Multi-Site Management",
      description: "Admins manage multiple sites from one interface"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: App mockup placeholder */}
      <div className="relative order-2 lg:order-1">
        <div className="aspect-[4/3] rounded-3xl bg-gray-50 border-2 border-gray-200 shadow-2xl overflow-hidden">
          {/* Placeholder for app/dashboard mockup */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              {/* Dashboard mockup */}
              <div className="w-full h-full rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="h-16 bg-[#527E5F] flex items-center px-6 gap-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-white" />
                    <span className="text-white tracking-wide">RanaOS Dashboard</span>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
                    <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 space-y-4">
                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-[#527E5F]/10 border border-[#527E5F]/20">
                      <div className="h-2 w-3/4 rounded-full bg-[#527E5F]/40 mb-2" />
                      <div className="h-4 w-full rounded bg-[#527E5F]/60" />
                    </div>
                    <div className="p-3 rounded-xl bg-[#F57B44]/10 border border-[#F57B44]/20">
                      <div className="h-2 w-3/4 rounded-full bg-[#F57B44]/40 mb-2" />
                      <div className="h-4 w-full rounded bg-[#F57B44]/60" />
                    </div>
                    <div className="p-3 rounded-xl bg-[#F6B842]/10 border border-[#F6B842]/20">
                      <div className="h-2 w-3/4 rounded-full bg-[#F6B842]/40 mb-2" />
                      <div className="h-4 w-full rounded bg-[#F6B842]/60" />
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-lg bg-[#F6B842] transition-all duration-500"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity list */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-8 h-8 rounded-full bg-[#527E5F] flex-shrink-0" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2 w-3/4 rounded-full bg-gray-300" />
                          <div className="h-2 w-1/2 rounded-full bg-gray-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile app overlay */}
              <div className="absolute bottom-4 right-4 w-32 h-48 rounded-2xl bg-[#527E5F] shadow-2xl border-4 border-white p-2">
                <div className="w-full h-full rounded-xl bg-black/20 backdrop-blur-sm p-2 space-y-2">
                  <div className="h-8 rounded-lg bg-white/20" />
                  <div className="space-y-1">
                    <div className="h-2 rounded bg-white/30 w-3/4" />
                    <div className="h-2 rounded bg-white/20 w-1/2" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white/10 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#F6B842]/10 blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#F57B44]/10 blur-3xl -z-10" />
            </div>
          </div>

          {/* Image placeholder text */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
            <p className="text-sm text-gray-600 text-center">
              <span className="text-gray-900">RanaOS Interface</span> — Cross-platform app + web dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="space-y-8 order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20">
          <span className="text-[#F57B44] tracking-wide">Step 2</span>
        </div>

        <div>
          <h2 className="text-5xl mb-4 tracking-tight text-gray-900">
            RanaOS: Analyze & Control
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your command center for monitoring performance, tracking earnings, and managing your clean energy ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#F57B44]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F57B44] flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-900 mb-1 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200">
            <Smartphone className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">iOS & Android</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200">
            <Monitor className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">Web Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
