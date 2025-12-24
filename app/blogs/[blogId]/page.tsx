import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import Image from 'next/image';

// --- MOCK DATA (In a real app, fetch this from a DB) ---
const allPosts = [
  {
    id: 1,
    slug: "emerging-locations-rajasthan",
    title: "Top 5 Emerging Real Estate Locations in Rajasthan (2025)",
    // HTML content to simulate rich text from a CMS
    content: `
      <p class="lead text-xl text-muted-foreground mb-8">Rajasthan's real estate market is witnessing a paradigm shift. Beyond the heritage properties of Jaipur and Udaipur, new corridors of development are opening up, driven by infrastructure projects and industrial growth.</p>
      
      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">1. The Jaipur-Ajmer Expressway</h2>
      <p class="mb-4 text-muted-foreground leading-7">With the completion of the new 6-lane highway, the connectivity between Jaipur and Ajmer has improved drastically. Areas like Bagru and Mahapura are seeing a 20% YOY appreciation in land rates.</p>
      
      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">2. Bhiwadi: The Industrial Hub</h2>
      <p class="mb-4 text-muted-foreground leading-7">Often called the gateway to Rajasthan, Bhiwadi offers affordable housing options for the workforce employed in the RIICO industrial areas. Rental yields here are among the highest in the state.</p>

      <div class="my-8 p-6 bg-secondary/50 border-l-4 border-primary rounded-r-lg">
        <p class="italic text-foreground font-medium">"Investing in tier-2 city outskirts is the smartest move for long-term capital appreciation in 2025."</p>
        <p class="mt-2 text-sm text-primary font-bold">— Prashant Verma, Real Estate Analyst</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
      <p class="mb-4 text-muted-foreground leading-7">Whether you are looking for residential plots or commercial spaces, these emerging corridors offer a lower entry point compared to the saturated city centers. Early movers will likely see the best ROI.</p>
    `,
    category: "Market Trends",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    author: "Prashant Verma",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop",
    tags: ["Investment", "Jaipur", "Real Estate"]
  },
  // You can add more mock posts here...
];

export default async function page({ params }: { params:Promise<{ slug: string }> }) {
  // 1. Find the post matching the slug
  const Slug = await params;
  const post = allPosts.find((p) => p.slug ===  Slug.slug);

  // 2. Handle 404
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      
      {/* --- Breadcrumb / Back Nav --- */}
      <div className="bg-secondary/30 border-b border-border sticky top-0 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>

      {/* --- Article Header --- */}
      <header className="container mx-auto px-4 max-w-4xl pt-10 pb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight animate-slide-up">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground border-b border-border pb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold border border-border">
              PV
            </div>
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
      </header>

      {/* --- Featured Image --- */}
      <div className="container mx-auto px-4 max-w-5xl mb-12 animate-scale-in">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-secondary">
          <Image 
            src={post.image} 
            alt={post.title}
            width={800} 
            height={400} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Article Content */}
        <main className="lg:col-span-8">
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            {/* Using dangerouslySetInnerHTML for mock HTML content */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4" /> Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md hover:bg-secondary/80 cursor-pointer transition-colors border border-border">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </main>

        {/* Right Column: Sidebar (Sticky) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Author Box */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">About the Author</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                PV
              </div>
              <div>
                <p className="font-semibold text-foreground">Prashant Verma</p>
                <p className="text-sm text-muted-foreground mt-1 leading-snug">
                  Full-stack developer and real estate analyst helping you make smarter property decisions in India.
                </p>
                <div className="flex gap-2 mt-4">
                  <button className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Share Widget */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Share2 className="w-4 h-4" /> Share Article
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2]/10 text-[#1877F2] rounded-lg hover:bg-[#1877F2]/20 font-medium text-sm transition-colors">
                <Facebook className="w-4 h-4" /> Facebook
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/20 font-medium text-sm transition-colors">
                <Twitter className="w-4 h-4" /> Twitter
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 col-span-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 font-medium text-sm transition-colors border border-border">
                Copy Link
              </button>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="hero-gradient rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Join 10,000+ Readers</h3>
              <p className="text-blue-50 text-sm mb-4">Get the latest property trends & tech insights delivered to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm backdrop-blur-sm"
                />
                <button className="w-full py-2.5 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-sm text-sm">
                  Subscribe for Free
                </button>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
          
        </aside>
      </div>

    </div>
  );
}