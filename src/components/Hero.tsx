
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Main Headline */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <h1 className={`display-xl mb-8 ${isVisible ? 'fade-in-up' : ''}`}>
              We Build the Entire System
              <br />
              <span className="gradient-text">That Turns Your Audience</span>
              <br />
              Into Income
            </h1>
          </MotionWrapper>

          {/* Subheadline */}
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className={`body-lg max-w-3xl mx-auto mb-12 ${isVisible ? 'fade-in-up-delay' : ''}`}>
              Built for creators. Designed for scale. Trusted by 500+.
              <br />
              We handle everything from funnels to payments while you focus on creating.
            </p>
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${isVisible ? 'fade-in-up-delay-2' : ''}`}>
              <Button 
                className="btn-primary w-full sm:w-auto"
                asChild
              >
                <a href="#contact">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </MotionWrapper>

          {/* Trust Indicators */}
          <MotionWrapper animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="font-medium">$2.3M+ Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="font-medium">500+ Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="font-medium">14-Day Launch</span>
              </div>
            </div>
          </MotionWrapper>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
