
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, DollarSign, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToServices = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const ref = scrollDownRef.current;
    if (ref) {
      ref.addEventListener('click', scrollToServices);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('click', scrollToServices);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper animation="fade-in-up" delay={300}>
            <p className="tag bg-accent/10 text-accent mb-6">Premier Creator Agency</p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <h1 className="h1 mb-6">
              We Help Creators Land Brand Deals & Maximize Revenue
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={500}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Negotiating top dollar, ensuring timely payments, and providing 1-on-1 support to maximize your ROI. Your success is our business.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              <div className="flex items-center gap-2 text-left">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Brand Deal Negotiation</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <DollarSign className="w-5 h-5 text-accent" />
                <span>Payment Protection</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span>ROI Maximization</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>1-on-1 Support</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="w-full sm:w-auto btn-hover" size="lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
      
      <div 
        ref={scrollDownRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
      >
        <ChevronDown className="w-10 h-10 text-accent/70" />
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
