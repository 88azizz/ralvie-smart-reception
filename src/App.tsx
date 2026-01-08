import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HospitalityCaseStudy from "./pages/case-studies/Hospitality";
import HealthcareCaseStudy from "./pages/case-studies/Healthcare";
import RealEstateCaseStudy from "./pages/case-studies/RealEstate";
import EducationCaseStudy from "./pages/case-studies/Education";
import Resources from "./pages/Resources";
import PricingPage from "./pages/PricingPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import BlogPost from "./pages/BlogPost";
import AIVoice from "./pages/features/AIVoice";
import Scheduling from "./pages/features/Scheduling";
import Analytics from "./pages/features/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/features/ai-voice" element={<AIVoice />} />
          <Route path="/features/scheduling" element={<Scheduling />} />
          <Route path="/features/analytics" element={<Analytics />} />
          <Route path="/case-studies/hospitality" element={<HospitalityCaseStudy />} />
          <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
          <Route path="/case-studies/real-estate" element={<RealEstateCaseStudy />} />
          <Route path="/case-studies/education" element={<EducationCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
