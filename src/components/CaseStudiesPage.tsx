import { CaseStudiesHero } from "./case-studies/CaseStudiesHero";
import { FeaturedCaseStudies } from "./case-studies/FeaturedCaseStudies";
import { ImpactReports } from "./case-studies/ImpactReports";
import { GeographicBreakdown } from "./case-studies/GeographicBreakdown";
import { CaseStudiesCTA } from "./case-studies/CaseStudiesCTA";
import { AfricanLocationSection } from "./case-studies/AfricanLocationSection";

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {/* Hero */}
          <CaseStudiesHero />

          {/* Featured case studies */}
          <FeaturedCaseStudies />

          {/* Geographic distribution */}
          <GeographicBreakdown />

          {/* Reports and white papers */}
          <ImpactReports />

          {/* CTAs */}
          <CaseStudiesCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
