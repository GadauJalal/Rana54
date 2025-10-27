import { useState } from "react";
import { Leaf, Wrench, TrendingUp, Rocket } from "lucide-react";

const categories = [
  {
    id: "impact",
    label: "Impact Reports",
    description: "CO₂ reduction, clean energy generated, community benefits",
    icon: Leaf,
    color: "bg-[#527E5F]",
  },
  {
    id: "technical",
    label: "Technical Reports",
    description: "Device performance, data integrity, MRV results",
    icon: Wrench,
    color: "bg-[#F57B44]",
  },
  {
    id: "financial",
    label: "Financial & ESG",
    description: "Investor and partner updates",
    icon: TrendingUp,
    color: "bg-[#F6B842]",
  },
  {
    id: "program",
    label: "Program Updates",
    description: "Pilot summaries, expansion highlights",
    icon: Rocket,
    color: "bg-[#527E5F]",
  },
];

export function ReportCategories() {
  const [activeCategory, setActiveCategory] = useState("impact");

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 tracking-tight text-gray-900">
          Report Categories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse reports by type and focus area
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                isActive
                  ? "border-gray-900 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)]"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 shadow-lg ${
                isActive ? "scale-110" : "group-hover:scale-105"
              } transition-all duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className={`text-lg text-gray-900 mb-2 tracking-tight ${
                isActive ? "" : ""
              }`}>
                {category.label}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {category.description}
              </p>

              {isActive && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#527E5F]"></div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
