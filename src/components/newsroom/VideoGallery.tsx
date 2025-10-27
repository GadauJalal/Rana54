import { Play, Download, ExternalLink, Video as VideoIcon } from "lucide-react";

const videos = [
  {
    title: "Product Demo: RanaMeter 2.0",
    duration: "2:45",
    description: "Comprehensive walkthrough of our latest hardware features",
    color: "bg-[#527E5F]",
  },
  {
    title: "Installation Guide",
    duration: "1:30",
    description: "Step-by-step RanaMeter device installation process",
    color: "bg-[#F57B44]",
  },
  {
    title: "User Testimonial: Kenya",
    duration: "3:20",
    description: "Real stories from households earning through clean energy",
    color: "bg-[#F6B842]",
  },
  {
    title: "Platform Overview",
    duration: "4:15",
    description: "How Rana54 verifies and monetizes clean energy",
    color: "bg-[#527E5F]",
  },
  {
    title: "Community Impact",
    duration: "2:50",
    description: "Our social and environmental impact across Africa",
    color: "bg-[#F6B842]",
  },
  {
    title: "B-Roll Package",
    duration: "5:00",
    description: "Curated footage for media use",
    color: "bg-[#F57B44]",
  },
];

export function VideoGallery() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
          Video Gallery
        </h2>
        <p className="text-lg text-gray-600">
          Demo videos, testimonials, and B-roll footage
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Video thumbnail with play button */}
            <div className={`relative aspect-video ${video.color} flex items-center justify-center cursor-pointer group/play`}>
              <VideoIcon className="w-16 h-16 text-white/30" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover/play:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl scale-100 group-hover/play:scale-110 transition-all duration-500">
                  <Play className="w-8 h-8 text-[#527E5F] ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm">
                {video.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl text-gray-900 mb-2 tracking-tight leading-tight group-hover:text-[#527E5F] transition-colors duration-500">
                {video.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {video.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-[#527E5F] text-white rounded-xl hover:bg-[#3d5d48] transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  <span className="text-sm tracking-wide">Play</span>
                </button>
                <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm tracking-wide">Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Request custom footage */}
      <div className="mt-12 bg-gray-50 rounded-3xl p-8 border border-gray-200 text-center">
        <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">
          Need Custom Footage?
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We can provide specific video content tailored to your coverage needs. Contact our media team for custom requests.
        </p>
        <button className="px-8 py-4 bg-[#527E5F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          <span className="tracking-wide">Request Custom Video</span>
        </button>
      </div>
    </section>
  );
}
