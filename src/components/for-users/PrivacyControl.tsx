import { Lock, UserCheck, Download, Eye } from "lucide-react";

export function PrivacyControl() {
  const privacyFeatures = [
    {
      icon: Lock,
      title: "Your Data, Your Control",
      description: "You decide when and how your data is shared with businesses. Opt-in only—no surprise data sales.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: UserCheck,
      title: "Site Identity, Not Personal Details",
      description: "We use device and site IDs for verification. Your personal information stays private.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Download,
      title: "Download or Delete Anytime",
      description: "Export your complete data history or request full deletion with one click.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Eye,
      title: "Transparent Data Usage",
      description: "Clear documentation of what data we collect, why we collect it, and who can access it.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Privacy & Control</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your energy data belongs to you—always
        </p>
      </div>

      {/* Privacy features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {privacyFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Privacy policy link */}
      <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <p className="text-gray-600 mb-4">
          We take your privacy seriously. Read our full privacy policy to understand how we protect your data.
        </p>
        <button className="text-[#527E5F] hover:underline">
          View Privacy Policy →
        </button>
      </div>
    </div>
  );
}
