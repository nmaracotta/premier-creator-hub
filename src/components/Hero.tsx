
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, DollarSign, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper animation="fade-in-up" delay={300}>
            <p className="tag bg-accent/10 text-accent mb-4 md:mb-6">Premier Creator Agency</p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <h1 className="h1 mb-4 md:mb-6 px-2">
              We Help Creators Land Brand Deals & Maximize Revenue
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={500}>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Negotiating top dollar, ensuring timely payments, and providing 1-on-1 support to maximize your ROI. Your success is our business.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-6 md:mb-8 px-4">
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Brand Deal Negotiation</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Payment Protection</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                <span>ROI Maximization</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/5 rounded-lg p-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <span>1-on-1 Support</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button className="w-full sm:w-auto btn-hover" size="lg" asChild>
                <a href="https://cal.com/premiercreator/30min" target="_blank" rel="noopener noreferrer">
                  Start Maximizing Your Creator Income
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
