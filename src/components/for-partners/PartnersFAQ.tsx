import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function PartnersFAQ() {
  const faqs = [
    {
      question: "What do I need to qualify as a partner?",
      answer: "Partner qualifications vary by type. Installers and EPCs should have relevant certifications, insurance, and a track record of solar installations. Distributors need established supply chains and market presence. NGOs and programs should have verified clean energy or development projects. All partners must demonstrate alignment with our quality standards and impact mission. We welcome applications from organizations of all sizes."
    },
    {
      question: "Is there a minimum deployment size?",
      answer: "There's no strict minimum for getting started. We work with partners deploying anywhere from 10 to 10,000+ systems. During onboarding, we'll discuss your deployment capacity and growth plans to ensure the partnership makes sense for both parties. Larger deployments may qualify for volume discounts and enhanced support tiers."
    },
    {
      question: "Can we co-brand installations?",
      answer: "Yes! Co-branding is encouraged and supported. Partners can use Rana54 branding alongside their own company branding on installations, marketing materials, and client communications. We provide customizable templates and brand guidelines to maintain quality while highlighting your business. Joint case studies and success stories are also available for qualified partners."
    },
    {
      question: "How are commissions handled?",
      answer: "Partner commissions include multiple revenue streams: upfront device sales margins, ongoing service fee sharing, and carbon credit revenue participation. Commission rates vary by partner tier and volume. Payments are processed monthly via bank transfer or mobile money, with full transparency through your partner dashboard. Most partners see their first commission payment within 45 days of their first deployment."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Partner FAQ</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Common questions about becoming a Rana54 partner
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-100 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-[#F57B44]/20 data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="text-left text-gray-900 hover:text-[#F57B44] transition-colors py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact support */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">More Questions?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our partnership team is here to discuss your specific needs and how Rana54 can support your business goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F57B44] to-[#e06a33] text-white hover:shadow-lg transition-all duration-300">
            Contact Partnership Team
          </button>
          <button className="px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-[#F57B44]/30 hover:shadow-lg transition-all duration-300">
            Download Partner Guide
          </button>
        </div>
      </div>
    </div>
  );
}
