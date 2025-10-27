import { MapPin, Users, Zap, TrendingUp, Calendar, Download, ExternalLink } from "lucide-react";

export function FeaturedCaseStudies() {
  const caseStudies = [
    {
      title: "Rural Solar Electrification - Kenya",
      location: "Kisumu County, Kenya",
      date: "Jan 2024 - Ongoing",
      status: "Active",
      statusColor: "#527E5F",
      image: "kenya",
      metrics: {
        households: "847",
        energy: "524 MWh",
        co2: "412 tCO₂e",
        revenue: "$84,200"
      },
      description: "Community-scale solar deployment with RanaMeter tracking across 847 households in off-grid regions.",
      highlights: [
        "First-of-kind carbon credit issuance for rural solar",
        "100% uptime with offline data sync capability",
        "Average $8.50/month earnings per household"
      ],
      reportUrl: "#"
    },
    {
      title: "Commercial Solar Pilot - Nigeria",
      location: "Lagos, Nigeria",
      date: "Aug 2023 - Dec 2024",
      status: "Completed",
      statusColor: "#F6B842",
      image: "nigeria",
      metrics: {
        sites: "24",
        energy: "1.2 GWh",
        co2: "890 tCO₂e",
        revenue: "$247,000"
      },
      description: "Pilot program tracking solar installations across 24 commercial sites, demonstrating enterprise-scale verification.",
      highlights: [
        "Integration with national grid monitoring",
        "Third-party audit by Gold Standard",
        "Achieved 99.7% data accuracy rating"
      ],
      reportUrl: "#"
    },
    {
      title: "Mini-Grid Network - Tanzania",
      location: "Dodoma Region, Tanzania",
      date: "Mar 2024 - Ongoing",
      status: "Active",
      statusColor: "#527E5F",
      image: "tanzania",
      metrics: {
        minigrids: "12",
        energy: "840 MWh",
        co2: "658 tCO₂e",
        revenue: "$124,800"
      },
      description: "Multi-site mini-grid tracking demonstrating RanaOS fleet management across distributed energy resources.",
      highlights: [
        "12 mini-grids monitored from single dashboard",
        "Real-time performance alerts reduced downtime by 40%",
        "Community ownership model with transparent revenue sharing"
      ],
      reportUrl: "#"
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20 mb-4 sm:mb-6">
          <span className="text-[#F6B842] tracking-wide text-sm">In-Depth Analysis</span>
        </div>
        <h2 className="mb-4 sm:mb-6 tracking-tight text-gray-900 px-4">
          Featured Case Studies
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          In-depth analysis of pilot programs showing real impact, verified data, and community outcomes.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="group p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Left: Image placeholder */}
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-2xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20 relative overflow-hidden group-hover:border-[#F6B842]/40 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#527E5F] flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm text-gray-600">{study.location}</div>
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: study.statusColor }}>
                    <span className="text-xs text-white tracking-wide">{study.status}</span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Header */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <h3 className="text-gray-900 tracking-tight leading-tight flex-1">
                      {study.title}
                    </h3>
                    <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] hover:shadow-lg transition-all duration-300 flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-center">
                      <Download className="w-4 h-4" strokeWidth={2.5} />
                      <span className="text-sm tracking-wide">Report</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" strokeWidth={2.5} />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" strokeWidth={2.5} />
                      <span>{study.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {Object.entries(study.metrics).map(([key, value], i) => (
                    <div key={i} className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F6B842]/10 border-2 border-[#F6B842]/20 hover:border-[#F6B842]/40 hover:shadow-lg transition-all duration-300">
                      <div className="text-gray-900 mb-1 sm:mb-2 tabular-nums">{value}</div>
                      <div className="text-xs text-gray-600 capitalize tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200">
                  <div className="tracking-wide text-gray-900">Key Highlights:</div>
                  <ul className="space-y-2 sm:space-y-3">
                    {study.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#527E5F] mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action link */}
                <button className="group/link flex items-center gap-2 text-[#527E5F] hover:text-[#3d5d48] transition-colors duration-300">
                  <span className="tracking-wide">View Full Case Study</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
