import { Megaphone, Calendar } from "lucide-react";

const announcements = [
  {
    icon: Megaphone,
    tag: "Product Update",
    date: "October 18, 2025",
    headline: "Platform Maintenance Scheduled",
    dek: "Routine system upgrades on October 22nd, 2:00-4:00 AM EAT. No service disruption expected.",
    readTime: "2 min read",
    color: "bg-[#F6B842]",
  },
  {
    icon: Megaphone,
    tag: "Product Update",
    date: "October 12, 2025",
    headline: "New Dashboard Features Released",
    dek: "Enhanced analytics, customizable widgets, and improved data export capabilities now available to all users.",
    readTime: "3 min read",
    color: "bg-[#F6B842]",
  },
  {
    icon: Megaphone,
    tag: "Report",
    date: "September 30, 2025",
    headline: "Q3 Impact Report Published",
    dek: "Our latest quarterly impact report shows 300% growth in verified clean energy generation across partner networks.",
    readTime: "5 min read",
    color: "bg-[#527E5F]",
  },
  {
    icon: Megaphone,
    tag: "Product Update",
    date: "September 20, 2025",
    headline: "Mobile App Update v3.2",
    dek: "Bug fixes, performance improvements, and new real-time notification system for earnings and verifications.",
    readTime: "2 min read",
    color: "bg-[#F57B44]",
  },
];

export function Announcements({ onReadClick }: { onReadClick?: (post: any) => void }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
            Announcements & Product Updates
          </h2>
          <p className="text-lg text-gray-600">
            Internal updates and platform news
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            onClick={() => onReadClick?.(announcement)}
            className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F6B842] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(246,184,66,0.3)] transition-all duration-500 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F6B842] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                <Megaphone className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{announcement.date}</span>
                </div>

                <h3 className="text-xl text-gray-900 mb-2 tracking-tight leading-tight group-hover:text-[#F57B44] transition-colors duration-500">
                  {announcement.headline}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {announcement.dek}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}