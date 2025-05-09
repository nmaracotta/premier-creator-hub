
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, Rocket } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="container-custom relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <h1 className="h1 mb-4 md:mb-6 px-2">
              We Turn Creators into Full-Time Entrepreneurs.
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={500}>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              We build and scale your Whop community so you can earn recurring income while focusing on what you do best—creating.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto mb-6 md:mb-8 px-4">
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <Users className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Community Building</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Recurring Revenue</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <Rocket className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Growth Strategy</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button className="w-full sm:w-auto btn-hover" size="lg" asChild>
                <a href="#contact" className="group">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
