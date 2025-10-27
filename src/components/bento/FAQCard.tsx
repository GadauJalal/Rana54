import { Card } from "../ui/card";
import { MessageCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";

export function FAQCard() {
  const faqs = [
    "How does Rana54 verify clean energy data?",
    "Can Rana54 generate recognized carbon credits?",
    "Is Rana54 suitable for small solar users as well as enterprises?",
    "What kind of partners can work with Rana54?",
    "Do I need technical expertise to use the platform?",
    "How secure and transparent is the data?",
    "How quickly can I start seeing results after installation?"
  ];

  return (
    <Card className="relative p-12 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col overflow-hidden group bg-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-[#F57B44]/10 to-[#F6B842]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#527E5F]/8 rounded-full blur-3xl" />
      
      <div className="relative flex-grow">
        <div className="relative mb-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F57B44] to-[#F6B842] text-white px-6 py-3 rounded-xl shadow-lg mb-6">
            <HelpCircle className="w-5 h-5" strokeWidth={2.5} />
            <span className="tracking-wide">Got questions?</span>
          </div>
        </div>
        
        <h2 className="text-5xl mb-4 leading-tight tracking-tight">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-xl mb-12">
          Everything you need to know about Rana54
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 rounded-[1.25rem] bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 hover:border-[#F57B44] hover:shadow-md transition-all cursor-pointer group/item"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F57B44]/10 group-hover/item:bg-[#F57B44] flex items-center justify-center transition-all flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-[#F57B44] group-hover/item:text-white transition-colors" strokeWidth={2.5} />
              </div>
              <span className="text-gray-700 flex-grow text-lg group-hover/item:text-[#527E5F] transition-colors">{item}</span>
              <div className="w-8 h-8 rounded-lg bg-[#F57B44]/10 group-hover/item:bg-[#F57B44] flex items-center justify-center transition-all">
                <ArrowRight className="w-4 h-4 text-[#F57B44] group-hover/item:text-white group-hover/item:translate-x-0.5 transition-all" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="relative w-full mt-12 bg-gradient-to-r from-[#F57B44] to-[#e06a33] hover:from-[#e06a33] hover:to-[#F57B44] text-white py-7 text-lg rounded-xl shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(245,123,68,0.4)] transition-all group/btn hover:scale-[1.02]"
      >
        <MessageCircle className="mr-3 w-5 h-5" strokeWidth={2.5} />
        View all FAQs
        <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
      </Button>
    </Card>
  );
}
