import { Rss, Mail, FileText, Shield, ArrowRight } from "lucide-react";

export function UtilityFooter() {
  return (
    <section className="space-y-12">
      {/* RSS & Email Subscribe */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* RSS Feed */}
        <div className="bg-[#F57B44] rounded-3xl p-8 shadow-[0_20px_70px_-15px_rgba(245,123,68,0.4)]">
          <Rss className="w-12 h-12 text-white mb-6" />
          <h3 className="text-2xl text-white mb-4 tracking-tight">
            RSS Feed
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Subscribe to our RSS feed for automatic updates on all newsroom content.
          </p>
          <button className="px-8 py-4 bg-white text-[#F57B44] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <Rss className="w-5 h-5" />
            <span className="tracking-wide">Subscribe via RSS</span>
          </button>
        </div>

        {/* Email Subscribe */}
        <div className="bg-[#F6B842] rounded-3xl p-8 shadow-[0_20px_70px_-15px_rgba(246,184,66,0.4)]">
          <Mail className="w-12 h-12 text-white mb-6" />
          <h3 className="text-2xl text-white mb-4 tracking-tight">
            Email Updates
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Get the latest press releases and announcements delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <button className="px-6 py-3 bg-white text-[#F57B44] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Embargoed Access */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-[#527E5F] mx-auto mb-6" />
          <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">
            Embargoed Access for Journalists
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Request early access to embargoed announcements and exclusive content for verified media professionals.
          </p>
          <button className="px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span className="tracking-wide">Request Embargoed Access</span>
          </button>
        </div>
      </div>

      {/* Attribution Usage Guidelines */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
            Attribution Guidelines
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-sm">✓</div>
                <span className="text-sm">Do</span>
              </div>
              <ul className="ml-7 space-y-1 text-sm text-gray-600">
                <li>• Credit "Rana54" in media usage</li>
                <li>• Use official logos and colors</li>
                <li>• Link to rana54.com when possible</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-sm">✗</div>
                <span className="text-sm">Don't</span>
              </div>
              <ul className="ml-7 space-y-1 text-sm text-gray-600">
                <li>• Modify or distort logos</li>
                <li>• Use outdated branding</li>
                <li>• Misrepresent company statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
            Licensing & Credits
          </h3>
          <p className="text-gray-600 mb-4">
            All media assets are provided for editorial and news coverage purposes. Commercial use requires prior written permission.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Photos and videos: © 2025 Rana54. All rights reserved.
          </p>
          <button className="text-[#527E5F] hover:text-[#3d5d48] transition-colors flex items-center gap-2">
            <span className="text-sm tracking-wide">Read Full Terms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Persistent CTAs */}
      <div className="bg-[#527E5F] rounded-3xl p-12 shadow-[0_20px_70px_-15px_rgba(82,126,95,0.4)]">
        <div className="text-center mb-8">
          <h3 className="text-3xl text-white mb-4 tracking-tight">
            Need More Information?
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our media team is here to help with interviews, additional resources, and press inquiries.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-[#527E5F] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="tracking-wide">Press Inquiries</span>
          </button>
          <button className="px-8 py-4 bg-[#F6B842] text-gray-900 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            <span className="tracking-wide">Download Media Kit</span>
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
            <Rss className="w-5 h-5" />
            <span className="tracking-wide">Subscribe to Updates</span>
          </button>
        </div>
      </div>
    </section>
  );
}
