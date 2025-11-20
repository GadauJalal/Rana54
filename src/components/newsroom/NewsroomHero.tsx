import { Newspaper, Calendar, ArrowRight, Tag } from "lucide-react";

const featuredStory = {
  icon: Newspaper,
  tag: "Funding",
  headline: "Rana54 Secures $12M Series A to Scale Clean Energy Verification",
  dek: "Investment led by Climate Impact Partners will accelerate deployment of verified clean energy tracking across 8 African nations, empowering 100,000+ households.",
  date: "October 15, 2025",
  readTime: "6 min read",
  color: "bg-[#527E5F]",
};

export function NewsroomHero({ onReadClick }: { onReadClick?: (post: any) => void }) {
  return (
    <section>
      {/* Title + Purpose */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F57B44]/10 rounded-full mb-8">
          <Newspaper className="w-4 h-4 text-[#F57B44]" />
          <span className="text-sm text-[#F57B44] tracking-wide">Media Center</span>
        </div>

        <h1 className="text-6xl lg:text-7xl mb-6 tracking-tight text-gray-900 leading-[1.1]">
          Newsroom
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          All news, releases, media assets in one place.
        </p>
      </div>

      {/* Featured Story Card */}
      <div className="bg-white rounded-3xl  border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] group hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.2)] transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Large Image/Video */}
          <div className="relative h-96 lg:h-auto overflow-hidden bg-[#527E5F]">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Newspaper className="w-32 h-32 text-white/20" />
            </div>
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-[#F6B842] text-gray-900 rounded-full text-sm tracking-wide shadow-lg">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-12 flex flex-col justify-center">
            {/* Tag + Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#527E5F]/10 text-[#527E5F] rounded-full text-sm">
                <Tag className="w-3.5 h-3.5" />
                {featuredStory.tag}
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                {featuredStory.date}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl text-gray-900 mb-6 tracking-tight leading-tight">
              {featuredStory.headline}
            </h2>

            {/* 2-line dek */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {featuredStory.dek}
            </p>

            {/* CTA */}
            <button 
              onClick={() => onReadClick?.(featuredStory)}
              className="self-start px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group/btn"
            >
              <span className="tracking-wide">Read Full Story</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
