import { Wallet, DollarSign, TrendingUp, CheckCircle, CreditCard, Clock } from "lucide-react";

export function StepRanaPay() {
  const features = [
    {
      icon: DollarSign,
      title: "Direct Payouts",
      description: "Carbon credit payments directly to your account"
    },
    {
      icon: TrendingUp,
      title: "Market-Linked Pricing",
      description: "Fair rates tied to real-time carbon credit markets"
    },
    {
      icon: CheckCircle,
      title: "Instant Verification",
      description: "Automated verification and settlement process"
    },
    {
      icon: Clock,
      title: "24-Hour Settlement",
      description: "Fast payment processing with transparent tracking"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Payment interface mockup placeholder */}
      <div className="relative order-2 lg:order-1">
        <div className="aspect-[4/3] rounded-3xl bg-gray-50 border-2 border-gray-200 shadow-2xl overflow-hidden">
          {/* Placeholder for payment interface */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              {/* Mobile payment interface */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 aspect-[9/19.5] rounded-[2.5rem] bg-white shadow-2xl border-4 border-gray-200 p-3 relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  
                  {/* Screen content */}
                  <div className="relative w-full h-full rounded-[2rem] bg-white overflow-hidden">
                    {/* Header */}
                    <div className="pt-8 px-6 pb-4">
                      <div className="text-xs text-gray-500 mb-1">Available Balance</div>
                      <div className="text-3xl text-gray-900 mb-2">$1,847.50</div>
                      <div className="inline-flex items-center gap-1 text-xs text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        +$142.30 this month
                      </div>
                    </div>

                    {/* Latest payout card */}
                    <div className="mx-6 mb-4 p-4 rounded-2xl bg-[#F6B842] text-white shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs opacity-90">Latest Payout</div>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="text-2xl mb-1">$284.20</div>
                      <div className="text-xs opacity-90">Carbon Credits • Oct 2025</div>
                    </div>

                    {/* Transaction history */}
                    <div className="px-6 space-y-2">
                      <div className="text-xs text-gray-500 mb-2">Recent Activity</div>
                      
                      {[
                        { month: "Sept", status: "Verified", amount: "$198.40", color: "#527E5F" },
                        { month: "Aug", status: "Verified", amount: "$221.80", color: "#F57B44" },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: tx.color }}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-xs text-gray-900">{tx.month} Credits</div>
                              <div className="text-[10px] text-gray-500">{tx.status}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-900">{tx.amount}</div>
                        </div>
                      ))}

                      {/* Pending transaction */}
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl opacity-60">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-900">Oct Credits</div>
                            <div className="text-[10px] text-gray-500">Pending</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">~$245.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-8 px-3 py-1.5 bg-[#527E5F] rounded-full shadow-lg">
                <span className="text-sm text-white tracking-wide">Secure</span>
              </div>
              
              <div className="absolute bottom-8 left-8 px-3 py-1.5 bg-[#F57B44] rounded-full shadow-lg">
                <span className="text-sm text-white tracking-wide">Fast Transfer</span>
              </div>

              {/* Decorative blurs */}
              <div className="absolute top-16 left-16 w-32 h-32 rounded-full bg-[#F6B842]/10 blur-3xl -z-10" />
              <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-[#527E5F]/10 blur-3xl -z-10" />
            </div>
          </div>

          {/* Image placeholder text */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
            <p className="text-sm text-gray-600 text-center">
              <span className="text-gray-900">RanaPay Interface</span> — Payment & earnings distribution
            </p>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="space-y-8 order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B842]/10 border border-[#F6B842]/20">
          <span className="text-[#F6B842] tracking-wide">Step 4</span>
        </div>

        <div>
          <h2 className="text-5xl mb-4 tracking-tight text-gray-900">
            RanaPay: Get Paid
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Turn verified impact into real value. Receive direct payments for your carbon credits—transparent, fast, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#F6B842]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F6B842] flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-900 mb-1 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Payment stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#F6B842]/10 border border-[#F6B842]/20">
            <div className="text-3xl text-gray-900 mb-1">$2.4M+</div>
            <div className="text-sm text-gray-600">Payouts Processed</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6B842]/10 border border-[#F6B842]/20">
            <div className="text-3xl text-gray-900 mb-1">24hr</div>
            <div className="text-sm text-gray-600">Average Settlement</div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="p-6 rounded-2xl bg-[#F6B842]/10 border border-gray-200">
          <h3 className="text-gray-900 mb-4 tracking-wide">Payment Options</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: CreditCard, label: "Bank Transfer" },
              { icon: Wallet, label: "Mobile Money" },
              { icon: DollarSign, label: "Cash Pickup" }
            ].map((method, i) => {
              const Icon = method.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200">
                  <Icon className="w-4 h-4 text-gray-600" strokeWidth={2} />
                  <span className="text-sm text-gray-700">{method.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
