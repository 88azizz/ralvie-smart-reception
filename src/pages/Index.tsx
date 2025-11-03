import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Comparison } from "@/components/Comparison";
import { ROICalculator } from "@/components/ROICalculator";
import { Pricing } from "@/components/Pricing";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Demo />
      <div id="features">
        <Features />
      </div>
      <HowItWorks />
      <div id="industries">
        <UseCases />
      </div>
      <Comparison />
      <ROICalculator />
      <Pricing />
      <div id="testimonials">
        <SocialProof />
      </div>
      <CTA />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
