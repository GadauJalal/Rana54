import { HelpCircle, Clock, Users, Briefcase, Shield } from "lucide-react";

export function ContactFAQ() {
  const faqs = [
    {
      icon: Clock,
      question: "What's your response time?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. Urgent technical support requests are prioritized.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Users,
      question: "Can I schedule a demo?",
      answer: "Absolutely! Use the contact form to request a demo, or email partners@rana54.com directly. We'll arrange a personalized session.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Briefcase,
      question: "How do I become a partner?",
      answer: "Select 'Partnership Opportunities' in the inquiry form, or visit our For Partners page to learn more about installer, NGO, and buyer partnerships.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Shield,
      question: "Is my information secure?",
      answer: "Yes. All form submissions are encrypted and handled according to our privacy policy. We never share your information with third parties.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-4">
          <HelpCircle className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600 tracking-wide">Quick Answers</span>
        </div>
        <h2 className="text-4xl mb-4 tracking-tight text-gray-900">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find quick answers to common questions about contacting us
        </p>
      </div>

      {/* FAQ grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => {
          const Icon = faq.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#527E5F]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-900 mb-2 tracking-wide">{faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          );
        })}
      </div>

      {/* Additional help */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200 text-center">
        <p className="text-gray-600">
          Can't find what you're looking for? <a href="#form" className="text-[#527E5F] hover:underline">Send us a message</a> or check our <span className="text-[#527E5F]">Help Center</span>
        </p>
      </div>
    </div>
  );
}
