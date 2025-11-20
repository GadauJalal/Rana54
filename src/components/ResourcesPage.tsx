import { Download, FileText, Eye, Filter } from "lucide-react";
import { useState } from "react";

// Combined resources data
const resources = [
  // White Papers
  {
    id: 1,
    category: "White Paper",
    title: "Rana54 White Paper",
    description: "Complete technical documentation covering verification frameworks, MRV methodology, and carbon market integration.",
    version: "v2.1",
    date: "October 15, 2025",
    size: "8.2 MB",
    color: "bg-[#527E5F]",
  },
  {
    id: 2,
    category: "White Paper",
    title: "Executive Summary",
    description: "Concise overview for decision-makers highlighting key technical and economic frameworks.",
    version: "v2.1",
    date: "October 15, 2025",
    size: "1.8 MB",
    color: "bg-[#527E5F]",
  },
  {
    id: 3,
    category: "White Paper",
    title: "Technical Appendix",
    description: "Detailed specifications, data schemas, and implementation guidelines.",
    version: "v2.0",
    date: "September 20, 2025",
    size: "4.5 MB",
    color: "bg-[#527E5F]",
  },
  
  // Reports
  {
    id: 4,
    category: "Impact Report",
    title: "Q3 2025 Impact Report",
    description: "Comprehensive quarterly analysis of clean energy impact across East Africa deployment regions.",
    version: "v1.0",
    date: "October 15, 2025",
    size: "4.8 MB",
    color: "bg-[#F57B44]",
  },
  {
    id: 5,
    category: "Impact Report",
    title: "Q2 2025 Impact Report",
    description: "Quarterly performance review covering carbon savings, community benefits, and verified energy generation.",
    version: "v1.0",
    date: "July 15, 2025",
    size: "4.2 MB",
    color: "bg-[#F57B44]",
  },
  {
    id: 6,
    category: "Technical Report",
    title: "Technical Performance Review 2025",
    description: "Annual assessment of RanaMeter device performance, uptime, and data integrity metrics.",
    version: "v1.1",
    date: "June 30, 2025",
    size: "6.8 MB",
    color: "bg-[#F6B842]",
  },
  {
    id: 7,
    category: "Technical Report",
    title: "MRV Methodology Report 2024",
    description: "Detailed documentation of measurement, reporting, and verification framework.",
    version: "v2.0",
    date: "December 10, 2024",
    size: "7.3 MB",
    color: "bg-[#F6B842]",
  },
  {
    id: 8,
    category: "Financial Report",
    title: "ESG Impact & Financial Update Q1 2025",
    description: "Investor report covering financial performance and environmental, social, governance metrics.",
    version: "v1.0",
    date: "April 20, 2025",
    size: "3.4 MB",
    color: "bg-[#527E5F]",
  },
  {
    id: 9,
    category: "Program Report",
    title: "Uganda Pilot Program Summary",
    description: "Results and learnings from 6-month pilot deployment in rural Uganda communities.",
    version: "v1.0",
    date: "March 15, 2025",
    size: "2.9 MB",
    color: "bg-[#F57B44]",
  },
];

export function ResourcesPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "White Paper", "Impact Report", "Technical Report", "Financial Report", "Program Report"];

  const filteredResources = resources.filter(
    (resource) => filter === "all" || resource.category === filter
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="space-y-12 sm:space-y-16">
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#527E5F]/10 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#527E5F]" />
              <span className="text-sm text-[#527E5F] tracking-wide">Documentation & Reports</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 tracking-tight text-gray-900 leading-[1.1]">
              Resources
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Access white papers, impact reports, and technical documentation covering Rana54's verification frameworks, performance metrics, and carbon methodology.
            </p>

            <button className="w-full sm:w-auto px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
              <Download className="w-5 h-5" />
              <span className="tracking-wide">Download Latest Report</span>
            </button>
          </section>

          {/* Filter */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl tracking-tight text-gray-900">
                Browse Resources
              </h2>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
                </span>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 text-xs sm:text-sm ${
                    filter === category
                      ? "bg-[#527E5F] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All Resources" : category}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden group"
                >
                  {/* Header */}
                  <div className={`${resource.color} p-5 sm:p-6`}>
                    <FileText className="w-8 sm:w-10 h-8 sm:h-10 text-white mb-3" />
                    <p className="text-xs sm:text-sm text-white/80 mb-1 tracking-wide">
                      {resource.category}
                    </p>
                    <h3 className="text-lg sm:text-xl text-white tracking-tight leading-tight">
                      {resource.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#527E5F]"></span>
                        {resource.version}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        {resource.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        {resource.size}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 sm:px-4 py-2.5 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                        <span className="sm:hidden">Get</span>
                      </button>
                      <button className="px-3 sm:px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Transparency Note */}
          <section className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-4 tracking-tight">
                Transparency Commitment
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                All reports are independently verified and aligned with international standards including Gold Standard, Verra VCS, and CDM methodologies. Every data point is traceable to source devices with full chain-of-custody documentation.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
