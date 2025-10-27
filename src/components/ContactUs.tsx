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
          <ContactHero />

          {/* Contact Form */}
          <div id="form">
            <ContactForm />
          </div>

          {/* Office Locations */}
          <OfficeLocations />

          {/* FAQ */}
          <ContactFAQ />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
