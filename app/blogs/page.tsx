import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Image from 'next/image';

// Mock Data for Real Estate Blogs
const blogPosts = [
  {
    id: 1,
    title: "Top 5 Emerging Real Estate Locations in Rajasthan (2025)",
    excerpt: "Discover the hidden gems in Jaipur and Udaipur where property values are expected to skyrocket in the next 5 years.",
    category: "Market Trends",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop",
    slug: "emerging-locations-rajasthan"
  },
  {
    id: 2,
    title: "Smart Home Integration: Increasing Your Property Value",
    excerpt: "How adding AI-driven security and energy systems can increase your resale value by up to 15%.",
    category: "Technology",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2000&auto=format&fit=crop",
    slug: "smart-home-value"
  },
  {
    id: 3,
    title: "First-Time Home Buyer's Guide: Loans & Legalities",
    excerpt: "Navigating the complex world of home loans, interest rates, and property registration in India.",
    category: "Guides",
    date: "Dec 05, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
    slug: "first-time-buyer-guide"
  },
  {
    id: 4,
    title: "Minimalist Interior Design Trends for Modern Apartments",
    excerpt: "Why 'Less is More' is the new luxury standard for high-end apartments in metro cities.",
    category: "Design",
    date: "Nov 28, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    slug: "minimalist-design-trends"
  },
  {
    id: 5,
    title: "Commercial vs. Residential: Where Should You Invest?",
    excerpt: "A deep dive into the ROI differences between commercial shops and residential flats.",
    category: "Investment",
    date: "Nov 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    slug: "commercial-vs-residential"
  },
  {
    id: 6,
    title: "Understanding RERA Rules Before Buying Under-Construction",
    excerpt: "Protect your investment by understanding the latest RERA guidelines for builders and buyers.",
    category: "Legal",
    date: "Nov 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    slug: "rera-rules-explained"
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      
      {/* 1. Hero Section with Gradient */}
      <section className="hero-gradient py-20 px-4 mb-12">
        <div className="container mx-auto max-w-5xl text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 animate-fade-in">
            Insights & News
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-up">
            The Verma Properties Blog
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Expert advice on real estate investment, home construction, and interior design trends.
          </p>

          {/* Search Bar (Visual Only) */}
          <div className="mt-10 relative max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-4 rounded-full border-none shadow-lg focus:ring-2 focus:ring-white/50 bg-white text-gray-900 placeholder-gray-400"
              placeholder="Search articles..."
            />
          </div>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={post?.image} 
                  alt={post?.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer/Link */}
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary group-hover:underline decoration-2 underline-offset-4 flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  
                  {/* Avatar Placeholder (Optional) */}
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    PV
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Pagination / Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-secondary transition-colors shadow-sm">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}