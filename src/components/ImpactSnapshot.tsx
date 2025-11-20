import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ImpactSnapshot() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[#eab308] hover:bg-[#eab308] text-white border-0 mb-4">
            Verified results you can trust
          </Badge>
          <h2 className="text-4xl">Real impact from real installations</h2>
        </div>

        <Card className="overflow-hidden bg-white border border-gray-200 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719256383688-305c0c00d179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYwNTI0MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solar installation in Kaduna"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Badge className="bg-[#0d5c3d]/10 hover:bg-[#0d5c3d]/10 text-[#0d5c3d] border-0 mb-4">
                  Case Study
                </Badge>
                <h3 className="text-2xl mb-2">15 kW Rooftop Installation</h3>
                <p className="text-gray-600">Kaduna, Nigeria</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Monthly CO₂ Saved</p>
                  <p className="text-3xl text-[#0d5c3d]">420 kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Credits Issued</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl text-[#0d5c3d]">8.4</p>
                    <Badge className="bg-[#eab308] hover:bg-[#eab308] text-white border-0 text-xs">
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-1">Payout Timeline</p>
                <p className="text-gray-900">Monthly payouts since March 2025</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
