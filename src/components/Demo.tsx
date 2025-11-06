import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2, Pause } from "lucide-react";
import { useState } from "react";

export const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Volume2 className="w-4 h-4" />
            Hear the difference
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Experience Human-Like Conversations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Listen to real call examples and see how Ralvie handles customer inquiries with natural, 
            context-aware responses that feel genuinely human.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video player */}
          <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse" />
              
              {/* Video container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/videos/ralvie-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Demo scenarios */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    Hotel Booking Inquiry
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "Hi, I'd like to book a room for this weekend. Do you have any availability?"
                    Hear how Ralvie checks availability, offers room types, and completes the booking seamlessly.
                  </p>
                  <div className="mt-3 text-sm text-primary font-medium">
                    Duration: 1:45 • 98% accuracy
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Play className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-200">
                    Medical Appointment
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "I need to reschedule my appointment with Dr. Smith."
                    Watch Ralvie handle patient information securely, check doctor availability, and confirm the new time.
                  </p>
                  <div className="mt-3 text-sm text-secondary font-medium">
                    Duration: 2:10 • HIPAA compliant
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Play className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                    Property Viewing Request
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "I saw your listing on Main Street. Can I schedule a viewing?"
                    See how Ralvie qualifies leads, books viewings, and collects necessary information.
                  </p>
                  <div className="mt-3 text-sm text-accent font-medium">
                    Duration: 1:55 • Lead captured
                  </div>
                </div>
              </div>
            </Card>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Try Live Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
