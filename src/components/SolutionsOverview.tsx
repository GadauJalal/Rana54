import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { SolutionsHero } from "./solutions/SolutionsHero";
import { HowItWorksSteps } from "./solutions/HowItWorksSteps";
import { ValueByAudience } from "./solutions/ValueByAudience";
import { ComponentsSnapshot } from "./solutions/ComponentsSnapshot";
import { DataVerification } from "./solutions/DataVerification";
import { EconomicsImpact } from "./solutions/EconomicsImpact";
import { SecurityPrivacy } from "./solutions/SecurityPrivacy";
import { IntegrationsSection } from "./solutions/IntegrationsSection";
import { ImplementationSection } from "./solutions/ImplementationSection";
import { AfricanLocationSection } from "./solutions/AfricanLocationSection";

interface SolutionsOverviewProps {
  onSolarCalculatorClick?: () => void;
}

export function SolutionsOverview({ onSolarCalculatorClick }: SolutionsOverviewProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <HeroFade>
            <SolutionsHero onSolarCalculatorClick={onSolarCalculatorClick} />
          </HeroFade>

          {/* How It Works */}
          <FadeIn variant="card">
            <HowItWorksSteps />
          </FadeIn>

          {/* Value by Audience */}
          <ScaleFade>
            <ValueByAudience />
          </ScaleFade>

          {/* Components Snapshot */}
          <FadeIn variant="card">
            <ComponentsSnapshot />
          </FadeIn>

          {/* Data Verification */}
          <ScaleFade>
            <DataVerification />
          </ScaleFade>

          {/* Economics & Impact */}
          <FadeIn variant="card">
            <EconomicsImpact />
          </FadeIn>

          {/* Security & Privacy */}
          <ScaleFade>
            <SecurityPrivacy />
          </ScaleFade>

          {/* Integrations */}
          <FadeIn variant="card">
            <IntegrationsSection />
          </FadeIn>

          {/* Implementation */}
          <ScaleFade>
            <ImplementationSection />
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