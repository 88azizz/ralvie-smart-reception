import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Newspaper, ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const guides = [
  {
    title: "Getting Started with Ralvie AI",
    description: "A comprehensive guide to setting up your AI receptionist in under 10 minutes.",
    readTime: "5 min read",
    category: "Beginner",
  },
  {
    title: "Customizing Your AI Voice",
    description: "Learn how to personalize your AI receptionist's voice and personality.",
    readTime: "8 min read",
    category: "Intermediate",
  },
  {
    title: "Integration Best Practices",
    description: "Tips for seamlessly integrating Ralvie AI with your existing systems.",
    readTime: "10 min read",
    category: "Advanced",
  },
  {
    title: "Optimizing Call Handling",
    description: "Strategies to improve your AI receptionist's efficiency and customer satisfaction.",
    readTime: "7 min read",
    category: "Intermediate",
  },
];

const videoTutorials = [
  {
    title: "Quick Setup Tutorial",
    description: "Watch how to get your AI receptionist up and running in minutes.",
    duration: "4:32",
    thumbnail: "🎬",
  },
  {
    title: "Calendar Integration Walkthrough",
    description: "Step-by-step guide to connecting your booking system.",
    duration: "6:15",
    thumbnail: "📅",
  },
  {
    title: "Advanced Customization",
    description: "Deep dive into personalizing your AI receptionist experience.",
    duration: "12:45",
    thumbnail: "⚙️",
  },
  {
    title: "Analytics Dashboard Overview",
    description: "Understanding your call metrics and performance insights.",
    duration: "8:20",
    thumbnail: "📊",
  },
];

const blogs = [
  {
    title: "The Future of Customer Service: AI Receptionists",
    description: "Exploring how AI is transforming the way businesses handle customer interactions.",
    date: "Dec 28, 2024",
    author: "Ralvie Team",
  },
  {
    title: "5 Ways AI Can Reduce Your Business Costs",
    description: "Discover the financial benefits of implementing AI-powered solutions.",
    date: "Dec 20, 2024",
    author: "Ralvie Team",
  },
  {
    title: "Customer Experience in the AI Era",
    description: "How to maintain personal touch while leveraging automation.",
    date: "Dec 15, 2024",
    author: "Ralvie Team",
  },
];

const articles = [
  {
    title: "AI Receptionist vs Traditional: A Cost Analysis",
    description: "Comprehensive breakdown of costs and ROI when switching to AI.",
    category: "Analysis",
  },
  {
    title: "Industry Spotlight: Healthcare",
    description: "How medical practices are benefiting from AI receptionists.",
    category: "Case Study",
  },
  {
    title: "Privacy & Security Best Practices",
    description: "Ensuring your customer data remains protected with AI systems.",
    category: "Security",
  },
  {
    title: "Scaling Your Business with AI",
    description: "Strategies for growing your business without increasing overhead.",
    category: "Growth",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Resources</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Learn & <span className="text-gradient">Grow</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Everything you need to get the most out of Ralvie AI. Guides, tutorials, and insights to help you succeed.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Video className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Video Tutorials</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-5xl relative">
                  {video.thumbnail}
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{video.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Blog</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    {blog.date} • {blog.author}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{blog.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">{article.category}</Badge>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{article.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is here to help. Reach out and we'll get you the answers you need.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
