import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { useState } from "react";
import roiGraphic from "@/assets/roi-graphic.jpg";

export const ROICalculator = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded via external script
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/ralvie-ai/30min?hide_event_type_details=1&hide_gdpr_banner=1' 
      });
    }
    return false;
  };
  const [calls, setCalls] = useState(500);
  const [avgCallTime, setAvgCallTime] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [missedCallRate, setMissedCallRate] = useState(30);

  const calculateROI = () => {
    const monthlyHours = (calls * avgCallTime) / 60;
    const currentCost = monthlyHours * hourlyRate;
    const ralvieCost = 299; // Base plan
    const missedCallsRecovered = calls * (missedCallRate / 100);
    const revenuePerCall = 100; // Average booking value
    const additionalRevenue = missedCallsRecovered * revenuePerCall;
    const monthlySavings = currentCost - ralvieCost + additionalRevenue;
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - (ralvieCost * 12)) / (ralvieCost * 12)) * 100;

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      hoursRecovered: Math.round(monthlyHours),
      missedCallsRecovered: Math.round(missedCallsRecovered)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Calculator className="w-4 h-4" />
            Calculate Your Savings
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            See Your Return on Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Calculate how much time and money you'll save with Ralvie AI handling your calls
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator inputs */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in hover:border-primary/40 transition-all duration-500" style={{ animationDelay: '300ms' }}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="calls" className="text-foreground flex items-center justify-between">
                  <span>Monthly Calls</span>
                  <span className="text-primary font-semibold">{calls}</span>
                </Label>
                <Input
                  id="calls"
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={calls}
                  onChange={(e) => setCalls(Number(e.target.value))}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avgCallTime" className="text-foreground flex items-center justify-between">
                  <span>Average Call Duration (minutes)</span>
                  <span className="text-primary font-semibold">{avgCallTime}</span>
                </Label>
                <Input
                  id="avgCallTime"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={avgCallTime}
                  onChange={(e) => setAvgCallTime(Number(e.target.value))}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate" className="text-foreground flex items-center justify-between">
                  <span>Staff Hourly Rate ($)</span>
                  <span className="text-primary font-semibold">${hourlyRate}</span>
                </Label>
                <Input
                  id="hourlyRate"
                  type="range"
                  min="15"
                  max="75"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="missedCallRate" className="text-foreground flex items-center justify-between">
                  <span>Missed Call Rate (%)</span>
                  <span className="text-primary font-semibold">{missedCallRate}%</span>
                </Label>
                <Input
                  id="missedCallRate"
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={missedCallRate}
                  onChange={(e) => setMissedCallRate(Number(e.target.value))}
                  className="cursor-pointer"
                />
              </div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mt-6">
                <img 
                  src={roiGraphic} 
                  alt="ROI Growth Chart" 
                  className="w-full h-48 object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-1">Monthly Savings</p>
                  <h3 className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    ${results.monthlySavings.toLocaleString()}
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/30 hover:border-secondary/50 transition-all duration-500 hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors duration-300">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-1">Annual Savings</p>
                  <h3 className="text-4xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    ${results.annualSavings.toLocaleString()}
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 hover:border-accent/50 transition-all duration-500 hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-1">Hours Recovered Monthly</p>
                  <h3 className="text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {results.hoursRecovered}h
                  </h3>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <p className="text-sm text-muted-foreground mb-2">ROI</p>
                <p className="text-2xl font-bold text-primary">{results.roi}%</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <p className="text-sm text-muted-foreground mb-2">Calls Recovered</p>
                <p className="text-2xl font-bold text-primary">{results.missedCallsRecovered}</p>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={openCalendly}
            >
              Start Saving Today - Free Setup
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              14-day free trial • No credit card required • Join 2,500+ businesses saving with Ralvie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
