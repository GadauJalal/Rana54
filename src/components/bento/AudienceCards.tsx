import { Card } from "../ui/card";
import { Users, ShoppingCart, Handshake } from "lucide-react";

export function AudienceCards() {
  const audiences = [
    {
      icon: Users,
      title: "For Homeowners",
      description: "Make your solar investment count. Track your energy use, reduce costs, and see the footprint you're leaving behind. Learn more about the homeowner experience.",
      bgColor: "#F57B44",
      textColor: "#FFFFFF",
      accentColor: "#FFF4EF"
    },
    {
      icon: ShoppingCart,
      title: "For Businesses",
      description: "Invest with confidence. Access carbon credits backed by verified, transparent data that meet international standards. Learn more about opportunities for businesses.",
      bgColor: "#527E5F",
      textColor: "#FFFFFF",
      accentColor: "#EFF3F0"
    },
    {
      icon: Handshake,
      title: "For Partners",
      description: "Build programs that scale. Collaborate with Rana54 to deliver projects and community impact grounded in measurable, trusted data. Learn more about partnerships.",
      bgColor: "#F6B842",
      textColor: "#002101",
      accentColor: "#FFF9EC"
    }
  ];

  return (
    <>
      {audiences.map((audience, index) => (
        <div key={index} className="md:col-span-1 lg:col-span-1">
          <Card 
            className="relative overflow-hidden border border-white/60 shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.13),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.13),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.13),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.13),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.13),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.13),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.13),0px_50px_30px_-2.5px_rgba(204,204,204,0.13)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group hover:scale-[1.02] h-full"
            style={{ backgroundColor: audience.bgColor }}
          >
            {/* Content */}
            <div className="relative p-6 sm:p-8 z-10 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-5 sm:mb-6">
                <div className="relative w-fit">
                  <div 
                    className="absolute inset-0 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: audience.accentColor }}
                  />
                  <div 
                    className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] rounded-xl flex items-center justify-center shadow-[0px_4px_16px_-4px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: audience.accentColor }}
                  >
                    <audience.icon 
                      className="w-6 sm:w-7 h-6 sm:h-7"
                      strokeWidth={2}
                      style={{ color: audience.bgColor }}
                    />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-2 sm:space-y-3 flex-1">
                <h3 
                  className="text-lg sm:text-xl lg:text-[22px] tracking-[-0.24px] leading-tight sm:leading-[36px]"
                  style={{ color: audience.textColor }}
                >
                  {audience.title}
                </h3>
                <p 
                  className="text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-[28.8px] opacity-90"
                  style={{ color: audience.textColor }}
                >
                  {audience.description}
                </p>
              </div>

              {/* Learn more link */}
              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: audience.textColor }}>
                <span 
                  className="text-sm sm:text-[15px] tracking-wide inline-flex items-center gap-2"
                  style={{ color: audience.textColor }}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Premium border highlight on hover */}
            <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div 
                className="absolute inset-0 rounded-[inherit]"
                style={{ 
                  background: `linear-gradient(135deg, ${audience.accentColor}30, transparent)`
                }}
              />
            </div>

            {/* White border overlay */}
            <div aria-hidden="true" className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-[inherit]" />
          </Card>
        </div>
      ))}
    </>
  );
}
