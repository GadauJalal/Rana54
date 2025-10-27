import { FileText, Download, Eye } from "lucide-react";

export function WhitePaperHero() {
  return (
    <section className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#527E5F]/10 rounded-full mb-8">
        <FileText className="w-4 h-4 text-[#527E5F]" />
        <span className="text-sm text-[#527E5F] tracking-wide">Research & Documentation</span>
      </div>

      <h1 className="text-6xl lg:text-7xl mb-8 tracking-tight text-gray-900 leading-[1.1]">
        White Paper
      </h1>

      <p className="text-2xl text-gray-900 mb-6 leading-tight">
        Explore the research and frameworks powering Rana54's ecosystem.
      </p>

      <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
        Rana54's white paper breaks down the technology, data verification, and carbon methodology behind the platform. Discover the technical infrastructure, MRV frameworks, and economic models that enable verified clean energy tracking at scale.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
          <Download className="w-5 h-5" />
          <span className="tracking-wide">Download White Paper (PDF)</span>
        </button>
        <button className="px-8 py-4 bg-white text-[#527E5F] border-2 border-[#527E5F] rounded-xl hover:bg-[#527E5F]/5 transition-all duration-300 flex items-center justify-center gap-3">
          <Eye className="w-5 h-5" />
          <span className="tracking-wide">View Summary</span>
        </button>
      </div>
    </section>
  );
}
