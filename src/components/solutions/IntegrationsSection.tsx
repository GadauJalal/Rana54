import { Plug, Building, Code, Webhook, ExternalLink } from "lucide-react";

export function IntegrationsSection() {
  const integrationCategories = [
    {
      icon: Building,
      title: "Registries & Marketplaces",
      description: "Connect with leading carbon and renewable energy platforms",
      gradient: "from-[#527E5F] to-[#3d5d48]",
      partners: [
        "Gold Standard",
        "Verra Registry", 
        "I-REC",
        "PowerLedger",
        "Energy Web Chain"
      ]
    },
    {
      icon: Plug,
      title: "Financing & Installation",
      description: "Streamlined connections with installers and financing partners",
      gradient: "from-[#F57B44] to-[#e06a33]",
      partners: [
        "Solar installers",
        "Equipment financing",
        "Program operators",
        "Community developers",
        "Utility programs"
      ]
    },
    {
      icon: Code,
      title: "Developer APIs",
      description: "Robust APIs for custom integrations and data access",
      gradient: "from-[#F6B842] to-[#F57B44]",
      partners: [
        "Data export endpoints",
        "Real-time webhooks",
        "Bulk provisioning",
        "Fleet management",
        "Audit pack generation"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Integrations</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Seamlessly connect with the tools and platforms you already use
        </p>
      </div>

      {/* Integration categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {integrationCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-900 mb-2 tracking-wide">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>

              {/* Partners/Features list */}
              <div className="space-y-3">
                {category.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group/item"
                  >
                    <span className="text-gray-700">{partner}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover/item:text-[#527E5F] transition-colors" strokeWidth={2} />
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
            </div>
          );
        })}
      </div>

      {/* API showcase */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Webhook className="w-8 h-8 text-[#F6B842]" strokeWidth={2.5} />
              <h3 className="text-white tracking-wide">API-First Architecture</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Build custom integrations with our comprehensive REST API. Real-time webhooks notify your systems of issuance events, meter readings, and payout processing.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90">RESTful endpoints</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90">WebSocket streaming</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90">OpenAPI docs</span>
              </div>
            </div>
          </div>

          {/* Code preview mockup */}
          <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 font-mono text-sm">
            <div className="text-[#F6B842] mb-2">// Real-time webhook example</div>
            <div className="text-white/70">
              <div>POST /webhook/issuance</div>
              <div className="text-gray-400 pl-4">&#123;</div>
              <div className="text-gray-400 pl-8">"event": "credit_issued",</div>
              <div className="text-gray-400 pl-8">"device_id": "RM_001234",</div>
              <div className="text-gray-400 pl-8">"amount": 1.25,</div>
              <div className="text-gray-400 pl-8">"timestamp": "2024..."</div>
              <div className="text-gray-400 pl-4">&#125;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}