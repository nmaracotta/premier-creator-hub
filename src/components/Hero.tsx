
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Hero: React.FC = () => {
  console.log('Hero component loading...');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Hero component mounted');
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80">
      {/* Enhanced Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Dashboard Mockup */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl transform rotate-12 scale-75">
          <div className="p-8 space-y-4">
            <div className="h-6 bg-white/20 rounded w-1/3"></div>
            <div className="h-4 bg-white/15 rounded w-2/3"></div>
            <div className="h-4 bg-white/15 rounded w-1/2"></div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="h-20 bg-white/10 rounded-lg"></div>
              <div className="h-20 bg-white/10 rounded-lg"></div>
              <div className="h-20 bg-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Enhanced Main Headline */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.85] mb-8">
              We Build the Entire System
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">That Turns Your Audience</span>
              <br />
              Into Income
            </h1>
          </MotionWrapper>

          {/* Enhanced Subheadline with Better Typography */}
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 font-medium max-w-4xl mx-auto mb-12" style={{ lineHeight: '1.4', letterSpacing: '-0.02em' }}>
              Trusted by 500+ creators. $2.3M+ generated.
              <br />
              <span className="text-gray-600 font-normal">We handle funnels, automations, and payments — you just focus on content.</span>
            </p>
          </MotionWrapper>

          {/* Enhanced CTA Buttons */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                asChild
              >
                <a href="#contact">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              {/* Premium Watch Demo Button */}
              <Button 
                variant="outline" 
                className="group inline-flex items-center gap-3 px-8 py-5 border-2 border-gray-300 bg-white/90 backdrop-blur-sm hover:bg-gray-50 font-semibold rounded-2xl transition-all duration-300 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full group-hover:bg-blue-700 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </div>
          </MotionWrapper>

          {/* Enhanced Trust Strip with Icons */}
          <MotionWrapper animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-base font-semibold">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <div className="text-2xl">💰</div>
                <span className="text-gray-800">$2.3M+ Generated</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <div className="text-2xl">👥</div>
                <span className="text-gray-800">500+ Creators</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <div className="text-2xl">🚀</div>
                <span className="text-gray-800">14-Day Launch</span>
              </div>
            </div>
          </MotionWrapper>

        </div>
      </div>

      {/* Enhanced Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
