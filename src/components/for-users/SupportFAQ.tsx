import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function SupportFAQ() {
  const faqs = [
    {
      question: "How do payouts work?",
      answer: "Payouts are processed monthly based on your verified energy production. Once your credits are issued, they're converted to your local currency and transferred to your chosen payout method (bank account, mobile money, or digital wallet). You'll receive a detailed breakdown of earnings, fees, and net payout via email and in the app."
    },
    {
      question: "What if I'm offline for a day?",
      answer: "No problem! RanaMeter has offline buffering that stores up to 30 days of data locally. When connectivity is restored, all stored readings are automatically uploaded and verified. Your earnings won't be affected by temporary internet outages."
    },
    {
      question: "Can I use my existing meter or inverter?",
      answer: "Yes! RanaMeter works alongside your existing equipment. It connects to standard solar inverters and doesn't require replacing any current meters. Our certified installers will assess compatibility during the initial site visit to ensure seamless integration."
    },
    {
      question: "Which payout methods are supported?",
      answer: "We support multiple payout options including direct bank transfer (ACH/SWIFT), mobile money (M-Pesa, MTN Money, Airtel Money), and digital wallets. Availability varies by region. During onboarding, you'll see all available options for your location and can switch between methods anytime in the app."
    },
    {
      question: "How long does verification take?",
      answer: "Real-time verification happens continuously as your system generates energy. Device signatures are validated immediately, and data integrity checks run every 15 minutes. Credit issuance happens monthly, with a processing window of 24-48 hours after the month closes."
    },
    {
      question: "What happens if my solar system needs maintenance?",
      answer: "If your system goes offline for maintenance, simply log it in the app. RanaMeter will pause tracking during the maintenance window so it doesn't affect your performance metrics. When you're back online, tracking resumes automatically. Scheduled maintenance doesn't impact your earnings eligibility."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Support & FAQ</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Common questions from solar users like you
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
        <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">Still Have Questions?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our support team is here to help you get the most out of your RanaMeter system.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white hover:shadow-lg transition-all duration-300">
            Contact Support
          </button>
          <button className="px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-[#527E5F]/30 hover:shadow-lg transition-all duration-300">
            Visit Help Center
          </button>
        </div>
      </div>
    </div>
  );
}
