import Image from 'next/image';
import { CheckCircle2, Building2, Users, Trophy, ArrowRight, Hammer, Key, TrendingUp, Home } from 'lucide-react';
import owner from '@/assets/owner.png'
export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Verma Properties Building"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay using your brand variables */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold mb-6 border border-white/30">
            Est. Since 2010
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Building Trust. <br className="hidden md:block" />
            <span className="text-blue-200">Constructing Dreams.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            From finding your perfect plot to constructing your dream home, 
            Verma Properties is your partner in creating a legacy.
          </p>
        </div>
      </section>

      {/* --- 2. THE FOUNDER SECTION --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Founder Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={owner} 
                alt="Chandra Prakash Verma"
                fill
                className="object-cover"
              />
              {/* Note: Replace src with actual photo of Mr. Verma */}
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary -z-10 rounded-xl pattern-dots" />
          </div>

          {/* Founder Text */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">The Visionary</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Chandra Prakash Verma</h2>
            <blockquote className="text-xl text-muted-foreground italic border-l-4 border-primary pl-6 mb-8">
              &quot;At Verma Properties, we don't just build structures — we build trust, dreams, and futures.&quot;
            </blockquote>
            <p className="text-muted-foreground mb-6 leading-7">
              Founded by Chandra Prakash Verma, a visionary leader with a relentless passion for excellence, 
              we have earned a reputation for delivering superior quality in residential, commercial, 
              and infrastructure projects.
            </p>
            <p className="text-muted-foreground mb-8 leading-7">
              His philosophy is simple: Treat every project as if we are building it for our own family. 
              This commitment to transparency and quality has made Verma Properties a household name in the region.
            </p>
            
            <div className="flex items-center gap-4">
               <div className="h-px bg-border flex-1"></div>
               <span className="font-script text-2xl text-primary">C.P. Verma</span>
               <div className="h-px bg-border flex-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. STATS STRIP --- */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="p-4">
              <Trophy className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="p-4">
              <Building2 className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-blue-100 text-sm">Projects Completed</div>
            </div>
            <div className="p-4">
              <Users className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-blue-100 text-sm">Happy Families</div>
            </div>
            <div className="p-4">
              <TrendingUp className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Transparent Deals</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHAT WE DO (Services) --- */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Property Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our primary expertise lies in property sale, purchase, and resale services, 
              along with delivering high-quality construction builder projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Sales</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Helping you find the perfect plot, flat, or villa that suits your lifestyle and budget requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Expertise
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Construction</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                End-to-end builder services using premium materials. We handle everything from foundation to finishing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Key className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resale & Investment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strategic advice for investors looking for high ROI and seamless resale transaction management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Abstract BG Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            <div className="md:w-1/2">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-2">Our Promise</h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Verma Properties?</h2>
              <p className="text-gray-400 text-lg">
                Whether you're looking to buy, sell, invest, or build, Verma Properties provides complete, transparent, and reliable solutions.
              </p>
              
              <button className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                Contact Us Today <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="md:w-1/2 grid gap-6">
              {[
                "100% Transparent Documentation",
                "Timely Project Delivery",
                "Premium Construction Quality",
                "After-Sales Support",
                "Expert Legal Assistance",
                "Prime Locations Only"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}