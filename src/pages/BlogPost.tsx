import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPost, BlogPost as BlogPostType } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | undefined>();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      setPost(getBlogPost(slug));
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
            <Button asChild>
              <Link to="/resources">Back to Resources</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {post.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="prose prose-lg prose-invert max-w-none animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {post.content.split("\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-foreground">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold text-foreground my-4">
                    {trimmed.replace(/\*\*/g, "")}
                  </p>
                );
              }
              
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={index} className="text-muted-foreground ml-6 my-2">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              }
              
              // Handle inline bold
              if (trimmed.includes("**")) {
                const parts = trimmed.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed my-4">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                    )}
                  </p>
                );
              }
              
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8">
            See how Ralvie AI can help you deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://app.frontdesk.ralvie.ai/client-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/resources">More Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
