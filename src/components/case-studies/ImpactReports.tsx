import { FileText, Download, Calendar, BarChart } from "lucide-react";

export function ImpactReports() {
  const reports = [
    {
      title: "2024 Annual Impact Report",
      date: "October 2024",
      type: "Annual Report",
      pages: "48 pages",
      size: "2.4 MB",
      color: "#527E5F",
      highlights: [
        "12,847 tCO₂e total avoided",
        "8.5M kWh tracked globally",
        "24 active projects across 12 countries"
      ]
    },
    {
      title: "Q3 2024 Performance Metrics",
      date: "September 2024",
      type: "Quarterly Report",
      pages: "24 pages",
      size: "1.8 MB",
      color: "#F6B842",
      highlights: [
        "847 new installations",
        "98.7% data accuracy rate",
        "$2.4M in carbon credit revenue"
      ]
    },
    {
      title: "Kenya Pilot: Full Analysis",
      date: "August 2024",
      type: "Case Study",
      pages: "32 pages",
      size: "3.1 MB",
      color: "#F57B44",
      highlights: [
        "847 households electrified",
        "First rural carbon credit issuance",
        "Community impact assessment"
      ]
    },
    {
      title: "MRV Methodology White Paper",
      date: "July 2024",
      type: "Technical Document",
      pages: "56 pages",
      size: "4.2 MB",
      color: "#527E5F",
      highlights: [
        "Detailed MRV framework",
        "IPCC-aligned calculations",
        "Third-party verification process"
      ]
    },
    {
      title: "Nigeria Commercial Pilot Results",
      date: "June 2024",
      type: "Case Study",
      pages: "28 pages",
      size: "2.6 MB",
      color: "#F6B842",
      highlights: [
        "1.2 GWh tracked across 24 sites",
        "890 tCO₂e verified credits",
        "Enterprise integration guide"
      ]
    },
    {
      title: "Impact Snapshot 2023",
      date: "December 2023",
      type: "Annual Report",
      pages: "36 pages",
      size: "2.9 MB",
      color: "#F57B44",
      highlights: [
        "Year-end summary",
        "Beneficiary testimonials",
        "Market analysis and projections"
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F57B44]/10 border border-[#F57B44]/20 mb-4 sm:mb-6">
          <span className="text-[#F57B44] tracking-wide text-sm">Documentation</span>
        </div>
        <h2 className="mb-4 sm:mb-6 tracking-tight text-gray-900 px-4">
          Impact Reports & White Papers
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Comprehensive documentation of our methodology, results, and verified impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reports.map((report, index) => (
          <div
            key={index}
            className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500"
                style={{ backgroundColor: report.color }}
              >
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gray-100 inline-block mb-2 sm:mb-3">
                  <span className="text-xs text-gray-600 tracking-wide">{report.type}</span>
                </div>
                <h3 className="text-gray-900 tracking-tight leading-tight">
                  {report.title}
                </h3>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" strokeWidth={2.5} />
                {report.date}
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4" strokeWidth={2.5} />
                {report.pages}
              </div>
            </div>

            {/* Highlights */}
            <div className="flex-1 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="text-sm tracking-wide text-gray-900">Key Findings:</div>
              <ul className="space-y-2 sm:space-y-3">
                {report.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#527E5F] mt-1.5 flex-shrink-0" />
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download button */}
            <button
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#527E5F] hover:bg-[#527E5F]/5 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            >
              <Download className="w-4 h-4 text-gray-600 group-hover/btn:text-[#527E5F] transition-colors" strokeWidth={2.5} />
              <span className="text-sm text-gray-900 tracking-wide">Download PDF</span>
              <span className="text-xs text-gray-500 ml-1">({report.size})</span>
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#527E5F]/5 border-2 border-[#527E5F]/20 text-center">
        <h3 className="text-gray-900 mb-3 sm:mb-4 tracking-tight">
          Stay Updated
        </h3>
        <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive quarterly impact reports and case study updates directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#527E5F] focus:outline-none transition-all duration-300 shadow-sm focus:shadow-md"
          />
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] hover:shadow-lg transition-all duration-300 shadow-md">
            <span className="tracking-wide">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
}
