import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ralvieLogo from "@/assets/ralvie-logo-white.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={ralvieLogo} alt="Ralvie AI" className="h-10" />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered frontdesk that speaks like a human, works like AI.
            </p>
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

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><a href="/#demo" className="hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/case-studies/hospitality" className="hover:text-primary transition-colors">Hospitality</Link></li>
              <li><Link to="/case-studies/healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/case-studies/real-estate" className="hover:text-primary transition-colors">Real Estate</Link></li>
              <li><Link to="/case-studies/education" className="hover:text-primary transition-colors">Education</Link></li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resource Hub</Link></li>
              <li><a href="https://ralvie.ai/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://ralvie.ai/contact-support/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
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