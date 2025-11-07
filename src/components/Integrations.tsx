import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Zap, FileText, Database, Mail, MessageSquare, CheckCircle } from "lucide-react";

const integrations = [
  {
    icon: Database,
    name: "Zoho CRM",
    description: "Customer relationship management platform",
    category: "CRM",
    logo: "https://www.zohowebstatic.com/sites/zweb/images/zoho-logo-new.svg"
  },
  {
    icon: Calendar,
    name: "Cal.com",
    description: "Open-source scheduling platform",
    category: "Scheduling",
    logo: "https://cal.com/logo.svg",
    darkLogo: true
  },
  {
    icon: Phone,
    name: "Twilio",
    description: "Voice and SMS communications",
    category: "Communications",
    logo: "https://cdn.brandfetch.io/idAnl512qI/w/512/h/511/theme/dark/icon.png?k=id64Mup7ac&t=1736268071570"
  },
  {
    icon: Zap,
    name: "Zapier",
    description: "Connect 6,000+ apps and automate workflows",
    category: "Automation",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg"
  },
  {
    icon: FileText,
    name: "Notion",
    description: "Workspace and documentation",
    category: "Productivity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
  },
  {
    icon: Database,
    name: "HubSpot",
    description: "CRM and marketing automation",
    category: "CRM",
    logo: "https://cdn.brandfetch.io/idw382nG0m/w/512/h/511/theme/dark/icon.png?k=id64Mup7ac&t=1734024986859"
  },
  {
    icon: Database,
    name: "Salesforce",
    description: "Enterprise CRM platform",
    category: "CRM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  },
  {
    icon: Mail,
    name: "Gmail",
    description: "Email automation and notifications",
    category: "Communications",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
  },
  {
    icon: MessageSquare,
    name: "Slack",
    description: "Team collaboration and alerts",
    category: "Communications",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
  }
];

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

export const Integrations = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Zap className="w-4 h-4" />
            Seamless Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Connects With Your Favorite Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Ralvie AI integrates seamlessly with <span className="text-primary font-semibold">6,000+ apps and services</span>, 
            including all major CRMs, calendars, communication platforms, and workflow tools.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => {
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in hover:scale-105"
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 p-3 group-hover:scale-110 transition-transform duration-300 ${
                    integration.darkLogo ? 'bg-white' : 'bg-background'
                  }`}>
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 text-lg group-hover:text-primary transition-colors duration-300">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {integration.category}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12 border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Why Our Integrations Matter
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">No Manual Data Entry</h4>
              <p className="text-sm text-muted-foreground">
                Automatically sync call data, appointments, and customer information across all your tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Instant Automation</h4>
              <p className="text-sm text-muted-foreground">
                Trigger workflows, send notifications, and update records in real-time based on call outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Unified Data</h4>
              <p className="text-sm text-muted-foreground">
                Keep all customer interactions and data synchronized across your entire tech stack.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom integration? We'll build it for you.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={openCalendly}
          >
            Discuss Your Integration Needs
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
