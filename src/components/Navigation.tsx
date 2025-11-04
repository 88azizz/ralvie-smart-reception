import { Button } from "@/components/ui/button";
import ralvieLogo from "@/assets/ralvie-logo.svg";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const Navigation = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/ralvie-ai/30min?hide_event_type_details=1&hide_gdpr_banner=1' 
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={ralvieLogo} alt="Ralvie AI" className="h-8" />
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
              onClick={openCalendly}
            >
              Book a Demo
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
