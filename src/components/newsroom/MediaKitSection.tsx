import { Download, FileText, Image, Video, Palette, User, Phone, Mail } from "lucide-react";

const assetCategories = [
  {
    icon: Palette,
    title: "Brand Assets",
    items: [
      "Logo Pack (PNG/SVG)",
      "Color References",
      "Typography Guidelines",
    ],
    color: "bg-[#527E5F]",
  },
  {
    icon: User,
    title: "Founder & Team Photos",
    items: [
      "High-res Portraits",
      "Transparent Background",
      "Team Group Photos",
    ],
    color: "bg-[#F57B44]",
  },
  {
    icon: Image,
    title: "Product & Device Photos",
    items: [
      "RanaMeter Device",
      "App UI Screenshots",
      "Lifestyle Shots",
    ],
    color: "bg-[#F6B842]",
  },
  {
    icon: Video,
    title: "B-roll & Demo Clips",
    items: [
      "10-30s MP4 Clips",
      "Product Demonstrations",
      "Installation Footage",
    ],
    color: "bg-[#527E5F]",
  },
];

export function MediaKitSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          Media Kit
        </h2>
        <p className="text-lg text-gray-600">
          Download brand assets, images, and resources for media coverage
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Asset Categories - 2/3 width */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {assetCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
                  {category.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#527E5F]"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm tracking-wide">Download</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Sticky Sidebar - 1/3 width */}
        <div className="lg:sticky lg:top-32 h-fit space-y-6">
          {/* Company Boilerplate & Docs */}
          <div className="bg-[#F6B842] rounded-3xl p-8 shadow-[0_20px_70px_-15px_rgba(246,184,66,0.4)]">
            <FileText className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl text-white mb-4 tracking-tight">
              Company Documents
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Company Boilerplate</span>
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Spokespeople Bios</span>
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Fact Sheet (PDF)</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-[#F57B44] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              <span className="tracking-wide">Download All</span>
            </button>
          </div>

          {/* Press Contact */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]">
            <h3 className="text-xl text-gray-900 mb-6 tracking-tight">
              Press Contact
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Name</div>
                <div className="text-gray-900">Sarah Kimani</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Title</div>
                <div className="text-gray-900">Head of Communications</div>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href="mailto:press@rana54.com" className="flex items-center gap-2 text-[#527E5F] hover:gap-3 transition-all">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">press@rana54.com</span>
                </a>
                <a href="tel:+254700123456" className="flex items-center gap-2 text-[#527E5F] hover:gap-3 transition-all">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+254 700 123 456</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Media Kit Download */}
      <div className="bg-[#527E5F] rounded-3xl p-12 shadow-[0_20px_70px_-15px_rgba(82,126,95,0.4)] text-center">
        <h3 className="text-3xl text-white mb-4 tracking-tight">
          Complete Media Kit
        </h3>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Download everything you need in one comprehensive package. Includes all brand assets, photos, videos, and documents.
        </p>
        <button className="px-10 py-5 bg-white text-[#527E5F] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
          <Download className="w-5 h-5" />
          <span className="tracking-wide">Download Complete Kit (45 MB)</span>
        </button>
      </div>
    </section>
  );
}
