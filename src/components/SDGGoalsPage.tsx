import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
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
          <HeroFade>
            <SDGGoalsHero />
          </HeroFade>

          {/* Key SDGs */}
          <ScaleFade>
            <KeySDGs />
          </ScaleFade>

          {/* Tagline */}
          <FadeIn variant="heading">
            <SDGTagline />
          </FadeIn>

          {/* African Location Feature */}
          <ScaleFade delay={0.1}>
            <AfricanLocationSection />
          </ScaleFade>
        </div>
      </main>
    </div>
  );
}