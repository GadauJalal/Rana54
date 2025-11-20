import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
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
          <HeroFade>
            <BuyersHero />
          </HeroFade>

          {/* Why Rana54 Credits */}
          <ScaleFade>
            <WhyRana54Credits />
          </ScaleFade>

          {/* How It Works */}
          <FadeIn variant="card">
            <HowItWorksBuyers />
          </FadeIn>

          {/* Data Integrity Snapshot */}
          <ScaleFade>
            <DataIntegritySnapshot />
          </ScaleFade>

          {/* Buyer Tools & Dashboard */}
          <FadeIn variant="card">
            <BuyerTools />
          </FadeIn>

          {/* Compliance & Standards */}
          <ScaleFade>
            <ComplianceStandards />
          </ScaleFade>

          {/* Social & Economic Impact */}
          <FadeIn variant="card">
            <SocialEconomicImpact />
          </FadeIn>

          {/* Testimonials */}
          <ScaleFade>
            <BuyerTestimonials />
          </ScaleFade>

          {/* FAQ */}
          <FadeIn variant="body">
            <BuyersFAQ />
          </FadeIn>

          {/* Final CTA */}
          <ScaleFade>
            <BuyersFinalCTA />
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