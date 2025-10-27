import { Shield, BarChart3, Globe, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Verified Data Infrastructure",
    description: "How RanaMeter ensures trust in every data point through hardware-verified measurements and blockchain-backed immutability.",
    color: "bg-[#527E5F]",
  },
  {
    icon: BarChart3,
    title: "MRV Methodology",
    description: "Transparent measurement, reporting, and verification framework aligned with international carbon accounting standards.",
    color: "bg-[#F57B44]",
  },
  {
    icon: Globe,
    title: "Carbon Market Integration",
    description: "Alignment with global standards and registries, enabling seamless conversion of verified energy data into tradable carbon credits.",
    color: "bg-[#F6B842]",
  },
  {
    icon: TrendingUp,
    title: "Impact Model",
    description: "How community-level solar drives measurable CO₂ reduction and creates economic opportunities across African nations.",
    color: "bg-[#527E5F]",
  },
];

export function KeyHighlights() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 tracking-tight text-gray-900">
          Key Highlights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Core concepts and frameworks detailed in the white paper
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${highlight.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-500`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">
                {highlight.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
