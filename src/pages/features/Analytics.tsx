import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart, Activity, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BarChart3,
    title: "Call Volume Analytics",
    description: "Track call patterns by hour, day, and season to optimize staffing and availability.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Tracking",
    description: "Measure how many calls convert to appointments, sales, or other key outcomes.",
  },
  {
    icon: PieChart,
    title: "Call Categorization",
    description: "AI automatically categorizes calls by type, urgency, and customer intent.",
  },
  {
    icon: LineChart,
    title: "Performance Trends",
    description: "Monitor key metrics over time and identify areas for improvement.",
  },
  {
    icon: Activity,
    title: "Real-time Dashboard",
    description: "Live view of ongoing calls, queue status, and instant performance metrics.",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Generate detailed reports tailored to your business needs and export to PDF or CSV.",
  },
];

const metrics = [
  { label: "Call Resolution Rate", value: "94%" },
  { label: "Avg. Handle Time", value: "2.5 min" },
  { label: "Customer Satisfaction", value: "4.8/5" },
  { label: "First Call Resolution", value: "87%" },
];

const Analytics = () => {
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Analytics & Insights</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Data-Driven <span className="text-gradient">Decisions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Unlock powerful insights from every customer interaction. Understand patterns, measure performance, and continuously improve.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              See It In Action <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Metrics at a Glance</h2>
            <p className="text-muted-foreground">Track what matters most to your business</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analytics Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics tools to help you understand and optimize every aspect of your customer communications
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Making Data-Driven Decisions</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get actionable insights from every customer interaction starting today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Demo <ArrowRight className="h-4 w-4 ml-2" />
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

export default Analytics;