import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { CO2SaveHero } from "./co2-save/CO2SaveHero";
import { HowCarbonSavingWorks } from "./co2-save/HowCarbonSavingWorks";
import { MethodologyStandards } from "./co2-save/MethodologyStandards";
import { TransparencyProof } from "./co2-save/TransparencyProof";
import { ImpactSnapshot } from "./co2-save/ImpactSnapshot";
import { CO2SaveCTA } from "./co2-save/CO2SaveCTA";
import { AfricanLocationSection } from "./co2-save/AfricanLocationSection";

export function CO2SavePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {/* Hero with animated counter */}
          <HeroFade>
            <CO2SaveHero />
          </HeroFade>

          {/* How it works - 4 steps */}
          <ScaleFade>
            <HowCarbonSavingWorks />
          </ScaleFade>

          {/* Methodology & Standards */}
          <FadeIn variant="card">
            <MethodologyStandards />
          </FadeIn>

          {/* Transparency & Proof */}
          <ScaleFade>
            <TransparencyProof />
          </ScaleFade>

          {/* Impact Snapshot with verified metrics */}
          <FadeIn variant="card">
            <ImpactSnapshot />
          </FadeIn>

          {/* CTAs */}
          <ScaleFade>
            <CO2SaveCTA />
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