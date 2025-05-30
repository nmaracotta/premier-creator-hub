
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowDown, CheckCircle, TrendingUp, Users } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Hero: React.FC = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    creators: 0,
    avgTime: 0
  });

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
          revenue: Math.floor(2400000 * progress),
          creators: Math.floor(347 * progress),
          avgTime: Math.floor(21 * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters({ revenue: 2400000, creators: 347, avgTime: 21 });
        }
      }, stepDuration);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const formatRevenue = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="container-section relative z-10 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust Signal */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <div className="status-badge mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trusted by 347+ creators • $2.4M+ generated</span>
            </div>
          </MotionWrapper>
          
          {/* Main Headline */}
          <MotionWrapper animation="fade-in-up" delay={300}>
            <h1 className="heading-1 text-slate-900 mb-8">
              We Build Your
              <br />
              <span className="gradient-text">Monetization Engine</span>
            </h1>
          </MotionWrapper>
          
          {/* Value Proposition */}
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="body-large text-slate-600 mb-8 max-w-3xl mx-auto">
              The done-for-you agency that transforms creators into 
              <span className="font-bold text-slate-900"> 6-figure businesses</span>. 
              Complete system build, launch, and optimization in 21 days.
            </p>
          </MotionWrapper>
          
          {/* Key Benefits */}
          <MotionWrapper animation="fade-in-up" delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              {[
                "Full funnel build & launch",
                "Payment processing setup", 
                "Automated customer onboarding",
                "Ongoing optimization"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </MotionWrapper>
          
          {/* Primary CTA */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button className="btn-cta" asChild>
                <a href="#contact">
                  Book Strategy Call
                  <Calendar className="w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-center sm:text-left">
                <div className="text-sm text-slate-500 font-medium">Free 30-minute consultation</div>
                <div className="text-sm text-slate-500">No pitch • Just strategy</div>
              </div>
            </div>
          </MotionWrapper>
          
          {/* Live Metrics */}
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="agency-card p-8 text-center">
                <div className="metric-display mb-2 gradient-text">
                  {formatRevenue(counters.revenue)}+
                </div>
                <div className="text-slate-600 font-semibold">Revenue Generated</div>
              </div>
              
              <div className="agency-card p-8 text-center">
                <div className="metric-display mb-2 gradient-text">
                  {counters.creators}+
                </div>
                <div className="text-slate-600 font-semibold">Creators Scaled</div>
              </div>
              
              <div className="metric-display-card p-8 text-center">
                <div className="metric-display mb-2 gradient-text">
                  {counters.avgTime}
                </div>
                <div className="text-slate-600 font-semibold">Days to Launch</div>
              </div>
            </div>
          </MotionWrapper>
          
          {/* Scroll Indicator */}
          <MotionWrapper animation="fade-in" delay={800}>
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
