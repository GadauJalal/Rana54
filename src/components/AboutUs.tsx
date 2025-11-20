import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { OurStory } from "./about/OurStory";
import { MissionVision } from "./about/MissionVision";
import { OurValues } from "./about/OurValues";
import { TheTeam } from "./about/TheTeam";
import { AboutFinalCTA } from "./about/AboutFinalCTA";
import { AfricanLocationSection } from "./about/AfricanLocationSection";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Our Story */}
          <HeroFade>
            <OurStory />
          </HeroFade>

          {/* Mission & Vision */}
          <ScaleFade>
            <MissionVision />
          </ScaleFade>

          {/* Our Values */}
          <FadeIn variant="card">
            <OurValues />
          </FadeIn>

          {/* The Team */}
          <ScaleFade>
            <TheTeam />
          </ScaleFade>

          {/* Final CTA */}
          <FadeIn variant="card">
            <AboutFinalCTA />
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