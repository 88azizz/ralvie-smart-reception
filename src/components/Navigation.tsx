import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Phone className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Ralvie</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex border-primary/50 text-foreground hover:bg-primary/10"
            >
              Login
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
