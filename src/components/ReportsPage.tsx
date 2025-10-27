import { ReportsHero } from "./reports/ReportsHero";
import { ReportCategories } from "./reports/ReportCategories";
import { FeaturedReport } from "./reports/FeaturedReport";
import { ReportsArchive } from "./reports/ReportsArchive";
import { KeyMetricsSnapshot } from "./reports/KeyMetricsSnapshot";
import { TransparencyStatement } from "./reports/TransparencyStatement";
import { AfricanLocationSection } from "./reports/AfricanLocationSection";

export function ReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          <ReportsHero />
          <ReportCategories />
          <FeaturedReport />
          <KeyMetricsSnapshot />
          <ReportsArchive />
          <TransparencyStatement />
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
