import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Your impact, in real time</h2>
          <p className="text-gray-600">Clear data you can trust</p>
        </div>

        <Card className="p-8 lg:p-12 bg-white border border-gray-200 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Generation Today</p>
              <p className="text-4xl text-[#0d5c3d]">24.8 <span className="text-xl">kWh</span></p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#0d5c3d] rounded-full" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">CO₂ Saved This Month</p>
              <p className="text-4xl text-[#0d5c3d]">186 <span className="text-xl">kg</span></p>
              <p className="text-sm text-gray-500">Equivalent to 9 trees planted</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">Earnings This Month</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl text-[#0d5c3d]">₦12,400</p>
                <Badge className="bg-[#eab308] hover:bg-[#eab308] text-white border-0">
                  +18%
                </Badge>
              </div>
              <p className="text-sm text-gray-500">2.4 credits verified</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0d5c3d] animate-pulse" />
                  <span className="text-[#0d5c3d]">Generating • 3.2 kW</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Next Payout</p>
                <p className="text-[#f97316]">November 1, 2025</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
