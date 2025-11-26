import { Calendar, Clock, ArrowRight, Tag, FileText, Award, TrendingUp, MapPin, FileCheck, Globe } from "lucide-react";

const pressReleases = [
  {
    icon: FileText,
    tag: "Product",
    headline: "RanaMeter 2.0 Introduces Real-Time Carbon Credit Tracking",
    dek: "New hardware upgrade enables instant verification and monetization of clean energy impact with enhanced blockchain integration.",
    date: "October 10, 2025",
    readTime: "4 min read",
    color: "bg-[#F6B842]",
  },
  {
    icon: FileCheck,
    tag: "Press Release",
    headline: "Rana54 Partners with Kenya Power for Nationwide Deployment",
    dek: "Strategic collaboration to bring verified clean energy tracking to 2 million households across Kenya by 2026.",
    date: "September 28, 2025",
    readTime: "5 min read",
    color: "bg-[#527E5F]",
  },
  {
    icon: Award,
    tag: "Award",
    headline: "Named Top 10 Climate Tech Innovator by African Tech Summit",
    dek: "Rana54 recognized for breakthrough approach to renewable energy verification and social impact measurement.",
    date: "September 15, 2025",
    readTime: "3 min read",
    color: "bg-[#F57B44]",
  },
  {
    icon: Globe,
    tag: "Press Release",
    headline: "1 Million Tons of CO₂ Verified Through Rana54 Platform",
    dek: "Platform milestone represents measurable climate action across 12 African countries and 50,000+ active users.",
    date: "August 30, 2025",
    readTime: "6 min read",
    color: "bg-[#527E5F]",
  },
  {
    icon: MapPin,
    tag: "Product",
    headline: "Rana54 Expands Operations to West Africa",
    dek: "New regional headquarters in Lagos to serve growing demand across Nigeria, Ghana, and Senegal markets.",
    date: "August 12, 2025",
    readTime: "4 min read",
    color: "bg-[#F6B842]",
  },
  {
    icon: TrendingUp,
    tag: "Opinion",
    headline: "New White Paper: The Future of Verified Clean Energy",
    dek: "Comprehensive analysis of blockchain-verified renewable energy tracking and its transformative global impact.",
    date: "July 25, 2025",
    readTime: "12 min read",
    color: "bg-[#F57B44]",
  },
];

export function LatestPressReleases({ onReadClick }: { onReadClick?: (post: any) => void }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
            Latest Press Releases
          </h2>
          <p className="text-lg text-gray-600">
            Official announcements and updates
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 text-[#527E5F] hover:bg-[#527E5F]/5 rounded-xl transition-all duration-300 group">
          <span className="tracking-wide">View All</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Responsive 3-column grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressReleases.map((release, index) => {
          const Icon = release.icon;
          return (
            <article
              key={index}
              onClick={() => onReadClick?.(release)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* Image/Video thumb */}
              <div className={`h-56 ${release.color} flex items-center justify-center relative overflow-hidden`}>
                <Icon className="w-24 h-24 text-white/30" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`flex items-center gap-1.5 px-3 py-1 ${release.color} text-white rounded-full text-sm`}>
                    <Tag className="w-3.5 h-3.5" />
                    {release.tag}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-xl text-gray-900 mb-3 tracking-tight leading-tight group-hover:text-[#527E5F] transition-colors duration-500">
                  {release.headline}
                </h3>

                {/* 2-line dek */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {release.dek}
                </p>

                {/* Date + Read time */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {release.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {release.readTime}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}