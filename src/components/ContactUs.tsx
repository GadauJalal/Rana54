import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { ContactHero } from "./contact/ContactHero";
import { ContactForm } from "./contact/ContactForm";
import { OfficeLocations } from "./contact/OfficeLocations";
import { ContactFAQ } from "./contact/ContactFAQ";
import { AfricanLocationSection } from "./contact/AfricanLocationSection";

export function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <HeroFade>
            <ContactHero />
          </HeroFade>

          {/* Contact Form */}
          <div id="form">
            <ScaleFade>
              <ContactForm />
            </ScaleFade>
          </div>

          {/* Office Locations */}
          <FadeIn variant="card">
            <OfficeLocations />
          </FadeIn>

          {/* FAQ */}
          <FadeIn variant="body">
            <ContactFAQ />
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