import { useState } from "react";
import { Download, Eye, FileText, Filter } from "lucide-react";

const archiveReports = [
  {
    id: 1,
    title: "Impact Report Q2 2025",
    type: "Impact Report",
    excerpt: "Comprehensive quarterly analysis of clean energy impact across our deployment regions.",
    coverColor: "bg-[#527E5F]",
    date: "July 15, 2025",
    version: "v1.0",
    size: "4.2 MB",
    region: "East Africa",
  },
  {
    id: 2,
    title: "Technical Performance Review 2025",
    type: "Technical Report",
    excerpt: "Annual assessment of RanaMeter device performance, uptime, and data integrity metrics.",
    coverColor: "bg-[#F57B44]",
    date: "June 30, 2025",
    version: "v1.1",
    size: "6.8 MB",
    region: "Multi-region",
  },
  {
    id: 3,
    title: "ESG Impact & Financial Update Q1 2025",
    type: "Financial & ESG",
    excerpt: "Investor report covering financial performance and environmental, social, governance metrics.",
    coverColor: "bg-[#F6B842]",
    date: "April 20, 2025",
    version: "v1.0",
    size: "3.4 MB",
    region: "Global",
  },
  {
    id: 4,
    title: "Uganda Pilot Program Summary",
    type: "Program Update",
    excerpt: "Results and learnings from our 6-month pilot deployment in rural Uganda communities.",
    coverColor: "bg-[#527E5F]",
    date: "March 15, 2025",
    version: "v1.0",
    size: "2.9 MB",
    region: "Uganda",
  },
  {
    id: 5,
    title: "Impact Report Q4 2024",
    type: "Impact Report",
    excerpt: "Year-end impact assessment including carbon savings, community benefits, and growth metrics.",
    coverColor: "bg-[#527E5F]",
    date: "January 30, 2025",
    version: "v1.0",
    size: "5.1 MB",
    region: "East Africa",
  },
  {
    id: 6,
    title: "MRV Methodology Report 2024",
    type: "Technical Report",
    excerpt: "Detailed documentation of our measurement, reporting, and verification framework.",
    coverColor: "bg-[#F57B44]",
    date: "December 10, 2024",
    version: "v2.0",
    size: "7.3 MB",
    region: "Global",
  },
];

export function ReportsArchive() {
  const [sortBy, setSortBy] = useState<"date" | "type">("date");
  const [filterType, setFilterType] = useState<string>("all");

  const reportTypes = ["all", "Impact Report", "Technical Report", "Financial & ESG", "Program Update"];

  const filteredReports = archiveReports.filter(
    (report) => filterType === "all" || report.type === filterType
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
            Reports Archive
          </h2>
          <p className="text-lg text-gray-600">
            Browse our complete collection of published reports
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Filter Dropdown */}
          <div className="relative">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                {filterType === "all" ? "All Types" : filterType}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {reportTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              filterType === type
                ? "bg-[#527E5F] text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {type === "all" ? "All Reports" : type}
          </button>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden group"
          >
            {/* Cover Thumbnail */}
            <div className={`${report.coverColor} p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative">
                <FileText className="w-12 h-12 text-white mb-4" />
                <p className="text-sm text-white/80 mb-1 tracking-wide">
                  {report.type}
                </p>
                <h4 className="text-xl text-white tracking-tight leading-tight">
                  {report.title}
                </h4>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                {report.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527E5F]"></span>
                  {report.version}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  {report.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  {report.size}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2.5 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
