import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2, Pause } from "lucide-react";
import { useState, useRef } from "react";

import hotelAudio from "@/assets/audio/hotel-booking.mp3";
import medicalAudio from "@/assets/audio/medical-appointment.mp3";
import propertyAudio from "@/assets/audio/property-viewing.mp3";

export const Demo = () => {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const handlePlayAudio = (audioKey: string) => {
    // Stop all other audios
    Object.entries(audioRefs.current).forEach(([key, audio]) => {
      if (audio && key !== audioKey) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audioRefs.current[audioKey];
    if (audio) {
      if (playingAudio === audioKey) {
        audio.pause();
        setPlayingAudio(null);
      } else {
        audio.play();
        setPlayingAudio(audioKey);
      }
    }
  };

  const handleAudioEnded = (audioKey: string) => {
    if (playingAudio === audioKey) {
      setPlayingAudio(null);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Hidden audio elements */}
      <audio 
        ref={(el) => audioRefs.current['hotel'] = el}
        src={hotelAudio}
        onEnded={() => handleAudioEnded('hotel')}
      />
      <audio 
        ref={(el) => audioRefs.current['medical'] = el}
        src={medicalAudio}
        onEnded={() => handleAudioEnded('medical')}
      />
      <audio 
        ref={(el) => audioRefs.current['property'] = el}
        src={propertyAudio}
        onEnded={() => handleAudioEnded('property')}
      />

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
            <Card 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              onClick={() => handlePlayAudio('hotel')}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  playingAudio === 'hotel' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  {playingAudio === 'hotel' ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 text-primary" />
                  )}
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
                    {playingAudio === 'hotel' ? '▶ Now Playing' : 'Click to play • 98% accuracy'}
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 group cursor-pointer"
              onClick={() => handlePlayAudio('medical')}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  playingAudio === 'medical' ? 'bg-secondary text-secondary-foreground' : 'bg-secondary/10 group-hover:bg-secondary/20'
                }`}>
                  {playingAudio === 'medical' ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 text-secondary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-200">
                    Medical Appointment
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "I need to schedule a follow-up appointment with Dr. Smith."
                    Listen to how Ralvie handles sensitive medical scheduling with care and accuracy.
                  </p>
                  <div className="mt-3 text-sm text-secondary font-medium">
                    {playingAudio === 'medical' ? '▶ Now Playing' : 'Click to play • 97% accuracy'}
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group cursor-pointer"
              onClick={() => handlePlayAudio('property')}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  playingAudio === 'property' ? 'bg-accent text-accent-foreground' : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  {playingAudio === 'property' ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 text-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                    Property Viewing Request
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "I saw your listing for the 3-bedroom house on Oak Street. Can I schedule a viewing?"
                    Experience how Ralvie qualifies leads and schedules property viewings efficiently.
                  </p>
                  <div className="mt-3 text-sm text-accent font-medium">
                    {playingAudio === 'property' ? '▶ Now Playing' : 'Click to play • 99% accuracy'}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
