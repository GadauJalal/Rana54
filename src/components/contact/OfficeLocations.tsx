import { MapPin, Phone, Mail } from "lucide-react";

export function OfficeLocations() {
  const offices = [
    {
      region: "East Africa",
      city: "Nairobi, Kenya",
      address: "The Promenade, 3rd Floor, General Mathenge Drive",
      phone: "+254 700 000 000",
      email: "nairobi@rana54.com",
      description: "Regional headquarters & operations",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      region: "West Africa",
      city: "Lagos, Nigeria",
      address: "Plot 1684 Sanusi Fafunwa Street, Victoria Island",
      phone: "+234 800 000 0000",
      email: "lagos@rana54.com",
      description: "West Africa operations hub",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      region: "Southern Africa",
      city: "Cape Town, South Africa",
      address: "Corner of Bree & Long Street, City Centre",
      phone: "+27 21 000 0000",
      email: "capetown@rana54.com",
      description: "Southern Africa expansion",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Our Offices</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Operating across Africa to serve you better
        </p>
      </div>

      {/* Offices grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Region badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${office.gradient} text-white mb-6`}>
              <MapPin className="w-4 h-4" strokeWidth={2.5} />
              <span className="tracking-wide">{office.region}</span>
            </div>

            {/* City */}
            <h3 className="text-gray-900 mb-2 tracking-wide">{office.city}</h3>
            <p className="text-sm text-gray-500 mb-6">{office.description}</p>

            {/* Contact details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" strokeWidth={2} />
                <span className="text-sm text-gray-600">{office.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={2} />
                <a href={`tel:${office.phone}`} className="text-sm text-gray-600 hover:text-[#527E5F] transition-colors">
                  {office.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={2} />
                <a href={`mailto:${office.email}`} className="text-sm text-gray-600 hover:text-[#527E5F] transition-colors">
                  {office.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expansion notice */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border border-gray-200 text-center">
        <p className="text-gray-600">
          <span className="text-gray-900">Expanding soon:</span> Ghana, Tanzania, Rwanda, and Uganda
        </p>
      </div>
    </div>
  );
}
