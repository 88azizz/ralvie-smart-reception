import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalityImg from "@/assets/hospitality.jpg";

export default function HospitalityCaseStudy() {
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
                  Hospitality Industry: Transform Guest Experience with AI
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover how leading hotels and resorts use Ralvie AI to increase bookings by 35% 
                  and deliver 24/7 guest service excellence.
                </p>
                <Button size="lg" onClick={openCalendly} className="bg-accent hover:bg-accent/90">
                  Schedule a Demo
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={hospitalityImg} alt="Hospitality" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Results That Matter</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Increase in Bookings</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">$12K</div>
                <div className="text-sm text-muted-foreground">Avg Monthly Savings</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Case Study: Riverside Resort & Spa</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Riverside Resort & Spa, a 150-room luxury property, was struggling with missed calls during peak seasons. 
                  Their front desk team was overwhelmed with simultaneous check-ins, guest requests, and incoming calls. 
                  This resulted in approximately 40% of calls going to voicemail, with only 15% of those callers leaving messages.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Riverside implemented Ralvie AI to handle incoming calls 24/7. The AI was trained on their property 
                  details, room types, amenities, local attractions, and booking policies.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated room availability checks and reservation bookings",
                    "Instant answers to property and amenity questions",
                    "Seamless transfer to human staff for complex requests",
                    "Post-stay follow-up and feedback collection"
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
                      <li>• 40% missed call rate</li>
                      <li>• Average 3-minute hold time</li>
                      <li>• Limited to business hours</li>
                      <li>• $8,500/month staffing costs</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-semibold mb-2 text-primary">After Ralvie</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 98% call answer rate</li>
                      <li>• Instant response (&lt;2s)</li>
                      <li>• True 24/7 availability</li>
                      <li>• $599/month total cost</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Ralvie has transformed how we handle guest communications. We're now capturing reservations 
                  at 2 AM that we would have completely missed before. The ROI was immediate, and our guests 
                  love the instant, accurate responses."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Sarah Mitchell, General Manager, Riverside Resort & Spa
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Guest Experience?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading hospitality businesses using Ralvie AI
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