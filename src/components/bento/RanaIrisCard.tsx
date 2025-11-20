import { Card } from "../ui/card";
import { Zap, Calculator, Map, BarChart3, TrendingUp, Database, Sparkles, ArrowRight, CheckCircle2, Globe, Award, Layers } from "lucide-react";
import { Button } from "../ui/button";

interface RanaIrisCardProps {
  onLearnMoreClick?: () => void;
}

export function RanaIrisCard({ onLearnMoreClick }: RanaIrisCardProps) {
  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F57B44]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F6B842]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-12 lg:p-20">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F6B842]/40 rounded-2xl blur-xl" />
              <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F6B842]/20 backdrop-blur-sm border border-[#F6B842]/30 mb-6">
            <Sparkles className="w-5 h-5 text-[#F6B842]" />
            <span className="text-white">INTELLIGENCE PLATFORM</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
            RANA-IRIS
          </h2>
          
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 max-w-3xl mx-auto">
            Simulator & Intelligence for Solar Solutions
          </p>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Africa's first research-driven solar intelligence platform. Get accurate simulations, 
            real-world insights, and data-backed recommendations for your solar projects—all powered 
            by verified African solar radiation data.
          </p>
        </div>

        {/* Three Main Features - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F57B44]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#F57B44] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl text-white mb-3">Quick Estimate</h3>
              <p className="text-white/70 leading-relaxed">
                Get instant solar sizing and savings estimates based on your location and energy needs. 
                Perfect for quick feasibility checks.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F6B842]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#F6B842] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Map className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl text-white mb-3">Map My Roof</h3>
              <p className="text-white/70 leading-relaxed">
                Interactive roof mapping with AI-optimized panel placement, shading analysis, and 
                automatic system sizing based on available space.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#527E5F]/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl text-white mb-3">Compare Scenarios</h3>
              <p className="text-white/70 leading-relaxed">
                Side-by-side analysis of different system sizes, financing options, and battery 
                configurations to find your optimal solution.
              </p>
            </div>
          </div>
        </div>

        {/* Why Trust Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-[#F6B842]" />
              <h3 className="text-2xl text-white">Why Trust Rana Iris?</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#F6B842] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">African Solar Data</p>
                  <p className="text-white/60 text-sm">
                    Built on real radiation data from across Africa, not generic global models
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#F6B842] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">Research-Backed Algorithms</p>
                  <p className="text-white/60 text-sm">
                    Validated methodologies from leading solar research institutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#F6B842] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">MRV Integration Ready</p>
                  <p className="text-white/60 text-sm">
                    Simulations align with Monitoring, Reporting & Verification standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-7 h-7 text-[#F57B44]" />
              <h3 className="text-2xl text-white">Pro Features</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-[#F57B44] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">Advanced Financial Modeling</p>
                  <p className="text-white/60 text-sm">
                    ROI, IRR, NPV, and LCOE calculations for investment analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Database className="w-6 h-6 text-[#F57B44] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">Portfolio Management</p>
                  <p className="text-white/60 text-sm">
                    Track and compare multiple sites for enterprise deployments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-[#F57B44] shrink-0 mt-1" />
                <div>
                  <p className="text-white mb-1">Export & API Access</p>
                  <p className="text-white/60 text-sm">
                    Download reports as PDF/CSV or integrate via API
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl text-white mb-2">10K+</div>
            <div className="text-white/70">Simulations Run</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl text-white mb-2">54</div>
            <div className="text-white/70">African Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl text-white mb-2">98%</div>
            <div className="text-white/70">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl text-white mb-2">$2M+</div>
            <div className="text-white/70">Savings Calculated</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={onLearnMoreClick}
            className="bg-white text-[#527E5F] hover:bg-white/90 rounded-xl px-12 py-8 text-xl group shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Launch Rana Iris
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <p className="text-white/70 mt-6 text-lg">
            Free basic features • Pro from $49/month
          </p>
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white/10 inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
