import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, TrendingUp, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded via external script
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/ralvie-ai/30min?hide_event_type_details=1&hide_gdpr_banner=1' 
      });
    }
    return false;
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      
      {/* Animated circles with pulse */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }} />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Trust badge with animation */}
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-primary/20 transition-all duration-300">
                <Sparkles className="w-3 h-3 mr-2 animate-pulse" />
                Trusted by 500+ businesses worldwide
              </Badge>
            </div>

            {/* Main headline with gradient animation */}
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Your AI Frontdesk
              </span>
              <br />
              <span className="text-foreground">That Never Sleeps</span>
            </h1>

            {/* Subheadline with stagger animation */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Transform missed calls into booked appointments. Our AI answers every call instantly, 
              understands context like a human, and never takes a day off.
            </p>

            {/* Key stats with hover effects */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2 text-primary group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg font-semibold">24/7 Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-primary group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg font-semibold">+28% Bookings</span>
              </div>
              <div className="flex items-center gap-2 text-primary group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg font-semibold">&lt;2s Response</span>
              </div>
            </div>

            {/* CTA buttons with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-lg px-8 py-6 hover:scale-105 group"
              >
                Start Free Trial
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                onClick={openCalendly}
              >
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators with check marks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm pt-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <span className="flex items-center gap-2 hover:text-primary transition-colors duration-200 font-semibold text-accent">
                <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                  ✓
                </div>
                14-day free trial
              </span>
              <span className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  ✓
                </div>
                No credit card
              </span>
              <span className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  ✓
                </div>
                Free setup
              </span>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group">
                <img 
                  src={heroImage} 
                  alt="AI Customer Service Representative" 
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-primary/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Calls handled daily</div>
                  </div>
                </div>
              </div>

              {/* Floating satisfaction card */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-secondary/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
