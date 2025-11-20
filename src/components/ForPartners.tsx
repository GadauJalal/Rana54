import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { PartnersHero } from "./for-partners/PartnersHero";
import { WhyPartner } from "./for-partners/WhyPartner";
import { PartnerTypes } from "./for-partners/PartnerTypes";
import { HowPartnershipWorks } from "./for-partners/HowPartnershipWorks";
import { ToolsSupport } from "./for-partners/ToolsSupport";
import { ImpactSnapshot } from "./for-partners/ImpactSnapshot";
import { PartnerTestimonials } from "./for-partners/PartnerTestimonials";
import { PartnersFAQ } from "./for-partners/PartnersFAQ";
import { PartnersFinalCTA } from "./for-partners/PartnersFinalCTA";
import { AfricanLocationSection } from "./for-partners/AfricanLocationSection";

export function ForPartners() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <HeroFade>
            <PartnersHero />
          </HeroFade>

          {/* Why Partner With Rana54 */}
          <ScaleFade>
            <WhyPartner />
          </ScaleFade>

          {/* Partner Types */}
          <FadeIn variant="card">
            <PartnerTypes />
          </FadeIn>

          {/* How Partnership Works */}
          <ScaleFade>
            <HowPartnershipWorks />
          </ScaleFade>

          {/* Tools & Support */}
          <FadeIn variant="card">
            <ToolsSupport />
          </FadeIn>

          {/* Impact Snapshot */}
          <ScaleFade>
            <ImpactSnapshot />
          </ScaleFade>

          {/* Testimonials */}
          <FadeIn variant="card">
            <PartnerTestimonials />
          </FadeIn>

          {/* FAQ */}
          <FadeIn variant="body">
            <PartnersFAQ />
          </FadeIn>

          {/* Final CTA */}
          <ScaleFade>
            <PartnersFinalCTA />
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