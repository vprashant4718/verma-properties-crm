import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
import heroImage2 from "@/assets/city hero.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
               <Image src={heroImage2} alt="Modern cityscape with luxury real estate buildings at golden hour"
          className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 text-center ">
        <div className="animate-fade-in mt-40 md:mt-10">
          <h1 className="text-4xl uppercase  md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[2px 5px 4px 2px]">
              Verma Properties & Builders
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expert insights on real estate investment, property development, 
            and building your future in the dynamic world of construction and properties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#blogs" scroll={true}>
              <Button
                size="lg"
                className="text-lg px-8 py-4 h-auto hero-gradient hover:cursor-pointer hover:text-white"
              >
                Read Our Blogs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="#contact" scroll={true}>
              <Button
                size="lg"
                className="text-lg bg-transparent px-8 py-4 h-auto border border-white cursor-pointer text-white hover:bg-white hover:text-black  hover:border-white/50"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
    <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-20 h-20 text-white/70" />
    </div>
      </div>
    </section>
  );
};

export default Hero;
