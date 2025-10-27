import { Mail, Phone, Quote, BookOpen, ArrowRight } from "lucide-react";

export function MediaSupport() {
  return (
    <section className="space-y-12">
      {/* Quote Section */}
      <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#527E5F] mx-auto mb-6" />
          <blockquote className="text-3xl text-gray-900 mb-6 tracking-tight leading-tight">
            "Built on data integrity. Verified for global markets."
          </blockquote>
          <p className="text-lg text-gray-600">
            Our commitment to transparent, verifiable clean energy tracking
          </p>
        </div>
      </div>

      {/* Contact and Testimonial Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Inquiries */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]">
          <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">
            Technical Inquiries & Citations
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            For questions about methodology, data sources, or academic citations, contact our research team.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:research@rana54.com"
              className="flex items-center gap-3 text-[#527E5F] hover:gap-4 transition-all group"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">research@rana54.com</span>
            </a>
            <a
              href="tel:+254700123456"
              className="flex items-center gap-3 text-[#527E5F] hover:gap-4 transition-all group"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">+254 700 123 456</span>
            </a>
          </div>

          <button className="w-full px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="tracking-wide">Submit Technical Question</span>
          </button>
        </div>

        {/* Expert Testimonial */}
        <div className="bg-[#F6B842] rounded-3xl p-8 shadow-[0_20px_70px_-15px_rgba(246,184,66,0.4)]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl text-white">DK</span>
            </div>
            <div>
              <h4 className="text-xl text-white mb-1">Dr. Amara Kimani</h4>
              <p className="text-white/80">Climate Policy Advisor</p>
            </div>
          </div>

          <Quote className="w-8 h-8 text-white/40 mb-4" />
          
          <p className="text-lg text-white/95 leading-relaxed mb-6">
            "Rana54's white paper sets a new standard for transparency in carbon verification. Their MRV methodology represents a significant advancement in making clean energy impact both measurable and tradable."
          </p>

          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>Former UN Climate Initiative</span>
          </div>
        </div>
      </div>

      {/* Related Reading Sidebar */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-[#527E5F]" />
          <h3 className="text-2xl text-gray-900 tracking-tight">
            Related Reading
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="#"
            className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
          >
            <h4 className="text-lg text-gray-900 mb-2 group-hover:text-[#527E5F] transition-colors">
              Methodology Standards
            </h4>
            <p className="text-gray-600 mb-3">
              Deep dive into our MRV framework
            </p>
            <div className="flex items-center gap-2 text-[#527E5F] text-sm">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a
            href="#"
            className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
          >
            <h4 className="text-lg text-gray-900 mb-2 group-hover:text-[#527E5F] transition-colors">
              Latest Press Releases
            </h4>
            <p className="text-gray-600 mb-3">
              Recent updates and announcements
            </p>
            <div className="flex items-center gap-2 text-[#527E5F] text-sm">
              <span>Visit Newsroom</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a
            href="#"
            className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
          >
            <h4 className="text-lg text-gray-900 mb-2 group-hover:text-[#527E5F] transition-colors">
              Case Studies
            </h4>
            <p className="text-gray-600 mb-3">
              Real-world implementation examples
            </p>
            <div className="flex items-center gap-2 text-[#527E5F] text-sm">
              <span>Explore Cases</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
