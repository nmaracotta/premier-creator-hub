
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
            
            <h2 className="h3 mb-6">The $10K/Month Difference</h2>
            
            <p className="text-lg mb-4 font-medium">
              We've helped creators reach <span className="font-bold text-accent">$10,000+ in monthly recurring revenue</span> in as little as 30 days — even with small audiences.
            </p>
            
            <p className="mb-6">
              Unlike "gurus" selling courses, we build and run your entire membership business with you. Our unique revenue-sharing model means we're financially invested in making you money every single month.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">$10K+</h4>
                <p className="text-sm">Monthly revenue</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">28 Days</h4>
                <p className="text-sm">Average time to launch</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">80%</h4>
                <p className="text-sm">Member retention rate</p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default WhyUs;
