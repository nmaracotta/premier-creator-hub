
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, DollarSign } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Trust indicator */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/5 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">Trusted by 500+ creators generating $10K+/mo</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={300}>
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="text-slate-900">Turn Your Audience Into</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-blue-600 to-accent bg-clip-text text-transparent">
                Predictable Revenue
              </span>
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="text-center text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              The complete membership platform for creators who are ready to build serious, recurring income. We handle the tech, you focus on creating.
            </p>
          </MotionWrapper>
          
          {/* Premium CTA section */}
          <MotionWrapper animation="fade-in-up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 h-14 text-lg font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transform hover:scale-[1.02] transition-all duration-300" 
                size="lg" 
                asChild
              >
                <a href="#contact" className="group">
                  Start Building Your Platform
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-slate-200 hover:border-accent hover:bg-accent/5 px-8 py-4 h-14 text-lg font-semibold rounded-xl transition-all duration-300 group" 
                size="lg"
                asChild
              >
                <a href="#process" className="flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  See How It Works
                </a>
              </Button>
            </div>
          </MotionWrapper>
          
          {/* Stats row */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">$2.3M+</div>
                <div className="text-slate-600 text-sm">Generated for creators</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-slate-600 text-sm">Active creators</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">87%</div>
                <div className="text-slate-600 text-sm">Reach $10K+/month</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
