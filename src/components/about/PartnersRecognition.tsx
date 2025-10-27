import { Award, TrendingUp, Globe } from "lucide-react";

export function PartnersRecognition() {
  const partnerCategories = [
    {
      category: "Deployment Partners",
      partners: ["SolarTech Kenya", "Bright Energy Ltd", "PowerUp NGO", "CleanGrid Solutions"]
    },
    {
      category: "Technology Partners",
      partners: ["IoT Security Labs", "CloudInfra Africa", "Data Verification Systems"]
    },
    {
      category: "Carbon Market Partners",
      partners: ["Verra Registry", "Gold Standard", "Carbon Solutions Ltd"]
    },
    {
      category: "Financial Partners",
      partners: ["Impact Investment Fund", "Climate Finance Group", "Green Capital"]
    }
  ];

  const recognition = [
    {
      icon: Award,
      title: "Climate Tech Innovator",
      organization: "African Climate Summit 2023",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: TrendingUp,
      title: "Top 10 Energy Startups",
      organization: "Africa Energy Forum 2024",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Globe,
      title: "Sustainability Innovation Award",
      organization: "Global Impact Accelerator",
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  const accelerators = [
    "Y Combinator W23",
    "Google for Startups",
    "African Development Bank Innovation Lab",
    "ClimateWorks Accelerator"
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Partners & Recognition</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Building the future together with trusted collaborators
        </p>
      </div>

      {/* Partners grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partnerCategories.map((category, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-gray-900 mb-4 tracking-wide">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.partners.map((partner, partnerIndex) => (
                <div
                  key={partnerIndex}
                  className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600 hover:border-[#527E5F]/30 hover:bg-[#527E5F]/5 transition-all duration-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recognition awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recognition.map((award, index) => {
          const Icon = award.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h4 className="text-gray-900 mb-2 tracking-wide">{award.title}</h4>
              <p className="text-sm text-gray-600">{award.organization}</p>
            </div>
          );
        })}
      </div>

      {/* Accelerators & Support */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-6 tracking-tight text-center">
          Accelerator Programs & Support
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {accelerators.map((accelerator, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-600 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {accelerator}
            </div>
          ))}
        </div>
      </div>

      {/* Government & Registry Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] text-center">
          <h4 className="text-white mb-3 tracking-wide">Registry Partnerships</h4>
          <p className="text-white/80 text-sm mb-4">
            Official partnerships with leading carbon registries
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">Verra</span>
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">Gold Standard</span>
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">ISO 14064</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] text-center">
          <h4 className="text-white mb-3 tracking-wide">Government Support</h4>
          <p className="text-white/80 text-sm mb-4">
            Recognized by national energy programs
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">Kenya Energy Ministry</span>
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">Nigeria REA</span>
            <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white">AU Climate Initiative</span>
          </div>
        </div>
      </div>
    </div>
  );
}
