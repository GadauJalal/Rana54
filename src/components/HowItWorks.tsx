import { Zap, Activity, DollarSign } from "lucide-react";
import { Card } from "./ui/card";

export function HowItWorks() {
  const steps = [
    {
      icon: Zap,
      title: "Install",
      description: "We set up the device in a quick visit.",
    },
    {
      icon: Activity,
      title: "Track",
      description: "See solar, grid, and battery, all live.",
    },
    {
      icon: DollarSign,
      title: "Get paid",
      description: "Your clean energy turns into credits businesses can purchase.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">How it works</h2>
          <p className="text-gray-600">Three simple steps to start earning from your clean energy</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 border border-gray-200 hover:border-[#0d5c3d] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#0d5c3d]/10 flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 text-[#0d5c3d]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
