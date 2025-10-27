import { Lightbulb, Cpu, Users, TrendingUp } from "lucide-react";

export function OurApproach() {
  const milestones = [
    {
      phase: "Idea",
      year: "2021",
      icon: Lightbulb,
      title: "Problem Discovery",
      description: "Identified the gap in African solar markets: fragmented data, no verification, missed carbon revenue.",
      achievements: [
        "Market research across 5 countries",
        "100+ user interviews",
        "Partnership scoping with installers"
      ],
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      phase: "Prototype",
      year: "2022",
      icon: Cpu,
      title: "Technology Development",
      description: "Built and tested RanaMeter hardware, RanaOS platform, and verification protocols.",
      achievements: [
        "Hardware prototype v1-v3",
        "Cryptographic signing implementation",
        "First MRV methodology draft"
      ],
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      phase: "Pilot",
      year: "2023",
      icon: Users,
      title: "Field Validation",
      description: "Deployed pilot systems with partner installers in Kenya, Nigeria, and Ghana.",
      achievements: [
        "200+ pilot installations",
        "First carbon credits verified",
        "Partner training programs launched"
      ],
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      phase: "Scale",
      year: "2024+",
      icon: TrendingUp,
      title: "Continental Expansion",
      description: "Scaling across Africa with multi-country deployments, registry integrations, and ecosystem partnerships.",
      achievements: [
        "2,400+ active installations",
        "15 country presence",
        "ESG buyer partnerships established"
      ],
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Our Approach</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From concept to continental scale through collaboration and iteration
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#527E5F] via-[#F57B44] to-[#F6B842]" style={{ top: '5rem' }} />
        
        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#527E5F] items-center justify-center z-10 shadow-lg">
                  <Icon className="w-6 h-6 text-[#527E5F]" strokeWidth={2.5} />
                </div>

                {/* Card */}
                <div className="lg:mt-24 p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Mobile icon */}
                  <div className="lg:hidden w-14 h-14 rounded-xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Phase badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-4">
                    <span className="text-xs text-gray-600 tracking-wide">{milestone.phase}</span>
                    <span className="text-xs text-[#527E5F]">{milestone.year}</span>
                  </div>

                  <h3 className="text-gray-900 mb-3 tracking-wide">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {milestone.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#527E5F] mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collaboration highlight */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B842]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl text-white mb-4 tracking-tight">Cross-Sector Collaboration</h3>
          <p className="text-white/90 leading-relaxed mb-6">
            Our approach succeeds because we bring together diverse expertise: technology teams building secure hardware and software, finance experts designing carbon market pathways, and sustainability leaders ensuring real-world impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white">Technology</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white">Finance</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white">Sustainability</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white">Community Impact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
