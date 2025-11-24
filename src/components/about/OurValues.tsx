import { ShieldCheck, Lightbulb, Users, Leaf, Handshake } from "lucide-react";

export function OurValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Transparent data and verifiable systems",
      detail: "We build trust through cryptographically signed data, open verification processes, and complete transparency. Every claim we make can be independently verified.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Merging IoT, blockchain, and climate tech for good",
      detail: "We push technological boundaries to solve real problems. Our solutions combine cutting-edge hardware, secure data infrastructure, and climate finance mechanisms.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Ensuring access for all users, from households to enterprises",
      detail: "Clean energy benefits shouldn't be limited to the wealthy. We design systems that work for everyone—from rural households to multinational corporations.",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Long-term impact over short-term gain",
      detail: "We're building systems that last. Every decision prioritizes durable impact, environmental responsibility, and the long-term health of communities we serve.",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working with trusted partners to scale clean energy",
      detail: "No single organization can transform an entire energy system. We succeed by partnering with installers, NGOs, buyers, and communities across Africa.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
    {
      icon: Users,
      title: "Resilience",
      description: "We embody the strength and adaptability of Africa itself . thriving through challenges, learning from every obstacle, and building systems that last.",
      detail: "No single organization can transform an entire energy system. We succeed by partnering with installers, NGOs, buyers, and communities across Africa.",
      gradient: "from-[#F6B842] to-[#F57B44]"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">Our Values</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-2 tracking-wide">{value.title}</h3>
              <p className="text-gray-700 mb-4">{value.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{value.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
