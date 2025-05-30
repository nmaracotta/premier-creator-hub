
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Sparkles, TrendingUp, Users, DollarSign } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Hero: React.FC = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    creators: 0,
    avgTime: 0
  });

  // Animated counters
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          revenue: Math.floor(2300000 * progress),
          creators: Math.floor(500 * progress),
          avgTime: Math.floor(28 * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters({ revenue: 2300000, creators: 500, avgTime: 28 });
        }
      }, stepDuration);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatRevenue = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl float-delayed-2"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Premium status badge */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 border border-blue-200/50 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                #1 Creator Monetization Agency • Trusted by 500+ Creators
              </span>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={300}>
            <div className="text-reveal mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-slate-900">
                <span>We Build Your</span>
                <br />
                <span className="gradient-text">Monetization</span>
                <br />
                <span className="gradient-text">Engine</span>
              </h1>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              The premium done-for-you agency that transforms creators into 
              <span className="font-bold text-slate-900"> 6-figure businesses</span>. 
              We handle the tech, you focus on creating.
            </p>
          </MotionWrapper>
          
          {/* Premium CTA buttons */}
          <MotionWrapper animation="fade-in-up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                className="btn-premium text-white w-full sm:w-auto min-w-[280px] h-16" 
                asChild
              >
                <a href="#contact" className="group relative z-10">
                  Book Strategy Call
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </Button>
              
              <div className="text-center sm:text-left">
                <div className="text-sm text-slate-500 font-medium">Free consultation</div>
                <div className="text-sm text-slate-500">No commitment required</div>
              </div>
            </div>
          </MotionWrapper>
          
          {/* Live stats counters */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="premium-card p-8 text-center">
                <div className="flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                  <div className="text-3xl md:text-4xl font-black text-slate-900">
                    {formatRevenue(counters.revenue)}+
                  </div>
                </div>
                <div className="text-slate-600 font-semibold">Revenue Generated</div>
              </div>
              
              <div className="premium-card p-8 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <div className="text-3xl md:text-4xl font-black text-slate-900">
                    {counters.creators}+
                  </div>
                </div>
                <div className="text-slate-600 font-semibold">Creators Scaled</div>
              </div>
              
              <div className="premium-card p-8 text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
                  <div className="text-3xl md:text-4xl font-black text-slate-900">
                    {counters.avgTime}
                  </div>
                </div>
                <div className="text-slate-600 font-semibold">Days to $10K+</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
