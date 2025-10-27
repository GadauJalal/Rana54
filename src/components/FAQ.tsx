import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How does verification work?",
      answer: "RanaOS continuously monitors your energy production and consumption in real time. Our verification engine cross-references multiple data points to ensure accuracy, then issues certified credits that businesses can audit at any time.",
    },
    {
      question: "What if I don't have solar yet?",
      answer: "No problem. We work with installation partners across Nigeria who can assess your property and recommend the right solar setup. Once installed, we'll add RanaMeter to start tracking your impact immediately.",
    },
    {
      question: "Where are credits sold?",
      answer: "Credits are listed on our verified marketplace where corporate clients and sustainability-focused organizations can purchase them. All transactions are transparent and auditable.",
    },
    {
      question: "How much can I earn?",
      answer: "Earnings depend on your installation size, energy production, and current market rates. A typical 10 kW residential system in Nigeria can generate 8–12 credits monthly, with payouts varying based on market demand.",
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No long-term contracts required. You can use RanaMeter month-to-month. We believe in building trust through results, not locking you in.",
    },
    {
      question: "What support do you offer?",
      answer: "All plans include installation support, 24/7 monitoring, and access to our help center. Pro users get dedicated account support and priority service.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
