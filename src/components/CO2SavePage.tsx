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
          <CO2SaveHero />

          {/* How it works - 4 steps */}
          <HowCarbonSavingWorks />

          {/* Methodology & Standards */}
          <MethodologyStandards />

          {/* Transparency & Proof */}
          <TransparencyProof />

          {/* Impact Snapshot with verified metrics */}
          <ImpactSnapshot />

          {/* CTAs */}
          <CO2SaveCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
