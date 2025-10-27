import { Calendar, MapPin, Video, Plus, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    name: "African Climate Tech Summit 2025",
    date: "November 15, 2025",
    time: "9:00 AM - 5:00 PM EAT",
    location: "Nairobi, Kenya",
    type: "in-person",
    cta: "Register Now",
  },
  {
    name: "Renewable Energy Innovation Webinar",
    date: "November 8, 2025",
    time: "2:00 PM - 3:30 PM GMT",
    location: "Virtual",
    type: "virtual",
    cta: "Join Virtually",
  },
  {
    name: "Carbon Markets Panel Discussion",
    date: "October 28, 2025",
    time: "10:00 AM - 12:00 PM EAT",
    location: "Lagos, Nigeria",
    type: "in-person",
    cta: "RSVP",
  },
];

const pastEvents = [
  {
    name: "Blockchain for Climate Action Conference",
    date: "September 20, 2025",
    location: "Kigali, Rwanda",
  },
  {
    name: "East Africa Energy Forum",
    date: "August 15, 2025",
    location: "Dar es Salaam, Tanzania",
  },
];

export function EventsSpeaking() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          Events & Speaking
        </h2>
        <p className="text-lg text-gray-600">
          Join us at upcoming events or watch past presentations
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="mb-12">
        <h3 className="text-2xl mb-6 tracking-tight text-gray-900">
          Upcoming Events
        </h3>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#527E5F] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_-8px_rgba(82,126,95,0.25)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Event Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      event.type === "virtual"
                        ? "bg-[#F57B44]/10 text-[#F57B44]"
                        : "bg-[#527E5F]/10 text-[#527E5F]"
                    }`}>
                      {event.type === "virtual" ? "Virtual" : "In-Person"}
                    </span>
                  </div>

                  <h4 className="text-2xl text-gray-900 mb-3 tracking-tight">
                    {event.name}
                  </h4>

                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#527E5F]" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.type === "virtual" ? (
                        <Video className="w-5 h-5 text-[#F57B44]" />
                      ) : (
                        <MapPin className="w-5 h-5 text-[#527E5F]" />
                      )}
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <span className="tracking-wide">{event.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    <span className="tracking-wide">Add to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h3 className="text-2xl mb-6 tracking-tight text-gray-900">
          Past Events
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-xl text-gray-900 mb-3 group-hover:text-[#527E5F] transition-colors">
                {event.name}
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
