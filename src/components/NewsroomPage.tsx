import { useState } from "react";
import { NewsroomHero } from "./newsroom/NewsroomHero";
import { GlobalControls } from "./newsroom/GlobalControls";
import { LatestPressReleases } from "./newsroom/LatestPressReleases";
import { InTheMedia } from "./newsroom/InTheMedia";
import { Announcements } from "./newsroom/Announcements";
import { EventsSpeaking } from "./newsroom/EventsSpeaking";
import { AwardsRecognitions } from "./newsroom/AwardsRecognitions";
import { MediaKitSection } from "./newsroom/MediaKitSection";
import { PhotoGallery } from "./newsroom/PhotoGallery";
import { VideoGallery } from "./newsroom/VideoGallery";
import { UtilityFooter } from "./newsroom/UtilityFooter";
import { BlogPostDetail } from "./newsroom/BlogPostDetail";

export function NewsroomPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "most-read">("newest");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {/* Hero with Featured Story */}
          <NewsroomHero onReadClick={(post) => setSelectedPost(post)} />

          {/* Global Controls */}
          <GlobalControls
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Latest Press Releases */}
          <LatestPressReleases onReadClick={(post) => setSelectedPost(post)} />

          {/* In the Media (Coverage) */}
          <InTheMedia />

          {/* Announcements & Product Updates */}
          <Announcements onReadClick={(post) => setSelectedPost(post)} />

          {/* Events & Speaking */}
          <EventsSpeaking />

          {/* Awards & Recognitions */}
          <AwardsRecognitions />

          {/* Media Kit */}
          <MediaKitSection />

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Video Gallery */}
          <VideoGallery />

          {/* Utility Footer */}
          <UtilityFooter />
        </div>
      </main>
    </div>
  );
}