import { Sparkles } from "lucide-react";

export function SDGTagline() {
  return (
    <section className="relative">
      <div className="bg-gradient-to-br from-[#F6B842] to-[#F57B44] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_70px_-15px_rgba(245,123,68,0.4)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4 sm:mb-6" />
          <p className="text-white tracking-tight leading-tight">
            Every verified watt contributes to global sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
