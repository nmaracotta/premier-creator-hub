
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Shield } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-accent/5 via-purple-50/50 to-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-md mb-6">
              Ready to Build Your
              <br />
              <span className="gradient-text">Monetization Engine?</span>
            </h2>
            
            <p className="body-lg mb-12 max-w-2xl mx-auto">
              We only work with 5 new creators each month to ensure exceptional results. 
              Book your free strategy call before all spots are filled.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                className="btn-primary w-full sm:w-auto text-xl py-6 px-12"
                asChild
              >
                <a href="#contact">
                  Book Strategy Call
                  <ArrowRight className="w-6 h-6" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl py-4 px-6 border">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">30-Min Strategy Session</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl py-4 px-6 border">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-medium">5 Spots Per Month</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl py-4 px-6 border">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
