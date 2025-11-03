import { Card } from "@/components/ui/card";
import { Hotel, GraduationCap, Stethoscope, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Hotel,
    industry: "Hospitality",
    description: "Handle reservations, guest inquiries, and concierge requests 24/7.",
    metrics: "+35% booking rate",
  },
  {
    icon: GraduationCap,
    industry: "Education",
    description: "Manage admissions, course inquiries, and campus tour scheduling.",
    metrics: "90% faster response",
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    description: "Appointment scheduling, prescription refills, and patient inquiries.",
    metrics: "-60% wait times",
  },
  {
    icon: Building2,
    industry: "Real Estate",
    description: "Property inquiries, viewing bookings, and tenant support.",
    metrics: "+42% lead capture",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across multiple sectors to deliver exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{useCase.industry}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {useCase.metrics}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
