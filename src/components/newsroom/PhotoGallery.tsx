import { Image as ImageIcon, Download, Filter, Camera } from "lucide-react";
import { useState } from "react";

const photos = [
  { id: 1, category: "Product", title: "RanaMeter Device", color: "bg-[#527E5F]" },
  { id: 2, category: "Installations", title: "Installation Process", color: "bg-[#F57B44]" },
  { id: 3, category: "Community", title: "Community Gathering", color: "bg-[#F6B842]" },
  { id: 4, category: "Product", title: "Dashboard UI", color: "bg-[#527E5F]" },
  { id: 5, category: "Community", title: "User Testimonial", color: "bg-[#F6B842]" },
  { id: 6, category: "Installations", title: "Solar Panel Setup", color: "bg-[#F57B44]" },
  { id: 7, category: "Product", title: "Analytics View", color: "bg-[#527E5F]" },
  { id: 8, category: "Community", title: "Partnership Event", color: "bg-[#F6B842]" },
];

const categories = ["All", "Product", "Installations", "Community"];

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl mb-2 tracking-tight text-gray-900">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600">
            High-resolution images for media use
          </p>
        </div>

        {/* Album Filters */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#527E5F] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid with lightbox capability */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.2)] transition-all duration-500"
          >
            {/* Image placeholder */}
            <div className={`absolute inset-0 ${photo.color} flex items-center justify-center`}>
              <Camera className="w-16 h-16 text-white/30" />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-lg mb-3">{photo.title}</h4>
                <div className="flex items-center gap-2">
                  <button className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="px-4 py-2 bg-[#527E5F] text-white rounded-lg text-sm hover:bg-[#3d5d48] transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-gray-900">
              {photo.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
