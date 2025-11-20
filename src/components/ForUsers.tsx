import { FadeIn } from "./animations/FadeIn";
import { HeroFade, ScaleFade } from "./animations/FadeIn";
import { UsersHero } from "./for-users/UsersHero";
import { QuickBenefits } from "./for-users/QuickBenefits";
import { HowItWorksUsers } from "./for-users/HowItWorksUsers";
import { EarningsSnapshot } from "./for-users/EarningsSnapshot";
import { AppFeatures } from "./for-users/AppFeatures";
import { GettingStarted } from "./for-users/GettingStarted";
import { HardwareInstall } from "./for-users/HardwareInstall";
import { PrivacyControl } from "./for-users/PrivacyControl";
import { SocialProof } from "./for-users/SocialProof";
import { SupportFAQ } from "./for-users/SupportFAQ";
import { FinalCTA } from "./for-users/FinalCTA";
import { AfricanLocationSection } from "./for-users/AfricanLocationSection";

export function ForUsers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <HeroFade>
            <UsersHero />
          </HeroFade>

          {/* Quick Benefits */}
          <ScaleFade>
            <QuickBenefits />
          </ScaleFade>

          {/* How It Works */}
          <FadeIn variant="card">
            <HowItWorksUsers />
          </FadeIn>

          {/* Earnings Snapshot */}
          <ScaleFade>
            <EarningsSnapshot />
          </ScaleFade>

          {/* App Features */}
          <FadeIn variant="card">
            <AppFeatures />
          </FadeIn>

          {/* Getting Started */}
          <ScaleFade>
            <GettingStarted />
          </ScaleFade>

          {/* Hardware & Install */}
          <FadeIn variant="body">
            <HardwareInstall />
          </FadeIn>

          {/* Privacy & Control */}
          <ScaleFade>
            <PrivacyControl />
          </ScaleFade>

          {/* Social Proof */}
          <FadeIn variant="card">
            <SocialProof />
          </FadeIn>

          {/* Support & FAQ */}
          <FadeIn variant="body">
            <SupportFAQ />
          </FadeIn>

          {/* Final CTA */}
          <ScaleFade>
            <FinalCTA />
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