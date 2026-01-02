import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Badge } from "@/components/ui/badge";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Choose the plan that fits your business. No hidden fees, no surprises. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default PricingPage;
