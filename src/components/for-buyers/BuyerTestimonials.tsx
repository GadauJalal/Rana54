import { Quote } from "lucide-react";

export function BuyerTestimonials() {
  const testimonials = [
    {
      quote: "Rana54 credits give us the device-level verification our compliance team demands. The audit trail is impeccable and integrates seamlessly with our ESG reporting.",
      company: "Global Sustainability Fund",
      role: "Head of Carbon Markets",
      impact: "Verified 1,200 tCO₂ from African microgrids"
    },
    {
      quote: "We've purchased carbon credits from multiple sources, but Rana54's transparency is unmatched. Being able to trace each credit to a specific solar site gives us confidence.",
      company: "Corporate ESG Partner",
      role: "Director of Climate Strategy",
      impact: "850 tCO₂ retired for net-zero targets"
    },
    {
      quote: "The real-time dashboards and automated reporting have streamlined our entire credit procurement process. We can show stakeholders exactly where our impact dollars go.",
      company: "Carbon Credit Broker",
      role: "Managing Partner",
      impact: "2,400+ tCO₂ traded via platform"
    }
  ];

  const partnerLogos = [
    "ClimateFirst Capital",
    "Green Energy Fund",
    "Carbon Solutions Ltd",
    "Global ESG Partners",
    "Sustainable Ventures",
    "Impact Investment Group"
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
            <Quote className="w-10 h-10 text-[#527E5F]/20 mb-4" strokeWidth={2} />
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <div className="text-gray-900 tracking-wide mb-1">{testimonial.company}</div>
              <div className="text-sm text-gray-500 mb-3">{testimonial.role}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#527E5F]/10 border border-[#527E5F]/20">
                <span className="text-xs text-[#527E5F] tracking-wide">{testimonial.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner logos */}
      <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
        <h3 className="text-center text-gray-600 mb-6 tracking-wide">Trusted by Leading ESG Organizations</h3>
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
