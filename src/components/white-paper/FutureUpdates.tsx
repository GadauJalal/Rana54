import { Calendar, Bell, ArrowRight } from "lucide-react";

const upcomingUpdates = [
  {
    title: "Q1 2026 Carbon Framework Addendum",
    description: "Enhanced methodologies for Scope 3 emissions tracking",
    expectedDate: "January 2026",
  },
  {
    title: "Expanded Governance Model",
    description: "Multi-stakeholder governance protocols for platform decisions",
    expectedDate: "February 2026",
  },
  {
    title: "Regional Expansion Roadmap",
    description: "Detailed deployment plans for West and Southern Africa",
    expectedDate: "March 2026",
  },
];

export function FutureUpdates() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl mb-4 tracking-tight text-gray-900">
          Future Updates
        </h2>
        <p className="text-lg text-gray-600">
          Upcoming additions and revisions to the white paper
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {upcomingUpdates.map((update, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#F6B842] transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-sm text-[#F57B44] mb-4">
              <Calendar className="w-4 h-4" />
              <span>{update.expectedDate}</span>
            </div>

            <h3 className="text-xl text-gray-900 mb-3 tracking-tight">
              {update.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {update.description}
            </p>
          </div>
        ))}
      </div>

      {/* Subscription Form */}
      <div className="bg-[#527E5F] rounded-3xl p-12 shadow-[0_20px_70px_-15px_rgba(82,126,95,0.4)]">
        <div className="max-w-3xl mx-auto text-center">
          <Bell className="w-12 h-12 text-white mx-auto mb-6" />
          <h3 className="text-3xl text-white mb-4 tracking-tight">
            Get Notified of New Versions
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive updates when new white paper versions and addendums are released.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-lg"
            />
            <button className="px-8 py-4 bg-[#F6B842] text-gray-900 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span className="tracking-wide">Subscribe</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-white/60 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
