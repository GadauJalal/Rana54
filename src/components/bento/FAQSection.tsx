import { Card } from "../ui/card";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Rana54 verify clean energy data?",
      answer: "Rana54 uses the RanaMeter device to capture real-time energy data directly from your solar system. This data is automatically verified through our secure infrastructure, ensuring accuracy and compliance with global standards.",
      color: "#527E5F"
    },
    {
      question: "Can Rana54 generate recognized carbon credits?",
      answer: "Yes. Rana54's verified data meets international standards for carbon credit generation. Our platform automatically processes your clean energy data into carbon credits that are recognized by major carbon markets.",
      color: "#F57B44"
    },
    {
      question: "Is Rana54 suitable for small solar users as well as enterprises?",
      answer: "Absolutely. Rana54 is designed to scale from individual households with small solar installations to large enterprises with extensive renewable energy portfolios.",
      color: "#F6B842"
    },
    {
      question: "What kind of partners can work with Rana54?",
      answer: "Rana54 works with a diverse range of partners including solar installers, energy companies, corporate clients, development organizations, municipalities, and impact investors.",
      color: "#527E5F"
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer: "No technical expertise required. Once the RanaMeter is installed by a certified technician, the system works automatically. Our intuitive dashboard provides clear insights without requiring any technical knowledge.",
      color: "#F57B44"
    },
    {
      question: "How secure and transparent is the data?",
      answer: "Security and transparency are core to Rana54. All data is encrypted end-to-end and stored using enterprise-grade security protocols. The verification process is completely transparent.",
      color: "#F6B842"
    },
    {
      question: "How quickly can I start seeing results after installation?",
      answer: "You'll see real-time data on your dashboard within minutes of RanaMeter installation. Carbon credit generation typically begins accumulating immediately, with the first verified credits available within the first billing cycle.",
      color: "#527E5F"
    }
  ];

  return (
    <Card className="relative p-0 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
        {/* Left side - Bold Statement */}
        <div className="lg:col-span-5 relative bg-gradient-to-br from-[#527E5F] to-[#3d5d48] p-6 sm:p-10 lg:p-16 flex flex-col justify-center overflow-hidden">
          {/* Ambient decorations */}
          <div className="absolute top-12 right-12 w-48 h-48 bg-[#F6B842]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-16 left-16 w-56 h-56 bg-[#F57B44]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="relative inline-flex mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl" />
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                <HelpCircle className="w-8 sm:w-10 h-8 sm:h-10 text-white" strokeWidth={2} />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[64px] leading-[1.1] tracking-tight text-white mb-4 sm:mb-6">
              Got Questions?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed sm:leading-[32px] text-white/90 mb-8 sm:mb-12 max-w-md">
              We've answered the most common questions about Rana54, verification, and carbon credits.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl lg:text-[42px] text-white mb-1">7</div>
                <div className="text-xs sm:text-sm text-white/80">Key Topics</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl lg:text-[42px] text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Support</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-12">
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Still need help?</p>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#527E5F] rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 group/cta">
                <span className="tracking-wide text-sm sm:text-base">Contact Support</span>
                <svg 
                  width="18"
                  className="sm:w-5" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  className="group-hover/cta:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M7.5 15L12.5 10L7.5 5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - FAQ Accordions */}
        <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-3 max-w-2xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className="group/faq relative overflow-hidden rounded-2xl transition-all duration-300"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left bg-white rounded-2xl shadow-[0px_0.602px_0.602px_0px_rgba(28,28,28,0.01),0px_2.289px_2.289px_0px_rgba(28,28,28,0.03),0px_10px_10px_0px_rgba(28,28,28,0.12)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 border border-transparent hover:border-white"
                    style={{
                      borderLeftColor: isOpen ? faq.color : 'transparent',
                      borderLeftWidth: isOpen ? '4px' : '0px'
                    }}
                  >
                    <div className="flex items-center justify-between gap-4 p-6">
                      <span className="text-[17px] leading-[28.8px] text-[#002101] pr-4">
                        {faq.question}
                      </span>
                      
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen 
                            ? `linear-gradient(135deg, ${faq.color}, ${faq.color}dd)` 
                            : '#f3f4f6'
                        }}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5" style={{ color: isOpen ? 'white' : '#6b7280' }} strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Answer Panel */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? '500px' : '0px'
                    }}
                  >
                    <div className="px-6 pb-6">
                      <div 
                        className="pt-4 mt-2 text-[16px] leading-[27px] text-gray-700 border-t-2 border-dashed"
                        style={{ borderColor: `${faq.color}30` }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>

                  {/* Decorative accent on hover */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover/faq:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${faq.color}03, transparent)`
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
