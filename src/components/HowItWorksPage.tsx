import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { HowItWorksHero } from "./how-it-works/HowItWorksHero";
import { StepRanaMeter } from "./how-it-works/StepRanaMeter";
import { StepRanaOS } from "./how-it-works/StepRanaOS";
import { StepRanaID } from "./how-it-works/StepRanaID";
import { StepRanaPay } from "./how-it-works/StepRanaPay";
import { IntegratedFlow } from "./how-it-works/IntegratedFlow";
import { AfricanLocationSection } from "./how-it-works/AfricanLocationSection";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {/* Hero */}
          <HeroFade>
            <HowItWorksHero />
          </HeroFade>

          {/* Step 1: RanaMeter */}
          <ScaleFade>
            <StepRanaMeter />
          </ScaleFade>

          {/* Step 2: RanaOS */}
          <FadeIn variant="card">
            <StepRanaOS />
          </FadeIn>

          {/* Step 3: RanaID */}
          <ScaleFade>
            <StepRanaID />
          </ScaleFade>

          {/* Step 4: RanaPay */}
          <FadeIn variant="card">
            <StepRanaPay />
          </FadeIn>

          {/* Integrated Flow */}
          <ScaleFade>
            <IntegratedFlow />
          </ScaleFade>

          {/* African Location Feature */}
          <ScaleFade delay={0.1}>
            <AfricanLocationSection />
          </ScaleFade>
        </div>
      </main>
    </div>
  );
}