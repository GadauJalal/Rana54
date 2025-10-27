import { Home, Building2, Zap, Clock, CheckCircle, Users, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function ImplementationSection() {
  const deploymentPaths = [
    {
      icon: Home,
      title: "Single Home",
      description: "Residential solar installations",
      timeline: "2-4 weeks",
      gradient: "from-[#527E5F] to-[#3d5d48]",
      requirements: ["Site assessment", "Inverter compatibility", "Internet connectivity", "Homeowner KYC"]
    },
    {
      icon: Building2,
      title: "SME/Commercial",
      description: "Small to medium enterprises",
      timeline: "4-6 weeks",
      gradient: "from-[#F57B44] to-[#e06a33]",
      requirements: ["Load profile analysis", "Meter configuration", "Business KYB", "Grid connection permits"]
    },
    {
      icon: Zap,
      title: "Community Mini-Grid",
      description: "Distributed energy systems",
      timeline: "8-12 weeks",
      gradient: "from-[#F6B842] to-[#F57B44]",
      requirements: ["Multi-site coordination", "Bulk provisioning", "Community agreements", "Regulatory compliance"]
    }
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: "Installer Training",
      description: "Comprehensive onboarding for installation teams"
    },
    {
      icon: CheckCircle,
      title: "Onboarding Checklist",
      description: "Step-by-step deployment guides and validation"
    },
    {
      icon: Clock,
      title: "SLA Support",
      description: "Service level agreements with dedicated support"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Implementation</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Flexible deployment paths with comprehensive support
        </p>
      </div>

      {/* Deployment paths */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {deploymentPaths.map((path, index) => {
          const Icon = path.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Timeline badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-gray-100 group-hover:bg-[#527E5F]/10 transition-colors">
                <span className="text-sm text-gray-600 group-hover:text-[#527E5F] transition-colors">{path.timeline}</span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{path.title}</h3>
              <p className="text-gray-600 mb-6">{path.description}</p>

              {/* Requirements */}
              <div className="space-y-2">
                <h4 className="text-gray-800 mb-3">Requirements:</h4>
                {path.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#527E5F]" />
                    <span className="text-sm text-gray-600">{req}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${path.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
            </div>
          );
        })}
      </div>

      {/* Support section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl text-white mb-4 tracking-tight">End-to-End Support</h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From initial deployment to ongoing operations, we're with you every step
            </p>
          </div>

          {/* Support features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-[#F6B842] mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                  <h4 className="text-white mb-2 tracking-wide">{feature.title}</h4>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-[#527E5F] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 rounded-xl group"
            >
              Start Implementation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h4 className="text-gray-900 mb-3 tracking-wide">What We Need</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Site size and energy profile</li>
            <li>• Inverter type and specifications</li>
            <li>• Internet connectivity options</li>
            <li>• KYC/KYB documentation</li>
            <li>• Local regulatory requirements</li>
          </ul>
        </div>
        
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h4 className="text-gray-900 mb-3 tracking-wide">What You Get</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Pre-configured RanaMeter devices</li>
            <li>• Complete installation guide</li>
            <li>• Training for your installation team</li>
            <li>• 24/7 technical support</li>
            <li>• Ongoing monitoring and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}