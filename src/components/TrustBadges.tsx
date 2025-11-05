import { Award, Star, TrendingUp } from "lucide-react";

export const TrustBadges = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in">
            <Award className="w-4 h-4" />
            Recognition & Trust
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Trusted & Featured On Leading Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Join hundreds of businesses who trust Ralvie AI to transform their customer communication
          </p>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Active Businesses</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a 
            href='https://www.saashub.com/ralvie-ai?utm_source=badge&utm_campaign=badge&utm_content=ralvie-ai&badge_variant=color&badge_kind=approved' 
            target='_blank'
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:opacity-80 hover:scale-105"
          >
            <img 
              src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" 
              alt="Ralvie AI - Approved on SaaSHub" 
              className="h-11 w-auto object-contain"
            />
          </a>

          <a 
            href="https://open-launch.com" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Powered by Open-Launch"
            className="transition-all duration-300 hover:opacity-80 hover:scale-105"
          >
            <img 
              src="https://open-launch.com/images/badges/powered-by-light.svg" 
              alt="Powered by Open-Launch" 
              className="h-11 w-auto object-contain"
            />
          </a>

          <a 
            href="https://www.producthunt.com/products/ralvie-ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:opacity-80 hover:scale-105"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=996416&theme=light" 
              alt="Ralvie AI - Featured on Product Hunt" 
              className="h-11 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
