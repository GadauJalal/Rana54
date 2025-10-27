import { Award, ExternalLink, Trophy, Star, Lightbulb, Medal, Target, Sparkles } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Top 10 Climate Tech Innovator",
    organization: "African Tech Summit",
    year: "2025",
    note: "Recognized for breakthrough clean energy verification technology",
    color: "bg-[#F6B842]",
  },
  {
    icon: Star,
    title: "Forbes 30 Under 30 Africa",
    organization: "Forbes",
    year: "2025",
    note: "Energy & Sustainability category",
    color: "bg-[#527E5F]",
  },
  {
    icon: Lightbulb,
    title: "Best Blockchain Innovation",
    organization: "Kenya ICT Awards",
    year: "2024",
    note: "For RanaMeter real-time verification system",
    color: "bg-[#F57B44]",
  },
  {
    icon: Medal,
    title: "Green Economy Pioneer Award",
    organization: "African Development Bank",
    year: "2024",
    note: "Outstanding contribution to sustainable development",
    color: "bg-[#527E5F]",
  },
  {
    icon: Target,
    title: "Tech Startup of the Year",
    organization: "East Africa Innovation Hub",
    year: "2024",
    note: "Fastest-growing cleantech platform",
    color: "bg-[#F6B842]",
  },
  {
    icon: Sparkles,
    title: "Climate Impact Leader",
    organization: "UN Environment Programme",
    year: "2023",
    note: "Measurable carbon reduction achievements",
    color: "bg-[#F57B44]",
  },
];

export function AwardsRecognitions() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          Awards & Recognitions
        </h2>
        <p className="text-lg text-gray-600">
          Industry recognition and achievements
        </p>
      </div>

      {/* Badge grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => {
          const Icon = award.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* Badge */}
              <div className={`w-20 h-20 rounded-2xl ${award.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-500`}>
                <Icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl text-gray-900 mb-2 tracking-tight leading-tight">
                  {award.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <span>{award.organization}</span>
                  <span>•</span>
                  <span>{award.year}</span>
                </div>
              </div>

              {/* Note */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {award.note}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-[#527E5F] group-hover:gap-3 transition-all duration-300">
                <span className="text-sm tracking-wide">Learn More</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
