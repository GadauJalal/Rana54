import { Quote, Users, Zap, TrendingUp } from "lucide-react";

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: "2,400+",
      label: "Pilot Users",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Zap,
      value: "18.5M",
      label: "kWh Tracked",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: TrendingUp,
      value: "9,200+",
      label: "Tonnes CO₂ Avoided",
      gradient: "from-[#F57B44] to-[#e06a33]"
    }
  ];

  const testimonials = [
    {
      quote: "I was skeptical at first, but seeing my earnings grow every month while knowing my exact environmental impact has been incredible. The app is super intuitive.",
      author: "Amara N.",
      location: "Lagos, Nigeria",
      system: "4.5kW residential"
    },
    {
      quote: "The installation took less than 4 hours and I've had zero issues. Getting paid for the clean energy I'm already producing feels like unlocking hidden value.",
      author: "James K.",
      location: "Nairobi, Kenya",
      system: "3.2kW residential"
    },
    {
      quote: "As a small business owner, the transparent fee structure and reliable monthly payouts help me plan better. Plus, my customers love that we're verified carbon-neutral.",
      author: "Thandiwe M.",
      location: "Cape Town, South Africa",
      system: "12kW commercial"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl text-gray-900 mb-2 tracking-tight">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <Quote className="w-10 h-10 text-[#527E5F]/20 mb-4" strokeWidth={2} />
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <div className="text-gray-900 tracking-wide">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
              <div className="text-sm text-gray-500">{testimonial.system}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner logos */}
      <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <h3 className="text-center text-gray-600 mb-6 tracking-wide">Trusted Installation Partners</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
          {["SolarCorp", "GreenTech", "SunPower Pro", "EcoInstall", "PowerGrid Solutions"].map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-600 tracking-wide"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
