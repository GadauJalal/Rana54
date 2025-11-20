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
          <HowItWorksHero />

          {/* Step 1: RanaMeter */}
          <StepRanaMeter />

          {/* Step 2: RanaOS */}
          <StepRanaOS />

          {/* Step 3: RanaID */}
          <StepRanaID />

          {/* Step 4: RanaPay */}
          <StepRanaPay />

          {/* Integrated Flow */}
          <IntegratedFlow />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
