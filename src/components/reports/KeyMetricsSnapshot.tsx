import { useEffect, useState } from "react";
import { Zap, Leaf, MapPin, Users, TrendingUp, ArrowRight } from "lucide-react";

const metrics = [
  {
    label: "Total kWh Tracked",
    value: 42800000,
    displayValue: "42.8M",
    icon: Zap,
    unit: "kWh",
    color: "text-[#F6B842]",
    bgColor: "bg-[#F6B842]/10",
  },
  {
    label: "CO₂ Avoided",
    value: 28500,
    displayValue: "28,500",
    icon: Leaf,
    unit: "tCO₂e",
    color: "text-[#527E5F]",
    bgColor: "bg-[#527E5F]/10",
  },
  {
    label: "Active Installations",
    value: 15600,
    displayValue: "15,600",
    icon: MapPin,
    unit: "devices",
    color: "text-[#F57B44]",
    bgColor: "bg-[#F57B44]/10",
  },
  {
    label: "Countries Reached",
    value: 8,
    displayValue: "8",
    icon: Users,
    unit: "countries",
    color: "text-[#527E5F]",
    bgColor: "bg-[#527E5F]/10",
  },
];

export function KeyMetricsSnapshot() {
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setCountersAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="p-12">
          <div className="flex items-start justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#527E5F]/10 text-[#527E5F] rounded-lg text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Live Metrics</span>
              </div>
              <h2 className="text-4xl mb-3 tracking-tight text-gray-900">
                Key Metrics Snapshot
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Real-time view of our verified impact across all deployment regions
              </p>
            </div>

            <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 flex items-center gap-2 group">
              <span className="text-gray-700">Compare across years</span>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>

                  <div className="mb-2">
                    <div className={`text-4xl ${metric.color} mb-1 tracking-tight transition-all duration-1000 ${
                      countersAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}>
                      {metric.displayValue}
                    </div>
                    <div className="text-sm text-gray-500">{metric.unit}</div>
                  </div>

                  <div className="text-gray-900 tracking-tight">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Growth Indicators */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl text-[#527E5F] mb-1">+34%</div>
                <div className="text-sm text-gray-600">YoY Growth in kWh Tracked</div>
              </div>
              <div>
                <div className="text-2xl text-[#F57B44] mb-1">+28%</div>
                <div className="text-sm text-gray-600">Increase in Carbon Credits Issued</div>
              </div>
              <div>
                <div className="text-2xl text-[#F6B842] mb-1">+42%</div>
                <div className="text-sm text-gray-600">Expansion in Active Installations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
