import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

interface BlogPostDetailProps {
  post: {
    icon: any;
    tag: string;
    headline: string;
    dek: string;
    date: string;
    readTime: string;
    color: string;
    author?: string;
    authorRole?: string;
  };
  onBack: () => void;
}

export function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  const Icon = post.icon;
  
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#527E5F] hover:text-[#527E5F]/80 mb-8 group transition-all"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Newsroom</span>
        </button>

        {/* Header */}
        <article className="space-y-8">
          {/* Tag and metadata */}
          <div className="flex flex-wrap items-center gap-4">
            <span className={`flex items-center gap-1.5 px-4 py-2 ${post.color} text-white rounded-full`}>
              <Tag className="w-4 h-4" />
              {post.tag}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            {post.headline}
          </h1>

          {/* Dek */}
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            {post.dek}
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between border-y border-gray-200 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#527E5F] to-[#3d5d48] flex items-center justify-center">
                <span className="text-white text-lg">R54</span>
              </div>
              <div>
                <p className="text-gray-900">{post.author || "Rana54 Communications"}</p>
                <p className="text-sm text-gray-600">{post.authorRole || "Official Release"}</p>
              </div>
            </div>
            
            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#527E5F] hover:text-white flex items-center justify-center transition-all group">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#527E5F] hover:text-white flex items-center justify-center transition-all group">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#527E5F] hover:text-white flex items-center justify-center transition-all group">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#527E5F] hover:text-white flex items-center justify-center transition-all group">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Featured image */}
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${post.color} aspect-[16/9] flex items-center justify-center`}>
            <Icon className="w-32 h-32 text-white/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none space-y-8 pt-8">
            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed text-lg">
              We're excited to share this major milestone in our journey to transform clean energy 
              tracking and verification across Africa. This announcement represents months of hard 
              work from our team and reflects our commitment to building solutions that create real, 
              measurable impact.
            </p>

            {/* Key highlights section */}
            <div className="bg-[#527E5F]/5 border-l-4 border-[#527E5F] rounded-r-2xl p-6 my-8">
              <h3 className="text-2xl text-gray-900 mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F57B44] mt-2.5 shrink-0" />
                  <span>Enhanced accuracy and real-time data processing capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F6B842] mt-2.5 shrink-0" />
                  <span>Seamless integration with existing solar infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#527E5F] mt-2.5 shrink-0" />
                  <span>Blockchain-verified tracking for maximum transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F57B44] mt-2.5 shrink-0" />
                  <span>Built specifically for African market conditions and requirements</span>
                </li>
              </ul>
            </div>

            {/* Main content */}
            <h2 className="text-3xl text-gray-900 tracking-tight mt-12 mb-4">
              What This Means for Our Users
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This development is a game-changer for homeowners, businesses, and partners across our 
              ecosystem. Our enhanced platform now provides unprecedented visibility into clean energy 
              generation and impact, making it easier than ever to track, verify, and monetize your 
              contribution to a sustainable future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With these improvements, users can expect faster data synchronization, more detailed 
              analytics, and enhanced reporting capabilities that meet international standards for 
              carbon credit verification and impact measurement.
            </p>

            <h2 className="text-3xl text-gray-900 tracking-tight mt-12 mb-4">
              Technical Innovation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our engineering team has implemented cutting-edge solutions that leverage both hardware 
              and software innovations. The new architecture ensures data integrity from the point of 
              generation through to verification and credit issuance, creating an end-to-end system 
              that's both robust and user-friendly.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-2xl p-6 text-center text-white">
                <div className="text-4xl mb-2">99.9%</div>
                <div className="text-white/80">System Uptime</div>
              </div>
              <div className="bg-gradient-to-br from-[#F57B44] to-[#e06a33] rounded-2xl p-6 text-center text-white">
                <div className="text-4xl mb-2">50K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="bg-gradient-to-br from-[#F6B842] to-[#e5a632] rounded-2xl p-6 text-center text-white">
                <div className="text-4xl mb-2">12</div>
                <div className="text-white/80">Countries</div>
              </div>
            </div>

            <h2 className="text-3xl text-gray-900 tracking-tight mt-12 mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This is just the beginning. We have ambitious plans for the coming months, including 
              expanded geographic coverage, new partnership announcements, and additional features 
              that will further enhance the value our platform delivers to the clean energy ecosystem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're grateful for the support of our users, partners, and the broader clean energy 
              community. Together, we're building a more sustainable and transparent energy future 
              for Africa and beyond.
            </p>

            {/* Quote section */}
            <div className="bg-white border-l-4 border-[#F6B842] rounded-r-2xl p-8 my-12 shadow-sm">
              <p className="text-2xl text-gray-700 italic mb-4">
                "This milestone represents our commitment to creating solutions that don't just track 
                clean energy—they make it valuable, verifiable, and accessible to everyone."
              </p>
              <p className="text-gray-600">— Rana54 Leadership Team</p>
            </div>

            <h2 className="text-3xl text-gray-900 tracking-tight mt-12 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a homeowner looking to maximize the value of your solar installation, 
              a business seeking to track and monetize your clean energy impact, or a partner 
              interested in integrating with our platform, we'd love to hear from you.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#527E5F] to-[#3d5d48] rounded-3xl p-12 text-center text-white mt-16">
            <h3 className="text-3xl mb-4">Ready to Learn More?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how Rana54 can help you track, verify, and monetize your clean energy impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-[#527E5F] hover:bg-white/90 rounded-xl px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-xl px-8 py-6 text-lg border border-white/20">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Related articles */}
          <div className="border-t border-gray-200 pt-12 mt-16">
            <h3 className="text-2xl text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#F57B44] text-white rounded-full text-sm">Product</span>
                </div>
                <h4 className="text-xl text-gray-900 mb-2">Introducing RanaOS 3.0</h4>
                <p className="text-gray-600 text-sm">Enhanced analytics and real-time monitoring capabilities</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#527E5F] text-white rounded-full text-sm">Press Release</span>
                </div>
                <h4 className="text-xl text-gray-900 mb-2">Partnership Announcement</h4>
                <p className="text-gray-600 text-sm">Expanding clean energy access across East Africa</p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
