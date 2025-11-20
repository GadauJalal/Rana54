import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { SolutionsOverview } from "./components/SolutionsOverview";
import { ForUsers } from "./components/ForUsers";
import { ForBuyers } from "./components/ForBuyers";
import { ForPartners } from "./components/ForPartners";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { CO2SavePage } from "./components/CO2SavePage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { SDGGoalsPage } from "./components/SDGGoalsPage";
import { NewsroomPage } from "./components/NewsroomPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { HeroCard } from "./components/bento/HeroCard";
import { TrustedBySection } from "./components/bento/TrustedBySection";
import { FeatureCards } from "./components/bento/FeatureCards";
import { AboutSection } from "./components/bento/AboutSection";
import { WhyChooseSection } from "./components/bento/WhyChooseSection";
import { BenefitsGrid } from "./components/bento/BenefitsGrid";
import { HowItWorksCard } from "./components/bento/HowItWorksCard";
import { AudienceCards } from "./components/bento/AudienceCards";
import { RanaOSCard } from "./components/bento/RanaOSCard";
import { RanaMeterCard } from "./components/bento/RanaMeterCard";
import { RanaPayCard } from "./components/bento/RanaPayCard";
import { ComparisonCard } from "./components/bento/ComparisonCard";
import { FAQSection } from "./components/bento/FAQSection";
import { AfricanImpactSection } from "./components/bento/AfricanImpactSection";
import { CaseStudyCard } from "./components/bento/CaseStudyCard";
import { PricingCard } from "./components/bento/PricingCard";
import { FAQCard } from "./components/bento/FAQCard";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "solutions" | "for-users" | "for-buyers" | "for-partners" | "about" | "contact" | "how-it-works" | "co2-save" | "case-studies" | "sdg-goals" | "newsroom" | "resources">("home");

  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSolutions = () => {
    setCurrentPage("solutions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToForUsers = () => {
    setCurrentPage("for-users");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToForBuyers = () => {
    setCurrentPage("for-buyers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToForPartners = () => {
    setCurrentPage("for-partners");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToAbout = () => {
    setCurrentPage("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToContact = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHowItWorks = () => {
    setCurrentPage("how-it-works");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCO2Save = () => {
    setCurrentPage("co2-save");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCaseStudies = () => {
    setCurrentPage("case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSDGGoals = () => {
    setCurrentPage("sdg-goals");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToNewsroom = () => {
    setCurrentPage("newsroom");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToResources = () => {
    setCurrentPage("resources");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onLogoClick={navigateToHome} 
        onSolutionsClick={navigateToSolutions}
        onForUsersClick={navigateToForUsers}
        onForBuyersClick={navigateToForBuyers}
        onForPartnersClick={navigateToForPartners}
        onAboutClick={navigateToAbout}
        onContactClick={navigateToContact}
        onHowItWorksClick={navigateToHowItWorks}
        onCO2SaveClick={navigateToCO2Save}
        onCaseStudiesClick={navigateToCaseStudies}
        onSDGGoalsClick={navigateToSDGGoals}
        onNewsroomClick={navigateToNewsroom}
        onResourcesClick={navigateToResources}
      />
      
      {currentPage === "solutions" ? (
        <>
          <SolutionsOverview />
          <Footer />
        </>
      ) : currentPage === "for-users" ? (
        <>
          <ForUsers />
          <Footer />
        </>
      ) : currentPage === "for-buyers" ? (
        <>
          <ForBuyers />
          <Footer />
        </>
      ) : currentPage === "for-partners" ? (
        <>
          <ForPartners />
          <Footer />
        </>
      ) : currentPage === "about" ? (
        <>
          <AboutUs />
          <Footer />
        </>
      ) : currentPage === "contact" ? (
        <>
          <ContactUs />
          <Footer />
        </>
      ) : currentPage === "how-it-works" ? (
        <>
          <HowItWorksPage />
          <Footer />
        </>
      ) : currentPage === "co2-save" ? (
        <>
          <CO2SavePage />
          <Footer />
        </>
      ) : currentPage === "case-studies" ? (
        <>
          <CaseStudiesPage />
          <Footer />
        </>
      ) : currentPage === "sdg-goals" ? (
        <>
          <SDGGoalsPage />
          <Footer />
        </>
      ) : currentPage === "newsroom" ? (
        <>
          <NewsroomPage />
          <Footer />
        </>
      ) : currentPage === "resources" ? (
        <>
          <ResourcesPage />
          <Footer />
        </>
      ) : (
        <>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto">
              <div className="lg:col-span-4">
                <HeroCard />
              </div>
              <div className="lg:col-span-4">
                <TrustedBySection />
              </div>
              <div className="lg:col-span-4">
                <FeatureCards />
              </div>
              <div className="lg:col-span-4">
                <WhyChooseSection />
              </div>
              <div className="lg:col-span-4">
                <BenefitsGrid />
              </div>
              <div className="lg:col-span-4">
                <HowItWorksCard />
              </div>
              <div className="lg:col-span-4">
                <div className="mb-6 sm:mb-8 text-center">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 tracking-tight">Who It's For</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600">Solutions for every stakeholder in the clean energy ecosystem</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <AudienceCards />
                </div>
              </div>
              <div className="lg:col-span-4">
                <RanaOSCard />
              </div>
              <div className="lg:col-span-4">
                <RanaMeterCard />
              </div>
              <div className="lg:col-span-4">
                <RanaPayCard />
              </div>
              <div className="lg:col-span-4">
                <ComparisonCard />
              </div>
              <div className="lg:col-span-4">
                <FAQSection />
              </div>
              <div className="lg:col-span-4">
                <AfricanImpactSection />
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
