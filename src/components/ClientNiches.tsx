
import React from 'react';
import { Dumbbell, GraduationCap, Heart, Gamepad, Image, Music } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
    <section id="niches" className="py-32 bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/5 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-1.5 text-base">
              Our Client Success
            </Badge>
            <h2 className="h2 mb-8 text-4xl md:text-5xl lg:text-6xl">Already Helping Creators Like You</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              No matter your niche, our proven system transforms your expertise into a profitable membership community that generates income while you sleep.
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={500}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {niches.map((niche, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center justify-center p-8 rounded-xl",
                  "bg-card shadow-sm hover:shadow-md transition-all duration-300",
                  "border border-border hover:border-accent/30",
                  "group"
                )}
              >
                <div className="p-4 rounded-lg bg-accent/5 mb-6 group-hover:bg-accent/10 transition-colors">
                  <niche.icon className="h-10 w-10 text-accent" />
                </div>
                <span className="font-medium text-xl text-center">{niche.label}</span>
                <span className="text-sm text-muted-foreground mt-2">Community</span>
              </div>
            ))}
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={600}>
          <div className="flex justify-center">
            <div className="bg-accent/5 px-8 py-4 rounded-full">
              <p className="font-medium text-accent text-lg">
                Your niche belongs here too — let's make it profitable.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ClientNiches;
