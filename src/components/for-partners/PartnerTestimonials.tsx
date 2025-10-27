import { Quote } from "lucide-react";

export function PartnerTestimonials() {
  const testimonials = [
    {
      quote: "Adding RanaMeter to our installations has differentiated us in a competitive market. Clients love the transparency and we love the recurring revenue.",
      company: "SolarTech Kenya",
      type: "EPC Partner",
      metric: "240 systems deployed in 8 months"
    },
    {
      quote: "The partner dashboard makes it easy to manage deployments across multiple regions. Training was excellent and support is always responsive.",
      company: "Green Energy Distribution",
      type: "Distributor",
      metric: "15% increase in solar package sales"
    },
    {
      quote: "Rana54's verification gives our beneficiaries access to carbon revenue they'd never see otherwise. It's impact we can measure and prove.",
      company: "Rural Electrification Initiative",
      type: "NGO Program",
      metric: "1,200 households connected to carbon finance"
    }
  ];

  const partnerLogos = [
    "SolarTech Kenya",
    "Bright Energy Ltd",
    "African Solar Distributors",
    "PowerUp NGO",
    "CleanGrid Solutions",
    "EnergyAccess Foundation",
    "SunRise Installations",
    "GreenLight Partners"
  ];

  return (
    <div className="space-y-12">
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <Quote className="w-10 h-10 text-[#F57B44]/20 mb-4" strokeWidth={2} />
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <div className="text-gray-900 tracking-wide mb-1">{testimonial.company}</div>
              <div className="text-sm text-gray-500 mb-3">{testimonial.type}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F57B44]/10 border border-[#F57B44]/20">
                <span className="text-xs text-[#F57B44] tracking-wide">{testimonial.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner logos */}
      <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <h3 className="text-center text-gray-600 mb-6 tracking-wide">Trusted by Leading African Energy Partners</h3>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
          {partnerLogos.map((partner, index) => (
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
