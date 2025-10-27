import { WhitePaperHero } from "./white-paper/WhitePaperHero";
import { Overview } from "./white-paper/Overview";
import { KeyHighlights } from "./white-paper/KeyHighlights";
import { DownloadResources } from "./white-paper/DownloadResources";
import { FutureUpdates } from "./white-paper/FutureUpdates";
import { MediaSupport } from "./white-paper/MediaSupport";
import { AfricanLocationSection } from "./white-paper/AfricanLocationSection";

export function WhitePaperPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          <WhitePaperHero />
          <Overview />
          <KeyHighlights />
          <DownloadResources />
          <FutureUpdates />
          <MediaSupport />
          <AfricanLocationSection />
        </div>
      </main>
    </div>
  );
}
