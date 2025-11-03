import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Trust badge */}
          <div className="flex justify-center">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
              <Phone className="w-3 h-3 mr-2" />
              Trusted by 500+ businesses worldwide
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Your AI Frontdesk
            </span>
            <br />
            <span className="text-foreground">That Never Sleeps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Speak like a human. Work like AI. Always on, always polite.
            <br />
            Handle calls, book appointments, and capture leads 24/7 with voice cloning technology.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-semibold">24/7 Coverage</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="w-5 h-5" />
              <span className="text-lg font-semibold">+28% More Bookings</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">&lt;2s Response Time</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-1">
              ✓ No credit card required
            </span>
            <span className="flex items-center gap-1">
              ✓ Free setup included
            </span>
            <span className="flex items-center gap-1">
              ✓ 60 seconds to start
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
