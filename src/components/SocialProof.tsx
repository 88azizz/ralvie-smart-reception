import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Hotel Manager",
    company: "Sunset Resort",
    content: "Ralvie handles our after-hours calls perfectly. We've seen a 35% increase in bookings since implementation.",
    rating: 5,
  },
  {
    name: "Dr. James Chen",
    role: "Practice Administrator",
    company: "Downtown Medical",
    content: "Our patients love the instant response times. It's like having a dedicated receptionist 24/7.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Director of Admissions",
    company: "Riverside University",
    content: "The voice quality is incredible. Prospective students can't tell they're speaking with an AI.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Active Businesses" },
  { value: "50K+", label: "Calls Handled Daily" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "28%", label: "Average Booking Increase" },
];

export const SocialProof = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Loved by Teams Everywhere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about transforming their customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
