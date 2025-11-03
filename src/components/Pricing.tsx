import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Building2, Rocket } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "299",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 calls/month",
        "24/7 AI receptionist",
        "Basic integrations",
        "Email support",
        "Call recordings",
        "Basic analytics"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      icon: Building2,
      price: "599",
      description: "Ideal for growing businesses",
      features: [
        "Up to 2,000 calls/month",
        "24/7 AI receptionist",
        "Advanced integrations",
        "Priority support",
        "Call recordings & transcripts",
        "Advanced analytics",
        "Custom voice options",
        "Multi-location support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited calls",
        "24/7 AI receptionist",
        "Custom integrations",
        "Dedicated account manager",
        "Call recordings & transcripts",
        "Advanced analytics & reporting",
        "Custom voice & personality",
        "Multi-location support",
        "SLA guarantee",
        "White-label options"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            No hidden fees. No setup costs. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`p-8 relative overflow-hidden transition-all duration-500 hover:scale-105 animate-fade-in ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 shadow-2xl shadow-primary/20' 
                    : 'bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40'
                }`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-primary' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" && <span className="text-muted-foreground">$</span>}
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-primary' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${400 + index * 100 + featureIndex * 50}ms` }}>
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-primary' : 'text-primary'
                      }`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' 
                      : 'bg-primary/10 hover:bg-primary/20 text-primary'
                  } transition-all duration-300 hover:scale-105`}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include free setup, training, and onboarding
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
