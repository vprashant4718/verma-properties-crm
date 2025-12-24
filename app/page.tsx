import Footer from "@/app/_components/Footer"
import Hero from "@/app/_components/Hero"
import BlogsSection from "./_components/BlogsSection";
import { PropertiesSection } from "./_components/Properties";

export default function Home() {
  return (
   <div>
    <Hero />
    <PropertiesSection />
    <BlogsSection />
    <Footer />
   </div>
  );
}
