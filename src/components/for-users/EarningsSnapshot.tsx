import { TrendingUp, DollarSign, PieChart, Info } from "lucide-react";

export function EarningsSnapshot() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-10 shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6B842]/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-white mb-4 tracking-tight">Your Earnings Snapshot</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real-time visibility into your clean energy revenue
          </p>
        </div>

        {/* Main earnings display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Live Balance */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F6B842]/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#F6B842]" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Current Balance</span>
            </div>
            <div className="text-4xl text-white mb-2">$487.32</div>
            <div className="text-white/60 text-sm">Available for withdrawal</div>
          </div>

          {/* Projected Monthly */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F57B44]/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#F57B44]" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Projected This Month</span>
            </div>
            <div className="text-4xl text-white mb-2">$156.40</div>
            <div className="text-white/60 text-sm">Based on current production</div>
          </div>

          {/* Lifetime Earnings */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white/80">Lifetime Earnings</span>
            </div>
            <div className="text-4xl text-white mb-2">$2,841</div>
            <div className="text-white/60 text-sm">Since installation</div>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Fee Structure */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-white mb-4 tracking-wide">Fee Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Gross Revenue</span>
                <span className="text-white">$156.40</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-white/70">Platform Fee (8%)</span>
                <span className="text-white/70">- $12.51</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Transaction Fee (2%)</span>
                <span className="text-white/70">- $3.13</span>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex items-center justify-between">
                <span className="text-white">Net Payout</span>
                <span className="text-[#F6B842] text-xl">$140.76</span>
              </div>
            </div>
          </div>

          {/* Payout History */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-white mb-4 tracking-wide">Recent Payouts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <div className="text-white">December 2024</div>
                  <div className="text-white/60 text-sm">Paid Dec 31</div>
                </div>
                <span className="text-[#F6B842]">$142.50</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <div className="text-white">November 2024</div>
                  <div className="text-white/60 text-sm">Paid Nov 30</div>
                </div>
                <span className="text-[#F6B842]">$138.20</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <div className="text-white">October 2024</div>
                  <div className="text-white/60 text-sm">Paid Oct 31</div>
                </div>
                <span className="text-[#F6B842]">$151.80</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info link */}
        <div className="mt-6 flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
          <Info className="w-4 h-4" strokeWidth={2} />
          <span className="text-sm tracking-wide">What influences earnings?</span>
        </div>
      </div>
    </div>
  );
}
