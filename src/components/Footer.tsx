import { Phone, Mail, MapPin } from "lucide-react";
import ralvieLogo from "@/assets/ralvie-logo-white.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={ralvieLogo} alt="Ralvie AI" className="h-10" />
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered frontdesk that speaks like a human, works like AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://ralvie.ai/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://ralvie.ai/contact-support/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>support@ralvie.ai</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Ralvie AI Inc, 120 East Beaver Creek Rd Suite 200, Richmond Hill, ON L4B 4V1, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Ralvie AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://ralvie.ai/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="https://ralvie.ai/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
