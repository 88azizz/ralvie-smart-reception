import { Card } from "@/components/ui/card";
import { Hotel, GraduationCap, Stethoscope, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hospitalityImg from "@/assets/hospitality.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import realestateImg from "@/assets/realestate.jpg";
import educationImg from "@/assets/education.jpg";

const useCases = [
  {
    icon: Hotel,
    industry: "Hospitality",
    description: "Never miss a reservation. Handle guest inquiries, room bookings, concierge requests, and special accommodations 24/7. Perfect for hotels, resorts, and vacation rentals.",
    metrics: "+35% booking rate",
    features: ["Room availability checks", "Reservation management", "Guest service requests", "Upsell opportunities"],
    image: hospitalityImg,
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    description: "Reduce wait times and improve patient experience. Schedule appointments, handle prescription refills, answer FAQs, and triage urgent cases with HIPAA-compliant security.",
    metrics: "-60% wait times",
    features: ["Appointment scheduling", "Prescription refills", "Patient inquiries", "Emergency routing"],
    image: healthcareImg,
  },
  {
    icon: Building2,
    industry: "Real Estate",
    description: "Capture every lead, instantly. Qualify prospects, schedule property viewings, answer listing questions, and provide market information while your team focuses on closings.",
    metrics: "+42% lead capture",
    features: ["Property inquiries", "Viewing bookings", "Lead qualification", "Market information"],
    image: realestateImg,
  },
  {
    icon: GraduationCap,
    industry: "Education",
    description: "Support students and parents around the clock. Handle admissions inquiries, schedule campus tours, provide course information, and manage enrollment questions efficiently.",
    metrics: "90% faster response",
    features: ["Admissions support", "Tour scheduling", "Course information", "Parent inquiries"],
    image: educationImg,
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Industry Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Built for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Whether you're running a hotel, clinic, real estate agency, or school, 
            Ralvie adapts to your industry's unique needs with specialized knowledge and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Image section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.industry}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Metrics badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-semibold shadow-lg">
                    {useCase.metrics}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your industry? Ralvie can be customized for any business that receives calls.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Discuss Your Use Case
          </Button>
        </div>
      </div>
    </section>
  );
};
