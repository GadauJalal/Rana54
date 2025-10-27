import { SDGGoalsHero } from "./sdg-goals/SDGGoalsHero";
import { KeySDGs } from "./sdg-goals/KeySDGs";
import { SDGTagline } from "./sdg-goals/SDGTagline";
import { AfricanLocationSection } from "./sdg-goals/AfricanLocationSection";

export function SDGGoalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {/* Hero */}
          <SDGGoalsHero />

          {/* Key SDGs */}
          <KeySDGs />

          {/* Tagline */}
          <SDGTagline />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
