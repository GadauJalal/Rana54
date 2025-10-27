import { Card } from "../ui/card";

export function BenefitsGrid() {
  const benefits = [
    {
      number: "01",
      title: "Verified Impact",
      description: "Every kilowatt hour is tracked, verified, and converted into tradable carbon credits through our proprietary verification pipeline.",
      accentColor: "#F57B44"
    },
    {
      number: "02",
      title: "Financial Value",
      description: "Transform your clean energy generation into real financial returns. Partner with investors and businesses who value sustainability.",
      accentColor: "#527E5F"
    },
    {
      number: "03",
      title: "Real-Time Visibility",
      description: "Monitor your solar generation as it happens. Our RanaOS app provides instant insights into your energy production and environmental impact.",
      accentColor: "#F6B842"
    },
    {
      number: "04",
      title: "African-First Design",
      description: "Built specifically for African markets, our solution understands local challenges and opportunities in the renewable energy sector.",
      accentColor: "#F57B44"
    },
    {
      number: "05",
      title: "Complete Ecosystem",
      description: "From hardware (RanaMeter) to software (RanaOS) to verification—everything you need to participate in the clean energy economy.",
      accentColor: "#527E5F"
    },
    {
      number: "06",
      title: "Scalable Solutions",
      description: "Whether you're a household, business, or community, our platform grows with you. Start small, scale infinitely.",
      accentColor: "#F6B842"
    }
  ];

  return (
    <Card className="relative p-6 sm:p-10 lg:p-16 border-0 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.15)] transition-all h-full overflow-hidden bg-white">
      {/* Refined ambient shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#F6B842]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#527E5F]/8 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group/benefit relative"
            >
              {/* Number badge */}
              <div className="mb-3 sm:mb-4 opacity-60 group-hover/benefit:opacity-100 transition-opacity duration-300">
                <span 
                  className="text-xs sm:text-sm tracking-[2.1px] uppercase"
                  style={{ color: benefit.accentColor }}
                >
                  {benefit.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-[28px] tracking-[-0.28px] leading-tight sm:leading-[42px] text-[#002101] mb-3 sm:mb-4 group-hover/benefit:translate-x-1 transition-transform duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[27.2px] text-[rgba(0,33,1,0.6)]">
                {benefit.description}
              </p>

              {/* Decorative accent line on hover */}
              <div 
                className="absolute left-0 bottom-0 h-0.5 w-0 group-hover/benefit:w-12 sm:group-hover/benefit:w-16 transition-all duration-500 rounded-full"
                style={{ backgroundColor: benefit.accentColor }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* White border overlay */}
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[inherit]" />
    </Card>
  );
}
