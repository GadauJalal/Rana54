import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { CaseStudiesHero } from "./case-studies/CaseStudiesHero";
import { FeaturedCaseStudies } from "./case-studies/FeaturedCaseStudies";
import { GeographicBreakdown } from "./case-studies/GeographicBreakdown";
import { ImpactReports } from "./case-studies/ImpactReports";
import { CaseStudiesCTA } from "./case-studies/CaseStudiesCTA";
import { AfricanLocationSection } from "./case-studies/AfricanLocationSection";

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {/* Hero */}
          <HeroFade>
            <CaseStudiesHero />
          </HeroFade>

          {/* Featured case studies */}
          <ScaleFade>
            <FeaturedCaseStudies />
          </ScaleFade>

          {/* Geographic distribution */}
          <FadeIn variant="card">
            <GeographicBreakdown />
          </FadeIn>

          {/* Reports and white papers */}
          <ScaleFade>
            <ImpactReports />
          </ScaleFade>

          {/* CTAs */}
          <FadeIn variant="card">
            <CaseStudiesCTA />
          </FadeIn>

          {/* African Location Feature */}
          <ScaleFade delay={0.1}>
            <AfricanLocationSection />
          </ScaleFade>
        </div>
      </main>
    </div>
  );
}