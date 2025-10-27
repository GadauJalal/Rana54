import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function BuyersFAQ() {
  const faqs = [
    {
      question: "What standards do Rana54 credits follow?",
      answer: "Rana54 credits align with Verra VCS, Gold Standard for Global Goals, and ISO 14064 methodologies. Our MRV process follows GHG Protocol guidelines and includes device-level verification with cryptographic signatures. All credits are issued with full audit trails and can be traced to specific solar generation sites."
    },
    {
      question: "How do I verify the source of a credit?",
      answer: "Every credit includes a complete chain-of-custody record linking it to the originating RanaMeter device and solar site. You can download cryptographic proof files, verification certificates, and site metadata directly from the business dashboard. Our real-time dashboards show live production data from source sites, and all verification signatures can be independently validated."
    },
    {
      question: "Can I integrate with my ESG reporting tool?",
      answer: "Yes. Rana54 provides REST API access for programmatic integration with major ESG reporting platforms including CDP, TCFD frameworks, and custom sustainability dashboards. We offer automated data sync, webhook notifications for new issuances, and export formats compatible with standard ESG reporting tools. Our team can assist with custom integrations as needed."
    },
    {
      question: "What's the minimum purchase volume?",
      answer: "Minimum purchase volumes vary by credit type and geography. Typically, we require a minimum of 10 tonnes CO₂ equivalent per transaction for spot purchases. For corporate clients establishing ongoing procurement agreements, we can accommodate smaller batch sizes with annual commitments. Contact our sales team to discuss volume requirements for your specific needs."
    },
    {
      question: "How quickly are credits delivered after purchase?",
      answer: "Credits are typically delivered within 24-48 hours of payment confirmation. You'll receive immediate access to verification documentation, and credits are transferred to your registry account or Rana54 wallet. For large volume purchases or custom delivery schedules, we can arrange specific timing to align with your reporting deadlines."
    },
    {
      question: "Are Rana54 credits eligible for carbon tax compliance?",
      answer: "Eligibility depends on your jurisdiction's specific regulations. Rana54 credits are designed to meet voluntary carbon market standards and are increasingly recognized by compliance schemes that accept high-quality voluntary credits. We recommend consulting with your legal and compliance teams. Our methodology documentation and third-party verification reports are available to support regulatory review."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about purchasing Rana54 credits
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-100 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-[#527E5F]/20 data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="text-left text-gray-900 hover:text-[#527E5F] transition-colors py-6 hover:no-underline">
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
          Our credit advisory team is available to discuss your specific requirements and help you build a high-integrity carbon portfolio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:shadow-lg transition-all duration-300">
            Contact Sales Team
          </button>
          <button className="px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-[#527E5F]/30 hover:shadow-lg transition-all duration-300">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}
