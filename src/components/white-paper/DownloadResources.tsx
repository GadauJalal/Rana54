import { Download, FileText, FileSpreadsheet, BookOpen } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Complete White Paper",
    description: "Full technical documentation and research",
    version: "v2.1",
    lastUpdated: "October 15, 2025",
    size: "8.2 MB",
    type: "PDF",
  },
  {
    icon: BookOpen,
    title: "Executive Summary",
    description: "Concise overview for decision-makers",
    version: "v2.1",
    lastUpdated: "October 15, 2025",
    size: "1.8 MB",
    type: "PDF",
  },
  {
    icon: FileSpreadsheet,
    title: "Technical Appendix",
    description: "Detailed specifications and data schemas",
    version: "v2.0",
    lastUpdated: "September 20, 2025",
    size: "4.5 MB",
    type: "PDF",
  },
  {
    icon: FileText,
    title: "Methodology Updates",
    description: "Latest MRV framework revisions",
    version: "v1.3",
    lastUpdated: "August 30, 2025",
    size: "2.1 MB",
    type: "PDF",
  },
];

export function DownloadResources() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl mb-4 tracking-tight text-gray-900">
          Download & Resources
        </h2>
        <p className="text-lg text-gray-600">
          Access the complete white paper and supporting documentation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#527E5F]/10 flex items-center justify-center group-hover:bg-[#527E5F] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#527E5F] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl text-gray-900 mb-2 tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#527E5F]"></span>
                      {resource.version}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      {resource.lastUpdated}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      {resource.size}
                    </span>
                  </div>

                  <button className="px-6 py-2.5 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] transition-colors duration-300 flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    <span className="tracking-wide">Download {resource.type}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
