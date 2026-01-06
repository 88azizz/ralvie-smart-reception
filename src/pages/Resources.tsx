import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Video, FileText, Newspaper, ArrowRight, Clock, Calendar, Search, X, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

interface Guide {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  featured?: boolean;
  relatedSlugs: string[];
}

interface VideoTutorial {
  slug: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  featured?: boolean;
  relatedSlugs: string[];
}

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
  relatedSlugs: string[];
}

const guides: Guide[] = [
  {
    slug: "getting-started-ralvie-ai",
    title: "Getting Started with Ralvie AI",
    description: "A comprehensive guide to setting up your AI receptionist in under 10 minutes.",
    readTime: "5 min read",
    category: "Beginner",
    featured: true,
    relatedSlugs: ["customizing-ai-voice", "integration-best-practices"],
  },
  {
    slug: "customizing-ai-voice",
    title: "Customizing Your AI Voice",
    description: "Learn how to personalize your AI receptionist's voice and personality.",
    readTime: "8 min read",
    category: "Intermediate",
    featured: false,
    relatedSlugs: ["getting-started-ralvie-ai", "optimizing-call-handling"],
  },
  {
    slug: "integration-best-practices",
    title: "Integration Best Practices",
    description: "Tips for seamlessly integrating Ralvie AI with your existing systems.",
    readTime: "10 min read",
    category: "Advanced",
    featured: true,
    relatedSlugs: ["getting-started-ralvie-ai", "optimizing-call-handling"],
  },
  {
    slug: "optimizing-call-handling",
    title: "Optimizing Call Handling",
    description: "Strategies to improve your AI receptionist's efficiency and customer satisfaction.",
    readTime: "7 min read",
    category: "Intermediate",
    featured: false,
    relatedSlugs: ["customizing-ai-voice", "integration-best-practices"],
  },
];

const videoTutorials: VideoTutorial[] = [
  {
    slug: "quick-setup-tutorial",
    title: "Quick Setup Tutorial",
    description: "Watch how to get your AI receptionist up and running in minutes.",
    duration: "4:32",
    thumbnail: "🎬",
    featured: true,
    relatedSlugs: ["calendar-integration-walkthrough", "advanced-customization"],
  },
  {
    slug: "calendar-integration-walkthrough",
    title: "Calendar Integration Walkthrough",
    description: "Step-by-step guide to connecting your booking system.",
    duration: "6:15",
    thumbnail: "📅",
    featured: false,
    relatedSlugs: ["quick-setup-tutorial", "analytics-dashboard-overview"],
  },
  {
    slug: "advanced-customization",
    title: "Advanced Customization",
    description: "Deep dive into personalizing your AI receptionist experience.",
    duration: "12:45",
    thumbnail: "⚙️",
    featured: true,
    relatedSlugs: ["quick-setup-tutorial", "analytics-dashboard-overview"],
  },
  {
    slug: "analytics-dashboard-overview",
    title: "Analytics Dashboard Overview",
    description: "Understanding your call metrics and performance insights.",
    duration: "8:20",
    thumbnail: "📊",
    featured: false,
    relatedSlugs: ["calendar-integration-walkthrough", "advanced-customization"],
  },
];

const articles: Article[] = [
  {
    slug: "ai-receptionist-cost-analysis",
    title: "AI Receptionist vs Traditional: A Cost Analysis",
    description: "Comprehensive breakdown of costs and ROI when switching to AI.",
    category: "Analysis",
    featured: true,
    relatedSlugs: ["scaling-business-with-ai", "privacy-security-best-practices"],
  },
  {
    slug: "healthcare-spotlight",
    title: "Industry Spotlight: Healthcare",
    description: "How medical practices are benefiting from AI receptionists.",
    category: "Case Study",
    featured: false,
    relatedSlugs: ["ai-receptionist-cost-analysis", "privacy-security-best-practices"],
  },
  {
    slug: "privacy-security-best-practices",
    title: "Privacy & Security Best Practices",
    description: "Ensuring your customer data remains protected with AI systems.",
    category: "Security",
    featured: true,
    relatedSlugs: ["ai-receptionist-cost-analysis", "healthcare-spotlight"],
  },
  {
    slug: "scaling-business-with-ai",
    title: "Scaling Your Business with AI",
    description: "Strategies for growing your business without increasing overhead.",
    category: "Growth",
    featured: false,
    relatedSlugs: ["ai-receptionist-cost-analysis", "healthcare-spotlight"],
  },
];

type CategoryFilter = "all" | "guides" | "videos" | "blogs" | "articles";

const categoryTabs: { id: CategoryFilter; label: string; icon: typeof BookOpen }[] = [
  { id: "all", label: "All", icon: BookOpen },
  { id: "guides", label: "Guides", icon: BookOpen },
  { id: "videos", label: "Videos", icon: Video },
  { id: "blogs", label: "Blogs", icon: Newspaper },
  { id: "articles", label: "Articles", icon: FileText },
];

const ITEMS_PER_PAGE = 4;

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [guidesPage, setGuidesPage] = useState(1);
  const [videosPage, setVideosPage] = useState(1);
  const [blogsPage, setBlogsPage] = useState(1);
  const [articlesPage, setArticlesPage] = useState(1);

  const filteredContent = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    let baseGuides = guides;
    let baseVideos = videoTutorials;
    let baseBlogs = blogPosts;
    let baseArticles = articles;

    // Apply category filter first
    if (activeCategory !== "all") {
      baseGuides = activeCategory === "guides" ? guides : [];
      baseVideos = activeCategory === "videos" ? videoTutorials : [];
      baseBlogs = activeCategory === "blogs" ? blogPosts : [];
      baseArticles = activeCategory === "articles" ? articles : [];
    }
    
    if (!query) {
      return {
        guides: baseGuides,
        videoTutorials: baseVideos,
        blogs: baseBlogs,
        articles: baseArticles,
        hasResults: baseGuides.length > 0 || baseVideos.length > 0 || baseBlogs.length > 0 || baseArticles.length > 0,
      };
    }

    const filteredGuides = baseGuides.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    const filteredVideos = baseVideos.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    const filteredBlogs = baseBlogs.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    const filteredArticles = baseArticles.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    return {
      guides: filteredGuides,
      videoTutorials: filteredVideos,
      blogs: filteredBlogs,
      articles: filteredArticles,
      hasResults: filteredGuides.length > 0 || filteredVideos.length > 0 || filteredBlogs.length > 0 || filteredArticles.length > 0,
    };
  }, [searchQuery, activeCategory]);

  // Pagination helpers
  const paginate = <T,>(items: T[], page: number) => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  };

  const getTotalPages = (total: number) => Math.ceil(total / ITEMS_PER_PAGE);

  const PaginationControls = ({ 
    currentPage, 
    totalPages, 
    onPageChange 
  }: { 
    currentPage: number; 
    totalPages: number; 
    onPageChange: (page: number) => void;
  }) => {
    if (totalPages <= 1) return null;
    
    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-card/50 border-border/50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground px-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-card/50 border-border/50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  const FeaturedBadge = () => (
    <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30 flex items-center gap-1">
      <Star className="h-3 w-3 fill-current" />
      Featured
    </Badge>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Resources</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Learn & <span className="text-gradient">Grow</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Everything you need to get the most out of Ralvie AI. Guides, tutorials, and insights to help you succeed.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search guides, tutorials, articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 py-6 text-lg bg-card/50 border-border/50 focus:border-primary/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeCategory === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setGuidesPage(1);
                    setVideosPage(1);
                    setBlogsPage(1);
                    setArticlesPage(1);
                  }}
                  className={`flex items-center gap-2 transition-all ${
                    activeCategory === tab.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-card/50 border-border/50 hover:border-primary/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>

          {searchQuery && (
            <p className="mt-4 text-muted-foreground animate-fade-in">
              {filteredContent.hasResults
                ? `Showing results for "${searchQuery}"`
                : `No results found for "${searchQuery}"`}
            </p>
          )}
        </div>
      </section>

      {!filteredContent.hasResults && (
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground mb-4">Try adjusting your search or browse all resources below.</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        </section>
      )}

      {/* Guides Section */}
      {filteredContent.guides.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Guides</h2>
              <Badge variant="outline" className="ml-2">{filteredContent.guides.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginate(filteredContent.guides, guidesPage).map((guide, index) => (
                <Link to={`/guide/${guide.slug}`} key={guide.slug}>
                  <Card 
                    className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                          {guide.featured && <FeaturedBadge />}
                        </div>
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
                </Link>
              ))}
            </div>
            <PaginationControls 
              currentPage={guidesPage} 
              totalPages={getTotalPages(filteredContent.guides.length)} 
              onPageChange={setGuidesPage} 
            />
          </div>
        </section>
      )}

      {/* Video Tutorials Section */}
      {filteredContent.videoTutorials.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Video Tutorials</h2>
              <Badge variant="outline" className="ml-2">{filteredContent.videoTutorials.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginate(filteredContent.videoTutorials, videosPage).map((video, index) => (
                <Link to={`/video/${video.slug}`} key={video.slug}>
                  <Card 
                    className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden animate-fade-in h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-5xl relative">
                      {video.thumbnail}
                      <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                        {video.duration}
                      </div>
                      {video.featured && (
                        <div className="absolute top-2 left-2">
                          <FeaturedBadge />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{video.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <PaginationControls 
              currentPage={videosPage} 
              totalPages={getTotalPages(filteredContent.videoTutorials.length)} 
              onPageChange={setVideosPage} 
            />
          </div>
        </section>
      )}

      {/* Blogs Section */}
      {filteredContent.blogs.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Newspaper className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Blog</h2>
              <Badge variant="outline" className="ml-2">{filteredContent.blogs.length}</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {paginate(filteredContent.blogs, blogsPage).map((blog, index) => (
                <Card 
                  key={blog.slug} 
                  className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {blog.date} • {blog.author}
                      </div>
                      {blog.featured && <FeaturedBadge />}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{blog.description}</CardDescription>
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <Link to={`/blog/${blog.slug}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <PaginationControls 
              currentPage={blogsPage} 
              totalPages={getTotalPages(filteredContent.blogs.length)} 
              onPageChange={setBlogsPage} 
            />
          </div>
        </section>
      )}

      {/* Articles Section */}
      {filteredContent.articles.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Articles</h2>
              <Badge variant="outline" className="ml-2">{filteredContent.articles.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginate(filteredContent.articles, articlesPage).map((article, index) => (
                <Link to={`/article/${article.slug}`} key={article.slug}>
                  <Card 
                    className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className="bg-accent/10 text-accent border-accent/20">{article.category}</Badge>
                        {article.featured && <FeaturedBadge />}
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{article.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <PaginationControls 
              currentPage={articlesPage} 
              totalPages={getTotalPages(filteredContent.articles.length)} 
              onPageChange={setArticlesPage} 
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is here to help. Reach out and we&apos;ll get you the answers you need.
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
