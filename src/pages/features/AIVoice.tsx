import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Mic, Globe, Brain, Sparkles, Volume2, Languages } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Mic,
    title: "Natural Speech Patterns",
    description: "Our AI uses advanced neural networks to produce speech that sounds genuinely human, with natural pauses, intonation, and emphasis.",
  },
  {
    icon: Languages,
    title: "Multi-language Support",
    description: "Communicate with customers in their preferred language. Support for 30+ languages with native-level pronunciation.",
  },
  {
    icon: Brain,
    title: "Context-Aware Responses",
    description: "The AI understands context and adjusts its tone accordingly—professional for business calls, warm for hospitality.",
  },
  {
    icon: Volume2,
    title: "Customizable Voice",
    description: "Choose from a variety of voice profiles or create a custom voice that matches your brand identity.",
  },
  {
    icon: Globe,
    title: "Regional Accents",
    description: "Select regional accents to better connect with local customers and create a more authentic experience.",
  },
  {
    icon: Sparkles,
    title: "Emotional Intelligence",
    description: "Our AI detects caller emotion and adjusts its responses to provide empathetic, appropriate support.",
  },
];

const AIVoice = () => {
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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">AI Voice Technology</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Voice That Sounds <span className="text-gradient">Human</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our advanced AI voice technology creates natural, engaging conversations that your customers will love. No robotic tones, just genuine human-like interaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Hear It In Action <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Voice Technology Stands Out</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge neural networks and refined with millions of conversation samples
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Languages Supported</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Natural Sound Rating</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">50ms</div>
              <p className="text-muted-foreground">Response Latency</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Calls Handled</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Customer Calls?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the difference of truly human-sounding AI. Schedule a demo to hear it for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={openCalendly}>
              Schedule a Demo <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/resources">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoice;