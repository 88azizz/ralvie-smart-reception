import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Building2, Rocket } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Solopreneur",
      icon: Sparkles,
      monthlyPrice: "39",
      annualPrice: "390",
      description: "Perfect for freelancers and solo businesses.",
      features: [
        "150 voice minutes",
        "150 SMS messages",
        "100+ premium voices included",
        "Multilingual support",
        "Basic call routing",
        "Standard analytics"
      ],
      highlighted: false
    },
    {
      name: "Starter",
      icon: Sparkles,
      monthlyPrice: "99",
      annualPrice: "990",
      description: "For growing businesses ready to automate more.",
      features: [
        "150 voice minutes",
        "150 SMS messages",
        "Call transcription & summaries",
        "6,000+ integrations",
        "Up to 5 workflow automations",
        "CRM integrations + API access"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      icon: Building2,
      monthlyPrice: "299",
      annualPrice: "2990",
      description: "Ideal for teams handling higher call volumes.",
      features: [
        "1,000 voice minutes",
        "1,000 SMS messages",
        "Advanced analytics & reporting",
        "Workflow automation (unlimited)",
        "Priority support (chat + email)",
        "Call whispering/monitoring"
      ],
      highlighted: true
    },
    {
      name: "Business",
      icon: Building2,
      monthlyPrice: "599",
      annualPrice: "5990",
      description: "For businesses that need scale and reliability.",
      features: [
        "2,500 voice minutes",
        "2,500 SMS messages",
        "Extended data retention (12 months)",
        "Slack/Teams support",
        "Workflow & automation at scale",
        "Priority support"
      ],
      highlighted: false
    },
    {
      name: "Enterprise",
      icon: Rocket,
      monthlyPrice: "999",
      annualPrice: "9990",
      description: "For enterprises needing customization & compliance.",
      features: [
        "5,000 voice minutes",
        "5,000 SMS messages",
        "HIPAA, SOC2, GDPR compliance",
        "Dedicated support representative",
        "Custom integrations & APIs",
        "Custom SLAs with guaranteed uptime"
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
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '250ms' }}>
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-primary/20 rounded-full transition-colors hover:bg-primary/30"
              aria-label="Toggle pricing"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-2 text-xs text-primary font-semibold">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-[1800px] mx-auto px-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <Card 
                key={index}
                className={`p-5 relative overflow-hidden transition-all duration-500 hover:scale-105 animate-fade-in flex-1 min-w-[280px] max-w-[320px] ${
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
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-primary' : 'text-primary'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-muted-foreground">$</span>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-primary' : 'text-foreground'}`}>
                        {displayPrice}
                      </span>
                      <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-primary mt-2">
                        ${plan.monthlyPrice}/month billed annually
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
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
                    className={`w-full mt-auto ${
                      plan.highlighted 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' 
                        : 'bg-primary/10 hover:bg-primary/20 text-primary'
                    } transition-all duration-300 hover:scale-105`}
                    size="lg"
                    asChild
                  >
                    <a href="https://app.frontdesk.ralvie.ai/client-trial?_gl=1*1jjx8y8*_ga*NDEwMDkzNDE2LjE3NTE5NTkwOTQ.*_ga_71TD7P1FL4*czE3NjIzMTY5ODYkbzExNyRnMSR0MTc2MjMxNzI3MiRqNTkkbDAkaDA." target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                </div>
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

        {/* Comparison Table */}
        <div className="mt-24 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '900ms' }}>
              Compare All Features
            </h3>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '1000ms' }}>
              Detailed breakdown of what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto animate-fade-in" style={{ animationDelay: '1100ms' }}>
            <table className="w-full border-collapse bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground sticky left-0 bg-card/90 backdrop-blur-sm z-10 animate-fade-in" style={{ animationDelay: '1200ms' }}>
                    Features
                  </th>
                  {plans.map((plan, index) => (
                    <th key={index} className={`p-4 text-center font-semibold min-w-[140px] transition-all duration-300 hover:scale-105 animate-fade-in ${plan.highlighted ? 'bg-primary/10' : ''}`} style={{ animationDelay: `${1250 + index * 50}ms` }}>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-foreground">{plan.name}</span>
                        <span className="text-2xl font-bold text-primary transition-all">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Voice & SMS */}
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1300ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Voice Minutes</td>
                  <td className="p-4 text-center text-muted-foreground">150</td>
                  <td className="p-4 text-center text-muted-foreground">150</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">1,000</td>
                  <td className="p-4 text-center text-muted-foreground">2,500</td>
                  <td className="p-4 text-center text-muted-foreground">5,000</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1350ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">SMS Messages</td>
                  <td className="p-4 text-center text-muted-foreground">150</td>
                  <td className="p-4 text-center text-muted-foreground">150</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">1,000</td>
                  <td className="p-4 text-center text-muted-foreground">2,500</td>
                  <td className="p-4 text-center text-muted-foreground">5,000</td>
                </tr>

                {/* Core Features */}
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1400ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Premium Voices (100+)</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1450ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Multilingual Support</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1500ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Call Routing</td>
                  <td className="p-4 text-center text-muted-foreground">Basic</td>
                  <td className="p-4 text-center text-muted-foreground">Basic</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">Advanced</td>
                  <td className="p-4 text-center text-muted-foreground">Advanced</td>
                  <td className="p-4 text-center text-muted-foreground">Advanced</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1550ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Analytics</td>
                  <td className="p-4 text-center text-muted-foreground">Standard</td>
                  <td className="p-4 text-center text-muted-foreground">Standard</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">Advanced</td>
                  <td className="p-4 text-center text-muted-foreground">Advanced</td>
                  <td className="p-4 text-center text-muted-foreground">Advanced</td>
                </tr>

                {/* Advanced Features */}
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1600ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Call Transcription</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1650ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">CRM Integrations</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1700ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">API Access</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1750ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Workflow Automations</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">Up to 5</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">Unlimited</td>
                  <td className="p-4 text-center text-muted-foreground">Unlimited</td>
                  <td className="p-4 text-center text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1800ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">6,000+ Integrations</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>

                {/* Professional Features */}
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1850ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Call Monitoring</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1900ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Priority Support</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">Chat + Email</td>
                  <td className="p-4 text-center text-muted-foreground">Chat + Email</td>
                  <td className="p-4 text-center text-muted-foreground">Dedicated Rep</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '1950ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Data Retention</td>
                  <td className="p-4 text-center text-muted-foreground">3 months</td>
                  <td className="p-4 text-center text-muted-foreground">6 months</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">12 months</td>
                  <td className="p-4 text-center text-muted-foreground">12 months</td>
                  <td className="p-4 text-center text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '2000ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Slack/Teams Support</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>

                {/* Enterprise Features */}
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '2050ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Compliance (HIPAA, SOC2, GDPR)</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '2100ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Custom Integrations</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{ animationDelay: '2150ms' }}>
                  <td className="p-4 font-medium text-foreground sticky left-0 bg-card/90 backdrop-blur-sm">Custom SLAs</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground bg-primary/5">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
