import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "You can be up and running in under 60 seconds. During your free trial, we'll configure your call flows, departments, and knowledge base at no cost.",
  },
  {
    question: "Does it really sound human?",
    answer: "Yes! Ralvie uses advanced voice cloning technology that matches your brand's tone. Most callers can't distinguish it from a human agent.",
  },
  {
    question: "What happens if the AI can't handle a call?",
    answer: "Ralvie intelligently escalates calls to your team based on rules you define. You maintain full control over when human intervention is needed.",
  },
  {
    question: "Can it integrate with my existing systems?",
    answer: "Absolutely. Ralvie integrates with popular calendar systems, CRMs, and booking platforms. Our team will help set up integrations during your trial.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible usage-based pricing. During your free trial, you'll get full access to all features with no credit card required. Contact us for custom enterprise pricing.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use enterprise-grade encryption and comply with GDPR, HIPAA, and other major data protection regulations. Your data is never shared or used for training.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Ralvie AI Frontdesk
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
