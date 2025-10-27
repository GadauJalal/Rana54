import { BuyersHero } from "./for-buyers/BuyersHero";
import { WhyRana54Credits } from "./for-buyers/WhyRana54Credits";
import { HowItWorksBuyers } from "./for-buyers/HowItWorksBuyers";
import { DataIntegritySnapshot } from "./for-buyers/DataIntegritySnapshot";
import { BuyerTools } from "./for-buyers/BuyerTools";
import { ComplianceStandards } from "./for-buyers/ComplianceStandards";
import { SocialEconomicImpact } from "./for-buyers/SocialEconomicImpact";
import { BuyerTestimonials } from "./for-buyers/BuyerTestimonials";
import { BuyersFAQ } from "./for-buyers/BuyersFAQ";
import { BuyersFinalCTA } from "./for-buyers/BuyersFinalCTA";
import { AfricanLocationSection } from "./for-buyers/AfricanLocationSection";

export function ForBuyers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <BuyersHero />

          {/* Why Rana54 Credits */}
          <WhyRana54Credits />

          {/* How It Works */}
          <HowItWorksBuyers />

          {/* Data Integrity Snapshot */}
          <DataIntegritySnapshot />

          {/* Buyer Tools & Dashboard */}
          <BuyerTools />

          {/* Compliance & Standards */}
          <ComplianceStandards />

          {/* Social & Economic Impact */}
          <SocialEconomicImpact />

          {/* Testimonials */}
          <BuyerTestimonials />

          {/* FAQ */}
          <BuyersFAQ />

          {/* Final CTA */}
          <BuyersFinalCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
