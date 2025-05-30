
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      {/* Simplified Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Headline */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-6">
              We Build the Entire System
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                That Turns Your Audience
              </span>
              <br />
              Into Income
            </h1>
          </MotionWrapper>

          {/* Subheadline */}
          <MotionWrapper animation="fade-in-up" delay={400}>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Trusted by 500+ creators. $2.3M+ generated.
              <br />
              <span className="text-gray-500">We handle funnels, automations, and payments — you just focus on content.</span>
            </p>
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                asChild
              >
                <a href="#contact">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="group inline-flex items-center gap-3 px-6 py-4 border-2 border-gray-200 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 text-lg w-full sm:w-auto"
              >
                <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full">
                  <Play className="w-3 h-3 ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </div>
          </MotionWrapper>

          {/* Trust Strip */}
          <MotionWrapper animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-medium">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100">
                <span className="text-xl">💰</span>
                <span className="text-gray-700">$2.3M+ Generated</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100">
                <span className="text-xl">👥</span>
                <span className="text-gray-700">500+ Creators</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100">
                <span className="text-xl">🚀</span>
                <span className="text-gray-700">14-Day Launch</span>
              </div>
            </div>
          </MotionWrapper>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
