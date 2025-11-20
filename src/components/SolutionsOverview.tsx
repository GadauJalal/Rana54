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

export function SolutionsOverview() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <SolutionsHero />

          {/* How It Works */}
          <HowItWorksSteps />

          {/* Value by Audience */}
          <ValueByAudience />

          {/* Components Snapshot */}
          <ComponentsSnapshot />

          {/* Data Verification */}
          <DataVerification />

          {/* Economics & Impact */}
          <EconomicsImpact />

          {/* Security & Privacy */}
          <SecurityPrivacy />

          {/* Integrations */}
          <IntegrationsSection />

          {/* Implementation */}
          <ImplementationSection />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}