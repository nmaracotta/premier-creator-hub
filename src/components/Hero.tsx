
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Premium subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust badge */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <div className="inline-flex items-center gap-3 bg-slate-50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200 mb-8">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-slate-700">Trusted by 500+ creators • $2.3M+ generated</span>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={300}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              <span className="text-slate-900">We Build Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Monetization Engine
              </span>
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              The done-for-you agency that transforms creators into 6-figure businesses. 
              We handle the tech, systems, and strategy—you focus on creating.
            </p>
          </MotionWrapper>
          
          {/* Primary CTA */}
          <MotionWrapper animation="fade-in-up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 h-16 text-lg font-bold rounded-xl shadow-2xl shadow-slate-900/25 hover:shadow-3xl hover:shadow-slate-900/40 transform hover:scale-[1.02] transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="#contact" className="group">
                  Book Strategy Call
                  <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              
              <div className="text-sm text-slate-500 font-medium">
                Free consultation • No commitment required
              </div>
            </div>
          </MotionWrapper>
          
          {/* Key promises */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">14 Days</div>
                <div className="text-slate-600 font-medium">Full system build</div>
              </div>
              <div className="text-center p-6">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">$10K+</div>
                <div className="text-slate-600 font-medium">Average first month</div>
              </div>
              <div className="text-center p-6">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Zero</div>
                <div className="text-slate-600 font-medium">Technical work required</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
