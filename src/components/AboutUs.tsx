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
          <OurStory />

          {/* Mission & Vision */}
          <MissionVision />

          {/* Our Values */}
          <OurValues />

          {/* The Team */}
          <TheTeam />

          {/* Final CTA */}
          <AboutFinalCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
