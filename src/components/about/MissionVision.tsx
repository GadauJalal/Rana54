import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mission */}
      <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#527E5F] to-[#3d5d48] shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl text-white mb-4 tracking-tight">Our Mission</h2>
        <p className="text-xl text-white/90 leading-relaxed">
          To empower people and communities across Africa to generate, track, and monetize clean energy—driving real, measurable climate impact.
        </p>
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/70 leading-relaxed">
            We believe every solar panel owner should benefit from their contribution to a cleaner future. Our mission is to make that a reality through verified data, transparent systems, and accessible technology.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Eye className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl text-white mb-4 tracking-tight">Our Vision</h2>
        <p className="text-xl text-white/90 leading-relaxed">
          A future where every watt of clean energy is visible, verified, and valuable.
        </p>
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/70 leading-relaxed">
            We envision a world where clean energy data flows seamlessly from source to market, where solar users are fairly compensated, and where climate action is measured with precision and rewarded with purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
