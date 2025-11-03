import { Card } from "@/components/ui/card";
import { Check, X, Zap } from "lucide-react";
import beforeAfter from "@/assets/before-after.jpg";

export const Comparison = () => {
  const comparisons = [
    {
      feature: "Call Availability",
      without: "Limited to business hours",
      with: "24/7/365 coverage"
    },
    {
      feature: "Response Time",
      without: "Wait times during peak hours",
      with: "Instant answers, every time"
    },
    {
      feature: "Call Capacity",
      without: "1-2 calls at once",
      with: "Unlimited simultaneous calls"
    },
    {
      feature: "Training Time",
      without: "Weeks of onboarding",
      with: "Live in 10 minutes"
    },
    {
      feature: "Consistency",
      without: "Varies by staff member",
      with: "Perfect every time"
    },
    {
      feature: "Sick Days",
      without: "Coverage gaps",
      with: "Never calls in sick"
    },
    {
      feature: "Scalability",
      without: "Hire & train more staff",
      with: "Instant scaling"
    },
    {
      feature: "Cost per Call",
      without: "$5-15 per call",
      with: "$0.50 per call"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Zap className="w-4 h-4" />
            See the Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Traditional Front Desk vs Ralvie AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Stop juggling calls and missing opportunities. See how Ralvie transforms your customer experience.
          </p>
        </div>

        {/* Before/After Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse" />
            <div className="relative">
              <img 
                src={beforeAfter} 
                alt="Before and After Ralvie" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-2xl font-bold text-foreground mb-2">
                  From Overwhelmed to Optimized
                </p>
                <p className="text-muted-foreground">
                  Let AI handle the calls while your team focuses on what matters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium"></th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-2">
                      <X className="w-8 h-8 text-destructive" />
                      <span className="text-lg font-semibold text-foreground">Without Ralvie</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="w-8 h-8 text-primary" />
                      <span className="text-lg font-semibold text-primary">With Ralvie</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${500 + index * 50}ms` }}
                  >
                    <td className="py-4 px-4 font-semibold text-foreground">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span>{item.without}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-primary font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 flex-shrink-0" />
                        <span>{item.with}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <p className="text-4xl font-bold text-primary mb-2">90%</p>
            <p className="text-sm text-muted-foreground">Cost Reduction</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '1100ms' }}>
            <p className="text-4xl font-bold text-secondary mb-2">10x</p>
            <p className="text-sm text-muted-foreground">Call Capacity</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <p className="text-4xl font-bold text-accent mb-2">0</p>
            <p className="text-sm text-muted-foreground">Missed Calls</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
