import { FileText, Download, Archive } from "lucide-react";

export function ReportsHero() {
  return (
    <section className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F57B44]/10 rounded-full mb-8">
        <FileText className="w-4 h-4 text-[#F57B44]" />
        <span className="text-sm text-[#F57B44] tracking-wide">Impact & Performance</span>
      </div>

      <h1 className="text-6xl lg:text-7xl mb-8 tracking-tight text-gray-900 leading-[1.1]">
        Reports
      </h1>

      <p className="text-2xl text-gray-900 mb-6 leading-tight">
        Access Rana54's verified impact and performance reports.
      </p>

      <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
        Transparent insights into our progress, energy data, carbon savings, and community outcomes. Every report is independently verified and aligned with international standards.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-[#F57B44] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
          <Download className="w-5 h-5" />
          <span className="tracking-wide">Download Latest Report (PDF)</span>
        </button>
        <button className="px-8 py-4 bg-white text-[#F57B44] border-2 border-[#F57B44] rounded-xl hover:bg-[#F57B44]/5 transition-all duration-300 flex items-center justify-center gap-3">
          <Archive className="w-5 h-5" />
          <span className="tracking-wide">View Archive</span>
        </button>
      </div>
    </section>
  );
}
