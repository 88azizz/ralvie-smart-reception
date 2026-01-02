import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Shield, RefreshCw } from "lucide-react";
import zohoLogo from "/images/zoho-logo.png";

const integrations = [
  {
    name: "Zoho CRM",
    description: "Sync customer data and manage relationships seamlessly with Zoho's powerful CRM platform.",
    category: "CRM",
    logo: zohoLogo,
    features: ["Contact sync", "Deal tracking", "Activity logging"],
  },
  {
    name: "Google Calendar",
    description: "Automatically schedule appointments and sync with your team's Google Calendar.",
    category: "Scheduling",
    logo: "📅",
    features: ["Real-time sync", "Availability check", "Event creation"],
  },
  {
    name: "Slack",
    description: "Get instant notifications and updates directly in your Slack workspace.",
    category: "Communication",
    logo: "💬",
    features: ["Call alerts", "Lead notifications", "Team updates"],
  },
  {
    name: "HubSpot",
    description: "Connect with HubSpot to streamline your marketing and sales pipeline.",
    category: "CRM",
    logo: "🔶",
    features: ["Lead capture", "Pipeline sync", "Marketing automation"],
  },
  {
    name: "Zapier",
    description: "Connect to 5000+ apps and automate your workflows without coding.",
    category: "Automation",
    logo: "⚡",
    features: ["5000+ apps", "Custom workflows", "Trigger actions"],
  },
  {
    name: "Microsoft Teams",
    description: "Stay connected with your team through Microsoft Teams integration.",
    category: "Communication",
    logo: "👥",
    features: ["Call routing", "Team notifications", "Meeting scheduling"],
  },
  {
    name: "Salesforce",
    description: "Enterprise-grade CRM integration for large-scale operations.",
    category: "CRM",
    logo: "☁️",
    features: ["Lead management", "Opportunity tracking", "Custom fields"],
  },
  {
    name: "Calendly",
    description: "Seamless appointment scheduling with Calendly integration.",
    category: "Scheduling",
    logo: "📆",
    features: ["Booking links", "Buffer times", "Team scheduling"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Connect your tools in minutes with our simple one-click integrations.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "All your data stays in sync automatically across all connected platforms.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security ensures your data is always protected.",
  },
];

const IntegrationsPage = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/ralvie-ai/30min?hide_event_type_details=1&hide_gdpr_banner=1' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Integrations</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Connect Your <span className="text-gradient">Favorite Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ralvie AI integrates seamlessly with the tools you already use. Automate workflows and boost productivity.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Available Integrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {typeof integration.logo === 'string' && integration.logo.startsWith('/') ? (
                      <img src={integration.logo} alt={integration.name} className="h-10 w-auto" />
                    ) : (
                      <span className="text-4xl">{integration.logo}</span>
                    )}
                    <Badge variant="outline" className="text-xs">{integration.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{integration.description}</CardDescription>
                  <ul className="space-y-2">
                    {integration.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Integration?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't see your tool listed? We can build custom integrations for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Call <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;
