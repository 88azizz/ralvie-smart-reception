import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingDown, Users, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import healthcareImg from "@/assets/healthcare.jpg";

export default function HealthcareCaseStudy() {
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
                  Healthcare: Reduce Wait Times by 60% with AI
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Learn how medical practices use HIPAA-compliant Ralvie AI to improve patient satisfaction 
                  and streamline appointment scheduling.
                </p>
                <Button size="lg" onClick={openCalendly} className="bg-accent hover:bg-accent/90">
                  Schedule a Demo
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={healthcareImg} alt="Healthcare" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Clinical Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingDown className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Reduction in Wait Times</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Appointment Scheduling</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground">HIPAA Compliant</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Case Study: Valley Medical Center</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Valley Medical Center, a multi-specialty practice with 12 physicians, was receiving over 500 calls 
                  daily. Their two-person front desk team was overwhelmed, resulting in an average hold time of 8 minutes 
                  and 25% of calls being abandoned. Patient complaints about phone accessibility were increasing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Valley Medical implemented Ralvie AI with HIPAA-compliant security protocols to handle routine 
                  patient communications while their staff focused on in-office care.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated appointment scheduling and confirmations",
                    "Prescription refill request handling",
                    "Insurance and billing inquiries",
                    "Urgent case triage and emergency routing",
                    "Post-visit follow-up calls"
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
                      <li>• 8-minute average hold time</li>
                      <li>• 25% call abandonment rate</li>
                      <li>• Limited to office hours</li>
                      <li>• 2 FTE dedicated staff</li>
                      <li>• Low patient satisfaction scores</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-semibold mb-2 text-primary">After Ralvie</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• &lt;30 second wait time</li>
                      <li>• 2% call abandonment rate</li>
                      <li>• 24/7 patient support</li>
                      <li>• Staff reassigned to care</li>
                      <li>• 95% satisfaction scores</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Ralvie has been a game-changer for our practice. Patients can now schedule appointments at 
                  midnight if they want. Our staff is happier because they can focus on patient care instead of 
                  being on the phone all day. The HIPAA compliance gave us complete peace of mind."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Dr. James Rodriguez, Medical Director, Valley Medical Center
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Patient Experience?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join healthcare providers delivering better patient care with Ralvie AI
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
              14-day free trial • No credit card required • HIPAA Compliant
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}