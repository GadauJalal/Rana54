import { Search, Filter, ArrowUpDown } from "lucide-react";

interface GlobalControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  sortBy: "newest" | "most-read";
  setSortBy: (sort: "newest" | "most-read") => void;
}

const tags = ["Press Release", "Coverage", "Product", "Event", "Award", "Opinion"];
const years = ["2025", "2024", "2023", "2022"];

export function GlobalControls({
  searchQuery,
  setSearchQuery,
  selectedTags,
  setSelectedTags,
  selectedYear,
  setSelectedYear,
  sortBy,
  setSortBy,
}: GlobalControlsProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <section className="sticky top-24 z-40 bg-white/95 backdrop-blur-sm border-y border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search newsroom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#527E5F] focus:ring-2 focus:ring-[#527E5F]/20 outline-none transition-all text-lg"
            />
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Tag Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filters:</span>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? "bg-[#527E5F] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          {/* Year Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white focus:border-[#527E5F] focus:ring-2 focus:ring-[#527E5F]/20 outline-none text-sm"
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Sort:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy("newest")}
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                  sortBy === "newest"
                    ? "bg-[#527E5F] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortBy("most-read")}
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                  sortBy === "most-read"
                    ? "bg-[#527E5F] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Most Read
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
