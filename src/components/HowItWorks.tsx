import { Card } from "@/components/ui/card";
import { Phone, Brain, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call Arrives",
    description: "Your customer calls. Ralvie picks up instantly—no hold music, no waiting. Every single call is answered within 2 seconds, 24/7/365.",
    color: "primary",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Understands",
    description: "Advanced natural language processing analyzes the caller's intent, accesses your knowledge base, and understands context just like your best employee would.",
    color: "secondary",
  },
  {
    icon: Zap,
    step: "03",
    title: "Takes Action",
    description: "Books appointments, answers questions, routes to departments, or escalates to humans based on your custom rules. All while sounding completely natural.",
    color: "accent",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Delivers Results",
    description: "Every interaction is logged, transcribed, and analyzed. Get insights on customer needs, booking trends, and service quality in real-time dashboards.",
    color: "primary",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Simple & Powerful
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            How Ralvie Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Four simple steps to transform every customer interaction into an opportunity
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = step.color === 'primary' ? 'primary' : step.color === 'secondary' ? 'secondary' : 'accent';
              
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative group animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    step.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary/70' :
                    step.color === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary/70' :
                    'bg-gradient-to-br from-accent to-accent/70'
                  }`}>
                    {step.step}
                  </div>

                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      step.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                      step.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' :
                      'bg-accent/10 group-hover:bg-accent/20'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        step.color === 'primary' ? 'text-primary' :
                        step.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover effect decoration */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
            <div className="text-sm text-muted-foreground">Average Answer Time</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-secondary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Languages Supported</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Setup Complexity</div>
          </div>
        </div>
      </div>
    </section>
  );
};
