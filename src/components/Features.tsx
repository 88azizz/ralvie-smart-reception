import { Card } from "@/components/ui/card";
import { Phone, Calendar, MessageSquare, Users, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Never Miss a Call",
    description: "Instant pickup, even during rush hours. Escalates to humans based on your rules.",
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Integrated appointment scheduling. Calendar-aware and conflict-safe.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Human-like voice cloning that matches your brand tone perfectly.",
  },
  {
    icon: Users,
    title: "Multi-Department Routing",
    description: "Intelligently routes calls to the right team every time.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock coverage without overtime costs or burnout.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in 60 seconds. Free configuration during your trial.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Teams Choose Ralvie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to deliver exceptional customer experiences, automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
