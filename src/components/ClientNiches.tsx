
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
    <section id="niches" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/5 to-transparent"></div>
      
      <div className="container-custom relative z-10 mx-auto">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-4 px-3 py-1 text-sm">
              Our Client Success
            </Badge>
            <h2 className="h2 mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl">Already Helping Creators Like You</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              No matter your niche, our proven system transforms your expertise into a profitable membership community that generates income while you sleep.
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={500}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6 mb-12 md:mb-16">
            {niches.map((niche, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 rounded-xl",
                  "bg-card shadow-sm hover:shadow-md transition-all duration-300",
                  "border border-border hover:border-accent/30",
                  "group"
                )}
              >
                <div className="p-2 md:p-3 rounded-lg bg-accent/5 mb-3 md:mb-4 group-hover:bg-accent/10 transition-colors">
                  <niche.icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-accent" />
                </div>
                <span className="font-medium text-base md:text-lg text-center">{niche.label}</span>
                <span className="text-xs text-muted-foreground mt-1">Community</span>
              </div>
            ))}
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={600}>
          <div className="flex justify-center">
            <div className="bg-accent/5 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <p className="font-medium text-accent text-sm md:text-base">
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
