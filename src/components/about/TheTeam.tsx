import { Linkedin, Mail, ArrowRight } from "lucide-react";
import ibrahimImage from "figma:asset/230768531282e1f5b03601349cd54e865690c641.png";
import abdullahImage from "figma:asset/4a3de0398465621d103f654403bb2aedf6e348c0.png";
import jaafarImage from "figma:asset/df7d63f9a541d0dfca15cfdfd3bc97b03cbd82d6.png";
import abbaImage from "figma:asset/9dbcaf1bfe5e0d5644b276b45c74ff67e7d711c9.png";

export function TheTeam() {
  const leadership = [
    {
      name: "Ibrahim Maigari",
      role: "Co-Founder & CEO",
      focus: "Strategy & Impact",
      bio: "Former energy systems researcher with 10+ years scaling clean tech across Africa.",
      image: ibrahimImage
    },
    {
      name: "Abdullah Maigari",
      role: "Co-Founder & CTO",
      focus: "Platform & IoT",
      bio: "IoT architect and blockchain engineer building verifiable infrastructure at scale.",
      image: abdullahImage
    },
    {
      name: "Ja'afar Maigari",
      role: "Product Manager",
      focus: "User Experience",
      bio: "Product leader passionate about making complex technology accessible and delightful.",
      image: jaafarImage
    },
    {
      name: "Abba Gumel",
      role: "Head of Partnerships",
      focus: "Ecosystem Growth",
      bio: "Connector building bridges between installers, NGOs, and carbon market buyers.",
      image: abbaImage
    }
  ];

  const advisors = [
    {
      name: "Prof. Sarah Ndlovu",
      expertise: "Climate Finance",
      affiliation: "Former World Bank Energy Lead"
    },
    {
      name: "Marcus Chen",
      expertise: "IoT Security",
      affiliation: "Hardware Security Researcher"
    },
    {
      name: "Nia Williams",
      expertise: "Carbon Markets",
      affiliation: "Verra Standards Consultant"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl mb-4 tracking-tight text-gray-900">The Team</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Meet the people building Africa's clean energy future
        </p>
      </div>

      {/* Leadership team */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadership.map((member, index) => (
          <div
            key={index}
            className="group rounded-3xl bg-white border-2 border-gray-100 hover:border-[#527E5F]/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Photo */}
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Info */}
            <div className="p-6">
              <h3 className="text-gray-900 mb-1 tracking-wide">{member.name}</h3>
              <div className="text-[#527E5F] mb-1">{member.role}</div>
              <div className="text-sm text-gray-500 mb-3">{member.focus}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
              
              {/* Social links */}
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#527E5F] hover:text-white transition-colors flex items-center justify-center">
                  <Linkedin className="w-4 h-4" strokeWidth={2} />
                </button>
                <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#F57B44] hover:text-white transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advisors */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-6 tracking-tight text-center">Advisory Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white border border-gray-200">
              <h4 className="text-gray-900 mb-1 tracking-wide">{advisor.name}</h4>
              <div className="text-sm text-[#527E5F] mb-1">{advisor.expertise}</div>
              <div className="text-xs text-gray-500">{advisor.affiliation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-[#527E5F]/5 to-[#F57B44]/5 border-2 border-gray-100">
        <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">Join Our Mission</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          We're always looking for talented people who share our vision of making clean energy accessible, verifiable, and valuable across Africa.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#527E5F] to-[#3d5d48] text-white shadow-lg hover:shadow-xl transition-all duration-300">
          View Open Positions
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}