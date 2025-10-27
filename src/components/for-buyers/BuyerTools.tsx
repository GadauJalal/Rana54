import { Filter, FileDown, Bell, Search, Code, Calendar } from "lucide-react";

export function BuyerTools() {
  const tools = [
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Filter by geography, credit type, vintage, and impact theme to find credits that match your portfolio requirements."
    },
    {
      icon: Search,
      title: "Site-Level Search",
      description: "Search credits by specific sites, installers, or project types with detailed provenance information."
    },
    {
      icon: FileDown,
      title: "Export Audit Packs",
      description: "Download comprehensive audit packages in CSV, JSON, or via API for compliance and reporting."
    },
    {
      icon: Bell,
      title: "Automated Alerts",
      description: "Get notified about new credit issuances, matching inventory, and batch availability in real-time."
    },
    {
      icon: Code,
      title: "API Access",
      description: "Programmatic access to credit data, verification proofs, and purchase workflows via REST API."
    },
    {
      icon: Calendar,
      title: "Batch Management",
      description: "Track credit batches, retirement schedules, and compliance deadlines with integrated calendar tools."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Business Tools & Dashboard</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Enterprise-grade tools for managing your carbon credit portfolio
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const gradients = [
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F6B842] to-[#F57B44]",
            "from-[#F57B44] to-[#e06a33]",
            "from-[#527E5F] to-[#3d5d48]",
            "from-[#F6B842] to-[#F57B44]",
            "from-[#F57B44] to-[#e06a33]"
          ];
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-2 tracking-wide">{tool.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tool.description}</p>
            </div>
          );
        })}
      </div>

      {/* Dashboard preview */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-10 shadow-lg mt-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20 mb-6">
            <span className="text-[#527E5F] tracking-wide">Built for Enterprise ESG Teams</span>
          </div>
          <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">Streamlined Credit Management</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our business dashboard integrates seamlessly with your existing ESG workflows and reporting systems.
          </p>
          
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Schedule a Dashboard Demo
          </button>
        </div>
      </div>
    </div>
  );
}
