import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Calendar, Clock, Bell, RefreshCw, Users, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI automatically finds the best available time slots based on your preferences and existing commitments.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Instantly syncs with Google Calendar, Outlook, and other major calendar platforms.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Reduce no-shows with customizable SMS and email reminders before appointments.",
  },
  {
    icon: Clock,
    title: "Buffer Time Management",
    description: "Automatically add buffer time between appointments for travel or preparation.",
  },
  {
    icon: Users,
    title: "Team Scheduling",
    description: "Handle round-robin assignments and team availability for larger organizations.",
  },
  {
    icon: Smartphone,
    title: "Self-Service Rescheduling",
    description: "Let customers reschedule appointments themselves via SMS or voice command.",
  },
];

const benefits = [
  "Reduce scheduling conflicts by 95%",
  "Cut no-shows by up to 40% with reminders",
  "Save 10+ hours per week on manual scheduling",
  "24/7 appointment booking availability",
];

const Scheduling = () => {
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Smart Scheduling</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Effortless <span className="text-gradient">Appointment Booking</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Let AI handle your scheduling 24/7. Customers book appointments through natural conversation while you focus on what matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Get Started <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/integrations">View Integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Smart Scheduling Matters</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="p-1 rounded-full bg-primary/20">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-8 animate-fade-in">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">40%</div>
                <p className="text-xl text-muted-foreground mb-4">Reduction in No-Shows</p>
                <p className="text-sm text-muted-foreground">
                  Our automated reminder system ensures customers never forget their appointments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Scheduling Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate appointment booking and management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Scheduling?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of businesses saving time with AI-powered appointment booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Demo <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scheduling;