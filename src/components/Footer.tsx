import svgPaths from "../imports/svg-zyl8mmnebw";
import ranaLogo from "figma:asset/70c6d6740bd42316c4c5fea5bc7ba57852ccc0f8.png";

export function Footer() {
  const menuSections = [
    {
      title: "Solutions",
      links: ["RanaMeter Device", "RanaOS Platform", "RanaPAY Credits", "For Enterprises"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Partners", "Contact"]
    },
    {
      title: "Impact",
      links: ["Case Studies", "Verified Data", "Carbon Credits", "Global Standards"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Blog", "Newsroom"]
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 25 25">
          <path d={svgPaths.p2e53de00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d={svgPaths.p1b114000} stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5625" />
          <path d={svgPaths.p10136780} fill="currentColor" />
        </svg>
      ),
      color: "#F57B44"
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 25 25">
          <path d={svgPaths.p32123000} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d={svgPaths.p2671da80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d={svgPaths.pb1b6100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        </svg>
      ),
      color: "#527E5F"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 25 25">
          <path d={svgPaths.p1f752200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d="M11.7188 10.9375V17.1875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d="M8.59375 10.9375V17.1875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d={svgPaths.p32f3d400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
          <path d={svgPaths.p2f885cf0} fill="currentColor" />
        </svg>
      ),
      color: "#F6B842"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 overflow-hidden">
      <div className="absolute -top-40 left-0 w-96 h-96 bg-[#527E5F]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#F57B44]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-12">
          <div className="group/logo cursor-pointer">
            <img 
              src={ranaLogo} 
              alt="Rana54" 
              className="h-16 sm:h-20 w-auto group-hover/logo:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm sm:text-[15px] text-gray-600 max-w-[280px] leading-relaxed">
            Making clean energy visible, verifiable, and valuable for everyone.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12">
          {menuSections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-sm sm:text-[15px] text-[#002101]">{section.title}</h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href="#"
                      className="text-xs sm:text-[14px] text-gray-600 hover:text-[#527E5F] transition-colors duration-200 hover:translate-x-1 transition-transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-8">
          <h3 className="text-sm sm:text-[15px] text-[#002101]">Follow Us</h3>
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-[0px_0.6px_0.6px_rgba(28,28,28,0.01),0px_2.3px_2.3px_rgba(28,28,28,0.03),0px_10px_10px_rgba(28,28,28,0.12)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/60"
                aria-label={social.name}
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                  style={{ backgroundColor: `${social.color}20` }}
                />
                <div className="relative" style={{ color: social.color }}>
                  {social.icon}
                </div>
                <div aria-hidden="true" className="absolute border border-white/40 inset-0 pointer-events-none rounded-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:gap-6 items-center text-center text-xs sm:text-[13px] text-gray-600">
          <span>© 2025 Rana54. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>Nairobi, Kenya</span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a href="#contact" className="text-[#527E5F] hover:text-[#3d5d48] transition-colors underline underline-offset-2 decoration-[#527E5F]/30 hover:decoration-[#527E5F]">Contact</a>
            <span className="text-gray-300">•</span>
            <a href="#privacy" className="hover:text-[#527E5F] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">•</span>
            <a href="#terms" className="hover:text-[#527E5F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#527E5F] via-[#F57B44] to-[#F6B842] opacity-50" />
    </footer>
  );
}
