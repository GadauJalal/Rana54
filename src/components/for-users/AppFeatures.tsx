import { Activity, Bell, TrendingUp, Award, Wallet, Download } from "lucide-react";

export function AppFeatures() {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Usage",
      description: "Live monitoring of solar production and consumption with granular time-series data."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified about system performance, earnings milestones, and payout processing."
    },
    {
      icon: TrendingUp,
      title: "Daily & Weekly Trends",
      description: "Beautiful charts showing your production patterns, seasonal trends, and efficiency insights."
    },
    {
      icon: Award,
      title: "Impact Badges",
      description: "Celebrate milestones with CO₂ avoided badges and share your clean energy achievements."
    },
    {
      icon: Wallet,
      title: "Integrated Wallet",
      description: "Multiple payout methods including bank transfer, mobile money, and digital wallets."
    },
    {
      icon: Download,
      title: "Export Statements",
      description: "Download detailed reports for tax purposes or personal record-keeping in CSV or PDF."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">RanaOS App Features</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to monitor, manage, and monetize your solar energy
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const gradients = [
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F57B44] to-[#e06a33]",
            "from-[#F6B842] to-[#F57B44]",
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F57B44] to-[#e06a33]",
            "from-[#F6B842] to-[#F57B44]"
          ];
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* App preview mockup */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-10 shadow-lg mt-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20 mb-6">
            <span className="text-[#527E5F] tracking-wide">Available on iOS & Android</span>
          </div>
          <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">Download RanaOS Today</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get instant access to your solar data, earnings, and impact metrics from anywhere.
          </p>
          
          {/* App store badges placeholder */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-8 py-4 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="text-sm opacity-80">Download on the</div>
              <div className="text-xl">App Store</div>
            </div>
            <div className="px-8 py-4 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="text-sm opacity-80">Get it on</div>
              <div className="text-xl">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
