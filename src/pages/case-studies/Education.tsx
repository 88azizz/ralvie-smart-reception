import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Zap, Users, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education.jpg";

export default function EducationCaseStudy() {
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
                  Education: 90% Faster Response for Students & Parents
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover how educational institutions use Ralvie AI to handle admissions, 
                  campus tours, and inquiries with instant, accurate responses.
                </p>
                <Button size="lg" onClick={openCalendly} className="bg-accent hover:bg-accent/90">
                  Schedule a Demo
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={educationImg} alt="Education" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Educational Excellence Metrics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Faster Response Time</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">97%</div>
                <div className="text-sm text-muted-foreground">Inquiry Resolution Rate</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">4x</div>
                <div className="text-sm text-muted-foreground">More Tours Scheduled</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">28%</div>
                <div className="text-sm text-muted-foreground">Enrollment Increase</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Case Study: Oakwood Academy</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oakwood Academy, a private K-12 institution with 800 students, struggled to manage the influx 
                  of parent inquiries during enrollment season. Their admissions office of 3 staff members was 
                  overwhelmed with repetitive questions about curriculum, tuition, campus facilities, and application 
                  procedures. Response times averaged 24-48 hours, and they were losing prospective families to 
                  competitors who responded faster.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Oakwood implemented Ralvie AI to provide instant answers to common inquiries and automate 
                  campus tour scheduling, freeing their admissions team to focus on personalized interactions 
                  with serious prospects.
                </p>
                <ul className="space-y-3">
                  {[
                    "24/7 answers to admissions and curriculum questions",
                    "Automated campus tour scheduling with multiple time slots",
                    "Course catalog and program information on demand",
                    "Tuition and financial aid inquiry handling",
                    "Parent and student FAQ automation",
                    "Multi-language support for international families"
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
                      <li>• 24-48 hour response time</li>
                      <li>• Phone tag with busy parents</li>
                      <li>• 8 campus tours per week</li>
                      <li>• Overwhelmed staff during peak season</li>
                      <li>• Lost prospects to faster schools</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-semibold mb-2 text-primary">After Ralvie</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Instant responses 24/7</li>
                      <li>• Parents book tours at convenience</li>
                      <li>• 32 campus tours per week</li>
                      <li>• Staff focused on high-value tasks</li>
                      <li>• 28% enrollment increase</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Ralvie has revolutionized our admissions process. Parents love getting immediate answers at 
                  10 PM when they're researching schools. We've quadrupled our campus tour bookings, and our team 
                  can now spend quality time with families instead of answering the same questions repeatedly. 
                  The multilingual support has also helped us connect with our diverse community."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Lisa Thompson, Director of Admissions, Oakwood Academy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Student Communications?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join educational institutions enhancing their admissions process with Ralvie AI
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