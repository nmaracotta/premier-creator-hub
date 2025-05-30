
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock, Users, Shield, Sparkles } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Card, CardContent } from '@/components/ui/card';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Premium dark background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <Card className="max-w-5xl mx-auto overflow-hidden glass border-white/20 rounded-3xl">
            <CardContent className="p-12 md:p-16 text-center text-slate-900 relative">
              
              {/* Floating sparkles */}
              <div className="absolute top-8 left-8">
                <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
              </div>
              <div className="absolute top-12 right-12">
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute bottom-8 left-16">
                <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                  Ready to Build Your
                  <br />
                  <span className="gradient-text">Revenue Empire?</span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  We only work with <span className="font-bold text-slate-900">5 creators per month</span> to ensure 
                  exceptional results. Book your free strategy call before all spots are filled.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
                  <Button 
                    className="btn-premium text-white w-full sm:w-auto min-w-[320px] h-20 text-xl font-black rounded-2xl" 
                    asChild
                  >
                    <a href="#contact" className="group relative z-10">
                      Book Your Strategy Call
                      <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </Button>
                  
                  <div className="text-center">
                    <div className="text-slate-500 text-sm font-semibold">Free 30-minute consultation</div>
                    <div className="text-slate-500 text-sm">No commitment • No pitch</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { icon: Clock, text: "30-Minute Deep Dive Session", color: "text-blue-600" },
                    { icon: Users, text: "Only 5 Spots This Month", color: "text-purple-600" },
                    { icon: Shield, text: "Revenue Guarantee Included", color: "text-green-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 glass-dark rounded-2xl py-6 px-6 border border-slate-200/20">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
