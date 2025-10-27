import { Home, ShoppingCart, Handshake } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function WhoItsFor() {
  const audiences = [
    {
      icon: Home,
      title: "For Homeowners",
      description: "Lower bills, earn from your clean power.",
      cta: "Get RanaMeter",
      variant: "primary" as const,
    },
    {
      icon: ShoppingCart,
      title: "For Businesses",
      description: "Verified credits with clear audit trails.",
      cta: "Request a demo",
      variant: "secondary" as const,
    },
    {
      icon: Handshake,
      title: "For Partners",
      description: "Install, support, and grow with us.",
      cta: "Become a partner",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Built for everyone in the clean energy ecosystem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <Card key={index} className="p-8 border border-gray-200 hover:border-[#0d5c3d] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#0d5c3d]/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#0d5c3d]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-8">{item.description}</p>
              <Button
                className={
                  item.variant === "primary"
                    ? "bg-[#f97316] hover:bg-[#ea580c] text-white w-full"
                    : "border-[#0d5c3d] text-[#0d5c3d] hover:bg-[#0d5c3d] hover:text-white w-full"
                }
                variant={item.variant === "primary" ? "default" : "outline"}
              >
                {item.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
