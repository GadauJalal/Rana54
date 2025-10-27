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
          <PartnersHero />

          {/* Why Partner With Rana54 */}
          <WhyPartner />

          {/* Partner Types */}
          <PartnerTypes />

          {/* How Partnership Works */}
          <HowPartnershipWorks />

          {/* Tools & Support */}
          <ToolsSupport />

          {/* Impact Snapshot */}
          <ImpactSnapshot />

          {/* Testimonials */}
          <PartnerTestimonials />

          {/* FAQ */}
          <PartnersFAQ />

          {/* Final CTA */}
          <PartnersFinalCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
