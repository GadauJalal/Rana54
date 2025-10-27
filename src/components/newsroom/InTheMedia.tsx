import { ExternalLink, Calendar } from "lucide-react";

const coverage = [
  {
    logo: "TC",
    logoColor: "bg-[#0A4D3C]",
    source: "TechCrunch",
    headline: "This African startup is revolutionizing clean energy verification",
    date: "October 5, 2025",
  },
  {
    logo: "BG",
    logoColor: "bg-[#7CB342]",
    source: "Bloomberg Green",
    headline: "How blockchain is transforming renewable energy tracking in Africa",
    date: "September 22, 2025",
  },
  {
    logo: "FA",
    logoColor: "bg-[#527E5F]",
    source: "Forbes Africa",
    headline: "30 Under 30: Meet the team decentralizing clean energy",
    date: "September 18, 2025",
  },
  {
    logo: "TG",
    logoColor: "bg-[#052962]",
    source: "The Guardian",
    headline: "Solar tracking devices help African households earn from clean energy",
    date: "August 28, 2025",
  },
  {
    logo: "MT",
    logoColor: "bg-[#8B0000]",
    source: "MIT Technology Review",
    headline: "The future of verified carbon credits starts in Kenya",
    date: "August 15, 2025",
  },
  {
    logo: "R",
    logoColor: "bg-[#F57B44]",
    source: "Reuters",
    headline: "African cleantech sees investment surge with Rana54 funding",
    date: "July 30, 2025",
  },
];

export function InTheMedia() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          In the Media
        </h2>
        <p className="text-lg text-gray-600">
          Recent coverage from leading publications
        </p>
      </div>

      <div className="space-y-4">
        {coverage.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.logoColor} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <span className="text-lg">{item.logo}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-900">{item.source}</span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 group-hover:text-[#527E5F] transition-colors duration-300">
                  {item.headline}
                </h3>
              </div>

              {/* External link icon */}
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#527E5F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
