import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function PricingTeaser() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for homes with existing solar installations.",
      features: ["Real-time monitoring", "Monthly impact reports", "Basic verification"],
    },
    {
      name: "Pro",
      description: "For SMEs and larger installations seeking maximum value.",
      features: ["Everything in Starter", "Priority verification", "Advanced analytics", "Dedicated support"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Simple plans for homes and SMEs</h2>
          <p className="text-gray-600">Flexible options for businesses</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className="p-8 border-2 border-gray-200 hover:border-[#0d5c3d] transition-all">
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0d5c3d]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#0d5c3d]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                Get RanaMeter
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#0d5c3d] text-[#0d5c3d] hover:bg-[#0d5c3d] hover:text-white"
          >
            See full pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
