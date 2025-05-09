
import React from 'react';
import { Award } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-accent/5">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className={cn(
            "max-w-3xl mx-auto rounded-2xl bg-white dark:bg-black/20 p-8 md:p-12",
            "shadow-sm relative overflow-hidden text-center"
          )}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            
            <Award className="w-12 h-12 text-accent mx-auto mb-6" />
            
            <h2 className="h3 mb-6">Why Choose Us?</h2>
            
            <p className="text-lg mb-4">
              We've helped creators achieve <span className="font-bold text-accent">$10k+/month in MRR</span> through 
              carefully designed community subscriptions.
            </p>
            
            <p className="mb-6">
              Our approach isn't cookie-cutter—we build each setup to match your unique brand, audience, and content style. 
              We're invested in your long-term success, which is why we work on a performance-based model.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">Proven</h4>
                <p className="text-sm">Track record of success</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">Custom</h4>
                <p className="text-sm">Tailored to your brand</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">Aligned</h4>
                <p className="text-sm">We win when you win</p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default WhyUs;
