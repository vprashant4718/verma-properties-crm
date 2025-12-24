import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import blogInterior from "@/assets/blog/blog-interior.jpg";
import blogInvestment from "@/assets/blog/blog-investment.jpg";
import blogExterior from "@/assets/blog/blog-exterior.jpg";
import Image from "next/image";

const FeaturedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Modern Interior Design Trends for 2024",
      description: "Explore the latest interior design trends that are transforming homes and commercial spaces. From sustainable materials to smart home integration, discover what's shaping the future of interior design.",
      image: blogInterior,
      date: "December 15, 2024",
      category: "Interior Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Smart Real Estate Investment Strategies",
      description: "Learn proven strategies for building a profitable real estate portfolio. We cover market analysis, financing options, and risk management techniques that successful investors use.",
      image: blogInvestment,
      date: "December 12, 2024",
      category: "Investment",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Sustainable Building Practices in Modern Construction",
      description: "Discover how eco-friendly construction methods are revolutionizing the building industry. From green materials to energy-efficient designs, learn about sustainable building practices.",
      image: blogExterior,
      date: "December 10, 2024",
      category: "Construction",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights from our experts in real estate, 
            construction, and property development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card 
              key={blog.id} 
              className="card-gradient shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-200">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.description}
                </CardDescription>
                
                <Button variant="ghost" className="group/button p-0 h-auto text-primary hover:text-primary-hover">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Blog Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;