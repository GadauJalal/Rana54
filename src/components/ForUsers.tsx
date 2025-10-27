import { UsersHero } from "./for-users/UsersHero";
import { QuickBenefits } from "./for-users/QuickBenefits";
import { HowItWorksUsers } from "./for-users/HowItWorksUsers";
import { EarningsSnapshot } from "./for-users/EarningsSnapshot";
import { AppFeatures } from "./for-users/AppFeatures";
import { GettingStarted } from "./for-users/GettingStarted";
import { HardwareInstall } from "./for-users/HardwareInstall";
import { PrivacyControl } from "./for-users/PrivacyControl";
import { SupportFAQ } from "./for-users/SupportFAQ";
import { SocialProof } from "./for-users/SocialProof";
import { FinalCTA } from "./for-users/FinalCTA";
import { AfricanLocationSection } from "./for-users/AfricanLocationSection";

export function ForUsers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <UsersHero />

          {/* Quick Benefits */}
          <QuickBenefits />

          {/* How It Works */}
          <HowItWorksUsers />

          {/* Earnings Snapshot */}
          <EarningsSnapshot />

          {/* App Features */}
          <AppFeatures />

          {/* Getting Started */}
          <GettingStarted />

          {/* Hardware & Install */}
          <HardwareInstall />

          {/* Privacy & Control */}
          <PrivacyControl />

          {/* Social Proof */}
          <SocialProof />

          {/* Support & FAQ */}
          <SupportFAQ />

          {/* Final CTA */}
          <FinalCTA />

          {/* African Location Feature */}
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
