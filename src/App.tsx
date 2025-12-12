import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { HeroFade, ScaleFade, ZoomReveal, SlideReveal } from "./components/animations/FadeIn";
import { FadeIn } from "./components/animations/FadeIn";
import { HeroCard } from "./components/bento/HeroCard";
import { TrustedBySection } from "./components/bento/TrustedBySection";
import { FeatureCards } from "./components/bento/FeatureCards";
import { WhyChooseSection } from "./components/bento/WhyChooseSection";
import { BenefitsGrid } from "./components/bento/BenefitsGrid";
import { HowItWorksCard } from "./components/bento/HowItWorksCard";
import { AudienceCards } from "./components/bento/AudienceCards";
import { RanaOSCard } from "./components/bento/RanaOSCard";
import { RanaMeterCard } from "./components/bento/RanaMeterCard";
import { RanaPayCard } from "./components/bento/RanaPayCard";
import { RanaIrisCard } from "./components/bento/RanaIrisCard";
import { ComparisonCard } from "./components/bento/ComparisonCard";
import { FAQSection } from "./components/bento/FAQSection";
import { AfricanImpactSection } from "./components/bento/AfricanImpactSection";
import { SolutionsOverview } from "./components/SolutionsOverview";
import { RanaIrisSolarCalculator } from "./components/RanaIrisSolarCalculator";
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

// Home Page Component
function HomePage() {
  return (
    <>
      <SEO
        title="Rana54: Energy Management Software & Smart Power Monitoring for Africa"
        description="Optimize energy usage with Rana54's smart IoT meter and AI analytics. Real-time monitoring, solar intelligence, and cost-saving insights built for African homes and businesses."
      />
      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-auto">
          <div className="lg:col-span-4">
            <HeroFade delay={0.1}>
              <HeroCard />
            </HeroFade>
          </div>
          <div className="lg:col-span-4">
            <SlideReveal direction="right" delay={0.3}>
              <TrustedBySection />
            </SlideReveal>
          </div>
          <div className="lg:col-span-4">
            <ScaleFade delay={0.1} intensity="strong" blur={true}>
              <FeatureCards />
            </ScaleFade>
          </div>
          <div className="lg:col-span-4">
            <FadeIn variant="heading" delay={0.1} blur={true} scale={true}>
              <WhyChooseSection />
            </FadeIn>
          </div>
          <div className="lg:col-span-4">
            <ZoomReveal delay={0.15} intensity="normal">
              <BenefitsGrid />
            </ZoomReveal>
          </div>
          <div className="lg:col-span-4">
            <ScaleFade delay={0.1} intensity="normal" blur={true}>
              <HowItWorksCard />
            </ScaleFade>
          </div>
          <div className="lg:col-span-4">
            <FadeIn variant="heading" blur={true} scale={true}>
              <div className="mb-4 sm:mb-6 md:mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 tracking-tight">Who It's For</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">Solutions for every stakeholder in the clean energy ecosystem</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <AudienceCards />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <ScaleFade delay={0.12} intensity="strong" blur={true}>
              <RanaMeterCard />
            </ScaleFade>
          </div>
          <div className="lg:col-span-4">
            <SlideReveal direction="left" delay={0.1}>
              <RanaOSCard />
            </SlideReveal>
          </div>
          <div className="lg:col-span-4">
            <SlideReveal direction="right" delay={0.1}>
              <RanaPayCard />
            </SlideReveal>
          </div>
          <div className="lg:col-span-4">
            <ZoomReveal delay={0.15} intensity="dramatic">
              <RanaIrisCard onLearnMoreClick={() => window.location.href = '/solutions/iris/'} />
            </ZoomReveal>
          </div>
          <div className="lg:col-span-4">
            <ScaleFade delay={0.1} intensity="normal" blur={true}>
              <ComparisonCard />
            </ScaleFade>
          </div>
          <div className="lg:col-span-4">
            <FadeIn variant="body" blur={true} scale={true}>
              <FAQSection />
            </FadeIn>
          </div>
          <div className="lg:col-span-4">
            <HeroFade delay={0.2}>
              <AfricanImpactSection />
            </HeroFade>
          </div>
        </div>
      </main>
    </>
  );
}

// Solutions Overview Page
function SolutionsPage() {
  return (
    <>
      <SEO
        title="Rana54 Solutions | Smart Energy Management & IoT for Africa"
        description="Discover Rana54's comprehensive energy solutions: smart meters, solar analytics, and AI-powered insights for homes and businesses across Africa."
      />
      <SolutionsOverview onSolarCalculatorClick={() => window.location.href = '/solutions/iris/'} />
    </>
  );
}

// For Homeowners Page
function HomeownersPage() {
  return (
    <>
      <SEO
        title="Smart Home Energy Monitoring | Rana54 for Homeowners"
        description="Track your power usage, monitor solar performance, and cut energy costs with Rana54's smart meter and AI dashboard."
        keywords="smart home, energy monitoring, homeowners, power usage tracking"
      />
      <ForUsers />
    </>
  );
}

// For Businesses Page
function BusinessesPage() {
  return (
    <>
      <SEO
        title="Energy Management for Businesses | Rana54 for Businesses"
        description="Reduce operational costs with enterprise-grade analytics, smart metering, and partner tools."
        keywords="business energy management, enterprise analytics, operational costs"
      />
      <ForBuyers />
    </>
  );
}

// For Partners Page
function PartnersPage() {
  return (
    <>
      <SEO
        title="Partner With Rana54 | Solar & Energy Data Partnerships"
        description="Grow your solar or energy business with AI-powered analytics, smart metering, and partner tools."
        keywords="energy partnerships, solar partnerships, business growth"
      />
      <ForPartners />
    </>
  );
}

// Rana IRIS Page
function RanaIrisPage() {
  return (
    <>
      <SEO
        title="Rana IHS | AI-Powered Solar Intelligence Platform"
        description="Rana IHS (Intelligent Home System) combines IoT meter + AI + solar intelligence for optimized solar energy management and real-time performance monitoring."
      />
      <RanaIrisSolarCalculator />
    </>
  );
}

// About Us Page
function AboutPage() {
  return (
    <>
      <SEO
        title="About Rana54 | Empowering Africa with Smart Energy Solutions"
        description="Learn about Rana54's mission to democratize access to clean, affordable, and reliable power across Africa."
      />
      <AboutUs />
    </>
  );
}

// How It Works Page
function HowItWorksPageWrapper() {
  return (
    <>
      <SEO
        title="How Rana54 Works | IoT Meter + AI + Solar Intelligence"
        description="See how our smart meter and IHS analytics work together to monitor consumption, detect inefficiencies, and reduce energy use."
      />
      <HowItWorksPage />
    </>
  );
}

// Contact Page
function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Rana54 | Get Started With Smart Energy"
        description="Reach out to our team for demos, partnerships, and general inquiries."
      />
      <ContactUs />
    </>
  );
}

// CO2 Savings Page
function CO2SavingsPage() {
  return (
    <>
      <SEO
        title="CO₂ Savings With Smart Energy | Rana54 Impact"
        description="See how Rana54 reduces carbon emissions by improving solar efficiency and smart energy optimization."
        keywords="carbon emissions, CO2 savings, environmental impact, sustainability"
      />
      <CO2SavePage />
    </>
  );
}

// Case Studies Page
function CaseStudiesPageWrapper() {
  return (
    <>
      <SEO
        title="Case Studies | Real Results With Rana54 Energy Solutions"
        description="Explore real-world results from businesses, families, and partners using our energy platform."
      />
      <CaseStudiesPage />
    </>
  );
}

// SDG Alignment Page
function SDGPage() {
  return (
    <>
      <SEO
        title="Rana54 Product Impact | Renewable Energy & Sustainability"
        description="Discover how Rana54 supports SDG goal 7: affordable and clean energy for all."
        keywords="sustainable development goals, SDG, renewable energy, clean energy access"
      />
      <SDGGoalsPage />
    </>
  );
}

// Newsroom Page
function NewsroomPageWrapper() {
  return (
    <>
      <SEO
        title="Rana54 Newsroom | Announcements & Press"
        description="Read updates, press releases, and media highlights from Rana54."
      />
      <NewsroomPage />
    </>
  );
}

// Insights Page
function InsightsPage() {
  return (
    <>
      <SEO
        title="Insights (Blog) | Expert Guides on Power Monitoring & Solar Tech in Africa"
        description="Expert guides on solar power monitoring, smart metering, and energy tech in Africa."
        keywords="energy blog, solar guides, power monitoring tips, Africa energy insights"
      />
      <ResourcesPage />
    </>
  );
}

// Request Demo Page (same as Contact for now)
function RequestDemoPage() {
  return (
    <>
      <SEO
        title="Request a Demo | Experience Rana54 Energy Intelligence"
        description="Book a live demo of our IoT meter, dashboard, and AI analytics. See how energy tech in Africa."
      />
      <ContactUs />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Solutions */}
        <Route path="/solutions/" element={<SolutionsPage />} />
        <Route path="/solutions/homeowners/" element={<HomeownersPage />} />
        <Route path="/solutions/businesses/" element={<BusinessesPage />} />
        <Route path="/solutions/partners/" element={<PartnersPage />} />
        <Route path="/solutions/iris/" element={<RanaIrisPage />} />

        {/* Company */}
        <Route path="/company/about-us/" element={<AboutPage />} />
        <Route path="/company/how-it-works/" element={<HowItWorksPageWrapper />} />
        <Route path="/company/contact/" element={<ContactPage />} />

        {/* Impact */}
        <Route path="/impact/co2-savings/" element={<CO2SavingsPage />} />
        <Route path="/impact/case-studies/" element={<CaseStudiesPageWrapper />} />
        <Route path="/impact/sdg/" element={<SDGPage />} />

        {/* Other */}
        <Route path="/newsroom/" element={<NewsroomPageWrapper />} />
        <Route path="/insights/" element={<InsightsPage />} />
        <Route path="/request-demo/" element={<RequestDemoPage />} />
      </Routes>

      <Footer />
    </div>
  );
}