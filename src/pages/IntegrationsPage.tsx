import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Shield, RefreshCw, Settings, Globe, MessageSquare, Headphones, Database, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import zohoLogo from "/images/zoho-logo.png";

const integrations = [
  {
    name: "Zoho CRM",
    description: "Sync customer data and manage relationships seamlessly with Zoho's powerful CRM platform.",
    category: "CRM",
    logo: zohoLogo,
    features: ["Contact sync", "Deal tracking", "Activity logging", "Custom fields"],
  },
  {
    name: "Google Calendar",
    description: "Automatically schedule appointments and sync with your team's Google Calendar.",
    category: "Scheduling",
    logo: "📅",
    features: ["Real-time sync", "Availability check", "Event creation", "Reminders"],
  },
  {
    name: "Slack",
    description: "Get instant notifications and updates directly in your Slack workspace.",
    category: "Communication",
    logo: "💬",
    features: ["Call alerts", "Lead notifications", "Team updates", "Channel routing"],
  },
  {
    name: "HubSpot",
    description: "Connect with HubSpot to streamline your marketing and sales pipeline.",
    category: "CRM",
    logo: "🔶",
    features: ["Lead capture", "Pipeline sync", "Marketing automation", "Contact management"],
  },
  {
    name: "Zapier",
    description: "Connect to 5000+ apps and automate your workflows without coding.",
    category: "Automation",
    logo: "⚡",
    features: ["5000+ apps", "Custom workflows", "Trigger actions", "Multi-step zaps"],
  },
  {
    name: "Microsoft Teams",
    description: "Stay connected with your team through Microsoft Teams integration.",
    category: "Communication",
    logo: "👥",
    features: ["Call routing", "Team notifications", "Meeting scheduling", "Chat integration"],
  },
  {
    name: "Salesforce",
    description: "Enterprise-grade CRM integration for large-scale operations.",
    category: "CRM",
    logo: "☁️",
    features: ["Lead management", "Opportunity tracking", "Custom fields", "Reporting"],
  },
  {
    name: "Calendly",
    description: "Seamless appointment scheduling with Calendly integration.",
    category: "Scheduling",
    logo: "📆",
    features: ["Booking links", "Buffer times", "Team scheduling", "Round-robin"],
  },
  {
    name: "Twilio",
    description: "Advanced telephony integration for SMS and voice communications.",
    category: "Communication",
    logo: "📞",
    features: ["SMS notifications", "Voice calls", "Call recording", "IVR menus"],
  },
  {
    name: "Stripe",
    description: "Accept payments and manage billing through secure Stripe integration.",
    category: "Payments",
    logo: "💳",
    features: ["Payment processing", "Invoicing", "Subscription billing", "Refunds"],
  },
  {
    name: "Mailchimp",
    description: "Sync contacts and automate email marketing campaigns effortlessly.",
    category: "Marketing",
    logo: "🐒",
    features: ["Contact sync", "Email campaigns", "Automation", "Analytics"],
  },
  {
    name: "Intercom",
    description: "Seamlessly hand off conversations to live chat when needed.",
    category: "Support",
    logo: "💬",
    features: ["Live chat handoff", "Ticket creation", "Customer profiles", "Messaging"],
  },
  {
    name: "Zendesk",
    description: "Create support tickets automatically from AI conversations.",
    category: "Support",
    logo: "🎫",
    features: ["Ticket creation", "Status updates", "Priority routing", "SLA tracking"],
  },
  {
    name: "QuickBooks",
    description: "Sync invoices and customer data with QuickBooks accounting.",
    category: "Accounting",
    logo: "📊",
    features: ["Invoice sync", "Customer data", "Payment tracking", "Reporting"],
  },
  {
    name: "Notion",
    description: "Log calls and notes directly to your Notion workspace.",
    category: "Productivity",
    logo: "📝",
    features: ["Call logging", "Note taking", "Database sync", "Task creation"],
  },
  {
    name: "Airtable",
    description: "Store and organize call data in customizable Airtable bases.",
    category: "Productivity",
    logo: "📋",
    features: ["Data sync", "Custom views", "Automations", "Reporting"],
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

const useCases = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Route calls to the right team, create tickets automatically, and track resolution times.",
    integrations: ["Zendesk", "Intercom", "Slack"],
  },
  {
    icon: BarChart,
    title: "Sales & Marketing",
    description: "Capture leads, sync to your CRM, and trigger automated follow-up campaigns.",
    integrations: ["HubSpot", "Salesforce", "Mailchimp"],
  },
  {
    icon: Database,
    title: "Operations",
    description: "Automate data entry, sync calendars, and streamline your workflows.",
    integrations: ["Zapier", "Airtable", "Notion"],
  },
  {
    icon: Globe,
    title: "Multi-channel",
    description: "Connect voice, SMS, email, and chat for a unified communication experience.",
    integrations: ["Twilio", "Slack", "Microsoft Teams"],
  },
];

const categories = ["All", "CRM", "Scheduling", "Communication", "Automation", "Support", "Marketing", "Payments", "Accounting", "Productivity"];

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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ralvie AI integrates seamlessly with the tools you already use. Automate workflows, sync data, and boost productivity across your entire stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integration Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how businesses use Ralvie AI integrations to streamline their operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{useCase.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {useCase.integrations.map((integration, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{integration}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Integrations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect Ralvie AI with {integrations.length}+ popular tools and platforms
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
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

      {/* API Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Developer API</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Custom Integrations</h2>
              <p className="text-muted-foreground mb-6">
                Need something specific? Our RESTful API gives you full access to build custom integrations tailored to your unique workflow requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>RESTful API with comprehensive documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Webhooks for real-time event notifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>SDKs for popular programming languages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Sandbox environment for testing</span>
                </li>
              </ul>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Settings className="h-4 w-4 mr-2" /> View API Docs
              </Button>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <pre className="text-sm text-muted-foreground overflow-x-auto">
                <code>{`// Example: Create a call handler
const response = await ralvie.calls.create({
  phoneNumber: "+1234567890",
  greeting: "Hello! How can I help you?",
  webhookUrl: "https://your-app.com/webhook"
});

// Webhook payload on call completion
{
  "event": "call.completed",
  "callId": "call_abc123",
  "duration": 245,
  "transcript": "...",
  "summary": "Customer inquired about..."
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Integration?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't see your tool listed? Our team can build custom integrations for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Call <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;