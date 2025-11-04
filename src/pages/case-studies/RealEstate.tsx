import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Calendar, DollarSign, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import realestateImg from "@/assets/realestate.jpg";

export default function RealEstateCaseStudy() {
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
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-foreground">
                  Real Estate: Capture 42% More Leads with AI
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  See how top real estate agencies use Ralvie AI to never miss a lead and 
                  convert prospects into viewings automatically.
                </p>
                <Button size="lg" onClick={openCalendly} className="bg-accent hover:bg-accent/90">
                  Schedule a Demo
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={realestateImg} alt="Real Estate" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Property Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">42%</div>
                <div className="text-sm text-muted-foreground">More Leads Captured</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">88%</div>
                <div className="text-sm text-muted-foreground">Lead Qualification Rate</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">3x</div>
                <div className="text-sm text-muted-foreground">More Viewings Booked</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">$45K</div>
                <div className="text-sm text-muted-foreground">Avg Additional Revenue/Month</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Case Study: Prime Properties Group</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prime Properties Group, a boutique real estate agency with 8 agents, was losing potential clients 
                  due to slow response times. Agents were often showing properties or in meetings when leads called. 
                  By the time they returned calls, prospects had already contacted competitors. They estimated losing 
                  3-5 qualified leads per week.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prime Properties deployed Ralvie AI to instantly engage with every inquiry, qualify leads, 
                  and schedule property viewings while their agents focused on face-to-face interactions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Instant response to property inquiries with detailed information",
                    "Automated lead qualification based on budget and preferences",
                    "24/7 viewing appointment scheduling synced with agent calendars",
                    "Market data and neighborhood information on demand",
                    "Follow-up with interested prospects"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-2">Before Ralvie</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 4-hour average response time</li>
                      <li>• 30% of leads went cold</li>
                      <li>• Manual viewing scheduling</li>
                      <li>• 12 viewings/week</li>
                      <li>• High agent admin burden</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-semibold mb-2 text-primary">After Ralvie</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Instant (&lt;2s) response time</li>
                      <li>• 95% lead engagement rate</li>
                      <li>• Automated 24/7 scheduling</li>
                      <li>• 36 viewings/week</li>
                      <li>• Agents focus on closings</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "We went from losing leads to competitors to being the first to respond every single time. 
                  Ralvie qualifies prospects, books viewings, and even answers detailed questions about properties 
                  at 2 AM. Our agents now spend their time selling, not answering phones. We've closed an additional 
                  $1.2M in sales in just three months."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Michael Chen, Owner, Prime Properties Group
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Capture Every Lead?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join successful real estate agencies growing with Ralvie AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openCalendly} className="bg-accent hover:bg-accent/90">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">Explore All Solutions</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              14-day free trial • No credit card required
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}