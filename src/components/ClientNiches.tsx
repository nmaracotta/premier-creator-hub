
import React from 'react';
import { Dumbbell, GraduationCap, Heart, Gamepad, Image, Music } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type NicheItem = {
  icon: React.ElementType;
  label: string;
};

const niches: NicheItem[] = [
  { icon: Dumbbell, label: 'Fitness' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Heart, label: 'Lifestyle' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Image, label: 'Fashion' },
  { icon: Music, label: 'Music' },
];

const ClientNiches: React.FC = () => {
  return (
    <section id="niches" className="py-16 bg-background relative overflow-hidden">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">Who We Work With</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We help creators across various niches turn their passion into recurring revenue through subscription communities.
          </p>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={500}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 mb-16">
            {niches.map((niche, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <niche.icon className="h-10 w-10 mb-3 text-accent" />
                <span className="font-medium">{niche.label}</span>
              </div>
            ))}
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={600}>
          <div className="text-center">
            <p className="font-medium text-accent">
              And many more creator niches!
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ClientNiches;
