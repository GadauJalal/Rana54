import { LayoutDashboard, Palette, BookOpen, Headphones, FileText, BarChart } from "lucide-react";

export function ToolsSupport() {
  const tools = [
    {
      icon: LayoutDashboard,
      title: "Partner Dashboard",
      description: "Track installs, earnings, client sites, and inventory in real-time. Monitor your deployment pipeline and revenue streams from one unified interface.",
      features: ["Installation tracking", "Revenue analytics", "Client management", "Inventory status"]
    },
    {
      icon: Palette,
      title: "Co-Branded Materials",
      description: "Access customizable marketing templates, case studies, and sales presentations featuring your brand alongside Rana54.",
      features: ["Sales decks", "Brochures", "Case templates", "Social media assets"]
    },
    {
      icon: BookOpen,
      title: "Technical Documentation",
      description: "Comprehensive installation guides, API references, and integration specs for seamless RanaMeter deployments.",
      features: ["Install guides", "API docs", "Video tutorials", "Troubleshooting"]
    }
  ];

  const support = [
    {
      icon: Headphones,
      title: "Live Support Channel",
      description: "Dedicated Slack channel with direct access to our technical and sales teams",
      availability: "Available 8am-6pm EAT, Monday-Friday"
    },
    {
      icon: FileText,
      title: "Partner Resources",
      description: "Library of best practices, deployment checklists, and success stories",
      availability: "24/7 access via partner portal"
    },
    {
      icon: BarChart,
      title: "Business Reviews",
      description: "Quarterly strategy sessions to optimize your deployments and revenue",
      availability: "Scheduled per partner tier"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Tools & Support</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to succeed as a Rana54 partner
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const gradients = [
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F6B842] to-[#F57B44]",
            "from-[#F57B44] to-[#e06a33]"
          ];
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#F57B44]/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-2 tracking-wide">{tool.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Support section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl text-white mb-4 tracking-tight">Dedicated Partner Support</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our team is committed to your success with responsive technical support and strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {support.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-white mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">{item.description}</p>
                  <div className="text-xs text-[#F6B842]">{item.availability}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
