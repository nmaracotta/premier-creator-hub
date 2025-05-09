
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className={cn(
            "max-w-4xl mx-auto text-center",
            "py-12 px-6 md:px-12 rounded-3xl",
            "bg-gradient-to-br from-accent to-accent/80 text-white"
          )}>
            <h2 className="h2 mb-6">Ready to Earn Monthly Income From Your Content?</h2>
            
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Schedule a free strategy call today and we'll show you how to turn your knowledge and creativity into a reliable income stream.
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-accent bg-white hover:bg-white/90 hover:text-accent border-white group"
              asChild
            >
              <a href="#contact">
                Book a Free Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
