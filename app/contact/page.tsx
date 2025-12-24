import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Contact Verma Properties
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto opacity-90">
            Ready to buy your dream home or have questions about a project? 
            Reach out to us today. We are here to help you 7 days a week.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* --- 2. CONTACT INFO CARDS --- */}
          
          {/* Phone */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground text-sm mb-4">Mon-Sun from 9am to 8pm</p>
            <a href="tel:+919828811112" className="text-xl font-bold text-primary hover:underline">
              +91 98288 11112
            </a>
          </div>

          {/* Email */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm mb-4">We usually reply within 24 hours</p>
            <a href="mailto:vermabuilders07@gmail.com" className="text-lg font-bold text-primary hover:underline break-all">
              vermabuilders07@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Office</h3>
            <p className="text-muted-foreground text-sm">
              Near Rawal Hospital, Samurai Palace,<br />
              Bhankrota, Ajmer Road,<br />
              Jaipur, Rajasthan 302026
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. MAIN CONTENT GRID (Form + Map) --- */}
      <div className="container mx-auto px-4 mt-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98..." className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Buying Property</option>
                  <option>Selling Property</option>
                  <option>Construction Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Right: Map & Hours */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            
            {/* Embedded Google Map */}
           {/* Embedded Google Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm h-[400px] relative">
              <iframe 
                src="https://maps.google.com/maps?q=baba%20properties%2C%20Bhankrota%2C%20Ajmer%20Road%2C%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Verma Properties Location"
              ></iframe>
            </div>
            {/* Working Hours Box */}
            <div className="bg-secondary/50 border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Working Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="text-primary font-bold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="pt-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 mt-1 shrink-0" />
                    Note: We are available on WhatsApp during off-hours for urgent queries.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}